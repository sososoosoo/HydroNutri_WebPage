import { Outlet } from 'react-router-dom';
import ShopHeader from './ShopHeader';
import ShopFooter from './ShopFooter';
import ScrollToTop from './ScrollToTop';
import '../styles/shop.css';

export default function ShopLayout() {
  return (
    <div className="shop-root">
      <ShopHeader />
      <main className="shop-main">
        <Outlet />
      </main>
      <ShopFooter />
      <ScrollToTop />
    </div>
  );
}
