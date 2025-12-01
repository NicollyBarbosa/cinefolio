import React, { useState, useEffect } from 'react';
import { Menu, X, Film } from 'lucide-react';
import { NavItem, SectionId } from '../types';

const navItems: NavItem[] = [
  { label: 'Início', href: `#${SectionId.HERO}` },
  { label: 'Sobre', href: `#${SectionId.ABOUT}` },
  { label: 'Portfólio', href: `#${SectionId.WORK}` },
  { label: 'Contato', href: `#${SectionId.CONTACT}` },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" onClick={(e) => handleNavClick(e, `#${SectionId.HERO}`)} className="flex items-center gap-2 group">
          <Film className="w-6 h-6 text-white group-hover:text-red-600 transition-colors duration-300" />
          <span className="text-2xl font-bold tracking-widest text-white uppercase font-cinzel">
            Nicolly <span className="text-red-600">Marios</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-white hover:text-shadow-glow transition-all duration-300 text-[10px] font-medium cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 md:hidden flex flex-col items-center py-10 space-y-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-xl uppercase tracking-widest text-white font-cinzel cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};