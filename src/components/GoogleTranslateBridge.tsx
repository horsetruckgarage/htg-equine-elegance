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

    // Expose a function to programmatically switch language and signal loading state
    (window as any).__setGoogleTranslateLanguage = (lang: "fr" | "en" | "es" | "de") => {
      const dispatchStart = () => {
        window.dispatchEvent(new CustomEvent("gtg:loadingstart", { detail: { targetLang: lang } }));
      };
      const dispatchEnd = () => {
        window.dispatchEvent(new CustomEvent("gtg:loadingend", { detail: { targetLang: lang } }));
      };

      const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");

      // Helper to monitor DOM quiet period + application state, then end loading
      const monitorCompletion = () => {
        let lastChange = Date.now();
        const observer = new MutationObserver(() => {
          lastChange = Date.now();
        });
        try {
          observer.observe(document.body, { childList: true, subtree: true, characterData: true });
        } catch {}

        const isApplied = () => {
          const html = document.documentElement;
          const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
          const val = combo?.value ?? "";
          const hasTranslatedClass = html.classList.contains("translated-ltr") || html.classList.contains("translated-rtl");
          if (lang === "fr") return (val === "" || val === "fr") && !hasTranslatedClass;
          return val === lang && hasTranslatedClass;
        };

        const interval = window.setInterval(() => {
          if (isApplied() && Date.now() - lastChange > 600) {
            cleanup();
            dispatchEnd();
          }
        }, 150);

        const safety = window.setTimeout(() => {
          cleanup();
          dispatchEnd();
        }, 12000);

        const cleanup = () => {
          try { observer.disconnect(); } catch {}
          try { window.clearInterval(interval); } catch {}
          try { window.clearTimeout(safety); } catch {}
        };
      };

      dispatchStart();

      if (lang === "fr") {
        // Reset to original by clearing cookie and resetting the select
        try {
          setCookie("googtrans", "/fr/fr", 365);
          setCookie("googtrans", "/fr/fr", 365, window.location.hostname);
        } catch {}
        if (select) {
          select.value = ""; // empty restores original language
          select.dispatchEvent(new Event("change"));
          monitorCompletion();
          return;
        }
        // If widget isn't ready, fallback to reload
        window.location.reload();
        return;
      }

      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
        monitorCompletion();
      } else {
        try {
          setCookie("googtrans", `/fr/${lang}`, 365);
          setCookie("googtrans", `/fr/${lang}`, 365, window.location.hostname);
        } catch {}
        // Fallback: reload if widget isn't present yet
        window.location.reload();
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
