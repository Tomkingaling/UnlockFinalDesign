import * as React from "react";

export interface TickerItem {
  label: string;
  value: string;
  /** Leading "+" → green, otherwise red. */
  change: string;
}

export interface DataTickerProps {
  items?: TickerItem[];
}

export function DataTicker(props: DataTickerProps): JSX.Element;
