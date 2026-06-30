'use client';
import { useState } from 'react';
import Link from 'next/link';
import { X, Info, ChevronRight } from 'lucide-react';
import styles from './investors.module.css';

const fmt = (n: number) => '£' + Math.round(n).toLocaleString('en-GB');

const REG = [
  { name: 'Vanguard LifeStrategy 80%', type: 'Fund', val: '£142,800', alloc: '34.2%', gain: '+12.4%', up: true },
  { name: 'iShares Core MSCI World', type: 'ETF', val: '£98,300', alloc: '23.5%', gain: '+8.1%', up: true },
  { name: 'Hargreaves Lansdown', type: 'Stock', val: '£61,200', alloc: '14.6%', gain: '-3.2%', up: false },
  { name: 'Legal & General Property', type: 'Fund', val: '£34,700', alloc: '8.3%', gain: '+1.8%', up: true },
];

const BACKING = [
  { title: 'Already built', body: 'Live register software managing real portfolios — not a concept.' },
  { title: 'Conflict-free', body: 'Zero AUM, zero commissions. Revenue from software licences only.' },
  { title: 'Sharper with scale', body: 'Network intelligence improves as assets under coverage grow.' },
];

const INCUMBENTS = [
  { name: 'Bloomberg Terminal', price: '£24k/seat/yr', open: '✗', conflict: 'None', reg: 'Partial', hl: false },
  { name: 'Morningstar Direct', price: '£8–18k/yr', open: '✗', conflict: 'Ratings revenue', reg: 'Partial', hl: false },
  { name: 'Altoo / Assetmax', price: '£5–12k/yr', open: '✗', conflict: 'None', reg: 'Basic', hl: false },
  { name: 'Wealthkernel / Hubwise', price: 'BPS on AUM', open: '✗', conflict: 'AUM incentive', reg: 'Basic', hl: false },
  { name: 'Unlock', price: '£499–999/mo', open: '✓', conflict: 'None — ever', reg: 'Full COBS 9A', hl: true },
];

const SYSTEMS = [
  { name: 'Asset Register v1', desc: 'Multi-currency ledger, cost-basis, realised/unrealised PnL', pill: 'Live', live: true },
  { name: 'Regulation Engine', desc: 'COBS 9A suitability scoring, 12 risk bands, PDF audit trail', pill: 'Live', live: true },
  { name: 'Client Portal', desc: 'White-label read-only view, two-factor, mobile-responsive', pill: 'Running', live: false },
];

const FOUNDERS = [
  { name: 'Aberdeen Standard', amt: '£25k', note: 'Seed cheque, Day 1' },
  { name: 'Private family office', amt: '£50k', note: 'London, undisclosed' },
  { name: 'Former FCA director', amt: '£15k', note: 'Strategic + advisory' },
  { name: 'Series-A tech partner', amt: '£30k', note: 'SaaS scale expertise' },
  { name: 'Angel syndicate ×3', amt: '£45k', note: 'FinTech / PropTech background' },
];

const MOAT = [
  { title: 'Switching cost', body: 'Once a firm\'s historical data, client suitability files, and audit trails are in Unlock, the cost of migration is prohibitive.' },
  { title: 'Network intelligence', body: 'Aggregated (anonymised) portfolio data creates market-intelligence signals that improve with every new client.' },
  { title: 'Regulatory lock-in', body: 'Compliance workflows become the system of record. Regulators and auditors expect continuity — disruption equals liability.' },
];

const WINDOWS = [
  { title: 'Window 1 — EIS round closes', date: 'Sep 2026', active: true, items: ['SEIS / EIS qualification confirmed', 'Advance Assurance received', '£750k target, £165k committed'] },
  { title: 'Window 2 — Series A', date: 'H1 2027', active: false, items: ['Post-£500k ARR milestone', 'Institutional lead targeted', '£3–5m range, post-money TBC'] },
  { title: 'Window 3 — Growth', date: '2028+', active: false, items: ['Pan-European expansion', 'M&A or strategic acquirer', 'Secondary liquidity for early investors'] },
];

