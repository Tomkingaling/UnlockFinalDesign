import React from "react";

/**
 * Tabs — Unlock's content switcher. Underline style that reuses the nav-link
 * motif: a green underline grows under the active tab; inactive labels sit muted.
 * Controlled internally; renders the active tab's panel below the rail.
 */
export function Tabs({ tabs = [], defaultIndex = 0, style = {} }) {
  const [active, setActive] = React.useState(defaultIndex);

  return (
    <div style={{ fontFamily: "var(--u-font-body)", ...style }}>
      <div
        role="tablist"
        style={{
          display: "flex",
          gap: "32px",
          borderBottom: "1px solid var(--u-border)",
        }}
      >
        {tabs.map((t, i) => {
          const on = i === active;
          return (
            <button
              key={i}
              role="tab"
              aria-selected={on}
              onClick={() => setActive(i)}
              style={{
                position: "relative",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0 0 14px",
                fontFamily: "inherit",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.01em",
                color: on ? "var(--u-text)" : "var(--u-text-muted)",
                transition: "color .2s var(--u-ease)",
              }}
            >
              {t.label}
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: "-1px",
                  height: "1.5px",
                  width: on ? "100%" : "0%",
                  background: "var(--u-green)",
                  transition: "width .3s var(--u-ease)",
                }}
              />
            </button>
          );
        })}
      </div>
      <div role="tabpanel" style={{ paddingTop: "28px" }}>
        {tabs[active] && tabs[active].content}
      </div>
    </div>
  );
}
