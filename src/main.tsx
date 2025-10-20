import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import './styles/responsive.scss';
import './styles/global.scss';
import './i18n';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
