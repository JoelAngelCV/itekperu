'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Users, Target, Lightbulb } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

export default function QuienesSomos() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Breadcrumb */}
      <nav className="bg-muted/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-primary hover:underline">Inicio</Link>
            <span className="text-foreground/50">/</span>
            <span className="text-foreground">Quiénes Somos</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Quiénes Somos
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              ITEK PERÚ - Expertos en soluciones de climatización con compromiso con la excelencia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md p-8 border border-border mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Sobre ITEK PERÚ</h2>
            <p className="text-foreground/70 mb-4">
              ITEK PERÚ es una empresa especializada en soluciones integrales de climatización y aire acondicionado 
              ubicada en el Perú. Contamos con más de una década de experiencia brindando servicios profesionales 
              a residencias, pequeños comercios y grandes industrias.
            </p>
            <p className="text-foreground/70 mb-4">
              Somos un equipo comprometido con la excelencia, la calidad y la satisfacción total de nuestros clientes. 
              Utilizamos equipos de marcas reconocidas internacionalmente y técnicos certificados en instalación y mantenimiento 
              de sistemas de climatización.
            </p>
            <p className="text-foreground/70">
              Nuestro objetivo es proporcionar ambientes confortables y saludables, respetando el medio ambiente y 
              buscando siempre la máxima eficiencia energética en cada proyecto que emprendemos.
            </p>
          </motion.div>

          {/* Mission, Vision, Values */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-md p-8 border border-border">
              <div className="flex justify-center mb-4">
                <Lightbulb className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold text-primary text-center mb-4">Misión</h3>
              <p className="text-foreground/70 text-center">
                Proporcionar soluciones integrales en climatización con estándares internacionales de calidad, 
                brindando confort, eficiencia energética y satisfacción total a nuestros clientes.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-md p-8 border border-border">
              <div className="flex justify-center mb-4">
                <Target className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold text-primary text-center mb-4">Visión</h3>
              <p className="text-foreground/70 text-center">
                Ser la empresa líder en soluciones de climatización en el Perú, reconocida por nuestro profesionalismo, 
                innovación y compromiso con la excelencia y el cuidado del medio ambiente.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-md p-8 border border-border">
              <div className="flex justify-center mb-4">
                <Users className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold text-primary text-center mb-4">Valores</h3>
              <p className="text-foreground/70 text-center">
                Profesionalismo, integridad, responsabilidad ambiental, innovación continua y satisfacción del cliente. 
                Creemos en relaciones duraderas basadas en confianza y resultados excepcionales.
              </p>
            </motion.div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-primary/10 rounded-lg border border-primary/20 p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-primary mb-6">¿Por qué elegirnos?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Experiencia Comprobada</h4>
                  <p className="text-foreground/70 text-sm">
                    Más de 10 años en el mercado con miles de clientes satisfechos en toda la región
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Técnicos Certificados</h4>
                  <p className="text-foreground/70 text-sm">
                    Personal altamente capacitado y certificado internacionalmente en climatización
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Marcas de Calidad</h4>
                  <p className="text-foreground/70 text-sm">
                    Representantes autorizados de las principales marcas de aire acondicionado
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Garantía Integral</h4>
                  <p className="text-foreground/70 text-sm">
                    Garantía en equipos y trabajos con cobertura completa
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Servicio 24/7</h4>
                  <p className="text-foreground/70 text-sm">
                    Disponibilidad permanente para mantenimiento y emergencias
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Compromiso Ambiental</h4>
                  <p className="text-foreground/70 text-sm">
                    Utilizamos refrigerantes eco-amigables y promovemos eficiencia energética
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md p-8 border border-border mb-12"
          >
            <h2 className="text-2xl font-bold text-primary mb-4">Nuestro Equipo</h2>
            <p className="text-foreground/70 mb-4">
              Contamos con un equipo multidisciplinario de profesionales:
            </p>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Ingenieros en Climatización:</strong> Diseño y especificación de sistemas avanzados</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Técnicos Instaladores:</strong> Instalación profesional con estándares internacionales</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Especialistas en Mantenimiento:</strong> Servicio preventivo y correctivo permanente</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Asesoría Técnica:</strong> Orientación en selección de equipos y soluciones</span>
              </li>
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-white rounded-lg p-8 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Conócenos Mejor</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Contáctanos para conocer nuestros servicios, proyectos realizados y cómo podemos ayudarte 
              con tu solución de climatización.
            </p>
            <a
              href="/contacto"
              className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Contactar Ahora
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
