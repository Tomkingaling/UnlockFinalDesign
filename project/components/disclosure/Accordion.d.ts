import * as React from "react";

export interface AccordionItem {
  /** Question / row label (white, 17px). */
  q: React.ReactNode;
  /** Answer / panel body (muted, revealed on open). */
  a: React.ReactNode;
}

/**
 * @startingPoint section="Disclosure" subtitle="Hairline-divided FAQ accordion, green chevron" viewport="640x360"
 */
export interface AccordionProps {
  /** Rows to render. */
  items: AccordionItem[];
  /** Allow multiple rows open at once. Default false (single-open). */
  multi?: boolean;
  /** Indices open on first render. */
  defaultOpen?: number[];
  style?: React.CSSProperties;
}

export function Accordion(props: AccordionProps): JSX.Element;
