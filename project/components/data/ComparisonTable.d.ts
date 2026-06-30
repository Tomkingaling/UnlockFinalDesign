import * as React from "react";

export interface ComparisonRow {
  label: string;
  /** One value per column, in order. true → green check, false/null → dash, string → text. */
  values: (boolean | string | null)[];
}

/**
 * @startingPoint section="Data" subtitle="Unlock-vs-incumbents comparison matrix" viewport="560x260"
 */
export interface ComparisonTableProps {
  /** Column headers; the first is emphasised green (the Unlock column). */
  columns: string[];
  rows: ComparisonRow[];
}

export function ComparisonTable(props: ComparisonTableProps): JSX.Element;
