import React from "react";

/**
 * Badge — small pill label. `tone` sets the colour: green (default), amber, red, neutral.
 * Use for status chips like "Most popular" or the dot-prefixed "live" pill.
 */
export function Badge({ children, tone = "green", dot = false, style = {} }) {
  const tones = {
    green: { color: "var(--u-green)", bg: "var(--u-green-fill-strong)", border: "rgba(0,187,119,0.3)" },
    amber: { color: "var(--u-amber)", bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.3)" },
    red: { color: "var(--u-red)", bg: "rgba(239,68,68,0.12)", border: "rgba(239,68,68,0.3)" },
    neutral: { color: "var(--u-text-muted)", bg: "rgba(255,255,255,0.06)", border: "rgba(255,255,255,0.15)" },
  };
  const t = tones[tone] || tones.green;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "12px",
        fontWeight: 500,
        letterSpacing: "0.04em",
        color: t.color,
        background: t.bg,
        border: `1px solid ${t.border}`,
        borderRadius: "var(--u-radius-pill)",
        padding: "6px 14px",
        fontFamily: "var(--u-font-body)",
        ...style,
      }}
    >
      {dot ? (
        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: t.color, flex: "none" }} />
      ) : null}
      {children}
    </span>
  );
}
