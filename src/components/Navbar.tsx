import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Trophy, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Tournaments", path: "/tournaments" },
  { name: "Achievements", path: "/achievements" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/90 backdrop-blur-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-sky-500 p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-tight text-slate-800">
                TKSS CHESS
              </span>
              <span className="text-[10px] font-medium text-sky-600 tracking-widest uppercase">
                Academy
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors hover:text-sky-600 ${
                  location.pathname === link.path
                    ? "text-sky-600"
                    : "text-slate-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-3 ml-4">
              <button className="flex items-center gap-2 text-slate-600 hover:text-sky-600 font-bold text-sm transition-colors border-r border-slate-200 pr-4">
                <LogIn className="w-4 h-4" /> Student Login
              </button>
              <Link
                to="/contact"
                className="bg-sky-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-sky-700 transition-all shadow-lg shadow-sky-600/20"
              >
                Register Now
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-slate-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-3 rounded-md text-base font-bold ${
                    location.pathname === link.path
                      ? "bg-sky-50 text-sky-600"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <button className="flex items-center justify-center gap-2 w-full text-slate-700 py-3 font-bold border border-slate-200 rounded-xl">
                  <LogIn className="w-4 h-4" /> Student Login
                </button>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-sky-600 text-white px-5 py-3 rounded-xl text-base font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  Register Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
