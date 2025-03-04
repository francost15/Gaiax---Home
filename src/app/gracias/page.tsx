"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Home, CheckCircle, ArrowRight, Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function GraciasPage() {
  const router = useRouter()
  const [showConfetti, setShowConfetti] = useState(false)
  const [userName, setUserName] = useState('')

  // Verificar si viene de formulario y activar confeti
  useEffect(() => {
    const wasFormSubmitted = sessionStorage.getItem('formSubmitted') === 'true'
    const contactName = sessionStorage.getItem('contactName') || ''
    
    if (!wasFormSubmitted) {
      // Si no viene del formulario, redireccionar al inicio
      router.push('/')
      return
    }
    
    // Establecer el nombre si existe
    if (contactName) {
      setUserName(contactName)
    }
    
    // Activar confeti con un pequeño retraso
    const timer = setTimeout(() => {
      setShowConfetti(true)
    }, 300)
    
    // Limpiar sessionStorage después de un tiempo
    const cleanupTimer = setTimeout(() => {
      sessionStorage.removeItem('formSubmitted')
      sessionStorage.removeItem('contactName')
    }, 5000)
    
    return () => {
      clearTimeout(timer)
      clearTimeout(cleanupTimer)
    }
  }, [router])

  // Generar confeti
  const generateConfetti = () => {
    const items = []
    const colors = ['#a92eff', '#ff6b6b', '#4ecdc4', '#ffd166', '#61dafb']
    
    for (let i = 0; i < 40; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `-5%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${Math.random() * 3 + 3}s`,
        backgroundColor: colors[Math.floor(Math.random() * colors.length)]
      }
      items.push(<motion.div 
        key={i} 
        className="confetti" 
        style={style}
        initial={{ opacity: 0, y: 0, rotateZ: 0 }}
        animate={{ opacity: [0, 1, 1, 0], y: ['0%', '1000%'], rotateZ: [0, 360] }}
        transition={{ duration: Math.random() * 3 + 3, ease: "easeOut" }}
      />)
    }
    
    return items
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-12">
      {/* Confeti animado */}
      <AnimatePresence>
        {showConfetti && (
          <>{generateConfetti()}</>
        )}
      </AnimatePresence>
      
      {/* Círculos decorativos animados */}
      <motion.div 
        className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-primary/5" 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      <motion.div 
        className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-primary/5" 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
      />
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Contenedor principal con efecto de aparición */}
        <motion.div 
          className="max-w-2xl bg-white rounded-3xl p-8 md:p-12 border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Ícono animado */}
          <motion.div 
            className="relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring", 
              stiffness: 200,
              damping: 15 
            }}
          >
            <div className="w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <CheckCircle className="h-14 w-14 text-primary" />
              </motion.div>
            </div>
            
            {/* Ondas animadas alrededor del círculo */}
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-primary/20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.5, opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
            
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-primary/10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 2, opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            />
          </motion.div>
          
          {/* Título con animación de letras */}
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold">
                <span className="mr-2">¡Gracias</span>
                {userName && (
                  <span className="text-primary mr-2">{userName}</span>
                )}
                <span className="text-primary">por contactarnos!</span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="mt-6 text-lg text-gray-600 max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              Hemos recibido tu mensaje correctamente. Nuestro equipo lo revisará y te responderá a la mayor brevedad posible a través de <span className="font-medium text-primary">franco.sanchez@gaiax.mx</span>.
            </motion.p>
          </motion.div>
          
          {/* Animación de envío de mensaje */}
          <motion.div 
            className="mt-8 mb-8 relative h-12 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <motion.div
              className="w-3 h-3 rounded-full bg-primary absolute left-0"
              animate={{ 
                x: ["0%", "100vw"],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatDelay: 3
              }}
            />
            
            <motion.div className="flex items-center justify-center gap-2 text-gray-500">
              <Send size={16} />
              <span>Mensaje enviado</span>
            </motion.div>
            
            <motion.div 
              className="h-[1px] absolute top-1/2 w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            />
          </motion.div>
          
          {/* Botones con animación */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <Button asChild size="lg" className="rounded-xl">
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-5 w-5" />
                <span>Volver al inicio</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="rounded-xl">
              <Link href="/precios" className="flex items-center gap-2">
                <span>Ver nuestros planes</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Mensaje de notificación */}
        <motion.div 
          className="mt-8 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          Recibirás una copia de tu mensaje en el correo electrónico proporcionado
        </motion.div>
      </div>
    </div>
  )
}

