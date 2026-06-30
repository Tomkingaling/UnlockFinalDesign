import * as React from "react";

/**
 * @startingPoint section="Text" subtitle="Light-weight Inter display heading" viewport="560x120"
 */
export interface SectionHeadingProps {
  children: React.ReactNode;
  /** Tag to render. Default "h2". */
  as?: "h1" | "h2" | "h3";
  /** Fluid scale step. */
  size?: "hero" | "display" | "section" | "sectionSm";
  style?: React.CSSProperties;
}

export function SectionHeading(props: SectionHeadingProps): JSX.Element;
