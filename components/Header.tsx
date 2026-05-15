'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  const menuItems = [
    { label: 'Inicio', href: '/' },
    {
      label: 'Aire Acondicionado',
      href: '/aire-acondicionado',
      submenu: [
        { label: 'Residencial (RAC)', href: '/aire-acondicionado/residencial' },
        { label: 'Comercial Ligero (LCAC)', href: '/aire-acondicionado/comercial-ligero' },
        { label: 'Comercial (CAC)', href: '/aire-acondicionado/comercial' },
      ],
    },
    { label: 'Mantenimiento', href: '/mantenimiento' },
    { label: 'Venta de Equipos', href: '/venta-equipos' },
    { label: 'Quiénes Somos', href: '/quienes-somos' },
    { label: 'Contacto', href: '/contacto' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 font-bold text-2xl text-primary">
            ITEK PERÚ
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary hover:bg-muted transition-colors flex items-center gap-1"
                >
                  {item.label}
                  {item.submenu && <ChevronDown size={16} />}
                </Link>

                {/* Desktop Submenu */}
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 border border-border">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-primary hover:text-white transition-colors"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-border"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {menuItems.map((item) => (
                  <div key={item.label}>
                    <button
                      onClick={() =>
                        setActiveSubmenu(
                          activeSubmenu === item.label ? null : item.label
                        )
                      }
                      className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-colors flex items-center justify-between"
                    >
                      <Link href={item.href}>{item.label}</Link>
                      {item.submenu && (
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            activeSubmenu === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </button>

                    {/* Mobile Submenu */}
                    <AnimatePresence>
                      {item.submenu && activeSubmenu === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="bg-muted rounded-md mt-1 overflow-hidden"
                        >
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.label}
                              href={subitem.href}
                              className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-accent/10 transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {subitem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
