import React from "react";

/**
 * SectionHeading — light-weight Inter display heading. `as` picks the tag;
 * `size` picks the fluid scale step. Use `<br/>` in children for two-part headlines.
 */
export function SectionHeading({ children, as = "h2", size = "section", style = {} }) {
  const Tag = as;
  const sizes = {
    hero: { fontSize: "var(--u-type-hero)", lineHeight: 1.08, letterSpacing: "-0.015em" },
    display: { fontSize: "var(--u-type-display)", lineHeight: 1.1, letterSpacing: "-0.015em" },
    section: { fontSize: "var(--u-type-section)", lineHeight: 1.15, letterSpacing: "-0.01em" },
    sectionSm: { fontSize: "var(--u-type-section-sm)", lineHeight: 1.15, letterSpacing: "-0.01em" },
  };
  return (
    <Tag
      style={{
        fontFamily: "var(--u-font-heading)",
        fontWeight: 300,
        color: "var(--u-text)",
        margin: 0,
        textWrap: "balance",
        ...(sizes[size] || sizes.section),
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
