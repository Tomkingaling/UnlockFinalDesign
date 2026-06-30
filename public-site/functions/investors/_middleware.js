// functions/investors/_middleware.js
// -----------------------------------------------------------------------------
// Self-certification gate, SCOPED to /investors/* only (the gated financial
// promotion). The public marketing site outside /investors is unaffected.
//
// Open within this scope: the gate page itself (/investors, /investors/) and
// static assets. Everything else under /investors (the pitch, the deck)
// requires a valid self-cert cookie; otherwise the visitor is bounced to the
// gate at /investors/.
//
// Requires an environment variable on the Pages project: SELFCERT_SECRET
// -----------------------------------------------------------------------------

const COOKIE_NAME = "unlock_selfcert";

// Paths reachable WITHOUT certification (the gate itself).
const OPEN_PATHS = new Set([
  "/investors",
  "/investors/",
  "/investors/index.html",
]);

// Static asset extensions always allowed, so the gate page can render.
const ASSET_RE =
  /\.(css|js|mjs|png|jpe?g|gif|svg|webp|avif|ico|woff2?|ttf|otf|map|json|xml|txt)$/i;

export async function onRequest(context) {
  const { request, env, next } = context;
  const url = new URL(request.url);
  const path = url.pathname;

  if (OPEN_PATHS.has(path) || ASSET_RE.test(path)) {
    return next();
  }

  const token = readCookie(request, COOKIE_NAME);
  const ok = token && (await verifyToken(token, env.SELFCERT_SECRET));

  if (!ok) {
    const dest = new URL("/investors/", url.origin);
    dest.searchParams.set("next", path + url.search);
    return Response.redirect(dest.toString(), 302);
  }

  return next();
}

function readCookie(request, name) {
  const header = request.headers.get("Cookie") || "";
  for (const part of header.split(";")) {
    const idx = part.indexOf("=");
    if (idx === -1) continue;
    const k = part.slice(0, idx).trim();
    if (k === name) return decodeURIComponent(part.slice(idx + 1).trim());
  }
  return null;
}

async function verifyToken(token, secret) {
  if (!secret) return false;
  const dot = token.indexOf(".");
  if (dot === -1) return false;
  const body = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const expected = await hmac(body, secret);
  if (!timingSafeEqual(sig, expected)) return false;
  try {
    const payload = JSON.parse(atob(b64urlToB64(body)));
    if (!payload.exp || Date.now() > payload.exp) return false;
    return true;
  } catch {
    return false;
  }
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

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let out = 0;
  for (let i = 0; i < a.length; i++) out |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return out === 0;
}

function b64ToB64url(s) {
  return s.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function b64urlToB64(s) {
  return s.replace(/-/g, "+").replace(/_/g, "/") +
    "==".slice(0, (4 - (s.length % 4)) % 4);
}
