'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { AlertTriangle, CheckCircle2, Lock, ArrowRight } from 'lucide-react';
import styles from './spec.module.css';

const TOC_SECTIONS = [
  { id: 'stack', n: '01', label: 'Stack & porting reality' },
  { id: 'design', n: '02', label: 'Design system (tokens)' },
  { id: 'arc', n: '03', label: 'Narrative arc · 15 slides' },
  { id: 'interactive', n: '04', label: 'Interactive & EIS model' },
  { id: 'compliance', n: '05', label: 'Compliance (verbatim)' },
  { id: 'gate', n: '06', label: 'Server-side gate' },
  { id: 'cta', n: '07', label: 'CTA / booking' },
  { id: 'open', n: '08', label: 'Open decisions' },
  { id: 'checklist', n: '09', label: 'Build & test checklist' },
];

const SLIDES = [
  ['01', 'Mission', '"Built to be one of the 1 in 10 that deliver 10×+ / not a build round."'],
  ['02', 'What & who', 'personas: Estate Architect (£1–3M), Operator-Owner (£1–5M), Multi-Family Principal (£5–20M+).'],
  ['03', 'The problem', 'fragmented / conflicted / inaccessible + concentration-risk visual.'],
  ['04', 'Why unsolved', 'four truths.'],
  ['05', 'The solution', 'animated asset-load.'],
  ['06', 'The product', '3 live systems (Asset Register, Decumulation Planner, Tax Intelligence Engine).'],
  ['07', 'Why we win', 'owned data universe (30k / 600k / 1.6M) + AI-native 23-agent workforce + disruption framing.'],
  ['08', 'How we grow', 'get / convert / keep engine + flywheel.'],
  ['09', 'Why now', 'three windows (regulatory / competitive / founding round).'],
  ['10', 'The market', 'TAM 600k / SAM 180k / target 45k nested-circle viz.'],
  ['11', 'EIS model', 'the interactive centrepiece (§4).'],
  ['12', 'The bet', 'downside / upside, downside led.'],
  ['13', 'Returns & exit', 'two horizons (~10× at 5k subs, ~89× at 45k).'],
  ['14', 'Terms & Sandbox', 'KIC, SEIS-now / EIS-later, hi-fi Sandbox mock.'],
  ['15', 'Book a call', 'close + booking capture.'],
];

const DISCLAIMERS = [
  'Capital is at risk. The value of EIS investments can fall as well as rise, and investors may not get back the full amount invested.',
  'This is decision support, not financial advice. Unlock surfaces structured analysis; the decision is yours.',
  'Unlock operates outside the FCA perimeter by design. What we provide is structured decision support, not regulated financial advice.',
  'These figures are modelled, not guaranteed. Assumptions are visible alongside each projection.',
  'Tax outcomes depend on individual circumstances and may change in the future. The figures shown illustrate general planning logic and are not personalised tax advice.',
  'Past performance is not a reliable indicator of future results.',
  'From April 2027, under the Finance Act 2026 (enacted law, Royal Assent April 2026), defined-contribution pensions become part of the estate for inheritance tax purposes.',
];

const DESIGN_TOKENS = [
  ['bg', '#F3F6EF', 'page sage'],
  ['ink', '#1c1b1d', 'text'],
  ['green', 'hsl(157 100% 37%)', 'primary'],
  ['green-dark', 'hsl(157 100% 27%)', 'accent / text-on-light'],
  ['green-soft', 'hsl(157 55% 94%)', 'chips / fills'],
  ['green-bright', 'hsl(157 100% 55%)', 'on-dark highlight'],
  ['amber', '#E6A21A', 'caution status'],
  ['red', '#E5484D', 'risk / downside'],
];

