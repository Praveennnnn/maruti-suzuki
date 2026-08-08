import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlus, FaMinus } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import { FAQS } from '../utils/constants'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="section-pad py-20 md:py-28 max-w-4xl mx-auto">
      <SectionHeading
        eyebrow="FAQ"
        title="Common Questions"
        subtitle="Quick answers for Maruti buyers searching offers, EMI, and test drives in Nagercoil."
      />

      <div className="space-y-3">
        {FAQS.map((faq, index) => {
          const isOpen = open === index
          return (
            <div key={faq.question} className="glass rounded-2xl overflow-hidden">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : index)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-display font-semibold text-base md:text-lg text-ink">
                  {faq.question}
                </span>
                <span className="text-accent shrink-0">
                  {isOpen ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28 }}
                  >
                    <p className="px-5 pb-5 text-sm text-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
