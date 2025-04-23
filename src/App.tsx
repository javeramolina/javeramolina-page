import React from 'react';
import { useTranslation } from 'react-i18next';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';


export default function App() {
  const { t } = useTranslation();

  return (
    <div>
      
      <Header title={t('welcome')} />
      <Home title={t('home')} />
      <Services></Services>
      <About title={t('about')} />
    </div>
  );
}
