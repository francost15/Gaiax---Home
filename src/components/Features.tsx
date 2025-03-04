"use client"

import { PieChart, BookOpen, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'

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
    <section className="py-20 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Diseñado para Lugares de Trabajo Modernos</h2>
          <div className="w-20 h-1 bg-primary mx-auto my-6 rounded-full"></div>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestra plataforma combina tecnología de vanguardia con metodologías de aprendizaje probadas
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Feature 1 */}
          <motion.div 
            className="bg-white p-8 md:p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            variants={itemVariants}
          >
            <motion.div 
              className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto md:mx-0"
              variants={iconContainerVariants}
            >
              <Trophy className="h-8 w-8 text-primary" />
            </motion.div>
            <h3 className="text-xl font-semibold text-primary mb-4 text-center md:text-left">Impulsa el Crecimiento</h3>
            <p className="text-gray-600 leading-relaxed text-center md:text-left">
              Transforma el potencial de tu equipo en resultados tangibles, acelerando el desarrollo profesional y el
              éxito de tu empresa.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            className="bg-white p-8 md:p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            variants={itemVariants}
          >
            <motion.div 
              className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto md:mx-0"
              variants={iconContainerVariants}
            >
              <BookOpen className="h-8 w-8 text-primary" />
            </motion.div>
            <h3 className="text-xl font-semibold text-primary mb-4 text-center md:text-left">Adapta el Aprendizaje</h3>
            <p className="text-gray-600 leading-relaxed text-center md:text-left">
              Personaliza la formación a las necesidades únicas de cada empleado, maximizando la retención y
              aplicación de conocimientos.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            className="bg-white p-8 md:p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            variants={itemVariants}
          >
            <motion.div 
              className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto md:mx-0"
              variants={iconContainerVariants}
            >
              <PieChart className="h-8 w-8 text-primary" />
            </motion.div>
            <h3 className="text-xl font-semibold text-primary mb-4 text-center md:text-left">Mide el Impacto</h3>
            <p className="text-gray-600 leading-relaxed text-center md:text-left">
              Visualiza el progreso en tiempo real y toma decisiones informadas para optimizar el rendimiento de tu
              equipo y tu inversión.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
