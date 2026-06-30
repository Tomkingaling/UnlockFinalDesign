import React from "react";

/**
 * Accordion — Unlock's FAQ / disclosure list. Hairline-divided rows; the open
 * row reveals its answer with a gentle height/transform settle and turns its
 * chevron green. Single-open by default (set `multi` to allow many open).
 */
export function Accordion({ items = [], multi = false, defaultOpen = [], style = {} }) {
  const [open, setOpen] = React.useState(() => new Set(defaultOpen));

  const toggle = (i) => {
    setOpen((prev) => {
      const next = new Set(multi ? prev : []);
      if (prev.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <div
      style={{
        fontFamily: "var(--u-font-body)",
        borderTop: "1px solid var(--u-border)",
        ...style,
      }}
    >
      {items.map((item, i) => {
        const isOpen = open.has(i);
        return (
          <div key={i} style={{ borderBottom: "1px solid var(--u-border)" }}>
            <button
              type="button"
              onClick={() => toggle(i)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                padding: "22px 4px",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                color: "var(--u-text)",
                fontFamily: "inherit",
                fontSize: "17px",
                fontWeight: 400,
                letterSpacing: "-0.01em",
              }}
            >
              <span>{item.q}</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke={isOpen ? "var(--u-green)" : "var(--u-text-faint)"}
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  flexShrink: 0,
                  transition: "transform .4s var(--u-ease), stroke .2s var(--u-ease)",
                  transform: isOpen ? "rotate(180deg)" : "none",
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows .4s var(--u-ease)",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <div
                  style={{
                    padding: "0 4px 24px",
                    maxWidth: "62ch",
                    color: "var(--u-text-muted)",
                    fontSize: "15px",
                    lineHeight: 1.65,
                  }}
                >
                  {item.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
