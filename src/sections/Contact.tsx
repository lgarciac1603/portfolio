import { useState } from "react";
import { motion } from "framer-motion";
import { socialLinks } from "../data/socials";
import { useLanguage } from "../hooks/useLanguage";

export default function Contact() {
  const { t } = useLanguage();
  const [showEmail, setShowEmail] = useState(false);

  const username = "lfgc851";
  const domain = "gmail.com";
  const email = `${username}@${domain}`;

  return (
    <section id="contact" className="py-20 bg-neutral-900 text-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8">
          {t("contact.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg max-w-2xl mx-auto mb-10 text-gray-400">
          {t("contact.description")}
        </motion.p>

        <div className="flex justify-center gap-8 mt-8">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-gray-300 hover:text-indigo-400 transition-colors">
              <social.icon className="w-6 h-6" />
              <span>{social.name}</span>
            </motion.a>
          ))}
        </div>

        <div className="mt-10">
          {!showEmail ? (
            <motion.button
              onClick={() => setShowEmail(true)}
              whileHover={{ scale: 1.05 }}
              className="text-indigo-400 hover:text-indigo-300 transition-colors underline">
              {t("contact.showEmail")}
            </motion.button>
          ) : (
            <motion.a
              href={`mailto:${email}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-indigo-400 hover:text-indigo-300 transition-colors">
              {email}
            </motion.a>
          )}
        </div>

        <p className="text-xs text-neutral-500 mt-6">{t("contact.note")}</p>
      </div>
    </section>
  );
}
