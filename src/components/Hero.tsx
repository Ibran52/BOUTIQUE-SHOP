import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    image: 'https://cdn-5.stacees.co.uk/static/2025/1/list/pc/list-prom-bj.jpg',
    title: 'Elegant Styles for Every Woman',
    subtitle: 'Discover our exclusive collection of designer sarees and bridal wear.'
  },
  {
    image: 'https://www.brides.com/thmb/10wdTjba5jic8Ld8JcWW5qwQaNg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/indian-wedding-guest-attire-recirc-Bruno-Rezza-b61675f010f54e2a8e262af42194df8d.jpg',
    title: 'Custom Tailoring at its Best',
    subtitle: 'Perfect fit, premium fabrics, and designs that reflect your personality.'
  },
  {
    image: 'https://thumbs.dreamstime.com/b/indian-beauty-face-perfect-make-up-wedding-bride-portrait-beautiful-woman-red-pink-traditional-india-bridal-costume-193451643.jpg',
    title: 'Modern Fusion Collection',
    subtitle: 'Where tradition meets contemporary fashion for the modern Indian woman.'
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const prev = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

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
    <section 
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className="relative h-screen w-full overflow-hidden"
    >
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={SLIDES[current].image}
            alt="Hero"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          key={`title-${current}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl sm:text-3xl md:text-5xl font-heading text-white font-bold mb-4 md:mb-6 max-w-4xl leading-[1.2] md:leading-[1.1]"
        >
          {SLIDES[current].title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center gap-4 md:gap-10"
        >
          <Link to="/collection">
            <Button size="lg" className="bg-foreground text-background hover:bg-primary hover:text-white rounded-full px-8 py-5 md:px-10 md:py-7 text-[10px] md:text-xs font-semibold uppercase tracking-[1.5px] transition-all duration-500">
              Explore Collection
            </Button>
          </Link>
          <div className="hidden md:block max-w-md bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10">
            <strong className="text-white block mb-2 text-lg font-heading italic">Quality Tailoring</strong>
            <p className="text-white/80 text-sm leading-relaxed">
              Expert custom fitting and modern designs for the sophisticated woman. Experience boutique tailoring at its finest.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-12 h-1 transition-all duration-500 rounded-full ${
              current === i ? 'bg-primary w-20' : 'bg-white/30'
            }`}
          />
        ))}
      </div>

      <button
        onClick={prev}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/30 items-center justify-center text-white hover:bg-white hover:text-black transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/30 items-center justify-center text-white hover:bg-white hover:text-black transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
}
