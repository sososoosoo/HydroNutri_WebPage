import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cosmetics, ingredients } from '../../data/products';
import ShopProductCard from '../../components/ShopProductCard';

export default function ShopHome() {
  const { t } = useTranslation();

  const featured = ingredients.slice(0, 8);

  const newest = ingredients.slice(-8);

  return (
    <>
      {/* Hero banner */}
      <section className="shop-hero">
        <div className="shop-container shop-hero-inner">
          <div className="shop-hero-copy">
            <span className="shop-hero-eyebrow">{t('shop.heroEyebrow')}</span>
            <h1 className="shop-hero-title">{t('shop.heroTitle')}</h1>
            <p className="shop-hero-desc">{t('shop.heroDesc')}</p>
            <div className="shop-hero-actions">
              <Link to="/shopHome/ingredients" className="shop-btn primary">
                {t('shop.heroCta1')}
              </Link>
              <Link to="/shopHome/quote" className="shop-btn ghost">
                {t('shop.heroCta2')}
              </Link>
            </div>
          </div>
          <div className="shop-hero-visual">
            <div className="shop-hero-card">
              <span className="shop-hero-card-label">{t('shop.heroCardLabel')}</span>
              <strong className="shop-hero-card-num">{ingredients.length}</strong>
              <span className="shop-hero-card-unit">{t('shop.heroCardUnit')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cosmetics */}
      <section className="shop-container shop-section">
        <div className="shop-section-head">
          <h2>{t('shop.sectionCosmetics')}</h2>
          <Link to="/shopHome/cosmetics">{t('shop.viewAll')}</Link>
        </div>
        <div className="sp-grid cosmetic">
          {cosmetics.map((p) => (
            <ShopProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="shop-container shop-section">
        <div className="shop-section-head">
          <h2>{t('shop.sectionDeals')}</h2>
          <Link to="/shopHome/ingredients">{t('shop.viewAll')}</Link>
        </div>
        <div className="sp-grid">
          {featured.map((p) => (
            <ShopProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* New arrivals */}
      <section className="shop-container shop-section">
        <div className="shop-section-head">
          <h2>{t('shop.sectionNew')}</h2>
          <Link to="/shopHome/ingredients">{t('shop.viewAll')}</Link>
        </div>
        <div className="sp-grid">
          {newest.map((p) => (
            <ShopProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
