import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

// 기존 문의 폼(구 Contact 페이지)에서 사용하던 EmailJS 설정을 재사용.
// 해당 템플릿은 {{name}}, {{email}}, {{category}}, {{message}} 변수를 사용하므로
// 견적 내용 전체를 message 하나에 정리해서 전송한다.
const EMAILJS_SERVICE_ID = 'service_4vvm5c1';
const EMAILJS_TEMPLATE_ID = 'template_xcpd6t4';
const EMAILJS_PUBLIC_KEY = '-kb7Dty1CCS7mnYzy';

const materialsMeta = [
  { id: 'centella', name: 'Centella Asiatica', korean: '병풀', compound: 'Madecassoside · Asiaticoside' },
  { id: 'bacopa', name: 'Bacopa monnieri', korean: '바코파', compound: 'Bacoside A & B' },
  { id: 'ginseng', name: 'Panax Ginseng', korean: '인삼', compound: 'Ginsenoside · Saponin' },
  { id: 'dendrobium', name: 'Dendrobium', korean: '덴드로비움', compound: 'Polysaccharides · Flavonoids' },
  { id: 'lemna', name: 'Lemna (Duckweed)', korean: '워터렌틸 (개구리밥)', compound: 'Plant Protein · Omega-3' },
  { id: 'stevia', name: 'Stevia', korean: '스테비아', compound: 'Stevioside · Rebaudioside A' },
];

const formOptions = ['extract', 'powder', 'dried', 'raw'];
const unitOptions = ['kg', 'g', 'ton', 'L'];

const emptyContact = { company: '', name: '', email: '', phone: '', message: '' };

