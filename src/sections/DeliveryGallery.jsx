import { useRef } from 'react'
import { motion } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import { DELIVERIES } from '../utils/constants'

export default function DeliveryGallery() {
  const scrollerRef = useRef(null)

  const scrollBy = (dir) => {
    const node = scrollerRef.current
    if (!node) return
    node.scrollBy({ left: dir * Math.min(node.clientWidth * 0.85, 420), behavior: 'smooth' })
  }

  return (
    <section id="gallery" className="py-20 md:py-28 overflow-hidden">
      <div className="section-pad max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-4 mb-4">
          <SectionHeading
            align="left"
            eyebrow="Maruti Deliveries Nagercoil"
            title="Happy Maruti Customers in Nagercoil"
            subtitle="Real handovers from Maruti Suzuki buyers across Nagercoil and Kanyakumari."
          />
          <div className="hidden sm:flex gap-2 shrink-0 mb-14">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              className="h-11 w-11 rounded-full glass flex items-center justify-center hover:bg-panel-elevated text-ink"
              aria-label="Previous"
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              className="h-11 w-11 rounded-full glass flex items-center justify-center hover:bg-panel-elevated text-ink"
              aria-label="Next"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="section-pad flex gap-5 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-2"
      >
        {DELIVERIES.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className="snap-start shrink-0 w-[85%] sm:w-[420px] glass rounded-[1.75rem] overflow-hidden"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={item.image}
                alt={`${item.name} took delivery of ${item.model}`}
                className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 text-white">
                <p className="font-display font-bold text-xl">{item.name}</p>
                <p className="text-sm text-[#ff8a80] font-semibold">{item.model}</p>
              </div>
            </div>
            <div className="p-6">
              <FaQuoteLeft className="text-accent/70 mb-3" />
              <p className="text-sm text-muted leading-relaxed">“{item.quote}”</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
