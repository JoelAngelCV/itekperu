'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle, AlertCircle, Wrench } from 'lucide-react'

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

export default function Mantenimiento() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Breadcrumb */}
      <nav className="bg-muted/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-primary hover:underline">Inicio</Link>
            <span className="text-foreground/50">/</span>
            <span className="text-foreground">Mantenimiento</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Servicios de Mantenimiento
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Mantén tu sistema de climatización en condiciones óptimas con nuestros servicios de mantenimiento profesional
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-md p-8 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-primary" size={28} />
                <h3 className="text-xl font-bold text-primary">Mantenimiento Preventivo</h3>
              </div>
              <p className="text-foreground/70 mb-4">
                Servicio periódico diseñado para evitar problemas futuros y asegurar el rendimiento óptimo.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Limpieza de filtros y componentes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Inspección de refrigerante</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Revisión de conexiones eléctricas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Test de funcionamiento</span>
                </li>
              </ul>
              <p className="text-primary font-semibold mt-4">Recomendado: 2 veces al año</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-md p-8 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="text-primary" size={28} />
                <h3 className="text-xl font-bold text-primary">Mantenimiento Correctivo</h3>
              </div>
              <p className="text-foreground/70 mb-4">
                Servicio de reparación para solucionar problemas y fallos detectados.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Diagnóstico profesional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Reparación de componentes dañados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Reemplazo de piezas defectuosas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Garantía en trabajos realizados</span>
                </li>
              </ul>
              <p className="text-primary font-semibold mt-4">Servicio de emergencia 24/7</p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-primary/10 rounded-lg border border-primary/20 p-8 mb-8"
          >
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <Wrench size={24} />
              Servicios Incluidos en Mantenimiento
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-foreground/70">
              <div>
                <h4 className="font-semibold text-primary mb-3">Sistema de Unidad</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Limpieza del evaporador</li>
                  <li>• Desinfección con ozono</li>
                  <li>• Revisión del drenaje</li>
                  <li>• Lubricación de componentes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3">Sistema Externo</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Limpieza del condensador</li>
                  <li>• Inspección de tuberías</li>
                  <li>• Verificación de presiones</li>
                  <li>• Cambio de refrigerante si necesario</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-8"
          >
            {[
              {
                title: 'Rápido',
                description: 'Servicio ágil que no interrumpe tu actividad diaria',
              },
              {
                title: 'Económico',
                description: 'Evita costosas reparaciones mayores con mantenimiento regular',
              },
              {
                title: 'Profesional',
                description: 'Técnicos certificados con experiencia en diversas marcas',
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="bg-white rounded-lg shadow-md p-6 border border-border text-center"
              >
                <h4 className="text-lg font-bold text-primary mb-2">{item.title}</h4>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md p-8 border border-border text-center"
          >
            <h2 className="text-2xl font-bold text-primary mb-2">¿Cuándo llevar mantenimiento?</h2>
            <p className="text-foreground/70 mb-6">
              Si tu aire acondicionado no ha recibido mantenimiento en los últimos 6 meses, es momento de contactarnos
            </p>
            <a
              href="/contacto"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Agendar Mantenimiento
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
