import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { newsItems } from '../data/content';
import '../styles/about.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function News() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const [failedImages, setFailedImages] = useState(() => new Set());
  const markFailed = (id) => setFailedImages((prev) => new Set(prev).add(id));

  return (
    <div className="bg-ultra-dark min-h-screen pb-20">

      <section className="premium-section pt-44 pb-16">
        <motion.div className="max-w-4xl mx-auto px-6 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.span variants={fadeUp} className="premium-badge mb-6">{t('news.eyebrow')}</motion.span>
          <motion.h2 variants={fadeUp} className="premium-heading mb-6">{t('news.title')}</motion.h2>
          <motion.p variants={fadeUp} className="premium-subtext">{t('news.desc')}</motion.p>
        </motion.div>
      </section>

      <section className="premium-section pb-20">
        <motion.div
          className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {newsItems.map((n) => {
            const hasImage = Boolean(n.image) && !failedImages.has(n.id);

            return (
              <motion.a
                key={n.id}
                href={n.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                className={`glass rounded-3xl corp-news-card${hasImage ? ' has-image' : ''}`}
              >
                {hasImage && (
                  <div className="corp-news-thumb">
                    <img src={n.image} alt="" loading="lazy" onError={() => markFailed(n.id)} />
                  </div>
                )}

                <div className="corp-news-body">
                  <div className="corp-news-meta">
                    <span className="corp-news-source">{isEn ? n.sourceEn : n.source}</span>
                    <span className="corp-news-date">{n.date}</span>
                  </div>
                  <h3 className="corp-news-title">{isEn ? n.titleEn : n.title}</h3>
                  <p className="corp-news-summary">{isEn ? n.summaryEn : n.summary}</p>
                  <span className="corp-news-more">{t('news.readMore')}</span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </section>

    </div>
  );
}
