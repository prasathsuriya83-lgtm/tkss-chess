import { motion } from "motion/react";
import { BookOpen, Award, Users, Calendar, Clock, ChevronRight, Star, Zap, Target, Trophy, School } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    title: "Beginner Program",
    icon: BookOpen,
    age: "5 - 17 Years",
    level: "Novice",
    duration: "6 Months",
    focus: "Basic rules, piece movements, and simple tactics.",
    color: "sky"
  },
  {
    title: "Intermediate Program",
    icon: Zap,
    age: "7 - 17 Years",
    level: "Developing",
    duration: "12 Months",
    focus: "Opening principles, middle-game strategies, and basic endgames.",
    color: "blue"
  },
  {
    title: "Advanced Program",
    icon: Target,
    age: "10 - 17 Years",
    level: "Competitive",
    duration: "Ongoing",
    focus: "Deep tactical analysis, advanced endgames, and positional play.",
    color: "slate"
  },
  {
    title: "Tournament Training",
    icon: Trophy,
    age: "All Ages",
    level: "Rated/Aspiring",
    duration: "Intensive",
    focus: "Game analysis, clock management, and psychological preparation.",
    color: "sky"
  },
  {
    title: "School Chess Programs",
    icon: School,
    age: "K-12",
    level: "All Levels",
    duration: "Academic Year",
    focus: "Integrating chess into school curriculum for cognitive growth.",
    color: "blue"
  },
  {
    title: "Summer Camp",
    icon: Star,
    age: "5 - 15 Years",
    level: "Recreational",
    duration: "2-4 Weeks",
    focus: "Fun-filled intensive learning with daily puzzles and matches.",
    color: "slate"
  },
  {
    title: "Weekend Batches",
    icon: Calendar,
    age: "All Ages",
    level: "All Levels",
    duration: "Ongoing",
    focus: "Flexible learning for students with busy weekday schedules.",
    color: "sky"
  }
];

export default function Programs() {
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
            Our Programs
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Structured chess training for every skill level, from absolute beginners to tournament champions.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-sky-200 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform">
                  <program.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{program.title}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Users className="w-4 h-4 text-sky-500" />
                    <span>Age: {program.age}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Award className="w-4 h-4 text-sky-500" />
                    <span>Level: {program.level}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Clock className="w-4 h-4 text-sky-500" />
                    <span>Duration: {program.duration}</span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  {program.focus}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-bold text-sky-600 hover:text-sky-700 transition-colors"
                >
                  Enroll Now <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology CTA */}
      <section className="py-24 bg-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Not sure which program is right?</h2>
          <p className="text-xl text-sky-100 mb-10 max-w-2xl mx-auto">
            Book a free assessment session with our FIDE rated coaches to determine your current skill level and goals.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-sky-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-xl shadow-sky-900/20"
          >
            Book Free Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
