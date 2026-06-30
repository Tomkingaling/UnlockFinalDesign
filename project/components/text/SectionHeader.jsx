import React from "react";
import { Eyebrow } from "./Eyebrow.jsx";
import { SectionHeading } from "./SectionHeading.jsx";

/**
 * SectionHeader — the standard eyebrow + heading + lead block. `align="center"` for hero
 * intros, "left" for content sections. Optional `divider` draws the green hairline.
 * Pass `actions` (e.g. ArcButtons) to render a button row.
 */
export function SectionHeader({ eyebrow, title, lead, align = "left", size = "section", divider = false, actions, maxWidth = 640 }) {
  const center = align === "center";
  return (
    <div style={{ textAlign: center ? "center" : "left", maxWidth: center ? `${maxWidth}px` : "none", marginLeft: center ? "auto" : 0, marginRight: center ? "auto" : 0 }}>
      {eyebrow ? <Eyebrow hero={size === "hero"}>{eyebrow}</Eyebrow> : null}
      <SectionHeading as={size === "section" || size === "sectionSm" ? "h2" : "h1"} size={size} style={{ maxWidth: center ? "none" : `${maxWidth}px` }}>
        {title}
      </SectionHeading>
      {lead ? (
        <p style={{ fontSize: "var(--u-type-lead)", color: "var(--u-text-muted)", lineHeight: 1.6, margin: "24px 0 0", maxWidth: center ? "none" : "600px" }}>{lead}</p>
      ) : null}
      {divider ? <div className="u-divider" style={{ marginTop: "20px", maxWidth: "60px", marginLeft: center ? "auto" : 0, marginRight: center ? "auto" : 0 }} /> : null}
      {actions ? <div style={{ display: "flex", gap: "12px", marginTop: "32px", justifyContent: center ? "center" : "flex-start", flexWrap: "wrap" }}>{actions}</div> : null}
    </div>
  );
}
