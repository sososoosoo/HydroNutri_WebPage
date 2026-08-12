import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { findProduct, cosmetics, ingredients } from '../../data/products';
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
  const { category } = product;
  const name = isEn && product.nameEn ? product.nameEn : product.name;
  const desc = isEn && product.descEn ? product.descEn : product.desc;

  return (
    <section className="shop-container shop-section">
      <nav className="sd-crumb">
        <Link to="/shopHome">{t('shop.cat_all')}</Link>
        <span>/</span>
        <Link to={`/shopHome/${category}`}>{t(`shop.cat_${category}`)}</Link>
        <span>/</span>
        <strong>{name}</strong>
      </nav>

      <div className="sd-top">
        <div className="sd-gallery">
          {product.image ? (
            <img src={product.image} alt={name} />
          ) : (
            <div className="sd-thumb-placeholder">{t('shop.imagePending')}</div>
          )}
        </div>

        <div className="sd-info">
          <span className="sd-category">{t(`shop.cat_${category}`)}</span>
          <h1 className="sd-name">{name}</h1>
          {product.nameEn && !isEn && <p className="sd-name-en">{product.nameEn}</p>}

          {desc && <p className="sd-desc">{desc}</p>}

          <div className="sd-price-box">
            <span className="sd-price-inquiry">{t('shop.priceInquiry')}</span>
            <p className="sd-price-inquiry-note">{t('shop.priceInquiryNote')}</p>
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
            <Link to="/shopHome/quote" className="shop-btn primary sd-cta">
              {t('shop.buy')}
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
    </section>
  );
}
