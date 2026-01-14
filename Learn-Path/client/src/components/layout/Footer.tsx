import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-bold text-white">LearnPath</h3>
            <p className="text-sm text-slate-400">
              Empowering the next generation of learners and educators with innovative tools and pathways to success.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/"><a className="hover:text-secondary">Home</a></Link></li>
              <li><Link href="/services/student"><a className="hover:text-secondary">For Students</a></Link></li>
              <li><Link href="/services/teacher"><a className="hover:text-secondary">For Teachers</a></Link></li>
              <li><Link href="/careers"><a className="hover:text-secondary">Careers</a></Link></li>
              <li><Link href="/about"><a className="hover:text-secondary">About Us</a></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span>support@learnpath.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>123 Education Lane, Tech City</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="rounded-full bg-slate-800 p-2 hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="rounded-full bg-slate-800 p-2 hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="rounded-full bg-slate-800 p-2 hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="rounded-full bg-slate-800 p-2 hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-slate-800 pt-8">
          <div className="text-center text-xs text-slate-500 mb-4">
            <p>&copy; {new Date().getFullYear()} LearnPath. All rights reserved.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-xs text-slate-400 text-center">
            <div>
              <p className="font-semibold text-white mb-2">Color Scheme</p>
              <p>Shining Orange Primary • White Secondary</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Tech Stack</p>
              <p>React • Tailwind • Framer Motion</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Features</p>
              <p>Animations • Modular Components • Responsive Design</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
