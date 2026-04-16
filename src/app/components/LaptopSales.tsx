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
    <section className="py-20 bg-[#0f172a]">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white mb-4">Laptop Sales</h2>
          <div className="w-20 h-1 bg-[#3b82f6] mx-auto"></div>
          <p className="text-[#94a3b8] mt-4 max-w-2xl mx-auto">
            Quality laptops for work, gaming, and everyday use
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedLaptops.map((laptop) => (
            <div
              key={laptop.id}
              className="bg-[#1e293b] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all"
            >
              <div className="relative h-64 bg-[#0f172a] flex items-center justify-center">
                <ImageWithFallback
                  src={laptop.image}
                  alt={laptop.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-[#3b82f6] text-sm mb-2">{laptop.brand}</p>
                <h3 className="text-white text-xl mb-3">{laptop.name}</h3>
                <ul className="space-y-2 mb-4">
                  {laptop.specs.map((spec, index) => (
                    <li key={index} className="text-[#94a3b8] text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full"></div>
                      {spec}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-[#334155]">
                  <span className="text-white text-2xl">{laptop.price}</span>
                  <button
                    onClick={() => handleContact(laptop.name)}
                    className="px-4 py-2 bg-[#3b82f6] text-white rounded-lg hover:bg-[#2563eb] transition-colors flex items-center gap-2"
                  >
                    <MessageCircle size={18} />
                    Contact to Buy
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
