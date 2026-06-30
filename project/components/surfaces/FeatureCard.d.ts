import * as React from "react";

/**
 * @startingPoint section="Surfaces" subtitle="Icon + title + description grid card" viewport="320x180"
 */
export interface FeatureCardProps {
  /** Lucide icon node (rendered green, 20px). Optional. */
  icon?: React.ReactNode;
  title: string;
  desc: string;
}

export function FeatureCard(props: FeatureCardProps): JSX.Element;
