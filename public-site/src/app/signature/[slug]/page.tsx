import { notFound } from "next/navigation";
import { getSignature, SIGNATURES } from "@/data/signatures";
import { buildSignatureHtml, buildSignatureText } from "@/lib/signature-html";
import CopyButton from "./CopyButton";

export function generateStaticParams() {
  return Object.keys(SIGNATURES).map((slug) => ({ slug }));
}

export default async function SignaturePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getSignature(slug);
  if (!entry) notFound();

  const html = buildSignatureHtml(entry);
  const text = buildSignatureText(entry);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7f0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 40,
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          padding: "48px 56px",
          borderRadius: 12,
          boxShadow: "0 2px 24px rgba(0,0,0,0.08)",
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <CopyButton html={html} text={text} />
      </div>
      <p
        style={{
          marginTop: 24,
          fontSize: 13,
          color: "#888",
          maxWidth: 420,
          textAlign: "center",
        }}
      >
        This is {entry.name}&apos;s Unlock email signature. Click &ldquo;Copy
        signature&rdquo; and paste directly into your Gmail or Pipedrive
        signature settings.
      </p>
    </div>
  );
}
