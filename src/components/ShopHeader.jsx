import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const navItems = [
  { key: 'company', path: '/shopHome/company' },
  { key: 'business', path: '/shopHome/business' },
  { key: 'products', path: '/shopHome/products' },
  { key: 'notice', path: '/shopHome/notice' },
  { key: 'news', path: '/shopHome/news' },
  { key: 'quote', path: '/shopHome/quote' },
];

export default function ShopHeader() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const q = keyword.trim();
    navigate(q ? `/shopHome/all?q=${encodeURIComponent(q)}` : '/shopHome/all');
  };

  return (
    <header className="shop-header">
      {/* Utility bar */}
      <div className="shop-utility">
        <div className="shop-container shop-utility-inner" style={{ justifyContent: 'flex-end' }}>
          <div className="shop-utility-links">
            <button
              type="button"
              onClick={() => i18n.changeLanguage(i18n.language === 'ko' ? 'en' : 'ko')}
            >
              {i18n.language === 'ko' ? 'ENGLISH' : '한국어'}
            </button>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="shop-main-bar">
        <div className="shop-container shop-main-inner">
          <Link to="/shopHome" className="shop-logo">
            <img src="/icons/LOGO.png" alt="COREX" />
            <span className="shop-logo-text">
              COREX<strong>STORE</strong>
            </span>
          </Link>

          <form className="shop-search" onSubmit={handleSearch} role="search">
            <input
              type="search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder={t('shop.searchPlaceholder')}
              aria-label={t('shop.searchPlaceholder')}
            />
            <button type="submit" aria-label={t('shop.search')}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
              </svg>
            </button>
          </form>

          <Link to="/shopHome/quote" className="shop-quote-btn">
            {t('shop.bulkQuote')}
          </Link>
        </div>
      </div>

      {/* Nav bar */}
      <nav className="shop-catbar">
        <div className="shop-container shop-catbar-inner">
          {navItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.path}
              className={({ isActive }) => `shop-cat${isActive ? ' active' : ''}`}
            >
              {t(`shopNav.${item.key}`)}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
