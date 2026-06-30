import * as React from "react";

/**
 * @startingPoint section="Buttons" subtitle="Primary + outline CTA with arc-hover" viewport="360x80"
 */
export interface ArcButtonProps {
  children: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** primary = solid green; outline = transparent w/ border. Default "primary". */
  variant?: "primary" | "outline";
  type?: "button" | "submit";
  /** Stretch to full container width (use in forms / pricing tiers). */
  full?: boolean;
  style?: React.CSSProperties;
}

export function ArcButton(props: ArcButtonProps): JSX.Element;
