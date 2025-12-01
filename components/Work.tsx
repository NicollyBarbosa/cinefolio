import React, { useState } from 'react';
import { SectionId } from '../types';
import { Play } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

interface Video {
  id: string;
  url: string;
  thumbnail: string;
}

const videos: Video[] = [
  {
    id: '8Bn9P4pNXlo',
    url: 'https://www.youtube.com/embed/8Bn9P4pNXlo?autoplay=1&vq=hd1080',
    thumbnail: 'https://img.youtube.com/vi/8Bn9P4pNXlo/maxresdefault.jpg'
  },
  {
    id: 'rFrXtW0MUwg',
    url: 'https://www.youtube.com/embed/rFrXtW0MUwg?autoplay=1&vq=hd1080',
    thumbnail: 'https://img.youtube.com/vi/rFrXtW0MUwg/maxresdefault.jpg'
  },
  {
    id: 'j9ZE5GED-dg',
    url: 'https://www.youtube.com/embed/j9ZE5GED-dg?autoplay=1&vq=hd1080',
    thumbnail: 'https://img.youtube.com/vi/j9ZE5GED-dg/maxresdefault.jpg'
  }
];

export const Work: React.FC = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handlePlay = (videoId: string) => {
    setPlayingVideo(videoId);
  };

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
              <div className="relative aspect-video bg-zinc-900 overflow-hidden group">
                {playingVideo !== video.id ? (
                  <div
                    className="absolute inset-0 cursor-pointer"
                    onClick={() => handlePlay(video.id)}
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
                ) : (
                  <iframe
                    className="w-full h-full"
                    src={video.url}
                    title={`YouTube video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};