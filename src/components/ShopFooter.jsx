import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ShopFooter() {
  const { t } = useTranslation();

  return (
    <footer className="shop-footer">
      <div className="shop-container">
        <div className="shop-footer-top">
          <div className="shop-footer-brand">
            <span className="shop-logo-text">
              COREX<strong>STORE</strong>
            </span>
            <p>{t('shop.footerTagline')}</p>
          </div>

          <nav className="shop-footer-nav">
            <Link to="/shopHome/company">{t('shopNav.company')}</Link>
            <Link to="/shopHome/business">{t('shopNav.business')}</Link>
            <Link to="/shopHome/products">{t('shopNav.products')}</Link>
            <Link to="/shopHome/news">{t('shopNav.news')}</Link>
            <Link to="/shopHome/quote">{t('shopNav.quote')}</Link>
          </nav>
        </div>

        <div className="shop-footer-info">
          <p>{t('shop.footerCompany')}</p>
          <p>{t('shop.footerHqAddress')}</p>
          <p>{t('shop.footerLabAddress')}</p>
          <p>
            <a href={`mailto:${t('shop.footerEmail')}`}>{t('shop.footerEmail')}</a>
          </p>
          <p className="shop-footer-copy">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
