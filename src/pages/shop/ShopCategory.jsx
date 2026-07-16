import { useState, useMemo } from 'react';
import { useParams, useSearchParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cosmetics, ingredients, discountRate } from '../../data/products';
import ShopProductCard from '../../components/ShopProductCard';

const VALID = ['all', 'cosmetics', 'ingredients'];

const sortOptions = ['recommend', 'priceLow', 'priceHigh', 'discount'];

export default function ShopCategory() {
  const { category = 'all' } = useParams();
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();
  const [sort, setSort] = useState('recommend');

  const query = (searchParams.get('q') || '').trim().toLowerCase();

  const items = useMemo(() => {
    let base;
    if (category === 'cosmetics') base = cosmetics;
    else if (category === 'ingredients') base = ingredients;
    else base = [...cosmetics, ...ingredients];

    let list = query
      ? base.filter((p) =>
          `${p.name} ${p.nameEn || ''} ${p.spec} ${p.note || ''}`.toLowerCase().includes(query)
        )
      : [...base];

    if (sort === 'priceLow') list.sort((a, b) => a.price - b.price);
    else if (sort === 'priceHigh') list.sort((a, b) => b.price - a.price);
    else if (sort === 'discount')
      list.sort((a, b) => discountRate(b.listPrice, b.price) - discountRate(a.listPrice, a.price));

    return list;
  }, [category, query, sort]);

  if (!VALID.includes(category)) {
    return <Navigate to="/shopHome/all" replace />;
  }

  return (
    <section className="shop-container shop-section shop-listing">
      <div className="shop-listing-head">
        <div>
          <h1 className="shop-listing-title">
            {query ? t('shop.searchResult', { query }) : t(`shop.cat_${category}`)}
          </h1>
          <p className="shop-listing-count">{t('shop.itemCount', { count: items.length })}</p>
        </div>

        <div className="shop-sort">
          {sortOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              className={`shop-sort-btn${sort === opt ? ' active' : ''}`}
              onClick={() => setSort(opt)}
            >
              {t(`shop.sort_${opt}`)}
            </button>
          ))}
        </div>
      </div>

      {items.length === 0 ? (
        <p className="shop-empty">{t('shop.emptyResult')}</p>
      ) : (
        <div className="sp-grid">
          {items.map((p) => (
            <ShopProductCard key={p.id} product={p} />
          ))}
        </div>
      )}

      <p className="shop-note">{t('shop.priceNote')}</p>
    </section>
  );
}
