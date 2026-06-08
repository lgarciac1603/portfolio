import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { caseStudies } from "../data/caseStudies";
import { useLanguage } from "../hooks/useLanguage";
import type { Language } from "../hooks/useLanguage";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.4, ease: "easeOut" as const },
  }),
};

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
      <span className="w-1 h-5 bg-indigo-500 rounded-full shrink-0" />
      {children}
    </h2>
  );
}

function ArchitectureDiagram({ lang }: { lang: Language }) {
  const labels = {
    es: { frontend: "Frontend", proxy: "Proxy", backends: "Backends", storage: "Storage", external: "Externo" },
    en: { frontend: "Frontend", proxy: "Proxy", backends: "Backends", storage: "Storage", external: "External" },
  };
  const l = labels[lang];

  return (
    <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-900/40 p-6">
      <div className="min-w-[520px] space-y-2 text-xs">
        {/* Frontend */}
        <div className="flex items-center gap-4">
          <span className="w-20 text-right text-neutral-500 shrink-0">{l.frontend}</span>
          <div className="flex-1 flex justify-center">
            <div className="border border-indigo-700/50 bg-indigo-950/40 rounded-xl px-8 py-3 text-center">
              <p className="font-semibold text-indigo-300">Angular 20</p>
              <p className="text-neutral-500 mt-0.5">NgRx · ECharts · SCSS · TypeScript</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center pl-20">
          <div className="w-px h-5 bg-neutral-700" />
        </div>

        {/* Nginx */}
        <div className="flex items-center gap-4">
          <span className="w-20 text-right text-neutral-500 shrink-0">{l.proxy}</span>
          <div className="flex-1 flex justify-center">
            <div className="border border-neutral-700 bg-neutral-900 rounded-xl px-8 py-3 text-center">
              <p className="font-semibold text-neutral-200">Nginx Reverse Proxy</p>
              <p className="text-neutral-500 mt-0.5">/api-backend · /api-favorites · /api-cache</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center pl-20">
          <div className="w-px h-5 bg-neutral-700" />
        </div>

        {/* Three services */}
        <div className="flex items-center gap-4">
          <span className="w-20 text-right text-neutral-500 shrink-0">{l.backends}</span>
          <div className="flex-1 grid grid-cols-3 gap-3">
            <div className="border border-orange-700/40 bg-orange-950/20 rounded-xl px-3 py-3 text-center">
              <p className="font-semibold text-orange-300">C++ REST API</p>
              <p className="text-neutral-500 mt-0.5">Auth · JWT</p>
              <p className="text-neutral-600 mt-1">:8080</p>
            </div>
            <div className="border border-cyan-700/40 bg-cyan-950/20 rounded-xl px-3 py-3 text-center">
              <p className="font-semibold text-cyan-300">Go Service</p>
              <p className="text-neutral-500 mt-0.5">Favorites</p>
              <p className="text-neutral-600 mt-1">:8090</p>
            </div>
            <div className="border border-rose-700/40 bg-rose-950/20 rounded-xl px-3 py-3 text-center">
              <p className="font-semibold text-rose-300">Rust Proxy</p>
              <p className="text-neutral-500 mt-0.5">Cache</p>
              <p className="text-neutral-600 mt-1">:8070</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center pl-20">
          <div className="w-px h-5 bg-neutral-700" />
        </div>

        {/* Storage */}
        <div className="flex items-center gap-4">
          <span className="w-20 text-right text-neutral-500 shrink-0">{l.storage}</span>
          <div className="flex-1 grid grid-cols-3 gap-3">
            <div className="border border-neutral-700 bg-neutral-900 rounded-xl px-3 py-3 text-center col-span-2">
              <p className="font-semibold text-neutral-300">PostgreSQL</p>
              <p className="text-neutral-500 mt-0.5">Users · Auth · Favorites · :5432</p>
            </div>
            <div className="border border-neutral-700 bg-neutral-900 rounded-xl px-3 py-3 text-center">
              <p className="font-semibold text-neutral-300">Redis</p>
              <p className="text-neutral-500 mt-0.5">Cache · 60s TTL</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end pr-[calc(16.66%-4px)] pl-20">
          <div className="w-px h-5 bg-neutral-700" />
        </div>

        {/* External */}
        <div className="flex items-center gap-4">
          <span className="w-20 text-right text-neutral-500 shrink-0">{l.external}</span>
          <div className="flex-1 flex justify-end">
            <div className="border border-yellow-700/40 bg-yellow-950/20 rounded-xl px-5 py-3 text-center w-1/3">
              <p className="font-semibold text-yellow-300">CoinGecko API</p>
              <p className="text-neutral-500 mt-0.5">Market Data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectDetails() {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);
  const caseStudy = caseStudies.find((c) => c.projectId === id);
  const lang = language as Language;

  if (!project) {
    return (
      <h1 className="max-w-4xl mx-auto py-20 px-6 text-center text-2xl">
        {t("projects.projectNotFound")}
      </h1>
    );
  }

  return (
    <section id="project-details" className="py-6 px-6 pb-24">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-10"
        >
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center rounded-full border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-200 transition hover:border-indigo-500 hover:text-indigo-300"
          >
            ← {t("projects.goBack")}
          </button>
        </motion.div>

        {/* Hero */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
            {t(project.titleKey)}
          </h1>
          <p className="text-neutral-400 leading-7 text-lg mb-8 max-w-3xl">
            {t(project.descriptionKey)}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.linkPage && (
              <a
                href={project.linkPage}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
              >
                {t("projects.caseStudy.liveDemo")}
              </a>
            )}
            <a
              href={project.linkCode}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-neutral-700 px-5 py-2.5 text-sm font-semibold text-neutral-200 transition hover:border-indigo-500 hover:text-indigo-300"
            >
              {t("projects.caseStudy.sourceCode")}
            </a>
          </div>
        </motion.div>

        {/* Case study sections */}
        {project.showCaseStudy && caseStudy && (
          <>
            <div className="border-t border-neutral-800 my-10" />

            {/* Overview */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-12"
            >
              <SectionTitle>{t("projects.caseStudy.overview")}</SectionTitle>
              <p className="text-neutral-400 leading-7">
                {caseStudy.overview[lang]}
              </p>
            </motion.div>

            {/* Technical Highlights */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-12"
            >
              <SectionTitle>{t("projects.caseStudy.highlights")}</SectionTitle>
              <div className="grid sm:grid-cols-2 gap-4">
                {caseStudy.highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xl leading-none mt-0.5">{h.icon}</span>
                      <div>
                        <p className="font-semibold text-neutral-200 mb-1">
                          {h.title[lang]}
                        </p>
                        <p className="text-sm text-neutral-400 leading-6">
                          {h.desc[lang]}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Architecture — only for projects with a known diagram */}
            {id === "cryptoDashboard" && (
              <motion.div
                custom={3}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mb-12"
              >
                <SectionTitle>{t("projects.caseStudy.architecture")}</SectionTitle>
                <ArchitectureDiagram lang={lang} />
              </motion.div>
            )}

            {/* Challenges */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-12"
            >
              <SectionTitle>{t("projects.caseStudy.challenges")}</SectionTitle>
              <ul className="space-y-5">
                {caseStudy.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-indigo-700/50 bg-indigo-950/30 text-xs font-semibold text-indigo-300">
                      {i + 1}
                    </span>
                    <p className="text-neutral-400 leading-7">{c[lang]}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Learnings */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-12"
            >
              <SectionTitle>{t("projects.caseStudy.learnings")}</SectionTitle>
              <ul className="space-y-4">
                {caseStudy.learnings.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                    <p className="text-neutral-400 leading-7">{item[lang]}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
