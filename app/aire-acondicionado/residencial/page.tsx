'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Residencial() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Breadcrumb */}
      <nav className="bg-muted/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-primary hover:underline">Inicio</Link>
            <span className="text-foreground/50">/</span>
            <Link href="/aire-acondicionado" className="text-primary hover:underline">
              Aire Acondicionado
            </Link>
            <span className="text-foreground/50">/</span>
            <span className="text-foreground">Residencial</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Aire Acondicionado Residencial
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Disfruta de un hogar fresco y confortable todo el año con nuestros sistemas de climatización residenciales
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-white rounded-lg shadow-md p-8 border border-border mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Sobre Nuestro Servicio</h2>
              <p className="text-foreground/70 mb-4">
                Nuestro servicio de aire acondicionado residencial está diseñado para proporcionar confort máximo en tu hogar. 
                Utilizamos equipos de última generación que combinen eficiencia energética con rendimiento excepcional.
              </p>
              <p className="text-foreground/70">
                Contamos con técnicos certificados que realizan una evaluación detallada de tu espacio para recomendarte la 
                solución más adecuada a tus necesidades y presupuesto.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-8 border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Características</h3>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Unidades split de bajo ruido y alta eficiencia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Control de temperatura preciso</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Filtración avanzada del aire</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Instalación profesional y rápida</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Bajo consumo de energía</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Ventajas</h3>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">★</span>
                    <span>Ahorra en tus facturas de electricidad</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">★</span>
                    <span>Ambiente saludable y fresco</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">★</span>
                    <span>Operación silenciosa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">★</span>
                    <span>Mantenimiento sencillo y económico</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">★</span>
                    <span>Garantía integral</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/10 rounded-lg border border-primary/20 p-8 mt-8">
              <h3 className="text-xl font-bold text-primary mb-4">Proceso de Instalación</h3>
              <ol className="space-y-4 text-foreground/70">
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-lg">1.</span>
                  <span><strong>Consulta Inicial:</strong> Evaluamos tu hogar y tus necesidades</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-lg">2.</span>
                  <span><strong>Propuesta:</strong> Te presentamos opciones y presupuestos</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-lg">3.</span>
                  <span><strong>Instalación:</strong> Nuestro equipo realiza una instalación profesional</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold text-lg">4.</span>
                  <span><strong>Capacitación:</strong> Te enseñamos cómo usar y mantener el sistema</span>
                </li>
              </ol>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <h2 className="text-2xl font-bold text-primary mb-4">¿Listo para mejorar el confort de tu hogar?</h2>
            <a
              href="/contacto"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Solicita una Consulta Gratuita
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
