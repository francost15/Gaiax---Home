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
            className="md:hidden text-foreground p-2 z-50"
            onClick={toggleMenu}
            aria-label="Menú"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Menú móvil de pantalla completa */}
      {isMounted && (
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden fixed inset-0 top-[76px] w-full h-full bg-white z-40 flex flex-col"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.nav 
                className="flex flex-col items-center justify-center h-full w-full pb-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Link 
                  href="/caracteristicas" 
                  className="text-foreground/70 hover:text-foreground transition-colors py-6 text-xl font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Características
                </Link>
                <Link 
                  href="/precios" 
                  className="text-foreground/70 hover:text-foreground transition-colors py-6 text-xl font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Precios
                </Link>
                <Link 
                  href="/contacto" 
                  className="text-foreground/70 hover:text-foreground transition-colors py-6 text-xl font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Link>
                
                <div className="mt-8">
                  <Button 
                    size="lg" 
                    className="rounded-full bg-primary hover:bg-primary/90 text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link href="/demo">Agenda una demo</Link>
                  </Button>
                </div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </header>
  )
}

