import * as React from "react";

/**
 * @startingPoint section="Forms" subtitle="Compact inline email capture band" viewport="460x150"
 */
export interface LeadCaptureInlineProps {
  heading?: string;
  placeholder?: string;
  cta?: string;
  note?: string;
  /** Called with the entered email on submit. */
  onSubmit?: (email: string) => void;
}

export function LeadCaptureInline(props: LeadCaptureInlineProps): JSX.Element;
