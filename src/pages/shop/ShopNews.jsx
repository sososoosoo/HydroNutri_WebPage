import { useTranslation } from 'react-i18next';
import { newsItems } from '../../data/content';

export default function ShopNews() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
    <section className="shop-container shop-section">
      <div className="shop-page-head shop-page-head-tight">
        <span className="shop-page-eyebrow">{t('news.eyebrow')}</span>
        <h1 className="shop-page-title">{t('news.title')}</h1>
        <p className="shop-lead">{t('news.desc')}</p>
      </div>

      <div className="shop-news-grid">
        {newsItems.map((n) => (
          <a
            key={n.id}
            href={n.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shop-news-card"
          >
            <div className="shop-news-meta">
              <span className="shop-news-source">{isEn ? n.sourceEn : n.source}</span>
              <span className="shop-news-date">{n.date}</span>
            </div>
            <h2 className="shop-news-title">{isEn ? n.titleEn : n.title}</h2>
            <p className="shop-news-summary">{isEn ? n.summaryEn : n.summary}</p>
            <span className="shop-news-more">{t('news.readMore')}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
