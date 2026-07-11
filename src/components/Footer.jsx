import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const footerLinkKeys = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'technology', path: '/technology' },
  { key: 'ingredients', path: '/roadmap' },
  { key: 'contact', path: '/contact' },
];

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>COREX</h3>
            <p>{t('footer.slogan')} <br /> {t('footer.slogan2')}</p>
            <div className="footer-info" style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.6 }}>
              {t('footer.ceo')}<br />
              {t('footer.email')}<br />
              {t('footer.address')}<br /><br />
              {t('footer.copyright')}
            </div>
          </div>

          {/* 하위메뉴 없으니 링크를 가로로 나열 */}
          <nav style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1.5rem 2.5rem', alignItems: 'flex-start', alignContent: 'flex-start' }}>
            {footerLinkKeys.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="footer-nav-link"
                style={{ color: 'white' }}
              >
                {t(`nav.${link.key}`)}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
