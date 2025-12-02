import React, { useState } from 'react';
import { SectionId } from '../types';
import { Play, X } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

interface Video {
  id: string;
  url: string;
  thumbnail: string;
}

const videos: Video[] = [
  {
    id: 'drive-1',
    url: 'https://drive.google.com/file/d/1T8hRrhzjuzPMV46dDeFRPpZkhjIPH83X/preview',
    thumbnail: 'https://drive.google.com/thumbnail?authuser=0&sz=w3000&id=1T8hRrhzjuzPMV46dDeFRPpZkhjIPH83X'
  },
  {
    id: 'drive-2',
    url: 'https://drive.google.com/file/d/1i-PkmUrYWAJLfLsowEL5NMmX4DAFHq3i/preview',
    thumbnail: 'https://drive.google.com/thumbnail?authuser=0&sz=w3000&id=1i-PkmUrYWAJLfLsowEL5NMmX4DAFHq3i'
  },
  {
    id: 'drive-3',
    url: 'https://drive.google.com/file/d/1oCAF2JxwNMIaTCfG9MxHwvVgTZVkzcdP/preview',
    thumbnail: 'https://drive.google.com/thumbnail?authuser=0&sz=w3000&id=1oCAF2JxwNMIaTCfG9MxHwvVgTZVkzcdP'
  }
];

export const Work: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

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
                onClick={() => setSelectedVideo(video)}
              >
                {/* Thumbnail */}
                <img
                  src={video.thumbnail}
                  alt={`Video ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedVideo(null)}
          >
            <X size={40} />
          </button>

          <div
            className="w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src={selectedVideo.url}
              title="Portfolio Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};