import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cosmetics, ingredients } from '../../data/products';
import ShopProductCard from '../../components/ShopProductCard';

export default function ShopProducts() {
  const { t } = useTranslation();

  return (
    <>
      <section className="shop-container shop-section shop-page-head">
        <span className="shop-page-eyebrow">{t('products.eyebrow')}</span>
        <h1 className="shop-page-title">{t('products.title')}</h1>
        <p className="shop-lead">{t('products.desc')}</p>
      </section>

      {/* BioResponse 완제품 */}
      <section className="shop-container shop-section">
        <div className="shop-section-head">
          <h2>{t('products.cosmeticTitle')}</h2>
          <Link to="/shopHome/cosmetics">{t('shop.viewAll')}</Link>
        </div>
        <div className="sp-grid cosmetic">
          {cosmetics.map((p) => (
            <ShopProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* 원료 카탈로그 */}
      <section className="shop-container shop-section">
        <div className="shop-section-head">
          <h2>{t('products.ingredientTitle')}</h2>
          <Link to="/shopHome/ingredients">{t('shop.viewAll')}</Link>
        </div>
        <div className="sp-grid">
          {ingredients.slice(0, 12).map((p) => (
            <ShopProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* 개발 중인 소재 */}
      <section className="shop-container shop-section">
        <div className="shop-dev-card">
          <span className="shop-dev-status">{t('products.devStatus')}</span>
          <h2>{t('products.devName')}</h2>
          <p>{t('products.devDesc')}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="shop-container shop-section">
        <div className="shop-cta-band">
          <div>
            <h2>{t('products.ctaTitle')}</h2>
            <p>{t('products.ctaDesc')}</p>
          </div>
          <div className="shop-cta-actions">
            <Link to="/shopHome/quote" className="shop-btn primary">
              {t('shopNav.quote')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
