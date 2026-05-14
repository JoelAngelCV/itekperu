'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StatsSection from '@/components/StatsSection'
import { motion } from 'framer-motion'
import { Thermometer, Wrench, Award } from 'lucide-react'

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

export default function Home() {
  const services = [
    {
      icon: Thermometer,
      title: 'Aire Acondicionado',
      description: 'Sistemas de climatización residencial y comercial de última generación',
      href: '/aire-acondicionado',
    },
    {
      icon: Wrench,
      title: 'Mantenimiento',
      description: 'Servicios de mantenimiento preventivo y correctivo',
      href: '/mantenimiento',
    },
    {
      icon: Award,
      title: 'Garantía',
      description: 'Respaldo profesional con garantía en todos nuestros servicios',
      href: '/',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="flex-1 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Climatización Profesional
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
              ITEK PERÚ es tu aliado confiable en soluciones de aire acondicionado y climatización. 
              Ofrecemos servicios especializados para residencias y negocios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/aire-acondicionado"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Conoce Nuestros Servicios
              </motion.a>
              <motion.a
                href="/contacto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                Contactanos
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Soluciones integrales en climatización con experiencia y profesionalismo
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-8 border border-border"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Icon className="text-primary" size={32} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary text-center mb-3">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 text-center text-sm mb-6">
                    {service.description}
                  </p>
                  <div className="text-center">
                    <a
                      href={service.href}
                      className="text-primary font-semibold hover:underline"
                    >
                      Saber más →
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Necesitas una Solución de Climatización?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Contáctanos hoy para una consulta gratuita. Nuestro equipo está listo para ayudarte.
            </p>
            <motion.a
              href="/contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Contactanos Ahora
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
