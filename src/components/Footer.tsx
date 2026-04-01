import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, ChevronRight, Trophy } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
              <div className="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <span>TKSS CHESS</span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Step up to next generation. Professional chess training academy in Chennai, nurturing strategic minds since 2008.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {["About", "Programs", "Tournaments", "Achievements", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Training */}
          <div>
            <h4 className="text-lg font-bold mb-8">Training</h4>
            <ul className="space-y-4 text-slate-400">
              <li>Online Classes</li>
              <li>Offline Centers</li>
              <li>Tournament Prep</li>
              <li>School Programs</li>
              <li>FIDE Rated Coaching</li>
              <li>Free Demo Sessions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-slate-400">
                <MapPin className="w-6 h-6 text-sky-500 shrink-0" />
                <span>Mogappair East, Chennai - 600037</span>
              </li>
              <li className="flex items-center gap-4 text-slate-400">
                <Phone className="w-6 h-6 text-sky-500 shrink-0" />
                <span>+91 98403 12345</span>
              </li>
              <li className="flex items-center gap-4 text-slate-400">
                <Mail className="w-6 h-6 text-sky-500 shrink-0" />
                <span>info@tksschess.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Taanya Kaavya School of Sports. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
