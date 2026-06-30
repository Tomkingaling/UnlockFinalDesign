import * as React from "react";

/**
 * @startingPoint section="Text" subtitle="Noto Serif italic testimonial / pull-quote" viewport="520x180"
 */
export interface PullQuoteProps {
  quote: string;
  /** Attribution name. Optional. */
  name?: string;
  role?: string;
  initials?: string;
}

export function PullQuote(props: PullQuoteProps): JSX.Element;
