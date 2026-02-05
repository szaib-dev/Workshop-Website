
import React from 'react';
import { WHATSAPP_LINK, LOCATION } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-40 pb-12 md:pb-16 overflow-hidden bg-[#050505]">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[70%] md:w-[40%] h-[40%] bg-red-900/20 rounded-full blur-[80px] md:blur-[160px] glow-red"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[70%] md:w-[40%] h-[40%] bg-yellow-900/10 rounded-full blur-[80px] md:blur-[160px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-8 md:gap-16">
        <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="inline-flex items-center gap-2 md:gap-3 px-3 py-1.5 md:px-4 md:py-2 bg-red-950/40 border border-red-500/20 rounded-full backdrop-blur-md">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-600 animate-pulse"></span>
            <span className="text-[8px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] text-red-500 uppercase">Top-Rated Workshop Chakswari</span>
          </div>
          
          <h1 className="mobile-title text-4xl sm:text-7xl md:text-8xl lg:text-[100px] font-sync font-bold text-white leading-[0.9] tracking-tighter uppercase transition-all duration-700">
            REDEFINING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-yellow-500">
              ELITE CARE
            </span>
          </h1>
          
          <p className="max-w-xl text-slate-400 text-sm md:text-xl leading-relaxed font-medium lg:border-l-2 lg:border-red-600 lg:pl-6 text-center lg:text-left">
            Elite-level <span className="text-white">Car AC Diagnostics</span> and 
            <span className="text-white"> Advanced Electrical Engineering</span>. 
            9+ years of professional excellence optimizing performance in <span className="text-white">{LOCATION}</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 justify-center lg:justify-start items-center w-full sm:w-auto">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-auto px-10 md:px-12 py-4 md:py-6 bg-red-600 text-white font-sync font-bold text-[10px] md:text-xs tracking-widest rounded-sm hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:shadow-white/20 uppercase text-center"
            >
              Reach Out Now
            </a>
            <div className="flex items-center gap-3 md:gap-4 px-4 py-3 md:px-6 md:py-4 border border-slate-800 rounded-sm bg-black/50 backdrop-blur-sm w-fit">
               <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-yellow-500/10 border border-yellow-500/30 rounded">
                 <svg className="w-4 h-4 md:w-6 md:h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
               </div>
               <div className="text-left">
                 <p className="text-white text-[9px] md:text-xs font-bold uppercase tracking-widest">5 Star Google Rated</p>
                 <p className="text-yellow-500 text-[7px] md:text-[10px] font-bold">EXCELLENCE GUARANTEED</p>
               </div>
            </div>
          </div>
        </div>

        <div className="flex-1 relative w-full lg:max-w-2xl hidden lg:block">
          <div className="absolute -inset-4 bg-gradient-to-tr from-red-600/20 to-yellow-500/20 blur-3xl opacity-30"></div>
          <img 
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1000" 
            alt="Advanced Car Maintenance" 
            className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10 w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
