import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll
      const sections = ['home', 'about', 'services', 'products', 'projects', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Products', href: '#products', id: 'products' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#081226]/95 backdrop-blur-md shadow-lg shadow-black/30 py-3 border-b border-white/5'
          : 'bg-[#081226]/80 backdrop-blur-sm py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="group">
            <Logo />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-all relative py-1 ${
                    isActive
                      ? 'text-[#00c6ff] font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#0088ff] to-[#00c6ff] rounded-full"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Section: Phone & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-slate-200 hover:text-white text-sm font-semibold transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-sky-400 group-hover:bg-blue-500/20 group-hover:scale-105 transition-all">
                <Phone className="w-4 h-4" />
              </div>
              <span>+91 9279185479</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="relative group overflow-hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0080ff] hover:bg-[#0070e0] text-white text-sm font-semibold shadow-md shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#0080ff] text-white text-xs font-semibold shadow-md shadow-blue-500/30"
            >
              Quote
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070f20] border-b border-white/10 px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-blue-600/20 text-[#00c6ff] font-semibold'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 px-3 py-2 text-slate-200 text-sm font-semibold"
              >
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-sky-400">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 9279185479</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#0080ff] hover:bg-[#0070e0] text-white font-semibold text-sm shadow-lg shadow-blue-500/30"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
