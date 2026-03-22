import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function SubPageHero({ category, title, currentPage, breadcrumbParent, subNavItems }) {
  return (
    <section className={`premium-sub-hero ${category}`}>
      <div className="premium-hero-bg"></div>
      
      <div className="premium-hero-overlay">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="premium-hero-content"
        >
          <h1 className="premium-hero-title">{title}</h1>
          <div className="premium-breadcrumb">
            <Link to="/" className="home-link">Home</Link>
            {breadcrumbParent && (
              <>
                <span className="separator">/</span>
                <Link to={breadcrumbParent.path}>{breadcrumbParent.label}</Link>
              </>
            )}
            <span className="separator">/</span>
            <span className="current">{currentPage}</span>
          </div>
        </motion.div>
      </div>

      {subNavItems && subNavItems.length > 0 && (
        <nav className="premium-sub-nav glass-dark">
          <ul>
            {subNavItems.map((item) => (
              <li key={item.path} className={item.label === currentPage ? 'active' : ''}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </section>
  );
}
