import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="rounded-xl border border-gray-200 bg-white/30 backdrop-blur-sm shadow-lg p-2">
                  <img
                    src="https://rukminim2.flixcart.com/image/480/640/xif0q/kids-ethnic-set/k/6/d/4-5-years-kids-kurti-set-hasibul-mk-laskar-fashion-original-imahfndfrzxzchdq.jpeg?q=90"
                    alt="Elegant Dress"
                    referrerPolicy="no-referrer"
                    className="rounded-xl w-full aspect-[3/4] object-cover"
                  />
                </div>
                <div className="rounded-xl border border-gray-200 bg-white/30 backdrop-blur-sm shadow-lg p-2">
                  <img
                    src="https://wholetex.sgp1.cdn.digitaloceanspaces.com/full/heavy-faux-georgette-kids-sharara-kurti-6819.jpg"
                    alt="Fashion Wear"
                    referrerPolicy="no-referrer"
                    className="rounded-xl w-full aspect-[3/4] object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-xl border border-gray-200 bg-white/30 backdrop-blur-sm shadow-lg p-2">
                  <img
                    src="https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/FEBRUARY/5/9WDDVVl6_87abd68693884a12b3836d3fcf3dac15.jpg"
                    alt="Designer Collection"
                    referrerPolicy="no-referrer"
                    className="rounded-xl w-full aspect-[3/4] object-cover"
                  />
                </div>
                <div className="rounded-xl border border-gray-200 bg-white/30 backdrop-blur-sm shadow-lg p-2">
                  <img
                    src="https://www.fayonkids.com/cdn/shop/files/luxe-baby-pink-lucknowi-anarkali-with-boti-net-dupatta-for-girls-1227251441.webp?v=1773494647&width=713"
                    alt="Traditional Wear"
                    referrerPolicy="no-referrer"
                    className="rounded-xl w-full aspect-[3/4] object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Our Story</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-6 md:mb-8 leading-tight">
              Crafting Elegance Since <span className="text-primary italic">2000</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg mb-4 leading-relaxed">
              Raushan Boutique is more than just a boutique; it's a destination for women who appreciate fine craftsmanship and timeless style. Located in the heart of Ulhasnagar, we have been serving our community with the latest designs and impeccable tailoring for over two decades.
            </p>
            <p className="text-muted-foreground text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
              Founded on the belief that every woman deserves to feel confident and elegant in what she wears, we pour our heart into every stitch. From stunning traditional wear for festive seasons to contemporary designs for modern events, our master tailors work closely with each client to bring their unique vision to life with the finest fabrics.
            </p>

            <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
              {[
                'Customized Tailoring & Fitting',
                'Latest Designer Collection',
                'Premium Quality Fabrics',
                'Bridal & Occasion Wear Specialists',
                'Timely Delivery & Service'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-medium text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button size="lg" className="rounded-full px-8">
                Learn More About Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
