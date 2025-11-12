import { useState, useEffect, createContext, useContext } from 'react';
import type { ReactNode } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

// Definir traducciones con tipado más estricto
type TranslationKey = 
  | 'nav.about' | 'nav.projects' | 'nav.contact'
  | 'hero.greeting' | 'hero.alsoKnown' | 'hero.subtitle' | 'hero.viewProjects'
  | 'about.title' | 'about.description' | 'about.intro' | 'about.specialties' | 'about.principles' | 'about.values' | 'about.scalability' | 'about.fundamentals' | 'about.experience' | 'about.technologies' | 'about.practices' | 'about.devsecops' | 'about.architecture' | 'about.mindset' | 'about.analytical' | 'about.security' | 'about.creativity' | 'about.development' | 'about.current' | 'about.expanding' | 'about.applying'
  | 'projects.title' | 'projects.featured' | 'projects.viewGithub'
  | 'projects.cryptoDashboard.title' | 'projects.cryptoDashboard.description'
  | 'projects.htbTracker.title' | 'projects.htbTracker.description'
  | 'projects.portfolio.title' | 'projects.portfolio.description'
  | 'contact.title' | 'contact.subtitle' | 'contact.description'
  | 'skills.languages' | 'skills.frontend' | 'skills.backend' | 'skills.cloud' | 'skills.cybersecurity' | 'skills.tools' | 'skills.other'
  | 'level.advanced' | 'level.intermediate' | 'level.basic' | 'level.active' | 'level.currentStudy' | 'level.exploration'
  | 'footer.rights';

type Translations = Record<TranslationKey, string>;

// Traducciones en español
const esTranslations: Translations = {
  // Navbar
  'nav.about': 'Sobre mí',
  'nav.projects': 'Proyectos',
  'nav.contact': 'Contacto',
  
  // Hero Section
  'hero.greeting': '¡Hola! Te saluda',
  'hero.alsoKnown': 'tambien conocido como',
  'hero.subtitle': 'Desarrollador Full Stack y hacker ético. Apasionado por la tecnología, la seguridad, cloud y los sistemas complejos.',
  'hero.viewProjects': 'Ver proyectos',
  
  // About Section
  'about.title': 'Sobre mí',
  'about.description': 'Soy un desarrollador apasionado por crear soluciones innovadoras y seguras.',
  'about.intro': 'Soy un desarrollador especializado en',
  'about.specialties': 'ciberseguridad, cloud computing y desarrollo full stack',
  'about.principles': '. Me interesa construir soluciones donde la',
  'about.values': 'eficiencia, la seguridad',
  'about.scalability': 'escalabilidad',
  'about.fundamentals': 'sean principios fundamentales del diseño.',
  'about.experience': 'Tengo experiencia trabajando con entornos modernos basados en',
  'about.technologies': 'React, Angular, .NET y Python',
  'about.practices': ', integrando prácticas de',
  'about.devsecops': 'DevSecOps',
  'about.architecture': 'y estrategias de arquitectura limpia en proyectos tanto personales como profesionales.',
  'about.mindset': 'Mi enfoque combina la',
  'about.analytical': 'mentalidad analítica',
  'about.security': 'de la seguridad informática con la',
  'about.creativity': 'creatividad técnica',
  'about.development': 'del desarrollo. Busco siempre comprender cómo cada capa —desde la infraestructura hasta la interfaz— puede fortalecerse para ofrecer software confiable y de alto rendimiento.',
  'about.current': 'Actualmente me encuentro expandiendo mis conocimientos en',
  'about.expanding': 'infraestructura cloud, automatización y metodologías de seguridad ofensiva',
  'about.applying': ', aplicando estos principios al desarrollo de aplicaciones modernas y resilientes.',
  
  // Projects Section
  'projects.title': 'Proyectos',
  'projects.featured': 'Proyectos destacados',
  'projects.viewGithub': 'Ver en GitHub →',
  'projects.cryptoDashboard.title': 'Crypto Dashboard',
  'projects.cryptoDashboard.description': 'App en Angular que muestra precios y gráficas en tiempo real.',
  'projects.htbTracker.title': 'HackTheBox Tracker',
  'projects.htbTracker.description': 'App para registrar walkthroughs y progresos en HTB.',
  'projects.portfolio.title': 'Portfolio',
  'projects.portfolio.description': 'Tu página personal, hecha en React + Tailwind.',
  
  // Contact Section
  'contact.title': 'Contacto',
  'contact.subtitle': 'Hablemos sobre tu próximo proyecto',
  'contact.description': 'Si te interesa colaborar, discutir ideas o simplemente intercambiar conocimiento sobre desarrollo, seguridad o filosofía, puedes contactarme a través de mis redes o correo.',
  
  // Skills Categories
  'skills.languages': 'Lenguajes',
  'skills.frontend': 'Frameworks & Frontend',
  'skills.backend': 'Backend & APIs',
  'skills.cloud': 'Cloud & DevOps',
  'skills.cybersecurity': 'Ciberseguridad',
  'skills.tools': 'Herramientas',
  'skills.other': 'Otros Intereses',
  
  // Skill Levels
  'level.advanced': 'Avanzado',
  'level.intermediate': 'Intermedio',
  'level.basic': 'Básico',
  'level.active': 'Activo',
  'level.currentStudy': 'Estudio actual',
  'level.exploration': 'Exploración',
  
  // Footer
  'footer.rights': 'Todos los derechos reservados.',
};

