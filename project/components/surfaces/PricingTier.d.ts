import * as React from "react";

/**
 * @startingPoint section="Surfaces" subtitle="Subscription pricing tier card" viewport="340x440"
 */
export interface PricingTierProps {
  name: string;
  /** e.g. "£499" or "Custom". */
  price: string;
  /** e.g. "/month". Optional. */
  period?: string;
  desc: string;
  /** Feature lines (rendered with green checks). */
  features?: string[];
  cta?: string;
  /** Green "most popular" emphasis + primary CTA. */
  highlighted?: boolean;
  onCta?: () => void;
}

export function PricingTier(props: PricingTierProps): JSX.Element;
