"use client"

import { PieChart, BookOpen, Trophy, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const Features = () => {
  // Variantes para las animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const iconContainerVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gray-50 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-2 sm:px-4"
        >
        
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Diseñado para Lugares de Trabajo Modernos</h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto my-4 sm:my-6 rounded-full"></div>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestra plataforma combina tecnología de vanguardia con metodologías de aprendizaje probadas
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Feature 1 */}
          <motion.div 
            className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col h-full transform hover:-translate-y-1"
            variants={itemVariants}
          >
            <motion.div 
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-5 mx-auto md:mx-0"
              variants={iconContainerVariants}
            >
              <Trophy className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
            </motion.div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-primary mb-2 sm:mb-3 text-center md:text-left">Impulsa el Crecimiento</h3>
            <p className="text-gray-600 leading-relaxed text-center md:text-left text-xs sm:text-sm md:text-base flex-grow">
              Transforma el potencial de tu equipo en resultados tangibles, acelerando el desarrollo profesional y el
              éxito de tu empresa.
            </p>
            <div className="pt-3 sm:pt-4 mt-1 sm:mt-2 text-center md:text-left">
              <Link href="/caracteristicas" className="inline-flex items-center text-primary hover:text-primary/80 text-xs sm:text-sm font-medium">
                Saber más <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col h-full transform hover:-translate-y-1"
            variants={itemVariants}
          >
            <motion.div 
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-5 mx-auto md:mx-0"
              variants={iconContainerVariants}
            >
              <BookOpen className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
            </motion.div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-primary mb-2 sm:mb-3 text-center md:text-left">Adapta el Aprendizaje</h3>
            <p className="text-gray-600 leading-relaxed text-center md:text-left text-xs sm:text-sm md:text-base flex-grow">
              Personaliza la formación a las necesidades únicas de cada empleado, maximizando la retención y
              aplicación de conocimientos.
            </p>
            <div className="pt-3 sm:pt-4 mt-1 sm:mt-2 text-center md:text-left">
              <Link href="/caracteristicas" className="inline-flex items-center text-primary hover:text-primary/80 text-xs sm:text-sm font-medium">
                Saber más <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col h-full transform hover:-translate-y-1 sm:col-span-2 md:col-span-1 sm:max-w-md sm:mx-auto md:max-w-none"
            variants={itemVariants}
          >
            <motion.div 
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-5 mx-auto md:mx-0"
              variants={iconContainerVariants}
            >
              <PieChart className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
            </motion.div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-primary mb-2 sm:mb-3 text-center md:text-left">Mide el Impacto</h3>
            <p className="text-gray-600 leading-relaxed text-center md:text-left text-xs sm:text-sm md:text-base flex-grow">
              Visualiza el progreso en tiempo real y toma decisiones informadas para optimizar el rendimiento de tu
              equipo y tu inversión.
            </p>
            <div className="pt-3 sm:pt-4 mt-1 sm:mt-2 text-center md:text-left">
              <Link href="/caracteristicas" className="inline-flex items-center text-primary hover:text-primary/80 text-xs sm:text-sm font-medium">
                Saber más <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
        
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link 
              href="/caracteristicas" 
              className="inline-flex items-center justify-center gap-1 sm:gap-2 text-primary hover:text-primary/80 font-medium text-sm py-2 px-3 sm:px-4 rounded-lg hover:bg-primary/5 transition-colors"
            >
              Ver todas las características
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
