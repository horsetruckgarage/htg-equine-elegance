import { useEffect, useMemo, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

// Simple stable hash for caching
function hashString(input: string): string {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const chr = input.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash.toString(36);
}

function getCache(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function setCache(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {}
}

export function useAutoTranslate(source: string, targetLang: string) {
  const [translated, setTranslated] = useState<string>(source || '');

  // Keep source as fallback
  useEffect(() => {
    setTranslated(source || '');
  }, [source]);

  useEffect(() => {
    const run = async () => {
      const text = (source || '').trim();
      if (!text) return;
      if (!targetLang || targetLang === 'fr') return; // FR = base language

      const cacheKey = `translate:${targetLang}:${hashString(text)}`;
      const cached = getCache(cacheKey);
      if (cached) {
        setTranslated(cached);
        return;
      }

      const { data, error } = await supabase.functions.invoke('translate', {
        body: { text, targetLang },
      });

      if (!error && data && typeof data.translated === 'string') {
        setTranslated(data.translated);
        setCache(cacheKey, data.translated);
      }
    };

    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source, targetLang]);

  return translated;
}

export function useAutoTranslateArray(sources: string[], targetLang: string) {
  const [translated, setTranslated] = useState<string[]>(sources || []);

  // Keep sources as fallback
  useEffect(() => {
    setTranslated(sources || []);
  }, [sources]);

  const key = useMemo(() => {
    const joined = (sources || []).join('\u0001');
    return `translateArr:${targetLang}:${hashString(joined)}`;
  }, [sources, targetLang]);

  useEffect(() => {
    const run = async () => {
      const arr = (sources || []).map(s => (s || '').trim());
      if (!arr.length) return;
      if (!targetLang || targetLang === 'fr') return; // FR = base language

      const cached = getCache(key);
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed)) {
            setTranslated(parsed);
            return;
          }
        } catch {}
      }

      const { data, error } = await supabase.functions.invoke('translate', {
        body: { text: arr, targetLang },
      });

      if (!error && data && Array.isArray(data.translated)) {
        setTranslated(data.translated);
        setCache(key, JSON.stringify(data.translated));
      }
    };

    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return translated;
}
