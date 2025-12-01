import React from 'react';
import { SectionId } from '../types';
import { Mail, Instagram } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 bg-[#050505] border-t border-white/5 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info Side */}
          <div className="lg:w-5/12">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-cinzel text-white mb-6">
                Vamos Criar <br/><span className="text-zinc-600">Juntos</span>
              </h2>
              <p className="text-gray-400 mb-12 font-light text-lg">
                Tem um projeto em mente ou precisa de uma gestão estratégica para suas redes sociais? 
                Estou disponível para colaborações e novos desafios.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center rounded-sm text-red-600 group-hover:text-white group-hover:bg-red-600 transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm uppercase tracking-widest mb-1">Email</h4>
                    <a href="mailto:nicollymariosoliveira@gmail.com" className="text-gray-400 font-light hover:text-white transition-colors">
                      nicollymariosoliveira@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center rounded-sm text-red-600 group-hover:text-white group-hover:bg-red-600 transition-colors duration-300">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm uppercase tracking-widest mb-1">Instagram</h4>
                    <a href="https://www.instagram.com/nicollymarios/" target="_blank" rel="noopener noreferrer" className="text-gray-400 font-light hover:text-white transition-colors">
                      @nicollymarios
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Form Side */}
          <div className="lg:w-7/12">
            <FadeIn delay={200}>
              <form className="space-y-6 bg-zinc-900/30 p-8 md:p-12 border border-white/5 backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-500">Nome</label>
                    <input 
                      type="text" 
                      className="w-full bg-black/50 border border-white/10 p-4 text-white focus:outline-none focus:border-red-600 transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-500">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-black/50 border border-white/10 p-4 text-white focus:outline-none focus:border-red-600 transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500">Interesse</label>
                  <select className="w-full bg-black/50 border border-white/10 p-4 text-white focus:outline-none focus:border-red-600 transition-colors">
                    <option>Gestão de Redes Sociais</option>
                    <option>Edição de Vídeo</option>
                    <option>Produção Audiovisual</option>
                    <option>Parceria / Colaboração</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500">Mensagem</label>
                  <textarea 
                    rows={6}
                    className="w-full bg-black/50 border border-white/10 p-4 text-white focus:outline-none focus:border-red-600 transition-colors resize-none"
                    placeholder="Conte mais sobre o seu projeto..."
                  ></textarea>
                </div>

                <button 
                  type="button"
                  className="w-full py-4 bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors duration-300"
                >
                  Enviar Mensagem
                </button>
              </form>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};