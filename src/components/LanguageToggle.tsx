import { Languages } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  const handleToggle = () => {
    console.log('Language toggle clicked, current language:', language);
    toggleLanguage();
  };

  return (
    <button
      onClick={handleToggle}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-all duration-300 text-sm border border-neutral-700 hover:border-indigo-400"
      title={`Switch to ${language === 'es' ? 'English' : 'Español'}`}
    >
      <Languages className="w-4 h-4" />
      <span className="font-medium">
        {language === 'es' ? 'ES' : 'EN'}
      </span>
    </button>
  );
}