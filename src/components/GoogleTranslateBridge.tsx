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

    // Loading state management for overlay visibility until translation settles
    let loadingLang: "fr" | "en" | "es" | "de" | null = null;
    let loadingIdleTimer: number | undefined;
    let loadingMaxTimer: number | undefined;

    const scheduleMaybeFinish = () => {
      if (!loadingLang) return;
      if (loadingIdleTimer) window.clearTimeout(loadingIdleTimer);
      loadingIdleTimer = window.setTimeout(() => {
        try {
          const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
          const expected = loadingLang === "fr" ? "" : loadingLang;
          if (select && select.value === expected) {
            window.dispatchEvent(new Event("gtg:loadingend"));
            loadingLang = null;
            if (loadingMaxTimer) window.clearTimeout(loadingMaxTimer);
            loadingMaxTimer = undefined;
          }
        } catch {}
      }, 400);
    };

    // Expose a function to programmatically switch language without reloading when possible
    (window as any).__setGoogleTranslateLanguage = (lang: "fr" | "en" | "es" | "de") => {
      (window as any).__gtgCurrentLang = lang; // remember current target language
      window.dispatchEvent(new Event("gtg:loadingstart"));
      loadingLang = lang;
      if (loadingIdleTimer) window.clearTimeout(loadingIdleTimer);
      if (loadingMaxTimer) window.clearTimeout(loadingMaxTimer);
      loadingMaxTimer = window.setTimeout(() => {
        // Fallback safety to avoid locking the UI
        window.dispatchEvent(new Event("gtg:loadingend"));
        loadingLang = null;
      }, 12000);
      const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (lang === "fr") {
        // Reset to original by clearing cookie and resetting the select
        try {
          setCookie("googtrans", "/fr/fr", 365);
          setCookie("googtrans", "/fr/fr", 365, window.location.hostname);
        } catch {}
        if (select) {
          select.value = ""; // empty restores original language
          select.dispatchEvent(new Event("change"));
          scheduleMaybeFinish();
          return;
        }
        window.location.reload();
        return;
      }

      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
        scheduleMaybeFinish();
      } else {
        try {
          setCookie("googtrans", `/fr/${lang}`, 365);
          setCookie("googtrans", `/fr/${lang}`, 365, window.location.hostname);
        } catch {}
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

    // Force-hide any banner/tooltips injected after init
    const hideGoogleToolbar = () => {
      const banner = document.querySelector<HTMLIFrameElement>("iframe.goog-te-banner-frame");
      if (banner) (banner.style.display = "none");
      const tooltip = document.getElementById("goog-gt-tt");
      if (tooltip) (tooltip.style.display = "none");
      document.body.style.top = "0px";
    };
    hideGoogleToolbar();

    const mo = new MutationObserver(() => hideGoogleToolbar());
    mo.observe(document.body, { childList: true, subtree: true });

    // Helper to re-apply translation on SPA updates
    const reapplyTranslation = () => {
      const lang = (window as any).__gtgCurrentLang;
      const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (!select) return;
      if (!lang || lang === "fr") {
        select.value = ""; // original
      } else {
        select.value = lang;
      }
      select.dispatchEvent(new Event("change"));
    };

    // Fire on history changes (pushState/replaceState/popstate)
    const emitLocationChange = () => window.dispatchEvent(new Event("gtg:locationchange"));
    const originalPushState = history.pushState.bind(history) as any;
    const originalReplaceState = history.replaceState.bind(history) as any;
    (history as any).pushState = (...args: any[]) => { originalPushState(...args); emitLocationChange(); };
    (history as any).replaceState = (...args: any[]) => { originalReplaceState(...args); emitLocationChange(); };
    window.addEventListener("popstate", emitLocationChange);

    const onLocationChange = () => {
      setTimeout(reapplyTranslation, 50);
      setTimeout(reapplyTranslation, 300);
    };
    window.addEventListener("gtg:locationchange", onLocationChange);

    // Observe #root for big DOM mutations and re-apply translation
    let domDebounce: number | undefined;
    const rootEl = document.getElementById("root");
    const domMo = rootEl
      ? new MutationObserver(() => {
          scheduleMaybeFinish();
          if (domDebounce) window.clearTimeout(domDebounce);
          domDebounce = window.setTimeout(reapplyTranslation, 120);
        })
      : null;
    if (rootEl && domMo) domMo.observe(rootEl, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      if (domMo) domMo.disconnect();
      window.removeEventListener("popstate", emitLocationChange);
      window.removeEventListener("gtg:locationchange", onLocationChange);
      (history as any).pushState = originalPushState;
      (history as any).replaceState = originalReplaceState;
    };
  }, []);

  return null; // hidden bridge
};

export default GoogleTranslateBridge;
