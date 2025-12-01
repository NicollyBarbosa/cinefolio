import React from 'react';
import { Play } from 'lucide-react';
import { SectionId } from '../types';

export const Hero: React.FC = () => {
  return (
    <section id={SectionId.HERO} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop" 
          alt="Cinematic Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#050505]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-xs md:text-sm uppercase tracking-[0.5em] text-red-500 mb-6 font-semibold">
            Filmmaking & Estratégia Digital
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter font-cinzel leading-tight">
            CONTEÚDO COM <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">IMPACTO & PERFORMANCE</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-lg font-light leading-relaxed mb-12">
            Unindo criatividade, direção e edição para transformar sua presença digital. 
            Do planejamento estratégico à produção audiovisual.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href={`#${SectionId.WORK}`}
              className="px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors duration-300"
            >
              Ver Portfólio
            </a>
            <a 
              href={`#${SectionId.CONTACT}`}
              className="flex items-center gap-3 text-white text-xs uppercase tracking-widest hover:text-red-500 transition-colors duration-300 group"
            >
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-red-500 transition-colors">
                <Play className="w-3 h-3 fill-current" />
              </div>
              Entrar em Contato
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent opacity-30"></div>
      </div>
    </section>
  );
};