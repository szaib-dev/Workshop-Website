
import React from 'react';
import { WHATSAPP_LINK, LOCATION } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="absolute top-6 left-6 md:top-10 md:left-10 w-full h-full bg-red-600/10 rounded-sm -z-10 border border-red-600/20 max-w-lg"></div>
            <img 
              src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1000" 
              alt="High-Performance Engine" 
              className="rounded-sm object-cover w-full max-w-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 aspect-video md:aspect-[4/3]" 
            />
            <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-yellow-500 text-black px-6 py-6 md:px-10 md:py-10 font-sync font-bold text-center border-2 md:border-4 border-black shadow-[10px_10px_0px_rgba(220,38,38,1)] md:shadow-[20px_20px_0px_rgba(220,38,38,1)] scale-90 md:scale-100 z-20">
              <span className="block text-4xl md:text-5xl mb-1">9+</span>
              <span className="text-[9px] md:text-[10px] tracking-widest uppercase">Expert Years</span>
            </div>
          </div>

          <div className="space-y-8 md:space-y-10 order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-red-600 font-sync font-bold text-[10px] md:text-xs tracking-[0.5em] uppercase underline decoration-2 underline-offset-8">Our High Standard</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-sync font-bold text-white tracking-tighter uppercase leading-[0.9]">
              Precision <span className="text-red-600">Electrical</span> <br />& Cooling systems
            </h3>
            
            <p className="text-slate-400 text-sm md:text-lg leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
              We operate at the intersection of automotive tradition and high-tech diagnostics. Our workshop is the primary choice for owners of sophisticated vehicles in <span className="text-white">{LOCATION}</span> who demand zero errors and perfect cooling.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 text-left max-w-md mx-auto lg:mx-0">
              {[
                { label: "AC Engineering", color: "text-red-500" },
                { label: "Elite Electronics", color: "text-yellow-500" },
                { label: "Full Diagnostics", color: "text-red-500" },
                { label: "Master Wiring", color: "text-yellow-500" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 md:gap-4 group">
                  <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white group-hover:scale-150 transition-transform`}></div>
                  <span className={`font-sync font-bold text-[9px] md:text-[11px] tracking-widest uppercase ${item.color}`}>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 md:pt-6">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 font-bold overflow-hidden rounded-sm transition-all active:scale-95"
              >
                <span className="absolute inset-0 w-full h-full bg-red-600 group-hover:bg-yellow-500 transition-colors"></span>
                <span className="relative text-white group-hover:text-black font-sync text-[9px] md:text-[10px] tracking-widest uppercase">Reach Out Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
