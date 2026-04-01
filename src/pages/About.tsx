import { motion } from "motion/react";
import { CheckCircle2, Trophy, Users, Star, Calendar, Target, Lightbulb, Award } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  "FIDE Rated Coaches & Certified Trainers",
  "Arbiter-led training sessions",
  "Special coaching for 5 years to 7 years kids",
  "Limited kids per batch for individual attention",
  "Personalized workouts and lesson plans",
  "LCD (Learner-centered Curriculum Design) methodology",
  "Online and offline classes available",
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-400 via-transparent to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            About TKSS Chess Academy
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Professional, kid-friendly, and elite chess training academy led by FIDE-rated coaches and an Arbiter.
          </p>
        </div>
      </section>

      {/* History & Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-700 rounded-full font-bold text-sm mb-6">
                <Calendar className="w-4 h-4" /> Established 2008
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Nurturing the Next Generation of <span className="text-sky-600">Strategic Thinkers</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Taanya Kaavya School of Sports (TKSS) Chess Academy has been a cornerstone of chess excellence in Chennai since 2008. 
                Our academy is led by FIDE-rated coaches and an Arbiter, providing a structured professional coaching environment 
                that is both kid-friendly and elite.
              </p>
              <div className="space-y-4 mb-10">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-sky-100 p-1 rounded-full">
                      <CheckCircle2 className="w-4 h-4 text-sky-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-block bg-sky-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-sky-700 transition-all shadow-xl shadow-sky-600/20"
              >
                Register Now
              </Link>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                  <Award className="w-10 h-10 text-sky-600 mb-4" />
                  <h4 className="text-2xl font-bold text-slate-900">FIDE</h4>
                  <p className="text-sm text-slate-500">Rated Coaches</p>
                </div>
                <div className="bg-sky-50 p-8 rounded-3xl border border-sky-100">
                  <Trophy className="w-10 h-10 text-sky-600 mb-4" />
                  <h4 className="text-2xl font-bold text-slate-900">15+</h4>
                  <p className="text-sm text-slate-500">Years Experience</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6 mt-12"
              >
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                  <Users className="w-10 h-10 text-sky-600 mb-4" />
                  <h4 className="text-2xl font-bold text-slate-900">1000+</h4>
                  <p className="text-sm text-slate-500">Students Trained</p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80&w=500"
                  alt="Chess Class"
                  className="rounded-3xl h-64 object-cover shadow-lg border-4 border-white"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
            >
              <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mb-8">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Inspiring and empowering people's lives through Chess thereby creating a brand to spread the love for Chess.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
            >
              <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mb-8">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To Enrich the age-old game of Chess by providing quality, affordable, and accessible chess education 
                through potential resources and thereby creating a brand that fosters delightful Chess Experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
