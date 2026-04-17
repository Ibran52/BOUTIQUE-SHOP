import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DRESSES } from '@/src/constants';
import DressCard from '@/src/components/DressCard';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Favorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  const loadFavorites = () => {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(favs);
  };

  useEffect(() => {
    loadFavorites();
    window.addEventListener('favorites-updated', loadFavorites);
    return () => window.removeEventListener('favorites-updated', loadFavorites);
  }, []);

  const favoriteDresses = DRESSES.filter((dress) => favorites.includes(dress.id));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen"
    >
      <div className="bg-muted/30 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">My Favorites</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Your curated list of designs you love.
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4">
          {favoriteDresses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <AnimatePresence mode="popLayout">
                {favoriteDresses.map((dress) => (
                  <DressCard key={dress.id} dress={dress} />
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-32">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-8">
                <Heart className="w-12 h-12 text-muted-foreground" />
              </div>
              <h2 className="text-3xl font-heading font-bold mb-4">No favorites yet</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Browse our collection and click the heart icon to save your favorite designs here.
              </p>
              <Link to="/collection">
                <Button size="lg" className="rounded-full px-8">
                  Browse Collection
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
