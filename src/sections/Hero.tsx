import { HackerBackground } from "../components/ui/hacker-background";
import { useLanguage } from "../hooks/useLanguage";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center text-center px-6 min-h-screen overflow-hidden bg-black"
    >
      {/* Fondo animado */}
      <HackerBackground
        color="#22d3ee"
        fontSize={18}
        speed={2.5}
        className="absolute inset-0 opacity-60"
      />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-100 leading-tight">
          {t("hero.greeting")}{" "}
          <span className="text-indigo-400">Fernando</span>,{" "}
          {t("hero.alsoKnown")}{" "}
          <span className="text-indigo-400">Incuerd0</span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-8 mx-auto leading-relaxed">
          {t("hero.subtitle")}
        </p>

        <a
          href="#projects"
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg transition-all shadow-lg shadow-indigo-500/30"
        >
          {t("hero.viewProjects")}
        </a>
      </div>

      {/* Gradiente inferior */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
