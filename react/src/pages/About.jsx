import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { tLines } from '../i18n/i18n';
import '../styles/about.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function About() {
  const { t } = useTranslation();

  const applications = [
    { index: '01', title: t('about.app1Title'), desc: t('about.app1Desc') },
    { index: '02', title: t('about.app2Title'), desc: t('about.app2Desc') },
    { index: '03', title: t('about.app3Title'), desc: t('about.app3Desc') },
    { index: '04', title: t('about.app4Title'), desc: t('about.app4Desc') },
  ];

  const timelineData = [
    {
      date: t('about.timeline1Date'),
      title: t('about.timeline1Title'),
      description: t('about.timeline1Desc'),
    },
    {
      date: t('about.timeline2Date'),
      title: t('about.timeline2Title'),
      description: t('about.timeline2Desc'),
    },
    {
      date: t('about.timeline3Date'),
      title: t('about.timeline3Title'),
      description: t('about.timeline3Desc'),
    },
  ];

  const teamData = [
    {
      name: '유동규',
      role: t('about.member1Role'),
      tagline: t('about.member1Tagline'),
      description: t('about.member1Desc'),
      iconText: 'CEO',
      gradientClass: 'from-cyan-500/20 to-blue-500/5',
      borderClass: 'group-hover:border-cyan-500/40',
    },
    {
      name: '김수찬',
      role: t('about.member2Role'),
      tagline: t('about.member2Tagline'),
      description: t('about.member2Desc'),
      iconText: 'CTO',
      gradientClass: 'from-indigo-500/20 to-purple-500/5',
      borderClass: 'group-hover:border-indigo-500/40',
    },
    {
      name: '주혜우',
      role: t('about.member3Role'),
      tagline: t('about.member3Tagline'),
      description: t('about.member3Desc'),
      iconText: 'CSO',
      gradientClass: 'from-emerald-500/20 to-teal-500/5',
      borderClass: 'group-hover:border-emerald-500/40',
    },
  ];

  return (
    <div className="bg-ultra-dark min-h-screen pb-20 overflow-hidden">

      {/* Vision & Mission */}
      <section className="premium-section text-center pt-44 pb-16">
        <motion.div className="max-w-4xl mx-auto px-6" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="premium-badge mb-6">{t('about.visionBadge')}</span>
          <h2 className="premium-heading mb-8 break-keep">
            {t('about.visionHeading1')}<br/>
            {t('about.visionHeading2')} <span className="highlight-glow">{t('about.visionHighlight')}</span>
            <span className="whitespace-nowrap">{t('about.visionHeadingSuffix', '')}</span>
          </h2>
          <p className="premium-subtext">
            {tLines(t('about.visionDesc'))}
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
                  <h3 className="text-white text-3xl font-bold mb-4 drop-shadow-lg">{t('about.pipelineCard1Title')}</h3>
                  <p className="text-slate-200 drop-shadow-md text-lg leading-relaxed">{t('about.pipelineCard1Desc')}</p>
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
                  <h3 className="text-white text-3xl font-bold mb-4 drop-shadow-lg">{t('about.pipelineCard2Title')}</h3>
                  <p className="text-slate-200 drop-shadow-md text-lg leading-relaxed">{t('about.pipelineCard2Desc')}</p>
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
                  <h3 className="text-white text-3xl font-bold mb-4 drop-shadow-lg">{t('about.pipelineCard3Title')}</h3>
                  <p className="text-slate-200 drop-shadow-md text-lg leading-relaxed">{t('about.pipelineCard3Desc')}</p>
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
             <h2 className="premium-heading text-3xl md:text-5xl">{t('about.appHeading')}</h2>
             <p className="premium-subtext mt-4">{t('about.appSubtext')}</p>
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
             <h2 className="premium-heading text-4xl mb-6">{t('about.solutionHeading')}</h2>
             <p className="premium-subtext mb-8 text-left">{t('about.solutionDesc')}</p>
             <ul className="space-y-6">
               <li className="flex items-start gap-4">
                 <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                  <div>
                    <strong className="text-white block mb-2 text-lg whitespace-pre-wrap">{t('about.solution1Title')}</strong>
                    <span className="text-slate-400 whitespace-pre-wrap">{tLines(t('about.solution1Desc'))}</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                  <div>
                    <strong className="text-white block mb-2 text-lg whitespace-pre-wrap">{t('about.solution2Title')}</strong>
                    <span className="text-slate-400 whitespace-pre-wrap">{tLines(t('about.solution2Desc'))}</span>
                  </div>
               </li>
             </ul>
           </motion.div>
           <motion.div variants={fadeUp} className="relative h-[500px] rounded-3xl overflow-hidden glass border border-slate-700/50 group">
             <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-transparent z-10 pointer-events-none"></div>
             <img src="/image/회사전경.jpg" alt="COREX Solution" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" />
             
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
            <motion.span variants={fadeUp} className="premium-badge mb-6">{t('about.journeyBadge')}</motion.span>
            <motion.h2 variants={fadeUp} className="premium-heading mb-6">{t('about.journeyHeading')}</motion.h2>
            <motion.p variants={fadeUp} className="premium-subtext">{t('about.journeyDesc')}</motion.p>
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
            <motion.span variants={fadeUp} className="premium-badge mb-6">{t('about.leaderBadge')}</motion.span>
            <motion.h2 variants={fadeUp} className="premium-heading mb-6">{t('about.leaderHeading')}</motion.h2>
            <motion.p variants={fadeUp} className="premium-subtext">{t('about.leaderDesc')}</motion.p>
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
               <h3 className="text-3xl font-bold text-white mb-4">{t('about.howWeWorkTitle')}</h3>
               <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
                 {t('about.howWeWorkDesc')}
               </p>
            </motion.div>
         </motion.div>
      </section>

    </div>
  );
}
