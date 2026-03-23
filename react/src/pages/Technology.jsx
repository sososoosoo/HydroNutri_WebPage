import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import '../styles/about.css';

const coreTech = [
  {
    index: '01',
    title: 'AI Precision Agriculture',
    subtitle: 'Smart Farm',
    desc: 'AI algorithms automatically learn and control optimal growth conditions for each crop, maximizing functional ingredient content.',
    tags: ['Growth Data Analytics', 'Auto-Learning', 'Environment Control', 'Ingredient Optimization'],
    gradient: 'from-emerald-500/20 to-green-500/5',
    border: 'group-hover:border-emerald-500/40',
    textGradient: 'text-emerald-500/30',
  },
  {
    index: '02',
    title: 'Bio Extraction & Refining',
    subtitle: 'Bio Extraction',
    desc: 'Utilizing industrial extraction and concentration equipment to isolate and refine high-purity functional ingredients from natural products.',
    tags: ['Extraction & Concentration', 'Ingredient Analysis', 'GMP Process', 'Quality Control'],
    gradient: 'from-cyan-500/20 to-blue-500/5',
    border: 'group-hover:border-cyan-500/40',
    textGradient: 'text-cyan-500/30',
  },
  {
    index: '03',
    title: 'Data Platform',
    subtitle: 'Data Platform',
    desc: 'Continuously improving production quality and yield by collecting and analyzing data across the entire process from cultivation to extraction.',
    tags: ['Real-time Monitoring', 'Data Pipeline', 'Quality Tracking', 'Predictive Models'],
    gradient: 'from-indigo-500/20 to-purple-500/5',
    border: 'group-hover:border-indigo-500/40',
    textGradient: 'text-indigo-500/30',
  },
];

const systemLayers = [
  { title: 'AI / Analytics Layer', items: ['Growth Prediction Logic', 'Yield Optimization', 'Anomaly Detection'], color: 'from-cyan-500' },
  { title: 'IoT / Control Layer', items: ['Sensor Networks', 'Automated HVAC', 'Data Harvesting'], color: 'from-indigo-500' },
];

