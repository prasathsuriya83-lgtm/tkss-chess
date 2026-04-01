import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, Globe } from "lucide-react";

const centers = [
  {
    name: "Mogappair Center (Main)",
    address: "No. 12, 1st Floor, 2nd Main Road, Mogappair East, Chennai - 600037",
    contact: "+91 98403 12345",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.488846327447!2d80.1843!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52640000000001%3A0x0!2zMTPCsDA0JzU3LjciTiA4MMKwMTEnMDMuNSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
  },
  {
    name: "Anna Nagar Center",
    address: "Plot No. 45, 3rd Avenue, Anna Nagar, Chennai - 600040",
    contact: "+91 98403 67890",
    map: ""
  },
  {
    name: "Ambattur Center",
    address: "No. 7, Railway Station Road, Ambattur, Chennai - 600053",
    contact: "+91 98403 54321",
    map: ""
  }
];

const contacts = [
  {
    name: "Mr. Senthil Kumar",
    role: "Founder & Head Coach",
    phone: "+91 98403 12345",
    email: "senthil@tksschess.com"
  },
  {
    name: "Mrs. Kavya S",
    role: "Academy Manager",
    phone: "+91 98403 67890",
    email: "kavya@tksschess.com"
  }
];

export default function Contact() {
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
            Contact Us
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Have questions? We're here to help you start your chess journey.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
              <div className="space-y-8 mb-12">
                {contacts.map((contact, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{contact.name}</h4>
                    <p className="text-sky-600 font-medium mb-4">{contact.role}</p>
                    <div className="space-y-2">
                      <a href={`tel:${contact.phone}`} className="flex items-center gap-3 text-slate-600 hover:text-sky-600 transition-colors">
                        <Phone className="w-4 h-4" /> {contact.phone}
                      </a>
                      <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-slate-600 hover:text-sky-600 transition-colors">
                        <Mail className="w-4 h-4" /> {contact.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href="https://wa.me/919840312345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-all shadow-lg shadow-green-600/20"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp Us
                </a>
                <button className="flex-1 bg-sky-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-sky-700 transition-all shadow-lg shadow-sky-600/20">
                  <Globe className="w-5 h-5" /> Book Demo
                </button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-10 rounded-[2.5rem] text-white shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-8">Leave a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Student Name</label>
                    <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Parent Name</label>
                    <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Program Interested In</label>
                  <select className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors">
                    <option>Beginner Program</option>
                    <option>Intermediate Program</option>
                    <option>Advanced Program</option>
                    <option>Online Classes</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors"></textarea>
                </div>
                <button className="w-full bg-sky-600 text-white py-4 rounded-xl font-bold hover:bg-sky-700 transition-all shadow-lg shadow-sky-600/20 flex items-center justify-center gap-2">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Centers & Map */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Centers</h2>
            <p className="text-slate-600">Visit us at any of our professional chess training centers in Chennai.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {centers.map((center, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100"
              >
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600 mb-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{center.name}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{center.address}</p>
                <div className="flex items-center gap-2 text-sky-600 font-bold text-sm">
                  <Phone className="w-4 h-4" /> {center.contact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
