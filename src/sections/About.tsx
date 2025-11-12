import { motion } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
import { coreSkills, secondarySkills } from "../data/skills";

export default function About() {
  const { t } = useLanguage();

  const htbBadgeImg = "https://www.hackthebox.com/badge/image/20709";
  const thmBadgeImg = "https://tryhackme-badges.s3.amazonaws.com/Incuerd0.png";

  return (
    <section id="about" className="py-20 bg-neutral-950 text-gray-200">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center text-gray-100">
          {t("about.title")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="max-w-3xl mx-auto text-lg leading-relaxed text-center text-gray-400">
          <p className="mb-6">
            {t("about.intro")} <strong>{t("about.specialties")}</strong>
            {t("about.principles")} <strong>{t("about.values")}</strong>{" "}
            <strong>{t("about.scalability")}</strong> {t("about.fundamentals")}
          </p>

          <p className="mb-6">
            {t("about.experience")} <strong>{t("about.technologies")}</strong>
            {t("about.practices")} <strong>{t("about.devsecops")}</strong>{" "}
            {t("about.architecture")}
          </p>

          <p className="mb-6">
            {t("about.mindset")} <strong>{t("about.analytical")}</strong>{" "}
            {t("about.security")} <strong>{t("about.creativity")}</strong>{" "}
            {t("about.development")}
          </p>

          <p className="mb-6">
            {t("about.current")} <strong>{t("about.expanding")}</strong>
            {t("about.applying")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-gray-100 mb-4">
            {t("about.badgesTitle") ?? "Verificaciones y badges"}
          </h3>
          <p className="text-sm text-gray-400 mb-6">
            {t("about.badgesDescription") ??
              "Reconocimientos públicos en plataformas de ciberseguridad."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://app.hackthebox.com/profile/20709"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              aria-label="HackTheBox profile">
              <img
                src={htbBadgeImg}
                alt="HackTheBox badge"
                className="w-64 object-contain rounded-md border border-neutral-800 bg-neutral-900 p-1.5"
                loading="lazy"
              />
            </a>

            <a
              href="https://tryhackme.com/p/Incuerd0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              aria-label="TryHackMe profile">
              <img
                src={thmBadgeImg}
                alt="TryHackMe badge"
                className="w-60 object-contain rounded-md border border-neutral-800 bg-neutral-900 p-1.5"
                loading="lazy"
              />
            </a>
          </div>

          <p className="text-xs text-neutral-500 mt-4">
            {t("about.badgesNote") ??
              "Los badges son públicos y se usan aquí como muestra de actividad en plataformas de CTF y aprendizaje."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-20 max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-center text-gray-100 mb-10">
            {t("skills.title")}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {coreSkills.map((category, i) => (
              <div
                key={i}
                className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 shadow-md">
                <h4 className="text-lg font-semibold mb-4 text-gray-100 text-center">
                  {t(category.categoryKey)}
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  {category.items.map((skill, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between items-center border-b border-neutral-800 pb-1">
                      <span>{skill.name}</span>
                      <span className="text-neutral-500 text-xs">
                        {t(skill.levelKey)} · {skill.years}{" "}
                        {t("years") ?? "años"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-gray-400 mb-3">
              {t("skills.other") ?? "Otras tecnologías y herramientas"}:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {secondarySkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-gray-400">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
