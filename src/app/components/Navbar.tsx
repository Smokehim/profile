import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/90 md:bg-[#0f172a]/80 backdrop-blur-md md:backdrop-blur-lg border-b border-white/5 shadow-2xl">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl md:text-2xl font-bold text-white hover:text-[#3b82f6] transition-all active:scale-95"
          >
            Jason Mwamba
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-[#94a3b8] hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#94a3b8] hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-[#94a3b8] hover:text-white transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#94a3b8] hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-[#94a3b8] hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-[#94a3b8] hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="block w-full text-left text-[#94a3b8] hover:text-white transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-[#94a3b8] hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
