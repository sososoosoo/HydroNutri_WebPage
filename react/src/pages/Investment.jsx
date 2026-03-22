import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, ShieldCheck, ChevronRight } from 'lucide-react';
import SubPageHero from '../components/SubPageHero';
import '../styles/about.css'; // Utilizing premium classes

const investmentSubNav = [
  { label: 'Investment', path: '/investment' },
  { label: 'Insights', path: '/insights' },
];

const fundingStages = [
  {
    stage: 'Seed Round',
    year: '2024',
    status: 'Completed',
    investors: 'Tech Angel & Government Grants',
    amount: 'Undisclosed',
    desc: 'Initial capital secured to build the Yonsei University R&D center and fund preliminary Smart Farm AI models.',
    icon: <Award className="text-emerald-400" size={24} />,
    colorClass: 'emerald'
  },
  {
    stage: 'Pre-A Round',
    year: '2025 (Ongoing)',
    status: 'Active',
    investors: 'VC & Strategic Partners',
    amount: 'Targeting $2M',
    desc: 'Funding to scale our precision extraction facilities and accelerate commercialization of Madecassoside capabilities.',
    icon: <TrendingUp className="text-cyan-400" size={24} />,
    colorClass: 'cyan'
  },
  {
    stage: 'Series A',
    year: '2026',
    status: 'Upcoming',
    investors: 'Global Bio-funds',
    amount: 'TBD',
    desc: 'Massive scale-up of GMP manufacturing plants to meet global B2B demand for high-purity medical-grade bio-materials.',
    icon: <ShieldCheck className="text-indigo-400" size={24} />,
    colorClass: 'indigo'
  }
];

const highlights = [
  { label: 'Market TAM', value: '$200B+', desc: 'Global Bio-materials Market by 2030' },
  { label: 'Yield Increase', value: '400%', desc: 'compared to traditional farming' },
  { label: 'Purity Level', value: '99.9%', desc: 'GMP-certified extraction limits' },
  { label: 'Cost Reduct.', value: '-45%', desc: 'via AI-driven supply standardization' }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Investment() {
  return (
    <div className="bg-ultra-dark min-h-screen pb-20">
      <SubPageHero
        category="investment"
        title="Investment"
        currentPage="Investment"
        breadcrumbParent={{ label: 'Investment', path: '/investment' }}
        subNavItems={investmentSubNav}
      />

      {/* Hero Statement */}
      <section className="premium-section pt-24 pb-16">
        <motion.div className="max-w-4xl mx-auto px-6 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.span variants={fadeUp} className="premium-badge mb-6">Invest in the Future</motion.span>
          <motion.h2 variants={fadeUp} className="premium-heading mb-6">
            Redefining the <br/><span className="highlight-glow">Bio-Economy</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="premium-subtext">
            Join COREX as we disrupt the volatile natural ingredient supply chain with AI-powered, highly scalable precision agriculture and clinical-grade extraction.
          </motion.p>
        </motion.div>
      </section>

      {/* Investment Highlights Grid */}
      <section className="premium-section pb-16">
        <motion.div className="max-w-6xl mx-auto px-6" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {highlights.map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="glass p-8 rounded-3xl text-center flex flex-col justify-center border-t border-slate-700/50 hover:border-cyan-500/30 transition-colors duration-500">
                   <div className="text-3xl lg:text-4xl font-extrabold text-white mb-2 tracking-tighter drop-shadow-lg">{item.value}</div>
                   <div className="text-cyan-400 font-semibold uppercase tracking-widest text-xs mb-2">{item.label}</div>
                   <div className="text-slate-400 text-sm">{item.desc}</div>
                </motion.div>
             ))}
          </div>
        </motion.div>
      </section>

      {/* Funding Roadmap */}
      <section className="premium-section py-16">
        <motion.div className="max-w-5xl mx-auto px-6" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white mb-10 text-center">Funding Trajectory</motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {fundingStages.map((stage, i) => (
              <motion.div key={i} variants={fadeUp} className={`glass p-8 rounded-3xl relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]`}>
                <div className={`absolute top-0 left-0 w-full h-1 bg-${stage.colorClass}-500/50`}></div>
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-${stage.colorClass}-500/10 flex items-center justify-center border border-${stage.colorClass}-500/20`}>
                    {stage.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-slate-800 border border-slate-700 text-slate-300">
                    {stage.status}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{stage.stage}</h3>
                <div className="text-cyan-400 font-mono text-sm mb-6">{stage.year}</div>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-widest mb-1">Investors</div>
                    <div className="text-slate-300 text-sm font-medium">{stage.investors}</div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-widest mb-1">Scale</div>
                    <div className="text-white text-lg font-bold">{stage.amount}</div>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed border-t border-slate-800/80 pt-6">
                  {stage.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </section>

      {/* Contact Prompt */}
      <section className="premium-section py-16">
         <motion.div className="max-w-3xl mx-auto px-6 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }}>
           <motion.div variants={fadeUp} className="glass p-12 rounded-3xl border border-cyan-500/20 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 to-transparent"></div>
             <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Interested in Partnering?</h2>
             <p className="text-slate-400 mb-8 relative z-10">We are open to engaging with forward-thinking VCs and strategic partners who share our vision for the bio-economy.</p>
             <button className="relative z-10 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-colors duration-300 flex items-center gap-2 mx-auto">
               Contact Investor Relations <ChevronRight size={18} />
             </button>
           </motion.div>
         </motion.div>
      </section>
    </div>
  );
}
