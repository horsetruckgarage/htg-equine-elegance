import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Language } from "@/hooks/useTranslation";

// Simple persistent cache in localStorage
const STORAGE_KEY = "htg-translation-cache-v1";

function getCache() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, string | string[]>) : {};
  } catch {
    return {} as Record<string, string | string[]>;
  }
}

function setCacheEntry(key: string, value: string | string[]) {
  try {
    const cache = getCache();
    cache[key] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cache));
  } catch {}
}

async function translate(text: string | string[], targetLang: Language): Promise<string | string[]> {
  if (targetLang === "fr") return text;
  const key = `${targetLang}:${typeof text === "string" ? text : JSON.stringify(text)}`;
  const cached = (getCache() as any)[key];
  if (cached) return cached;

  const { data, error } = await supabase.functions.invoke("translate", {
    body: { text, targetLang },
  });
  if (error) throw error;
  const result = data?.translated ?? text;
  setCacheEntry(key, result);
  return result;
}

export function useAutoTranslate(text: string | undefined, lang: Language) {
  const [output, setOutput] = useState<string>(text || "");

  useEffect(() => {
    let mounted = true;
    if (!text) { setOutput(""); return; }
    if (lang === "fr") { setOutput(text); return; }

    translate(text, lang).then((res) => {
      if (!mounted) return;
      setOutput(typeof res === "string" ? res : text);
    }).catch(() => {
      if (!mounted) return;
      setOutput(text);
    });

    return () => { mounted = false; };
  }, [text, lang]);

  return output;
}

export function useAutoTranslateArray(arr: string[] | undefined, lang: Language) {
  const [output, setOutput] = useState<string[]>(arr || []);

  useEffect(() => {
    let mounted = true;
    if (!arr || arr.length === 0) { setOutput([]); return; }
    if (lang === "fr") { setOutput(arr); return; }

    translate(arr, lang).then((res) => {
      if (!mounted) return;
      setOutput(Array.isArray(res) ? (res as string[]) : arr);
    }).catch(() => {
      if (!mounted) return;
      setOutput(arr);
    });

    return () => { mounted = false; };
  }, [JSON.stringify(arr), lang]);

  return output;
}