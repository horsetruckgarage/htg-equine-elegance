import { useCallback, useEffect, useRef, useState } from "react";

// Compact custom Google Translate menu (FR/EN/ES/DE) with a small loader overlay
// Relies on the hidden Google widget container (#google_translate_element) already on the page

const LANGUAGES = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
] as const;

const flagCode = (code: string) => (code === "en" ? "gb" : code);

const LOADER_MIN_MS = 700; // minimal display to smooth the flash

const CustomTranslateMenu = () => {
  const [active, setActive] = useState<string>("fr");
  const [loading, setLoading] = useState(false);
  const loadingStartedAt = useRef<number | null>(null);

  // Try to find the Google select element
  const getGoogleSelect = () =>
    document.querySelector(
      "#google_translate_element select.goog-te-combo"
    ) as HTMLSelectElement | null;

  const showLoader = () => {
    loadingStartedAt.current = Date.now();
    setLoading(true);
  };

  const hideLoaderSmoothly = () => {
    const started = loadingStartedAt.current ?? Date.now();
    const elapsed = Date.now() - started;
    const remaining = Math.max(0, LOADER_MIN_MS - elapsed);
    window.setTimeout(() => setLoading(false), remaining);
  };

  const triggerGoogleTranslate = useCallback((lang: string) => {
    const select = getGoogleSelect();
    if (!select) {
      // If script/widget not yet ready, retry shortly
      showLoader();
      const maxTries = 10;
      let tries = 0;
      const iv = window.setInterval(() => {
        const sel = getGoogleSelect();
        tries++;
        if (sel) {
          window.clearInterval(iv);
          sel.value = lang;
          sel.dispatchEvent(new Event("change"));
          hideLoaderSmoothly();
        } else if (tries >= maxTries) {
          window.clearInterval(iv);
          hideLoaderSmoothly();
        }
      }, 150);
      return;
    }

    showLoader();
    select.value = lang;
    select.dispatchEvent(new Event("change"));
    hideLoaderSmoothly();
  }, []);

  const onChoose = (code: string) => {
    setActive(code);
    triggerGoogleTranslate(code);
  };

  // Ensure default language is applied once (fr)
  useEffect(() => {
    const select = getGoogleSelect();
    if (select && select.value !== "fr") {
      select.value = "fr";
      select.dispatchEvent(new Event("change"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Loader overlay */}
      {loading && (
        <div id="loader" className="fixed inset-0 z-[70] flex items-center justify-center">
          <img
            src="/lovable-uploads/a0f80a95-a142-4cef-ae8c-1b305dc07a0e.png"
            alt="HTG - Chargement de la traduction"
            className="max-w-[150px] h-auto"
            loading="eager"
          />
        </div>
      )}

      {/* Floating compact menu */}
      <nav
        id="custom_translate"
        aria-label="Sélecteur de langue (Google Translate)"
        className="fixed top-3 right-3 z-[65] flex flex-wrap gap-2"
      >
        {LANGUAGES.map((l) => (
          <a
            key={l.code}
            href="#"
            data-lang={l.code}
            onClick={(e) => {
              e.preventDefault();
              onChoose(l.code);
            }}
            aria-current={active === l.code ? "true" : undefined}
            aria-label={`Traduire en ${l.label}`}
          >
            <img
              src={`https://flagcdn.com/${flagCode(l.code)}.svg`}
              alt={l.label}
              width={24}
              height={16}
              loading="lazy"
            />
            <span>{l.label}</span>
          </a>
        ))}
      </nav>
    </>
  );
};

export default CustomTranslateMenu;
