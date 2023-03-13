import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './components/GlobalStyle';
import { App } from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