// All UI images in carousel order
const uiImages = [
  { title: "Master Dashboard (G-Index)", img: "/image/G-Index UI.png" },
  { title: "Metabolite Tracking", img: "/image/성분 데이터 UI.png" },
  { title: "Synthesis Efficiency", img: "/image/합성 효율 UI.png" },
  { title: "Predictive Analytics", img: "/image/성분 예측 UI.png" },
  { title: "Harvest Yield Estimator", img: "/image/예상 수확 UI.png" },
  { title: "Plant Stress Control", img: "/image/스트레스 UI.png" },
  { title: "Optimization Index", img: "/image/성분 최적화 지수 UI.png" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function Technology() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const goPrev = useCallback(() => setCarouselIndex(i => (i - 1 + uiImages.length) % uiImages.length), []);
  const goNext = useCallback(() => setCarouselIndex(i => (i + 1) % uiImages.length), []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goPrev, goNext]);

  // Preload all images on mount so switching is instant
  useEffect(() => {
    uiImages.forEach(({ img }) => {
      const image = new Image();
      image.src = img;
    });
  }, []);

  return (
    <div className="bg-ultra-dark min-h-screen pb-20">

      {/* Hero Statement */}
      <section className="premium-section pt-44 pb-16">
         <motion.div className="max-w-4xl mx-auto px-6 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span variants={fadeUp} className="premium-badge mb-6">Our Technology</motion.span>
            <motion.h2 variants={fadeUp} className="premium-heading mb-8 text-4xl md:text-5xl">
              From Seed to <span className="highlight-glow">Extract</span>.<br/>Every Step, Controlled.
            </motion.h2>
            <motion.p variants={fadeUp} className="premium-subtext">
              Three integrated systems — precision farming, bio-extraction, and data — built to work as one pipeline from cultivation to B2B supply.
            </motion.p>
         </motion.div>
      </section>

      {/* Core Technologies Bento */}
      <section className="premium-section py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="grid md:grid-cols-3 gap-8" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
            {coreTech.map((tech, i) => (
              <motion.div key={i} variants={fadeUp} className={`glass p-10 rounded-3xl relative overflow-hidden group transition-all duration-500 ${tech.border}`}>
                <div className={`absolute inset-0 bg-gradient-to-b ${tech.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                       <div className="w-1.5 h-6 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                       <span className={`text-xs font-medium tracking-wide ${tech.textGradient.replace('/30', '')}`}>{tech.subtitle}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{tech.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">{tech.desc}</p>
                  
                  <div className="mt-auto flex flex-wrap gap-2">
                    {tech.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-xs text-slate-300 backdrop-blur-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="premium-section py-16">
        <motion.div className="max-w-5xl mx-auto px-6" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white mb-10 text-center">System Architecture</motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {systemLayers.map((layer, i) => (
              <motion.div key={i} variants={fadeUp} className="glass-dark p-10 rounded-3xl text-center border-t border-slate-700/50 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
                  <h3 className="text-2xl font-bold text-white mb-6 relative z-10">
                   <div className={`w-12 h-1 bg-gradient-to-r ${layer.color} to-transparent mb-6 rounded-full`} />
                   {layer.title}
                 </h3>
                 <ul className="space-y-4 relative z-10">
                   {layer.items.map((item, j) => (
                     <li key={j} className="flex items-center gap-4 text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                        <span>{item}</span>
                     </li>
                   ))}
                 </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Farm OS Carousel */}
      <section className="relative premium-section py-24 overflow-hidden bg-[#02050a]">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="premium-heading text-4xl md:text-6xl mb-6 tracking-tighter">
              Proprietary <span className="highlight-glow">Farm OS</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="premium-subtext max-w-3xl mx-auto text-lg">
              Real-time visualization and precise control of secondary metabolite synthesis.
              Fully custom-built interfaces that ensure 100% data ownership.
            </motion.p>
          </motion.div>

          {/* Carousel */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            {/* Window chrome */}
            <div className="bg-slate-800/90 px-5 py-4 flex items-center gap-3 border border-b-0 border-slate-700/80 backdrop-blur-md" style={{ borderRadius: '1.5rem 1.5rem 0 0' }}>
              <div className="w-3.5 h-3.5 rounded-full bg-rose-500 border border-rose-600 shadow-sm"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-amber-500 border border-amber-600 shadow-sm"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 border border-emerald-600 shadow-sm"></div>
            </div>

            {/* Image + Side Arrows — overflow-hidden clips image to radius; arrows use inline zIndex to stay above animated image */}
            <div className="relative border border-slate-700/80 overflow-hidden bg-[#02050a]" style={{ borderRadius: '0 0 1.5rem 1.5rem' }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={carouselIndex}
                  src={uiImages[carouselIndex]?.img}
                  alt={uiImages[carouselIndex]?.title}
                  className="w-full h-auto block select-none"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  style={{ position: 'relative', zIndex: 1 }}
                />
              </AnimatePresence>

              {/* Left Arrow — dark slate bg + cyan icon, always visible on any image */}
              <button
                onClick={goPrev}
                aria-label="Previous"
                style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', zIndex: 30, background: 'rgba(255,255,255,0.92)', border: '1px solid rgba(0,0,0,0.1)' }}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 shadow-2xl"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(0,0,0)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              {/* Right Arrow — dark slate bg + cyan icon, always visible on any image */}
              <button
                onClick={goNext}
                aria-label="Next"
                style={{ position: 'absolute', right: '1.25rem', top: '50%', transform: 'translateY(-50%)', zIndex: 30, background: 'rgba(255,255,255,0.92)', border: '1px solid rgba(0,0,0,0.1)' }}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 shadow-2xl"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(0,0,0)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {uiImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCarouselIndex(i)}
                  style={{ width: i === carouselIndex ? '1.5rem' : '0.5rem' }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === carouselIndex ? 'bg-cyan-400' : 'bg-slate-600 hover:bg-slate-400'
                  }`}
                  aria-label={uiImages[i].title}
                />
              ))}
            </div>

          </motion.div>
        </div>
      </section>

      {/* IP & R&D Strategy */}
      <section className="premium-section py-16">
        <motion.div className="max-w-4xl mx-auto px-6" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white mb-10 text-center">IP &amp; R&amp;D Strategy</motion.h2>
          <motion.div variants={fadeUp} className="glass p-8 md:p-12 rounded-3xl group hover:border-cyan-500/30 transition-colors duration-500">
             <div className="flex flex-col md:flex-row items-center gap-8">
               <div className="text-cyan-500/20 text-7xl md:text-8xl font-light font-mono italic tracking-tighter shrink-0 group-hover:text-cyan-400/50 transition-colors duration-500">IP</div>
               <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Building a Proprietary Foundation</h3>
                  <p className="text-slate-400 leading-relaxed">
                    The AI growth algorithms and extraction process protocols developed at COREX are being systematically documented and filed for IP protection through Korea's IP Stepping Stone program. Proprietary data and process ownership is a core part of how we build long-term B2B supply reliability.
                  </p>
               </div>
             </div>
          </motion.div>
        </motion.div>
      </section>


    </div>
  );
}
