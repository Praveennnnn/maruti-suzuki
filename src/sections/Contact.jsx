import { motion } from 'framer-motion'
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import CtaButton from '../components/CtaButton'
import { CONTACT } from '../utils/constants'
import { buildWhatsAppUrl, MESSAGES } from '../utils/whatsapp'

const channels = [
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: CONTACT.phoneDisplay,
    href: buildWhatsAppUrl(MESSAGES.general),
  },
  {
    icon: FaPhoneAlt,
    label: 'Call',
    value: CONTACT.phoneDisplay,
    href: `tel:${CONTACT.phone}`,
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-pad py-20 md:py-28 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="Let’s Connect"
        title="Contact & Showroom"
        subtitle="Reach me directly for offers, EMI, exchange, or a doorstep test drive."
      />

      <motion.a
        href={buildWhatsAppUrl(MESSAGES.general)}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.01 }}
        className="mb-8 md:mb-10 flex flex-col md:flex-row items-center justify-between gap-4 rounded-[1.75rem] px-6 py-6 md:px-10 md:py-8 bg-gradient-to-r from-[#128C7E] via-[#25D366] to-[#128C7E] text-ink shadow-[0_20px_60px_rgba(37,211,102,0.25)]"
      >
        <div className="flex items-center gap-4 text-center md:text-left">
          <FaWhatsapp className="text-4xl shrink-0" />
          <div>
            <p className="font-display text-2xl md:text-3xl font-extrabold">
              Chat on WhatsApp Instantly
            </p>
            <p className="text-sm md:text-base opacity-80">
              Fastest way to get today’s best Maruti offer in Nagercoil
            </p>
          </div>
        </div>
        <span className="rounded-2xl bg-ink text-white px-5 py-3 font-semibold text-sm">
          Message Suthan
        </span>
      </motion.a>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          {channels.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass rounded-2xl p-5 flex items-center gap-4 hover:bg-panel-elevated transition-colors"
              >
                <span className="h-12 w-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center text-xl">
                  <Icon />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-muted">
                    {item.label}
                  </span>
                  <span className="font-semibold">{item.value}</span>
                </span>
              </motion.a>
            )
          })}

          <div className="glass rounded-2xl p-5 flex items-start gap-4">
            <span className="h-12 w-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center text-xl shrink-0">
              <FaMapMarkerAlt />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted mb-1">Showroom Address</p>
              <p className="font-semibold leading-relaxed">{CONTACT.address}</p>
            </div>
          </div>

          <div className="glass rounded-2xl p-5 flex items-start gap-4">
            <span className="h-12 w-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center text-xl shrink-0">
              <FaClock />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted mb-1">Opening Hours</p>
              <p className="font-semibold">{CONTACT.hours.weekdays}</p>
              <p className="font-semibold text-muted">{CONTACT.hours.weekend}</p>
            </div>
          </div>

          <CtaButton href={`tel:${CONTACT.phone}`} variant="primary" icon={FaPhoneAlt} fullWidth>
            Call Now
          </CtaButton>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[1.75rem] overflow-hidden min-h-[360px]"
        >
          <iframe
            title="Aadhi Maruti Suzuki Nagercoil Map"
            src={CONTACT.mapsEmbed}
            className="h-full w-full min-h-[360px] border-0 grayscale-[20%] contrast-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  )
}
