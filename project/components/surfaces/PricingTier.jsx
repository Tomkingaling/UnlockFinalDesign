import React from "react";
import { ArcButton } from "../buttons/ArcButton.jsx";

/**
 * PricingTier — a subscription tier card. `highlighted` gives the green "most popular"
 * treatment (tinted fill, green border, primary CTA). Pass `features` as strings.
 */
export function PricingTier({ name, price, period = "", desc, features = [], cta = "Join waiting list", highlighted = false, onCta }) {
  const check = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none", marginTop: "2px" }}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
  return (
    <div
      style={{
        borderRadius: "var(--u-radius-l)",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        border: highlighted ? "1px solid rgba(0,187,119,0.3)" : "1px solid var(--u-border)",
        background: highlighted ? "var(--u-green-fill)" : "rgba(255,255,255,0.03)",
      }}
    >
      {highlighted ? (
        <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--u-green)", marginBottom: "12px" }}>Most popular</span>
      ) : null}
      <h3 style={{ fontSize: "20px", fontWeight: 500, margin: "0 0 4px", color: "var(--u-text)" }}>{name}</h3>
      <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "12px" }}>
        <span style={{ fontSize: "32px", fontWeight: 300, color: "var(--u-text)" }}>{price}</span>
        {period ? <span style={{ fontSize: "14px", color: "var(--u-text-faint)" }}>{period}</span> : null}
      </div>
      <p style={{ fontSize: "14px", color: "var(--u-text-muted)", lineHeight: 1.6, margin: "0 0 24px" }}>{desc}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px", flex: 1 }}>
        {features.map((f) => (
          <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px", color: "var(--u-text-muted)" }}>
            <span style={{ color: "var(--u-green)" }}>{check}</span>
            {f}
          </div>
        ))}
      </div>
      <ArcButton variant={highlighted ? "primary" : "outline"} full onClick={onCta}>{cta}</ArcButton>
    </div>
  );
}
