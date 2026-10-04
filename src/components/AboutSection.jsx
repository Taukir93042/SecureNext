import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function AboutSection({ onLearnMore }) {
  const checkItems = [
    'Certified Technicians',
    'Genuine Products',
    'Affordable Pricing',
    'End-to-End Support',
  ];

  return (
    <section id="about" className="py-[60px] bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Text & Checklist */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Tag */}
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#0080ff] mb-3 inline-block">
              WHY SECURENEST
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.18] font-heading mb-6">
              Complete Security Solutions Under One Roof
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              At SecureNest, we provide high-quality CCTV installation, maintenance and smart security solutions for homes, offices, shops and industries. Our mission is to make modern security simple, reliable and affordable for everyone.
            </p>

            {/* 4 Checklist Items (2 per row on mobile & desktop) */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full mb-9">
              {checkItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 sm:gap-3 group">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#0080ff] text-white flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/30 group-hover:scale-110 transition-transform">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-semibold text-slate-800 group-hover:text-[#0080ff] transition-colors whitespace-nowrap">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={onLearnMore}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#0080ff] hover:bg-[#0070e0] text-white text-sm sm:text-base font-semibold shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: Single Large Technician Installation Image */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Image Container (No shadow) */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-100 group">
                <img
                  src="/images/about-installer.jpg"
                  alt="SecureNest Professional Technician Installing CCTV"
                  className="w-full h-[420px] sm:h-[480px] lg:h-[475px] object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Subtle soft vignette at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
