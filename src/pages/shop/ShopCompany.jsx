import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const values = ['value1', 'value2', 'value3'];
const engines = ['engine1', 'engine2'];
const infoRows = ['infoCompany', 'infoCeo', 'infoFounded', 'infoLocation', 'infoField'];

export default function ShopCompany() {
  const { t } = useTranslation();

  return (
    <>
      <section className="shop-container shop-section shop-page-head">
        <span className="shop-page-eyebrow">{t('company.eyebrow')}</span>
        <h1 className="shop-page-title">{t('company.title')}</h1>
        <p className="shop-lead">{t('company.lead')}</p>
      </section>

      <section className="shop-container shop-section">
        <div className="shop-section-head">
          <h2>{t('company.philosophyTitle')}</h2>
        </div>
        <p className="shop-body-text">{t('company.philosophyDesc')}</p>
        <div className="shop-values">
          {values.map((v) => (
            <div key={v} className="shop-value-card">
              <h3>{t(`company.${v}Title`)}</h3>
              <p>{t(`company.${v}Desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shop-container shop-section">
        <div className="shop-section-head">
          <h2>{t('company.engineTitle')}</h2>
        </div>
        <p className="shop-body-text">{t('company.engineDesc')}</p>
        <div className="shop-engines">
          {engines.map((e, i) => (
            <div key={e} className="shop-engine-card">
              <span className="shop-engine-num">{`0${i + 1}`}</span>
              <h3>{t(`company.${e}Title`)}</h3>
              <p>{t(`company.${e}Desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shop-container shop-section">
        <div className="shop-section-head">
          <h2>{t('company.infoTitle')}</h2>
        </div>
        <dl className="shop-info-table">
          {infoRows.map((row) => (
            <div key={row} className="shop-info-row">
              <dt>{t(`company.${row}Label`)}</dt>
              <dd>{t(`company.${row}Value`)}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="shop-container shop-section">
        <div className="shop-cta-band">
          <div>
            <h2>{t('company.ctaTitle')}</h2>
            <p>{t('company.ctaDesc')}</p>
          </div>
          <div className="shop-cta-actions">
            <Link to="/shopHome/business" className="shop-btn ghost">
              {t('shopNav.business')}
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
