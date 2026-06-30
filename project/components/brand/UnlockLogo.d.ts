import * as React from "react";

export interface UnlockLogoProps {
  /** Pixel height; width is derived. Default 22. */
  height?: number;
  style?: React.CSSProperties;
}

export function UnlockLogo(props: UnlockLogoProps): JSX.Element;
