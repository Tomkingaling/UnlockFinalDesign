import React from "react";

/**
 * Toast — Unlock's transient confirmation, sized for lead-capture flows
 * ("You're on the list"). Dark raised surface, hairline border, a coloured
 * status dot (green / amber / red / info), slides up on mount via transform.
 * Pass `open` to control visibility; calls `onClose` after `duration` ms.
 */
export function Toast({
  open = true,
  variant = "success",
  title,
  message,
  duration = 4000,
  onClose,
  style = {},
}) {
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    if (!open) return setShown(false);
    const r = requestAnimationFrame(() => setShown(true));
    if (duration && onClose) {
      const t = setTimeout(onClose, duration);
      return () => {
        cancelAnimationFrame(r);
        clearTimeout(t);
      };
    }
    return () => cancelAnimationFrame(r);
  }, [open, duration, onClose]);

  if (!open) return null;

  const dot = {
    success: "var(--u-green)",
    info: "var(--u-info)",
    warning: "var(--u-amber)",
    error: "var(--u-red)",
  }[variant];

  return (
    <div
      role="status"
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        maxWidth: "380px",
        padding: "16px 18px",
        background: "var(--u-surface)",
        border: "1px solid var(--u-border)",
        borderRadius: "var(--u-radius-m)",
        boxShadow: "0 12px 32px -8px rgba(0,0,0,0.5)",
        fontFamily: "var(--u-font-body)",
        transform: shown ? "translateY(0)" : "translateY(16px)",
        opacity: shown ? 1 : 0,
        transition: "transform .5s var(--u-ease), opacity .35s var(--u-ease)",
        ...style,
      }}
    >
      <span
        style={{
          flexShrink: 0,
          width: "8px",
          height: "8px",
          marginTop: "6px",
          borderRadius: "50%",
          background: dot,
          boxShadow: variant === "success" ? "0 0 10px 1px rgba(0,187,119,0.5)" : "none",
        }}
      />
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && (
          <div style={{ color: "var(--u-text)", fontSize: "14px", fontWeight: 500 }}>
            {title}
          </div>
        )}
        {message && (
          <div
            style={{
              color: "var(--u-text-muted)",
              fontSize: "13px",
              lineHeight: 1.5,
              marginTop: title ? "3px" : 0,
            }}
          >
            {message}
          </div>
        )}
      </div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Dismiss"
          style={{
            flexShrink: 0,
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--u-text-faint)",
            fontSize: "16px",
            lineHeight: 1,
            padding: "2px",
          }}
        >
          ×
        </button>
      )}
    </div>
  );
}
