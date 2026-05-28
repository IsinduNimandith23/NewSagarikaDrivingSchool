import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

export default function GlassCard({
  children,
  variant = 'default',
  className = '',
  tilt = true,
  style = {},
  onClick
}) {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], ['8deg', '-8deg']), { stiffness: 200, damping: 18 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], ['-8deg', '8deg']), { stiffness: 200, damping: 18 })

  const handleMove = (e) => {
    if (!tilt || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const handleLeave = () => {
    mx.set(0)
    my.set(0)
  }

  const glassClass =
    variant === 'warm' ? 'glass-warm'
    : variant === 'strong' ? 'glass-strong'
    : 'glass'

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      style={{
        rotateX: tilt ? rotateX : 0,
        rotateY: tilt ? rotateY : 0,
        transformStyle: 'preserve-3d',
        transformPerspective: 1000,
        ...style
      }}
      className={`${glassClass} glass-card ${className}`}
    >
      <div style={{ transform: 'translateZ(30px)' }}>
        {children}
      </div>
    </motion.div>
  )
}
