import React from "react";

/**
 * PullQuote — the one place Noto Serif appears: an italic testimonial/quote with an
 * optional initials avatar + attribution.
 */
export function PullQuote({ quote, name, role, initials }) {
  const auto = name ? name.replace(/^Dr\.\s*/, "").split(" ").map((n) => n[0]).join("") : "";
  return (
    <figure style={{ margin: 0 }}>
      <blockquote style={{ margin: 0, fontFamily: "var(--u-font-serif)", fontStyle: "italic", fontSize: "var(--u-type-lead)", lineHeight: 1.5, color: "var(--u-text)" }}>
        “{quote}”
      </blockquote>
      {name ? (
        <figcaption style={{ marginTop: "18px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ width: "36px", height: "36px", borderRadius: "50%", background: "var(--u-green-fill-strong)", border: "1px solid rgba(0,187,119,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--u-green)", fontSize: "13px", fontWeight: 600 }}>{initials || auto}</span>
          <span>
            <span style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--u-text)" }}>{name}</span>
            {role ? <span style={{ display: "block", fontSize: "12px", color: "var(--u-text-faint)" }}>{role}</span> : null}
          </span>
        </figcaption>
      ) : null}
    </figure>
  );
}
