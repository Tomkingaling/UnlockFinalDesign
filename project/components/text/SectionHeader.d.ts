import * as React from "react";

/**
 * @startingPoint section="Text" subtitle="Eyebrow + heading + lead block (center / left)" viewport="600x220"
 */
export interface SectionHeaderProps {
  eyebrow?: string;
  /** Heading content — use <br/> for two-part headlines, <span className="u-grad-green"> for accent. */
  title: React.ReactNode;
  lead?: string;
  /** "left" (content sections) or "center" (hero intros). Default "left". */
  align?: "left" | "center";
  size?: "hero" | "display" | "section" | "sectionSm";
  /** Draw the green hairline divider under the block. */
  divider?: boolean;
  /** Button row, e.g. <><ArcButton/>…</>. */
  actions?: React.ReactNode;
  maxWidth?: number;
}

export function SectionHeader(props: SectionHeaderProps): JSX.Element;
