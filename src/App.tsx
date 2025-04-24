import { useTranslation } from 'react-i18next';
import About from './components/About';
import Service from './components/Service';
import SocialNetworks from './components/SocialNetworks'
import WhyWorkWithMe from './components/WhyWorkWithMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Copyright from './components/Copyright.tsx'

import WhatsAppButton from './components/WhatAppButton.tsx';

export default function App() {
  const { t } = useTranslation();

  return (
    <div>
      <Service nameCreator={t('nameCreator')} motivationalPhrase={t('motivationalPhrase')} ></Service>
      <SocialNetworks></SocialNetworks>
      <WhyWorkWithMe></WhyWorkWithMe>
      <Projects></Projects>
      <Contact></Contact>
      <About/>    
       <WhatsAppButton />
      <Footer></Footer>
      <Copyright></Copyright>         
    </div>
  );
}
