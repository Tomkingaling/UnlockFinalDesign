import React from "react";

/**
 * TeamCard — initials avatar + name + green role + bio. `initials` auto-derives from
 * the name (dropping a leading "Dr.") if not supplied.
 */
export function TeamCard({ name, role, bio, initials }) {
  const auto = name.replace(/^Dr\.\s*/, "").split(" ").map((n) => n[0]).join("");
  return (
    <div style={{ padding: "26px", borderRadius: "var(--u-radius-l)", border: "1px solid var(--u-border)", background: "rgba(255,255,255,0.03)" }}>
      <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "var(--u-green-fill-strong)", border: "1px solid rgba(0,187,119,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--u-green)", fontSize: "16px", fontWeight: 600, marginBottom: "16px" }}>
        {initials || auto}
      </div>
      <h3 style={{ fontSize: "16px", fontWeight: 500, margin: "0 0 2px", color: "var(--u-text)" }}>{name}</h3>
      <p style={{ fontSize: "12px", color: "var(--u-green)", margin: "0 0 12px" }}>{role}</p>
      <p style={{ fontSize: "14px", color: "var(--u-text-muted)", lineHeight: 1.6, margin: 0 }}>{bio}</p>
    </div>
  );
}
