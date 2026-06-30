'use client';
import { useEffect } from 'react';

export default function InvestorsPage() {
  useEffect(() => {
    window.location.replace('https://unlockdd-investor.pages.dev/');
  }, []);
  return null;
}
