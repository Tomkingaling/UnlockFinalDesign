// public-site/src/data/prospect-briefs.ts
import {
  FOUNDING_INVESTOR_PROGRAMME_DEFAULT,
  FoundingInvestorBlock,
  LearnListItem,
} from "./learn-content";

export type ContentCardData = {
  tag: string;
  heading: string;
  paragraphs: string[];
  bullets?: LearnListItem[];
  note?: string;
  sourceHref?: string;
  sourceLabel: string;
  highlight?: boolean;
};

export type ProspectBrief = {
  firstName: string;
  greetingHeading: string;
  leadParagraphs: string[];
  sectionBlockLabel: string;
  cards: ContentCardData[];
  foundingInvestorLeadNote?: string;
  foundingInvestor: FoundingInvestorBlock;
  nextCallBlockLabel: string;
  nextCallIntro: string;
  nextCallAgenda: string[];
  nextCallClosing: string;
  footnote?: string;
  signoffLine: string;
};

export const PROSPECT_BRIEFS: Record<string, ProspectBrief> = {
  allanb: {
    firstName: "Allan",
    greetingHeading: "a few things ahead of this afternoon",
    leadParagraphs: [
      "Thanks again for the time on 14 July, good to hear the walkthrough gave you a useful general outlook of the platform.",
      "A few things stood out from that conversation worth going deeper on before we talk again: inheritance tax, given the mix of properties, art and gold you've built up over the years, and the Founding Investor Programme, which came up as part of how this works for the investors already on board.",
    ],
    sectionBlockLabel: "Inheritance tax, the part you flagged",
    cards: [
      {
        tag: "The change coming in April 2027",
        heading: "Pensions are moving into the taxable estate",
        paragraphs: [
          "From April 2027, pensions move inside the taxable estate for inheritance tax purposes, a real shift from how pensions have traditionally sat outside it. Combined with existing withdrawal taxes, some estimates put the combined impact at up to 70% of a pension pot's value passing to HMRC rather than to family.",
          "Inheritance tax itself is charged at 40% above the nil-rate band. For an estate concentrated in illiquid assets, property, art, that bill often arrives well before anything can be sold to pay it, which is exactly the kind of forced, rushed sale that erodes value rather than protects it.",
        ],
        sourceHref: "/learn/inheritance-tax",
        sourceLabel: "From unlockdd.com/learn/inheritance-tax",
      },
      {
        tag: "Business Relief",
        heading: "How qualifying shares sit outside the estate",
        paragraphs: [
          "Shares in qualifying trading companies, the category EIS investments sit in, fall outside the taxable estate for inheritance tax purposes after two years of ownership. That's 100% relief up to a £2.5M-per-estate allowance under the Finance Act 2026 (above that, relief drops to 50%, and the allowance is transferable to a spouse, so a couple can shelter up to £5M combined). Given your holdings are property, art and gold rather than a lifetime-gifting plan already underway, this is usually the more directly relevant route for your situation, worth a proper look at your own numbers before we say more than that.",
        ],
        sourceHref: "/learn/inheritance-tax",
        sourceLabel: "From unlockdd.com/learn/inheritance-tax and the Founding Investor FAQ",
      },
    ],
    foundingInvestor: FOUNDING_INVESTOR_PROGRAMME_DEFAULT,
    nextCallBlockLabel: "On our call this afternoon",
    nextCallIntro: "We'll go through the investment proposition itself, so you have the full picture to weigh up in your own time:",
    nextCallAgenda: [
      "The market opportunity, and why this gap exists for people managing property, art and other assets outside standard advice",
      "The team behind the platform",
      "The return profile we're targeting",
      "The exit strategy",
    ],
    nextCallClosing: "If you'd like to take it further afterwards, a separate call would walk through the actual mechanics and terms in full, no pressure either way, this call is about giving you what you need to decide, not asking for a decision today.",
    footnote: "One practical thing: last time we had some Google Meet trouble between your phone and the iPad, I'll send the meeting link again just before we start in case it's easier to join fresh from that message.",
    signoffLine: "Talk this afternoon,",
  },
  alvink: {
    firstName: "Alvin",
    greetingHeading: "a few things ahead of Wednesday",
    leadParagraphs: [
      "Thanks for the time on our call, and for the good questions, especially on the fee side, that's exactly the kind of thing worth being upfront about.",
      "You've flagged capital gains as your main tax concern, and you're focused on building monthly residual income rather than passing wealth on, so here's the detail most relevant to that, plus how the Founding Investor Programme actually works, since that's the route to the no-fee access you asked about.",
    ],
    sectionBlockLabel: "Capital gains tax and EIS",
    cards: [
      {
        tag: "The default outcome",
        heading: "Why the tax bill shows up whether you want it to or not",
        paragraphs: [
          "Sell an asset that's gained in value, property, shares, anything, and the default outcome is a capital gains tax bill, currently up to 24% on the gain, due regardless of what you do with the proceeds next.",
        ],
        sourceHref: "/learn/capital-gains-tax",
        sourceLabel: "From unlockdd.com/learn/capital-gains-tax",
      },
      {
        tag: "The EIS alternative",
        heading: "Deferral, plus tax-free growth on top",
        paragraphs: [
          "EIS investment offers two separate mechanics against a CGT bill: deferring an existing gain by reinvesting it (the tax comes back into play later, not written off), and a full exemption on the growth of the new EIS shares themselves once held for the qualifying period, new, tax-free growth, on top of the deferral.",
          "Combined with the income tax relief on the way in (30% for EIS, 50% for SEIS), you're often risking somewhere between 22 and 25 pence on the pound of what you'd otherwise have paid HMRC directly.",
        ],
        sourceHref: "/learn/capital-gains-tax",
        sourceLabel: "From unlockdd.com/learn/capital-gains-tax",
      },
      {
        tag: "EIS mechanics, the risk side",
        heading: "The risk profile, honestly",
        paragraphs: [
          "Out of ten investments in a properly diversified EIS programme: roughly four fail quickly, three return something modest (1.5-2x), two return a high single-digit multiple (6-7x), and one goes on to return 10x or more. Revolut, an EIS-backed company early on, returned 444 times over ten years, the extreme end of what the model occasionally produces. Worth sitting with the downside as much as the upside before anything else, that's the part we'll come back to on the next call.",
        ],
        sourceHref: "/learn/eis",
        sourceLabel: "From unlockdd.com/learn/eis",
      },
    ],
    foundingInvestorLeadNote:
      "On the fee question you asked directly: the Founding Investor route carries no monthly platform fee, your investment via EIS/SEIS is what gets you lifetime access, not a subscription. See the Programme detail below for exactly how that works.",
    foundingInvestor: {
      tag: "What it actually is",
      heading: "Lifetime access, in exchange for backing the company",
      paragraphs: [
        "Founding investors put capital into Unlock itself, via EIS or SEIS, and in return get lifetime access to the platform's Premium tier, no subscription fee ever, a properly personal White Glove onboarding, priority allocation on the syndicate opportunities Unlock curates going forward, quarterly reporting, and a direct line to shape what gets built, which matters given your interest in the income-planning and diversification tools specifically.",
      ],
      bullets: [
        { term: "Lifetime platform access:", text: "Premium tier, no ongoing subscription, directly answers the fee question" },
        { term: "White Glove onboarding:", text: "someone works with you directly to connect your actual portfolio" },
        { term: "Priority syndicate allocation:", text: "first look at curated EIS/SEIS deal flow" },
        { term: "Quarterly reporting and roadmap input:", text: "a real feedback loop, not a one-way pitch" },
      ],
      note: "This is a general outline, not the full round terms, we'll go further into the specific mechanics, valuation, timing and investment level once you've had a chance to sit with the EIS side of things properly, that's deliberate, not a brush-off.",
      sourceLabel: "From the Founding Investor FAQ",
    },
    nextCallBlockLabel: "On Wednesday",
    nextCallIntro: "We'll go into the investment proposition itself, so you have the full picture to weigh up in your own time:",
    nextCallAgenda: [
      "The go-to-market plan",
      "The team, including Anthony's background, ex-Director General of TISA, former chairman of Barclays Stockbroking",
      "The return profile we're targeting",
      "The exit strategy",
    ],
    nextCallClosing: "If you'd like to take it further afterwards, a separate call would walk through the actual mechanics and terms in full, no pressure either way.",
    signoffLine: "Talk Wednesday,",
  },
};

export function getProspectBrief(slug: string): ProspectBrief | undefined {
  return PROSPECT_BRIEFS[slug];
}
