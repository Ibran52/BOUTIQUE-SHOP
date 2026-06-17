import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search } from 'lucide-react';
import { DRESSES, CATEGORIES } from '@/src/constants';
import DressCard from './DressCard';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDresses = useMemo(() => {
    return DRESSES.filter((dress) => {
      const matchesCategory = activeCategory === 'All' || dress.category === activeCategory;
      const matchesSearch = dress.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dress.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Our Collection</span>
          <h2 className="text-3xl md:text-6xl font-heading font-bold mb-6">Exquisite Designs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Browse through our curated collection of traditional and modern women's wear.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
          <Tabs defaultValue="All" className="w-full md:w-auto overflow-x-auto" onValueChange={setActiveCategory}>
            <TabsList className="bg-transparent p-0 h-auto flex-wrap justify-center gap-3">
              {CATEGORIES.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="rounded-full px-5 py-2 border border-border bg-card text-[11px] font-semibold uppercase tracking-[0.5em] data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:border-primary transition-all cursor-pointer text-muted-foreground"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search designs..."
              className="pl-10 rounded-full bg-muted/30 border-none focus-visible:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredDresses.map((dress) => (
              <DressCard key={dress.id} dress={dress} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredDresses.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-xl">No designs found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}
