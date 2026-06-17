import { motion } from 'motion/react';
import AboutSection from '@/src/components/AboutSection';
import Testimonials from '@/src/components/Testimonials';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <div className="bg-muted/30 py-12 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 md:mb-6">About Our Boutique</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            A legacy of elegance, quality tailoring, and the finest women's fashion in Ulhasnagar.
            Our reputation is built on trust, unparalleled craftsmanship, and a passionate dedication
            to making every client look and feel absolutely stunning on their most important days.
          </p>
        </div>
      </div>

      <AboutSection />

      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            <div className="text-center p-6 md:p-8 bg-background rounded-3xl shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                <span className="text-2xl font-bold">25+</span>
              </div>
              <h4 className="text-xl font-bold mb-4">Years of Experience</h4>
              <p className="text-muted-foreground">Serving thousands of happy customers with premium tailoring since 2000.</p>
            </div>
            <div className="text-center p-8 bg-background rounded-3xl shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                <span className="text-2xl font-bold">5k+</span>
              </div>
              <h4 className="text-xl font-bold mb-4">Designs Created</h4>
              <p className="text-muted-foreground">From traditional sarees to modern gowns, we've crafted it all.</p>
            </div>
            <div className="text-center p-8 bg-background rounded-3xl shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                <span className="text-2xl font-bold">100%</span>
              </div>
              <h4 className="text-xl font-bold mb-4">Customer Satisfaction</h4>
              <p className="text-muted-foreground">Our commitment to quality and fitting is what keeps our clients coming back.</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </motion.div>
  );
}
