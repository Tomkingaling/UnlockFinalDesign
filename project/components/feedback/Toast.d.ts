import * as React from "react";

/**
 * @startingPoint section="Feedback" subtitle="Transient confirmation toast (status dot, slide-up)" viewport="420x110"
 */
export interface ToastProps {
  /** Visible when true; returns null when false. Default true. */
  open?: boolean;
  /** Status colour of the dot. Default "success". */
  variant?: "success" | "info" | "warning" | "error";
  /** Bold first line (white). */
  title?: React.ReactNode;
  /** Supporting line (muted). */
  message?: React.ReactNode;
  /** Auto-dismiss delay in ms; fires onClose. Default 4000. Pass 0 to disable. */
  duration?: number;
  /** Dismiss handler — also renders the × close affordance. */
  onClose?: () => void;
  style?: React.CSSProperties;
}

export function Toast(props: ToastProps): JSX.Element | null;
