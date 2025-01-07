import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom/client";
import App from './App';

import './app.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)