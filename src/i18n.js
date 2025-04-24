import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome to my site!",
      about: "About Me",
      home: "Home",
      nameCreator: "Jesús Alejandro Vera Molina",
      motivationalPhrase: "Learn. Build. Share. Connect. Inspire. Grow.",
      whyMeTitle: "Why Work With Me",
      whyMeText: "I'm a passionate software developer who enjoys turning ideas into real, working solutions. I believe in clear communication, collaboration, and growing together, not just on a technical level, but as people with shared goals and curiosity. I’m genuinely interested in business and how technology can help ideas grow. Lately, I’ve been creating content on YouTube to share what I learn, explore new tools, and connect with others who love building and learning too. Whether it's code, conversation, or a new business idea, I'm always open to exchanging knowledge and creating something meaningful together. ",
      developSkillsTitle: "DEVELOPMENT SKILLS",
      developSkillsText: "Over 12 years of experience with Java, Spring Boot, Angular, and cloud platforms like GCP and AWS. I enjoy solving real-world problems, working with people, and turning ideas into meaningful projects or businesses. I believe in using tech to make a difference.",
      projectTitle: "Completed Projects",
      projectText: "The current projects are just examples for now. Real ones will be available soon — stay tuned!",
      byFor: "By",
      project1Text: "Designed and developed a modern platform for purchasing second-hand cars online.", 
      project2Text: "Created a custom video editing and upload web app for this awesome team",
      detailText: "details",
      projectNameText: "Project",
      contactTitle: "Contact details",
      contactStartText: "For any kind of project, feel free to reach out to me. You can contact me directly at",
      contactEndText: "or if you prefer, you can also message me on WhatsApp using the button on this page.",
      hiThereTitle: "Hi there I'm JVera",
      hiThereText:"Every great project starts with a simple idea and the courage to act. If you’ve got one, let’s connect and make it happen",
      copyrightText: "All rights reserved.",
      nameText: "Name",
      projectDetailsText: "Project details",
      buttonSubmitText: "Submit"
     
     
    },
  },
  es: {
    translation: {
      welcome: "¡Bienvenido a mi sitio!",
      about: "Sobre mí",
      home: "Casa",
      nameCreator: "Jesús Alejandro Vera Molina",
      motivationalPhrase: "Aprende. Construye. Comparte. Conecta. Inspira. Crece.",
      whyMeTitle: "Por qué trabajar conmigo",
      whyMeText: "Soy un desarrollador de software apasionado que disfruta convertir ideas en soluciones reales y funcionales. Creo en la comunicación clara, la colaboración y en crecer juntos, no solo a nivel técnico, sino también como personas con metas y curiosidad compartidas. Me interesa genuinamente el mundo de los negocios y cómo la tecnología puede ayudar a que las ideas crezcan. Últimamente he estado creando contenido en YouTube para compartir lo que aprendo, explorar nuevas herramientas y conectar con otros que también disfrutan construir y aprender. Ya sea código, una conversación o una nueva idea de negocio, siempre estoy abierto a intercambiar conocimientos y crear algo significativo en conjunto.",
      developSkillsTitle: "Habilidades de Desarrollo",
      developSkillsText: "Más de 12 años de experiencia con Java, Spring Boot, Angular y plataformas cloud como GCP y AWS. Disfruto resolver problemas reales, colaborar con personas y convertir ideas en proyectos o negocios con propósito. Creo en la tecnología para generar impacto.",
      projectTitle: "Proyectos finalizados",
      projectText: "Los proyectos actuales son ficticios. Muy pronto agregaré los reales — ¡gracias por tu paciencia!",
      byFor: "Por",
      project1Text: "Diseñé y desarrollé una plataforma moderna para comprar autos usados en línea", 
      project2Text: "Creé una aplicación web personalizada para edición y carga de videos para este increíble equipo.",
      detailText: "detalles",
      projectNameText: "Proyecto",
      contactTitle: "Datos de contacto",
      contactStartText: "Para cualquier tipo de proyecto, no dudes en ponerte en contacto conmigo. Puedes escribirme directamente a",
      contactEndText: "o, si lo prefieres, enviarme un mensaje por WhatsApp desde el botón en esta página.",
      hiThereTitle: "Hola, soy JVera,",
      hiThereText:"Todo gran proyecto comienza con una idea sencilla y el valor para actuar. Si tienes una, conectemos y hagámosla realidad.",
      copyrightText: "Todos los derechos reservados.",
      nameText: "Nombre",
      projectDetailsText: "Detalles proyectos",
      buttonSubmitText: "Enviar"
     
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
