import { useLanguage } from "../hooks/useLanguage";

interface ProjectProps {
  id: string;
  titleKey: string;
  descriptionKey: string;
  tech: string[];
  link: string;
}

export default function ProjectCard({
  titleKey,
  descriptionKey,
  tech,
  link,
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
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-400 text-sm hover:underline">
        {t('projects.viewGithub')}
      </a>
    </div>
  );
}
