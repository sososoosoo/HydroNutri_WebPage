import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Technology from './pages/Technology';
import Roadmap from './pages/Roadmap';
import Placeholder from './pages/Placeholder';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        {/* About */}
        <Route path="/about" element={<About />} />
        {/* Technology */}
        <Route path="/technology" element={<Technology />} />
        {/* Roadmap */}
        <Route path="/roadmap" element={<Roadmap />} />
        {/* Contact */}
        <Route path="/contact" element={<Contact />} />
        {/* 404 */}
        <Route path="*" element={<Placeholder />} />
      </Route>
    </Routes>
  );
}
