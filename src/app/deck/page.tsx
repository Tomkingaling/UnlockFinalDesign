'use client';
import { useState, useEffect, useCallback } from 'react';
import { ShieldAlert, Radio, Repeat, Lock, Scale, Swords, Flag, Check, X } from 'lucide-react';
import styles from './deck.module.css';

const fmt = (n: number) => '£' + Math.round(n).toLocaleString('en-GB');

/* ---- EIS/SEIS calculator ---- */
const MULTS: [string, number][] = [['Fails', 0], ['Holds', 1], ['Works 3×', 3], ['Strong 6×', 6]];

/* ---- Data ---- */
const DISCLAIMERS = [
  'Capital is at risk. The value of EIS investments can fall as well as rise, and investors may not get back the full amount invested.',
  'This is decision support, not financial advice. Unlock surfaces structured analysis; the decision is yours.',
  'Unlock operates outside the FCA perimeter by design. What we provide is structured decision support, not regulated financial advice.',
  'These figures are modelled, not guaranteed. Assumptions are visible alongside each projection.',
  'Tax outcomes depend on individual circumstances and may change in the future. The figures shown illustrate general planning logic and are not personalised tax advice.',
  'Past performance is not a reliable indicator of future results.',
  'From April 2027, under the Finance Act 2026 (enacted law, Royal Assent April 2026), defined-contribution pensions become part of the estate for inheritance tax purposes.',
];

const SLIDE_LABELS = ['Mission', 'What & who', 'The problem', 'Why it stays broken', 'The solution', 'The product', 'Why we win', 'How we grow', 'Why now', 'The market', 'EIS model', 'The bet', 'Returns & exit', 'Terms & Sandbox', 'Book a call'];

