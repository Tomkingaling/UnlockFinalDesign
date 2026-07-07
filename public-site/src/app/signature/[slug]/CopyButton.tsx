"use client";

import { useState } from "react";

export default function CopyButton({
  html,
  text,
}: {
  html: string;
  text: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      if (typeof ClipboardItem !== "undefined" && navigator.clipboard.write) {
        const item = new ClipboardItem({
          "text/html": new Blob([html], { type: "text/html" }),
          "text/plain": new Blob([text], { type: "text/plain" }),
        });
        await navigator.clipboard.write([item]);
      } else {
        await navigator.clipboard.writeText(text);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <button
      onClick={handleCopy}
      style={{
        marginTop: 32,
        padding: "10px 20px",
        fontSize: 14,
        fontFamily: "Arial, Helvetica, sans-serif",
        background: copied ? "#00bb77" : "#1a1a1a",
        color: "#fff",
        border: "none",
        borderRadius: 6,
        cursor: "pointer",
      }}
    >
      {copied ? "Copied — paste into Gmail/Pipedrive" : "Copy signature"}
    </button>
  );
}
