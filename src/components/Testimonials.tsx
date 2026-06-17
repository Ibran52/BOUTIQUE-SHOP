import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/src/constants';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      next();
    } else if (isRightSwipe) {
      prev();
    }
  };

  return (
    <section className="py-16 md:py-24 bg-muted/10 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Kind Words</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Client Experiences</h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              className="bg-background border border-gray-100 p-6 sm:p-10 md:p-16 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-primary/5 text-center relative"
            >
              <Quote className="w-12 h-12 md:w-20 md:h-20 text-primary/5 absolute top-6 left-6 md:top-10 md:left-10" />
              
              <div className="flex justify-center gap-1 mb-6 md:mb-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-base sm:text-xl md:text-3xl font-medium text-foreground/90 italic mb-8 md:mb-12 leading-relaxed">
                "{TESTIMONIALS[current].content}"
              </p>

              <div className="flex flex-col items-center">
                <img
                  src={TESTIMONIALS[current].avatar}
                  alt={TESTIMONIALS[current].name}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-primary/10 mb-4 shadow-lg"
                />
                <h4 className="text-lg md:text-xl font-bold text-foreground">{TESTIMONIALS[current].name}</h4>
                <p className="text-xs md:text-sm text-primary font-medium tracking-widest uppercase">{TESTIMONIALS[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 md:gap-8 mt-8 md:mt-12">
            <button
              onClick={prev}
              className="p-2 md:p-3 rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    current === i ? 'w-8 bg-primary' : 'w-2 bg-primary/20'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 md:p-3 rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-1" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-[120px] -z-1" />
    </section>
  );
}
