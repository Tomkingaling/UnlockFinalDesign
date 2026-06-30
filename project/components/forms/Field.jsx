import React from "react";

/**
 * Field — a labelled input or select in the Unlock dark style. Pass `as="select"`
 * with `options` for a dropdown, otherwise it renders an <input>.
 */
export function Field({ label, type = "text", placeholder, as = "input", options = [], style = {}, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const control = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "var(--u-radius-m)",
    background: "rgba(255,255,255,0.04)",
    border: `1px solid ${focus ? "rgba(0,187,119,0.5)" : "rgba(255,255,255,0.12)"}`,
    color: "var(--u-text)",
    fontSize: "14px",
    fontFamily: "var(--u-font-body)",
    outline: "none",
    transition: "border-color .2s var(--u-ease)",
  };
  return (
    <div style={style}>
      {label ? (
        <label style={{ display: "block", fontSize: "12px", color: "var(--u-text-muted)", marginBottom: "6px" }}>
          {label}
        </label>
      ) : null}
      {as === "select" ? (
        <select style={control} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} {...rest}>
          {options.map((o) => (
            <option key={o} style={{ background: "#222" }}>{o}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          style={control}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          {...rest}
        />
      )}
    </div>
  );
}
