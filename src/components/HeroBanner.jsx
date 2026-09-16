import React from 'react';
import { ArrowRight, Play, ShieldCheck, Headphones, CircleDollarSign, Radio } from 'lucide-react';

export default function HeroBanner({ onOpenQuote, onOpenVideo }) {
  const heroFeatures = [
    {
      icon: ShieldCheck,
      title: 'Expert',
      subtitle: 'Installation',
    },
    {
      icon: Headphones,
      title: 'Reliable',
      subtitle: 'Support',
    },
    {
      icon: CircleDollarSign,
      title: 'Affordable',
      subtitle: 'Pricing',
    },
    {
      icon: Radio,
      title: '24/7',
      subtitle: 'Monitoring',
    },
  ];

  return (
    <section id="home" className="relative min-h-[580px] lg:min-h-[660px] pt-28 pb-16 lg:pt-32 lg:pb-24 bg-[#081026] overflow-hidden flex items-center">
      {/* 1. Crystal Clear, Bright Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/hero-banner.jpg"
          alt="SecureNest CCTV Camera & Modern Luxury Villa"
          className="w-full h-full object-cover object-center transform scale-x-[-1] filter brightness-110 contrast-105"
          loading="eager"
        />

        {/* Minimal gradient on the left edge only so the house and camera stay 100% crystal clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081026] from-20% via-[#081026]/80 via-40% to-transparent to-60%"></div>
        
        {/* Subtle bottom edge blend */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#081026] to-transparent"></div>
      </div>

      {/* 2. Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Text & Features (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Category Breadcrumb */}
            <div className="inline-flex items-center gap-2 text-sky-400 text-xs sm:text-xs font-bold tracking-widest uppercase mb-4">
              <span>CCTV INSTALLATION</span>
              <span className="text-slate-500">|</span>
              <span>HOME &amp; OFFICE SECURITY</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.12] tracking-tight font-heading mb-4">
              Smarter Security <br />
              for a{' '}
              <span className="text-[#0088ff] text-sky-400">
                Safer Tomorrow
              </span>
              
            </h1>
            <p className="  sm:text-lg text-white    mb-8">
  Professional CCTV installation and smart security solutions for homes,
  offices, and businesses, backed by expert service and 24/7 support.
</p>

            {/* 4 Feature Badges Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 w-full max-w-2xl mb-9">
              {heroFeatures.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-2.5 group">
                    <div className="w-11 h-11 rounded-full bg-[#0d224d]/90 border border-sky-400/40 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:border-sky-300 group-hover:bg-[#0080ff] group-hover:text-white transition-all shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold text-white leading-tight">{item.title}</div>
                      <div className="text-[11px] text-slate-300 leading-tight">{item.subtitle}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            
          </div>

          {/* Right Column: "Your Safety Our Priority" Watermark on Wall */}
          <div className="lg:col-span-5 flex flex-col justify-end items-end h-full pt-16 lg:pt-52">
            <div className="text-right select-none pointer-events-none transform lg:translate-x-2">
              <div className="font-script text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-wide drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] leading-tight -rotate-3">
                Your Safety <br />
                <span className="text-sky-300">Our Priority</span>
              </div>
              {/* Vibrant blue swoosh underline */}
              <svg className="w-32 sm:w-36 h-7 ml-auto text-sky-400 mt-1 drop-shadow-md" viewBox="0 0 120 25" fill="none" stroke="currentColor">
                <path d="M5 12 Q 60 2 115 15" strokeWidth="3" strokeLinecap="round" />
                <path d="M98 8 L 115 15 L 104 22" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


