'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ComercialLigero() {
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
            <span className="text-foreground">Comercial Ligero</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Aire Acondicionado Comercial Ligero
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Soluciones de climatización para pequeños y medianos comercios con máxima eficiencia
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
                Especializados en climatización para pequeños y medianos comercios como oficinas, tiendas, restaurantes y locales. 
                Ofrecemos sistemas compactos, eficientes y de bajo mantenimiento.
              </p>
              <p className="text-foreground/70">
                Nuestras soluciones comerciales ligeras están diseñadas para mantener el ambiente confortable para clientes y empleados 
                sin afectar significativamente en los costos operativos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-md p-8 border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Ideal Para</h3>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Oficinas pequeñas y medianas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Tiendas y boutiques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Restaurantes y cafeterías</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Clínicas y consultorio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Salones de belleza</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 border border-border">
                <h3 className="text-xl font-bold text-primary mb-4">Beneficios</h3>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Instalación rápida y discreta</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Bajo consumo energético</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Mantenimiento sencillo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Bajo ruido operativo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>ROI en corto plazo</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/10 rounded-lg border border-primary/20 p-8">
              <h3 className="text-xl font-bold text-primary mb-6">Especificaciones Técnicas</h3>
              <div className="space-y-4 text-foreground/70">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Capacidad</h4>
                  <p>Desde 12,000 BTU hasta 36,000 BTU, adaptable a espacios de 20 a 100 m²</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Tecnología</h4>
                  <p>Compresores inverter, filtros HEPA, deshumidificación automática</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Eficiencia</h4>
                  <p>Calificación energética A++, reducción de hasta 40% en consumo eléctrico</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Instalación</h4>
                  <p>Conductos internos, operación silenciosa, integración estética con el espacio</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <h2 className="text-2xl font-bold text-primary mb-4">Mejora el ambiente de tu negocio</h2>
            <a
              href="/contacto"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Solicita una Consulta
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
