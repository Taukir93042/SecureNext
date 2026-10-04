import React from 'react';
import { ShieldCheck, Headphones, CircleDollarSign, Radio } from 'lucide-react';

export default function FeatureStrip() {
  const features = [
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
    <section className="relative z-20 bg-white border-y border-slate-200/80 shadow-sm py-4 sm:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8 items-center">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group flex items-center justify-start sm:justify-center gap-3.5 sm:gap-4 transition-all duration-200 hover:-translate-y-0.5"
              >
                {/* Circular Icon Container */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full bg-blue-50/90 border border-blue-200/70 flex items-center justify-center text-[#0066ff] shadow-sm group-hover:bg-[#0066ff] group-hover:text-white group-hover:border-[#0066ff] group-hover:shadow-md group-hover:shadow-blue-500/25 transition-all duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                </div>

                {/* Text info */}
                <div className="flex flex-col text-left">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0066ff] transition-colors leading-tight mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-500 font-medium leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
