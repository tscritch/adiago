import React from 'react';
import ReactDOM from 'react-dom/client';
import { AdiagoRoot } from '@adiago/components';
import '@adiago/components/dist/index.css';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AdiagoRoot>
      <App />
    </AdiagoRoot>
  </React.StrictMode>
);
