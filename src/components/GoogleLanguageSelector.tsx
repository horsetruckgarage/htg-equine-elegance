import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Compact language selector that drives Google Translate
// Works alongside <GoogleTranslate /> which loads the hidden widget

const LANGUAGES = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
] as const;

const LOADER_MIN_MS = 700;

const getGoogleSelect = (): HTMLSelectElement | null => {
  return document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
};

const getCookie = (name: string) =>
  document.cookie.split("; ").find((row) => row.startsWith(name + "="))?.split("=")[1];

const setCookie = (name: string, value: string) => {
  try {
    const domain = window.location.hostname;
    // set with and without domain for reliability
    document.cookie = `${name}=${value}; path=/; max-age=31536000`;
    document.cookie = `${name}=${value}; path=/; domain=${domain}; max-age=31536000`;
  } catch {}
};

export default function GoogleLanguageSelector() {
  const [active, setActive] = useState<(typeof LANGUAGES)[number]["code"]>("fr");
  const [loading, setLoading] = useState(false);
  const startTimeRef = useRef<number | null>(null);

  const current = useMemo(() => LANGUAGES.find((l) => l.code === active), [active]);

  const hideLoaderSmoothly = useCallback(() => {
    const now = Date.now();
    const start = startTimeRef.current ?? now;
    const elapsed = now - start;
    const remaining = Math.max(0, LOADER_MIN_MS - elapsed);
    window.setTimeout(() => setLoading(false), remaining);
  }, []);

  const triggerTranslate = useCallback((lang: string, tries = 0) => {
    const select = getGoogleSelect();
    if (!select) {
      console.log(`[GT] .goog-te-combo not found (try ${tries})`);
      if ((window as any).googleTranslateElementInit) {
        try { (window as any).googleTranslateElementInit(); } catch {}
      }
      if (tries < 60) {
        window.setTimeout(() => triggerTranslate(lang, tries + 1), 200);
      } else {
        // give up: hide loader
        setLoading(false);
      }
      return;
    }

    try {
      console.log("[GT] Found combo, switching to:", lang);
      select.value = lang;
      select.dispatchEvent(new Event("change"));
      // allow DOM to update then hide
      window.setTimeout(hideLoaderSmoothly, 300);
    } catch (e) {
      console.warn("[GT] Error switching language", e);
      hideLoaderSmoothly();
    }
  }, [hideLoaderSmoothly]);

  const onChoose = useCallback((code: (typeof LANGUAGES)[number]["code"]) => {
    setActive(code);
    setLoading(true);
    startTimeRef.current = Date.now();

    // Persist selection for SPA route changes and reloads
    try { localStorage.setItem("gt_lang", code); } catch {}
    if (code === "fr") {
      setCookie("googtrans", "/fr/fr");
      setCookie("googtrans", "/auto/fr");
    } else {
      setCookie("googtrans", `/fr/${code}`);
      setCookie("googtrans", `/auto/${code}`);
    }

    // Ensure widget is initialized if needed
    if (!getGoogleSelect() && (window as any).googleTranslateElementInit) {
      (window as any).googleTranslateElementInit();
    }
    triggerTranslate(code);
  }, [triggerTranslate]);

  const location = useLocation();

  // Restore language on first mount and apply translation if needed
  useEffect(() => {
    let saved: string | null = null;
    try { saved = localStorage.getItem("gt_lang"); } catch {}
    if (!saved) {
      const c = getCookie("googtrans");
      if (c) {
        try {
          const parts = decodeURIComponent(c).split("/");
          saved = parts[parts.length - 1] || "fr";
        } catch { /* noop */ }
      }
    }
    if (saved) {
      setActive(saved as any);
      if (saved !== "fr") {
        setLoading(true);
        startTimeRef.current = Date.now();
        triggerTranslate(saved);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Re-apply translation on SPA route changes (Google widget misses new DOM)
  useEffect(() => {
    if (active && active !== "fr") {
      triggerTranslate(active);
    }
  }, [active, location.pathname, triggerTranslate]);

  return (
    <>
      {/* Loader overlay */}
      {loading && (
        <div className="fixed inset-0 z-[80] bg-background/80 backdrop-blur-sm flex items-center justify-center">
          <img
            src="/lovable-uploads/a0f80a95-a142-4cef-ae8c-1b305dc07a0e.png"
            alt="HTG - Chargement de la traduction"
            className="max-w-[150px] h-auto"
            loading="eager"
          />
        </div>
      )}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-border hover:bg-muted/70"
            aria-label={`Langue: ${current?.label || ""}`}
          >
            <span
              className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-muted text-base"
              aria-hidden
            >
              {current?.flag}
            </span>
            <span className="hidden sm:inline font-medium">{current?.label}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="z-[90] bg-popover border border-border shadow-luxury min-w-[180px]">
          {LANGUAGES.map((l) => (
            <DropdownMenuItem
              key={l.code}
              onClick={() => onChoose(l.code)}
              className={active === l.code ? "bg-muted/60 font-medium" : undefined}
              role="menuitemradio"
              aria-checked={active === l.code}
            >
              <span
                className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-muted mr-2"
                aria-hidden
              >
                {l.flag}
              </span>
              <span>{l.label}</span>
              <Check
                className={`ml-auto h-4 w-4 ${active === l.code ? "text-primary opacity-100" : "opacity-0"}`}
                aria-hidden
              />
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
