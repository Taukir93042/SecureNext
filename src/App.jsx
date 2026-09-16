import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import VideoModal from './components/VideoModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState('');

  const handleOpenQuote = (serviceName = '') => {
    setSelectedServiceForQuote(typeof serviceName === 'string' ? serviceName : '');
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
  };

  const handleOpenVideo = () => {
    setIsVideoModalOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#070e22] text-slate-800 flex flex-col font-sans selection:bg-[#0080ff] selection:text-white">
      {/* Top Sticky Responsive Navigation */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Pages Container */}
      <Home
        onOpenQuote={handleOpenQuote}
        onOpenVideo={handleOpenVideo}
      />

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuote}
        initialService={selectedServiceForQuote}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={handleCloseVideo}
      />
    </div>
  );
}
