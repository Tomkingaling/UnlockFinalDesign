import React from "react";

/**
 * Eyebrow — the green UPPERCASE kicker that sits above every section heading.
 */
export function Eyebrow({ children, hero = false, style = {} }) {
  return (
    <p
      style={{
        color: "var(--u-green)",
        fontSize: "12px",
        fontWeight: 500,
        letterSpacing: hero ? "0.3em" : "0.25em",
        textTransform: "uppercase",
        margin: "0 0 16px",
        fontFamily: "var(--u-font-body)",
        ...style,
      }}
    >
      {children}
    </p>
  );
}
