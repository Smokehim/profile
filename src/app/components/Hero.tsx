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
    <section id="home" className="min-h-screen flex items-center bg-[#0f172a] relative overflow-hidden">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 bg-mesh opacity-50"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3b82f6]/20 rounded-full blur-[128px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#60a5fa]/10 rounded-full blur-[128px] animate-pulse delay-700"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-10 md:py-20 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <p className="text-[#3b82f6] font-medium tracking-widest uppercase text-xs md:text-sm">Welcome to my universe</p>
              <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
                I am <span className="text-gradient leading-normal">{profile.name}</span>
              </h1>
              <h2 className="text-[#94a3b8] text-xl md:text-3xl font-light">
                {profile.role}
              </h2>
            </div>
            
            <p className="text-[#94a3b8] text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed">
              {profile.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
              <button
                onClick={() => scrollToSection('work')}
                className="w-full sm:w-auto px-8 py-4 bg-[#3b82f6] text-white rounded-lg hover:bg-[#2563eb] transition-all hover:scale-105 shadow-lg shadow-[#3b82f6]/20 flex items-center justify-center gap-2 font-semibold"
              >
                View My Work
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white rounded-lg hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center gap-2 font-semibold backdrop-blur-sm"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end order-first md:order-none">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3b82f6] to-[#60a5fa] rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative p-1.5 md:p-2 rounded-full bg-gradient-to-tr from-white/10 to-white/5 backdrop-blur-sm border border-white/10">
                <ImageWithFallback
                  src={profile.profileImage}
                  alt={profile.name}
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-[#0f172a] shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}