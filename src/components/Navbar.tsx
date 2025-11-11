import BashIcon from "../assets/icons/heart-rate-monitor.svg";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-neutral-900/70 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span>
          <img
            src={BashIcon}
            className="invert  text-sky-400"
            alt="Heart rate monitor"
          />
        </span>
        <div className="space-x-6 text-sm text-neutral-300">
          <a href="#about" className="hover:text-white transition-colors">
            Sobre mí
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Proyectos
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}
