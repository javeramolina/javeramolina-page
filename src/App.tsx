import { useTranslation } from 'react-i18next';
import {Header} from './components/Header';
import {Home} from './components/Home';
import About from './components/About';
import Service from './components/Service';
import SocialNetworks from './components/SocialNetworks'
import WhyWorkWithMe from './components/WhyWorkWithMe'
import Projects from './components/Projects'



export default function App() {
  const { t } = useTranslation();

  return (
    <div>
      
      <Header title={t('welcome')} />
      <Home title={t('home')} />
      <Service></Service>
      <SocialNetworks></SocialNetworks>
      <WhyWorkWithMe></WhyWorkWithMe>
      <Projects></Projects>
      <About/>
    </div>
  );
}
