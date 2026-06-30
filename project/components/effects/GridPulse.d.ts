import * as React from "react";

export interface GridPulseProps {
  /** 96-cell (12x8) array of 0/1; 1 = pulsing green square. Defaults to the hero pattern. */
  pattern?: number[];
}

export function GridPulse(props: GridPulseProps): JSX.Element;
