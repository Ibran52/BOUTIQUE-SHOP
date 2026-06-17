import Hero from '@/src/components/Hero';
import Gallery from '@/src/components/Gallery';
import AboutSection from '@/src/components/AboutSection';
import Testimonials from '@/src/components/Testimonials';
import ContactForm from '@/src/components/ContactForm';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />

      {/* Featured Categories */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Categories</span>
            <h2 className="text-3xl md:text-6xl font-heading font-bold mb-4 md:mb-6">Featured Collections</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              { name: 'Bridal Wear', image: 'https://nazranaanj.com/cdn/shop/products/0E42DE97-F71B-4B68-87AB-C5F56AF0108A.jpg?v=1639877879', link: '/collection' },
              { name: 'Designer Sarees', image: 'https://cdn.sareeka.com/image/cache/data2020/embroidered-blue-designer-saree-167224-1000x1375.jpg', link: '/collection' },
              { name: 'Modern Gowns', image: 'https://static3.azafashions.com/uploads/product_gallery/1702477922202_1.jpg', link: '/collection' }
            ].map((cat, i) => (
              <Link key={cat.name} to={cat.link} className="group relative h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={cat.image}
                  alt={cat.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-heading text-white font-bold mb-2 md:mb-4">{cat.name}</h3>
                  <Button className="w-fit rounded-full bg-primary text-primary-foreground hover:bg-white hover:text-black shadow-lg px-6">
                    Explore Now
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
      <Gallery />
      <Testimonials />
      <ContactForm />
    </motion.div>
  );
}