// Traducciones en inglés
const enTranslations: Translations = {
  // Navbar
  'nav.about': 'About',
  'nav.projects': 'Projects',
  'nav.contact': 'Contact',
  
  // Hero Section
  'hero.greeting': 'Hello! I\'m',
  'hero.alsoKnown': 'also known as',
  'hero.subtitle': 'Full Stack Developer and ethical hacker. Passionate about technology, security, cloud and complex systems.',
  'hero.viewProjects': 'View projects',
  
  // About Section
  'about.title': 'About me',
  'about.description': 'I\'m a developer passionate about creating innovative and secure solutions.',
  'about.intro': 'I\'m a developer specialized in',
  'about.specialties': 'cybersecurity, cloud computing and full stack development',
  'about.principles': '. I\'m interested in building solutions where',
  'about.values': 'efficiency, security',
  'about.scalability': 'scalability',
  'about.fundamentals': 'are fundamental design principles.',
  'about.experience': 'I have experience working with modern environments based on',
  'about.technologies': 'React, Angular, .NET and Python',
  'about.practices': ', integrating',
  'about.devsecops': 'DevSecOps',
  'about.architecture': 'practices and clean architecture strategies in both personal and professional projects.',
  'about.mindset': 'My approach combines the',
  'about.analytical': 'analytical mindset',
  'about.security': 'of computer security with the',
  'about.creativity': 'technical creativity',
  'about.development': 'of development. I always seek to understand how each layer —from infrastructure to interface— can be strengthened to deliver reliable and high-performance software.',
  'about.current': 'I\'m currently expanding my knowledge in',
  'about.expanding': 'cloud infrastructure, automation and offensive security methodologies',
  'about.applying': ', applying these principles to the development of modern and resilient applications.',
  
  // Projects Section
  'projects.title': 'Projects',
  'projects.featured': 'Featured Projects',
  'projects.viewGithub': 'View on GitHub →',
  'projects.cryptoDashboard.title': 'Crypto Dashboard',
  'projects.cryptoDashboard.description': 'Angular app that displays real-time prices and charts.',
  'projects.htbTracker.title': 'HackTheBox Tracker',
  'projects.htbTracker.description': 'App to track walkthroughs and progress in HTB.',
  'projects.portfolio.title': 'Portfolio',
  'projects.portfolio.description': 'Your personal website, built with React + Tailwind.',
  
  // Contact Section
  'contact.title': 'Contact',
  'contact.subtitle': 'Let\'s talk about your next project',
  'contact.description': 'If you\'re interested in collaborating, discussing ideas or simply exchanging knowledge about development, security or philosophy, you can contact me through my social media or email.',
  
  // Skills Categories
  'skills.languages': 'Languages',
  'skills.frontend': 'Frameworks & Frontend',
  'skills.backend': 'Backend & APIs',
  'skills.cloud': 'Cloud & DevOps',
  'skills.cybersecurity': 'Cybersecurity',
  'skills.tools': 'Tools',
  'skills.other': 'Other Interests',
  
  // Skill Levels
  'level.advanced': 'Advanced',
  'level.intermediate': 'Intermediate',
  'level.basic': 'Basic',
  'level.active': 'Active',
  'level.currentStudy': 'Currently studying',
  'level.exploration': 'Exploration',
  
  // Footer
  'footer.rights': 'All rights reserved.',
};

// Objeto de traducciones
const translations = {
  es: esTranslations,
  en: enTranslations,
};

// Crear el Context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider Component
interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    // Intentar obtener el idioma del localStorage, sino usar 'es' por defecto
    const saved = localStorage.getItem('portfolio-language') as Language;
    return saved && (saved === 'es' || saved === 'en') ? saved : 'es';
  });

  // Guardar el idioma en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
    console.log('Language changed to:', language); // Debug log
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLang = prev === 'es' ? 'en' : 'es';
      console.log('Toggling language from', prev, 'to', newLang); // Debug log
      return newLang;
    });
  };

  const t = (key: string): string => {
    const translation = translations[language][key as TranslationKey];
    if (!translation) {
      console.warn(`Translation missing for key: ${key} in language: ${language}`);
      return key;
    }
    return translation;
  };

  const value = {
    language,
    toggleLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook para usar el Context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};