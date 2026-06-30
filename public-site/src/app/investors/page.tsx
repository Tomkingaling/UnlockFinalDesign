import { redirect } from 'next/navigation';

export const metadata = {
  robots: 'noindex, nofollow',
};

export default function InvestorsPage() {
  redirect('https://unlockdd-investor.pages.dev/');
}
