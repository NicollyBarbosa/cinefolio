import React, { useState } from 'react';
import { SectionId } from '../types';
import { Play, X } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

interface Video {
  id: string;
  title: string;
  src: string;
}

const videos: Video[] = [
  {
    id: 'video-falado',
    title: 'Video Falado',
    src: '/video falado.mp4'
  },
  {
    id: 'captacao-evento',
    title: 'Captação de Evento',
    src: '/captação de evento.mp4'
  },
  {
    id: 'feriado-vibes',
    title: 'Feriado Vibes',
    src: '/FERIADO VIBES.mp4'
  }
];

export const Work: React.FC = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handlePlay = (videoId: string) => {
    setPlayingVideo(videoId);
  };

  const handleClose = () => {
    setPlayingVideo(null);
  };

  const currentVideo = videos.find(v => v.id === playingVideo);

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
          {videos.map((video, index) => (
            <FadeIn key={video.id} delay={index * 100}>
              <div
                className="relative aspect-video bg-zinc-900 overflow-hidden group cursor-pointer"
                onClick={() => handlePlay(video.id)}
              >
                {/* Video preview (first frame) */}
                <video
                  src={video.src}
                  className="w-full h-full object-cover"
                  preload="metadata"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Modal Video Player */}
      {playingVideo && currentVideo && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors z-10"
            onClick={handleClose}
          >
            <X className="w-10 h-10" />
          </button>

          <div
            className="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              className="max-w-full max-h-[90vh] w-auto h-auto"
              src={currentVideo.src}
              controls
              autoPlay
              controlsList="nodownload"
            />
          </div>
        </div>
      )}
    </section>
  );
};