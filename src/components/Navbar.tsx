import BashIcon from "../assets/icons/heart-rate-monitor.svg";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../hooks/useLanguage";

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-neutral-900/70 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span>
          <img
            src={BashIcon}
            className="invert text-sky-400"
            alt="Heart rate monitor"
          />
        </span>
        <div className="flex items-center space-x-6">
          <div className="space-x-6 text-sm text-neutral-300">
            <a href="#about" className="hover:text-white transition-colors">
              {t('nav.about')}
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              {t('nav.projects')}
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              {t('nav.contact')}
            </a>
          </div>
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
}
