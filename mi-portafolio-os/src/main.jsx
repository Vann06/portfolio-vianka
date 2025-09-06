import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Initialize i18n once at app startup
import './i18n'
import './styles/cat.css';
import './styles/post.css';
import { WindowProvider } from './context/WindowContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);