const MARKET = [
  { label: 'TAM', val: '£28bn', sub: 'UK wealth management software + data' },
  { label: 'SAM', val: '£4.2bn', sub: 'IFA, family office, discretionary managers' },
  { label: 'SOM', val: '£180m', sub: '5-year target — top 360 firms at £500k ARR avg' },
];

const SEGMENTS = [
  { seg: 'IFA networks (30+ advisers)', firms: '~1,200', arr: '£999/mo', tam: '£14.4m' },
  { seg: 'Single-family offices', firms: '~800', arr: '£799/mo', tam: '£7.7m' },
  { seg: 'Multi-family offices', firms: '~320', arr: '£999/mo', tam: '£3.8m' },
  { seg: 'DFM boutiques (<£500m AUM)', firms: '~650', arr: '£699/mo', tam: '£5.5m' },
  { seg: 'Accountancy + tax advisory', firms: '~3,400', arr: '£499/mo', tam: '£20.3m' },
];

const ECON = [
  { val: '40+', label: 'months', sub: 'Average client LTV horizon (IFA segment)' },
  { val: '70%', label: 'gross margin', sub: 'At current headcount; 80%+ at scale' },
  { val: '10–15×', label: 'LTV : CAC', sub: 'Based on £380 blended CAC, £4,200 LTV' },
  { val: '80%+', label: 'net retention', sub: 'Clients expanding seats year over year' },
];

const REVENUE = [
  { yr: 'FY 2024', arr: '£41k', clients: '7', mrr: '£3.4k', note: 'Pre-product launch' },
  { yr: 'FY 2025', arr: '£128k', clients: '24', mrr: '£10.7k', note: 'Seed complete' },
  { yr: 'FY 2026E', arr: '£390k', clients: '68', mrr: '£32.5k', note: 'Post this round' },
  { yr: 'FY 2027E', arr: '£980k', clients: '160', mrr: '£81.7k', note: 'Series A trigger' },
  { yr: 'FY 2028E', arr: '£2.1m', clients: '330', mrr: '£175k', note: 'Path to profitability' },
  { yr: 'FY 2029E', arr: '£4.4m', clients: '650', mrr: '£367k', note: 'Cashflow positive' },
];

const COMPS = [
  { co: 'Intelliflo', acq: 'Invesco, 2020', mult: '8× ARR', note: 'IFA workflow platform, ~£40m ARR' },
  { co: 'Seccl', acq: 'Octopus, 2019', mult: '12× ARR', note: 'Custody + platform infrastructure' },
  { co: 'Altoo AG', acq: 'LGT, 2023', mult: '9× ARR', note: 'Family office aggregation, EU' },
  { co: 'Additiv', acq: 'Strategic, 2024', mult: '7× ARR', note: 'WealthTech orchestration layer' },
];

const RISKS = [
  { risk: 'FCA regulatory change', sev: 'M', mit: 'Compliance team monitors CP/PS documents; modular rules engine allows rapid update.' },
  { risk: 'Slow sales cycle (B2B)', sev: 'M', mit: 'Pilot programme reduces decision friction; 3-month free trial for IFA networks.' },
  { risk: 'Incumbent response', sev: 'L', mit: 'Bloomberg / Morningstar serve institutions; we target underserved boutique segment.' },
  { risk: 'Key-person dependency', sev: 'H', mit: 'Cross-training underway; IP vests over 4 years; succession plan documented.' },
  { risk: 'Runway (pre-revenue months)', sev: 'M', mit: '14-month runway post-close at current burn; bridge facility agreed in principle.' },
];

const TEAM = [
  { init: 'TM', name: 'Tom Mercer', role: 'CEO & Co-founder', bio: 'Ex-Schroders portfolio analytics; 12 years wealth management.' },
  { init: 'SR', name: 'Sarah Reeve', role: 'CTO & Co-founder', bio: 'Ex-Monzo infra lead; built core banking ledger serving 8m accounts.' },
  { init: 'JO', name: 'James Osei', role: 'Head of Compliance', bio: 'Former FCA supervision; authored COBS 9A guidance notes.' },
  { init: 'AK', name: 'Amara Kone', role: 'Head of Growth', bio: 'Ex-Salesforce FinServ; 0→£2m ARR track record in UK SaaS.' },
];

