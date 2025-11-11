interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  link,
}: ProjectProps) {
  return (
    <div className="border border-neutral-800 rounded-xl p-6 hover:border-indigo-500 transition-colors">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-neutral-400 text-sm mb-4">{description}</p>
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
        Ver en GitHub →
      </a>
    </div>
  );
}
