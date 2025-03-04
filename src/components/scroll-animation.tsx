"use client"

import React, { ReactNode } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

type AnimationDirection = "up" | "down" | "left" | "right" | "scale" | "fade"

interface ScrollAnimationProps {
  children: ReactNode
  direction?: AnimationDirection
  delay?: number
  duration?: number
  threshold?: number
  className?: string
  once?: boolean
}

export const animations = {
  up: {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  },
  down: {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  },
  left: {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  },
  right: {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  },
  scale: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
}

export const ScrollAnimation = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className = "",
  once = true
}: ScrollAnimationProps) => {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold
  })

  const selectedAnimation = animations[direction]

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={selectedAnimation}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const StaggerContainer = ({ 
  children,
  staggerDelay = 0.1, 
  className = "",
  viewportThreshold = 0.1,
  once = true
}: {
  children: ReactNode
  staggerDelay?: number
  className?: string
  viewportThreshold?: number
  once?: boolean
}) => {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: viewportThreshold
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  )
} 