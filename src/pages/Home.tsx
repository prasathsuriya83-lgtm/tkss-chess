import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, Play, Users, School, Map, Globe, CheckCircle2, Target, Lightbulb, HelpCircle, ChevronDown, MapPin, Trophy, Star, Award } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const stats = [
  { icon: School, label: "Schools", value: "20+" },
  { icon: Users, label: "Students", value: "1000+" },
  { icon: Map, label: "Centers", value: "5+" },
  { icon: Globe, label: "Country", value: "3+" },
];

const faqs = [
  {
    q: "What if my child has no prior exposure to chess?",
    a: "YES! It's never too late to start learning! We help to start from scratch to grow as a professional."
  },
  {
    q: "What's the right age for my child to learn chess?",
    a: "We have special coaching for 5 years to 7 years kids. Generally, 5 is a great age to start."
  },
  {
    q: "Are online chess tournaments helpful for kids?",
    a: "Yes, they provide exposure to competitive environments and help kids practice their skills against diverse opponents."
  },
  {
    q: "Is Online chess beneficial?",
    a: "Absolutely. You can learn anytime from anywhere with flexible timings and personalized assessments."
  },
  {
    q: "Is chess good for my kid?",
    a: "Chess enhances focus, attention span, and activates both sides of the brain, improving concentration and strategic thinking."
  }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-500/5 -skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 rounded-full text-sm font-bold mb-6 tracking-wide">
                ESTABLISHED 2008 • CHENNAI
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
                Taanya Kaavya <span className="text-sky-600">Chess Academy</span>
              </h1>
              <p className="text-2xl font-bold text-sky-600 mb-4 tracking-tight uppercase">
                Step up to next generation
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                Led by FIDE Certified & FIDE Rated coaches. We ignite young minds with our chess wands to spark & become one of the greatest minds of India & abroad.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-sky-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-sky-700 transition-all shadow-xl shadow-sky-600/20 flex items-center gap-2"
                >
                  Register Now <ChevronRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center gap-2"
                >
                  Book Free Demo
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=1000"
                  alt="Chess Training"
                  className="w-full h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4">
                <div className="bg-sky-100 p-3 rounded-full">
                  <Award className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">FIDE Certified</p>
                  <p className="text-xs text-slate-500">Rated Professional Trainers</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sky-600 font-bold text-sm tracking-widest uppercase mb-4">Key Highlights</h2>
            <h3 className="text-4xl font-bold text-slate-900">Professional Excellence in Chess</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-sky-200 transition-all group">
              <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform">
                <Star className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">FIDE Rated Coaches</h4>
              <p className="text-slate-600 leading-relaxed">
                Learn from the best. Our coaches are FIDE rated and certified professionals with years of competitive experience.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-sky-200 transition-all group">
              <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform">
                <Trophy className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Tournament Preparation</h4>
              <p className="text-slate-600 leading-relaxed">
                We don't just teach moves; we prepare students for real-world competitive success in state and national levels.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-sky-200 transition-all group">
              <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Professional Training</h4>
              <p className="text-slate-600 leading-relaxed">
                Structured curriculum following modern teaching patterns to enhance focus, attention span, and strategic thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sky-600 font-bold text-sm tracking-widest uppercase mb-4">Welcome to TKSS</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Igniting young minds with <span className="text-sky-600">Chess Excellence</span>
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Smart and traditional method of teaching with personalized lesson plan & teaching pattern. 
                We help to start from scratch to grow as a professional.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-1" />
                  <span className="font-bold text-slate-700">FIDE Arbiter Led</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-1" />
                  <span className="font-bold text-slate-700">Personalized Plans</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-1" />
                  <span className="font-bold text-slate-700">Tournament Ready</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-1" />
                  <span className="font-bold text-slate-700">Estd. 2008</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1523875194681-bedd468c58bf?auto=format&fit=crop&q=80&w=1000"
                alt="Chess Teaching"
                className="rounded-[3rem] shadow-2xl border-8 border-white"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-slate-50 hover:bg-sky-50 transition-colors group"
              >
                <div className="inline-flex p-4 bg-white rounded-xl shadow-sm text-sky-600 mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                <p className="text-slate-500 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why TKSS Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-sky-500/10 skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Why TKSS Chess?</h2>
              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p>
                  Mastering the 64 squares is a long term process but we have Fide Certified trainers 
                  who have trained handpicked coaches who follow the LCD method of teaching.
                </p>
                <p>
                  Where the coach will understand the child's psychology and alter the training method accordingly, 
                  patterning the syllabus and impart them to the child, in their own pace to improve the child's 
                  concentration and to activate their both the sides of the brain.
                </p>
                <blockquote className="border-l-4 border-sky-500 pl-6 py-2 italic text-xl text-white">
                  "Chess is everything: Art, Science and Sport"
                  <footer className="text-sm mt-2 text-sky-500">— Anatoly Karpov</footer>
                </blockquote>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=80&w=1000"
                alt="Chess Strategy"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-6 -right-6 bg-sky-500 p-8 rounded-2xl shadow-xl">
                <p className="text-4xl font-bold text-white">15+</p>
                <p className="text-sm font-bold text-white/80">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex p-3 bg-sky-100 rounded-2xl text-sky-600 mb-6">
              <HelpCircle className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-900">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="px-8 pb-6 text-slate-600 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
