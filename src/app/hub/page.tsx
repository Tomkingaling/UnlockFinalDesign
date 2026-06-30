'use client';

import { Lock, Presentation, FileCode2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import styles from './hub.module.css';

const ON = [5, 26, 34, 43, 61, 69, 76, 88, 12, 50, 55, 71, 83, 19, 40, 66, 92, 3, 28, 47, 58, 80];

export default function HubPage() {
  const cells = Array.from({ length: 96 }, (_, i) => ON.includes(i));

  return (
    <div className={styles.stage}>
      <div className={styles.gp}>
        {cells.map((isOn, i) => (
          <div
            key={i}
            className={isOn ? styles.gpOn : styles.gpCell}
            style={isOn ? { animationDelay: `${(i % 7) * 0.4}s` } : undefined}
          />
        ))}
      </div>
      <div className={styles.glow} />

      <header className={styles.topbar}>
        <div className={styles.brand}>
          <span className={styles.brandInner}>
            <img src="/assets/unlock-green.svg" alt="Unlock" />
            <span className={styles.dot}>.</span>
          </span>
          <span className={styles.tagline}>Return On Intelligence</span>
        </div>
        <span className={styles.privacy}>
          <Lock className={styles.privacyIcon} />
          Private prototype
        </span>
      </header>

      <main className={styles.shell}>
        <div className={`${styles.inner} u-heroin`}>
          <p className={styles.eyebrow}>Founding round · 2026</p>
          <h1>
            Founding-round prototype{' '}
            <span className="u-grad-green">&amp; build spec</span>
          </h1>
          <p className={styles.lead}>
            A working prototype of the Unlock investor walkthrough, plus the full specification,
            architecture and compliance rules a production rebuild needs. Shared for design and build.
          </p>

          <div className={styles.routes}>
            <Link className={styles.route} href="/deck">
              <span className={styles.ic}>
                <Presentation size={21} />
              </span>
              <p className={styles.badge}>Prototype · gated</p>
              <h3>Investor walkthrough</h3>
              <p>
                The live 15-slide pitch deck. Gated financial promotion — confirm your investor category
                to enter. The gate stores a local session, so it remembers you on return.
              </p>
              <span className={styles.go}>
                Open the deck <ArrowRight className={styles.goIcon} />
              </span>
            </Link>

            <Link className={styles.route} href="/spec">
              <span className={styles.ic}>
                <FileCode2 size={21} />
              </span>
              <p className={styles.badge}>For the build</p>
              <h3>Build spec &amp; rules</h3>
              <p>
                Everything a Lovable / React / Supabase rebuild needs: design tokens, narrative arc,
                the interactive EIS model logic, the server-side gate architecture, and the verbatim
                compliance rules.
              </p>
              <span className={styles.go}>
                Open the spec <ArrowRight className={styles.goIcon} />
              </span>
            </Link>
          </div>
        </div>
      </main>

      <section className={styles.compliance}>
        <div className={styles.rule} />
        <p>
          <b>Private prototype.</b> This is a financial promotion directed only at certified
          high-net-worth and self-certified sophisticated investors, shared for design / build purposes.
          Please don&apos;t circulate the link publicly. Capital is at risk; figures are illustrative,
          not a forecast.
        </p>
      </section>

      <footer className={styles.footer}>
        <div className={styles.fl}>
          <img src="/assets/unlock-white.svg" alt="Unlock" /> Unlock Services Limited
        </div>
        <div className={styles.fr}>Prototype build 2026</div>
      </footer>
    </div>
  );
}
