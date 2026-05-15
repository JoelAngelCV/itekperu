'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Zap, Leaf, Volume2 } from 'lucide-react'

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

export default function VentaEquipos() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Breadcrumb */}
      <nav className="bg-muted/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-primary hover:underline">Inicio</Link>
            <span className="text-foreground/50">/</span>
            <span className="text-foreground">Venta de Equipos</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Equipos de Climatización
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Descubre nuestro catálogo de equipos de última generación con las mejores marcas del mercado
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md p-8 border border-border mb-12"
          >
            <h2 className="text-2xl font-bold text-primary mb-4">Nuestros Tipos de Equipos</h2>
            <p className="text-foreground/70">
              En ITEK PERÚ disponemos de una completa gama de equipos de aire acondicionado de las principales marcas de como York, LG, Midea, Samsung.
              Todos nuestros equipos cumplen con estándares internacionales de calidad y eficiencia.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 mb-12"
          >
            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-md p-8 border border-border">
              <h3 className="text-2xl font-bold text-primary mb-4">Aire Acondicionado Split</h3>
              <p className="text-foreground/70 mb-4">
                Sistemas split de pared ideales para residencias y oficinas pequeñas. Combinan estética moderna 
                con máxima eficiencia energética. Operan de forma silenciosa y pueden instalarse rápidamente.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="text-primary" size={20} />
                    <h4 className="font-semibold text-primary">Eficiencia</h4>
                  </div>
                  <p className="text-sm text-foreground/70">Clasificación A++ en consumo energético</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Volume2 className="text-primary" size={20} />
                    <h4 className="font-semibold text-primary">Silencio</h4>
                  </div>
                  <p className="text-sm text-foreground/70">Menos de 25 dB de ruido operativo</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Leaf className="text-primary" size={20} />
                    <h4 className="font-semibold text-primary">Ecológico</h4>
                  </div>
                  <p className="text-sm text-foreground/70">Refrigerante respetuoso con ambiente</p>
                </div>
              </div>
              <p className="text-sm text-foreground/70 text-center">
                Capacidades: 12,000 - 36,000 BTU | Garantía: 3 años
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-md p-8 border border-border">
              <h3 className="text-2xl font-bold text-primary mb-4">Aire Acondicionado Portátil</h3>
              <p className="text-foreground/70 mb-4">
                Unidades portátiles ideales para espacios temporales o cuando no se puede hacer instalación fija. 
                Fácil de instalar y desinstalar, con ruedas para movilidad.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="text-primary" size={20} />
                    <h4 className="font-semibold text-primary">Potencia</h4>
                  </div>
                  <p className="text-sm text-foreground/70">12,000 a 30,000 BTU disponibles</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Volume2 className="text-primary" size={20} />
                    <h4 className="font-semibold text-primary">Movilidad</h4>
                  </div>
                  <p className="text-sm text-foreground/70">Ruedas incluidas, fácil de transportar</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Leaf className="text-primary" size={20} />
                    <h4 className="font-semibold text-primary">Control</h4>
                  </div>
                  <p className="text-sm text-foreground/70">Control remoto inteligente incluido</p>
                </div>
              </div>
              <p className="text-sm text-foreground/70 text-center">
                Garantía: 2 años | Entrega rápida disponible
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-md p-8 border border-border">
              <h3 className="text-2xl font-bold text-primary mb-4">Sistema Central de Aire</h3>
              <p className="text-foreground/70 mb-4">
                Sistemas centralizados para edificios completos y grandes espacios. Permiten control de temperatura 
                por zonas con una instalación limpia y estética.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="text-primary" size={20} />
                    <h4 className="font-semibold text-primary">Escalabilidad</h4>
                  </div>
                  <p className="text-sm text-foreground/70">Capacidad desde 48,000 BTU en adelante</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Volume2 className="text-primary" size={20} />
                    <h4 className="font-semibold text-primary">Automatización</h4>
                  </div>
                  <p className="text-sm text-foreground/70">Control automático por temperatura y horario</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Leaf className="text-primary" size={20} />
                    <h4 className="font-semibold text-primary">Confort</h4>
                  </div>
                  <p className="text-sm text-foreground/70">Distribución uniforme en todo el espacio</p>
                </div>
              </div>
              <p className="text-sm text-foreground/70 text-center">
                Diseño personalizado | Garantía: 5 años
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary/10 rounded-lg border border-primary/20 p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-primary mb-4">¿Necesitas asesoramiento?</h2>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Contáctanos para conocer más detalles sobre nuestros equipos y encontrar la solución 
              perfecta para tu hogar o negocio.
            </p>
            <a
              href="/contacto"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Solicitar Cotización
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
