import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY") as string);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

type BasePayload = {
  type: "contact" | "quote";
  locale?: string; // e.g. fr, en, es, de
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  message?: string;
};

type QuotePayload = BasePayload & {
  region?: string;
  vehicleType?: string;
  capacity?: string;
  condition?: string;
  budget?: string;
  usage?: string;
  timeline?: string;
};

const TEAM_EMAIL = "info@horsetruckgarage.com"; // Change if needed
const BRAND = "Horse Truck Garage";
const FROM = `${BRAND} <onboarding@resend.dev>`; // Replace with your domain once verified

function htmlListFromObject(obj: Record<string, unknown>): string {
  const entries = Object.entries(obj)
    .filter(([_, v]) => v !== undefined && v !== null && String(v).trim() !== "")
    .map(([k, v]) => {
      const key = k
        .replace(/([A-Z])/g, " $1")
        .replace(/_/g, " ")
        .replace(/^./, (s) => s.toUpperCase());
      return `<tr><td style="padding:6px 8px;border-bottom:1px solid #eee;font-weight:600;">${key}</td><td style="padding:6px 8px;border-bottom:1px solid #eee;">${String(v)}</td></tr>`;
    })
    .join("");
  return `<table width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;font-family:Arial, sans-serif;font-size:14px;">${entries}</table>`;
}

serve(async (req: Request): Promise<Response> => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    const payload = (await req.json()) as BasePayload | QuotePayload;

    if (!payload?.email) {
      return new Response(JSON.stringify({ error: "Missing email" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const isQuote = payload.type === "quote";
    const subjectAdmin = isQuote
      ? `Nouvelle demande de devis (${payload.firstName ?? ""} ${payload.lastName ?? ""})`
      : `Nouveau message de contact (${payload.firstName ?? ""} ${payload.lastName ?? ""})`;

    const subjectClient = isQuote
      ? `${BRAND} — Nous avons bien reçu votre demande de devis`
      : `${BRAND} — Nous avons bien reçu votre message`;

    const adminHtml = `
      <div style="font-family:Arial, sans-serif;">
        <h2 style="margin:0 0 12px 0;">${subjectAdmin}</h2>
        ${htmlListFromObject(payload as Record<string, unknown>)}
        <p style="color:#666;margin-top:16px;font-size:12px;">Envoyé automatiquement depuis le site web.</p>
      </div>
    `;

    const clientGreeting = payload.firstName ? `Bonjour ${payload.firstName},` : `Bonjour,`;
    const clientHtml = `
      <div style="font-family:Arial, sans-serif;">
        <p>${clientGreeting}</p>
        <p>Merci pour votre ${isQuote ? "demande de devis" : "message"}. Nous l'avons bien reçu et revenons vers vous au plus vite.</p>
        <p style="margin:16px 0 8px 0;font-weight:600;">Récapitulatif:</p>
        ${htmlListFromObject(payload as Record<string, unknown>)}
        <p style="margin-top:16px;">Cordialement,<br />L'équipe ${BRAND}</p>
      </div>
    `;

    // Send to team
    const adminSend = await resend.emails.send({
      from: FROM,
      to: [TEAM_EMAIL],
      replyTo: payload.email,
      subject: subjectAdmin,
      html: adminHtml,
    });

    // Send to client
    const clientSend = await resend.emails.send({
      from: FROM,
      to: [payload.email],
      subject: subjectClient,
      html: clientHtml,
    });

    console.log("Resend admin result:", adminSend);
    console.log("Resend client result:", clientSend);

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("send-contact-email error:", error);
    return new Response(
      JSON.stringify({ error: error?.message ?? "Unknown error" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
