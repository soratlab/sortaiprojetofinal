import React from 'react';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { VideoSection } from './components/VideoSection';
import { PricingSection } from './components/Pricing';
import { AddonsSection } from './components/AddonsSection';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#111111] text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <VideoSection />
        <PricingSection />
        <AddonsSection />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
