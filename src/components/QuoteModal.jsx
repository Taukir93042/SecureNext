import React, { useState } from 'react';
import { X, CheckCircle, Shield, Send } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Home',
    serviceType: initialService || 'CCTV Installation',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulate submission
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#081226] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8 text-white overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-60 h-60 bg-blue-600/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-heading mb-2">Quote Request Received!</h3>
            <p className="text-slate-300 text-sm max-w-sm mb-6">
              Thank you, <span className="text-sky-400 font-semibold">{formData.name}</span>. Our security experts will contact you within 30 minutes with a customized quote.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-[#0080ff] hover:bg-[#0070e0] text-white font-semibold text-sm transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2.5 mb-1">
              <Shield className="w-5 h-5 text-sky-400" />
              <span className="text-xs font-bold text-sky-400 tracking-wider uppercase">Free Estimate</span>
            </div>
            <h3 className="text-2xl font-bold font-heading mb-2">Get a Free Security Quote</h3>
            <p className="text-slate-300 text-xs sm:text-sm mb-6">
              Fill in your details and our team will provide a tailored security proposal for your site.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-sky-400 focus:outline-none text-white text-sm placeholder-slate-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-sky-400 focus:outline-none text-white text-sm placeholder-slate-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-sky-400 focus:outline-none text-white text-sm placeholder-slate-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Property Type</label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0f1f3d] border border-white/10 focus:border-sky-400 focus:outline-none text-white text-sm"
                  >
                    <option value="Home">Home / Residential Villa</option>
                    <option value="Office">Office / Commercial Space</option>
                    <option value="Shop">Shop / Retail Boutique</option>
                    <option value="Warehouse">Warehouse / Industrial</option>
                    <option value="Apartment">Apartment Complex</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Service Needed</label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0f1f3d] border border-white/10 focus:border-sky-400 focus:outline-none text-white text-sm"
                  >
                    <option value="CCTV Installation">CCTV Installation</option>
                    <option value="Repair & Maintenance">Repair &amp; Maintenance</option>
                    <option value="Access Control">Access Control</option>
                    <option value="Networking & Cabling">Networking &amp; Cabling</option>
                    <option value="AMC Services">AMC Services</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Any Specific Requirements (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Number of cameras, area size, special requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-sky-400 focus:outline-none text-white text-sm placeholder-slate-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0080ff] hover:bg-[#0070e0] text-white font-semibold text-sm shadow-lg shadow-blue-500/30 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Quote Request</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
