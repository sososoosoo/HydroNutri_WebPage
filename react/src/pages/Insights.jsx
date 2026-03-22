import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SubPageHero from '../components/SubPageHero';
import '../styles/about.css';

const insightsSubNav = [];

const insightsData = [
  {
    image: '/assets/news1.jpg',
    category: 'Press Release',
    title: 'COREX officially launches as a Smart Farm-based bio-materials startup.',
    summary: 'Fusing AI precision agriculture with bio-extraction technology, COREX has officially launched to develop core ingredients for the medical, pharmaceutical, and cosmetic sectors.',
    date: 'Oct 14, 2024',
    link: '#',
    author: 'COREX PR'
  },
  {
    image: '/assets/blog-default.jpg',
    category: 'Tech Insights',
    title: 'From Smart Farm to Bio Material: The COREX Tech Pipeline Explained',
    summary: 'A deep dive into how our ML models and precision farming techniques work together to maximize yield and purity levels.',
    author: 'COREX R&D Team',
    date: 'Mar 10, 2025',
    link: '#',
  },
  {
    image: '/assets/news2.jpg',
    category: 'Partnership',
    title: 'Yonsei Incubation Center entry: Functional crop research begins in earnest.',
    summary: 'Moving into the Yonsei University Incubation Center to commence precision cultivation research on functional crops such as Centella, Bacopa, and Special Ginseng.',
    date: 'Nov 02, 2024',
    link: '#',
    author: 'COREX PR'
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Insights() {
  return (
    <div className="bg-ultra-dark min-h-screen pb-20">
      <SubPageHero
        category="insights"
        title="Insights"
        currentPage="Insights"
        breadcrumbParent={null}
        subNavItems={insightsSubNav}
      />

      <section className="premium-section pt-24 pb-16">
        <motion.div className="max-w-4xl mx-auto px-6 text-center" initial="hidden" animate="visible" variants={fadeUp}>
           <h2 className="premium-heading mb-6">Media & <span className="highlight-glow">Insights</span></h2>
           <p className="premium-subtext">Stay up to date with the latest press releases, company milestones, and technology breakthroughs from COREX.</p>
        </motion.div>
      </section>

      <section className="premium-section pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="grid md:grid-cols-3 gap-8" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
            {insightsData.map((news, i) => (
              <motion.a 
                href={news.link} 
                key={i} 
                variants={fadeUp} 
                className="glass rounded-3xl overflow-hidden group flex flex-col hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(6,182,212,0.15)]"
              >
                 <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-800 to-slate-900 border-b border-slate-800/50"></div>
                    <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-lg">
                      {news.category}
                    </div>
                 </div>
                 <div className="p-8 flex flex-col grow">
                    <div className="flex justify-between items-center mb-4 text-slate-500 text-sm font-mono">
                       <span>{news.author}</span>
                       <span>{news.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-cyan-400 transition-colors">{news.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{news.summary}</p>
                    <div className="mt-auto flex items-center gap-2 text-cyan-400 text-sm font-bold uppercase tracking-widest pt-6 border-t border-slate-800">
                       Read Article <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                 </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
