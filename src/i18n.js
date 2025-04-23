import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome to my site!",
      about: "About Me",
      home: "Home",
      nameCreator: "Jesús Alejandro Vera Molina",
      motivationalPhrase: "Learn. Build. Share. Connect. Inspire. Grow."
      // Add more keys here...
    },
  },
  es: {
    translation: {
      welcome: "¡Bienvenido a mi sitio!",
      about: "Sobre mí",
      home: "Casa",
      nameCreator: "Jesús Alejandro Vera Molina",
      motivationalPhrase: "Aprende. Construye. Comparte. Conecta. Inspira. Crece."
      // Add more keys here...
    },
  },
};

// Get saved language or default to English
const savedLang = localStorage.getItem('lang') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

// Update localStorage when language changes
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('lang', lng);
});

export default i18n;
