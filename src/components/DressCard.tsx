import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, ZoomIn } from 'lucide-react';
import { Dress } from '@/src/types';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface DressCardProps {
  dress: Dress;
}

const DressCard: React.FC<DressCardProps> = ({ dress }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(dress.id));
  }, [dress.id]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    let newFavorites;
    if (favorites.includes(dress.id)) {
      newFavorites = favorites.filter((id: string) => id !== dress.id);
    } else {
      newFavorites = [...favorites, dress.id];
    }
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
    window.dispatchEvent(new Event('favorites-updated'));
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      className="group relative bg-card rounded-[16px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.03)] transition-all duration-500"
    >
      <div className="aspect-[3/4] overflow-hidden relative">
        <Dialog>
          <DialogTrigger asChild>
            <div className="w-full h-full cursor-zoom-in relative">
              <img
                src={dress.image}
                alt={dress.name}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle hover overlay on desktop */}
              <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="hidden md:inline-flex items-center gap-2 text-white bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-xs font-medium scale-90 group-hover:scale-100 transition-all duration-300">
                  <ZoomIn className="w-3.5 h-3.5" /> Quick Zoom
                </span>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-3xl p-0 overflow-hidden bg-transparent border-none shadow-none">
            <img
              src={dress.image}
              alt={dress.name}
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          </DialogContent>
        </Dialog>

        {/* Floated Favorite Heart Button */}
        <button
          onClick={toggleFavorite}
          className={`absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center cursor-pointer transition-all duration-300 shadow-md border border-black/5 hover:scale-110 active:scale-95 ${
            isFavorite ? 'text-[#ff4757]' : 'text-muted-foreground hover:text-[#ff4757]'
          }`}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
      </div>

      <div className="p-3 md:p-4">
        <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-primary font-bold mb-1 block">
          {dress.category}
        </span>
        <h3 className="font-heading text-sm md:text-lg font-bold mb-1 group-hover:text-primary transition-colors line-clamp-1">
          {dress.name}
        </h3>
        <p className="text-[10px] md:text-xs text-muted-foreground line-clamp-2 leading-relaxed">
          {dress.description}
        </p>
      </div>
    </motion.div>
  );
};

export default DressCard;
