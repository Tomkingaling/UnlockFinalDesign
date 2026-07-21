// public-site/src/data/learn-content.ts

export type LearnListItem = {
  term?: string;
  text: string;
};

export type LearnSection = {
  heading: string;
  paragraphs: string[];
  list?: LearnListItem[];
};

export type LearnTopic = {
  slug: string;
  navLabel: string;
  kicker: string;
  title: string;
  lede: string;
  sections: LearnSection[];
  closingNote: string;
};

export const LEARN_TOPIC_ORDER = ["eis", "capital-gains-tax", "inheritance-tax"] as const;

export const LEARN_TOPICS: Record<string, LearnTopic> = {
  eis: {
    slug: "eis",
    navLabel: "EIS",
    kicker: "Learn",
    title: "EIS, in plain English",
    lede: "How the Enterprise Investment Scheme works, the tax relief, the risk profile, and why it's treated as a discipline rather than a punt.",
    sections: [
      {
        heading: "Not like anything else you've invested in",
        paragraphs: [
          "EIS investing is fundamentally different from buying shares, buying property, or putting money in a fund. The risk is asymmetric, your downside is capped by HMRC, your upside isn't. The tax mechanics are unlike any other asset class. And the approach that makes it work is proven: structured, annual, diversified across a portfolio of companies, which makes it a discipline, not a punt.",
        ],
      },
      {
        heading: "The mechanics",
        paragraphs: [],
        list: [
          { term: "Income tax relief:", text: "up to 30% of your investment back against your income tax bill (EIS), up to 50% for SEIS." },
          { term: "Capital gains tax exemption:", text: "gains on EIS shares held for the qualifying period are exempt from capital gains tax on disposal. That exemption applies to the growth in value, not the original investment." },
          { term: "Loss relief:", text: "if a company fails, the loss is offset against income tax, not just capital gains, which caps the real downside well below the headline investment amount." },
          { term: "CGT deferral:", text: "you can defer an existing capital gain by reinvesting it into EIS shares, deferring the tax rather than paying it now." },
        ],
      },
      {
        heading: "The risk profile, honestly",
        paragraphs: [
          "Out of ten investments in a properly diversified EIS programme: roughly four fail quickly, three return something modest (1.5-2x), two return a high single-digit multiple (6-7x), and one goes on to return 10x or more. Revolut, an EIS-backed company early on, returned 444 times over ten years, the extreme end of what the model is built to occasionally produce.",
        ],
      },
      {
        heading: "Who it's for",
        paragraphs: [
          "It works for people who have the time to review information, the ability to evaluate what they're reading, and the confidence to make their own decisions, because buying shares in an EIS company falls outside what financial advisers are authorised to recommend directly. It's not right for most people. For those it suits, it's often the most significant financial planning decision they make.",
        ],
      },
    ],
    closingNote: "Capital at risk. This is information, not financial advice.",
  },
  "capital-gains-tax": {
    slug: "capital-gains-tax",
    navLabel: "Capital gains tax",
    kicker: "Learn",
    title: "Using EIS against a capital gains tax bill",
    lede: 'How EIS investment interacts with capital gains tax, deferral, exemption, and what "structuring it more tax-efficiently" actually means.',
    sections: [
      {
        heading: "The default outcome",
        paragraphs: [
          "Sell an asset that's gained in value, property, shares, a business, and the default outcome is a capital gains tax bill, currently up to 24% on the gain, due regardless of what you do with the proceeds next.",
        ],
      },
      {
        heading: "The EIS alternative",
        paragraphs: ["Two separate CGT mechanics apply to EIS investment:"],
        list: [
          { term: "Deferral.", text: "Reinvest the gain into EIS shares and the CGT on that original gain is deferred, not written off, deferred, for as long as the money stays invested. It becomes payable again if and when the EIS shares are sold (subject to their own rules)." },
          { term: "Exemption on the new investment's own growth.", text: "Separately, any growth in the EIS shares themselves, held for the qualifying period, is completely exempt from CGT on disposal. That's not the deferred gain, that's new, tax-free growth on top." },
        ],
      },
      {
        heading: "Why this matters practically",
        paragraphs: [
          "Rather than paying the tax now and reinvesting what's left, the deferral route keeps the full amount working. Combined with the income tax relief on the way in, an investor is often risking somewhere between 22 and 25 pence on the pound of what they'd otherwise have paid HMRC directly, with the prospect of tax-free growth on that stake.",
        ],
      },
    ],
    closingNote: "Capital at risk. This is information, not financial advice.",
  },
  "inheritance-tax": {
    slug: "inheritance-tax",
    navLabel: "Inheritance tax",
    kicker: "Learn",
    title: "Inheritance tax, pensions, and EIS",
    lede: "Why pensions are joining the taxable estate from April 2027, what a 40% IHT bill actually does to a family, and how EIS-qualifying shares sit outside it.",
    sections: [
      {
        heading: "The change that's coming",
        paragraphs: [
          'From April 2027, pensions move inside the taxable estate for inheritance tax purposes. Combined with existing withdrawal taxes, some estimates put the combined impact at up to 70% of a pension pot\'s value passing to HMRC rather than to a family, a very different picture from how pensions have traditionally been treated as "outside the estate."',
        ],
      },
      {
        heading: "What a 40% bill actually forces",
        paragraphs: [
          "Inheritance tax is charged at 40% above the nil-rate band. For an estate concentrated in illiquid assets, property, a business, art, the tax bill often arrives well before the assets can be sold to pay it, forcing a rushed sale, frequently below full value, on top of any capital gains tax due on that same sale.",
        ],
      },
      {
        heading: "Two established ways to plan around it",
        paragraphs: [],
        list: [
          { term: "Gifting into trust.", text: "Up to £325,000 can be gifted into trust every seven years and, provided the donor survives seven years from the gift, passes free of inheritance tax." },
          { term: "Business Relief, qualifying shares.", text: "Shares in qualifying trading companies (the same category EIS investments typically sit in) can fall outside the estate for IHT purposes after two years of ownership. Relief is 100% up to a per-estate allowance, and the allowance carries over to a surviving spouse or civil partner." },
        ],
      },
      {
        heading: "Who this is most relevant to",
        paragraphs: [
          "Anyone with a mix of illiquid, hard-to-value assets (property, art, a business) who is more focused on what passes to family than on personal income or growth, and anyone whose pension has quietly become a bigger part of their taxable estate than they'd assumed.",
        ],
      },
    ],
    closingNote: "Capital at risk. This is information, not financial advice. Trust and estate planning should be discussed with a qualified adviser.",
  },
};

