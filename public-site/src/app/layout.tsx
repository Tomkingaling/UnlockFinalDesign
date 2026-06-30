import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unlock — Portfolio intelligence for UK investors",
  description:
    "Unlock aggregates your entire portfolio, surfaces hidden tax exposure, and gives you access to curated EIS/SEIS deals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
