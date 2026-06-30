'use client';

import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './home.module.css';

const CATEGORIES = [
  {
    title: 'High-net-worth individual',
    sub: 'FPO Art 48',
    desc: 'Income £100,000+ in the last financial year, or net assets £250,000+ (excluding home, pensions and certain items).',
  },
  {
    title: 'Self-certified sophisticated investor',
    sub: 'FPO Art 50A',
    desc: 'e.g. two or more unlisted-company investments in two years; director of a £1m+ turnover company; angel-network member; or relevant PE/SME-finance experience.',
  },
];

export default function HomePage() {
  const router = useRouter();
  const [cat, setCat] = useState<number | null>(null);
  const [declared, setDeclared] = useState(false);

  const ready = cat !== null && declared;
  const hintText = ready
    ? 'Ready — you may continue.'
    : cat === null
    ? 'Please choose a category and tick the box to continue.'
    : 'Please tick the box to continue.';

  function handleConfirm() {
    if (ready) router.push('/investors');
  }

  return (
    <>
      <div className={styles.proto}>
        <b>Prototype</b> · Zone 0 (neutral router) · illustrative data · no investment inducement
      </div>

      <nav className={styles.nav}>
        <div className={styles.navin}>
          <div className={styles.navleft}>
            <Link className={styles.brand} href="/">
              <img src="/assets/unlock-white.svg" alt="Unlock" />
              <span className={styles.dot}>.</span>
            </Link>
            <ul className={styles.navlinks}>
              <li className={styles.cur}>Home</li>
              <li><Link href="/platform">Platform</Link></li>
              <li><Link href="/platform#how">How it works</Link></li>
              <li><Link href="/platform#pricing">Pricing</Link></li>
              <li><Link href="/platform#about">About</Link></li>
              <li><Link href="/investors">Investors</Link></li>
            </ul>
          </div>
          <Link className={styles.navCta} href="/platform#demo">Book a demo</Link>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.glow} />
        <div className={`${styles.heroIn} u-heroin`}>
          <div className={styles.mark}>
            Unlock<span>.</span>
          </div>
          <h1>Two ways in.</h1>
          <p className={styles.heroLead}>
            Unlock is portfolio-intelligence software for UK private investors. Choose how
            you&apos;d like to continue.
          </p>
        </div>
      </section>

      <section className={styles.doors}>
        {/* Investor door / gate */}
        <div className={styles.door}>
          <p className={`${styles.doorTag} ${styles.doorTagGreen}`}>
            For qualifying investors · financial promotion
          </p>
          <h2>Investing in Unlock</h2>
          <p className={styles.doorBody}>
            Behind this door is information about investing in Unlock — a financial promotion for
            high-net-worth and self-certified sophisticated investors. These investments are high-risk
            and illiquid; you could lose all your capital. UK rules mean we can only show it once you
            confirm your investor category below.
          </p>

          <p className={styles.gateQ}>Confirm which category applies to you</p>

          {CATEGORIES.map((c, i) => (
            <div
              key={i}
              className={`${styles.opt} ${cat === i ? styles.optSel : ''}`}
              onClick={() => setCat(i)}
            >
              <span className={styles.radio}>
                {cat === i && <span className={styles.radioDot} />}
              </span>
              <span>
                <p className={styles.optTitle}>
                  {c.title} <em className={styles.optTitleSub}>{c.sub}</em>
                </p>
                <p className={styles.optDesc}>{c.desc}</p>
              </span>
            </div>
          ))}

          <div
            className={styles.declare}
            onClick={() => setDeclared((d) => !d)}
          >
            <span className={`${styles.checkbox} ${declared ? styles.checkboxOn : ''}`}>
              <Check className={`${styles.checkIcon} ${declared ? styles.checkIconOn : ''}`} />
            </span>
            <p className={styles.declareText}>
              I understand these investments are high-risk, that I could lose all the money I
              invest, and that I won&apos;t have retail-client protections. I accept the statutory
              statement for my category.
            </p>
          </div>

          <button
            className={`${styles.gateCta} ${ready ? styles.gateCtaReady : ''}`}
            onClick={handleConfirm}
          >
            Confirm &amp; view the investment{' '}
            <ArrowRight className={styles.gateCtaIcon} />
          </button>
          <p className={`${styles.gateHint} ${ready ? styles.gateHintReady : ''}`}>
            {hintText}
          </p>
          <p className={styles.gateNote}>
            Takes a few seconds — a regulatory requirement before investment information can be
            shown, not a credit check.
          </p>
        </div>

        {/* Platform door */}
        <Link className={`${styles.door} ${styles.platDoor}`} href="/platform">
          <p className={styles.doorTag}>Open to everyone</p>
          <h2>Just here for the platform?</h2>
          <p className={styles.doorBody}>
            See everything about the Unlock platform on its own — the tools, pricing and team —
            without the investment information reserved for qualifying investors.
          </p>
          <span className={styles.go}>
            Continue to the platform <ArrowRight className={styles.goIcon} />
          </span>
        </Link>
      </section>

      <section className={styles.explain}>
        <div className={styles.rule} />
        <p>
          A neutral router (Zone 0): it states the two paths and the risk, and sells nothing. The
          investor path leads to a statutory self-certification before any promotional material is
          shown.
          <br />
          For the build team:{' '}
          <Link href="/spec">read the build spec &amp; handoff for Lovable →</Link>
        </p>
      </section>

      <footer className={styles.footer}>
        <div className={styles.fin}>
          <span className={styles.finLeft}>
            <img src="/assets/unlock-white.svg" alt="Unlock" /> Unlock Services Limited
          </span>
          <span>© 2026 · Prototype build</span>
        </div>
      </footer>
    </>
  );
}
