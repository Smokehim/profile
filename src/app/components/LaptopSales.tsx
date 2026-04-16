import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { storage, Laptop } from '../utils/storage';

export function LaptopSales() {
  const [laptops, setLaptops] = useState<Laptop[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    storage.getLaptops().then(setLaptops);
  }, []);

  const handleContact = (laptopName: string) => {
    const message = `Hi, I'm interested in the ${laptopName}`;
    const whatsappUrl = `https://wa.me/260969591009?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (laptops.length === 0) {
    return null; // Don't show section if no laptops
  }

  const displayedLaptops = showAll ? laptops : laptops.slice(0, 4);

  return (
    <section id="work" className="py-20 bg-[#0f172a]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white mb-4">Laptop Sales</h2>
          <div className="w-20 h-1 bg-[#3b82f6] mx-auto"></div>
          <p className="text-[#94a3b8] mt-4 max-w-2xl mx-auto">
            Quality laptops for work, gaming, and everyday use
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {displayedLaptops.map((laptop) => (
            <div
              key={laptop.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden group"
            >
              <div className="relative h-64 bg-[#0f172a]/50 flex items-center justify-center overflow-hidden">
                <ImageWithFallback
                  src={laptop.image}
                  alt={laptop.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/10 shadow-lg">
                    {laptop.brand}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white text-xl mb-4 font-semibold group-hover:text-[#3b82f6] transition-colors line-clamp-1">{laptop.name}</h3>
                <ul className="space-y-3 mb-6">
                  {laptop.specs.map((spec, index) => (
                    <li key={index} className="text-[#94a3b8] text-sm flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                      {spec}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-5 border-t border-white/5 gap-4">
                  <span className="text-white text-xl font-bold flex-shrink-0">{laptop.price}</span>
                  <button
                    onClick={() => handleContact(laptop.name)}
                    className="px-4 py-2 bg-[#3b82f6] text-white rounded-xl hover:bg-[#2563eb] transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] flex items-center justify-center gap-2 text-sm font-semibold whitespace-nowrap active:scale-95"
                  >
                    <MessageCircle size={18} />
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {laptops.length > 4 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-4 bg-[#1e293b] text-white rounded-lg hover:bg-[#334155] border border-[#334155] transition-colors"
            >
              {showAll ? 'Show Less' : 'View All Laptops'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
