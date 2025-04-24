import { useTranslation } from 'react-i18next';
import About from './components/About';
import Service from './components/Service';
import SocialNetworks from './components/SocialNetworks'
import WhyWorkWithMe from './components/WhyWorkWithMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Copyright from './components/Copyright.tsx'

export default function App() {
  const { t } = useTranslation();

  return (
    <div>
      <Service nameCreator={t('nameCreator')} motivationalPhrase={t('motivationalPhrase')} ></Service>
      <SocialNetworks></SocialNetworks>
      <WhyWorkWithMe 
       whyMeTitle={t('whyMeTitle')}
       whyMeText={t('whyMeText')}
       developSkillsTitle={t('developSkillsTitle')}
       developSkillsText={t('developSkillsText')}
       ></WhyWorkWithMe>
      <Projects></Projects>
      <Contact></Contact>
      <About/>         
      <Copyright></Copyright>         
    </div>
  );
}
