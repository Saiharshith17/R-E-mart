import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import { HashRouter } from 'react-router-dom';  // Change to HashRouter
import { CartProvider } from './stores/context/CartContext.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <React.StrictMode>
      <CartProvider>
        <App />
      </CartProvider>
    </React.StrictMode>
  </HashRouter>
);
