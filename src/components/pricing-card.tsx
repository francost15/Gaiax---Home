"use client"

import Link from "next/link"
import { Check, LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  popular?: boolean;
  icon: LucideIcon;
}

export const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  buttonText, 
  buttonLink, 
  popular = false,
  icon: Icon
}: PricingCardProps) => {
  return (
    <motion.div 
      className={`bg-white p-8 rounded-2xl border ${popular ? 'border-primary/30 shadow-xl shadow-primary/10' : 'border-gray-200 shadow-sm'} h-full flex flex-col relative`}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-sm font-medium py-1 px-4 rounded-full shadow-md">
          Recomendado
        </div>
      )}
      
      <div className="flex items-center mb-6">
        <div className={`h-14 w-14 rounded-full ${popular ? 'bg-primary/10' : 'bg-gray-100'} flex items-center justify-center`}>
          <Icon className={`h-7 w-7 ${popular ? 'text-primary' : 'text-gray-700'}`} />
        </div>
        <div className="ml-4">
          <h3 className={`text-xl font-bold ${popular ? 'text-primary' : 'text-gray-900'}`}>{title}</h3>
          <p className="text-gray-500 text-sm mt-1">{description}</p>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          {price !== 'Personalizado' && <span className="text-gray-500 ml-1">/mes por usuario</span>}
        </div>
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <motion.li 
            key={index} 
            className="flex items-start"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-gray-600">{feature}</span>
          </motion.li>
        ))}
      </ul>
      
      <Button 
        asChild
        className={`w-full rounded-xl py-6 ${popular 
          ? 'bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all' 
          : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
      >
        <Link href={buttonLink}>{buttonText}</Link>
      </Button>
    </motion.div>
  )
} 