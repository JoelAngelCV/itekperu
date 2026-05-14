'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, Building2, Building } from 'lucide-react'

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

export default function AireAcondicionado() {
  const subServices = [
    {
      icon: Home,
      title: 'Residencial',
      description: 'Sistemas de aire acondicionado para hogares con máxima eficiencia energética',
      features: [
        'Unidades split modernos',
        'Instalación profesional',
        'Garantía extendida',
      ],
      href: '/aire-acondicionado/residencial',
    },
    {
      icon: Building2,
      title: 'Comercial Ligero',
      description: 'Soluciones para pequeños y medianos comercios',
      features: [
        'Sistemas compactos',
        'Bajo mantenimiento',
        'Eficiente en energía',
      ],
      href: '/aire-acondicionado/comercial-ligero',
    },
    {
      icon: Building,
      title: 'Comercial',
      description: 'Sistemas industriales para grandes espacios y demanda alta',
      features: [
        'Alta capacidad',
        'Control avanzado',
        'Servicio técnico 24/7',
      ],
      href: '/aire-acondicionado/comercial',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Breadcrumb */}
      <nav className="bg-muted/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-primary hover:underline">
              Inicio
            </Link>
            <span className="text-foreground/50">/</span>
            <span className="text-foreground">Aire Acondicionado</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Aire Acondicionado
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Sistemas de climatización de última generación para todos tus espacios
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {subServices.map((service) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8 border border-border overflow-hidden"
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

                  <div className="mb-6 space-y-2">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2 text-sm text-foreground/70"
                      >
                        <span className="text-primary font-bold">•</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={service.href}
                    className="inline-block w-full text-center px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Ver Detalles
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              ¿Por qué elegir ITEK PERÚ?
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                title: 'Experiencia Profesional',
                description: 'Más de una década en soluciones de climatización con miles de clientes satisfechos',
              },
              {
                title: 'Técnicos Certificados',
                description: 'Personal altamente capacitado y certificado en manejo de equipos de climatización',
              },
              {
                title: 'Garantía Completa',
                description: 'Ofrecemos garantía integral en equipos y servicios de instalación',
              },
              {
                title: 'Soporte Permanente',
                description: 'Servicio técnico disponible para mantenimiento y asistencia rápida',
              },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeInUp} className="p-6 bg-white rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground/70">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
