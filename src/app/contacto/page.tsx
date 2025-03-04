"use client";

import { Mail,  Send,  CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ContactoPage() {
  const router = useRouter();
  const [formState, setFormState] = useState({
    nombre: "",
    email: "",
    empresa: "",
    telefono: "",
    mensaje: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulamos el envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Guardamos un indicador en sessionStorage para mostrar que el formulario fue enviado
      sessionStorage.setItem('formSubmitted', 'true');
      sessionStorage.setItem('contactName', formState.nombre);
      
      // Esperamos un momento para mostrar el estado de éxito y luego redirigimos
      setTimeout(() => {
        router.push('/gracias');
      }, 1000);
    }, 1500);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };


  
  const buttonVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <section className="py-12 md:py-20 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Contáctanos</h1>
        </motion.div>

        <motion.div 
          className="mt-12 bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
          <div className="p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">Envíanos un mensaje</h2>
                  <p className="mt-2 text-gray-600">Completa el formulario y te responderemos lo antes posible</p>
                </div>
                <div className="flex items-center gap-3 bg-primary/10 px-4 py-3 rounded-lg">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-primary font-medium">franco.sanchez@gaiax.mx</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  className="space-y-2"
                  variants={fadeIn}
                  custom={1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label htmlFor="nombre" className="text-sm font-medium text-gray-700">
                    Nombre completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    value={formState.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                  />
                </motion.div>

                <motion.div 
                  className="space-y-2"
                  variants={fadeIn}
                  custom={2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Correo electrónico <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="tu@correo.com"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                  />
                </motion.div>

                <motion.div 
                  className="space-y-2"
                  variants={fadeIn}
                  custom={3}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label htmlFor="empresa" className="text-sm font-medium text-gray-700">
                    Empresa
                  </label>
                  <input
                    id="empresa"
                    type="text"
                    placeholder="Nombre de tu empresa"
                    value={formState.empresa}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                  />
                </motion.div>

                <motion.div 
                  className="space-y-2"
                  variants={fadeIn}
                  custom={4}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label htmlFor="telefono" className="text-sm font-medium text-gray-700">
                    Teléfono
                  </label>
                  <input
                    id="telefono"
                    type="tel"
                    placeholder="+34 XXX XXX XXX"
                    value={formState.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                  />
                </motion.div>

                <motion.div 
                  className="space-y-2 md:col-span-2"
                  variants={fadeIn}
                  custom={5}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label htmlFor="mensaje" className="text-sm font-medium text-gray-700">
                    ¿Cómo podemos ayudarte? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    rows={5}
                    placeholder="Cuéntanos más sobre tu equipo y necesidades..."
                    value={formState.mensaje}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                  ></textarea>
                </motion.div>

                <motion.div 
                  className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-6"
                  variants={fadeIn}
                  custom={6}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <p className="text-sm text-gray-500">
                    Al enviar este formulario, aceptas nuestra{" "}
                    <Link href="/privacidad" className="text-primary hover:underline">
                      política de privacidad
                    </Link>.
                  </p>
                  
                  <motion.button 
                    type="submit"
                    className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg disabled:opacity-70"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    disabled={isSubmitting || isSubmitted}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                        <span>Enviando...</span>
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle2 className="h-5 w-5" />
                        <span>¡Enviado!</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Enviar mensaje</span>
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </div>
        </motion.div>
        
        {/* Elementos decorativos */}
        <div className="absolute -z-10 top-40 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -z-10 bottom-40 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}

