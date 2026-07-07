import type { SignatureEntry } from "@/data/signatures";

const LOGO_URL = "https://www.unlockdd.com/assets/unlock-black.png";
const GREEN = "#00bb77";
const INK = "#1a1a1a";
const MUTED = "#555555";

// Table-based, inline-styled markup on purpose: this is meant to be pasted
// directly into Gmail/Pipedrive signature editors, which strip <style>
// blocks and don't reliably support flexbox/grid.
export function buildSignatureHtml(entry: SignatureEntry): string {
  const websiteHref = entry.website.startsWith("http")
    ? entry.website
    : `https://${entry.website}`;

  const contactLine = [
    `<a href="mailto:${entry.email}" style="color:${INK};text-decoration:none;">${entry.email}</a>`,
    `<a href="tel:${entry.phone.replace(/\s+/g, "")}" style="color:${INK};text-decoration:none;">${entry.phone}</a>`,
    `<a href="${websiteHref}" style="color:${INK};text-decoration:none;">${entry.website}</a>`,
  ].join(
    `<span style="color:${GREEN};padding:0 10px;">&#9679;</span>`
  );

  const calendlyRow = entry.calendlyUrl
    ? `<tr><td style="padding-top:6px;font:14px Arial, Helvetica, sans-serif;">
         <a href="${entry.calendlyUrl}" style="color:${INK};text-decoration:none;">${entry.calendlyUrl}</a>
       </td></tr>`
    : "";

  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, Helvetica, sans-serif;">
  <tr>
    <td style="padding-right:28px;vertical-align:middle;">
      <img src="${LOGO_URL}" width="200" alt="Unlock" style="display:block;border:0;" />
    </td>
    <td style="border-left:2px solid ${GREEN};padding-left:28px;vertical-align:middle;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr><td style="font:26px Arial, Helvetica, sans-serif;color:${INK};padding-bottom:2px;">${entry.name}</td></tr>
        <tr><td style="font:14px Arial, Helvetica, sans-serif;color:${MUTED};padding-bottom:14px;">${entry.title}</td></tr>
        <tr><td style="font:14px Arial, Helvetica, sans-serif;color:${INK};">${contactLine}</td></tr>
        ${calendlyRow}
      </table>
    </td>
  </tr>
</table>`;
}

export function buildSignatureText(entry: SignatureEntry): string {
  const lines = [
    entry.name,
    entry.title,
    "",
    [entry.email, entry.phone, entry.website].join("  •  "),
  ];
  if (entry.calendlyUrl) lines.push(entry.calendlyUrl);
  return lines.join("\n");
}
