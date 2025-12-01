import React, { useState } from 'react';
import { SectionId, Project } from '../types';
import { Play, X } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const projects: Project[] = [
  {
    id: 1,
    title: "Reels Lifestyle",
    category: "Edição CapCut",
    thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    description: "Edição dinâmica para influenciadora de moda, focada em transições rápidas e ritmo musical."
  },
  {
    id: 2,
    title: "Vlog de Viagem",
    category: "Produção Mobile",
    thumbnail: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop",
    description: "Captura e edição completa feita no celular, documentando experiências com estética cinematográfica."
  },
  {
    id: 3,
    title: "Campanha Fitness",
    category: "Estratégia & Vídeo",
    thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
    description: "Planejamento de conteúdo e produção de vídeos curtos para academia local, aumentando engajamento."
  },
  {
    id: 4,
    title: "Challenge TikTok",
    category: "Trends",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    description: "Criação e edição de conteúdo viral seguindo as tendências atuais da plataforma."
  },
  {
    id: 5,
    title: "Review de Produto",
    category: "UGC / Publicidade",
    thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
    description: "Vídeo estilo User Generated Content (UGC) para marca de tecnologia, focado em conversão."
  },
  {
    id: 6,
    title: "Gestão de Perfil",
    category: "Social Media",
    thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=800&auto=format&fit=crop",
    description: "Case de reestruturação visual e estratégica de perfil comercial no Instagram."
  }
];

export const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id={SectionId.WORK} className="py-24 bg-black scroll-mt-24">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-cinzel text-white mb-4">
                Portfólio <span className="text-zinc-700">Visual</span>
              </h2>
              <div className="h-1 w-24 bg-red-600"></div>
            </div>
            <p className="text-gray-400 mt-6 md:mt-0 text-right max-w-md">
              Projetos que unem técnica de edição e estratégia de conteúdo para redes sociais.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 100}>
              <div 
                className="group relative h-80 overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75 group-hover:brightness-100 grayscale group-hover:grayscale-0"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-full border border-white/50 flex items-center justify-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                  <h3 className="text-2xl text-white font-cinzel translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                    {project.title}
                  </h3>
                  <p className="text-red-500 text-xs uppercase tracking-widest mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                    {project.category}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Modal Video Player Simulation */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-5xl bg-zinc-900 border border-zinc-800">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors"
              onClick={() => setSelectedProject(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="aspect-video bg-black flex items-center justify-center">
              {/* This simulates a video player. In production, embed YouTube/Vimeo iframe here */}
              <div className="text-center">
                <Play className="w-20 h-20 text-zinc-700 mx-auto mb-4" />
                <p className="text-zinc-500 font-mono text-sm uppercase">Vídeo Indisponível na Demo</p>
                <p className="text-white text-xl font-cinzel mt-2">{selectedProject.title}</p>
              </div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl text-white font-cinzel mb-2">{selectedProject.title}</h3>
                  <p className="text-red-500 text-xs uppercase tracking-widest">{selectedProject.category}</p>
                </div>
                <button className="px-6 py-2 border border-white/20 text-white text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Ver no Instagram
                </button>
              </div>
              <p className="mt-6 text-gray-400 font-light border-t border-white/10 pt-6">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};