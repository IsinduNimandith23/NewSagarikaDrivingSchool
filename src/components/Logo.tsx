'use client'

import { motion } from 'framer-motion'

export default function Logo({ height = 44 }: { height?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <img
        src="/logo.png"
        alt="New Sagarika Driving School"
        style={{ height, width: 'auto', display: 'block' }}
      />
    </motion.div>
  )
}
