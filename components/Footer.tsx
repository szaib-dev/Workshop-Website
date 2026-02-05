
import React from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_LINK, PHONE_LINK, LOCATION } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 md:pt-32 pb-10 md:pb-16 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 pb-12 md:pb-20 border-b border-white/5">
          <div className="space-y-6 md:space-y-10 text-center lg:text-left">
            <div className="flex flex-col -space-y-1">
              <span className="text-3xl md:text-5xl font-sync font-black text-white uppercase tracking-tighter leading-none">
                EXPERT<span className="text-red-600">AUTO</span>
              </span>
              <span className="text-[10px] md:text-xs font-bold text-yellow-500 uppercase tracking-[0.6em] md:tracking-[0.8em]">Workshop</span>
            </div>
            <p className="text-slate-500 text-sm md:text-lg font-medium leading-relaxed max-w-sm mx-auto lg:mx-0">
              The pinnacle of automotive electrical and cooling maintenance in {LOCATION}. 9+ years of professional excellence.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-end justify-center space-y-4 md:space-y-6">
            <span className="text-red-600 font-sync font-bold text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase">Contact Immediately</span>
            <div className="flex flex-col items-center lg:items-end gap-2">
              <a href={PHONE_LINK} className="text-xl sm:text-3xl md:text-5xl font-sync font-bold text-white hover:text-yellow-500 transition-colors tracking-tighter">
                {WHATSAPP_NUMBER}
              </a>
              <div className="flex gap-4">
                <a href={PHONE_LINK} className="text-[9px] md:text-xs font-bold text-red-600 uppercase tracking-widest hover:underline">Direct Call</a>
                <span className="text-slate-800">|</span>
                <a href={WHATSAPP_LINK} className="text-[9px] md:text-xs font-bold text-yellow-500 uppercase tracking-widest hover:underline">WhatsApp Now</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-center md:text-left">
          <p className="text-slate-700 text-[8px] md:text-[9px] font-sync font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase leading-relaxed">
            &copy; {new Date().getFullYear()} Elite Engineering Services. Chakswari's Finest Automotive Care.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {['Expertise', 'Standard', 'Location'].map(link => (
              <a key={link} href={`#${link === 'Expertise' ? 'services' : link.toLowerCase()}`} className="text-slate-700 hover:text-red-600 transition-colors text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em]">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
