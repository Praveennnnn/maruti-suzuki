import { motion } from 'framer-motion'
import { FaWhatsapp, FaCarSide } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import CtaButton from '../components/CtaButton'
import { CARS } from '../utils/constants'
import { buildWhatsAppUrl, MESSAGES } from '../utils/whatsapp'

export default function FeaturedCars() {
  return (
    <section id="cars" className="section-pad py-20 md:py-28 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="Featured Models"
        title="Choose Your Next Drive"
        subtitle="Explore popular Maruti Suzuki models with indicative pricing, mileage, and EMI estimates for Nagercoil buyers."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CARS.map((car, index) => (
          <motion.article
            key={car.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group glass rounded-[1.75rem] overflow-hidden"
          >
            <div className="relative h-52 md:h-56 overflow-hidden bg-panel-elevated">
              <motion.img
                src={car.image}
                alt={`Maruti Suzuki ${car.name}`}
                className="h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent pt-16 pb-4 px-5 text-white">
                <p className="font-display text-2xl font-extrabold">{car.name}</p>
                <p className="text-sm text-white/80">{car.tagline}</p>
              </div>
            </div>

            <div className="p-6 space-y-5">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-panel-elevated px-2 py-3">
                  <p className="text-[10px] uppercase tracking-wider text-muted mb-1">From</p>
                  <p className="text-sm font-semibold text-ink">{car.price}</p>
                </div>
                <div className="rounded-2xl bg-panel-elevated px-2 py-3">
                  <p className="text-[10px] uppercase tracking-wider text-muted mb-1">Mileage</p>
                  <p className="text-sm font-semibold text-ink">{car.mileage}</p>
                </div>
                <div className="rounded-2xl bg-panel-elevated px-2 py-3">
                  <p className="text-[10px] uppercase tracking-wider text-muted mb-1">EMI</p>
                  <p className="text-sm font-semibold text-accent">{car.emi}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <CtaButton
                  href="#lead"
                  variant="primary"
                  icon={FaCarSide}
                  className="flex-1 !text-sm"
                >
                  Book Test Drive
                </CtaButton>
                <CtaButton
                  href={buildWhatsAppUrl(MESSAGES.bestOffer(car.name))}
                  variant="whatsapp"
                  icon={FaWhatsapp}
                  className="flex-1 !text-sm"
                >
                  WhatsApp
                </CtaButton>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <p className="text-center text-xs text-muted mt-6">
        *Ex-showroom indicative. Final on-road price & EMI subject to variant, location, and bank norms.
      </p>
    </section>
  )
}