export function getLearnTopic(slug: string): LearnTopic | undefined {
  return LEARN_TOPICS[slug];
}

export const FOOTER_DISCLAIMER =
  "Capital at risk. This is information, not financial advice. You should consult your own adviser before making any investment decision.";

export type FoundingInvestorBlock = {
  tag: string;
  heading: string;
  paragraphs: string[];
  bullets: LearnListItem[];
  note: string;
  sourceLabel: string;
};

export const FOUNDING_INVESTOR_PROGRAMME_DEFAULT: FoundingInvestorBlock = {
  tag: "What it actually is",
  heading: "Lifetime access, in exchange for backing the company",
  paragraphs: [
    "Founding investors put capital into Unlock itself, via EIS or SEIS, and in return get lifetime access to the platform's Premium tier, no subscription fee, ever, plus a properly personal onboarding rather than a self-serve setup, priority allocation on the syndicate opportunities Unlock curates, quarterly reporting, and a direct line to shape what gets built next.",
  ],
  bullets: [
    { term: "Lifetime platform access:", text: "Premium tier, no ongoing subscription" },
    { term: "White Glove onboarding:", text: "someone works with you directly to connect and configure everything around your actual portfolio" },
    { term: "Priority syndicate allocation:", text: "first look at curated EIS/SEIS deal flow" },
    { term: "Quarterly reporting and roadmap input:", text: "a genuine feedback loop, not a one-way pitch" },
  ],
  note: "This is a general outline, not the full round terms. The specific mechanics, valuation, timing, and investment level are covered on a further call, once there's been a proper chance to sit with the EIS side of things first.",
  sourceLabel: "From the Founding Investor FAQ",
};
