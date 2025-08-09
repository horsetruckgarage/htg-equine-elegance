import { useCallback, useMemo, useRef, useState } from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    // Ensure widget is initialized if needed
    if (!getGoogleSelect() && (window as any).googleTranslateElementInit) {
      (window as any).googleTranslateElementInit();
    }
    triggerTranslate(code);
  }, [triggerTranslate]);

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
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <span className="text-base" aria-hidden>
              {current?.flag}
            </span>
            <span className="hidden sm:inline font-medium">{current?.label}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="z-[75]">
          {LANGUAGES.map((l) => (
            <DropdownMenuItem
              key={l.code}
              onClick={() => onChoose(l.code)}
              className={active === l.code ? "font-medium" : undefined}
            >
              <span className="mr-2" aria-hidden>
                {l.flag}
              </span>
              {l.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
