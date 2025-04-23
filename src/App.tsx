import React from 'react';
import { useTranslation } from 'react-i18next';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Service from './components/Service';



export default function App() {
  const { t } = useTranslation();

  return (
    <div>
      
      <Header title={t('welcome')} />
      <Home title={t('home')} />
      <Service></Service>
      <About title={t('about')} />
    </div>
  );
}
