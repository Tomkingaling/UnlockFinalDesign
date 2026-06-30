import * as React from "react";

/**
 * @startingPoint section="Surfaces" subtitle="Team member card with initials avatar" viewport="320x200"
 */
export interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  /** Override the auto-derived initials. */
  initials?: string;
}

export function TeamCard(props: TeamCardProps): JSX.Element;
