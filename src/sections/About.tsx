import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-neutral-950 text-gray-200">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center text-gray-100">
          Sobre mí
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="max-w-3xl mx-auto text-lg leading-relaxed text-center text-gray-400">
          <p className="mb-6">
            Soy un desarrollador especializado en{" "}
            <strong>
              ciberseguridad, cloud computing y desarrollo full stack
            </strong>
            . Me interesa construir soluciones donde la{" "}
            <strong>eficiencia, la seguridad</strong>y la{" "}
            <strong>escalabilidad</strong> sean principios fundamentales del
            diseño.
          </p>
          <p className="mb-6">
            Tengo experiencia trabajando con entornos modernos basados en{" "}
            <strong>React, Angular, .NET y Python</strong>, integrando prácticas
            de <strong>DevSecOps</strong> y estrategias de arquitectura limpia
            en proyectos tanto personales como profesionales.
          </p>
          <p className="mb-6">
            Mi enfoque combina la <strong>mentalidad analítica</strong> de la
            seguridad informática con la <strong>creatividad técnica</strong>
            del desarrollo. Busco siempre comprender cómo cada capa —desde la
            infraestructura hasta la interfaz— puede fortalecerse para ofrecer
            software confiable y de alto rendimiento.
          </p>
          <p>
            Actualmente me encuentro expandiendo mis conocimientos en{" "}
            <strong>
              infraestructura cloud, automatización y metodologías de seguridad
              ofensiva
            </strong>
            , aplicando estos principios al desarrollo de aplicaciones modernas
            y resilientes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
