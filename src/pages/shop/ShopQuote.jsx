import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { X, Minus, Plus } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { cosmetics, ingredients, findProduct } from '../../data/products';

const EMAILJS_SERVICE_ID = 'service_4vvm5c1';
const EMAILJS_TEMPLATE_ID = 'template_xcpd6t4';
const EMAILJS_PUBLIC_KEY = '-kb7Dty1CCS7mnYzy';

const unitOptions = ['개', 'kg', 'g', 'L'];

const emptyContact = { company: '', name: '', email: '', phone: '', message: '' };

export default function ShopQuote() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  const [searchParams] = useSearchParams();

  const [items, setItems] = useState(() => {
    const initial = findProduct(searchParams.get('product'));
    return initial ? [{ id: String(initial.id), qty: '1', unit: '개', checked: true }] : [];
  });
  // 화장품(B2C)에서 오면 개인 구매, 원료(B2B)에서 오면 기업·대량 구매가 기본
  const [inquiryType, setInquiryType] = useState(() => {
    const initial = findProduct(searchParams.get('product'));
    if (initial) return initial.category === 'cosmetics' ? 'personal' : 'business';
    return 'business';
  });
  const isPersonal = inquiryType === 'personal';
  const [contact, setContact] = useState(emptyContact);
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const productName = (p) => (isEn && p.nameEn ? p.nameEn : p.name);
  const selectedItems = items.filter((it) => it.checked);

  const addItem = (id) => {
    if (!id) return;
    setItems((prev) =>
      prev.some((it) => it.id === String(id))
        ? prev
        : [...prev, { id: String(id), qty: '1', unit: '개', checked: true }]
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const updateItem = (id, field, value) => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, [field]: value } : it)));
  };

  const stepQty = (id, delta) => {
    setItems((prev) =>
      prev.map((it) => {
        if (it.id !== id) return it;
        const next = Math.max(1, (Number(it.qty) || 0) + delta);
        return { ...it, qty: String(next) };
      })
    );
  };

  const updateContact = (field, value) => {
    setContact((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    if (items.length === 0) {
      setStatus('idle');
      setErrorMsg(t('quote.errNoMaterial'));
      return;
    }
    if (selectedItems.length === 0) {
      setStatus('idle');
      setErrorMsg(t('quote.errNoChecked'));
      return;
    }
    if (selectedItems.some((it) => !it.qty || Number(it.qty) <= 0)) {
      setStatus('idle');
      setErrorMsg(t('quote.errQty'));
      return;
    }
    if (!contact.name.trim() || !contact.email.trim() || (!isPersonal && !contact.company.trim())) {
      setStatus('idle');
      setErrorMsg(t(isPersonal ? 'quote.errRequiredPersonal' : 'quote.errRequired'));
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email.trim())) {
      setStatus('idle');
      setErrorMsg(t('quote.errEmail'));
      return;
    }

    const quoteItems = selectedItems
      .map((it) => {
        const p = findProduct(it.id);
        return `- ${p.name}${p.spec ? ` (${p.spec})` : ''} / ${it.qty} ${it.unit}`;
      })
      .join('\n');

    const messageBody = [
      `문의 유형: ${isPersonal ? '개인 구매 (B2C)' : '기업·대량 구매 (B2B)'}`,
      ...(isPersonal ? [] : [`회사명: ${contact.company}`]),
      `${isPersonal ? '성함' : '담당자'}: ${contact.name}`,
      `이메일: ${contact.email}`,
      `연락처: ${contact.phone || '-'}`,
      '',
      '[문의 상품]',
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
          category: isPersonal ? '구매 문의 (B2C)' : '견적 문의 (B2B)',
          message: messageBody,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      setItems([]);
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

      <div className="shop-step">
        <div className="shop-step-head">
          <span className="shop-step-num">STEP 01</span>
          <h2>{t('quote.step1Title')}</h2>
          <p>{t('quote.step1Desc')}</p>
        </div>

        {items.length === 0 ? (
          <p className="shop-cart-empty">{t('quote.cartEmpty')}</p>
        ) : (
          <ul className="shop-cart-list">
            {items.map((it) => {
              const p = findProduct(it.id);
              if (!p) return null;
              return (
                <li key={it.id} className={`shop-cart-row${it.checked ? '' : ' off'}`}>
                  <input
                    type="checkbox"
                    className="shop-cart-check"
                    checked={it.checked}
                    onChange={() => updateItem(it.id, 'checked', !it.checked)}
                    aria-label={`${t('quote.includeItem')}: ${productName(p)}`}
                  />
                  <div className="shop-cart-thumb">
                    {p.image ? (
                      <img src={p.image} alt={productName(p)} loading="lazy" />
                    ) : (
                      <span className="shop-cart-thumb-empty">{t('shop.imagePending')}</span>
                    )}
                  </div>
                  <div className="shop-cart-info">
                    <strong>{productName(p)}</strong>
                    {p.spec && <span>{p.spec}</span>}
                  </div>
                  <div className="shop-cart-controls">
                    <div className="shop-cart-stepper">
                      <button
                        type="button"
                        className="shop-cart-step-btn"
                        onClick={() => stepQty(it.id, -1)}
                        aria-label={`${t('quote.qtyMinus')}: ${productName(p)}`}
                      >
                        <Minus size={14} />
                      </button>
                      <input
                        className="shop-cart-qty"
                        type="text"
                        inputMode="numeric"
                        aria-label={`${t('quote.qtyLabel')}: ${productName(p)}`}
                        value={it.qty}
                        onChange={(e) => updateItem(it.id, 'qty', e.target.value.replace(/\D/g, ''))}
                        onBlur={() => {
                          if (!it.qty || Number(it.qty) < 1) updateItem(it.id, 'qty', '1');
                        }}
                      />
                      <button
                        type="button"
                        className="shop-cart-step-btn"
                        onClick={() => stepQty(it.id, 1)}
                        aria-label={`${t('quote.qtyPlus')}: ${productName(p)}`}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <select
                      className="shop-cart-unit"
                      aria-label={`${t('quote.unitLabel')}: ${productName(p)}`}
                      value={it.unit}
                      onChange={(e) => updateItem(it.id, 'unit', e.target.value)}
                    >
                      {unitOptions.map((u) => (
                        <option key={u} value={u}>{u}</option>
                      ))}
                    </select>
                    <button
                      type="button"
                      className="shop-cart-remove"
                      onClick={() => removeItem(it.id)}
                      aria-label={`${t('quote.removeItem')}: ${productName(p)}`}
                    >
                      <X size={15} strokeWidth={2.5} />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        <div className="shop-cart-add">
          <label htmlFor="quote-add">{t('quote.addLabel')}</label>
          <select id="quote-add" value="" onChange={(e) => addItem(e.target.value)}>
            <option value="" disabled>
              {t('quote.addPlaceholder')}
            </option>
            <optgroup label={t('shop.cat_cosmetics')}>
              {cosmetics.map((p) => (
                <option key={p.id} value={p.id}>
                  {productName(p)}{p.spec ? ` (${p.spec})` : ''}
                </option>
              ))}
            </optgroup>
            <optgroup label={t('shop.cat_ingredients')}>
              {ingredients.map((p) => (
                <option key={p.id} value={p.id}>
                  {productName(p)}{p.spec ? ` (${p.spec})` : ''}
                </option>
              ))}
            </optgroup>
          </select>
        </div>
      </div>

      <div className="shop-step">
        <div className="shop-step-head">
          <span className="shop-step-num">STEP 02</span>
          <h2>{t('quote.step2Title')}</h2>
          <p>{t(isPersonal ? 'quote.step2DescPersonal' : 'quote.step2Desc')}</p>
        </div>

        <div className="shop-quote-type" role="radiogroup" aria-label={t('quote.typeLabel')}>
          <button
            type="button"
            className={isPersonal ? 'active' : ''}
            aria-pressed={isPersonal}
            onClick={() => setInquiryType('personal')}
          >
            {t('quote.typePersonal')}
          </button>
          <button
            type="button"
            className={isPersonal ? '' : 'active'}
            aria-pressed={!isPersonal}
            onClick={() => setInquiryType('business')}
          >
            {t('quote.typeBusiness')}
          </button>
        </div>

        <form className="shop-quote-form" onSubmit={handleSubmit} noValidate>
          <div className="shop-form-grid">
            {!isPersonal && (
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
            )}
            <div className="shop-field">
              <label htmlFor="quote-name">
                {t(isPersonal ? 'quote.namePersonal' : 'quote.name')}{' '}
                <span className="shop-required">*</span>
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
                placeholder={t(isPersonal ? 'quote.messagePlaceholderPersonal' : 'quote.messagePlaceholder')}
                value={contact.message}
                onChange={(e) => updateContact('message', e.target.value)}
              />
            </div>
          </div>

          <div className="shop-summary">
            <p className="shop-summary-title">{t('quote.summaryTitle')}</p>
            {items.length === 0 ? (
              <p className="shop-summary-empty">{t('quote.summaryEmpty')}</p>
            ) : selectedItems.length === 0 ? (
              <p className="shop-summary-empty">{t('quote.errNoChecked')}</p>
            ) : (
              <>
                {selectedItems.map((it) => {
                  const p = findProduct(it.id);
                  if (!p) return null;
                  return (
                    <div key={it.id} className="shop-summary-row">
                      <span>{productName(p)}{p.spec ? ` (${p.spec})` : ''}</span>
                      <span className="shop-summary-detail">
                        {it.qty || '?'} {it.unit}
                      </span>
                    </div>
                  );
                })}
                <p className="shop-summary-count">
                  {t('quote.summaryCount', { count: selectedItems.length })}
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
