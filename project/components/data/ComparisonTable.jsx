import React from "react";

/**
 * ComparisonTable — the "Unlock vs incumbents" matrix. The first value column is
 * emphasised (green), the rest are muted — the brand's fee-comparison motif.
 * `columns` are the column headers; `rows` are { label, values: [] } in column order.
 * A value of `true` renders a green check, `false` a muted dash; strings render as-is.
 */
export function ComparisonTable({ columns = [], rows = [] }) {
  const check = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
  );
  const cell = (v, emphasised) => {
    const color = emphasised ? "var(--u-green)" : "var(--u-text-faint)";
    if (v === true) return <span style={{ color }}>{check}</span>;
    if (v === false || v == null) return <span style={{ color: "var(--u-text-faint)" }}>—</span>;
    return <span style={{ color: emphasised ? "var(--u-green)" : "var(--u-text-muted)", fontWeight: emphasised ? 600 : 400 }}>{v}</span>;
  };
  const grid = `1.4fr repeat(${columns.length}, 1fr)`;
  const hcell = { padding: "12px 10px", fontSize: "11px", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--u-text-faint)", borderBottom: "1px solid var(--u-border)" };
  return (
    <div style={{ border: "1px solid var(--u-border)", borderRadius: "var(--u-radius-l)", overflow: "hidden", background: "rgba(255,255,255,0.02)" }}>
      <div style={{ display: "grid", gridTemplateColumns: grid }}>
        <div style={hcell} />
        {columns.map((c, i) => (
          <div key={c} style={{ ...hcell, color: i === 0 ? "var(--u-green)" : "var(--u-text-faint)", fontWeight: i === 0 ? 700 : 500 }}>{c}</div>
        ))}
        {rows.map((r) => (
          <React.Fragment key={r.label}>
            <div style={{ padding: "14px 10px", fontSize: "14px", color: "var(--u-text)", borderBottom: "1px solid var(--u-border)" }}>{r.label}</div>
            {r.values.map((v, i) => (
              <div key={i} style={{ padding: "14px 10px", fontSize: "14px", borderBottom: "1px solid var(--u-border)", background: i === 0 ? "rgba(0,187,119,0.04)" : "transparent" }}>{cell(v, i === 0)}</div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
