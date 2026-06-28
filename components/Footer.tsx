'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram } from 'lucide-react'

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="bg-primary text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">ITEK PERÚ</h3>
            <p className="text-white/80 text-sm">
              Soluciones profesionales en climatización para residencias y negocios.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/aire-acondicionado" className="hover:text-white transition-colors">
                  Aire Acondicionado
                </Link>
              </li>
              <li>
                <Link href="/mantenimiento" className="hover:text-white transition-colors">
                  Mantenimiento
                </Link>
              </li>
              <li>
                <Link href="/quienes-somos" className="hover:text-white transition-colors">
                  Quiénes Somos
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/aire-acondicionado/residencial" className="hover:text-white transition-colors">
                  AC Residencial
                </Link>
              </li>
              <li>
                <Link href="/aire-acondicionado/comercial-ligero" className="hover:text-white transition-colors">
                  AC Comercial
                </Link>
              </li>
              <li>
                <Link href="/venta-equipos" className="hover:text-white transition-colors">
                  Equipos
                </Link>
              </li>
              <li>
                <Link href="/mantenimiento" className="hover:text-white transition-colors">
                  Mantenimiento
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 shrink-0" />
                <a href="tel:+51980713201" className="hover:text-white transition-colors">
                  +51 999 999 999
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 shrink-0" />
                <a href="mailto:venta@itekperu.com" className="hover:text-white transition-colors">
                  venta@itekperu.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Instagram size={16} className="mt-1 shrink-0" />
                <a
                  href="https://instagram.com/itekperuclimatizacion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @itekperuclimatizacion
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/70"
        >
          <p>&copy; 2024 ITEK PERÚ. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">
              Términos
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Privacidad
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
