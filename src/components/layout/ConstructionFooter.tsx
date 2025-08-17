import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const ConstructionFooter = () => {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">C</span>
              </div>
              <span className="text-xl font-bold">CHENESAI</span>
            </div>
            <p className="text-muted-foreground">
              Delivering modern, sustainable, and innovative building solutions across Zimbabwe and beyond.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/about" className="block text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block text-muted-foreground hover:text-foreground transition-colors">
                Our Services
              </Link>
              <Link to="/portfolio" className="block text-muted-foreground hover:text-foreground transition-colors">
                Portfolio
              </Link>
              <Link to="/testimonials" className="block text-muted-foreground hover:text-foreground transition-colors">
                Testimonials
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <nav className="space-y-2">
              <Link to="/services#residential" className="block text-muted-foreground hover:text-foreground transition-colors">
                Residential Construction
              </Link>
              <Link to="/services#commercial" className="block text-muted-foreground hover:text-foreground transition-colors">
                Commercial Building
              </Link>
              <Link to="/services#renovations" className="block text-muted-foreground hover:text-foreground transition-colors">
                Renovations
              </Link>
              <Link to="/services#civil" className="block text-muted-foreground hover:text-foreground transition-colors">
                Civil Works
              </Link>
            </nav>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+263 777 123 456</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@chenesai.co.zw</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Harare, Zimbabwe</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">Newsletter</h4>
              <div className="flex space-x-2">
                <Input placeholder="Your email" className="flex-1" />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Chenesai Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default ConstructionFooter;