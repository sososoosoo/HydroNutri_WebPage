import { motion } from 'framer-motion';
import { MapPin, Mail, Linkedin, Twitter, Instagram } from 'lucide-react';
import '../styles/about.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Contact() {
  return (
    <div className="bg-ultra-dark min-h-screen pb-20">

      <section className="premium-section pt-44 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial="hidden" animate="visible" variants={fadeUp}>
             <h2 className="premium-heading mb-6">Get in touch</h2>
             <p className="premium-subtext max-w-2xl mx-auto">Whether you are looking to secure high-purity raw materials, explore joint R&D, or invest in our vision, our team is ready to connect.</p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-8" variants={stagger} initial="hidden" animate="visible">
             {/* Headquarters Panel */}
             <motion.div variants={fadeUp} className="glass p-10 rounded-3xl border-t border-slate-700/50 hover:border-cyan-500/30 transition-colors group flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-8 group-hover:bg-cyan-500/20 transition-colors">
                   <MapPin className="text-cyan-400" size={24} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Headquarters</h4>
                <p className="text-slate-400 leading-relaxed text-lg">
                  33-7, Jongjari-ro, Dongsan-myeon,<br/>
                  Chuncheon-si, Gangwon-do, KR
                </p>
             </motion.div>

             {/* Email Panel */}
             <motion.div variants={fadeUp} className="glass p-10 rounded-3xl border-t border-slate-700/50 hover:border-cyan-500/30 transition-colors group flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-8 group-hover:bg-blue-500/20 transition-colors">
                   <Mail className="text-blue-400" size={24} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Email inquiries</h4>
                <a href="mailto:22qjsro@corexbiotech.com" className="text-cyan-400 text-lg hover:text-cyan-300 transition-colors font-mono mb-8 block">
                  22qjsro@corexbiotech.com
                </a>
                
                {/* Social Links */}
                <div className="flex gap-4 mt-auto pt-8 border-t border-slate-800">
                   <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white border-slate-800 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all"><Linkedin size={20} /></a>
                   <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white border-slate-800 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all"><Twitter size={20} /></a>
                   <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white border-slate-800 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all"><Instagram size={20} /></a>
                </div>
             </motion.div>
          </motion.div>

          {/* Native Map Embed Section */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-20 max-w-5xl mx-auto rounded-3xl overflow-hidden glass shadow-2xl p-4">
             <iframe
               key="native-google-map-clean"
               src="https://maps.google.com/maps?q=%EA%B0%95%EC%9B%90%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84+%EC%B6%98%EC%B2%9C%EC%8B%9C+%EB%8F%99%EC%82%B0%EB%A9%B4+%EC%A2%85%EC%9E%90%EB%A6%AC%EB%A1%9C+33-7&t=&z=15&ie=UTF8&iwloc=&output=embed"
               style={{ width: '100%', height: '750px' }}
               className="rounded-2xl border-0"
               allowFullScreen=""
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
               title="COREX Location"
             />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
