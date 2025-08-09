import { useEffect } from "react";

// Lightweight loader for Google Translate widget, available on all pages
// Renders nothing by itself; expects a container with id "google_translate_element" somewhere in the DOM

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
    __googleTranslateScriptAppended__?: boolean;
  }
}

const ensureContainerExists = (id: string) => {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("div");
    el.id = id;
    // Fallback placement (top-right) if not already in DOM
    el.style.position = "fixed";
    el.style.top = "12px";
    el.style.right = "12px";
    el.style.zIndex = "60";
    document.body.appendChild(el);
  }
  return el;
};

const initTranslate = (containerId: string) => {
  try {
    if (!window.google || !window.google.translate) return;
    // Avoid re-initializing if the widget is already present
    const container = ensureContainerExists(containerId);
    if (container.querySelector(".goog-te-gadget")) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const TranslateElement: any = window.google.translate.TranslateElement;
    new TranslateElement(
      {
        pageLanguage: "fr",
        autoDisplay: false,
        includedLanguages:
          "fr,de,es,en",
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      containerId
    );
  } catch (e) {
    // noop
  }
};

const appendScriptOnce = () => {
  if (window.__googleTranslateScriptAppended__) return;
  const existing = document.querySelector(
    'script[src*="translate_a/element.js"]'
  ) as HTMLScriptElement | null;
  if (existing) {
    window.__googleTranslateScriptAppended__ = true;
    if (window.google && window.google.translate && window.googleTranslateElementInit) {
      window.googleTranslateElementInit();
    }
    return;
  }
  const script = document.createElement("script");
  script.src =
    "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  script.async = true;
  script.onload = () => {
    window.__googleTranslateScriptAppended__ = true;
    // Safety: invoke init in case callback not triggered
    if (window.googleTranslateElementInit) {
      window.googleTranslateElementInit();
    }
  };
  script.onerror = () => {
    window.__googleTranslateScriptAppended__ = false;
  };
  document.head.appendChild(script);
};

const GoogleTranslate = ({ containerId = "google_translate_element" }: { containerId?: string }) => {
  useEffect(() => {
    // Ensure the container exists early
    console.log("[GT] useEffect mount, ensuring container", containerId);
    ensureContainerExists(containerId);

    // Define global init callback (called by Google script)
    window.googleTranslateElementInit = () => {
      console.log("[GT] googleTranslateElementInit called");
      initTranslate(containerId);
    };

    // If google is already available (HMR or cached), init directly
    if (window.google && window.google.translate) {
      console.log("[GT] google.translate already available, init now");
      initTranslate(containerId);
    } else {
      console.log("[GT] Appending Google script");
      appendScriptOnce();
    }

    return () => {
      // Keep widget across route changes; no cleanup to avoid reloading script
      console.log("[GT] unmount (no cleanup)");
    };
  }, [containerId]);

  return null;
};

export default GoogleTranslate;
