import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { WindowProvider } from './context/WindowContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);