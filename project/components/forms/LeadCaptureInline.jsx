import React from "react";
import { ArcButton } from "../buttons/ArcButton.jsx";

/**
 * LeadCaptureInline — a compact email + button band for mid-page conversion. Lighter than
 * the full waiting-list form. Calls onSubmit(email).
 */
export function LeadCaptureInline({ heading = "Join the waiting list", placeholder = "you@example.com", cta = "Join", note = "No commitment — priority access at launch.", onSubmit }) {
  const [email, setEmail] = React.useState("");
  const [focus, setFocus] = React.useState(false);
  return (
    <div>
      {heading ? <div style={{ fontFamily: "var(--u-font-heading)", fontWeight: 300, fontSize: "var(--u-type-section-sm)", letterSpacing: "-0.01em", color: "var(--u-text)", marginBottom: "16px" }}>{heading}</div> : null}
      <form
        onSubmit={(e) => { e.preventDefault(); onSubmit && onSubmit(email); }}
        style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}
      >
        <input
          type="email"
          required
          value={email}
          placeholder={placeholder}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{ flex: "1 1 220px", padding: "13px 16px", borderRadius: "var(--u-radius-s)", background: "rgba(255,255,255,0.05)", border: `1px solid ${focus ? "rgba(0,187,119,0.5)" : "rgba(255,255,255,0.14)"}`, color: "var(--u-text)", fontSize: "14px", fontFamily: "var(--u-font-body)", outline: "none", transition: "border-color .2s var(--u-ease)" }}
        />
        <ArcButton type="submit">{cta}</ArcButton>
      </form>
      {note ? <p style={{ fontSize: "12px", color: "var(--u-text-faint)", margin: "10px 0 0" }}>{note}</p> : null}
    </div>
  );
}
