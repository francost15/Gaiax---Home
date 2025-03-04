"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Aseguramos que el componente esté montado para evitar problemas de hidratación
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className="p-3 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-6xl mx-auto px-4 flex h-16 items-center justify-between">
          <Logo />
          
          {/* Menú para tablets y desktop */}
          <nav className="hidden md:flex gap-6 absolute left-1/2 transform -translate-x-1/2">
          
            <Link href="/caracteristicas" className="text-foreground/70 hover:text-foreground transition-colors">
              Características
            </Link>
            <Link href="/precios" className="text-foreground/70 hover:text-foreground transition-colors">
              Precios
            </Link>
            <Link href="/contacto" className="text-foreground/70 hover:text-foreground transition-colors">
              Contacto
            </Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white">
              <Link href="/demo">Agenda una demo</Link>
            </Button>
            
            {/* Botón de menú móvil */}
            <button 
              className="md:hidden text-foreground p-2 z-[9999]"
              onClick={toggleMenu}
              aria-label="Menú"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Menú móvil a pantalla completa separado del header */}
      {isMounted && (
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden fixed inset-0 w-full h-screen bg-white z-[9998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="fixed top-0 left-0 right-0 p-3 border-b bg-white">
                <div className="container max-w-6xl mx-auto px-4 flex h-16 items-center justify-between">
                  <Logo />
                  <button 
                    className="md:hidden text-foreground p-2 z-[9999]"
                    onClick={toggleMenu}
                    aria-label="Cerrar menú"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>
              
              <div className="h-full flex items-center justify-center pt-20">
                <motion.nav 
                  className="flex flex-col items-center justify-center w-full px-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                  <Link 
                    href="/" 
                    className="text-foreground/80 hover:text-foreground transition-colors py-5 text-2xl font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Inicio
                  </Link>
                  <Link 
                    href="/caracteristicas" 
                    className="text-foreground/80 hover:text-foreground transition-colors py-5 text-2xl font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Características
                  </Link>
                  <Link 
                    href="/precios" 
                    className="text-foreground/80 hover:text-foreground transition-colors py-5 text-2xl font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Precios
                  </Link>
                  <Link 
                    href="/contacto" 
                    className="text-foreground/80 hover:text-foreground transition-colors py-5 text-2xl font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contacto
                  </Link>
                  
                  <div className="mt-10">
                    <Button 
                      size="lg" 
                      className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Link href="/demo">Agenda una demo</Link>
                    </Button>
                  </div>
                </motion.nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  )
}

