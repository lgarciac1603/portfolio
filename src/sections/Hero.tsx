import { useLanguage } from "../hooks/useLanguage";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="h-[90vh] flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        {t("hero.greeting")} <span className="text-indigo-400">Fernando</span>,{" "}
        {t("hero.alsoKnown")} <span className="text-indigo-400">Incuerd0</span>
      </h1>
      <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-8">
        {t("hero.subtitle")}
      </p>
      <a
        href="#projects"
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg transition-all">
        {t("hero.viewProjects")}
      </a>
    </section>
  );
}
