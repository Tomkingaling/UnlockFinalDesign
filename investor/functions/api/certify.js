// functions/api/certify.js
// -----------------------------------------------------------------------------
// Called by the gate page when a visitor completes the eligibility statement.
// Validates the declared type, issues a signed (HMAC-SHA256) cookie, and
// returns the safe same-site destination to redirect to.
//
// POST JSON body: { "type": "hnw" | "sophisticated" | "self-sophisticated",
//                   "next": "/gated/..." }
//
// Requires env var: SELFCERT_SECRET
// -----------------------------------------------------------------------------

const COOKIE_NAME = "unlock_selfcert";
const TTL_DAYS = 30; // how long a certification is honoured before re-prompting

export async function onRequestPost(context) {
  const { request, env } = context;

  let data;
  try {
    data = await request.json();
  } catch {
    return json({ error: "invalid_body" }, 400);
  }

  const allowed = ["hnw", "sophisticated", "self-sophisticated"];
  if (!allowed.includes(data.type)) {
    return json({ error: "invalid_type" }, 400);
  }
  if (!env.SELFCERT_SECRET) {
    return json({ error: "server_misconfigured" }, 500);
  }

  const now = Date.now();
  const exp = now + TTL_DAYS * 24 * 60 * 60 * 1000;
  const token = await sign({ type: data.type, iat: now, exp }, env.SELFCERT_SECRET);

  // ---------------------------------------------------------------------------
  // OPTIONAL COMPLIANCE AUDIT LOG.
  // For a defensible record of who certified what and when, persist an entry
  // here — e.g. Cloudflare KV / D1, or your Supabase. Capture: type, timestamp,
  // CF-Connecting-IP, user-agent. Confirm retention/wording with your framework.
  //
  // await env.SELFCERT_LOG.put(`${now}-${crypto.randomUUID()}`, JSON.stringify({
  //   type: data.type,
  //   at: new Date(now).toISOString(),
  //   ip: request.headers.get("CF-Connecting-IP"),
  //   ua: request.headers.get("User-Agent"),
  // }));
  // ---------------------------------------------------------------------------

  const next = safeNext(data.next);
  const cookie = [
    `${COOKIE_NAME}=${encodeURIComponent(token)}`,
    "Path=/",
    "HttpOnly",
    "Secure",
    "SameSite=Lax",
    `Max-Age=${TTL_DAYS * 24 * 60 * 60}`,
  ].join("; ");

  return new Response(JSON.stringify({ ok: true, next }), {
    status: 200,
    headers: { "Content-Type": "application/json", "Set-Cookie": cookie },
  });
}

function safeNext(next) {
  // Only same-site relative paths; default to the gated landing.
  if (typeof next === "string" && next.startsWith("/") && !next.startsWith("//")) {
    return next;
  }
  return "/gated/";
}

async function sign(payload, secret) {
  const body = b64ToB64url(btoa(JSON.stringify(payload)));
  const sig = await hmac(body, secret);
  return `${body}.${sig}`;
}

async function hmac(message, secret) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sigBuf = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(message)
  );
  return b64ToB64url(btoa(String.fromCharCode(...new Uint8Array(sigBuf))));
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function b64ToB64url(s) {
  return s.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
