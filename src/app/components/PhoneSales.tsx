import { MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import { storage, Phone } from '../utils/storage';

export function PhoneSales() {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    storage.getPhones().then(setPhones);
  }, []);

  const handleContact = (phoneName: string) => {
    const message = `Hi, I'm interested in the ${phoneName}`;
    const whatsappUrl = `https://wa.me/260969591009?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const filteredPhones = selectedCategory === 'all'
    ? phones
    : phones.filter(p => p.category === selectedCategory);

  const displayedPhones = showAll ? filteredPhones : filteredPhones.slice(0, 8);

  const categories = ['all', ...new Set(phones.map(p => p.category))];

  if (phones.length === 0) {
    return null; // Don't show section if no phones
  }

  return (
    <section className="py-20 bg-[#0f172a]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white mb-4">Phone Sales</h2>
          <div className="w-20 h-1 bg-[#3b82f6] mx-auto"></div>
          <p className="text-[#94a3b8] mt-4 max-w-2xl mx-auto">
            Quality smartphones from top brands at competitive prices
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setShowAll(false); // Reset showAll when category changes
              }}
              className={`px-6 py-3 rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#3b82f6] text-white'
                  : 'bg-[#1e293b] text-[#94a3b8] hover:bg-[#334155]'
              }`}
            >
              {cat === 'all' ? 'All Phones' : cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {displayedPhones.map((phone) => (
            <div
              key={phone.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden group"
            >
              <div className="relative h-64 bg-[#0f172a]/50 flex items-center justify-center overflow-hidden">
                <ImageWithFallback
                  src={phone.image}
                  alt={phone.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#3b82f6] text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                    {phone.brand}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white text-xl mb-4 font-semibold group-hover:text-[#3b82f6] transition-colors line-clamp-1">{phone.name}</h3>
                <ul className="space-y-3 mb-6">
                  {phone.specs.map((spec, specIndex) => (
                    <li key={specIndex} className="text-[#94a3b8] text-sm flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                      {spec}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-5 border-t border-white/5 gap-4">
                  <span className="text-white text-xl font-bold flex-shrink-0">{phone.price}</span>
                  <button
                    onClick={() => handleContact(phone.name)}
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

        {filteredPhones.length > 8 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-4 bg-[#1e293b] text-white rounded-lg hover:bg-[#334155] border border-[#334155] transition-colors"
            >
              {showAll ? 'Show Less' : 'View All Phones'}
            </button>
          </div>
        )}

        {filteredPhones.length === 0 && (
          <div className="text-center py-12 text-[#94a3b8]">
            No phones found in this category.
          </div>
        )}
      </div>
    </section>
  );
}