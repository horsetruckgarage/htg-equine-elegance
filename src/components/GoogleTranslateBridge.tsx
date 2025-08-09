import React, { useEffect } from "react";

// Loads Google Translate widget (no API key) and exposes a bridge to switch languages
// Usage: (window as any).__setGoogleTranslateLanguage('en' | 'fr' | 'es' | 'de')
const GoogleTranslateBridge: React.FC = () => {
  useEffect(() => {
    // Create hidden container for the Google widget
    let container = document.getElementById("google_translate_element");
    if (!container) {
      container = document.createElement("div");
      container.id = "google_translate_element";
      container.style.display = "none"; // keep the native widget hidden
      document.body.appendChild(container);
    }

    // Init function required by Google script
    (window as any).googleTranslateElementInit = () => {
      try {
        // @ts-ignore - global from the script
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "fr",
            autoDisplay: false,
            includedLanguages: "fr,en,es,de",
            layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      } catch (e) {
        // no-op
      }
    };

    // Helper: set cookie for Google Translate
    const setCookie = (name: string, value: string, days: number, domain?: string) => {
      const expires = new Date(Date.now() + days * 864e5).toUTCString();
      let cookie = `${name}=${value}; expires=${expires}; path=/`;
      if (domain) cookie += `; domain=${domain}`;
      document.cookie = cookie;
    };

    // Wait for the Google combo to be available (avoid page reload flicker)
    const waitForCombo = (timeout = 6000): Promise<HTMLSelectElement | null> => {
      const start = performance.now();
      return new Promise((resolve) => {
        const check = () => {
          const el = document.querySelector<HTMLSelectElement>(".goog-te-combo");
          if (el) return resolve(el);
          if (performance.now() - start >= timeout) return resolve(null);
          requestAnimationFrame(check);
        };
        check();
      });
    };

    const applyLanguage = (select: HTMLSelectElement, lang: "fr" | "en" | "es" | "de") => {
      if (lang === "fr") {
        try {
          setCookie("googtrans", "/fr/fr", 365);
          setCookie("googtrans", "/fr/fr", 365, window.location.hostname);
        } catch {}
        select.value = ""; // empty restores original language
        select.dispatchEvent(new Event("change"));
        return;
      }
      try {
        setCookie("googtrans", `/fr/${lang}`, 365);
        setCookie("googtrans", `/fr/${lang}`, 365, window.location.hostname);
      } catch {}
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    };

    // Expose a function to programmatically switch language without full reload
    (window as any).__setGoogleTranslateLanguage = async (lang: "fr" | "en" | "es" | "de") => {
      // ensure script is requested (in case this runs very early)
      const SCRIPT_ID = "google-translate-script";
      if (!document.getElementById(SCRIPT_ID)) {
        const s = document.createElement("script");
        s.id = SCRIPT_ID;
        s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        s.async = true;
        document.body.appendChild(s);
      }

      const select = await waitForCombo(6000);
      if (select) {
        applyLanguage(select, lang);
      } else {
        // Fallback: set cookie so when the widget finishes loading it picks the desired language
        try {
          const cookieVal = lang === "fr" ? "/fr/fr" : `/fr/${lang}`;
          setCookie("googtrans", cookieVal, 365);
          setCookie("googtrans", cookieVal, 365, window.location.hostname);
        } catch {}
        // Try once more shortly after in case the combo appears
        setTimeout(async () => {
          const later = await waitForCombo(6000);
          if (later) applyLanguage(later, lang);
        }, 50);
      }
    };

    // Inject script once
    const SCRIPT_ID = "google-translate-script";
    if (!document.getElementById(SCRIPT_ID)) {
      const s = document.createElement("script");
      s.id = SCRIPT_ID;
      s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return null; // hidden bridge
};

export default GoogleTranslateBridge;
