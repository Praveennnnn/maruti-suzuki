import {
  FaTags,
  FaHandshake,
  FaBolt,
  FaExchangeAlt,
  FaHome,
  FaTruck,
  FaFileAlt,
  FaHeadset,
} from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'
import { WHY_BUY } from '../utils/constants'

const icons = [FaTags, FaHandshake, FaBolt, FaExchangeAlt, FaHome, FaTruck, FaFileAlt, FaHeadset]

export default function WhyBuy() {
  return (
    <section id="why" className="section-pad py-20 md:py-28 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="Why Buy Maruti Suzuki in Nagercoil With Me"
        subtitle="A dedicated Relationship Manager at Aadhi Maruti Suzuki Nagercoil focused on price, paperwork, finance, and a seamless ownership start."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {WHY_BUY.map((item, index) => {
          const Icon = icons[index]
          return (
            <GlassCard key={item.id} delay={index * 0.05} className="!p-5 md:!p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Icon />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </GlassCard>
          )
        })}
      </div>
    </section>
  )
}
