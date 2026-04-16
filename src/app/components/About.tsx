import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import { storage, Profile } from '../utils/storage';

export function About() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    storage.getProfile().then(setProfile);
  }, []);

  if (!profile) return null;


  return (
    <section id="about" className="py-24 bg-[#0f172a] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#3b82f6]/5 rounded-full blur-[100px]"></div>
      <div className="max-w-[1440px] mx-auto px-20 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl text-white mb-4 font-bold">About Me</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 md:order-1 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#3b82f6] to-[#60a5fa] rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative p-2 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={profile.aboutImage}
                alt="Workspace"
                className="w-full h-[500px] object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-8 order-1 md:order-2">
            <div className="space-y-6">
              <p className="text-white text-2xl font-light leading-relaxed">
                I'm a passionate <span className="text-[#3b82f6] font-semibold">Full-Stack Developer</span> with expertise in building modern, 
                scalable web applications.
              </p>
              
              <p className="text-[#94a3b8] text-lg leading-relaxed">
                My tech stack includes <span className="text-white font-medium">Next.js and Node.js</span>, 
                which I use to create seamless user experiences and robust backend systems. Beyond coding, I'm a creative graphic designer specializing in high-impact visual communications.
              </p>

              <p className="text-[#94a3b8] text-lg leading-relaxed">
                I also run a successful <span className="text-white font-medium">phone sales business</span>, helping customers find the perfect quality smartphone that fits their lifestyle and budget.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                { title: 'Web Development', desc: 'Next.js, React, Node.js, MySQL', icon: 'Code' },
                { title: 'Graphic Design', desc: 'Figma, Photoshop, Creative Branding', icon: 'Palette' },
                { title: 'Phone Sales', desc: 'Premium Smartphone Retail & Support', icon: 'Smartphone' }
              ].map((item, i) => (
                <div key={i} className="glass-card p-5 rounded-2xl flex items-center gap-5 group/item">
                  <div className="w-12 h-12 bg-[#3b82f6]/10 rounded-xl flex items-center justify-center text-[#3b82f6] group-hover/item:bg-[#3b82f6] group-hover/item:text-white transition-all duration-300">
                    <div className="w-2 h-2 bg-current rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{item.title}</h4>
                    <p className="text-[#94a3b8] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}