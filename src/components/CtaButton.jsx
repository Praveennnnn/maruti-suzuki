import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-accent text-white shadow-[0_12px_40px_rgba(225,6,0,0.35)] hover:bg-accent-bright',
  secondary:
    'bg-white text-ink border border-black/10 hover:bg-panel-elevated shadow-sm',
  outline:
    'border border-accent/70 text-ink hover:bg-accent/10',
  whatsapp:
    'bg-[#25D366] text-white hover:bg-[#2fe472] shadow-[0_12px_36px_rgba(37,211,102,0.28)]',
}

export default function CtaButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  icon: Icon,
  type = 'button',
  fullWidth = false,
}) {
  const classes = `
    inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5
    text-sm md:text-base font-semibold tracking-wide transition-colors
    ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}
  `

  const content = (
    <>
      {Icon ? <Icon className="text-lg shrink-0" /> : null}
      <span>{children}</span>
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={classes}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
    >
      {content}
    </motion.button>
  )
}
