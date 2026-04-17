import { motion } from 'motion/react';
import Gallery from '@/src/components/Gallery';

export default function Collection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <div className="bg-muted/30 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Our Collection</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our wide range of traditional and contemporary designs, handcrafted for perfection.
          </p>
        </div>
      </div>
      <Gallery />
    </motion.div>
  );
}
