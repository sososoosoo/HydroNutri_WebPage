import { motion } from 'framer-motion';
import '../styles/about.css';

const crops = [
  {
    name: 'Centella Asiatica',
    korean: '병풀',
    compound: 'Madecassoside · Asiaticoside',
    compoundKo: '마데카소사이드 · 아시아티코사이드',
    description: 'One of the most clinically validated wound-healing compounds in modern dermatology. Centella-derived madecassoside accelerates collagen synthesis and reduces inflammation, making it a core ingredient in medical-grade skin repair formulations.',
    industries: ['Medical Devices', 'Cosmeceuticals', 'Pharmaceuticals'],
    accentColor: 'border-emerald-500/40',
    tagColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  },
  {
    name: 'Bacopa monnieri',
    korean: '바코파',
    compound: 'Bacoside A & B',
    compoundKo: '바코사이드 A & B',
    description: 'A nootropic herb with a substantial body of clinical research supporting its role in synaptic communication and neuroprotection. Bacoside extracts are increasingly in demand as cognitive health and brain longevity supplements expand globally.',
    industries: ['Pharmaceuticals', 'Health Functional Foods'],
    accentColor: 'border-cyan-500/40',
    tagColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  },
  {
    name: 'Panax Ginseng',
    korean: '인삼',
    compound: 'Ginsenoside · Saponin',
    compoundKo: '진세노사이드 · 사포닌',
    description: 'Ginseng saponins are among the most studied phytochemicals in East Asian medicine, with broad evidence across immune modulation, anti-fatigue, and adaptogenic applications. Precision cultivation allows consistent ginsenoside profiles unavailable in field-grown root.',
    industries: ['Pharmaceuticals', 'Health Functional Foods', 'Cosmeceuticals'],
    accentColor: 'border-amber-500/40',
    tagColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  },
  {
    name: 'Dendrobium',
    korean: '덴드로비움',
    compound: 'Polysaccharides · Flavonoids',
    compoundKo: '폴리사카라이드 · 플라보노이드',
    description: 'Dendrobium polysaccharides are valued in high-end cosmetics for their whitening and anti-aging activity. Controlled cultivation of this orchid genus — difficult to source at scale in the wild — is a key differentiator in premium cosmeceutical ingredient supply.',
    industries: ['Cosmeceuticals'],
    accentColor: 'border-purple-500/40',
    tagColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  },
  {
    name: 'Lemna (Duckweed)',
    korean: '워터렌틸 (개구리밥)',
    compound: 'Plant Protein · Omega-3',
    compoundKo: '식물성 단백질 · 오메가-3',
    description: 'Lemna is one of the fastest-growing aquatic plants on earth, capable of doubling its biomass in under 48 hours. Its protein density rivals soybean at a fraction of the land footprint, positioning it as a leading candidate for next-generation vegan food ingredients.',
    industries: ['Food Tech', 'Health Functional Foods'],
    accentColor: 'border-teal-500/40',
    tagColor: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
  },
  {
    name: 'Stevia',
    korean: '스테비아',
    compound: 'Stevioside · Rebaudioside A',
    compoundKo: '스테비오사이드 · 레바우디오사이드 A',
    description: 'Rebaudioside A from Stevia is 200–350x sweeter than sucrose with zero glycemic impact, and has secured regulatory approval across major markets. Smart farm cultivation enables year-round stable supply with controlled glycoside ratios unachievable in open-field production.',
    industries: ['Food Tech', 'Beverages'],
    accentColor: 'border-lime-500/40',
    tagColor: 'bg-lime-500/10 text-lime-400 border-lime-500/20',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Roadmap() {
  return (
    <div className="bg-ultra-dark min-h-screen pb-20">

      <section className="premium-section pt-44 pb-16">
        <motion.div className="max-w-4xl mx-auto px-6 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.span variants={fadeUp} className="premium-badge mb-6">Crop Portfolio</motion.span>
          <motion.h2 variants={fadeUp} className="premium-heading mb-6">
            What We Grow & Extract
          </motion.h2>
          <motion.p variants={fadeUp} className="premium-subtext">
            Each crop is selected for its commercially validated active compounds.
            Grown under AI-controlled conditions to maximize ingredient consistency and purity.
          </motion.p>
        </motion.div>
      </section>

      <section className="premium-section py-8">
        <motion.div
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {crops.map((crop, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`glass p-10 rounded-3xl border-l-4 ${crop.accentColor} flex flex-col gap-6`}
            >
              <div>
                <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-1">{crop.korean}</p>
                <h3 className="text-2xl font-bold text-white">{crop.name}</h3>
              </div>

              <div className="border-t border-slate-800 pt-6">
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Key Compound</p>
                <p className="text-white font-semibold">{crop.compound}</p>
                <p className="text-slate-500 text-sm mt-0.5">{crop.compoundKo}</p>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">{crop.description}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {crop.industries.map((ind, j) => (
                  <span
                    key={j}
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${crop.tagColor}`}
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
}
