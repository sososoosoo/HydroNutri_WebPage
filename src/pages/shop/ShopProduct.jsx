import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { findProduct, cosmetics, ingredients, discountRate, formatKRW } from '../../data/products';
import { productStories } from '../../data/productStories';
import ShopProductCard from '../../components/ShopProductCard';
import ShopProductStory from '../../components/ShopProductStory';

export default function ShopProduct() {
  const { id } = useParams();
  return <ShopProductDetail key={id} id={id} />;
}

function ShopProductDetail({ id }) {
  const { t, i18n } = useTranslation();

  const product = findProduct(id);

  const [activeImage, setActiveImage] = useState(0);

  const [related] = useState(() => {
    if (!product) return [];
    const pool = product.category === 'cosmetics' ? cosmetics : ingredients;
    const others = pool.filter((p) => String(p.id) !== String(product.id));
    for (let i = others.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [others[i], others[j]] = [others[j], others[i]];
    }
    return others.slice(0, 4);
  });

  if (!product) {
    return <Navigate to="/shopHome/all" replace />;
  }

  const isEn = i18n.language === 'en';
  const { category, listPrice, price, showPrice } = product;
  const name = isEn && product.nameEn ? product.nameEn : product.name;
  const desc = isEn && product.descEn ? product.descEn : product.desc;
  const discount = discountRate(listPrice, price);
  const saved = listPrice - price;
  const gallery = product.images?.length ? product.images : product.image ? [product.image] : [];
  const mainImage = gallery[activeImage] || gallery[0];
  // 화장품은 B2C라 '구매 문의', 원료는 kg·톤 단위라 '견적 문의'
  const buyLabel = t(category === 'cosmetics' ? 'shop.buy' : 'shop.buyQuote');
  const quotePath = `/shopHome/quote?product=${product.id}`;

  return (
    <section className="shop-container shop-section sd-page">
      <nav className="sd-crumb">
        <Link to="/shopHome">{t('shop.cat_all')}</Link>
        <span>/</span>
        <Link to={`/shopHome/${category}`}>{t(`shop.cat_${category}`)}</Link>
        <span>/</span>
        <strong>{name}</strong>
      </nav>

      <div className="sd-top">
        <div className="sd-gallery-wrap">
          <div className="sd-gallery">
            {mainImage ? (
              <img src={mainImage} alt={name} />
            ) : (
              <div className="sd-thumb-placeholder">{t('shop.imagePending')}</div>
            )}
          </div>
          {gallery.length > 1 && (
            <div className="sd-thumbs">
              {gallery.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  className={`sd-thumb${i === activeImage ? ' active' : ''}`}
                  onClick={() => setActiveImage(i)}
                  aria-label={`${name} ${i + 1}`}
                >
                  <img src={src} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="sd-info">
          <span className="sd-category">{t(`shop.cat_${category}`)}</span>
          <h1 className="sd-name">{name}</h1>
          {product.nameEn && !isEn && <p className="sd-name-en">{product.nameEn}</p>}

          {desc && <p className="sd-desc">{desc}</p>}

          <div className="sd-price-box">
            {showPrice ? (
              <>
                {discount > 0 && (
                  <div className="sd-price-row">
                    <span className="sd-original">{formatKRW(listPrice)}{t('shop.won')}</span>
                    <span className="sd-off">{discount}%{t('shop.off')}</span>
                  </div>
                )}
                <div className="sd-final-row">
                  <strong className="sd-final">{formatKRW(price)}</strong>
                  <span className="sd-won">{t('shop.won')}</span>
                </div>
                {discount > 0 && (
                  <p className="sd-saved">
                    {t('shop.savedLabel')} {formatKRW(saved)}{t('shop.won')}
                  </p>
                )}
              </>
            ) : (
              <>
                <span className="sd-price-inquiry">{t('shop.priceInquiry')}</span>
                <p className="sd-price-inquiry-note">{t('shop.priceInquiryNote')}</p>
              </>
            )}
          </div>

          <dl className="sd-spec-table">
            <div className="sd-spec-row">
              <dt>{t('shop.specLabel')}</dt>
              <dd>{product.spec}</dd>
            </div>
            <div className="sd-spec-row">
              <dt>{t('shop.originLabel')}</dt>
              <dd>{t('shop.originValue')}</dd>
            </div>
          </dl>

          <div className="sd-actions">
            <Link to={quotePath} className="shop-btn primary sd-cta">
              {buyLabel}
            </Link>
            <Link to={`/shopHome/${category}`} className="shop-btn ghost sd-cta">
              {t('shop.backToList')}
            </Link>
          </div>

          <p className="sd-notice">{t('shop.detailNotice')}</p>
        </div>
      </div>

      {productStories[product.id] ? (
        <ShopProductStory story={productStories[product.id]} isEn={isEn} />
      ) : (
        <div className="sd-detail">
          <h2 className="sd-detail-title">{t('shop.detailTitle')}</h2>
          <div className="sd-detail-body">
            {desc && <p>{desc}</p>}
            <p>{t('shop.detailIntro', { name })}</p>
            <ul className="sd-detail-list">
              <li>{t('shop.detailPoint1')}</li>
              <li>{t('shop.detailPoint2')}</li>
              <li>{t('shop.detailPoint3')}</li>
            </ul>
          </div>
        </div>
      )}

      {/* 상세설명을 다 읽은(가장 관심 높은) 방문자를 위한 마무리 전환 밴드 */}
      <div className="sd-story-cta">
        <h2 className="sd-story-cta-name">{name}</h2>
        <p className="sd-story-cta-meta">
          {product.spec}
          {showPrice ? ` · ${formatKRW(price)}${t('shop.won')}` : ` · ${t('shop.priceInquiry')}`}
        </p>
        <Link to={quotePath} className="shop-btn primary sd-story-cta-btn">
          {buyLabel}
        </Link>
        <p className="sd-story-cta-note">{t('shop.storyCtaNote')}</p>
      </div>

      {related.length > 0 && (
        <div className="sd-related">
          <div className="shop-section-head">
            <h2>{t('shop.relatedTitle')}</h2>
            <Link to={`/shopHome/${category}`}>{t('shop.viewAll')}</Link>
          </div>
          <div className="sp-grid">
            {related.map((p) => (
              <ShopProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

      {/* 모바일 하단 고정 바 — 스크롤 어디서든 바로 문의 */}
      <div className="sd-sticky-bar">
        <div className="sd-sticky-info">
          <strong>{name}</strong>
          {showPrice && (
            <span>
              {formatKRW(price)}
              {t('shop.won')}
            </span>
          )}
        </div>
        <Link to={quotePath} className="shop-btn primary sd-sticky-btn">
          {buyLabel}
        </Link>
      </div>
    </section>
  );
}
