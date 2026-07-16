import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const principles = ['p1', 'p2', 'p3'];
const lineup = ['line1', 'line2', 'line3', 'line4'];
const metrics = ['metric1', 'metric2'];
const customers = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'];

export default function ShopBusiness() {
  const { t } = useTranslation();

  return (
    <>
      <section className="shop-container shop-section shop-page-head">
        <span className="shop-page-eyebrow">{t('business.eyebrow')}</span>
        <h1 className="shop-page-title">{t('business.title')}</h1>
        <p className="shop-lead">{t('business.lead')}</p>
      </section>

      {/* 세 단계 원리 */}
      <section className="shop-container shop-section">
        <div className="shop-section-head">
          <h2>{t('business.principleTitle')}</h2>
        </div>
        <div className="shop-principles">
          {principles.map((p, i) => (
            <div key={p} className="shop-principle-card">
              <span className="shop-principle-step">{`STEP ${i + 1}`}</span>
              <h3>{t(`business.${p}Title`)}</h3>
              <p className="shop-principle-en">{t(`business.${p}En`)}</p>
              <p>{t(`business.${p}Desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 제품 라인업 */}
      <section className="shop-container shop-section">
        <div className="shop-section-head">
          <h2>{t('business.lineupTitle')}</h2>
        </div>
        <div className="shop-lineup">
          {lineup.map((l) => (
            <div key={l} className="shop-lineup-row">
              <div className="shop-lineup-name">
                <strong>{t(`business.${l}Name`)}</strong>
                <span className="shop-lineup-status">{t(`business.${l}Status`)}</span>
              </div>
              <p>{t(`business.${l}Desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bioactive Passport */}
      <section className="shop-container shop-section">
        <div className="shop-passport">
          <span className="shop-passport-tag">Bioactive Passport</span>
          <h2>{t('business.passportTitle')}</h2>
          <p>{t('business.passportDesc')}</p>
        </div>
      </section>

      {/* 표준화 성과 */}
      <section className="shop-container shop-section">
        <div className="shop-section-head">
          <h2>{t('business.metricTitle')}</h2>
        </div>
        <div className="shop-metrics">
          {metrics.map((m) => (
            <div key={m} className="shop-metric-card">
              <strong className="shop-metric-value">{t(`business.${m}Value`)}</strong>
              <span className="shop-metric-label">{t(`business.${m}Label`)}</span>
            </div>
          ))}
        </div>
        <p className="shop-note">{t('business.metricNote')}</p>
      </section>

      {/* 고객군 */}
      <section className="shop-container shop-section">
        <div className="shop-section-head">
          <h2>{t('business.customerTitle')}</h2>
        </div>
        <div className="shop-customer-tags">
          {customers.map((c) => (
            <span key={c} className="shop-customer-tag">
              {t(`business.${c}`)}
            </span>
          ))}
        </div>
        <div className="shop-cta-band">
          <div>
            <h2>{t('business.ctaTitle')}</h2>
            <p>{t('business.ctaDesc')}</p>
          </div>
          <div className="shop-cta-actions">
            <Link to="/shopHome/products" className="shop-btn ghost">
              {t('shopNav.products')}
            </Link>
            <Link to="/shopHome/quote" className="shop-btn primary">
              {t('shopNav.quote')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
