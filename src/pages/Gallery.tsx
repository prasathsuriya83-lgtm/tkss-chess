import { motion } from "motion/react";
import { Camera, Image as ImageIcon, Trophy, Users, Star } from "lucide-react";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800",
    title: "Tournament Hall",
    category: "Tournaments"
  },
  {
    url: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80&w=800",
    title: "Training Session",
    category: "Classes"
  },
  {
    url: "https://images.unsplash.com/photo-1560174038-da43ac74f01b?auto=format&fit=crop&q=80&w=800",
    title: "Award Ceremony",
    category: "Achievements"
  },
  {
    url: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=80&w=800",
    title: "Chess Pieces",
    category: "Art"
  },
  {
    url: "https://images.unsplash.com/photo-1544161515-4af6b1d462c2?auto=format&fit=crop&q=80&w=800",
    title: "Student Concentration",
    category: "Classes"
  },
  {
    url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    title: "Group Photo",
    category: "Events"
  }
];

const categories = ["All", "Classes", "Tournaments", "Achievements", "Events"];

export default function Gallery() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-white text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Gallery
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Capturing moments of learning, competition, and victory at TKSS Chess Academy.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  idx === 0 ? "bg-sky-600 text-white shadow-lg shadow-sky-600/20" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-3xl overflow-hidden shadow-lg aspect-[4/3]"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-sky-400 text-xs font-bold uppercase tracking-widest mb-2">{image.category}</span>
                  <h4 className="text-white text-xl font-bold">{image.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Camera className="w-12 h-12 text-sky-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Follow our journey on Social Media</h2>
          <p className="text-slate-600 mb-10 max-w-xl mx-auto">
            Stay updated with our latest events, student achievements, and daily training sessions.
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-sky-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-sky-700 transition-all shadow-lg shadow-sky-600/20">
              Instagram
            </button>
            <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20">
              Facebook
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
