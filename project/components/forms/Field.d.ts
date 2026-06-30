import * as React from "react";

/**
 * @startingPoint section="Forms" subtitle="Labelled input / select, green focus ring" viewport="360x90"
 */
export interface FieldProps {
  /** Label above the control. */
  label?: string;
  /** "input" (default) or "select". */
  as?: "input" | "select";
  type?: string;
  placeholder?: string;
  /** Options when as="select". */
  options?: string[];
  style?: React.CSSProperties;
}

export function Field(props: FieldProps): JSX.Element;
