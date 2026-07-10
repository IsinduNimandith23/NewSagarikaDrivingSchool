'use client'

import { motion } from 'framer-motion'

// Remounts on every navigation, replaying the page-enter animation the old
// react-router AnimatePresence wrapper provided. Exit animations aren't
// possible with the App Router (the outgoing page unmounts immediately).
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.main>
  )
}
