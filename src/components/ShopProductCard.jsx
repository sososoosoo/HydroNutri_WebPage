import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ShopProductCard({ product }) {
  const { t, i18n } = useTranslation();
  const name = i18n.language === 'en' && product.nameEn ? product.nameEn : product.name;

  return (
    <article className="sp-card">
      <Link to={`/shopHome/product/${product.id}`} className="sp-link">
        <div className="sp-thumb">
          {product.image ? (
            <img src={product.image} alt={name} loading="lazy" />
          ) : (
            <div className="sp-thumb-placeholder">{t('shop.imagePending')}</div>
          )}
        </div>

        <div className="sp-body">
          <h3 className="sp-name">{name}</h3>
          <p className="sp-spec">{product.spec}</p>
          <p className="sp-inquiry">{t('shop.priceInquiry')}</p>
        </div>
      </Link>
    </article>
  );
}
