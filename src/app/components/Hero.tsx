import { ArrowRight, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import { storage, Profile } from '../utils/storage';

export function Hero() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    storage.getProfile().then(setProfile);
  }, []);

  if (!profile) return null;


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-[#0f172a] pt-20">
      <div className="max-w-[1440px] mx-auto px-20 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-[#3b82f6]">Hello, I'm</p>
              <h1 className="text-white text-5xl md:text-6xl">
                {profile.name}
              </h1>
              <h2 className="text-[#94a3b8] text-2xl md:text-3xl">
                {profile.role}
              </h2>
            </div>
            
            <p className="text-[#94a3b8] text-lg max-w-xl">
              {profile.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('work')}
                className="px-6 py-3 bg-[#3b82f6] text-white rounded-lg hover:bg-[#2563eb] transition-colors flex items-center gap-2"
              >
                View My Work
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-[#1e293b] text-white rounded-lg hover:bg-[#334155] transition-colors flex items-center gap-2"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-[#3b82f6] rounded-full blur-3xl opacity-20"></div>
              <ImageWithFallback
                src={profile.profileImage}
                alt={profile.name}
                className="relative w-80 h-80 rounded-full object-cover border-4 border-[#3b82f6]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}