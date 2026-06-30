import React from "react";
import { UnlockLogo } from "../brand/UnlockLogo.jsx";

/**
 * NavBar — sticky frosted top bar: logo, center links, "Try a demo" (outline) + "Log in" (green).
 * Pass `items` (with optional `active`) and click handlers.
 */
export function NavBar({
  items = ["Platform", "Pricing", "EIS & SEIS", "The Advice Gap", "About"],
  active,
  onNavigate = () => {},
  onDemo = () => {},
  onLogin = () => {},
}) {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(31,31,31,0.94)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--u-hairline)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
          height: "var(--u-nav-height)",
          maxWidth: "1320px",
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "42px" }}>
          <div style={{ color: "var(--u-green)", cursor: "pointer", display: "flex" }} onClick={() => onNavigate("home")}>
            <UnlockLogo height={22} />
          </div>
          <ul style={{ display: "flex", gap: "28px", listStyle: "none", margin: 0, padding: 0 }}>
            {items.map((label) => (
              <li key={label}>
                <span
                  className="u-navlink"
                  onClick={() => onNavigate(label)}
                  style={{
                    fontSize: "13.5px",
                    cursor: "pointer",
                    color: active === label ? "var(--u-green)" : "var(--u-text-muted)",
                    transition: "color .2s",
                  }}
                >
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: "none" }}>
          <button
            onClick={onDemo}
            style={{
              fontSize: "13.5px",
              whiteSpace: "nowrap",
              color: "var(--u-text-muted)",
              padding: "8px 16px",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "var(--u-radius-s)",
              background: "transparent",
              fontFamily: "inherit",
              cursor: "pointer",
            }}
          >
            Try a demo
          </button>
          <button
            onClick={onLogin}
            style={{
              fontSize: "13.5px",
              whiteSpace: "nowrap",
              fontWeight: 600,
              color: "var(--u-on-green)",
              padding: "9px 20px",
              border: "none",
              borderRadius: "var(--u-radius-s)",
              background: "var(--u-green)",
              fontFamily: "inherit",
              cursor: "pointer",
            }}
          >
            Log in
          </button>
        </div>
      </div>
    </nav>
  );
}
