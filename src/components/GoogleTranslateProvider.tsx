import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
    HTG_applyGoogleTranslate?: (lang: string) => void;
    HTG_currentGTLang?: string;
  }
}

const injectStyle = () => {
  const style = document.createElement("style");
  style.innerHTML = `
    .goog-te-banner-frame { display: none !important; }
    body { top: 0 !important; }
    .goog-logo-link { display: none !important; }
    .goog-te-gadget { height: 0; overflow: hidden; }
  `;
  document.head.appendChild(style);
};

const ensureContainer = () => {
  let el = document.getElementById("google_translate_element");
  if (!el) {
    el = document.createElement("div");
    el.id = "google_translate_element";
    el.setAttribute(
      "style",
      "position:fixed; left:-9999px; top:-9999px; width:1px; height:1px; opacity:0; pointer-events:none;"
    );
    document.body.appendChild(el);
  }
};

const loadScript = () => {
  if (document.getElementById("google-translate-script")) return;
  const script = document.createElement("script");
  script.id = "google-translate-script";
  script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  script.async = true;
  document.body.appendChild(script);
};

const initGoogleTranslate = () => {
  window.googleTranslateElementInit = () => {
    if (!window.google || !window.google.translate) return;
    // eslint-disable-next-line no-new
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "fr",
        includedLanguages: "fr,en,es,de",
        autoDisplay: false,
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };
};

const createApplyFunction = () => {
  window.HTG_applyGoogleTranslate = (lang: string) => {
    const target = lang === "fr" ? "" : lang; // reset on FR
    window.HTG_currentGTLang = target || undefined;

    const tryApply = () => {
      const select: HTMLSelectElement | null = document.querySelector(".goog-te-combo");
      if (select) {
        if (select.value !== target) {
          select.value = target;
          select.dispatchEvent(new Event("change"));
        } else if (target) {
          // Force change event for re-render after SPA navigation
          select.dispatchEvent(new Event("change"));
        }
        return true;
      }
      return false;
    };

    // Try immediately, then retry a few times
    if (!tryApply()) {
      let attempts = 0;
      const id = setInterval(() => {
        attempts += 1;
        if (tryApply() || attempts > 30) clearInterval(id);
      }, 200);
    }
  };
};

const GoogleTranslateProvider = () => {
  const location = useLocation();

  useEffect(() => {
    injectStyle();
    ensureContainer();
    initGoogleTranslate();
    loadScript();
    createApplyFunction();
  }, []);

  // Re-apply selected translation after route changes in SPA
  useEffect(() => {
    if (window.HTG_currentGTLang) {
      window.HTG_applyGoogleTranslate(window.HTG_currentGTLang);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return null;
};

export default GoogleTranslateProvider;
