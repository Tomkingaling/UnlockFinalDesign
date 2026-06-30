import * as React from "react";

/**
 * @startingPoint section="Surfaces" subtitle="Dark hairline card with hover + highlighted states" viewport="320x180"
 */
export interface CardProps {
  children: React.ReactNode;
  /** Enable the feature/tool hover: fill brightens, border turns green. */
  hover?: boolean;
  /** Green-tinted "most popular" / emphasis treatment. */
  highlighted?: boolean;
  /** Corner radius: "m" (8px, default) or "l" (12px, larger panels). */
  radius?: "m" | "l";
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
