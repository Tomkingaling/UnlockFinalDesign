export type SignatureEntry = {
  name: string;
  title: string;
  email: string;
  phone: string;
  website: string;
  calendlyUrl?: string;
};

export const SIGNATURES: Record<string, SignatureEntry> = {
  "tom-king": {
    name: "Thomas King",
    title: "Founder & CEO",
    email: "tom@unlockdd.com",
    phone: "+44 7427 537426",
    website: "unlockdd.com",
    calendlyUrl: "https://calendly.com/tom-unlockdd/30min",
  },
};

export function getSignature(slug: string): SignatureEntry | undefined {
  return SIGNATURES[slug];
}
