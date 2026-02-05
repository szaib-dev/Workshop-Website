
import React from 'react';
import { SERVICES, WHATSAPP_LINK } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#080808] border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-red-600 font-sync font-bold text-xs tracking-[0.5em] uppercase">Core Disciplines</h2>
          <h3 className="text-5xl md:text-6xl font-sync font-bold text-white tracking-tighter uppercase">Professional <span className="text-yellow-500">Expertise</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className={`group relative p-12 rounded-sm transition-all duration-500 overflow-hidden border ${
                service.highlight 
                ? 'bg-gradient-to-br from-[#0f0f0f] to-[#0a0a0a] border-red-600/50 hover:border-red-500' 
                : 'bg-black border-white/10 hover:border-yellow-500/50'
              }`}
            >
              {/* Premium Accent */}
              <div className={`absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 transition-all duration-700 ${
                service.highlight ? 'bg-red-600/10 blur-2xl group-hover:bg-red-600/30' : 'bg-yellow-500/5 blur-2xl group-hover:bg-yellow-500/20'
              }`}></div>
              
              <div className="relative z-10">
                <div className={`mb-8 flex items-center gap-4 ${service.highlight ? 'text-red-500' : 'text-yellow-500'}`}>
                  <div className={`w-12 h-1 bg-current transition-all duration-500 group-hover:w-24`}></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">{service.highlight ? 'MASTER CLASS' : 'ADVANCED'}</span>
                </div>

                <h4 className="text-3xl md:text-4xl font-sync font-bold text-white mb-6 uppercase leading-none group-hover:text-red-500 transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md font-medium">
                  {service.description}
                </p>

                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] transition-all hover:gap-8"
                >
                  <span className={service.highlight ? 'text-red-600' : 'text-yellow-500'}>Inquire Session</span>
                  <svg className={`w-6 h-6 ${service.highlight ? 'text-red-600' : 'text-yellow-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