const TERMS = [
  { term: 'Instrument', val: 'EIS-qualifying ordinary shares' },
  { term: 'Target raise', val: '£750,000' },
  { term: 'Pre-money valuation', val: '£3,500,000' },
  { term: 'Price per share', val: '£1.00' },
  { term: 'Minimum ticket', val: '£10,000' },
  { term: 'EIS relief', val: '30% income tax relief (up to £1m per tax year)' },
  { term: 'Advance Assurance', val: 'Received — HMRC ref AA/2025/UNLOCK/01' },
];

const FAQ = [
  { q: 'Is this EIS-qualifying?', a: 'Yes. We have Advance Assurance from HMRC. Shares will be issued as EIS-qualifying ordinary shares. Investors should take independent tax advice.' },
  { q: 'What is the minimum investment?', a: '£10,000. There is no maximum. For investments over £250,000, please contact us directly to discuss terms.' },
  { q: 'When will funds be drawn?', a: 'Funds will be drawn within 5 business days of countersigned subscription agreement. Shares issued within 14 days.' },
  { q: 'What are the exit scenarios?', a: 'We are building toward a Series A (H1 2027), with trade sale or institutional acquisition as the primary exit route. Secondary liquidity may be available in Window 3 (2028+). No exit is guaranteed.' },
];

const MULTS: [string, number][] = [['Fails', 0], ['Holds · 1×', 1], ['Works · 3×', 3], ['Strong · 6×', 6]];

const DISCLAIMERS = [
  'This document is a financial promotion issued by Unlock Portfolio Intelligence Ltd and has been approved for distribution to certified high-net-worth individuals and sophisticated investors only under FPO 2005 Art 48 and Art 50A.',
  'Past performance is not a reliable indicator of future results. The value of investments and the income from them can fall as well as rise and you may not get back the amount originally invested.',
  'EIS tax reliefs depend on the company maintaining its qualifying status and on individual investor circumstances. Tax treatment depends on individual circumstances and may be subject to change.',
  'This document contains forward-looking statements that involve known and unknown risks. Actual results, performance or events may differ materially from those expressed or implied in such statements.',
  'Investment in early-stage companies is illiquid and high risk. You should not invest money you cannot afford to lose. There is no guarantee of return of capital.',
  'This document does not constitute investment advice and should not be relied upon as such. Investors should seek independent financial, legal and tax advice before investing.',
  'Unlock Portfolio Intelligence Ltd is registered in England & Wales (No. 14823791). Registered address: 1 Bartholomew Close, London EC1A 7BL.',
];

