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
              alt={`${CONTACT.name}, Relationship Manager for Maruti Suzuki Nagercoil at ${CONTACT.dealership}`}
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
            eyebrow="About Maruti Suzuki Nagercoil"
            title="Your Trusted Maruti Suzuki Partner in Nagercoil"
            subtitle="Looking for Maruti Suzuki in Nagercoil? I help buyers across Nagercoil and Kanyakumari district choose the right car at the best price with complete finance, exchange, and delivery support at Aadhi Maruti Suzuki."
          />

          <p className="mb-6 text-sm md:text-base text-muted leading-relaxed">
            At Aadhi Maruti Suzuki Nagercoil (S P Mall, Krishnankovil), explore Swift, Brezza,
            Dzire, Ertiga, Baleno, and Fronx with transparent offers, EMI guidance, and
            doorstep test drives. For the latest Maruti Suzuki Nagercoil price and booking
            support, WhatsApp or call {CONTACT.name} directly.
          </p>

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
