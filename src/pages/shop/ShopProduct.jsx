import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { findProduct, cosmetics, ingredients } from '../../data/products';
import ShopProductCard from '../../components/ShopProductCard';

export default function ShopProduct() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();

  const product = findProduct(id);
  if (!product) {
    return <Navigate to="/shopHome/all" replace />;
  }

  const isEn = i18n.language === 'en';
  const { category } = product;
  const name = isEn && product.nameEn ? product.nameEn : product.name;
  const desc = isEn && product.descEn ? product.descEn : product.desc;

  // 같은 카테고리의 다른 상품 4개 추천
  const pool = category === 'cosmetics' ? cosmetics : ingredients;
  const related = pool.filter((p) => String(p.id) !== String(product.id)).slice(0, 4);

  return (
    <section className="shop-container shop-section">
      {/* breadcrumb */}
      <nav className="sd-crumb">
        <Link to="/shopHome">{t('shop.cat_all')}</Link>
        <span>/</span>
        <Link to={`/shopHome/${category}`}>{t(`shop.cat_${category}`)}</Link>
        <span>/</span>
        <strong>{name}</strong>
      </nav>

      <div className="sd-top">
        {/* 이미지 */}
        <div className="sd-gallery">
          {product.image ? (
            <img src={product.image} alt={name} />
          ) : (
            <div className="sd-thumb-placeholder">{t('shop.imagePending')}</div>
          )}
        </div>

        {/* 정보 */}
        <div className="sd-info">
          <span className="sd-category">{t(`shop.cat_${category}`)}</span>
          <h1 className="sd-name">{name}</h1>
          {product.nameEn && !isEn && <p className="sd-name-en">{product.nameEn}</p>}

          {desc && <p className="sd-desc">{desc}</p>}

          <div className="sd-price-box">
            <span className="sd-price-inquiry">{t('shop.priceInquiry')}</span>
            <p className="sd-price-inquiry-note">{t('shop.priceInquiryNote')}</p>
          </div>

          {/* 스펙 표 */}
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

      {/* 상세 설명 */}
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

      {/* 관련 상품 */}
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