export default function ShopQuote() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState({});
  const [contact, setContact] = useState(emptyContact);
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const selectedMaterials = materialsMeta.filter((m) => selected[m.id]);

  const toggleMaterial = (id) => {
    setSelected((prev) => {
      const next = { ...prev };
      if (next[id]) delete next[id];
      else next[id] = { form: 'extract', qty: '', unit: 'kg' };
      return next;
    });
  };

  const updateItem = (id, field, value) => {
    setSelected((prev) => ({ ...prev, [id]: { ...prev[id], [field]: value } }));
  };

  const updateContact = (field, value) => {
    setContact((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    if (selectedMaterials.length === 0) {
      setStatus('idle');
      setErrorMsg(t('quote.errNoMaterial'));
      return;
    }
    if (selectedMaterials.some((m) => !selected[m.id].qty || Number(selected[m.id].qty) <= 0)) {
      setStatus('idle');
      setErrorMsg(t('quote.errQty'));
      return;
    }
    if (!contact.company.trim() || !contact.name.trim() || !contact.email.trim()) {
      setStatus('idle');
      setErrorMsg(t('quote.errRequired'));
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email.trim())) {
      setStatus('idle');
      setErrorMsg(t('quote.errEmail'));
      return;
    }

    const quoteItems = selectedMaterials
      .map((m) => {
        const item = selected[m.id];
        return `- ${m.name} (${m.korean}) / ${t(`quote.form_${item.form}`)} / ${item.qty} ${item.unit}`;
      })
      .join('\n');

    const messageBody = [
      `회사명: ${contact.company}`,
      `담당자: ${contact.name}`,
      `이메일: ${contact.email}`,
      `연락처: ${contact.phone || '-'}`,
      '',
      '[요청 원료]',
      quoteItems,
      '',
      '[추가 요청사항]',
      contact.message || '-',
    ].join('\n');

    setErrorMsg('');
    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: contact.name,
          email: contact.email,
          category: '견적문의 (Quote Request)',
          message: messageBody,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      setSelected({});
      setContact(emptyContact);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="shop-container shop-section shop-quote">
      <div className="shop-quote-head">
        <h1>{t('quote.heading')}</h1>
        <p>{t('quote.desc')}</p>
      </div>

      {/* Step 1 */}
      <div className="shop-step">
        <div className="shop-step-head">
          <span className="shop-step-num">STEP 01</span>
          <h2>{t('quote.step1Title')}</h2>
          <p>{t('quote.step1Desc')}</p>
        </div>

        <div className="shop-material-grid">
          {materialsMeta.map((m) => {
            const item = selected[m.id];
            return (
              <div
                key={m.id}
                className={`shop-material-card${item ? ' selected' : ''}`}
                onClick={() => toggleMaterial(m.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleMaterial(m.id);
                  }
                }}
              >
                <span className="shop-material-check">✓</span>
                <p className="shop-material-ko">{m.korean}</p>
                <h3>{m.name}</h3>
                <p className="shop-material-compound">{m.compound}</p>

                {item && (
                  <div className="shop-material-controls" onClick={(e) => e.stopPropagation()}>
                    <div className="shop-field">
                      <label htmlFor={`form-${m.id}`}>{t('quote.formLabel')}</label>
                      <select
                        id={`form-${m.id}`}
                        value={item.form}
                        onChange={(e) => updateItem(m.id, 'form', e.target.value)}
                      >
                        {formOptions.map((f) => (
                          <option key={f} value={f}>{t(`quote.form_${f}`)}</option>
                        ))}
                      </select>
                    </div>
                    <div className="shop-field">
                      <label htmlFor={`qty-${m.id}`}>{t('quote.qtyLabel')}</label>
                      <input
                        id={`qty-${m.id}`}
                        type="number"
                        min="0"
                        step="any"
                        placeholder={t('quote.qtyPlaceholder')}
                        value={item.qty}
                        onChange={(e) => updateItem(m.id, 'qty', e.target.value)}
                      />
                    </div>
                    <div className="shop-field">
                      <label htmlFor={`unit-${m.id}`}>{t('quote.unitLabel')}</label>
                      <select
                        id={`unit-${m.id}`}
                        value={item.unit}
                        onChange={(e) => updateItem(m.id, 'unit', e.target.value)}
                      >
                        {unitOptions.map((u) => (
                          <option key={u} value={u}>{u}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Step 2 */}
      <div className="shop-step">
        <div className="shop-step-head">
          <span className="shop-step-num">STEP 02</span>
          <h2>{t('quote.step2Title')}</h2>
          <p>{t('quote.step2Desc')}</p>
        </div>

        <form className="shop-quote-form" onSubmit={handleSubmit} noValidate>
          <div className="shop-form-grid">
            <div className="shop-field">
              <label htmlFor="quote-company">
                {t('quote.company')} <span className="shop-required">*</span>
              </label>
              <input
                id="quote-company"
                type="text"
                placeholder={t('quote.companyPlaceholder')}
                value={contact.company}
                onChange={(e) => updateContact('company', e.target.value)}
              />
            </div>
            <div className="shop-field">
              <label htmlFor="quote-name">
                {t('quote.name')} <span className="shop-required">*</span>
              </label>
              <input
                id="quote-name"
                type="text"
                placeholder={t('quote.namePlaceholder')}
                value={contact.name}
                onChange={(e) => updateContact('name', e.target.value)}
              />
            </div>
            <div className="shop-field">
              <label htmlFor="quote-email">
                {t('quote.email')} <span className="shop-required">*</span>
              </label>
              <input
                id="quote-email"
                type="email"
                placeholder={t('quote.emailPlaceholder')}
                value={contact.email}
                onChange={(e) => updateContact('email', e.target.value)}
              />
            </div>
            <div className="shop-field">
              <label htmlFor="quote-phone">{t('quote.phone')}</label>
              <input
                id="quote-phone"
                type="tel"
                placeholder={t('quote.phonePlaceholder')}
                value={contact.phone}
                onChange={(e) => updateContact('phone', e.target.value)}
              />
            </div>
            <div className="shop-field shop-field-full">
              <label htmlFor="quote-message">{t('quote.message')}</label>
              <textarea
                id="quote-message"
                placeholder={t('quote.messagePlaceholder')}
                value={contact.message}
                onChange={(e) => updateContact('message', e.target.value)}
              />
            </div>
          </div>

          <div className="shop-summary">
            <p className="shop-summary-title">{t('quote.summaryTitle')}</p>
            {selectedMaterials.length === 0 ? (
              <p className="shop-summary-empty">{t('quote.summaryEmpty')}</p>
            ) : (
              <>
                {selectedMaterials.map((m) => {
                  const item = selected[m.id];
                  return (
                    <div key={m.id} className="shop-summary-row">
                      <span>{m.name} ({m.korean})</span>
                      <span className="shop-summary-detail">
                        {t(`quote.form_${item.form}`)} · {item.qty || '?'} {item.unit}
                      </span>
                    </div>
                  );
                })}
                <p className="shop-summary-count">
                  {t('quote.summaryCount', { count: selectedMaterials.length })}
                </p>
              </>
            )}
          </div>

          {errorMsg && <div className="shop-status error">{errorMsg}</div>}
          {status === 'success' && <div className="shop-status success">{t('quote.successMsg')}</div>}
          {status === 'error' && <div className="shop-status error">{t('quote.errorMsg')}</div>}

          <button type="submit" className="shop-btn primary shop-submit" disabled={status === 'sending'}>
            {status === 'sending' ? t('quote.sending') : t('quote.submit')}
          </button>
        </form>
      </div>
    </section>
  );
}
