import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import ContactForm from '@/src/components/ContactForm';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <div className="bg-muted/10 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-10">
            Visit our boutique or get in touch with us for custom tailoring and fashion consultations.
          </p>
          
          <div className="max-w-3xl mx-auto py-8">
            <h3 className="italic text-xl md:text-2xl lg:text-3xl font-heading text-primary/80 leading-relaxed relative">
              "Elegance is not about being noticed, it's about being remembered. Let us craft the perfect style for your unforgettable moments."
            </h3>
          </div>
        </div>
      </div>

      <ContactForm />

      {/* Embedded Google Maps Section */}
      <section className="py-24 bg-background border-t border-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 flex items-center justify-center gap-3">
              <MapPin className="w-8 h-8 text-primary" /> Locate Our Boutique
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Shop No. 02, Babasai Nagar, Opposite Punejas Group Tuitions,<br className="hidden md:block" />
              Baba Radheshyam Marg, Bhatia Chowk, Ulhasnagar-4, Maharashtra 421004
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h-[500px] md:h-[600px] w-full max-w-6xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-white"
          >
            <iframe
              src="https://maps.google.com/maps?q=Shop%20No.%2002,%20Babasai%20Nagar,%20Opposite%20Punejas%20Group%20Tuitions,%20Baba%20Radheshyam%20Marg,%20Bhatia%20Chowk,%20Ulhasnagar-4,%20Maharashtra%20421004&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pushp Ladies Wear Location"
            />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
