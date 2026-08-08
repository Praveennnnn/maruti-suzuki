import { motion } from 'framer-motion'

export default function GlassCard({
  children,
  className = '',
  hover = true,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -8, scale: 1.01 } : undefined}
      className={`glass rounded-3xl p-6 md:p-8 ${className}`}
    >
      {children}
    </motion.div>
  )
}
