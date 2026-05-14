'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Comercial() {
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
            <span className="text-foreground">Comercial</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Aire Acondicionado Comercial
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Sistemas industriales de climatización para grandes espacios y demanda alta
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
          >
            <div className="bg-white rounded-lg shadow-md p-8 border border-border mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Sobre Nuestro Servicio</h2>
              <p className="text-foreground/70 mb-4">
                Nuestra solución comercial de mayor capacidad está diseñada para edificios empresariales, centros comerciales, 
                almacenes e instalaciones industriales que requieren climatización de espacios grandes.
              </p>
              <p className="text-foreground/70">
                Contamos con expertos en diseño e instalación de sistemas complejos que pueden manejar múltiples zonas y 
                condiciones de operación variable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-md p-8 border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Aplicaciones</h3>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Centros comerciales y galerías</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Oficinas corporativas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Almacenes y depósitos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Plantas industriales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Hoteles y complejos</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Características</h3>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Alta capacidad de refrigeración</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Control avanzado por zonas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Sistema automatizado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Monitoreo remoto</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Servicio técnico 24/7</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/10 rounded-lg border border-primary/20 p-8 mb-8">
              <h3 className="text-xl font-bold text-primary mb-6">Especificaciones Técnicas</h3>
              <div className="grid md:grid-cols-2 gap-6 text-foreground/70">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Capacidad</h4>
                  <p>Desde 48,000 BTU hasta sistemas de capacidad ilimitada. Escalable según necesidad</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Componentes</h4>
                  <p>Unidades condensadoras, serpentín interior múltiple, conductos especiales</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Control</h4>
                  <p>Sistema BMS integrado, control por app, programación horaria, sensores inteligentes</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Mantenimiento</h4>
                  <p>Contrato de servicio anual, revisión semestral, soporte técnico prioritario</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 border border-border">
              <h3 className="text-xl font-bold text-primary mb-4">Ventajas de nuestro servicio</h3>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Ahorro energético de hasta 50% con sistemas inteligentes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Garantía extendida de 5 años en equipos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Instalación sin interrumpir operaciones</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Equipo técnico capacitado disponible 24/7</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Reportes mensuales de rendimiento y consumo</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <h2 className="text-2xl font-bold text-primary mb-4">Solicita una evaluación técnica profesional</h2>
            <a
              href="/contacto"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
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
