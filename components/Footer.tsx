import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <p className="text-zinc-600 text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Nicolly Marios. Todos os direitos reservados.
        </p>
        <p className="text-zinc-800 text-[10px] mt-2">
          Filmmaker & Social Media Strategist
        </p>
      </div>
    </footer>
  );
};