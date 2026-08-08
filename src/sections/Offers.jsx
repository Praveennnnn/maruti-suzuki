import { FaGift, FaExchangeAlt, FaRupeeSign } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'
import AnimatedCounter from '../components/AnimatedCounter'
import { OFFERS } from '../utils/constants'

const icons = {
  benefits: FaGift,
  exchange: FaExchangeAlt,
  emi: FaRupeeSign,
}

export default function Offers() {
  return (
    <section id="offers" className="section-pad py-20 md:py-28 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="Exclusive Benefits"
        title="Offers Built to Close the Deal"
        subtitle="Premium value on purchase, exchange, and finance — structured for buyers across Nagercoil & Kanyakumari."
      />

      <div className="grid md:grid-cols-3 gap-5 md:gap-6">
        {OFFERS.map((offer, index) => {
          const Icon = icons[offer.id]
          return (
            <GlassCard key={offer.id} delay={index * 0.08} className="relative overflow-hidden">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent/15 blur-2xl" />
              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                  <Icon className="text-xl" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-2 text-ink">{offer.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-5">{offer.description}</p>
                {offer.id === 'benefits' ? (
                  <p className="font-display text-accent text-3xl font-extrabold">
                    ₹
                    <AnimatedCounter value={75000} />
                  </p>
                ) : offer.id === 'emi' ? (
                  <p className="font-display text-accent text-3xl font-extrabold">
                    ₹
                    <AnimatedCounter value={8999} />
                    <span className="text-base text-muted font-semibold">/mo</span>
                  </p>
                ) : (
                  <p className="font-display text-accent text-3xl font-extrabold">Bonus+</p>
                )}
              </div>
            </GlassCard>
          )
        })}
      </div>
    </section>
  )
}
