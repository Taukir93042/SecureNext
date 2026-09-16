import React from 'react';
import { ArrowRight, Video, Wrench, Fingerprint, Network, ShieldCheck } from 'lucide-react';

export default function ServicesSection({ onSelectService }) {
  const services = [
    {
      id: 'cctv-installation',
      title: 'CCTV Installation',
      desc: 'High-quality cameras with professional setup.',
      icon: Video,
    },
    {
      id: 'repair-maintenance',
      title: 'Repair & Maintenance',
      desc: 'Quick response and reliable service.',
      icon: Wrench,
    },
    {
      id: 'access-control',
      title: 'Access Control',
      desc: 'Biometric & smart access solutions.',
      icon: Fingerprint,
    },
    {
      id: 'networking-cabling',
      title: 'Networking & Cabling',
      desc: 'Structured cabling for seamless connectivity.',
      icon: Network,
    },
    {
      id: 'amc-services',
      title: 'AMC Services',
      desc: 'Annual maintenance for hassle-free security.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#07132c] relative overflow-hidden text-white">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-wider text-sky-400 mb-2 inline-block">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight font-heading mb-4">
              Comprehensive Security Solutions
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              From installation to maintenance, we provide end-to-end security services for your peace of mind.
            </p>
          </div>

          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-sky-500/40 hover:border-sky-400 bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 hover:text-white text-sm font-semibold transition-all group shrink-0"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onSelectService && onSelectService(item.title)}
                className="group cursor-pointer rounded-2xl p-6 bg-[#0c1c40]/80 hover:bg-[#112454] border border-white/10 hover:border-sky-400/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10 relative overflow-hidden"
              >
                {/* Top Subtle Gradient Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div>
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/30 to-sky-400/20 border border-sky-400/30 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 group-hover:border-sky-400 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors mb-2.5 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Circular Arrow Button */}
                <div className="w-9 h-9 rounded-full border border-sky-400/30 group-hover:border-sky-400 group-hover:bg-[#0080ff] flex items-center justify-center text-sky-400 group-hover:text-white transition-all duration-300 mt-auto">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
