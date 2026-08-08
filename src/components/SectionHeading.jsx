import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignment =
    align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto'

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-10 md:mb-14 flex flex-col gap-3 max-w-3xl ${alignment}`}
    >
      {eyebrow ? (
        <span className="text-xs md:text-sm tracking-[0.28em] uppercase text-accent font-semibold">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight text-ink">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl">{subtitle}</p>
      ) : null}
    </motion.div>
  )
}
