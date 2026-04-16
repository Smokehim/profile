import React from 'react';
import { Code, Palette, Smartphone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { storage, Service } from '../utils/storage';

export function Services() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    storage.getServices().then(setServices);
  }, []);

  const getIcon = (iconName: string) => {
    const icons: Record<string, React.JSX.Element> = {
      Code: <Code size={40} />,
      Palette: <Palette size={40} />,
      Smartphone: <Smartphone size={40} />,
    };
    return icons[iconName] || <Code size={40} />;
  };

  return (
    <section className="py-20 bg-[#0f172a]">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white mb-4">Services</h2>
          <div className="w-20 h-1 bg-[#3b82f6] mx-auto"></div>
          <p className="text-[#94a3b8] mt-4 max-w-2xl mx-auto">
            I offer a unique combination of technical and creative services to help bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover p-10 rounded-2xl group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-[#3b82f6]/10 transition-colors">
                <div className="scale-150 rotate-12">{getIcon(service.icon)}</div>
              </div>
              <div className="text-[#3b82f6] mb-8 group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#3b82f6]/10 rounded-2xl flex items-center justify-center">
                  {getIcon(service.icon)}
                </div>
              </div>
              <h3 className="text-white text-2xl mb-4 font-bold">{service.title}</h3>
              <p className="text-[#94a3b8] text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}