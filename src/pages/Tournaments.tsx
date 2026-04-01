import { motion } from "motion/react";
import { Trophy, Calendar, MapPin, Users, ChevronRight, Star, Award, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const upcomingTournaments = [
  {
    title: "TKSS Inter-Academy Chess Tournament",
    date: "April 15, 2026",
    location: "Mogappair Center, Chennai",
    participants: "Open to all students",
    status: "Registration Open",
    color: "sky"
  },
  {
    title: "Chennai State Level Rating Tournament",
    date: "May 10-12, 2026",
    location: "Jawaharlal Nehru Stadium",
    participants: "Rated Players",
    status: "Coming Soon",
    color: "blue"
  }
];

const pastTournaments = [
  {
    title: "TKSS Winter Championship 2025",
    date: "Dec 20, 2025",
    winner: "Master Arjun S.",
    image: "https://images.unsplash.com/photo-1560174038-da43ac74f01b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Inter-School Chess Fest 2025",
    date: "Nov 05, 2025",
    winner: "TKSS Team A",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Tournaments() {
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
            Tournaments
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Upcoming competitions, past results, and registration details for chess tournaments.
          </p>
        </div>
      </section>

      {/* Upcoming Tournaments */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Calendar className="w-8 h-8 text-sky-600" />
            <h2 className="text-4xl font-bold text-slate-900">Upcoming Tournaments</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingTournaments.map((tournament, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-sky-200 hover:shadow-xl transition-all group"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${
                      tournament.status === "Registration Open" ? "bg-green-100 text-green-700" : "bg-sky-100 text-sky-700"
                    }`}>
                      {tournament.status}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900">{tournament.title}</h3>
                  </div>
                  <Trophy className="w-10 h-10 text-sky-600 shrink-0" />
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-slate-600">
                    <Calendar className="w-5 h-5 text-sky-500" />
                    <span>{tournament.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <MapPin className="w-5 h-5 text-sky-500" />
                    <span>{tournament.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Users className="w-5 h-5 text-sky-500" />
                    <span>{tournament.participants}</span>
                  </div>
                </div>
                <button className="w-full bg-sky-600 text-white py-4 rounded-xl font-bold hover:bg-sky-700 transition-all shadow-lg shadow-sky-600/20 flex items-center justify-center gap-2">
                  Register Now <ExternalLink className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Tournaments */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Award className="w-8 h-8 text-sky-600" />
            <h2 className="text-4xl font-bold text-slate-900">Past Tournaments</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastTournaments.map((tournament, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={tournament.image}
                    alt={tournament.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-sm font-bold text-slate-900">
                    {tournament.date}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{tournament.title}</h3>
                  <div className="flex items-center gap-2 text-sky-600 font-bold">
                    <Star className="w-5 h-5 fill-current" />
                    <span>Winner: {tournament.winner}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Competitions CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-500/10 -skew-x-12 translate-x-1/4" />
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-8">Internal Rating Tournaments</h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                We conduct regular internal competitions to help our students gain rating points and experience 
                the pressure of tournament play in a supportive environment.
              </p>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 bg-sky-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-sky-700 transition-all shadow-xl shadow-sky-600/20"
              >
                View Event Photos <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
