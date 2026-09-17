// public-site/src/app/learn/[topic]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  LEARN_TOPIC_ORDER,
  LEARN_TOPICS,
  FOOTER_DISCLAIMER,
  getLearnTopic,
} from "@/data/learn-content";
import styles from "./learn.module.css";

export function generateStaticParams() {
  return LEARN_TOPIC_ORDER.map((topic) => ({ topic }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;
  const entry = getLearnTopic(topic);
  return {
    title: entry ? `${entry.title} — Unlock` : "Unlock",
    description: entry?.lede,
    robots: { index: false, follow: false },
  };
}

export default async function LearnTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const entry = getLearnTopic(topic);
  if (!entry) notFound();

  return (
    <>
      <div className={styles.nav}>
        <div className={styles.navin}>
          <Link className={styles.brand} href="/">
            <img src="/assets/unlock-white.svg" alt="Unlock" />
            <span className={styles.dot}>.</span>
          </Link>
          <span className={styles.related}>
            {LEARN_TOPIC_ORDER.map((slug) => {
              const t = LEARN_TOPICS[slug];
              return slug === entry.slug ? (
                <span key={slug} className={styles.current}>
                  {t.navLabel}
                </span>
              ) : (
                <a key={slug} href={`/learn/${slug}`}>
                  {t.navLabel}
                </a>
              );
            })}
          </span>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.kicker}>{entry.kicker}</div>
        <h1 className={styles.title}>{entry.title}</h1>
        <p className={styles.lede}>{entry.lede}</p>

        {entry.sections.map((section) => (
          <div key={section.heading}>
            <h2 className={styles.sectionHeading}>{section.heading}</h2>
            {section.paragraphs.map((paragraph, i) => (
              <p key={`${section.heading}-p-${i}`} className={styles.body}>
                {paragraph}
              </p>
            ))}
            {section.list && (
              <ul className={styles.list}>
                {section.list.map((item, i) => (
                  <li key={`${section.heading}-li-${i}`}>
                    {item.term && <b>{item.term} </b>}
                    {item.text}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className={styles.divider} />
        <p className={styles.closingNote}>{entry.closingNote}</p>
      </main>

      <footer className={styles.footer}>
        <p>{FOOTER_DISCLAIMER}</p>
      </footer>
    </>
  );
}
