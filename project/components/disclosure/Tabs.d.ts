import * as React from "react";

export interface TabItem {
  /** Tab label shown in the rail. */
  label: React.ReactNode;
  /** Panel rendered below the rail when this tab is active. */
  content: React.ReactNode;
}

/**
 * @startingPoint section="Disclosure" subtitle="Underline tab switcher (green active underline)" viewport="640x300"
 */
export interface TabsProps {
  /** Tabs to render, in order. */
  tabs: TabItem[];
  /** Index active on first render. Default 0. */
  defaultIndex?: number;
  style?: React.CSSProperties;
}

export function Tabs(props: TabsProps): JSX.Element;
