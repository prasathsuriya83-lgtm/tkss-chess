import { motion } from "motion/react";
import { Laptop, Users, Calendar, Clock, Award, BookOpen } from "lucide-react";

const trainingTypes = [
  {
    title: "Online Training",
    icon: Laptop,
    color: "blue",
    desc: "Learn anytime from anywhere. The timings are flexible and you can get a personalized assessment.",
    features: ["Global Access", "Flexible Hours", "1-on-1 Sessions", "Digital Resources"]
  },
  {
    title: "Offline Training",
    icon: Users,
    color: "amber",
    desc: "Get to learn everything hands-on. You also get to play a practice match with your peers in TKSS Chess School.",
    features: ["Physical Interaction", "Peer Matches", "Hands-on Guidance", "Academy Environment"]
  }
];

export default function Training() {
  return (
    <div className="pt-20">
      <section className="bg-blue-900 py-24 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            Chess Training
          </motion.h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Personalized coaching programs designed for every skill level.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            {trainingTypes.map((type, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`p-12 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 ${
                  type.color === "blue" ? "bg-blue-50" : "bg-amber-50"
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${
                  type.color === "blue" ? "bg-blue-900 text-white" : "bg-amber-500 text-blue-900"
                }`}>
                  <type.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-blue-900 mb-6">{type.title}</h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">{type.desc}</p>
                <ul className="grid grid-cols-2 gap-4">
                  {type.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-bold text-blue-900">
                      <Award className={`w-4 h-4 ${type.color === "blue" ? "text-blue-600" : "text-amber-600"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 -skew-x-12 translate-x-1/4" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">Our Teaching Methodology</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-amber-500">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">LCD Method</h4>
                      <p className="text-blue-100/70">Learner-centered Curriculum Design ensures the syllabus matches the child's pace and psychology.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-amber-500">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Flexible Timings</h4>
                      <p className="text-blue-100/70">We understand busy schedules. Our online sessions are designed to fit your routine.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-amber-500">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Regular Assessments</h4>
                      <p className="text-blue-100/70">Continuous tracking of progress with personalized feedback for every student.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800"
                  alt="Chess Training"
                  className="rounded-3xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
