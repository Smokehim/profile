import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { storage, GraphicDesign as GraphicDesignType } from '../utils/storage';

export function GraphicDesign() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [designs, setDesigns] = useState<GraphicDesignType[]>([]);

  useEffect(() => {
    storage.getGraphicDesigns().then(setDesigns);
  }, []);

  if (designs.length === 0) {
    return null; // Don't show section if no designs
  }

  return (
    <section className="py-20 bg-[#0f172a]">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white mb-4">Graphic Design Gallery</h2>
          <div className="w-20 h-1 bg-[#3b82f6] mx-auto"></div>
          <p className="text-[#94a3b8] mt-4 max-w-2xl mx-auto">
            Explore my collection of posters and event cards
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <div
              key={design.id}
              className="group relative cursor-pointer overflow-hidden rounded-2xl glass-card glass-card-hover"
              onClick={() => setSelectedImage(design.image)}
            >
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[#3b82f6] text-xs font-bold uppercase tracking-widest mb-2">Design Piece</p>
                    <h3 className="text-white text-xl font-bold">{design.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#3b82f6] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  );
}