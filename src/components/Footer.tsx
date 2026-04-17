import { Link } from 'react-router-dom';
import { Instagram, Facebook, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer className="bg-muted/30 pt-16 pb-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-heading text-lg font-bold">
                P
              </div>
              <span className="font-heading text-xl font-bold tracking-tight">
                Pushp <span className="text-primary">Ladies Wear</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Elegant styles for every woman. We specialize in custom tailoring and the latest women's fashion trends.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/collection" className="text-sm text-muted-foreground hover:text-primary transition-colors">Collection</Link></li>
              <li><Link to="/favorites" className="text-sm text-muted-foreground hover:text-primary transition-colors">My Favorites</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-6">Categories</h4>
            <ul className="space-y-4">
              <li><Link to="/collection" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sarees</Link></li>
              <li><Link to="/collection" className="text-sm text-muted-foreground hover:text-primary transition-colors">Bridal Wear</Link></li>
              <li><Link to="/collection" className="text-sm text-muted-foreground hover:text-primary transition-colors">Kurtis & Suits</Link></li>
              <li><Link to="/collection" className="text-sm text-muted-foreground hover:text-primary transition-colors">Evening Gowns</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Shop No. 02, Babasai Nagar, Ulhasnagar-4, Maharashtra 421004</span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 9011307658</span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>mohamadaslamali52@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8 opacity-5" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-muted-foreground">
          <p className="max-w-[500px] leading-relaxed">Shop No. 02, Babasai Nagar, Opposite Punejas Group Tuitions, Baba Radheshyam Marg, Bhatia Chowk, Ulhasnagar-4, MH 421004</p>
          <div className="flex gap-4">
            <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300">ig</a>
            <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300">fb</a>
            <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300">wa</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
