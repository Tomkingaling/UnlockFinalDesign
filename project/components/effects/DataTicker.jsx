import React from "react";

const DEFAULT = [
  { label: "FTSE 250", value: "20,412", change: "+0.34%" },
  { label: "AIM All-Share", value: "731.2", change: "-0.12%" },
  { label: "GBP/USD", value: "1.2714", change: "+0.08%" },
  { label: "Gold", value: "$2,341", change: "+0.42%" },
  { label: "10Y Gilt", value: "4.28%", change: "+2bp" },
  { label: "BTC/GBP", value: "£54,210", change: "+1.2%" },
];

/**
 * DataTicker — the scrolling market strip under the hero. Up changes are green, down are red.
 */
export function DataTicker({ items = DEFAULT }) {
  const loop = [...items, ...items, ...items];
  return (
    <div style={{ width: "100%", overflow: "hidden", background: "rgba(31,31,31,0.8)", borderBottom: "1px solid var(--u-hairline)", padding: "9px 0" }}>
      <div style={{ display: "flex", whiteSpace: "nowrap", width: "max-content", animation: "u-ticker 40s linear infinite" }}>
        {loop.map((t, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "8px", margin: "0 24px", fontSize: "12px", color: "var(--u-text-faint)" }}>
            <span style={{ color: "var(--u-text-muted)" }}>{t.label}</span>
            <span>{t.value}</span>
            <span style={{ color: t.change.startsWith("+") ? "var(--u-green)" : "#f87171" }}>{t.change}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
