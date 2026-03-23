import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, FlaskConical, TrendingUp, ArrowRight } from 'lucide-react';
import '../styles/hero.css';

const IMGS = {
  brand:    '/image/COREX 공식 브랜드 로고 및 슬로건 (Core Technology. Infinite Expansion.).png',
  smartfarm: '/image/스마트팜(식물공장) 재배실 및 방진복 착용 작업 전경.png',
  multiwell: '/image/인큐베이터 앞 세포 배양용 멀티웰 플레이트(Multi-well plate) 확인 작업.png',
  lab:      '/image/첨단 분석배양 장비가 세팅된 코렉스(COREX) 메인 연구실 전경.png',
  rnd:      '/image/코렉스(COREX) 대형 R&D 센터 및 양산 공장 건물 외관.png',
  cleanroom: '/image/클린룸 내부 파일럿플랜트 스케일 대형 스테인리스 성분 추출 설비(반응조).png',
};

export default function Home() {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 600], [0, 200]);
  const opacityHeroText = useTransform(scrollY, [0, 400], [1, 0]);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  return (
    <div className="home-container bg-ultra-dark">
      {/* Premium Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-background">
          <video className="hero-video" autoPlay muted loop playsInline>
            <source src="/background.mp4" type="video/mp4" />
          </video>
          {/* Subtle vignette/gradient overlay instead of particle dots */}
          <div className="hero-gradient-overlay"></div>
        </div>

        <motion.div 
          className="hero-content"
          style={{ y: yHero, opacity: opacityHeroText }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="premium-badge">Precision Agriculture & Bio-Materials</span>
          </motion.div>
          <motion.h1 
            className="hero-brand-premium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            COREX
          </motion.h1>
          <motion.p 
            className="hero-slogan-premium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            From Farm to <span className="highlight-glow">Bio-Material</span>
          </motion.p>
          <motion.div 
            className="hero-cta-group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/technology" className="premium-btn primary-glow">
              Explore Technology <ArrowRight size={18} className="btn-icon" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Bento Grid Layout */}
      <section className="bento-section">
        <motion.div 
          className="bento-container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUp} className="bento-header">
            <h2 className="premium-heading">Smart Farm to<br/>Bio-Material</h2>
            <p className="premium-subtext">COREX controls the full pipeline — from AI-driven crop cultivation to GMP-level extraction of active compounds for pharmaceutical, cosmetic, and food industry supply.</p>
          </motion.div>

          <div className="bento-grid">
            {/* Main Big Card */}
            <motion.div variants={fadeUp} className="bento-card bento-large group">
              <div className="bento-img-wrap">
                <img src={IMGS.smartfarm} alt="Smart Farm Automation" />
                <div className="bento-overlay"></div>
              </div>
              <div className="bento-content">
                <div className="bento-icon-wrapper"><Leaf size={24} /></div>
                <h3>Smart Farm Precision</h3>
                <p>Fully controlled plant factories utilizing advanced AI algorithms to maximize key compound yields year-round.</p>
              </div>
            </motion.div>

            {/* Top Right Card */}
            <motion.div variants={fadeUp} className="bento-card group">
              <div className="bento-img-wrap">
                <img src={IMGS.lab} alt="Advanced Lab" />
                <div className="bento-overlay"></div>
              </div>
              <div className="bento-content">
                <div className="bento-icon-wrapper"><FlaskConical size={24} /></div>
                <h3>Advanced R&D Facility</h3>
                <p>High-purity extraction to isolate Madecassoside and Ginsenosides.</p>
              </div>
            </motion.div>

            {/* Bottom Right Card */}
            <motion.div variants={fadeUp} className="bento-card group">
              <div className="bento-img-wrap">
                <img src={IMGS.multiwell} alt="Cell Culture" />
                <div className="bento-overlay"></div>
              </div>
              <div className="bento-content">
                <div className="bento-icon-wrapper"><TrendingUp size={24} /></div>
                <h3>Data Platform</h3>
                <p>Growth data collected across every cultivation cycle, feeding AI models that improve compound yield over time.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Narrative Section - Overlap Brutalism / Cinematic */}
      <section className="cinematic-section">
        <motion.div 
          className="cinematic-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="cinematic-bg">
            <img src={IMGS.rnd} alt="R&D Center" />
            <div className="cinematic-gradient"></div>
          </div>
          <div className="cinematic-content">
            <h2>The Infinite Expansion of<br/><span className="text-gradient-cyan">Core Technology</span></h2>
            <Link to="/about" className="premium-btn ghost-glow mt-6">
              Read Our Vision
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
