import React from 'react';
import { SectionId } from '../types';
import { FadeIn } from './ui/FadeIn';
import { TrendingUp, Smartphone, Scissors } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-[#050505] relative overflow-hidden scroll-mt-24">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-zinc-900/20 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-cinzel text-white mb-8 leading-tight">
                Criatividade & <span className="text-red-600">Estratégia</span>
              </h2>
              <div className="w-20 h-1 bg-red-600 mb-8"></div>
              <p className="text-gray-400 leading-relaxed mb-6 font-light text-lg">
                Eu me chamo <strong>Nicolly Marios</strong>. Sou filmmaker e editora em formação. 
                Meu foco é a produção audiovisual ágil e moderna, utilizando o celular como ferramenta principal de criação e o CapCut para edições dinâmicas.
              </p>
              <p className="text-gray-400 leading-relaxed mb-10 font-light text-lg">
                Meu diferencial vai além do vídeo: atuo na <strong>gestão completa de redes sociais</strong>, cuidando do planejamento, execução e otimização. 
                Meu objetivo é unir criatividade, direção, edição e estratégia para entregar conteúdo que não só engaja, mas traz resultados.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                <div className="flex flex-col gap-2">
                  <Smartphone className="w-8 h-8 text-white mb-2" />
                  <h4 className="text-white font-cinzel text-lg">Produção Mobile</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Audiovisual Ágil</p>
                </div>
                <div className="flex flex-col gap-2">
                  <Scissors className="w-8 h-8 text-white mb-2" />
                  <h4 className="text-white font-cinzel text-lg">Edição</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">CapCut & Ritmo</p>
                </div>
                <div className="flex flex-col gap-2">
                  <TrendingUp className="w-8 h-8 text-white mb-2" />
                  <h4 className="text-white font-cinzel text-lg">Social Media</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Gestão & Estratégia</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <FadeIn delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 border border-white/10 z-0 translate-x-4 translate-y-4"></div>
                
                {/* 
                   ATENÇÃO PARA A IMAGEM:
                   O código abaixo tenta carregar "nicolly.png" da pasta pública.
                   Se não encontrar, ele usa a imagem de exemplo do Unsplash.
                   Para usar sua foto: Salve seu arquivo como "nicolly.png" na pasta public.
                */}
                <img 
                  src="/nicolly.png" 
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1525268323814-789a273b3780?q=80&w=1000&auto=format&fit=crop";
                    e.currentTarget.onerror = null; // Previne loop infinito
                  }}
                  alt="Nicolly Marios Filmmaker" 
                  className="relative z-10 w-full h-[600px] object-cover filter brightness-90 contrast-110"
                />
                
                <div className="absolute bottom-0 left-0 p-8 z-20 bg-gradient-to-t from-black to-transparent w-full">
                  <p className="text-white font-cinzel text-xl">Nicolly Marios</p>
                  <p className="text-red-500 text-xs uppercase tracking-widest">Filmmaker & Social Media</p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};