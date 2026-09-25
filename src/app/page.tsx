import React from 'react';
import type { Metadata } from 'next';
import Banner from './components/shared/homepage/Banner';
import Library from './components/shared/homepage/Library';

export const metadata: Metadata = {
  title: 'FitLog — Workout Library & Daily Plan',
  description: "FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.",
};

export default function HomePage() {
  return (
    <div>
      <Banner />
      <Library />
    </div>
  );
}