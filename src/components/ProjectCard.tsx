import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import type { ProjectProps } from "../lib/interfaces";

export default function ProjectCard({
  id,
  titleKey,
  descriptionKey,
  tech,
}: ProjectProps) {
  const { t } = useLanguage();

  return (
    <div className="border border-neutral-800 rounded-xl p-6 hover:border-indigo-500 transition-colors">
      <h3 className="text-xl font-semibold mb-2">{t(titleKey)}</h3>

      <p className="text-neutral-400 text-sm mb-4">{t(descriptionKey)}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs bg-neutral-800 px-2 py-1 rounded-md text-neutral-300">
            {t}
          </span>
        ))}
      </div>

      <Link
        to={`/projects/${id}`}
        className="text-indigo-400 text-sm hover:underline">
        {t("projects.details")}
      </Link>
    </div>
  );
}
