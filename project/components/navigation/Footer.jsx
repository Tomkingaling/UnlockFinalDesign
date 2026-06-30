import React from "react";
import { UnlockLogo } from "../brand/UnlockLogo.jsx";

/**
 * Footer — logo + tagline, link row, copyright, and the optional FP compliance disclaimer.
 */
export function Footer({
  tagline = "Portfolio intelligence and investment access for UK investors managing £1M+. Subscription only.",
  links = ["About", "Team", "EIS & SEIS", "The Advice Gap", "Data Policy", "Privacy Policy", "Contact"],
  onNavigate = () => {},
  showDisclaimer = true,
  disclaimer = "This page contains financial promotion approved by Unlock Services Limited. Capital is at risk. EIS/SEIS eligibility and tax treatment depend on individual circumstances and may change. Intended for sophisticated and high-net-worth investors only as defined by the Financial Services and Markets Act 2000 (Financial Promotion) Order 2005. Unlock Services Limited. Registered in England and Wales.",
}) {
  return (
    <footer style={{ background: "var(--u-bg-deepest)", padding: "32px 24px" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "24px", marginBottom: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", maxWidth: "420px" }}>
            <div style={{ color: "#555", display: "flex" }}><UnlockLogo height={18} /></div>
            <span style={{ fontSize: "12px", color: "#555", lineHeight: 1.5 }}>{tagline}</span>
          </div>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {links.map((l) => (
              <span
                key={l}
                onClick={() => onNavigate(l)}
                style={{ fontSize: "12px", color: "#555", cursor: "pointer", whiteSpace: "nowrap" }}
              >
                {l}
              </span>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid #333", paddingTop: "16px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "8px" }}>
          <p style={{ fontSize: "11px", color: "#444", lineHeight: 1.5, margin: 0 }}>
            © 2026 Unlock Services Limited. Registered in England and Wales. Company No. 15610723.
          </p>
          <p style={{ fontSize: "11px", color: "#444", lineHeight: 1.5, margin: 0, textAlign: "right", maxWidth: "480px" }}>
            This website is for information purposes only and does not constitute financial advice. Capital at risk.
          </p>
        </div>
        {showDisclaimer ? (
          <div style={{ borderTop: "1px solid #333", marginTop: "16px", paddingTop: "16px" }}>
            <p style={{ fontSize: "11px", color: "#444", lineHeight: 1.6, margin: 0 }}>{disclaimer}</p>
          </div>
        ) : null}
      </div>
    </footer>
  );
}
