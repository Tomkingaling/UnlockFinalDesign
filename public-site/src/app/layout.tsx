import type { Metadata } from "next";
import "./globals.css";

const TITLE = "Unlock — Everything you own, finally in one place";
const DESCRIPTION =
  "Portfolio intelligence for UK investors with £1M+. Unlock reconciles every holding at lot level with full tax awareness — so you see your position before you act.";

export const metadata: Metadata = {
  metadataBase: new URL("https://unlockdd.com"),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/platform/",
    siteName: "Unlock",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Unlock" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
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
