"use client"

import { motion } from "framer-motion"
import Link from "next/link"

import { Home, Mail, HelpCircle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
  

      {/* 404 Content */}
      <main className="pt-32 pb-20 flex flex-col items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <div className="relative">
            {/* Large 404 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="text-[12rem] md:text-[16rem] font-bold text-primary/20 leading-none"
            >
              404
            </motion.div>

            {/* Decorative Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: "easeOut",
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-primary/30 flex items-center justify-center">
                <div className="w-24 h-24 md:w-36 md:h-36 rounded-full border-4 border-primary/60" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="space-y-6 relative z-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Página no encontrada</h1>
            <p className="text-lg text-gray-600 max-w-md mx-auto">
              Lo sentimos, esta página parece haberse perdido en el ciberespacio.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                <Home className="w-5 h-5 mr-2" />
                Inicio
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contacto
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <HelpCircle className="w-5 h-5 mr-2" />
                FAQ
              </Link>
            </div>
          </motion.div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5"
            />
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                rotate: [0, -90, 0],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5"
            />
          </div>
        </div>
      </main>
    </div>
  )
} 