export default function Deck() {
  /* Gate */
  const [certified, setCertified] = useState(false);
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const [acknowledged, setAcknowledged] = useState(false);

  /* Navigation */
  const [slide, setSlide] = useState(0);
  const total = 15;

  /* Modals */
  const [infoOpen, setInfoOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);

  /* Booking form */
  const [bkName, setBkName] = useState('');
  const [bkEmail, setBkEmail] = useState('');
  const [bkTime, setBkTime] = useState('Weekday morning');
  const [bkErr, setBkErr] = useState('');
  const [bkDone, setBkDone] = useState(false);

  /* EIS */
  const [ticket, setTicket] = useState(40000);
  const [mult, setMult] = useState(2); // Works 3×

  const effectiveCost = ticket * 0.50;
  const netLoss = effectiveCost * 0.55;
  const exitValue = mult === 0 ? (ticket - netLoss) : ticket * MULTS[mult][1];

  /* Check localStorage for prior certification */
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('unlock_certified') || 'null');
      if (saved?.cat) setCertified(true);
    } catch {}
  }, []);

  /* Keyboard navigation */
  const goTo = useCallback((n: number) => {
    setSlide(Math.max(0, Math.min(total - 1, n)));
  }, [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goTo(slide + 1);
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goTo(slide - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [slide, goTo]);

  const enterDeck = () => {
    if (!selectedCat || !acknowledged) return;
    try { localStorage.setItem('unlock_certified', JSON.stringify({ cat: selectedCat, at: Date.now() })); } catch {}
    setCertified(true);
  };

  const certReset = () => {
    try { localStorage.removeItem('unlock_certified'); } catch {}
    setCertified(false);
    setSelectedCat(null);
    setAcknowledged(false);
    setSlide(0);
  };

  const openBooking = () => {
    setBkDone(false);
    setBkErr('');
    setBookOpen(true);
  };

  const submitBooking = () => {
    if (!bkName.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(bkEmail)) {
      setBkErr('Please enter your name and a valid email.');
      return;
    }
    setBkErr('');
    setBkDone(true);
  };

  const gateReady = selectedCat !== null && acknowledged;

  return (
    <div className={styles.stage}>
      {/* Slides */}
      {/* ---- 01 · Mission / cover ---- */}
      <div className={`${styles.slide} ${slide === 0 ? styles.slideActive : slide > 0 ? styles.slidePrev : ''}`} style={{ padding: 0 }}>
        <div className={styles.cover}>
          <div className={styles.gw} style={{ width: 720, height: 720, top: '50%', left: '62%', transform: 'translate(-50%,-50%)' }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <p className={styles.coverRoi}><b>R</b>eturn <b>O</b>n <b>I</b>ntelligence</p>
            <p className={styles.coverMeta} style={{ margin: '0 0 24px' }}>Founding round 2026 · EIS + SEIS · KIC-confirmed</p>
            <h1>Built to be one of the 1 in 10 that deliver <span className={styles.grad}>10×+</span>.</h1>
            <p className={styles.lead} style={{ marginTop: 28 }}><b>This is not a build round.</b> The platform exists, the tools are in use, and development was founder-funded. This round funds growth, not invention. Most early-stage companies don't make it — Unlock is built to be one that does, and the EIS/SEIS structure is designed to soften the cost if it isn't.</p>
            <p className={styles.coverMeta} style={{ marginTop: 34 }}>→ ← arrows to navigate</p>
          </div>
          <div className={styles.orbit}>
            <div className={`${styles.orbitO} ${styles.o1}`} />
            <div className={`${styles.orbitO} ${styles.o2}`} />
            <div className={`${styles.orbitO} ${styles.o3}`} />
            <div className={`${styles.spin} ${styles.s1}`}><span className={styles.orbitDot} /></div>
            <div className={`${styles.spin} ${styles.s2}`}><span className={styles.orbitDot} /></div>
            <div className={styles.orbitTen}>10×</div>
          </div>
        </div>
      </div>

      {/* ---- 02 · What & who ---- */}
      <div className={`${styles.slide} ${slide === 1 ? styles.slideActive : slide > 1 ? styles.slidePrev : ''}`}>
        <span className={styles.wm}>WHO</span>
        <p className={styles.eyebrow}>What we are · who it&apos;s for</p>
        <h2 className={styles.disp}>Portfolio intelligence for serious private investors.</h2>
        <p className={styles.lead}>Not a broker. Not an aggregator. Not a robo-adviser. A whole-of-wealth analysis and planning environment for UK investors with <b>£1M–£20M+</b> held across regulated <em>and</em> alternative assets — conflict-free, and outside the FCA perimeter by design.</p>
        <div className={styles.g3} style={{ marginTop: 44 }}>
          <div className={styles.card}><h3>The Estate Architect</h3><p>£1M–£3M, building a deliberate legacy structure across multiple assets.</p></div>
          <div className={styles.card}><h3>The Operator-Owner</h3><p>£1M–£5M, wealth tied to an enterprise; self-directing and time-poor.</p></div>
          <div className={styles.card}><h3>The Multi-Family Principal</h3><p>£5M–£20M+, wealth held across generations and entities.</p></div>
        </div>
        <p className={styles.foot}>Year-1 bullseye personas from the Unlock discovery. A decision-support tool, not advice.</p>
      </div>

      {/* ---- 03 · The problem ---- */}
      <div className={`${styles.slide} ${styles.slideAlt} ${slide === 2 ? styles.slideActive : slide > 2 ? styles.slidePrev : ''}`}>
        <span className={styles.wm}>PROBLEM</span>
        <p className={styles.eyebrow}>The problem</p>
        <h2 className={styles.disp} style={{ maxWidth: '24ch' }}>HNW investors can&apos;t see their full position — and no one is incentivised to fix it.</h2>
        <div className={styles.g3} style={{ marginTop: 40 }}>
          <div className={styles.card}><h3>Fragmented</h3><p>The average HNW investor holds assets across <b style={{ color: '#fff' }}>4.7 platforms</b>. No single view exists — not from the IFA, the accountant, or any one platform.</p></div>
          <div className={styles.card}><h3>Conflicted</h3><p>Every platform earns from what you hold through it. The intelligence is optimised for their outcomes, not yours. Architectural, not incidental.</p></div>
          <div className={styles.card}><h3>Inaccessible</h3><p>Institutions have analysts and models. Private investors with comparable wealth have a spreadsheet and gut instinct.</p></div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 44, marginTop: 'auto', paddingTop: 32 }}>
          <div>
            <div style={{ fontSize: 58, fontWeight: 300, color: 'var(--u-green)', lineHeight: 1 }}>75%</div>
            <p style={{ fontSize: 15, color: 'var(--u-text-muted)', marginTop: 12, maxWidth: '40ch' }}>of typical UK household wealth sits in just two assets — property &amp; pension. The concentration most investors never see.</p>
          </div>
          <div style={{ flex: 1, maxWidth: 520 }}>
            <p style={{ fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--u-text-faint)', margin: '0 0 4px' }}>Typical household</p>
            <div className={styles.concbar}>
              <i style={{ width: '40%', background: 'var(--u-green)' }} />
              <i style={{ width: '35%', background: 'var(--u-surface, #2b2b2b)' }} />
              <i style={{ width: '25%', background: 'rgba(255,255,255,.12)' }} />
            </div>
            <p style={{ fontSize: 13, color: 'var(--u-text-muted)', marginTop: 10 }}>Property 40% · Pension 35% · everything else 25%</p>
          </div>
        </div>
      </div>

      {/* ---- 04 · Why it stays broken ---- */}
      <div className={`${styles.slide} ${slide === 3 ? styles.slideActive : slide > 3 ? styles.slidePrev : ''}`}>
        <span className={styles.wm}>TRUTHS</span>
        <p className={styles.eyebrow}>Why it stays broken</p>
        <h2 className={styles.disp}>Four truths leave only one answer.</h2>
        <div className={styles.g4} style={{ marginTop: 48 }}>
          {[
            { n: '01', h: 'Structural', p: 'Information asymmetry across every alternative asset class.' },
            { n: '02', h: 'Self-perpetuating', p: 'No party in the system is incentivised to solve it.' },
            { n: '03', h: 'Incumbent-proof', p: 'Their business models depend on the current structure.' },
            { n: '04', h: 'Beyond regulation', p: 'Restricting information increases risk — it doesn\'t reduce it.' },
          ].map(c => (
            <div key={c.n} className={styles.card}>
              <span className={styles.cardN}>{c.n}</span>
              <h3 style={{ fontSize: 20 }}>{c.h}</h3>
              <p>{c.p}</p>
            </div>
          ))}
        </div>
        <p className={styles.foot} style={{ fontSize: 24, color: 'var(--u-text-muted)', maxWidth: 'none' }}>A new entrant. A new model. A new default. <b style={{ color: '#fff' }}>That&apos;s Unlock.</b></p>
      </div>

      {/* ---- 05 · The solution ---- */}
      <div className={`${styles.slide} ${styles.slideAlt} ${slide === 4 ? styles.slideActive : slide > 4 ? styles.slidePrev : ''}`}>
        <p className={styles.eyebrow}>The solution</p>
        <h2 className={styles.disp}>Your whole position — seen, in seconds.</h2>
        <p className={styles.lead} style={{ maxWidth: '58ch' }}>The one thing investors at this level have never had: a complete, lot-level, tax-aware picture — regulated <em>and</em> alternative — before they act.</p>
        <div style={{ display: 'flex', gap: 52, marginTop: 36, alignItems: 'flex-start' }}>
          <div style={{ flex: 1.4 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
              <span className={`${styles.tag} ${styles.tagAmber}`}>Illustrative data</span>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--u-text-faint)' }}>Total portfolio</div>
                <div style={{ fontSize: 34, fontWeight: 300, color: 'var(--u-green)' }}>£1,847,320</div>
              </div>
            </div>
            <table className={styles.ltable}>
              <tbody>
                <tr><td>Global equity tracker · HL ISA</td><td>£284,100</td><td><span className={`${styles.tag} ${styles.tagOk}`}>CGT-free</span></td></tr>
                <tr><td>Mixed allocation · SIPP</td><td>£612,500</td><td><span className={`${styles.tag} ${styles.tagAmber}`}>Pension IHT</span></td></tr>
                <tr><td>EIS portfolio · 4 cos</td><td>£285,000</td><td><span className={`${styles.tag} ${styles.tagOk}`}>BPR qualifying</span></td></tr>
                <tr><td>AIM portfolio · 14 holdings</td><td>£193,800</td><td><span className={`${styles.tag} ${styles.tagOk}`}>BPR partial</span></td></tr>
                <tr><td>Primary residence</td><td>£471,920</td><td><span className={`${styles.tag} ${styles.tagRed}`}>IHT exposed</span></td></tr>
              </tbody>
            </table>
            <div className={styles.metrics}><span>Liquidity: <b>14 months</b></span><span>Concentration: <b>SIPP 33%</b></span><span>Cash buffer: <b>healthy</b></span></div>
          </div>
        </div>
      </div>

      {/* ---- 06 · The product ---- */}
      <div className={`${styles.slide} ${slide === 5 ? styles.slideActive : slide > 5 ? styles.slidePrev : ''}`}>
        <span className={styles.wm}>LIVE</span>
        <p className={styles.eyebrow}>The solution · in use today</p>
        <h2 className={styles.disp}>Three core systems — already live.</h2>
        <div className={styles.g3} style={{ marginTop: 44 }}>
          <div className={styles.card}><span className={`${styles.pill} ${styles.pillOk}`}>Live</span><h3>Asset Register</h3><p>Complete position across regulated and unregulated assets. Modelling David Irons&apos; full estate.</p></div>
          <div className={styles.card}><span className={`${styles.pill} ${styles.pillOk}`}>Live</span><h3>Decumulation Planner</h3><p>Retirement and drawdown across the whole estate — designed with Tony Vine-Lott on his own position.</p></div>
          <div className={styles.card}><span className={`${styles.pill} ${styles.pillAmber}`}>Compounding</span><h3>Tax Intelligence Engine</h3><p>Real-time optimisation; quantified <b style={{ color: 'var(--u-green)' }}>&gt;£2M</b> tax saving on a single user.</p></div>
        </div>
        <p className={styles.foot}>Decision-support tool, not advice; outside the FCA perimeter by design.</p>
      </div>

      {/* ---- 07 · Why we win ---- */}
      <div className={`${styles.slide} ${styles.slideAlt} ${slide === 6 ? styles.slideActive : slide > 6 ? styles.slidePrev : ''}`}>
        <p className={styles.eyebrow}>Proof · why we win</p>
        <h2 className={styles.disp}>We&apos;re not starting from zero.</h2>
        <div className={styles.statrow} style={{ marginTop: 48 }}>
          <div className={styles.stat}><div className={styles.statV}>30k</div><div className={styles.statL}>HNW investors introduced over 12 years</div></div>
          <div className={styles.stat}><div className={styles.statV}>600k</div><div className={styles.statL}>behavioural-match lookalikes · our targeting tier</div></div>
          <div className={styles.stat}><div className={styles.statV}>1.6M</div><div className={styles.statL}>broader universe for scale</div></div>
        </div>
        <p className={styles.foot} style={{ fontSize: 17, maxWidth: 'none', color: 'var(--u-text-muted)' }}><b style={{ color: '#fff' }}>You couldn&apos;t buy this data — it isn&apos;t for sale.</b> Paired with an AI-native 23-agent workforce that scales with compute, not headcount. Conflict-free, subscription-only, HNW — a quadrant no incumbent occupies. We&apos;re disrupting UK HNW wealth management (£3T+ of assets, 2.6M UK HNWIs) the way Amazon, Airbnb and Uber took theirs — by becoming the default.</p>
      </div>

      {/* ---- 08 · How we grow ---- */}
      <div className={`${styles.slide} ${slide === 7 ? styles.slideActive : slide > 7 ? styles.slidePrev : ''}`}>
        <span className={styles.wm}>ENGINE</span>
        <p className={styles.eyebrow}>Proof · how we grow</p>
        <h2 className={styles.disp}>A repeatable acquisition engine — already tested.</h2>
        <div className={styles.g3} style={{ marginTop: 44 }}>
          <div className={styles.card}><div className={styles.ico}><Radio size={20} /></div><h3>Get them</h3><p>AI outreach (the dialler), the owned 30k-strong HNW database and paid channels fill weekly webinars.</p></div>
          <div className={styles.card}><div className={styles.ico}><Repeat size={20} /></div><h3>Convert them</h3><p>Demo → Sandbox → platform value. Q1 2026 pilot: ~50% demo-to-subscriber; ≈ 1–2 subscribers per 100 dials.</p></div>
          <div className={styles.card}><div className={styles.ico}><Lock size={20} /></div><h3>Keep them</h3><p>Data lock-in, product depth and an embedded position. Every record makes the engine smarter.</p></div>
        </div>
        <p className={styles.foot}>The flywheel compounds: dataset → outreach → demo → subscriber → more behavioural data → sharper conversion → a more valuable product — each loop driven by the 23-agent AI workforce, not new headcount.</p>
      </div>

      {/* ---- 09 · Why now ---- */}
      <div className={`${styles.slide} ${styles.slideAlt} ${slide === 8 ? styles.slideActive : slide > 8 ? styles.slidePrev : ''}`}>
        <p className={styles.eyebrow}>The case · why now</p>
        <h2 className={styles.disp}>Three windows are open at once.</h2>
        <div className={styles.g3} style={{ marginTop: 44 }}>
          <div className={styles.card}><div className={styles.ico}><Scale size={20} /></div><h3>Regulatory</h3><p>VCT relief cut 30%→20% (Apr 2026); EIS keeps 30%. BPR capped at £2.5M/estate. Pensions enter IHT from Apr 2027 — the biggest estate-planning shift in a generation.</p></div>
          <div className={styles.card}><div className={styles.ico}><Swords size={20} /></div><h3>Competitive</h3><p>No independent HNW portfolio-intelligence platform exists at this level. UK tax complexity takes 18–24 months to replicate. The data flywheel rewards the first mover.</p></div>
          <div className={styles.card}><div className={styles.ico}><Flag size={20} /></div><h3>Founding round</h3><p>Advance assurance confirmed. £6.5M pre-money — moves up with traction. Step-ups Sept 2026 &amp; Jan 2027; close April 2027.</p></div>
        </div>
        <p className={styles.foot}>From April 2027, under the Finance Act 2026 (enacted law, Royal Assent April 2026), defined-contribution pensions become part of the estate for inheritance tax purposes. Subject to individual circumstances.</p>
      </div>

      {/* ---- 10 · The market ---- */}
      <div className={`${styles.slide} ${slide === 9 ? styles.slideActive : slide > 9 ? styles.slidePrev : ''}`}>
        <span className={styles.wm}>MARKET</span>
        <p className={styles.eyebrow}>The case · the market</p>
        <h2 className={styles.disp}>Large, specific, underserved.</h2>
        <div style={{ display: 'flex', gap: 56, marginTop: 36, alignItems: 'center', flex: 1 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 30 }}>
            <div className={styles.stat} style={{ borderColor: 'var(--u-green)' }}><div className={styles.statV}>£1B+/yr</div><div className={styles.statL}>TAM · ~600,000 liquid millionaires</div></div>
            <div className={styles.stat}><div className={styles.statV} style={{ fontSize: 52 }}>£200M+/yr</div><div className={styles.statL}>SAM · ~180,000 self-directed HNW</div></div>
            <div className={styles.stat}><div className={styles.statV} style={{ fontSize: 52 }}>~3% of SAM</div><div className={styles.statL}>SOM by Year 5 · 5,000 → target 45,000 subscribers</div></div>
          </div>
          <div className={styles.circles}>
            <div className={`${styles.ring} ${styles.r1}`}><span>TAM 600k</span></div>
            <div className={`${styles.ring} ${styles.r2}`}><span>SAM 180k</span></div>
            <div className={`${styles.ring} ${styles.r3}`}><span style={{ marginTop: 5, color: 'var(--u-green)' }}>45k</span></div>
          </div>
        </div>
        <p className={styles.foot}>The moat compounds: 18–24 months to replicate the UK tax engine, and a data flywheel that sharpens the platform with every subscriber. Sources: Henley &amp; Partners; FCA Financial Lives; HMRC; Investment Association. Illustrative.</p>
      </div>

      {/* ---- 11 · EIS model ---- */}
      <div className={`${styles.slide} ${styles.slideAlt} ${slide === 10 ? styles.slideActive : slide > 10 ? styles.slidePrev : ''}`}>
        <p className={styles.eyebrow}>The case · the structure</p>
        <h2 className={styles.disp} style={{ fontSize: 44 }}>How SEIS reshapes the bet — model it yourself.</h2>
        <p className={styles.lead} style={{ fontSize: 19, maxWidth: '62ch' }}>Move the ticket size and outcome. Watch what the reliefs do to the downside and the upside.</p>
        <div className={styles.eis}>
          <div className={styles.eisControls}>
            <div>
              <p className={styles.eisCtlLbl}>Ticket size</p>
              <div className={styles.eisTicket}>{fmt(ticket)}</div>
              <input
                type="range" min={10000} max={250000} step={5000} value={ticket}
                onChange={e => setTicket(Number(e.target.value))}
                className={styles.eisRange}
              />
              <div className={styles.eisRangeLbl}><span>£10k</span><span>£250k</span></div>
            </div>
            <div>
              <p className={styles.eisCtlLbl}>Outcome</p>
              <div className={styles.eisToggle}>
                {MULTS.map(([label], i) => (
                  <button
                    key={label}
                    className={`${styles.eisBtn} ${mult === i ? styles.eisBtnOn : ''}`}
                    onClick={() => setMult(i)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.eisOutputs}>
            <div className={styles.eisOut}>
              <p className={styles.outK}>Effective cost (after 50% SEIS relief)</p>
              <div className={styles.outV}>{fmt(effectiveCost)}</div>
            </div>
            <div className={styles.eisOut}>
              <p className={styles.outK}>If it failed, net loss</p>
              <div className={styles.outV} style={{ color: '#f87171' }}>{fmt(netLoss)}</div>
            </div>
            <div className={styles.eisOut}>
              <p className={styles.outK}>Value at exit (CGT-free)</p>
              <div className={styles.outV} style={{ color: 'var(--u-green)' }}>{fmt(exitValue)}</div>
            </div>
          </div>
        </div>
        <p className={styles.foot} style={{ fontSize: 12 }}>SEIS income tax relief is 50% of the amount invested, up to £200,000 per tax year. Loss relief is shown at 45% of net cost (additional rate) — a net loss of about 27.5p in the £ if it fails. Gains are CGT-free after the qualifying hold. Above the SEIS limits the founding round uses EIS (30%). These figures are modelled, not guaranteed. Not personalised tax advice. Capital is at risk.</p>
      </div>

      {/* ---- 12 · The bet ---- */}
      <div className={`${styles.slide} ${slide === 11 ? styles.slideActive : slide > 11 ? styles.slidePrev : ''}`}>
        <span className={styles.wm}>THE BET</span>
        <p className={styles.eyebrow}>The case · the bet</p>
        <h2 className={styles.disp}>Asymmetric — because the downside is real.</h2>
        <div className={styles.g2} style={{ marginTop: 40, flex: 1 }}>
          <div className={styles.card} style={{ borderColor: 'rgba(239,68,68,.25)' }}>
            <h3 style={{ color: '#f87171' }}>If it doesn&apos;t work</h3>
            <ul style={{ margin: '8px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {['Early-stage, unlisted, illiquid — you can lose your capital.', 'No secondary market, no guaranteed exit.', <span key="a"><b style={{ color: '#fff' }}>50% SEIS relief</b> on the founding tranche (then 30% EIS) cuts effective cost up front.</span>, <span key="b"><b style={{ color: '#fff' }}>Loss relief</b> cushions failure (~27.5p SEIS / ~38.5p EIS net downside, additional rate).</span>].map((item, i) => (
                <li key={i} style={{ fontSize: 16, color: 'var(--u-text-muted)', lineHeight: 1.5 }}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.card} style={{ borderColor: 'var(--u-green-line)' }}>
            <h3 style={{ color: 'var(--u-green)' }}>If it works</h3>
            <ul style={{ margin: '8px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[<span key="a">Gains <b style={{ color: '#fff' }}>CGT-free</b> after the qualifying hold.</span>, <span key="b">WealthTech exits precedented at <b style={{ color: '#fff' }}>6–9× revenue</b>.</span>, 'BPR keeps qualifying holdings outside your estate (2026 cap).', 'Lifetime access + priority syndicate allocation.'].map((item, i) => (
                <li key={i} style={{ fontSize: 16, color: 'var(--u-text-muted)', lineHeight: 1.5 }}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className={styles.foot}>Not tax advice — take independent advice. Capital is at risk.</p>
      </div>

      {/* ---- 13 · Returns & exit ---- */}
      <div className={`${styles.slide} ${styles.slideAlt} ${slide === 12 ? styles.slideActive : slide > 12 ? styles.slidePrev : ''}`}>
        <p className={styles.eyebrow}>The case · returns &amp; exit</p>
        <h2 className={styles.disp}>Value follows adoption — two horizons.</h2>
        <div className={styles.g2} style={{ marginTop: 44 }}>
          <div className={styles.card}>
            <span className={`${styles.pill} ${styles.pillOk}`}>Plan-case floor</span>
            <div style={{ fontSize: 58, fontWeight: 300, color: 'var(--u-green)', lineHeight: 1, marginBottom: 16 }}>~10×</div>
            <p style={{ fontSize: 17 }}>~5,000 subscribers (~£9.5M ARR) ≈ a class return at an 8× ARR multiple (anchored to Citywire 4–6×, argued up on HNW + conflict-free).</p>
          </div>
          <div className={styles.card} style={{ borderColor: 'var(--u-green-line)' }}>
            <span className={`${styles.pill} ${styles.pillOk}`}>Full HNW-addressable</span>
            <div style={{ fontSize: 58, fontWeight: 300, color: 'var(--u-green)', lineHeight: 1, marginBottom: 16 }}>~89×</div>
            <p style={{ fontSize: 17 }}>~45,000 subscribers (~£86M ARR) ≈ ~£687M EV on the founding entry. The plan targets 45,000; 5,000 is the floor for 10×.</p>
          </div>
        </div>
        <p className={styles.foot}>Illustrative, <b>not forecasts</b>. 45,000 ≈ 1.7% of the UK&apos;s ~2.6M HNW pool; not guaranteed — you could lose all your capital. Buyer universe: Morningstar, LSEG, S&amp;P Global, Bloomberg, FNZ.</p>
      </div>

      {/* ---- 14 · Terms & Sandbox ---- */}
      <div className={`${styles.slide} ${slide === 13 ? styles.slideActive : slide > 13 ? styles.slidePrev : ''}`}>
        <span className={styles.wm}>OFFER</span>
        <p className={styles.eyebrow}>The offer</p>
        <h2 className={styles.disp}>Founding terms — and a Sandbox.</h2>
        <div style={{ display: 'flex', gap: 52, marginTop: 36, flex: 1, alignItems: 'flex-start' }}>
          <table className={styles.terms} style={{ flex: '1.1' }}>
            <tbody>
              <tr><td>Pre-money</td><td>£6.5M</td></tr>
              <tr><td>Round</td><td>£1.2M · 30 × £40k min</td></tr>
              <tr><td>EIS / SEIS · KIC</td><td>All confirmed</td></tr>
              <tr><td>Now / later</td><td>First £250k SEIS (50%) · then EIS (30%)</td></tr>
              <tr><td>Anti-dilution</td><td>To Growth Capital round</td></tr>
              <tr><td>Closes</td><td>April 2027</td></tr>
            </tbody>
          </table>
          <div className={styles.sandbox} style={{ flex: 1 }}>
            <div>
              <div style={{ fontSize: 18, color: '#fff', marginBottom: 4 }}>Every founding investor gets a Sandbox</div>
              <span className={styles.sandboxLbl}>Your Sandbox · illustrative</span>
            </div>
            <p className={styles.sandboxScn}>Scenario — transfer all assets to spouse today</p>
            <div className={styles.sandboxRow}><span className={styles.sandboxK}>IHT now</span><span className={`${styles.sandboxV} ${styles.sandboxVG}`}>£0</span></div>
            <div className={styles.sandboxRow}><span className={styles.sandboxK}>IHT on 2nd death</span><span className={styles.sandboxV} style={{ color: '#f87171' }}>£412k</span></div>
            <div className={styles.sandboxRow}><span className={styles.sandboxK}>vs EIS route</span><span className={`${styles.sandboxV} ${styles.sandboxVG}`}>£96k</span></div>
          </div>
        </div>
        <p className={styles.foot}>Your actual position loaded into a private instance — test decisions before you make them. A feedback loop, not a cap table. Illustrative figures.</p>
      </div>

      {/* ---- 15 · Close ---- */}
      <div className={`${styles.slide} ${styles.slideDeepest} ${styles.closeSlide} ${slide === 14 ? styles.slideActive : slide > 14 ? styles.slidePrev : ''}`}>
        <div className={styles.gw} style={{ width: 700, height: 700, top: '42%', left: '50%', transform: 'translate(-50%,-50%)' }} />
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p className={styles.eyebrow}>Close</p>
          <h1 style={{ fontSize: 60, fontWeight: 300, letterSpacing: '-.02em', lineHeight: 1.05, margin: 0 }}>One conversation is all it takes.</h1>
          <p className={styles.closeSub}>Discovery call (20 min) → platform demo with your own asset classes (30 min) → reserve your allocation via SeedLegals. No commitment at the call stage.</p>
          <button
            onClick={openBooking}
            style={{ marginTop: 38, fontFamily: 'inherit', fontSize: 16, padding: '17px 34px', background: 'var(--u-green)', color: 'var(--u-on-green)', border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '.06em', borderRadius: 0 }}
          >
            Book a discovery call
          </button>
          <p className={styles.closeContact}>tom@unlockdd.com · unlockdd.com</p>
          <p className={styles.closeRoi}><b>R</b>eturn <b>O</b>n <b>I</b>ntelligence</p>
        </div>
      </div>

      {/* ========== Fixed chrome ========== */}
      <div className={styles.chrome}>
        <div className={styles.chromeL}>
          <img src="/assets/unlock-green.svg" alt="Unlock" />
          <span className={styles.chromeDot}>.</span>
          <span className={styles.chromeT}>Return On Intelligence</span>
        </div>
        <div className={styles.chromeR}>
          {certified && (
            <button className={`${styles.chromeBtn} ${styles.chromeBtnReset}`} onClick={certReset}>
              Certified · reset
            </button>
          )}
          <button className={`${styles.chromeBtn} ${styles.chromeBtnBook}`} onClick={openBooking}>
            Book a call
          </button>
        </div>
      </div>

      {/* Nav arrows */}
      <button className={`${styles.navArrow} ${styles.navArrowPrev}`} onClick={() => goTo(slide - 1)} disabled={slide === 0}>←</button>
      <button className={`${styles.navArrow} ${styles.navArrowNext}`} onClick={() => goTo(slide + 1)} disabled={slide === total - 1}>→</button>

      {/* Nav dots */}
      <div className={styles.navDots}>
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            className={`${styles.navDot} ${slide === i ? styles.navDotActive : ''}`}
            onClick={() => goTo(i)}
            title={SLIDE_LABELS[i]}
          />
        ))}
      </div>

      {/* Risk bar */}
      <div className={styles.riskbar}>
        <span><span className={styles.riskbarWarn}>Capital is at risk</span> · high-risk, illiquid, unlisted shares · you may lose all you invest · not advice · figures are modelled, not guaranteed</span>
        <button className={styles.riskbarBtn} onClick={() => setInfoOpen(true)}>Important information</button>
      </div>

      {/* ========== Gate ========== */}
      {!certified && (
        <div className={styles.gate}>
          <div className={styles.gatePanel}>
            <p className={styles.gateRestricted}><ShieldAlert size={13} /> Financial promotion — restricted</p>
            <h1>A walkthrough of the Unlock investment</h1>
            <p className={styles.gateIntro}>This is a financial promotion for high-net-worth and self-certified sophisticated investors. The investment is high-risk and illiquid — you could lose all your capital. Confirm which applies to begin:</p>

            {[
              { cat: 'hnw', title: 'High-net-worth individual', sub: 'FPO Art 48', desc: 'Income £100,000+ last year, or net assets £250,000+ (excluding home, pensions and certain items).' },
              { cat: 'sophisticated', title: 'Self-certified sophisticated investor', sub: 'FPO Art 50A', desc: 'e.g. two or more unlisted-company investments in two years; director of a £1m+ turnover company; angel-network member; or relevant PE/SME-finance experience.' },
            ].map(opt => (
              <div
                key={opt.cat}
                className={`${styles.gateOpt} ${selectedCat === opt.cat ? styles.gateOptSel : ''}`}
                onClick={() => setSelectedCat(opt.cat)}
              >
                <div className={styles.gateOptHead}>
                  <span className={styles.gateRad} />
                  <span className={styles.gateOptTitle}>{opt.title} <span className={styles.gateOptSub}>{opt.sub}</span></span>
                </div>
                <p className={styles.gateOptDesc}>{opt.desc}</p>
              </div>
            ))}

            <label
              className={`${styles.gateAck} ${acknowledged ? styles.gateAckOn : ''}`}
              onClick={() => setAcknowledged(!acknowledged)}
            >
              <span className={styles.gateBox} />
              <span>I understand this is high-risk, that I could lose all the money I invest, and that I won&apos;t have retail-client protections.</span>
            </label>

            <button className={styles.gateBegin} disabled={!gateReady} onClick={enterDeck}>
              Begin the walkthrough
            </button>
            <p className={styles.gateHint}>
              {gateReady ? '' : !selectedCat ? 'Select a category and tick the box.' : 'Tick the box to confirm.'}
            </p>

            <p className={styles.gateLegal}>Prototype gate. Binding self-certification is the prescribed FPO statement — captured via SeedLegals or transcribed verbatim in production.</p>
            <div className={styles.gateLogo}>
              <img src="/assets/unlock-green.svg" alt="Unlock" />
              <span className={styles.gateDot}>.</span>
              <span className={styles.gateLogoT}>Return On Intelligence</span>
            </div>
          </div>
        </div>
      )}

      {/* ========== Info modal ========== */}
      <div className={`${styles.modal} ${infoOpen ? styles.modalOpen : ''}`} onClick={() => setInfoOpen(false)}>
        <div className={styles.modalBox} onClick={e => e.stopPropagation()}>
          <button className={styles.modalX} onClick={() => setInfoOpen(false)}><X size={20} /></button>
          <h3>Important information</h3>
          {DISCLAIMERS.map((d, i) => (
            <div key={i} className={styles.disc}>
              <span className={styles.discN}>{i + 1}</span>
              <span>{d}</span>
            </div>
          ))}
          <p className={styles.modalLegal}>This walkthrough is a financial promotion directed only at certified high-net-worth and self-certified sophisticated investors. Unlock Services Limited.</p>
        </div>
      </div>

      {/* ========== Booking modal ========== */}
      <div className={`${styles.modal} ${bookOpen ? styles.modalOpen : ''}`} onClick={() => setBookOpen(false)}>
        <div className={styles.modalBox} onClick={e => e.stopPropagation()}>
          <button className={styles.modalX} onClick={() => setBookOpen(false)}><X size={20} /></button>
          {!bkDone ? (
            <>
              <h3>Book a discovery call</h3>
              <p style={{ fontSize: 14, color: 'var(--u-text-muted)', lineHeight: 1.55 }}>20-minute discovery call, then a platform demo with your own asset classes. No commitment at the call stage.</p>
              <label className={styles.modalLabel}>Full name</label>
              <input className={styles.modalInput} type="text" placeholder="Your name" value={bkName} onChange={e => setBkName(e.target.value)} />
              <label className={styles.modalLabel}>Email</label>
              <input className={styles.modalInput} type="email" placeholder="you@example.com" value={bkEmail} onChange={e => setBkEmail(e.target.value)} />
              <label className={styles.modalLabel}>Preferred time</label>
              <select className={styles.modalSelect} value={bkTime} onChange={e => setBkTime(e.target.value)}>
                <option>Weekday morning</option>
                <option>Weekday afternoon</option>
                <option>Evening</option>
                <option>Flexible</option>
              </select>
              {bkErr && <p className={styles.modalErr}>{bkErr}</p>}
              <button className={styles.modalSubmit} onClick={submitBooking}>Request the call</button>
              <p className={styles.modalFoot}>Prototype: this confirms instantly. In production it routes to the scheduler and writes to the bookings backend.</p>
            </>
          ) : (
            <div className={styles.modalDone}>
              <div className={styles.doneIc}><Check size={24} /></div>
              <h3 style={{ marginBottom: 12 }}>Request received</h3>
              <p style={{ fontSize: 14, color: 'var(--u-text-muted)', lineHeight: 1.6 }}>
                Thanks {bkName.split(' ')[0]} — we&apos;ll be in touch at {bkEmail} to confirm your discovery call ({bkTime.toLowerCase()}).
              </p>
              <button className={styles.ghostBtn} onClick={() => setBookOpen(false)}>Close</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
