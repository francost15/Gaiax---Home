"use client"

import Link from "next/link"
import { Check, HelpCircle, Zap, LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { PricingCard, PricingCardProps } from "@/components/pricing-card"

// Definir interfaces para los tipos
interface Feature extends PricingCardProps {}

export default function PreciosPage() {
  const pricingData: Feature[] = [
    {
      title: "Básico",
      price: "€9",
      description: "Para equipos pequeños",
      features: [
        "Hasta 10 usuarios",
        "Catálogo de 50+ cursos",
        "Analíticas básicas",
        "Integraciones limitadas",
        "Soporte estándar"
      ],
      buttonText: "Comenzar gratis",
      buttonLink: "/demo",
      icon: HelpCircle
    },
    {
      title: "Pro",
      price: "€19",
      description: "Para empresas en crecimiento",
      features: [
        "Usuarios ilimitados",
        "Catálogo completo de cursos",
        "Analíticas avanzadas",
        "Rutas personalizadas",
        "Integraciones premium",
        "Soporte prioritario"
      ],
      buttonText: "Probar 14 días gratis",
      buttonLink: "/demo",
      popular: true,
      icon: Zap
    },
    {
      title: "Enterprise",
      price: "Personalizado",
      description: "Para grandes organizaciones",
      features: [
        "Solución completamente personalizada",
        "Contenido a medida",
        "Integración con sistemas propios",
        "API completa",
        "Analíticas en tiempo real",
        "Soporte dedicado 24/7"
      ],
      buttonText: "Contactar ventas",
      buttonLink: "/contacto",
      icon: HelpCircle
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Planes para cada necesidad</h1>
          <div className="w-20 h-1 bg-primary mx-auto my-6 rounded-full opacity-70"></div>
          <p className="mt-6 text-xl text-gray-600">
            Elige el plan que mejor se adapte a tu equipo. Sin sorpresas ni cargos ocultos.
          </p>
        </motion.div>

        <div className="px-4 py-6 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm mb-16 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span className="text-gray-700">Facturación mensual o anual</span>
            </div>
            <div className="flex items-center mb-4 sm:mb-0">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span className="text-gray-700">Cancelación en cualquier momento</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span className="text-gray-700">14 días de prueba gratis</span>
            </div>
          </div>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {pricingData.map((plan: Feature, index: number) => (
            <PricingCard key={index} {...plan} />
          ))}
        </motion.div>

        <motion.div 
          className="mt-20 max-w-3xl mx-auto text-center bg-gray-50 p-8 rounded-2xl border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Necesitas un plan personalizado?</h3>
          <p className="text-gray-600 mb-6">
            Contáctanos para diseñar una solución a medida para las necesidades específicas de tu organización.
          </p>
          <Button 
            className="rounded-xl bg-gray-900 hover:bg-black text-white"
            asChild
          >
            <Link href="/contacto">Hablar con un asesor</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

