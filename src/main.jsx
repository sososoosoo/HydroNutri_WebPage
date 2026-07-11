import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './i18n/i18n.js';
import App from './App.jsx';
import './styles/reset.css';
import './styles/global.css';
import './styles/navigation.css';
import './styles/hero.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
