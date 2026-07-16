import { useTranslation } from 'react-i18next';
import { notices } from '../../data/content';

export default function ShopNotice() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
    <section className="shop-container shop-section">
      <div className="shop-page-head shop-page-head-tight">
        <span className="shop-page-eyebrow">{t('notice.eyebrow')}</span>
        <h1 className="shop-page-title">{t('notice.title')}</h1>
        <p className="shop-lead">{t('notice.desc')}</p>
      </div>

      <ul className="shop-notice-list">
        {notices.map((n) => (
          <li key={n.id} className="shop-notice-item">
            <div className="shop-notice-meta">
              <span className="shop-notice-cat">{isEn ? n.categoryEn : n.category}</span>
              <span className="shop-notice-date">{n.date}</span>
            </div>
            <h2 className="shop-notice-title">{isEn ? n.titleEn : n.title}</h2>
            <p className="shop-notice-body">{isEn ? n.bodyEn : n.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
