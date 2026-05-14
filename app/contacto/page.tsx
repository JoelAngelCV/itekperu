'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, Clock } from 'lucide-react'
import { useState } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' })
    }, 3000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Breadcrumb */}
      <nav className="bg-muted/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-primary hover:underline">Inicio</Link>
            <span className="text-foreground/50">/</span>
            <span className="text-foreground">Contacto</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Contactanos
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Estamos aquí para responder todas tus preguntas y ayudarte con tus necesidades de climatización
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-8 border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <Phone className="text-primary" size={24} />
                <h3 className="text-lg font-bold text-primary">Teléfono</h3>
              </div>
              <p className="text-foreground/70 mb-2">
                <a href="tel:+51980713201" className="hover:text-primary transition-colors font-semibold">
                  +51 980 713 201
                </a>
              </p>
              <p className="text-sm text-foreground/50">Disponible de lunes a sábado</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg shadow-md p-8 border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <Mail className="text-primary" size={24} />
                <h3 className="text-lg font-bold text-primary">Email</h3>
              </div>
              <p className="text-foreground/70 mb-2">
                <a href="mailto:venta@itekperu.com" className="hover:text-primary transition-colors font-semibold">
                  venta@itekperu.com
                </a>
              </p>
              <p className="text-sm text-foreground/50">Respondemos dentro de 24 horas</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-md p-8 border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <Instagram className="text-primary" size={24} />
                <h3 className="text-lg font-bold text-primary">Instagram</h3>
              </div>
              <p className="text-foreground/70 mb-2">
                <a
                  href="https://instagram.com/itekperuclimatizacion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors font-semibold"
                >
                  @itekperuclimatizacion
                </a>
              </p>
              <p className="text-sm text-foreground/50">Síguenos en redes sociales</p>
            </motion.div>
          </div>

          {/* Form and Location */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-8 border border-border"
            >
              <h2 className="text-2xl font-bold text-primary mb-6">Envíanos un Mensaje</h2>
              
              {submitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700"
                >
                  ¡Gracias! Hemos recibido tu mensaje. Te contactaremos pronto.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+51 9XX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Asunto *
                  </label>
                  <select
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="consulta">Consulta General</option>
                    <option value="instalacion">Instalación</option>
                    <option value="mantenimiento">Mantenimiento</option>
                    <option value="cotizacion">Cotización</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Cuéntanos sobre tu necesidad..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Enviar Mensaje
                </button>
              </form>
            </motion.div>

            {/* Location and Hours */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Hours */}
              <div className="bg-white rounded-lg shadow-md p-8 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-primary" size={24} />
                  <h3 className="text-lg font-bold text-primary">Horario de Atención</h3>
                </div>
                <div className="space-y-3 text-foreground/70">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes:</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span className="font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span className="font-semibold">Cerrado</span>
                  </div>
                  <div className="pt-3 border-t border-border mt-3">
                    <p className="text-sm text-primary font-semibold">
                      Emergencia 24/7 disponible
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-lg shadow-md p-8 border border-border">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-bold text-primary">Ubicación</h3>
                    <p className="text-foreground/70 text-sm mt-2">
                      Ubicados estratégicamente para servir a todo Lima y zonas circundantes.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-foreground/70 mb-3">
                    Nos desplazamos a tu domicilio o negocio para evaluaciones, instalaciones y mantenimiento.
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-primary font-semibold hover:underline"
                  >
                    Ver en Google Maps →
                  </a>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-primary/10 rounded-lg border border-primary/20 p-6">
                <h3 className="font-bold text-primary mb-3">¿Necesitas servicio de emergencia?</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  Si tu equipo de aire acondicionado no funciona, contáctanos inmediatamente. Tenemos servicio 24/7 disponible.
                </p>
                <a
                  href="tel:+51980713201"
                  className="inline-block px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Llamar Ahora
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
