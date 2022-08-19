import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AdiagoRoot } from '@adiago/components';
import '@adiago/components/dist/index.css';
import App from './app';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AdiagoRoot>
        <App />
      </AdiagoRoot>
    </BrowserRouter>
  </React.StrictMode>
);
