import React from "react";

/**
 * InsightCallout — the green left-border notice (app "insight"). Optional dismiss ×.
 * `label` is the small green uppercase kicker; children are the body (HTML allowed).
 */
export function InsightCallout({ label = "Your first insight", children, onDismiss }) {
  return (
    <div style={{ position: "relative", border: "1px solid var(--u-border)", borderLeft: "3px solid var(--u-green)", background: "rgba(255,255,255,0.03)", borderRadius: "var(--u-radius-m)", padding: "16px 20px" }}>
      {onDismiss ? (
        <div onClick={onDismiss} style={{ position: "absolute", top: "12px", right: "14px", color: "var(--u-text-faint)", fontSize: "16px", cursor: "pointer", lineHeight: 1 }}>×</div>
      ) : null}
      <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--u-green)", marginBottom: "7px" }}>{label}</div>
      <div style={{ fontSize: "14.5px", lineHeight: 1.55, color: "rgba(255,255,255,0.9)" }}>{children}</div>
    </div>
  );
}
