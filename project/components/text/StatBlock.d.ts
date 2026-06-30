import * as React from "react";

/**
 * @startingPoint section="Text" subtitle="Big stat number + label with green hairline" viewport="240x140"
 */
export interface StatBlockProps {
  /** The figure, e.g. "£2.5M", "40%". */
  value: string;
  label: string;
  style?: React.CSSProperties;
}

export function StatBlock(props: StatBlockProps): JSX.Element;
