import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'flag-icon-css/css/flag-icons.min.css';
import App from './App.tsx'
import './i18n'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
