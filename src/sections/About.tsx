import { motion } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";

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

        {/* Badges / Verificaciones */}
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
            {/* HackTheBox badge */}
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

            {/* TryHackMe badge */}
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
      </div>
    </section>
  );
}
