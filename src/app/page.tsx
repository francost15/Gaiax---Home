"use client"
import { Button } from "@/components/ui/button"
import { BookOpen, Zap, Rocket } from "lucide-react"
import { TextAnimation } from "@/components/text-animation"
import { Features } from "@/components/Features"
import { PricingCard } from "@/components/pricing-card"
import { motion } from "framer-motion"
import { ScrollAnimation, StaggerContainer, animations } from "@/components/scroll-animation"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  
  // Estados para el formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  })
  
  const [errors, setErrors] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Limpiar error cuando el usuario escribe
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }))
    }
  }
  
  const validateForm = () => {
    let valid = true
    const newErrors = {
      nombre: "",
      email: "",
      mensaje: ""
    }
    
    // Validar nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio"
      valid = false
    }
    
    // Validar email
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio"
      valid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Por favor ingresa un email válido"
      valid = false
    }
    
    // Validar mensaje
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es obligatorio"
      valid = false
    }
    
    setErrors(newErrors)
    return valid
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsSubmitting(true)
      
      // Simulamos envío (aquí irían las llamadas a la API)
      setTimeout(() => {
        // Guardar en sessionStorage para la redirección
        sessionStorage.setItem("formSubmitted", "true")
        
        // Redireccionar a la página de gracias
        router.push("/gracias")
      }, 1500)
    }
  }

  return (
    <>
      {/* Hero Section con mejor animación */}
      <section className="-mt-2">
        <div className="container text-center">
          <ScrollAnimation direction="down">
            <TextAnimation
              baseText="Potencia tu equipo con"
              texts={[
                "aprendizaje personalizado",
                "formación adaptativa",
                "capacitación medible",
                "desarrollo continuo",
              ]}
            />
          </ScrollAnimation>

         

         

          <ScrollAnimation direction="up" delay={0.7}>
          <div className="mt-8 max-w-6xl mx-auto relative animate-fade-in-up delay-300">
      <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-gray-200">
        <Image
          src="/photo-home.avif"
          alt="Platform Dashboard"
          className="w-full h-full object-cover"
          loading="eager"
          width={1000}
          height={1000}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-lg p-6 flex items-center gap-4 border border-gray-100 animate-scale-in delay-700">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-900">Personalizado para cada empleado</p>
          <p className="text-base text-gray-500">Rutas de aprendizaje adaptativas</p>
        </div>
      </div>
    </div>
          </ScrollAnimation>
        </div>
      </section>

  

      {/* Features Section (Componente existente pero ahora con animación) */}
      <ScrollAnimation direction="up">
        <Features />
      </ScrollAnimation>

      {/* Precios Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container max-w-6xl mx-auto px-4">
          <ScrollAnimation direction="up">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-primary font-medium bg-primary/10 px-4 py-1.5 rounded-full text-sm inline-block mb-4">
                Planes a tu medida
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Elige el plan perfecto para ti</h2>
              <div className="w-20 h-1 bg-primary mx-auto my-6 rounded-full opacity-70"></div>
              <p className="mt-4 text-lg text-gray-600">
                Soluciones adaptadas a tus necesidades con todas las herramientas que tu equipo necesita para crecer.
              </p>
            </div>
          </ScrollAnimation>

          <StaggerContainer 
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            staggerDelay={0.15}
          >
            <motion.div variants={animations.up}>
              <PricingCard
                title="Básico"
                price="$US 8"
                description="Para equipos pequeños"
                features={[
                  "Hasta 15 usuarios",
                  "Catálogo de 50+ cursos",
                  "Analíticas básicas",
                  "Integraciones limitadas"
                ]}
                buttonText="Comenzar gratis"
                buttonLink="/demo"
                icon={BookOpen}
              />
            </motion.div>
            
            <motion.div variants={animations.up}>
              <PricingCard
                title="Pro"
                price="$US 14"
                description="Para empresas en crecimiento"
                features={[
                  "Usuarios ilimitados",
                  "Catálogo completo de cursos",
                  "Analíticas avanzadas",
                  "Rutas personalizadas",
                  "Soporte prioritario"
                ]}
                buttonText="Probar 14 días gratis"
                buttonLink="/demo"
                popular={true}
                icon={Zap}
              />
            </motion.div>
            
            <motion.div variants={animations.up}>
              <PricingCard
                title="Enterprise"
                price="Personalizado"
                description="Para grandes organizaciones"
                features={[
                  "Solución personalizada",
                  "Contenido a medida",
                  "Integración con sistemas propios",
                  "API completa",
                  "Soporte 24/7"
                ]}
                buttonText="Contactar ventas"
                buttonLink="/contacto"
                icon={Rocket}
              />
            </motion.div>
          </StaggerContainer>

          <ScrollAnimation direction="up" delay={0.6}>
            <div className="text-center mt-10">
              <Button variant="link" asChild className="text-primary hover:text-primary/80">
                <Link href="/precios">Ver todos los detalles de precios →</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contacto Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-6xl mx-auto">
          <ScrollAnimation direction="up">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <ScrollAnimation direction="left">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Tienes preguntas?</h2>
                    <p className="text-gray-600 mb-6">
                      Contacta con nuestro equipo para resolver tus dudas o programar una demostración personalizada
                      para tu organización.
                    </p>
                  </ScrollAnimation>

                  <ScrollAnimation direction="up" delay={0.2}>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                      <div className="md:col-span-1">
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                        <input
                          type="text"
                          id="nombre"
                          name="nombre"
                          placeholder="Tu nombre"
                          className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.nombre ? 'border-red-500' : 'border-gray-200'}`}
                          value={formData.nombre}
                          onChange={handleChange}
                        />
                        {errors.nombre && (
                          <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
                        )}
                      </div>
                      <div className="md:col-span-1">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="tu@email.com"
                          className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                        <textarea
                          id="mensaje"
                          name="mensaje"
                          rows={5}
                          placeholder="Cuéntanos más sobre tu equipo y necesidades..."
                          className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.mensaje ? 'border-red-500' : 'border-gray-200'}`}
                          value={formData.mensaje}
                          onChange={handleChange}
                        ></textarea>
                        {errors.mensaje && (
                          <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>
                        )}
                      </div>

                      <div className="md:col-span-2 flex justify-center">
                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full md:w-auto relative overflow-hidden"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="animate-pulse">Enviando...</span>
                              <span className="absolute bottom-0 left-0 w-full h-1 bg-white/30 animate-progress"></span>
                            </>
                          ) : (
                            "Enviar mensaje"
                          )}
                        </Button>
                      </div>
                    </form>
                  </ScrollAnimation>
                </div>

                <ScrollAnimation direction="right" className="h-full">
                  <div className="relative h-full min-h-[300px] md:min-h-full bg-gray-200">
                    <Image 
                      src="/photo-2.webp" 
                      alt="Contacto" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}

