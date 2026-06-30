import React from "react";

/**
 * StatCard — the KPI row used in the app: a muted label on the left, a big tabular
 * number on the right. For marketing "big number over label", use StatBlock instead.
 */
export function StatCard({ label, value, style = {} }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", border: "1px solid var(--u-border)", background: "rgba(255,255,255,0.03)", borderRadius: "var(--u-radius-m)", padding: "16px 20px", ...style }}>
      <span style={{ fontSize: "13.5px", color: "var(--u-text-muted)", fontWeight: 500 }}>{label}</span>
      <span style={{ fontSize: "26px", fontWeight: 700, letterSpacing: "-0.01em", fontVariantNumeric: "tabular-nums", color: "var(--u-text)" }}>{value}</span>
    </div>
  );
}
