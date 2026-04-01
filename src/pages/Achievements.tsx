import { motion } from "motion/react";
import { Trophy, Award, Star, Users, CheckCircle2, Medal, TrendingUp, Target } from "lucide-react";

const achievements = [
  {
    title: "State Level Winners",
    icon: Trophy,
    count: "50+",
    desc: "Students who have secured top positions in Tamil Nadu State Level tournaments.",
    color: "sky"
  },
  {
    title: "FIDE Rated Players",
    icon: Award,
    count: "15+",
    desc: "Budding rated players who have achieved official FIDE ratings through our training.",
    color: "blue"
  },
  {
    title: "Medals & Trophies",
    icon: Medal,
    count: "500+",
    desc: "Total medals and trophies won by our students across various categories.",
    color: "slate"
  },
  {
    title: "School Champions",
    icon: Star,
    count: "100+",
    desc: "Students who have become champions in their respective school chess competitions.",
    color: "sky"
  }
];

const studentSpotlight = [
  {
    name: "Master Arjun S.",
    achievement: "State Champion (U-12)",
    rating: "1450 FIDE",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=500"
  },
  {
    name: "Miss Kavya R.",
    achievement: "District Winner (U-14)",
    rating: "1280 FIDE",
    image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80&w=500"
  }
];

export default function Achievements() {
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
            Achievements
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Celebrating the success and growth of our students in the world of competitive chess.
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-100 text-center group hover:bg-sky-50 transition-all"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-sky-600 mb-6 mx-auto shadow-sm group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-2">{item.count}</h3>
                <h4 className="text-lg font-bold text-sky-600 mb-4">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Spotlight */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sky-600 font-bold text-sm tracking-widest uppercase mb-4">Student Spotlight</h2>
            <h3 className="text-4xl font-bold text-slate-900">Our Budding Rated Players</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {studentSpotlight.map((student, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 flex flex-col md:flex-row"
              >
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="md:w-3/5 p-10 flex flex-col justify-center">
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">{student.name}</h4>
                  <p className="text-sky-600 font-bold mb-6">{student.achievement}</p>
                  <div className="flex items-center gap-3 text-slate-500 text-sm">
                    <TrendingUp className="w-5 h-5 text-sky-500" />
                    <span>Rating: {student.rating}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Building Credibility Through <span className="text-sky-600">Consistent Success</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Our students' achievements are a testament to our structured training methodology and the 
                dedication of our FIDE-rated coaches. We focus on long-term growth and competitive excellence.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-sky-100 p-2 rounded-lg text-sky-600 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">Tournament Results</h5>
                    <p className="text-sm text-slate-500">Regular podium finishes in state and district level competitions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-sky-100 p-2 rounded-lg text-sky-600 shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 mb-1">Rating Achievements</h5>
                    <p className="text-sm text-slate-500">Helping students achieve and improve their official FIDE ratings.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-slate-900 rounded-[3rem] p-12 text-center text-white">
                <Trophy className="w-20 h-20 text-sky-500 mx-auto mb-8" />
                <h3 className="text-3xl font-bold mb-4">Join the Champions</h3>
                <p className="text-slate-400 mb-10">Start your journey towards becoming a rated chess player today.</p>
                <button className="bg-sky-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-sky-700 transition-all">
                  Register Now
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
