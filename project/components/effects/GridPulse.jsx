import React from "react";

/* The hero "green squares" pattern — a 12x8 grid where flagged cells pulse. */
const HERO = [
  0,0,0,0,0,1,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,1,0,0,0,0,0,0,0,1,0, 0,0,0,0,0,0,0,1,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0, 0,1,0,0,0,0,0,0,0,1,0,0,
  0,0,0,0,1,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,
];

/**
 * GridPulse — the faint pulsing green-square grid behind hero sections. Absolutely
 * positioned; place inside a `position:relative; overflow:hidden` section.
 */
export function GridPulse({ pattern = HERO }) {
  return (
    <div style={{ position: "absolute", inset: 0, opacity: 0.03, pointerEvents: "none", display: "grid", gridTemplateColumns: "repeat(12,1fr)", gridTemplateRows: "repeat(8,1fr)", gap: "1px" }}>
      {pattern.map((on, i) =>
        on ? (
          <div
            key={i}
            style={{
              background: "var(--u-green)",
              borderRadius: "2px",
              animation: "u-gridpulse 4s ease-in-out infinite",
              animationDelay: `${(i % 7) * 0.4}s`,
            }}
          />
        ) : (
          <div key={i} />
        )
      )}
    </div>
  );
}
