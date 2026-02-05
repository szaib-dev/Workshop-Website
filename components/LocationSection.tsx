
import React from 'react';
import { LOCATION, PHONE_LINK, MAPS_LINK } from '../constants';

const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 md:py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-600/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10 md:gap-12 mb-16 md:mb-20 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="text-red-600 font-sync font-bold text-[10px] md:text-xs tracking-[0.5em] uppercase">Find Us</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-sync font-bold text-white tracking-tighter uppercase leading-[0.9]">
              Our Single <br /> <span className="text-yellow-500">Hub</span>
            </h3>
          </div>
          <p className="text-slate-500 max-w-sm font-bold uppercase tracking-widest text-[10px] md:text-[11px] leading-relaxed">
            Located in the heart of {LOCATION}. We provide world-class automotive solutions for the surrounding region.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative group overflow-hidden rounded-sm border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-red-600/10 z-10 pointer-events-none mix-blend-overlay"></div>
            <img 
              src="https://images.unsplash.com/photo-1494906109277-515742f9d5ee?auto=format&fit=crop&q=80&w=1200" 
              alt="Automotive Workshop Location" 
              className="w-full h-[320px] md:h-[500px] object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-[4s]"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20 p-4 md:p-6">
              <div className="bg-black/90 backdrop-blur-2xl p-6 md:p-12 border border-red-600 shadow-[0_0_50px_rgba(220,38,38,0.2)] w-full max-w-lg text-center transform transition-all group-hover:scale-[1.02]">
                <div className="inline-block px-3 py-1 md:px-4 md:py-1 border border-yellow-500/50 text-yellow-500 text-[8px] md:text-[10px] font-bold uppercase tracking-widest mb-4 md:mb-6">Expert Workshop</div>
                <h4 className="text-lg md:text-3xl lg:text-4xl font-sync font-bold text-white mb-3 md:mb-4 uppercase tracking-tighter leading-none">{LOCATION}</h4>
                <p className="hidden sm:block text-slate-400 text-xs md:text-sm font-medium mb-6 md:mb-10 leading-relaxed">The region's most advanced facility for Car AC, Electrical, and Wiring repairs.</p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <a 
                    href={PHONE_LINK} 
                    className="flex-1 py-3 md:py-4 bg-white text-black font-sync font-bold text-[9px] md:text-[10px] tracking-[0.3em] uppercase hover:bg-red-600 hover:text-white transition-colors"
                  >
                    Direct Call
                  </a>
                  <a 
                    href={MAPS_LINK} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex-1 py-3 md:py-4 bg-red-600 text-white font-sync font-bold text-[9px] md:text-[10px] tracking-[0.3em] uppercase hover:bg-yellow-500 hover:text-black transition-colors"
                  >
                    Get GPS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Keywords optimized */}
        <div className="mt-16 md:mt-24 text-[8px] md:text-[9px] text-slate-900 select-none uppercase tracking-[0.3em] md:tracking-[0.5em] text-center font-bold">
          Car Machanic Chakswari • Car Machanic in Chakswari • Car Machanic in Hamidabad Colony • Car Electrison in chakswari • Car Electrison in Mirpur • In Hamidabad • In islamgarh • in mirpur • Best Auto AC Repair Chakswari • Expert Car Wiring Mirpur • Car AC Mechanic Hamidabad Colony
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
