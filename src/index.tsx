import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';

const root = createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
