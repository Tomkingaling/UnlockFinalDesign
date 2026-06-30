import React from "react";

/**
 * ArcButton — the Unlock primary/outline CTA with the signature "arc-hover" ring
 * that sweeps ~270° around the button on hover (the unlock gesture).
 */
export function ArcButton({
  children,
  onClick,
  variant = "primary",
  type = "button",
  full = false,
  style = {},
}) {
  const [hover, setHover] = React.useState(false);

  const base = {
    position: "relative",
    fontFamily: "var(--u-font-body)",
    fontSize: "14px",
    fontWeight: 600,
    padding: "13px 26px",
    borderRadius: "var(--u-radius-s)",
    cursor: "pointer",
    transition: "all .2s var(--u-ease)",
    width: full ? "100%" : "auto",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    ...style,
  };

  const variants = {
    primary: {
      background: "var(--u-green)",
      color: "var(--u-on-green)",
      border: "none",
      boxShadow: hover ? "var(--u-shadow-cta)" : "none",
    },
    outline: {
      background: hover ? "rgba(255,255,255,0.08)" : "transparent",
      color: hover ? "var(--u-text)" : "var(--u-text-muted)",
      border: `1px solid ${hover ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.2)"}`,
    },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variants[variant] }}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          inset: "-4px",
          width: "calc(100% + 8px)",
          height: "calc(100% + 8px)",
          pointerEvents: "none",
        }}
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="var(--u-green)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="283"
          strokeDashoffset={hover ? 71 : 283}
          style={{ transition: "stroke-dashoffset .5s var(--u-ease)" }}
        />
      </svg>
      {children}
    </button>
  );
}
