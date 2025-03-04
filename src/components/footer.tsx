"use client";

import Link from "next/link"
import { ChevronRight, ArrowUp } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import Image from "next/image";

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const staggerChildrenVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05 * i,
      },
    }),
  };

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        damping: 12 
      }
    },
  };

  return (
    <footer className="bg-[#111827] text-white py-16 relative">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo y descripción */}
          <motion.div 
            className="md:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image src="/logo-invertido.svg" alt="Logo" width={130} height={130} />
            <p className="mt-4 text-gray-400 max-w-md">
              Transformamos la capacitación en pymes con soluciones accesibles, personalizadas y medibles que impulsan
              el crecimiento.
            </p>
            
            {/* Redes sociales */}
           
          </motion.div>

          {/* Columnas de enlaces */}
          <motion.div 
            className="md:col-span-3"
            variants={staggerChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <h3 className="text-lg font-semibold mb-4 inline-block border-b-2 border-primary pb-1">Producto</h3>
            <ul className="space-y-3 mt-6">
              <motion.li variants={childVariants}>
                <Link
                  href="/caracteristicas"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <ChevronRight className="h-4 w-4 text-primary mr-1" />
                  Características
                </Link>
              </motion.li>
              <motion.li variants={childVariants}>
                <Link href="/beneficios" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <ChevronRight className="h-4 w-4 text-primary mr-1" />
                  Beneficios
                </Link>
              </motion.li>
              <motion.li variants={childVariants}>
                <Link href="/faq" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <ChevronRight className="h-4 w-4 text-primary mr-1" />
                  FAQ
                </Link>
              </motion.li>
              <motion.li variants={childVariants}>
                <Link href="/precios" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <ChevronRight className="h-4 w-4 text-primary mr-1" />
                  Precios
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div 
            className="md:col-span-3"
            variants={staggerChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <h3 className="text-lg font-semibold mb-4 inline-block border-b-2 border-primary pb-1">Compañía</h3>
            <ul className="space-y-3 mt-6">
              <motion.li variants={childVariants}>
                <Link href="/acerca-de" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <ChevronRight className="h-4 w-4 text-primary mr-1" />
                  Acerca de
                </Link>
              </motion.li>
              <motion.li variants={childVariants}>
                <Link href="/mision" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <ChevronRight className="h-4 w-4 text-primary mr-1" />
                  Misión
                </Link>
              </motion.li>
              <motion.li variants={childVariants}>
                <Link href="/vision" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <ChevronRight className="h-4 w-4 text-primary mr-1" />
                  Visión
                </Link>
              </motion.li>
              <motion.li variants={childVariants}>
                <Link href="/valores" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <ChevronRight className="h-4 w-4 text-primary mr-1" />
                  Valores
                </Link>
              </motion.li>
              <motion.li variants={childVariants}>
                <Link href="/terminos" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <ChevronRight className="h-4 w-4 text-primary mr-1" />
                  Términos
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Columna de contacto */}
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-gray-400 text-sm">© 2025 Gaiax. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacidad" className="text-sm text-gray-400 hover:text-white transition-colors">
              Política de Privacidad
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors">
              Cookies
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/contacto" className="text-sm text-gray-400 hover:text-white transition-colors">
              Contacto
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Botón scroll to top */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary p-3 rounded-full shadow-lg z-50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <ArrowUp className="h-5 w-5 text-white" />
        </motion.button>
      )}
    </footer>
  )
}

