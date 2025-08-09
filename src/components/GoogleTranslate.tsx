import { useEffect } from "react";

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

const GoogleTranslate = () => {
  useEffect(() => {
    const elementId = "google_translate_element";

    // Define the init function (called by Google's script)
    window.googleTranslateElementInit = () => {
      if (!window.google || !window.google.translate) return;
      // Avoid duplicate initialization by clearing existing content
      const container = document.getElementById(elementId);
      if (container) container.innerHTML = "";

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "fr",
          includedLanguages: "en,es,de,it,pt,nl,pl,ro,ru,ar,ja,zh-CN",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        elementId
      );
    };

    // Inject the Google Translate script once
    const scriptId = "google-translate-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google && window.google.translate) {
      // If script already loaded, run init directly
      window.googleTranslateElementInit?.();
    }
  }, []);

  return (
    <div
      id="google_translate_element"
      className="min-w-[140px]"
      aria-label="Traduction Google"
    />
  );
};

export default GoogleTranslate;
