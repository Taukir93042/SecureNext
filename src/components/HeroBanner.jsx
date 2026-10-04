import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroBanner({ onOpenQuote }) {
  return (
    <section id="home" className="relative pt-24 pb-6 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-24 lg:min-h-[660px] bg-[#081026] overflow-hidden flex items-center">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Text & Features (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Category Breadcrumb */}
            <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-bold tracking-widest uppercase mb-3 sm:mb-4">
              <span>CCTV INSTALLATION</span>
              <span className="text-slate-500">|</span>
              <span>HOME &amp; OFFICE SECURITY</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.12] tracking-tight font-heading mb-4">
              Smarter Security <br />
              for a{' '}
              <span className="text-sky-400">
                Safer Tomorrow
              </span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed mb-6 sm:mb-8 max-w-xl">
              Professional CCTV installation and smart security solutions for homes,
              offices, and businesses, backed by expert service and 24/7 support.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-2">
              <button
                type="button"
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00a6ff] hover:from-[#0052cc] hover:to-[#0088ff] text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm sm:text-base backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: "Your Safety Our Priority" Watermark on Wall (Hidden on Mobile) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-end items-end h-full lg:pt-52">
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


