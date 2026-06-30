import React from "react";

/**
 * StatBlock — a big light-green number over a muted label, with a green top hairline.
 * Used in the Aspiration / Advice-Gap stat rows.
 */
export function StatBlock({ value, label, style = {} }) {
  return (
    <div style={{ borderTop: "1px solid var(--u-green-line)", paddingTop: "24px", ...style }}>
      <span
        style={{
          fontSize: "var(--u-type-stat)",
          fontWeight: 300,
          color: "var(--u-green)",
          letterSpacing: "-0.01em",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {value}
      </span>
      <p style={{ fontSize: "14px", color: "var(--u-text-muted)", margin: "8px 0 0" }}>{label}</p>
    </div>
  );
}
