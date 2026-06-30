import * as React from "react";

export interface StatCardProps {
  label: string;
  /** Pre-formatted figure, e.g. "£2,945,000". */
  value: string;
  style?: React.CSSProperties;
}

export function StatCard(props: StatCardProps): JSX.Element;
