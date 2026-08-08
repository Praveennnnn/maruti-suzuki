import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import { CONTACT } from '../utils/constants'

const trustPoints = [
  'Dedicated Relationship Manager at Aadhi Maruti Suzuki',
  'Support across Nagercoil & Kanyakumari district',
  'Finance, exchange, documentation & delivery coordination',
  'Transparent offers with personal follow-up',
]

export default function About() {
  return (
    <section id="about" className="section-pad py-20 md:py-28 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/30 via-transparent to-white/5 blur-xl" />
          <div className="relative glass rounded-[2rem] p-8 md:p-10 text-center overflow-hidden">
            <img
              src={CONTACT.photo}
              alt={CONTACT.name}
              className="mx-auto h-40 w-40 rounded-full ring-4 ring-accent/40 object-cover object-top mb-6"
            />
            <h3 className="font-display text-3xl font-extrabold">{CONTACT.name}</h3>
            <p className="text-accent font-semibold mt-1">{CONTACT.designation}</p>
            <p className="text-accent font-semibold mt-1">{CONTACT.phoneDisplay}</p>

            <p className="text-muted text-sm mt-2">
              {CONTACT.dealership}
              <br />
              {CONTACT.city}, Tamil Nadu,
            </p>
          </div>
        </motion.div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About Me"
            title="Your Trusted Maruti Partner in Nagercoil"
            subtitle="I help customers across Nagercoil and Kanyakumari district find the right Maruti Suzuki car at the best possible price with complete finance, exchange, and delivery support."
          />

          <ul className="space-y-3">
            {trustPoints.map((point, index) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-start gap-3 text-sm md:text-base text-ink/90"
              >
                <FaCheckCircle className="text-accent mt-1 shrink-0" />
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
