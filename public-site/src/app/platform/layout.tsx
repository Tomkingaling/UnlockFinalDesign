import type { Metadata } from "next";

// platform/page.tsx is a client component ('use client'), and client components
// cannot export `metadata`. This server layout carries the page's metadata
// instead — without it the page silently inherits the root layout's.
export const metadata: Metadata = {
  alternates: { canonical: "/platform/" },
};

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
