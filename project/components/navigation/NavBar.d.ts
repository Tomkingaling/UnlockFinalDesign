import * as React from "react";

/**
 * @startingPoint section="Navigation" subtitle="Sticky frosted marketing nav" viewport="1280x60"
 */
export interface NavBarProps {
  /** Center link labels. */
  items?: string[];
  /** The currently-active label (renders green). */
  active?: string;
  /** Called with the clicked label (or "home" for the logo). */
  onNavigate?: (label: string) => void;
  onDemo?: () => void;
  onLogin?: () => void;
}

export function NavBar(props: NavBarProps): JSX.Element;
