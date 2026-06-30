import * as React from "react";

export interface FooterProps {
  tagline?: string;
  links?: string[];
  onNavigate?: (label: string) => void;
  /** Show the FP compliance disclaimer block. Default true. */
  showDisclaimer?: boolean;
  disclaimer?: string;
}

export function Footer(props: FooterProps): JSX.Element;
