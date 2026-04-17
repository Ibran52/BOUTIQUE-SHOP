import React from 'react';
import { motion } from 'motion/react';
import { Send, Phone, MapPin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Contact Us</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">Get in Touch</h2>
            <p className="text-muted-foreground text-lg mb-12">
              Have a question or want to book a tailoring appointment? Fill out the form or visit our boutique.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-bold mb-2">Our Boutique</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Shop No. 02, Babasai Nagar, Opposite Punejas Group Tuitions,<br />
                    Baba Radheshyam Marg, Bhatia Chowk, Ulhasnagar-4, Maharashtra 421004
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-bold mb-2">Phone Number</h4>
                  <p className="text-muted-foreground">+91 90113 07658</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-bold mb-2">Email Address</h4>
                  <p className="text-muted-foreground">mohamadaslamali52@gmail.com</p>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="w-full h-64 mt-8 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                <iframe
                  title="Pushp Ladies Wear Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=Shop%20No.%2002,%20Babasai%20Nagar,%20Opposite%20Punejas%20Group%20Tuitions,%20Baba%20Radheshyam%20Marg,%20Bhatia%20Chowk,%20Ulhasnagar-4,%20Maharashtra%20421004&t=&z=15&ie=UTF8&iwloc=&output=embed"
                ></iframe>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name</label>
                      <Input placeholder="John Doe" className="rounded-xl h-12 bg-muted/50 border-none" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone Number</label>
                      <Input placeholder="+91 00000 00000" className="rounded-xl h-12 bg-muted/50 border-none" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="rounded-xl h-12 bg-muted/50 border-none" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Your Message</label>
                    <Textarea placeholder="How can we help you?" className="rounded-xl min-h-[150px] bg-muted/50 border-none" required />
                  </div>
                  <Button type="submit" className="w-full h-14 rounded-xl text-lg font-bold group">
                    Send Message
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