export default function SpecPage() {
  const tocRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const links = tocRef.current ? Array.from(tocRef.current.querySelectorAll('a')) : [];
    const map = new Map(links.map((a) => [a.getAttribute('href')!.slice(1), a]));

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            links.forEach((l) => l.classList.remove(styles.active));
            map.get(e.target.id)?.classList.add(styles.active);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    document.querySelectorAll('section.specBlock').forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <header className={styles.topbar}>
        <div className={styles.brand}>
          <span className={styles.brandInner}>
            <img src="/assets/unlock-green.svg" alt="Unlock" />
            <span className={styles.dot}>.</span>
          </span>
          <span className={styles.brandTag}>Return On Intelligence</span>
        </div>
        <Link className={styles.deckLink} href="/deck">
          View the deck <ArrowRight />
        </Link>
      </header>

      <div className={styles.hero}>
        <p className={styles.eyebrow}>Build specification</p>
        <h1>
          Build spec <span className="u-grad-green">&amp; rules</span>
        </h1>
        <p className={styles.intro}>
          Everything a production rebuild of the Unlock investor walkthrough needs — design system,
          narrative, interactive logic, gate architecture and the verbatim compliance rules. Target
          stack: <b>Lovable (React + Vite + Tailwind + shadcn/ui) + Supabase</b>.
        </p>
        <p className={styles.source}>
          Companion to the working prototype (<code>deck.html</code>). Source of record:{' '}
          <code>unlock-live-deck-BUILD-BRIEF.md</code>,{' '}
          <code>unlock-invest-site-spec-and-sitemap-V1.md</code>,{' '}
          <code>unlock-live-deck-PRODUCTION-SPEC.md</code>. Governed by the Unlock Financial
          Promotion Playbook&nbsp;V1.
        </p>
      </div>

      <div className={styles.layout}>
        <nav className={styles.toc} ref={tocRef as React.RefObject<HTMLElement>}>
          <p className={styles.tocLbl}>Contents</p>
          {TOC_SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              <span className={styles.tocN}>{s.n}</span>
              {s.label}
            </a>
          ))}
        </nav>

        <main className={styles.content}>
          {/* 01 Stack */}
          <section className={`${styles.block} specBlock`} id="stack">
            <span className={styles.secnum}>01</span>
            <h2>Stack &amp; porting reality</h2>
            <p>
              Target: <b>Lovable</b> (where <code>unlockdd.com</code> already lives) — React / Vite /
              TypeScript / Tailwind / shadcn/ui, with <b>Supabase</b> as the backend.
            </p>
            <div className={`${styles.callout} ${styles.warn}`}>
              <span className={styles.cap}><AlertTriangle /> Porting reality</span>
              <p>
                <b>Lovable is export-only.</b> It cannot import an existing repo — it builds an app and
                pushes <em>out</em> to a GitHub repo it creates. So this prototype is the{' '}
                <b>reference spec</b> that Lovable rebuilds from; it is not imported. The{' '}
                <b>backend carries over directly</b>: stand up the Supabase project independently, and
                Lovable connects to that same project (paste Project URL + anon key).
              </p>
            </div>
          </section>

          {/* 02 Design */}
          <section className={`${styles.block} specBlock`} id="design">
            <span className={styles.secnum}>02</span>
            <h2>Design system</h2>
            <p>Reuse the existing <code>unlockdd.com</code> shadcn tokens. Type: <b>Inter</b> 400–900.</p>
            <h3>shadcn CSS variables (HSL)</h3>
            <pre className={styles.pre}>
              <span className={styles.cm}>{'/* index.css :root */'}</span>{'\n'}
              {'--background:80 27% 95%;   '}<span className={styles.cm}>{'/* #F3F6EF sage */'}</span>{'\n'}
              {'--foreground:270 3% 13%;   '}<span className={styles.cm}>{'/* near-black ink */'}</span>{'\n'}
              {'--card:0 0% 100%;\n'}
              {'--primary:157 100% 37%;    '}<span className={styles.cm}>{'/* brand green ≈ #00BD74 */'}</span>{'\n'}
              {'--primary-foreground:0 0% 100%;\n'}
              {'--secondary:0 0% 96%;  --muted:0 0% 93%;  --muted-foreground:0 0% 40%;\n'}
              {'--accent:157 100% 27%;     '}<span className={styles.cm}>{'/* darker green */'}</span>{'\n'}
              {'--destructive:0 84% 60%;\n'}
              {'--border:0 0% 85%;  --ring:157 100% 37%;  --radius:.5rem;'}
            </pre>
            <h3>Plain tokens used in the prototype</h3>
            <table className={styles.tbl}>
              <thead>
                <tr><th>Token</th><th>Value</th><th>Use</th></tr>
              </thead>
              <tbody>
                {DESIGN_TOKENS.map(([token, value, use]) => (
                  <tr key={token}>
                    <td>{token}</td>
                    <td><code>{value}</code></td>
                    <td>{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3>Components &amp; motion</h3>
            <ul>
              <li><b>Cards</b> — white, soft shadow, hover lift; icon chip (36px rounded, green-soft bg).</li>
              <li><b>Pills / chips</b> — green / amber / red status.</li>
              <li><b>Dark sections</b> — green radial mesh background; gradient-filled stat numerals.</li>
              <li><b>Tagline</b> — <em>Return On Intelligence</em> with R / O / I in green (the ROI read-through). Appears in the logo lockup, the cover hero, and the closing sign-off.</li>
              <li><b>Icons</b> — custom stroke SVG set (currentColor). Replace any unicode glyphs.</li>
              <li><b>Motion</b> — staggered content reveal on slide-activate (Framer Motion <code>variants</code> + <code>whileInView</code>); slide-entrance animation; animated orbital motif on the cover; D3 transitions for the four data visuals. Respect <code>prefers-reduced-motion</code>.</li>
            </ul>
          </section>

          {/* 03 Arc */}
          <section className={`${styles.block} specBlock`} id="arc">
            <span className={styles.secnum}>03</span>
            <h2>Narrative arc — 15 slides</h2>
            <p>
              Driven by → ← arrows, a top tab menu, and a grouped side menu with progress dots.
              Skip to any section or walk it linearly.
            </p>
            <table className={styles.tbl}>
              <tbody>
                {SLIDES.map(([n, label, desc]) => (
                  <tr key={n}>
                    <td>{n}</td>
                    <td><b>{label}</b> — {desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>
              The earlier &quot;Five named founding investors&quot; proof slide has been removed; named investors
              still appear contextually on the Product slide.
            </p>
          </section>

          {/* 04 Interactive */}
          <section className={`${styles.block} specBlock`} id="interactive">
            <span className={styles.secnum}>04</span>
            <h2>Interactive pieces &amp; EIS model</h2>
            <ul>
              <li><b>Asset-load (Solution)</b> — rows animate in, total counts up, safety lights flip.</li>
              <li><b>Data universe (Why we win, D3)</b> — 30k → 600k → 1.6M expanding concentric dot-rings.</li>
              <li><b>Market (D3)</b> — TAM 600k / SAM 180k / target 45k nested circles, area-proportional, animated.</li>
              <li><b>EIS-over-time model (D3, centrepiece)</b> — ticket slider (£10k–£250k) + outcome toggle (fails / holds / works 3× / strong 6×) → live chart.</li>
            </ul>
            <h3>EIS model logic (illustrative, additional-rate)</h3>
            <pre className={styles.pre}>
              {'effectiveCost   = ticket × 0.70        '}<span className={styles.cm}>{'// after 30% EIS income relief'}</span>{'\n'}
              {'netLossIfFails  = effectiveCost × 0.55 '}<span className={styles.cm}>{'// loss relief 45% of net cost ≈ ticket × 0.385'}</span>{'\n'}
              {'exitValue       = ticket × outcome     '}<span className={styles.cm}>{'// CGT-free after the qualifying hold'}</span>
            </pre>
            <div className={`${styles.callout} ${styles.lock}`}>
              <span className={styles.cap}><CheckCircle2 /> SEIS treatment — confirmed 2026-06-17</span>
              <p>
                <b>SEIS throughout.</b> 50% income relief; on failure the value line floors at ≈ 72.5%{' '}
                <em>capital retained</em> (net loss ≈ 27.5p in the £, additional rate), <b>not zero</b>.
                Gains CGT-free after the qualifying hold. Above SEIS limits (~£250k) the round uses EIS
                (30%; loss ≈ 38.5p) — the prototype models SEIS. Implemented:{' '}
                <code>effectiveCost = ticket×0.50</code>;{' '}
                <code>netLossIfFails = effectiveCost×0.55 ≈ ticket×0.275</code>;{' '}
                <code>failFloor = ticket − netLoss</code>.
              </p>
            </div>
          </section>

          {/* 05 Compliance */}
          <section className={`${styles.block} specBlock`} id="compliance">
            <span className={styles.secnum}>05</span>
            <h2>Compliance — bind verbatim</h2>
            <p>
              <b>s.21 FSMA is a criminal offence.</b> An inducement to invest may only be communicated
              to a person who has validly self-certified as HNW or sophisticated <em>before</em> they
              see it. Gate first; risk warnings throughout; downside ≥ upside; all figures
              &quot;illustrative, not a forecast&quot;.
            </p>
            <h3>Seven mandatory disclaimers (verbatim)</h3>
            <div className={styles.disclaimers}>
              {DISCLAIMERS.map((d, i) => (
                <div key={i} className={styles.disclaimerRow}>
                  <span className={styles.discNum}>{i + 1}</span>
                  <p>{d}</p>
                </div>
              ))}
            </div>
            <div className={`${styles.callout} ${styles.lock}`}>
              <span className={styles.cap}><Lock /> Canonical EIS line — LOCKED, quote exactly</span>
              <p>
                &quot;EIS income tax relief is 30% of the amount invested, up to £1,000,000 per tax year
                (£2,000,000 for Knowledge Intensive Companies).&quot;
              </p>
            </div>
            <h3>Prohibited phrases — never use, anywhere</h3>
            <div className={styles.pillrow}>
              <span className={`${styles.pill} ${styles.red}`}>&quot;22p per pound&quot; — wrong SEIS loss (correct ≈ 27.5p)</span>
              <span className={`${styles.pill} ${styles.red}`}>&quot;7.8× average EIS return&quot; — unsourced</span>
            </div>
          </section>

          {/* 06 Gate */}
          <section className={`${styles.block} specBlock`} id="gate">
            <span className={styles.secnum}>06</span>
            <h2>Server-side certification gate (Supabase)</h2>
            <p>
              The prototype gate is client-side (a local session flag).{' '}
              <b>Production must enforce server-side</b> and store an auditable record before any
              promotional content renders.
            </p>
            <div className={`${styles.callout} ${styles.warn}`}>
              <span className={styles.cap}><AlertTriangle /> Recommended</span>
              <p>
                Capture the binding statutory self-certification inside the <b>SeedLegals</b> Instant
                Investment flow (Unlock&apos;s instrument). The site gate then only controls who reaches
                the gated content. <b>Never retype the prescribed statement from memory</b> — the Art 48
                (HNW) / Art 50A (sophisticated) statements are statutory prescribed forms. Capture via
                SeedLegals, or transcribe verbatim from SI 2024/301 Sch.3 (HNW) / Sch.4 (sophisticated).
              </p>
            </div>
            <h3>Supabase schema</h3>
            <pre className={styles.pre}>
              <span className={styles.kw}>{'create table'}</span>{' public.investor_certifications (\n'}
              {'  id                uuid primary key default gen_random_uuid(),\n'}
              {'  user_id           uuid references auth.users(id) on delete cascade,\n'}
              {'  category          text not null check (category in (\'hnw\',\'sophisticated\')),\n'}
              {'  criterion         text,                 '}<span className={styles.cm}>{'-- which Art 48/50A criterion + how'}</span>{'\n'}
              {'  statement_version text not null,        '}<span className={styles.cm}>{"-- e.g. 'SI 2024/301 Sch.3'"}</span>{'\n'}
              {'  acknowledged      boolean not null default false,\n'}
              {'  source            text not null default \'site\',\n'}
              {'  ip_address        inet,\n'}
              {'  user_agent        text,\n'}
              {'  created_at        timestamptz not null default now(),\n'}
              {'  expires_at        timestamptz not null default (now() + interval \'12 months\')\n'}
              {'};'}
            </pre>
            <h3>RLS + enforcement</h3>
            <ul>
              <li>Enable RLS; user may <code>insert</code> / <code>select</code> only their own rows; no client update/delete (immutable audit record).</li>
              <li>Write through a <b>Supabase Edge Function</b> (service_role) so <code>ip_address</code> / <code>user_agent</code> are server-stamped, not spoofable.</li>
              <li>Identity via Supabase Auth <b>email magic-link</b> (verified session for the audit trail).</li>
              <li>Gated routes check the session server-side (middleware / route guard). No valid, unexpired cert → redirect to the gateway. A valid cert lets returning users straight in until <code>expires_at</code>.</li>
              <li>Add a <code>bookings</code> table (id, user_id, cert_id, scheduler_event_id, stage, created_at) so a booked call is tied to a valid certification.</li>
            </ul>
          </section>

          {/* 07 CTA */}
          <section className={`${styles.block} specBlock`} id="cta">
            <span className={styles.secnum}>07</span>
            <h2>CTA / booking</h2>
            <p>
              The deck&apos;s only conversion action is &quot;Book a discovery call&quot;. Flow:{' '}
              <b>discovery call (20 min) → platform demo with the investor&apos;s own asset classes (30 min)
              → reserve via SeedLegals Instant Investment.</b> Wire the CTA to the real scheduler
              (Calendly / SeedLegals) and capture the booking in Supabase. In the prototype this is a
              modal that validates + confirms + stores locally; a single <code>BOOKING_URL</code> constant
              is the swap point for the live link.
            </p>
          </section>

          {/* 08 Open */}
          <section className={`${styles.block} specBlock`} id="open">
            <span className={styles.secnum}>08</span>
            <h2>Open decisions</h2>
            <p>Confirm before external launch.</p>
            <ul>
              <li>
                <b>SEIS model treatment</b> —{' '}
                <span className={`${styles.pill} ${styles.ok}`} style={{ verticalAlign: 'middle' }}>confirmed</span>{' '}
                SEIS throughout (50%), fail floors at ~72.5% capital retained (see §4).
              </li>
              <li>
                <b>&quot;Disruptive business&quot; definition</b> —{' '}
                <span className={`${styles.pill} ${styles.ok}`} style={{ verticalAlign: 'middle' }}>added</span>{' '}
                on the &quot;Why we win&quot; slide (Christensen-style definition + why Unlock meets it).
              </li>
              <li>
                <b>Pricing</b> — Free / £99 / £299 (the earlier £249 is superseded). <b>Ticket:</b> £40k
                founding / £10k standard. <em>(confirmed 2026-06-17)</em>
              </li>
              <li><b>Calendly URL</b> — paste into <code>BOOKING_URL</code>.</li>
              <li>
                <b>Counsel-owned</b> — canonical regulatory-status line (three competing versions);
                endorsement wording (Tony Vine-Lott + &quot;second Barclays investor&quot;); risk-warning regime
                (COBS 4.12A vs s.21); M2 financial-promotions review; market figures still flagged
                &quot;to be source-verified (RVL)&quot;.
              </li>
              <li>
                <b>Keep OUT</b> — syndicate / third-party-deal inducement content (possible &quot;arranging
                deals&quot; regime; deferred until counsel resolves).
              </li>
            </ul>
          </section>

          {/* 09 Checklist */}
          <section className={`${styles.block} specBlock`} id="checklist">
            <span className={styles.secnum}>09</span>
            <h2>Build &amp; test checklist</h2>
            <ul>
              <li>Uncertified visitor can <b>never</b> reach gated content (server-side guard).</li>
              <li>Certification writes an immutable, timestamped record (category, criterion, statement version, ip/ua).</li>
              <li>Returning certified visitor goes straight in until <code>expires_at</code>.</li>
              <li>Risk bar + &quot;Important information&quot; (7 verbatim disclaimers) present throughout; no prohibited phrases; EIS line canonical; figures labelled illustrative.</li>
              <li>Four D3 / animation pieces fire on slide-activate and recompute; EIS model maths correct (incl. the SEIS fail-floor).</li>
              <li>Both CTAs reach the real scheduler; booking captured + tied to a cert.</li>
              <li>Prescribed statement is SeedLegals-captured or transcribed verbatim (never retyped).</li>
              <li>Mobile: nav collapses, no horizontal scroll, controls clear the risk bar.</li>
              <li><code>prefers-reduced-motion</code> respected; SVG visuals have text alternatives; AA contrast.</li>
            </ul>
          </section>
        </main>
      </div>

      <footer className={styles.footerEl}>
        Unlock Services Limited · build spec 2026 · governed by the Unlock Financial Promotion
        Playbook&nbsp;V1.
      </footer>
    </>
  );
}
