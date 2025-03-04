"use client"

import { Check, BookOpen, Trophy, PieChart, BarChart, Users, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ScrollAnimation, StaggerContainer } from "@/components/scroll-animation"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

// Interfaces para los props de los componentes
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

interface BenefitItemProps {
  title: string;
  description: string;
  index: number;
}

// Componente reutilizable para las características
const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div 
      className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </motion.div>
  );
};

// Componente para los beneficios
const BenefitItem = ({ title, description, index }: BenefitItemProps) => {
  return (
    <ScrollAnimation direction="right" delay={index * 0.1} className="w-full">
      <div className="flex gap-5 bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
          <Check className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default function CaracteristicasPage() {
  // Datos de las características
  const features = [
    {
      icon: BookOpen,
      title: "Contenido adaptativo",
      description: "Nuestro sistema ajusta automáticamente el contenido según el ritmo y estilo de aprendizaje de cada usuario."
    },
    {
      icon: Trophy,
      title: "Gamificación avanzada",
      description: "Elementos de juego que aumentan la motivación y el compromiso con el proceso de aprendizaje."
    },
    {
      icon: PieChart,
      title: "Análisis detallados",
      description: "Métricas en tiempo real que permiten evaluar el progreso y optimizar las estrategias de formación."
    },
    {
      icon: BarChart,
      title: "Seguimiento de competencias",
      description: "Monitoreo continuo del desarrollo de habilidades específicas con informes personalizados."
    },
    {
      icon: Users,
      title: "Aprendizaje colaborativo",
      description: "Herramientas que facilitan la interacción y el intercambio de conocimientos entre los miembros del equipo."
    },
    {
      icon: Zap,
      title: "Microaprendizaje",
      description: "Contenido conciso y enfocado que se puede consumir en períodos cortos, maximizando la retención."
    }
  ];

  // Datos de los beneficios
  const benefits = [
    {
      title: "Implementación rápida",
      description: "Configura tu plataforma en días, no en meses. Nuestro equipo te guía en cada paso del proceso."
    },
    {
      title: "Escalabilidad garantizada",
      description: "Nuestra plataforma crece con tu empresa, adaptándose a tus necesidades cambiantes sin complicaciones."
    },
    {
      title: "Soporte personalizado",
      description: "Equipo de expertos disponible para resolver tus dudas y ayudarte a maximizar el potencial de la plataforma."
    },
    {
      title: "Seguridad avanzada",
      description: "Protección de datos de nivel empresarial y cumplimiento con las normativas internacionales de privacidad."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="container max-w-5xl mx-auto px-6">
          <ScrollAnimation direction="down">
            <div className="text-center relative">
            
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Características diseñadas para el <span className="text-primary">aprendizaje moderno</span>
              </h1>
              <div className="w-20 h-1 bg-primary mx-auto my-6 rounded-full opacity-70"></div>
              <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
                Descubre cómo nuestra plataforma transforma la capacitación tradicional en experiencias de aprendizaje
                personalizadas y efectivas.
              </p>
            </div>
          </ScrollAnimation>

          {/* Características en grid */}
          <div className="mt-20">
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 0.05}
                />
              ))}
            </StaggerContainer>
          </div>

          <ScrollAnimation direction="up" delay={0.5} className="mt-16 text-center">
            <Button 
              asChild 
              size="lg" 
              className="rounded-xl px-8 py-6 bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all"
            >
              <Link href="/demo" className="flex items-center gap-2">
                Solicita una demostración
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container max-w-5xl mx-auto px-6">
          <ScrollAnimation direction="up">
            <div className="text-center mb-16">
            
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Por qué elegir GaiaX</h2>
              <div className="w-16 h-1 bg-primary mx-auto my-5 rounded-full opacity-70"></div>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Beneficios que nos diferencian de otras soluciones de formación
              </p>
            </div>
          </ScrollAnimation>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <BenefitItem
                key={index}
                title={benefit.title}
                description={benefit.description}
                index={index}
              />
            ))}
          </div>

         
        </div>
      </section>
    </>
  )
}

