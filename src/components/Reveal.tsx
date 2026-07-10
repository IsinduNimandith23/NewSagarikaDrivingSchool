'use client'

import { motion } from 'framer-motion'

const variants = {
  up:    { hidden: { opacity: 0, y: 50 },  show: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -50 }, show: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: 50 },  show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1 } },
  rotate3d: {
    hidden: { opacity: 0, rotateX: -25, y: 60 },
    show:   { opacity: 1, rotateX: 0, y: 0 }
  }
}

type RevealProps = {
  children: React.ReactNode
  direction?: keyof typeof variants
  delay?: number
  duration?: number
  once?: boolean
  amount?: number
  className?: string
  style?: React.CSSProperties
}

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  once = true,
  amount = 0.25,
  className = '',
  style = {}
}: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants[direction] || variants.up}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={{ transformStyle: 'preserve-3d', perspective: 1200, ...style }}
    >
      {children}
    </motion.div>
  )
}