export default function Investors() {
  const [ticket, setTicket] = useState(40000);
  const [mult, setMult] = useState(2);
  const [modal, setModal] = useState(false);

  const effectiveCost = ticket * 0.70;
  const netLoss = effectiveCost * 0.55;
  const exitValue = ticket * MULTS[mult][1];

  return (
    <>
      {/* Risk bar */}
      <div className={styles.riskbar}>
        <div className={styles.riskbarIn}>
          <span><b>Risk warning</b> — Capital at risk. This is not investment advice. Approved for certified HNW and sophisticated investors only.</span>
          <button className={styles.modalTrigger} onClick={() => setModal(true)}>
            <Info size={13} style={{ verticalAlign: 'middle', marginRight: 4 }} />
            Important information
          </button>
        </div>
      </div>

      {/* Nav */}
      <nav className={styles.nav}>
        <div className={styles.navin}>
          <Link href="/" className={styles.brand}>
            <img src="/assets/unlock-white.svg" alt="Unlock" />
            <span className={styles.dot}>.</span>
          </Link>
          <ul className={styles.navlinks}>
            <li><Link href="/platform">Platform</Link></li>
            <li className={styles.navlinkCur}><Link href="/investors">Investors</Link></li>
            <li><Link href="/spec">Spec</Link></li>
          </ul>
          <div className={styles.navr}>
            <Link href="/deck" className={styles.navCta}>View deck</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.glow} />
        <div className={styles.heroIn}>
          <p className={styles.eyebrow}>Investor overview</p>
          <h1>The intelligence layer<br />UK wealth management<br />has been waiting for.</h1>
          <p className={styles.lede}>
            Unlock is a <b>conflict-free portfolio intelligence platform</b> built for IFAs, family offices, and discretionary managers.
            We charge software licences — never AUM fees, never commissions.
          </p>
          <div className={styles.ctarow}>
            <Link href="/deck" className={`${styles.btn} ${styles.btnP}`}>
              View investor deck <ChevronRight size={15} />
            </Link>
            <button className={`${styles.btn} ${styles.btnO}`} onClick={() => setModal(true)}>
              Important information
            </button>
          </div>
        </div>
      </section>

      {/* Gap */}
      <section className={styles.sec} style={{ background: 'var(--u-bg-deep)', borderTop: '1px solid var(--u-hairline)', borderBottom: '1px solid var(--u-hairline)' }}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>The gap</p>
          <h2 className={styles.h2}>£4.2 trillion managed in the UK.<br /><span style={{ color: 'var(--u-text-muted)' }}>No conflict-free intelligence layer.</span></h2>
          <p className={styles.lede} style={{ marginTop: 18 }}>
            Bloomberg Terminal costs £24,000 per seat per year and is built for institutional traders.
            Morningstar earns revenue from the funds it rates. Custodians earn on AUM.
            Unlock earns from software only — the first platform where the incentives are fully aligned with the adviser.
          </p>
          <div className={styles.grid3} style={{ marginTop: 48 }}>
            {BACKING.map(b => (
              <div key={b.title} className={styles.card}>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product */}
      <section className={styles.sec}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>Product</p>
          <h2 className={styles.h2}>Live. In use. Generating revenue.</h2>
          <p className={styles.lede} style={{ marginTop: 16 }}>Not a prototype — a working system with paying clients.</p>

          <div className={styles.dash} style={{ marginTop: 40 }}>
            <div className={styles.dashBar}>
              <div className={styles.dot3}><i /><i /><i /></div>
              <div className={styles.dtabs}>
                <span className={styles.dtabOn}>Asset Register</span>
                <span>Suitability</span>
                <span>Reports</span>
              </div>
              <span className={styles.illus}>Illustrative</span>
            </div>
            <div className={styles.dashBody}>
              <table className={styles.regTable}>
                <thead>
                  <tr>
                    <th>Holding</th><th>Type</th><th>Value</th><th>Alloc</th><th>Gain</th>
                  </tr>
                </thead>
                <tbody>
                  {REG.map(r => (
                    <tr key={r.name}>
                      <td><span className={styles.nm}>{r.name}</span></td>
                      <td>{r.type}</td>
                      <td>{r.val}</td>
                      <td>{r.alloc}</td>
                      <td style={{ color: r.up ? 'var(--u-green)' : '#f87171' }}>{r.gain}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.sysGrid} style={{ marginTop: 28 }}>
            {SYSTEMS.map(s => (
              <div key={s.name} className={styles.sysCard}>
                <div className={styles.sysHead}>
                  <span className={styles.sysName}>{s.name}</span>
                  <span className={`${styles.pill} ${s.live ? styles.pillLive : styles.pillRun}`}>{s.pill}</span>
                </div>
                <p className={styles.sysDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incumbents */}
      <section className={styles.sec} style={{ background: 'var(--u-bg-deep)', borderTop: '1px solid var(--u-hairline)', borderBottom: '1px solid var(--u-hairline)' }}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>Competitive landscape</p>
          <h2 className={styles.h2}>We compete on alignment,<br /><span style={{ color: 'var(--u-text-muted)' }}>not just features.</span></h2>
          <div className={styles.tblwrap} style={{ marginTop: 36 }}>
            <table className={styles.tbl}>
              <thead>
                <tr>
                  <th>Platform</th><th>Annual cost</th><th>Open architecture</th><th>Conflict of interest</th><th>Reg coverage</th>
                </tr>
              </thead>
              <tbody>
                {INCUMBENTS.map(r => (
                  <tr key={r.name} className={r.hl ? styles.hlRow : ''}>
                    <td><b>{r.name}</b></td>
                    <td>{r.price}</td>
                    <td style={{ color: r.open === '✓' ? 'var(--u-green)' : 'var(--u-text-faint)' }}>{r.open}</td>
                    <td>{r.conflict}</td>
                    <td>{r.reg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className={styles.sec}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>Proof of execution</p>
          <h2 className={styles.h2}>Three live systems.<br /><span style={{ color: 'var(--u-text-muted)' }}>£165k already committed.</span></h2>
          <div className={styles.grid2} style={{ marginTop: 40 }}>
            <div>
              <h3 className={styles.proofH3}>Systems in production</h3>
              <div className={styles.sysList}>
                {SYSTEMS.map(s => (
                  <div key={s.name} className={styles.sysRow}>
                    <div>
                      <div className={styles.sysName}>{s.name}</div>
                      <div className={styles.sysDesc}>{s.desc}</div>
                    </div>
                    <span className={`${styles.pill} ${s.live ? styles.pillLive : styles.pillRun}`}>{s.pill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className={styles.proofH3}>Founding investors</h3>
              <div className={styles.tblwrap}>
                <table className={styles.tbl}>
                  <thead>
                    <tr><th>Investor</th><th>Amount</th><th>Note</th></tr>
                  </thead>
                  <tbody>
                    {FOUNDERS.map(f => (
                      <tr key={f.name}>
                        <td><b>{f.name}</b></td>
                        <td>{f.amt}</td>
                        <td>{f.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moat */}
      <section className={styles.sec} style={{ background: 'var(--u-bg-deep)', borderTop: '1px solid var(--u-hairline)', borderBottom: '1px solid var(--u-hairline)' }}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>Defensibility</p>
          <h2 className={styles.h2}>Three moats.<br /><span style={{ color: 'var(--u-text-muted)' }}>All structural.</span></h2>
          <div className={styles.grid3} style={{ marginTop: 40 }}>
            {MOAT.map((m, i) => (
              <div key={m.title} className={styles.card}>
                <div className={styles.cardIx}>{String(i + 1).padStart(2, '0')}</div>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Windows */}
      <section className={styles.sec}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>Investment windows</p>
          <h2 className={styles.h2}>Three structured<br /><span style={{ color: 'var(--u-text-muted)' }}>entry points.</span></h2>
          <div className={styles.windows} style={{ marginTop: 40 }}>
            {WINDOWS.map(w => (
              <div key={w.title} className={`${styles.window} ${w.active ? styles.windowActive : ''}`}>
                <div className={styles.windowDate}>{w.date}</div>
                <h3>{w.title}</h3>
                <ul>
                  {w.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market */}
      <section className={styles.sec} style={{ background: 'var(--u-bg-deep)', borderTop: '1px solid var(--u-hairline)', borderBottom: '1px solid var(--u-hairline)' }}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>Market size</p>
          <h2 className={styles.h2}>A large, addressable,<br /><span style={{ color: 'var(--u-text-muted)' }}>underserved segment.</span></h2>
          <div className={styles.market} style={{ marginTop: 40 }}>
            {MARKET.map(m => (
              <div key={m.label} className={styles.mk}>
                <div className={styles.mkV}>{m.val}</div>
                <h3>{m.label}</h3>
                <p>{m.sub}</p>
              </div>
            ))}
          </div>
          <div className={styles.tblwrap}>
            <table className={styles.tbl}>
              <thead>
                <tr>
                  <th>Segment</th><th>Addressable firms</th><th>Target ARR</th><th>Segment TAM</th>
                </tr>
              </thead>
              <tbody>
                {SEGMENTS.map(s => (
                  <tr key={s.seg}>
                    <td><b>{s.seg}</b></td>
                    <td>{s.firms}</td>
                    <td>{s.arr}</td>
                    <td>{s.tam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* EIS Calculator */}
      <section className={styles.sec}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>EIS model</p>
          <h2 className={styles.h2}>Model your investment.</h2>
          <p className={styles.lede} style={{ marginTop: 16 }}>EIS provides 30% income tax relief. Adjust the sliders to see your scenarios.</p>
          <div className={styles.calc} style={{ marginTop: 40 }}>
            <div className={styles.calcInner}>
              <div className={styles.calcLeft}>
                <div className={styles.ticketAmt}>{fmt(ticket)}</div>
                <input
                  type="range"
                  min={10000}
                  max={250000}
                  step={5000}
                  value={ticket}
                  onChange={e => setTicket(Number(e.target.value))}
                  className={styles.rangeInput}
                />
                <div className={styles.rangelbl}><span>£10k</span><span>£250k</span></div>
                <div className={styles.outcomes}>
                  {MULTS.map(([label], i) => (
                    <button
                      key={label}
                      className={`${styles.oc} ${mult === i ? styles.ocOn : ''}`}
                      onClick={() => setMult(i)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <div className={styles.results}>
                <div className={styles.res}>
                  <p className={styles.resK}>Gross investment</p>
                  <div className={styles.resV}>{fmt(ticket)}</div>
                </div>
                <div className={styles.res}>
                  <p className={styles.resK}>EIS relief (30%)</p>
                  <div className={`${styles.resV} ${styles.resAccent}`}>−{fmt(ticket * 0.30)}</div>
                </div>
                <div className={styles.res}>
                  <p className={styles.resK}>Effective cost</p>
                  <div className={styles.resV}>{fmt(effectiveCost)}</div>
                </div>
                <div className={styles.res}>
                  <p className={styles.resK}>{mult === 0 ? 'Loss relief (45%)' : 'Exit proceeds'}</p>
                  <div className={`${styles.resV} ${mult === 0 ? styles.resRisk : styles.resAccent}`}>
                    {mult === 0 ? `−${fmt(netLoss)}` : `+${fmt(exitValue)}`}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className={styles.fineprint} style={{ marginTop: 18 }}>
            This calculator is for illustration only. EIS tax reliefs depend on your individual circumstances and the company maintaining its qualifying status.
            Figures assume 45% income tax rate for loss relief. Not financial advice. Seek independent advice before investing.
          </p>
        </div>
      </section>

      {/* Unit economics */}
      <section className={styles.sec} style={{ background: 'var(--u-bg-deep)', borderTop: '1px solid var(--u-hairline)', borderBottom: '1px solid var(--u-hairline)' }}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>Unit economics</p>
          <h2 className={styles.h2}>The numbers<br /><span style={{ color: 'var(--u-text-muted)' }}>that matter.</span></h2>
          <div className={styles.econGrid} style={{ marginTop: 40 }}>
            {ECON.map(e => (
              <div key={e.label} className={styles.bigstat}>
                <div className={styles.bigstatV}>{e.val}</div>
                <h3>{e.label}</h3>
                <p>{e.sub}</p>
              </div>
            ))}
          </div>

          <div className={styles.tblwrap} style={{ marginTop: 48 }}>
            <table className={styles.tbl}>
              <thead>
                <tr><th>Year</th><th>ARR</th><th>Clients</th><th>MRR</th><th>Note</th></tr>
              </thead>
              <tbody>
                {REVENUE.map(r => (
                  <tr key={r.yr}>
                    <td><b>{r.yr}</b></td>
                    <td>{r.arr}</td>
                    <td>{r.clients}</td>
                    <td>{r.mrr}</td>
                    <td>{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.tblwrap} style={{ marginTop: 28 }}>
            <table className={styles.tbl}>
              <thead>
                <tr><th>Comparable exit</th><th>Acquisition</th><th>Multiple</th><th>Context</th></tr>
              </thead>
              <tbody>
                {COMPS.map(c => (
                  <tr key={c.co}>
                    <td><b>{c.co}</b></td>
                    <td>{c.acq}</td>
                    <td><span style={{ color: 'var(--u-green)' }}>{c.mult}</span></td>
                    <td>{c.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Risks */}
      <section className={styles.sec}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>Risk register</p>
          <h2 className={styles.h2}>Known risks.<br /><span style={{ color: 'var(--u-text-muted)' }}>Active mitigations.</span></h2>
          <div className={styles.tblwrap} style={{ marginTop: 36 }}>
            <table className={styles.tbl}>
              <thead>
                <tr><th>Risk</th><th>Severity</th><th>Mitigation</th></tr>
              </thead>
              <tbody>
                {RISKS.map(r => (
                  <tr key={r.risk}>
                    <td><b>{r.risk}</b></td>
                    <td>
                      <span className={`${styles.sev} ${r.sev === 'H' ? styles.sevH : r.sev === 'M' ? styles.sevM : styles.sevL}`}>
                        {r.sev === 'H' ? 'High' : r.sev === 'M' ? 'Med' : 'Low'}
                      </span>
                    </td>
                    <td>{r.mit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={styles.sec} style={{ background: 'var(--u-bg-deep)', borderTop: '1px solid var(--u-hairline)', borderBottom: '1px solid var(--u-hairline)' }}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>Team</p>
          <h2 className={styles.h2}>Built by operators<br /><span style={{ color: 'var(--u-text-muted)' }}>with domain depth.</span></h2>
          <div className={styles.teamGrid} style={{ marginTop: 40 }}>
            {TEAM.map(t => (
              <div key={t.name} className={styles.member}>
                <div className={styles.av}>{t.init}</div>
                <h3>{t.name}</h3>
                <div className={styles.memberRole}>{t.role}</div>
                <p>{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className={styles.sec}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>Investment terms</p>
          <h2 className={styles.h2}>Current round<br /><span style={{ color: 'var(--u-text-muted)' }}>— EIS ordinary shares.</span></h2>
          <table className={styles.termtbl} style={{ marginTop: 36 }}>
            <tbody>
              {TERMS.map(t => (
                <tr key={t.term}>
                  <td>{t.term}</td>
                  <td>{t.val}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.ctarow} style={{ marginTop: 40 }}>
            <Link href="/deck" className={`${styles.btn} ${styles.btnP}`}>
              View full investor deck <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.sec} style={{ background: 'var(--u-bg-deep)', borderTop: '1px solid var(--u-hairline)', borderBottom: '1px solid var(--u-hairline)' }}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>FAQ</p>
          <h2 className={styles.h2}>Common questions.</h2>
          <div className={styles.faq} style={{ marginTop: 36 }}>
            {FAQ.map(f => (
              <details key={f.q} className={styles.qa}>
                <summary className={styles.qaSummary}>
                  {f.q}
                  <span className={styles.pm} />
                </summary>
                <p className={styles.qaA}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Band */}
      <section className={styles.band}>
        <div style={{ maxWidth: 'var(--u-container)', margin: '0 auto', padding: '0 var(--u-gutter)' }}>
          <h2 className={styles.h2}>Ready to learn more?</h2>
          <p>View the full investor deck or request a one-to-one with the founding team.</p>
          <div className={styles.ctarow} style={{ justifyContent: 'center' }}>
            <Link href="/deck" className={`${styles.btn} ${styles.btnP}`}>
              View investor deck <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.fin}>
          <div className={styles.finTop}>
            <Link href="/" className={styles.brand} style={{ opacity: 0.6 }}>
              <img src="/assets/unlock-white.svg" alt="Unlock" style={{ height: 18 }} />
              <span className={styles.dot}>.</span>
            </Link>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              <Link href="/platform" style={{ color: 'inherit' }}>Platform</Link>
              <Link href="/investors" style={{ color: 'inherit' }}>Investors</Link>
              <Link href="/spec" style={{ color: 'inherit' }}>Spec</Link>
              <Link href="/deck" style={{ color: 'inherit' }}>Deck</Link>
            </div>
          </div>
          <p>
            Unlock Portfolio Intelligence Ltd — Registered in England & Wales (No. 14823791).
            1 Bartholomew Close, London EC1A 7BL. © 2026. All rights reserved.
            Financial promotions approved for certified HNW and sophisticated investors only.
          </p>
        </div>
      </footer>

      {/* Modal */}
      <div className={`${styles.modal} ${modal ? styles.modalOpenState : ''}`} onClick={() => setModal(false)}>
        <div className={styles.modalPanel} onClick={e => e.stopPropagation()}>
          <button className={styles.closeBtn} onClick={() => setModal(false)}>
            <X size={18} /> Close
          </button>
          <h3>Important information</h3>
          <p className={styles.modalSub}>Please read before proceeding.</p>
          <ol>
            {DISCLAIMERS.map((d, i) => <li key={i}>{d}</li>)}
          </ol>
        </div>
      </div>
    </>
  );
}
