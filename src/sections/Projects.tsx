import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { useLanguage } from "../hooks/useLanguage";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">
        {t('projects.featured')}
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}
