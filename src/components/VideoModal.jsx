import React from 'react';
import { X, Play, Shield } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#081226] border border-white/20 rounded-2xl shadow-2xl overflow-hidden text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-slate-300 hover:text-white rounded-lg bg-black/50 hover:bg-black/80 transition-colors"
          aria-label="Close video"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Area */}
        <div className="relative aspect-video bg-black flex flex-col items-center justify-center overflow-hidden">
          <img
            src="/images/hero-banner.jpg"
            alt="SecureNest Product Demo"
            className="w-full h-full object-cover opacity-60"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#081226] via-transparent to-transparent"></div>

          {/* Interactive Play Button Preview */}
          <div className="absolute flex flex-col items-center text-center p-6">
            <div className="w-20 h-20 rounded-full bg-[#0080ff] flex items-center justify-center text-white shadow-2xl shadow-blue-500/60 mb-4 animate-pulse">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white mb-1">
              SecureNest Smart Protection Showcase
            </h3>
            <p className="text-slate-300 text-sm max-w-md">
              See how our 4K AI-powered cameras, night vision, and mobile live-view keep your home and business secure 24/7.
            </p>
          </div>
        </div>

        {/* Footer info in modal */}
        <div className="p-4 sm:p-5 bg-[#0b1836] flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-sky-400 font-semibold">
            <Shield className="w-4 h-4" />
            <span>High Definition Live Surveillance System</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
