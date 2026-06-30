import React from "react";
import { Card } from "./Card.jsx";

/**
 * FeatureCard — icon-over-title-over-body card used in Features / Tools / Why / Platform
 * grids. Pass a Lucide icon (or any node) as `icon`; it renders green at 20px.
 */
export function FeatureCard({ icon, title, desc }) {
  return (
    <Card hover>
      {icon ? (
        <div style={{ color: "var(--u-green)", marginBottom: "16px", display: "flex" }}>{icon}</div>
      ) : null}
      <h3 style={{ fontSize: "16px", fontWeight: 500, margin: "0 0 8px", color: "var(--u-text)" }}>{title}</h3>
      <p style={{ fontSize: "14px", color: "var(--u-text-muted)", lineHeight: 1.6, margin: 0 }}>{desc}</p>
    </Card>
  );
}
