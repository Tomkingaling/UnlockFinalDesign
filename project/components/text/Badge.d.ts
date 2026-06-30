import * as React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  /** Colour tone. Default "green". */
  tone?: "green" | "amber" | "red" | "neutral";
  /** Prefix with a status dot. */
  dot?: boolean;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
