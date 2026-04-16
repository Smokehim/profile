import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { storage, Accessory } from '../utils/storage';

export function Accessories() {
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    storage.getAccessories().then(setAccessories);
  }, []);

  const handleContact = (accessoryName: string) => {
    const message = `Hi, I'm interested in the ${accessoryName}`;
    const whatsappUrl = `https://wa.me/260969591009?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const filteredAccessories = selectedCategory === 'all'
    ? accessories
    : accessories.filter(a => a.category === selectedCategory);

  const displayedAccessories = showAll ? filteredAccessories : filteredAccessories.slice(0, 4);

  if (accessories.length === 0) {
    return null; // Don't show section if no accessories
  }

  return (
    <section className="py-20 bg-[#0f172a]">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white mb-4">Accessories</h2>
          <div className="w-20 h-1 bg-[#3b82f6] mx-auto"></div>
          <p className="text-[#94a3b8] mt-4 max-w-2xl mx-auto">
            Essential accessories for your phones and laptops
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => {
              setSelectedCategory('all');
              setShowAll(false);
            }}
            className={`px-6 py-3 rounded-lg transition-colors ${selectedCategory === 'all'
                ? 'bg-[#3b82f6] text-white'
                : 'bg-[#1e293b] text-[#94a3b8] hover:bg-[#334155]'
              }`}
          >
            All Accessories
          </button>
          <button
            onClick={() => {
              setSelectedCategory('Phone Accessory');
              setShowAll(false);
            }}
            className={`px-6 py-3 rounded-lg transition-colors ${selectedCategory === 'Phone Accessory'
                ? 'bg-[#3b82f6] text-white'
                : 'bg-[#1e293b] text-[#94a3b8] hover:bg-[#334155]'
              }`}
          >
            Phone
          </button>
          <button
            onClick={() => {
              setSelectedCategory('Laptop Accessory');
              setShowAll(false);
            }}
            className={`px-6 py-3 rounded-lg transition-colors ${selectedCategory === 'Laptop Accessory'
                ? 'bg-[#3b82f6] text-white'
                : 'bg-[#1e293b] text-[#94a3b8] hover:bg-[#334155]'
              }`}
          >
            Laptop
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedAccessories.map((accessory) => (
            <div
              key={accessory.id}
              className="bg-[#1e293b] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all"
            >
              <div className="relative h-48 bg-[#0f172a]">
                <ImageWithFallback
                  src={accessory.image}
                  alt={accessory.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col h-full">
                <p className="text-[#3b82f6] text-xs mb-1">{accessory.category}</p>
                <h3 className="text-white mb-2 font-semibold">{accessory.name}</h3>
                <p className="text-[#94a3b8] text-sm mb-4 line-clamp-2 flex-grow">{accessory.description}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#334155]">
                  <span className="text-white text-lg font-bold">{accessory.price}</span>
                  <button
                    onClick={() => handleContact(accessory.name)}
                    className="px-3 py-2 bg-[#3b82f6] text-white rounded-lg hover:bg-[#2563eb] transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    <MessageCircle size={16} />
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAccessories.length > 4 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-4 bg-[#1e293b] text-white rounded-lg hover:bg-[#334155] border border-[#334155] transition-colors"
            >
              {showAll ? 'Show Less' : 'View All Accessories'}
            </button>
          </div>
        )}

        {filteredAccessories.length === 0 && (
          <div className="text-center py-12 text-[#94a3b8]">
            No accessories found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
