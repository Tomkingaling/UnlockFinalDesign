// public-site/src/app/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProspectBrief, PROSPECT_BRIEFS } from "@/data/prospect-briefs";
import { FOOTER_DISCLAIMER } from "@/data/learn-content";
import ContentCard from "./ContentCard";
import styles from "./personal.module.css";

export function generateStaticParams() {
  return Object.keys(PROSPECT_BRIEFS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brief = getProspectBrief(slug);
  return {
    title: brief ? "Ahead of our call — Unlock" : "Unlock",
    robots: { index: false, follow: false },
  };
}

export default async function ProspectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brief = getProspectBrief(slug);
  if (!brief) notFound();

  return (
    <>
      <div className={styles.nav}>
        <div className={styles.navin}>
          <Link href="/" className={styles.brand}>
            <img src="/assets/unlock-white.svg" alt="Unlock" />
            <span className={styles.dot}>.</span>
          </Link>
        </div>
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.titleName}>{brief.firstName}</span>, {brief.greetingHeading}
        </h1>

        {brief.leadParagraphs.map((paragraph, i) => (
          <p key={`lead-${i}`} className={styles.lead}>
            {paragraph}
          </p>
        ))}

        <h2 className={styles.blockLabel}>{brief.sectionBlockLabel}</h2>
        {brief.cards.map((card) => (
          <ContentCard key={card.heading} {...card} />
        ))}

        {brief.foundingInvestorLeadNote && (
          <div className={styles.leadNote}>
            <b>{brief.foundingInvestorLeadNote.split(":")[0]}:</b>
            {brief.foundingInvestorLeadNote.split(":").slice(1).join(":")}
          </div>
        )}

        <h2 className={styles.blockLabel}>The Founding Investor Programme</h2>
        <ContentCard
          tag={brief.foundingInvestor.tag}
          heading={brief.foundingInvestor.heading}
          paragraphs={brief.foundingInvestor.paragraphs}
          bullets={brief.foundingInvestor.bullets}
          note={brief.foundingInvestor.note}
          sourceLabel={brief.foundingInvestor.sourceLabel}
          highlight
        />

        <h2 className={styles.blockLabel}>{brief.nextCallBlockLabel}</h2>
        <p className={styles.lead}>{brief.nextCallIntro}</p>
        <ul className={styles.nextList}>
          {brief.nextCallAgenda.map((item, i) => (
            <li key={`agenda-${i}`}>{item}</li>
          ))}
        </ul>
        <p className={styles.lead}>{brief.nextCallClosing}</p>
        {brief.footnote && (
          <p className={styles.lead} style={{ fontSize: 13, color: "var(--u-text-faint)" }}>
            {brief.footnote}
          </p>
        )}

        <div className={styles.signoff}>
          {brief.signoffLine}
          <br />
          <span className={styles.signoffName}>Tom</span>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          {FOOTER_DISCLAIMER} Tax reliefs depend on individual circumstances and may change.
        </p>
      </footer>
    </>
  );
}
