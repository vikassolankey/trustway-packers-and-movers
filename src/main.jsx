import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRoot from './AppRoot.jsx';
import './index.css';

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(
    <StrictMode>
      <AppRoot />
    </StrictMode>,
  );
}
