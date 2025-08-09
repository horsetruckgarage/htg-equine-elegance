import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!OPENAI_API_KEY) {
      return new Response(JSON.stringify({ error: 'OPENAI_API_KEY is not set.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const { text, targetLang } = await req.json();
    if (!text || !targetLang) {
      return new Response(JSON.stringify({ error: 'Missing text or targetLang' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const isArray = Array.isArray(text);
    const payloadText = isArray ? (text as string[]).join('\n---\n') : String(text);

    // Short-circuit if target language is French (base language)
    if (String(targetLang).toLowerCase() === 'fr') {
      return new Response(JSON.stringify({ translated: text }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const system = `You are a professional translator. Translate the user-provided French product text into ${targetLang}.
- Keep numbers, years, units (t, km, hp) intact.
- Preserve brand and model names.
- Be concise and natural.
- Return only the translation without additional commentary.
`;

    const ctrl = new AbortController();
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: payloadText },
        ],
        temperature: 0.2,
      }),
      signal: ctrl.signal,
    });

    const raw = await response.text();
    let data: any = null;
    try { data = JSON.parse(raw); } catch (_) {}

    if (!response.ok) {
      const message = data?.error?.message || raw || 'Translation failed';
      console.error('OpenAI error', { status: response.status, message });
      return new Response(JSON.stringify({ error: message }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const parsed = data ?? {};
    const full = parsed.choices?.[0]?.message?.content || '';
    let translated: string | string[] = full;

    if (isArray) {
      // Split back using the separator used when sending
      translated = full.split('\n---\n').map((s: string) => s.trim());
      // If lengths mismatch, pad/fallback
      const originalLen = (text as string[]).length;
      if ((translated as string[]).length !== originalLen) {
        const arr = new Array(originalLen).fill('');
        for (let i = 0; i < originalLen; i++) arr[i] = (translated as string[])[i] || '';
        translated = arr;
      }
    }

    return new Response(JSON.stringify({ translated }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('translate function error', error);
    return new Response(JSON.stringify({ error: 'Unexpected error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
