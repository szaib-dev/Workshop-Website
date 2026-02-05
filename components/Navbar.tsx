
import React, { useState, useEffect } from 'react';
import { PHONE_LINK } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled ? 'bg-black/95 backdrop-blur-xl py-2 md:py-3 border-b border-red-900/30 shadow-2xl' : 'bg-transparent py-4 md:py-8'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-yellow-500 rounded blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative w-9 h-9 md:w-12 md:h-12 bg-black border border-red-600/50 rounded flex items-center justify-center font-sync font-bold text-lg md:text-2xl text-red-600">
                E
              </div>
            </div>
            <div className="flex flex-col -space-y-0.5 md:-space-y-1">
              <span className="text-sm md:text-xl font-sync font-bold tracking-tighter text-white uppercase leading-none">
                EXPERT<span className="text-red-600">AUTO</span>
              </span>
              <span className="text-[6px] md:text-[10px] tracking-[0.3em] font-bold text-yellow-500/80 uppercase">Workshop</span>
            </div>
          </a>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.2em]">
            <a href="#services" className="text-slate-400 hover:text-red-500 transition-colors">Expertise</a>
            <a href="#about" className="text-slate-400 hover:text-red-500 transition-colors">Standard</a>
            <a href="#location" className="text-slate-400 hover:text-red-500 transition-colors">Location</a>
          </div>

          {/* Call Button (Primary Action) */}
          <div className="flex items-center">
            <a 
              href={PHONE_LINK}
              className="relative group overflow-hidden bg-red-600 px-4 md:px-8 py-2 md:py-3 rounded-sm font-bold text-[9px] md:text-xs tracking-widest text-white transition-all active:scale-95 flex items-center gap-1.5 md:gap-2 shadow-lg shadow-red-600/20"
            >
              <div className="absolute inset-0 w-full h-full bg-yellow-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              <svg className="relative z-10 w-3 h-3 md:w-4 md:h-4 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              <span className="relative z-10 group-hover:text-black transition-colors uppercase whitespace-nowrap">Call Us</span>
            </a>
          </div>
        </div>
        
        {/* Mobile Sub-Navigation - Cleaner layout */}
        <div className={`lg:hidden flex justify-center space-x-6 pt-2 text-[8px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${isScrolled ? 'opacity-100 mt-2 border-t border-white/5 pt-2' : 'opacity-80 mt-1'}`}>
          <a href="#services" className="text-slate-400 hover:text-red-600">Expertise</a>
          <a href="#about" className="text-slate-400 hover:text-red-600">Standard</a>
          <a href="#location" className="text-slate-400 hover:text-red-600">Location</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
