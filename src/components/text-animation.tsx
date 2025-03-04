"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ButtonHTMLAttributes, ReactNode } from "react"
import Link from "next/link"

interface TextAnimationProps {
  texts: string[]
  baseText: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
  description?: string
}

export function TextAnimation({
  texts,
  baseText,
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseTime = 2000,
  description = "Transforma la capacitación tradicional en rutas de aprendizaje adaptativas, diseñadas para las necesidades únicas de cada empleado."
}: TextAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  // Typing effect
  useEffect(() => {
    const text = texts[currentTextIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentText.length < text.length) {
            setCurrentText(text.substring(0, currentText.length + 1))
          } else {
            // Pause before deleting
            setTimeout(() => setIsDeleting(true), pauseTime)
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(text.substring(0, currentText.length - 1))
          } else {
            setIsDeleting(false)
            setCurrentTextIndex((currentTextIndex + 1) % texts.length)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseTime])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="max-w-6xl mx-auto px-4 py-12 md:py-20"
    >
      <motion.div 
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.2] text-gray-900">
          {baseText}
        </h1>
        
        <div className="relative my-4 h-[1.5em] flex items-center justify-center">
          <motion.span 
            ref={containerRef}
            className="text-primary text-4xl sm:text-5xl md:text-6xl font-bold inline-flex items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {currentText}
            <span 
              className={`${cursorVisible ? "opacity-100" : "opacity-0"}`}
              style={{
                display: "inline-block",
                width: "3px",
                height: "1em",
                backgroundColor: "currentColor",
                marginLeft: "4px",
                animation: "blink 1s infinite"
              }}
            ></span>
          </motion.span>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md mx-auto"
        >
          <Button 
            className="rounded-full text-white bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all" 
            size="lg"
          >
            <Link href="#contacto">Comienza ahora</Link>
          </Button>
          <Button 
            className="rounded-full border border-gray-300 bg-white hover:bg-gray-50 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all" 
            variant="outline" 
            size="lg"
          >
            <Link href="#features">Saber más</Link>
          </Button>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </motion.div>
  )
}

// Define los tipos para el componente Button
type ButtonSize = "default" | "sm" | "lg";
type ButtonVariant = "default" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  className?: string;
}

// Botón local para asegurar que el componente funcione correctamente
function Button({ 
  children, 
  size = "default", 
  variant = "default", 
  className = "", 
  ...props 
}: ButtonProps) {
  const sizeClasses = {
    default: "py-2.5 px-5 text-base",
    sm: "py-2 px-4 text-sm",
    lg: "py-3 px-8 text-lg",
  }

  const variantClasses = {
    default: "bg-primary hover:bg-primary/90 text-white",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  }

  return (
    <button 
      className={`inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none w-full sm:w-auto ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

