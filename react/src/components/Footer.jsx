import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Technology', path: '/technology' },
  { label: 'Ingredients', path: '/roadmap' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>COREX</h3>
            <p>Where Living Systems <br /> meet Thinking Systems</p>
            <div className="footer-info" style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.6 }}>
              COREX CEO. 유동규<br />
              E-mail: 22qjsro@corexbiotech.com<br />
              Address: 강원특별자치도 춘천시 동산면 종자리로 33-7<br /><br />
              &copy; 2026 COREX Team. All rights reserved.
            </div>
          </div>

          {/* 하위메뉴 없으니 링크를 가로로 나열 */}
          <nav style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1.5rem 2.5rem', alignItems: 'flex-start', alignContent: 'flex-start' }}>
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="footer-nav-link"
                style={{ color: 'white' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
