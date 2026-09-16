import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

export default function CtaBanner({ onOpenQuote }) {
  return (
    <section
      className="relative py-20 lg:py-24 bg-cover bg-center bg-no-repeat bg-fixed text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/cta-security-bg.jpg')",
      }}
    >
      {/* Light 30% neutral overlay for crisp image visibility and clear text legibility */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Text */}
          <div className="text-center lg:text-left max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 mb-2 inline-block drop-shadow-md">
              READY TO SECURE YOUR PROPERTY?
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight font-heading mb-2.5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              Get a Free Consultation &amp; Quote
            </h2>
            <p className="text-slate-100 text-sm sm:text-base font-medium max-w-xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
              Our experts will help you choose the best security solution for your needs.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 w-full lg:w-auto shrink-0">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#0080ff] hover:bg-[#0070e0] text-white text-sm sm:text-base font-semibold shadow-2xl shadow-black/60 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-black/45 hover:bg-black/65 border border-white/30 hover:border-sky-400/80 backdrop-blur-md text-white shadow-xl shadow-black/40 transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center text-sky-300 group-hover:scale-110 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold leading-tight tracking-tight">+91 9279185479</div>
                <div className="text-[11px] text-slate-300 leading-tight">Call us anytime</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
