import { motion } from 'framer-motion';
import '../styles/about.css';

const applications = [
  { index: '01', title: 'Medical Devices', desc: 'Hydrogels, stent coatings, bio-inks, and implant materials.' },
  { index: '02', title: 'Pharmaceuticals', desc: 'Cognitive enhancers, immune boosters, and custom API.' },
  { index: '03', title: 'Cosmeceuticals', desc: 'Whitening, anti-aging, and skin regeneration core ingredients.' },
  { index: '04', title: 'Food Tech', desc: 'Plant-based proteins and natural sweeteners for vegan foods.' },
];

const timelineData = [
  {
    date: '2025.H2',
    title: 'Smart Farm System Advancement',
    description: 'Built precision cultivation systems for functional crops and developed AI-driven growth algorithms for active compound optimization.',
  },
  {
    date: '2025.H1',
    title: 'Business Pivot & Incorporation',
    description: 'Transitioned from aquaponics food production to a smart farm-based bio-material development company. COREX officially incorporated.',
  },
  {
    date: '2024.H2',
    title: 'Core Team Formation & Research Start',
    description: 'Incubated at Yonsei University. Founding team assembled and functional crop cultivation research initiated.',
  },
];

const teamData = [
  {
    name: '유동규',
    role: 'CEO & Founder',
    tagline: 'Designing the intersection of technology and market.',
    description: 'Designs the overall business roadmap from smart farm cultivation to bio-extraction, providing strategic leadership and guiding R&D direction.',
    iconText: 'CEO',
    gradientClass: 'from-cyan-500/20 to-blue-500/5',
    borderClass: 'group-hover:border-cyan-500/40',
  },
  {
    name: '김수찬',
    role: 'CTO',
    tagline: 'Architecting algorithms and data systems.',
    description: 'Builds the server infrastructure for collecting growth data and develops core algorithms maximizing crop productivity.',
    iconText: 'CTO',
    gradientClass: 'from-indigo-500/20 to-purple-500/5',
    borderClass: 'group-hover:border-indigo-500/40',
  },
  {
    name: '주혜우',
    role: 'CSO',
    tagline: 'Leading strategic funding and business planning.',
    description: 'Executes funding strategies including government grants and private investments, while dedicated to IR and business planning.',
    iconText: 'CSO',
    gradientClass: 'from-emerald-500/20 to-teal-500/5',
    borderClass: 'group-hover:border-emerald-500/40',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function About() {
  return (
    <div className="bg-ultra-dark min-h-screen pb-20 overflow-hidden">

      {/* Vision & Mission */}
      <section className="premium-section text-center pt-44 pb-16">
        <motion.div className="max-w-4xl mx-auto px-6" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="premium-badge mb-6">Our Vision</span>
          <h2 className="premium-heading mb-8">
            Rooted in smart farming,<br/>
            shaping the future of <span className="highlight-glow">Bio-Materials</span>.
          </h2>
          <p className="premium-subtext">
            COREX fuses AI precision agriculture with advanced bio-extraction technology
            to develop the core ingredients for the medical, pharmaceutical, cosmetic, and food industries.
          </p>
        </motion.div>
      </section>

      {/* The Pipeline */}
      <section className="bento-section pt-10">
        <motion.div className="bento-container" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <div className="bento-grid" style={{ gridTemplateRows: 'auto' }}>
            <motion.div variants={fadeUp} className="bento-card p-10 flex flex-col justify-between relative overflow-hidden group min-h-[400px]">
              <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-[#030712]/40 z-10"></div>
                <img src="/image/스마트팜(식물공장) 재배실 및 방진복 착용 작업 전경.png" alt="Smart Farm" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>
              <div className="relative z-20 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-white text-3xl font-bold mb-4 drop-shadow-lg">Smart Farm</h3>
                  <p className="text-slate-200 drop-shadow-md text-lg leading-relaxed">AI-driven precision cultivation of functional crops including Centella, Bacopa, and Dendrobium.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bento-card p-10 flex flex-col justify-between relative overflow-hidden group min-h-[400px]">
              <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-[#030712]/40 z-10"></div>
                <img src="/image/클린룸 내부 파일럿플랜트 스케일 대형 스테인리스 성분 추출 설비(반응조).png" alt="Bio Extract" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>
              <div className="relative z-20 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-white text-3xl font-bold mb-4 drop-shadow-lg">Bio Extract</h3>
                  <p className="text-slate-200 drop-shadow-md text-lg leading-relaxed">GMP-level industrial extraction and concentration to isolate Madecassoside and Ginsenoside.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bento-card p-10 flex flex-col justify-between relative overflow-hidden group min-h-[400px]">
              <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-[#030712]/40 z-10"></div>
                <img src="/image/첨단 분석배양 장비가 세팅된 코렉스(COREX) 메인 연구실 전경.png" alt="B2B Supply" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>
              <div className="relative z-20 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-white text-3xl font-bold mb-4 drop-shadow-lg">B2B Supply</h3>
                  <p className="text-slate-200 drop-shadow-md text-lg leading-relaxed">Delivering core raw materials reliably to global medical, cosmetic, and food tech companies.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Application Areas */}
      <section className="premium-section py-20">
        <motion.div className="max-w-6xl mx-auto px-6" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div variants={fadeUp} className="text-center mb-16">
             <h2 className="premium-heading text-3xl md:text-5xl">Where Our Materials Go</h2>
             <p className="premium-subtext mt-4">The active compounds we extract are used as core raw materials across four industries.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applications.map((app, i) => (
              <motion.div key={i} variants={fadeUp} className="glass p-8 rounded-3xl hover:border-cyan-500/30 transition-colors duration-500 group">
                <h3 className="text-white text-xl font-bold mb-3">{app.title}</h3>
                <p className="text-slate-400">{app.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Us / Solution */}
      <section className="premium-section py-20 bg-[#060b17]/50 rounded-[4rem] mx-4 md:mx-10 my-10 border border-slate-800">
        <motion.div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
           <motion.div variants={fadeUp}>
             <h2 className="premium-heading text-4xl mb-6">The COREX Solution</h2>
             <p className="premium-subtext mb-8 text-left">The industry struggles with inconsistent natural raw materials and high reliance on imports. We address this from the ground up.</p>
             <ul className="space-y-6">
               <li className="flex items-start gap-4">
                 <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                 <div>
                   <strong className="text-white block mb-1">Precision Smart Farming</strong>
                   <span className="text-slate-400">AI-driven maximization of active compound yields, free from seasonal constraints.</span>
                 </div>
               </li>
               <li className="flex items-start gap-4">
                 <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                 <div>
                   <strong className="text-white block mb-1">Industrial Scale Extraction</strong>
                   <span className="text-slate-400">GMP-level high purity refining ensuring consistent B2B supply.</span>
                 </div>
               </li>
             </ul>
           </motion.div>
           <motion.div variants={fadeUp} className="relative h-[500px] rounded-3xl overflow-hidden glass border border-slate-700/50 group">
             <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-transparent z-10 pointer-events-none"></div>
             {/* Beautiful macro shot representing the core solution */}
             <img src="/image/회사전경.jpg" alt="COREX Solution" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" />
             
             {/* Glowing technological accent lines */}
             <div className="absolute bottom-10 left-10 z-20 flex gap-4">
                <div className="w-2 h-16 bg-cyan-500 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>
                <div className="w-2 h-10 bg-indigo-500 rounded-full mt-auto shadow-[0_0_15px_rgba(99,102,241,0.8)]"></div>
             </div>
           </motion.div>
        </motion.div>
      </section>

      {/* History Timeline */}
      <section className="premium-section pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span variants={fadeUp} className="premium-badge mb-6">Our Journey</motion.span>
            <motion.h2 variants={fadeUp} className="premium-heading mb-6">How We Got Here</motion.h2>
            <motion.p variants={fadeUp} className="premium-subtext">From a university lab to a smart farm-based bio-material company — the steps that built COREX.</motion.p>
          </motion.div>

          <div className="relative border-l border-slate-800 ml-4 md:ml-12 mt-12 space-y-16 py-8">
            {timelineData.map((item, i) => (
              <motion.div 
                key={i} 
                className="relative pl-10 md:pl-16 group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* Timeline Node */}
                <div className="absolute -left-3 w-6 h-6 rounded-full flex items-center justify-center border-4 border-[#030712] bg-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.5)] z-10">
                </div>

                <div className="glass p-8 rounded-3xl group-hover:border-cyan-500/30 transition-colors">
                  <div className="inline-block px-4 py-1 rounded-full bg-slate-800/50 text-cyan-400 text-sm font-mono mb-4 border border-slate-700">
                    {item.date}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="premium-section pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span variants={fadeUp} className="premium-badge mb-6">Leadership</motion.span>
            <motion.h2 variants={fadeUp} className="premium-heading mb-6">The Founding Team</motion.h2>
            <motion.p variants={fadeUp} className="premium-subtext">Three people. Smart farm engineering, AI & data systems, and business development — all under one roof from day one.</motion.p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
            {teamData.map((member, i) => (
              <motion.div key={i} variants={fadeUp} className={`glass p-10 rounded-3xl relative overflow-hidden group transition-all duration-500 ${member.borderClass}`}>
                <div className={`absolute inset-0 bg-gradient-to-b ${member.gradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center mb-8 shadow-xl">
                    <span className="text-xl font-bold text-slate-300 tracking-widest">{member.iconText}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-6 uppercase tracking-wider text-sm">{member.role}</p>
                  <p className="text-slate-200 font-semibold mb-4 leading-relaxed">{member.tagline}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mt-auto border-t border-slate-800/80 pt-6">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Organization Chart Bento */}
      <section className="premium-section pb-24">
         <motion.div className="max-w-5xl mx-auto px-6" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="glass border-slate-800 rounded-[2.5rem] p-12 text-center relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors duration-700"></div>
               <div className="w-16 h-2 bg-gradient-to-r from-cyan-500 to-transparent rounded-full mx-auto mb-8 opacity-50"></div>
               <h3 className="text-3xl font-bold text-white mb-4">How We Work</h3>
               <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
                 COREX runs lean. Smart farm engineering, AI data systems, and bio-process chemistry sit in the same room. Decisions move fast, and every layer of the pipeline — from cultivation data to extraction yield — is owned internally.
               </p>
            </motion.div>
         </motion.div>
      </section>

    </div>
  );
}
