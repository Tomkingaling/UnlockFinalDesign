// public-site/src/app/[slug]/ContentCard.tsx
import type { LearnListItem } from "@/data/learn-content";
import styles from "./personal.module.css";

export default function ContentCard({
  tag,
  heading,
  paragraphs,
  bullets,
  note,
  sourceHref,
  sourceLabel,
  highlight,
}: {
  tag: string;
  heading: string;
  paragraphs: string[];
  bullets?: LearnListItem[];
  note?: string;
  sourceHref?: string;
  sourceLabel: string;
  highlight?: boolean;
}) {
  return (
    <div className={highlight ? `${styles.card} ${styles.cardHighlight}` : styles.card}>
      <span className={styles.tag}>{tag}</span>
      <h2 className={styles.cardHeading}>{heading}</h2>
      {paragraphs.map((paragraph, i) => (
        <p key={`${heading}-p-${i}`}>{paragraph}</p>
      ))}
      {bullets && (
        <ul>
          {bullets.map((item: LearnListItem, i: number) => (
            <li key={`${heading}-li-${i}`}>
              {item.term && <b>{item.term} </b>}
              {item.text}
            </li>
          ))}
        </ul>
      )}
      {note && <p className={styles.cardFootnote}>{note}</p>}
      <div className={styles.source}>
        {sourceHref ? <a href={sourceHref}>{sourceLabel}</a> : sourceLabel}
      </div>
    </div>
  );
}
