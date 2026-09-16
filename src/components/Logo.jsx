import React from 'react';

export default function Logo({ className = "h-9", textClassName = "text-xl font-bold tracking-tight text-white", iconOnly = false }) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Modern Shield with CCTV Camera Lens Icon */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#0066ff] via-[#0088ff] to-[#00c6ff] p-[2px] shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300">
        <div className="w-full h-full bg-[#081226] rounded-[10px] flex items-center justify-center relative overflow-hidden">
          {/* Subtle glow inside icon */}
          <div className="absolute inset-0 bg-blue-500/10 blur-[2px]"></div>
          
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-6 h-6 text-sky-400 relative z-10 transition-transform duration-300 group-hover:scale-110"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Shield Outline */}
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="url(#shieldGrad)" stroke="#38bdf8" strokeWidth="1.75" />
            
            {/* Inner CCTV Camera Lens / Eye */}
            <circle cx="12" cy="11" r="3.2" stroke="#ffffff" strokeWidth="1.5" fill="#0369a1" />
            <circle cx="12" cy="11" r="1.3" fill="#38bdf8" />
            <path d="M9 7.5L12 5.5L15 7.5" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round" />
            
            <defs>
              <linearGradient id="shieldGrad" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0284c7" stopOpacity="0.4" />
                <stop stopColor="#0369a1" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {!iconOnly && (
        <div className="flex flex-col">
          <div className={`flex items-center tracking-tight leading-none ${textClassName}`}>
            <span className="font-extrabold text-white">Secure</span>
            <span className="font-extrabold text-[#0088ff] ml-0.5">Nest</span>
          </div>
          <span className="text-[10px] tracking-widest text-sky-400/80 uppercase font-semibold mt-0.5">
            Security Systems
          </span>
        </div>
      )}
    </div>
  );
}
