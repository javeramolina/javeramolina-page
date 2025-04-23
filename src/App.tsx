import { useTranslation } from 'react-i18next';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Service from './components/Service.js';



export default function App() {
  const { t } = useTranslation();

  return (
    <div>
      
      <Header title={t('welcome')} />
      <Home title={t('home')} />
      <Service></Service>
      <About/>
    </div>
  );
}
