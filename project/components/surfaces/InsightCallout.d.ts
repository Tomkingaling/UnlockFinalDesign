import * as React from "react";

/**
 * @startingPoint section="Surfaces" subtitle="KPI stat row + green insight callout" viewport="520x180"
 */
export interface InsightCalloutProps {
  /** Green uppercase kicker. Default "Your first insight". */
  label?: string;
  children: React.ReactNode;
  /** Show a dismiss ×. */
  onDismiss?: () => void;
}

export function InsightCallout(props: InsightCalloutProps): JSX.Element;
