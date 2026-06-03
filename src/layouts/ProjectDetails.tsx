import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { useLanguage } from "../hooks/useLanguage";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <h1 className="max-w-4xl mx-auto py-20 px-6 text-center text-2xl">
        {t("projects.projectNotFound")}
      </h1>
    );
  }

  return (
    <section id="project-details" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center rounded-full border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-200 transition hover:border-indigo-500 hover:text-indigo-300">
            ← {t("projects.goBack")}
          </button>
        </div>

        <div className="rounded-[2rem] border border-neutral-800 bg-neutral-950 p-10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            {t(project.titleKey)}
          </h1>
          <p className="max-w-3xl text-neutral-400 leading-8 text-lg mb-10">
            {t(project.descriptionKey)}
          </p>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Tecnologías</h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-neutral-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={project.linkPage}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500">
              {t("projects.viewGithub")}
            </a>
            <a
              href={project.linkCode}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-200 transition hover:border-indigo-500 hover:text-indigo-300">
              {t("projects.viewGithubCode")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
