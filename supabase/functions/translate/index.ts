import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");

serve(async (req) => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const log = (...args: any[]) => console.log("[translate]", ...args);

  try {
    const { text, targetLang } = await req.json().catch(() => ({ text: "", targetLang: "fr" }));
    log("incoming", { len: (text?.length ?? 0), targetLang });

    if (!text || typeof text !== "string") {
      return new Response(JSON.stringify({ error: "Missing 'text'", translatedText: text, fallback: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const lang = String(targetLang || "fr").toLowerCase();
    if (["fr", "en", "es", "de"].includes(lang) === false) {
      return new Response(JSON.stringify({ error: "Unsupported language", translatedText: text, fallback: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // No translation needed
    if (lang === "fr") {
      return new Response(JSON.stringify({ translatedText: text, fallback: false }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!OPENAI_API_KEY) {
      log("missing OPENAI_API_KEY");
      return new Response(JSON.stringify({ error: "OPENAI_API_KEY not set", translatedText: text, fallback: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Call OpenAI
    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a professional translator for an automotive catalog. Translate the user content to the target language. Preserve numbers, units, brand/model names, and formatting when useful. Return only the translated text.",
          },
          { role: "user", content: `Target language: ${lang}\n\nText:\n${text}` },
        ],
        temperature: 0.2,
      }),
    });

    if (!resp.ok) {
      const errTxt = await resp.text();
      log("openai bad status", resp.status, errTxt.slice(0, 200));
      return new Response(JSON.stringify({ error: "upstream", translatedText: text, fallback: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await resp.json();
    const translated = data?.choices?.[0]?.message?.content?.trim();

    if (!translated) {
      log("no translated content in response");
      return new Response(JSON.stringify({ error: "no_content", translatedText: text, fallback: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ translatedText: translated, fallback: false }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    log("unexpected", error?.message || String(error));
    return new Response(JSON.stringify({ error: "unexpected", translatedText: undefined, fallback: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});