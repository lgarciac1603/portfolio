import { motion } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-neutral-950 text-gray-200">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center text-gray-100">
          {t('about.title')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="max-w-3xl mx-auto text-lg leading-relaxed text-center text-gray-400">
          <p className="mb-6">
            {t('about.intro')}{" "}
            <strong>
              {t('about.specialties')}
            </strong>
            {t('about.principles')}{" "}
            <strong>{t('about.values')}</strong> y la{" "}
            <strong>{t('about.scalability')}</strong> {t('about.fundamentals')}
          </p>
          <p className="mb-6">
            {t('about.experience')}{" "}
            <strong>{t('about.technologies')}</strong>{t('about.practices')} <strong>{t('about.devsecops')}</strong> {t('about.architecture')}
          </p>
          <p className="mb-6">
            {t('about.mindset')} <strong>{t('about.analytical')}</strong> {t('about.security')} <strong>{t('about.creativity')}</strong> {t('about.development')}
          </p>
          <p>
            {t('about.current')}{" "}
            <strong>
              {t('about.expanding')}
            </strong>
            {t('about.applying')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
