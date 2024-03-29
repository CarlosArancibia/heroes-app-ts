import React from 'react';
import ReactDOM from 'react-dom/client';
import { HeroesApp } from './HeroesApp';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import '@fontsource-variable/onest';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>
);
