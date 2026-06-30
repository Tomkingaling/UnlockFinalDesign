import * as React from "react";

export interface EyebrowProps {
  children: React.ReactNode;
  /** Hero variant uses wider 0.3em tracking. */
  hero?: boolean;
  style?: React.CSSProperties;
}

export function Eyebrow(props: EyebrowProps): JSX.Element;
