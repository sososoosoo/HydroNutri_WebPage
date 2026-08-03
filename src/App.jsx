import { Routes, Route, Navigate } from 'react-router-dom';
import RouteMeta from './components/RouteMeta';
import Layout from './components/Layout';
import ShopLayout from './components/ShopLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Technology from './pages/Technology';
import Roadmap from './pages/Roadmap';
import News from './pages/News';
import ShopHome from './pages/shop/ShopHome';
import ShopCategory from './pages/shop/ShopCategory';
import ShopProduct from './pages/shop/ShopProduct';
import ShopQuote from './pages/shop/ShopQuote';
import ShopCompany from './pages/shop/ShopCompany';
import ShopBusiness from './pages/shop/ShopBusiness';
import ShopProducts from './pages/shop/ShopProducts';
import ShopNews from './pages/shop/ShopNews';
import Placeholder from './pages/Placeholder';

export default function App() {
  return (
    <>
      <RouteMeta />
      <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Placeholder />} />
      </Route>

      <Route path="/shopHome" element={<ShopLayout />}>
        <Route index element={<ShopHome />} />
        <Route path="company" element={<ShopCompany />} />
        <Route path="business" element={<ShopBusiness />} />
        <Route path="products" element={<ShopProducts />} />
        <Route path="news" element={<ShopNews />} />
        <Route path="quote" element={<ShopQuote />} />
        <Route path="product/:id" element={<ShopProduct />} />
        <Route path=":category" element={<ShopCategory />} />
      </Route>

      <Route path="/products" element={<Navigate to="/shopHome" replace />} />
      <Route path="/products/:category" element={<Navigate to="/shopHome" replace />} />
      <Route path="/quote" element={<Navigate to="/shopHome/quote" replace />} />
      </Routes>
    </>
  );
}
