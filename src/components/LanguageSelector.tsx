import { useEffect } from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation, Language } from "@/hooks/useTranslation";

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

const ensureGoogleTranslateLoaded = () => {
  const containerId = "__google_translate_container";
  if (!document.getElementById(containerId)) {
    const div = document.createElement("div");
    div.id = containerId;
    div.style.display = "none";
    document.body.appendChild(div);
  }

  if (!window.googleTranslateElementInit) {
    window.googleTranslateElementInit = () => {
      if (!window.google || !window.google.translate) return;
      // Clear any previous content
      const el = document.getElementById(containerId);
      if (el) el.innerHTML = "";
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "fr",
          includedLanguages: "en,es,de",
          autoDisplay: false,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        containerId
      );
    };
  }

  const scriptId = "google-translate-script";
  if (!document.getElementById(scriptId)) {
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  } else if (window.google && window.google.translate) {
    window.googleTranslateElementInit?.();
  }
};

const applyGoogleTranslate = (lang: Language) => {
  const map = { fr: "fr", en: "en", es: "es", de: "de" } as const;
  const target = map[lang];

  const setCookie = (name: string, value: string, days = 365) => {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
    if (location.hostname.includes(".")) {
      document.cookie = `${name}=${value}; expires=${expires}; path=/; domain=.${location.hostname}`;
    }
  };

  if (target === "fr") {
    // Clear translation cookie (back to original)
    setCookie("googtrans", "/fr/fr");
  } else {
    setCookie("googtrans", `/fr/${target}`);
  }

  const select = document.querySelector("select.goog-te-combo") as HTMLSelectElement | null;
  if (select) {
    select.value = target;
    select.dispatchEvent(new Event("change"));
  }
};

const languages = [
  { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
  { code: 'en' as Language, name: 'English', flag: '🇬🇧' },
  { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
  { code: 'de' as Language, name: 'Deutsch', flag: '🇩🇪' },
];

const LanguageSelector = () => {
  const { language, setLanguage } = useTranslation();

  useEffect(() => {
    ensureGoogleTranslateLoaded();
  }, []);

  const handleLanguageChange = (code: Language) => {
    setLanguage(code);
    applyGoogleTranslate(code);
  };
  
  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center space-x-2 bg-white border-gray-200 hover:bg-gray-50 text-gray-700 hover:text-gray-900"
        >
          <Globe className="w-4 h-4" />
          <span className="text-lg">{currentLanguage?.flag}</span>
          <span className="hidden sm:inline font-medium">{currentLanguage?.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-white border border-gray-200 shadow-lg z-50 min-w-[160px]"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`flex items-center space-x-3 px-4 py-3 hover:bg-gray-100 cursor-pointer text-gray-900 ${
              language === lang.code ? 'bg-gray-50 font-medium' : ''
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="font-medium">{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;