import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../styles/about.css';

const cropsMeta = [
  {
    name: 'Centella Asiatica',
    korean: '병풀',
    compound: 'Madecassoside · Asiaticoside',
    compoundKo: '마데카소사이드 · 아시아티코사이드',
    descKey: 'crop1Desc',
    indKeys: ['crop1Ind1', 'crop1Ind2', 'crop1Ind3'],
    accentColor: 'border-emerald-500/40',
    tagColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  },
  {
    name: 'Bacopa monnieri',
    korean: '바코파',
    compound: 'Bacoside A & B',
    compoundKo: '바코사이드 A & B',
    descKey: 'crop2Desc',
    indKeys: ['crop2Ind1', 'crop2Ind2'],
    accentColor: 'border-cyan-500/40',
    tagColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  },
  {
    name: 'Panax Ginseng',
    korean: '인삼',
    compound: 'Ginsenoside · Saponin',
    compoundKo: '진세노사이드 · 사포닌',
    descKey: 'crop3Desc',
    indKeys: ['crop3Ind1', 'crop3Ind2', 'crop3Ind3'],
    accentColor: 'border-amber-500/40',
    tagColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  },
  {
    name: 'Dendrobium',
    korean: '덴드로비움',
    compound: 'Polysaccharides · Flavonoids',
    compoundKo: '폴리사카라이드 · 플라보노이드',
    descKey: 'crop4Desc',
    indKeys: ['crop4Ind1'],
    accentColor: 'border-purple-500/40',
    tagColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  },
  {
    name: 'Lemna (Duckweed)',
    korean: '워터렌틸 (개구리밥)',
    compound: 'Plant Protein · Omega-3',
    compoundKo: '식물성 단백질 · 오메가-3',
    descKey: 'crop5Desc',
    indKeys: ['crop5Ind1', 'crop5Ind2'],
    accentColor: 'border-teal-500/40',
    tagColor: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
  },
  {
    name: 'Stevia',
    korean: '스테비아',
    compound: 'Stevioside · Rebaudioside A',
    compoundKo: '스테비오사이드 · 레바우디오사이드 A',
    descKey: 'crop6Desc',
    indKeys: ['crop6Ind1', 'crop6Ind2'],
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
  const { t } = useTranslation();

  return (
    <div className="bg-ultra-dark min-h-screen pb-20">

      <section className="premium-section pt-44 pb-16">
        <motion.div className="max-w-4xl mx-auto px-6 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.span variants={fadeUp} className="premium-badge mb-6">{t('roadmap.badge')}</motion.span>
          <motion.h2 variants={fadeUp} className="premium-heading mb-6">
            {t('roadmap.heading')}
          </motion.h2>
          <motion.p variants={fadeUp} className="premium-subtext">
            {t('roadmap.desc1')}
            {' '}{t('roadmap.desc2')}
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
          {cropsMeta.map((crop, i) => (
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
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">{t('roadmap.keyCompound')}</p>
                <p className="text-white font-semibold">{crop.compound}</p>
                <p className="text-slate-500 text-sm mt-0.5">{crop.compoundKo}</p>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">{t(`roadmap.${crop.descKey}`)}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {crop.indKeys.map((indKey, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 rounded-full text-xs font-medium border bg-white/5 text-slate-300 border-white/10"
                  >
                    {t(`roadmap.${indKey}`)}
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
