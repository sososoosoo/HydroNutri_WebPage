import { useTranslation } from 'react-i18next';

const values = ['value1', 'value2', 'value3'];
const engines = ['engine1', 'engine2'];
const infoRows = ['infoCompany', 'infoCeo', 'infoFounded', 'infoLocation', 'infoField'];
const principles = ['p1', 'p2', 'p3'];
const lineup = ['line1', 'line2', 'line3', 'line4'];
const metrics = ['metric1', 'metric2'];
const customers = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'];

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

      <section className="shop-container shop-section shop-page-head">
        <span className="shop-page-eyebrow">{t('business.eyebrow')}</span>
        <h2 className="shop-page-title">{t('business.title')}</h2>
        <p className="shop-lead">{t('business.lead')}</p>
      </section>

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

      <section className="shop-container shop-section">
        <div className="shop-passport">
          <span className="shop-passport-tag">Bioactive Passport</span>
          <h2>{t('business.passportTitle')}</h2>
          <p>{t('business.passportDesc')}</p>
        </div>
      </section>

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
      </section>

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
      </section>
    </>
  );
}
