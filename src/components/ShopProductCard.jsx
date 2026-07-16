import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { discountRate, formatKRW } from '../data/products';

export default function ShopProductCard({ product }) {
  const { t, i18n } = useTranslation();
  const { listPrice, price } = product;
  const discount = discountRate(listPrice, price);
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
          {discount > 0 && <span className="sp-badge">{discount}%</span>}
        </div>

        <div className="sp-body">
          <h3 className="sp-name">{name}</h3>
          <p className="sp-spec">{product.spec}</p>

          <div className="sp-price">
            {discount > 0 && (
              <p className="sp-price-before">
                <span className="sp-original">{formatKRW(listPrice)}{t('shop.won')}</span>
                <span className="sp-off">{discount}%{t('shop.off')}</span>
              </p>
            )}
            <p className="sp-final">
              <strong>{formatKRW(price)}</strong>
              {t('shop.won')}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
