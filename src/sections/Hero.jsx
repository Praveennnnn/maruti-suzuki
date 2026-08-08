import { motion } from 'framer-motion'
import { FaWhatsapp, FaCarSide } from 'react-icons/fa'
import CtaButton from '../components/CtaButton'
import { CONTACT } from '../utils/constants'
import { buildWhatsAppUrl, MESSAGES } from '../utils/whatsapp'
import { brezza } from '../assets/images'

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end md:items-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img
          src={brezza}
          alt="Maruti Suzuki Brezza at Aadhi Maruti Suzuki Nagercoil"
          className="h-full w-full object-cover object-top"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />

      <div className="relative z-10 section-pad w-full max-w-7xl mx-auto pt-28 pb-20 md:pb-28">
        <div className="max-w-4xl">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-3 mb-6"
          >
            <img
              src={CONTACT.photo}
              alt={`${CONTACT.name} - Relationship Manager`}
              className="h-20 w-20 rounded-full ring-2 ring-accent/70 object-cover object-top bg-panel"
            />
            <div className="leading-tight">
              <p className="font-display font-bold text-lg text-white">
                {CONTACT.name}
              </p>
              <p className="text-sm text-white/70 mt-1">
                {CONTACT.designation}
              </p>
            </div>
          </motion.div>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-white/65 text-xs md:text-sm tracking-[0.22em] uppercase mb-5"
          >
            Authorized Maruti Suzuki Dealership · Aadhi Maruti Suzuki
          </motion.p>

          <motion.h1
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-display font-extrabold text-white leading-[0.98] tracking-tight mb-4"
          >
            <span className="block text-[clamp(2.4rem,7vw,5.5rem)]">
              Maruti Suzuki Nagercoil
            </span>
            <span className="mt-2 md:mt-3 flex items-center gap-3 md:gap-4">
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.55, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="h-[3px] w-10 md:w-14 origin-left bg-accent shrink-0"
              />
              <span className="text-[clamp(1.35rem,3.8vw,2.25rem)] text-white/95">
                Best Offers · EMI · Test Drive
              </span>
            </span>
          </motion.h1>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-white/80 text-lg md:text-2xl font-display font-semibold max-w-2xl leading-snug mb-4"
          >
            Drive home your dream Maruti at Aadhi Maruti Suzuki
          </motion.p>

          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-white/65 text-base md:text-lg max-w-xl leading-relaxed mb-9"
          >
            Exclusive Maruti Suzuki offers in Nagercoil — exchange bonus, finance assistance,
            and doorstep test drives across Kanyakumari district.
          </motion.p>

          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-3"
          >
            <CtaButton
              href={buildWhatsAppUrl(MESSAGES.general)}
              variant="whatsapp"
              icon={FaWhatsapp}
            >
              WhatsApp Now
            </CtaButton>
            <CtaButton href="#lead" variant="primary" icon={FaCarSide}>
              Book Test Drive
            </CtaButton>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
