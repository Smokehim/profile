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
    <section id="about" className="py-20 bg-[#0f172a]">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[#3b82f6] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <ImageWithFallback
              src={profile.aboutImage}
              alt="Workspace"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Text */}
          <div className="space-y-6 order-1 md:order-2">
            <p className="text-[#94a3b8] text-lg">
              I'm a passionate full-stack developer with expertise in building modern, 
              scalable web applications. My tech stack includes Next.js and Node.js, 
              which I use to create seamless user experiences and robust backend systems.
            </p>

            <p className="text-[#94a3b8] text-lg">
              Beyond coding, I'm a creative graphic designer specializing in posters 
              and event cards. I love bringing ideas to life through compelling visual 
              designs that capture attention and communicate messages effectively.
            </p>

            <p className="text-[#94a3b8] text-lg">
              I also run a phone sales business where I help customers find quality 
              smartphones that fit their needs and budget. Whether it's the latest 
              iPhone, Samsung Galaxy, or Tecno device, I've got you covered.
            </p>

            <div className="pt-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#3b82f6] rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white">Web Development</h4>
                  <p className="text-[#94a3b8]">Building with Next.js, React, Node.js, and MySQL</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#3b82f6] rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white">Graphic Design</h4>
                  <p className="text-[#94a3b8]">Creating posters and event cards with Figma & Photoshop</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#3b82f6] rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white">Phone Sales</h4>
                  <p className="text-[#94a3b8]">Selling quality smartphones - iPhone, Samsung, Tecno</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}