import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import CtaButton from '../components/CtaButton'
import { calculateEmi, formatINR } from '../utils/emi'
import { buildWhatsAppUrl, MESSAGES } from '../utils/whatsapp'

function SliderField({ label, value, min, max, step, onChange, display }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <label className="text-sm text-muted">{label}</label>
        <span className="font-semibold text-ink text-sm md:text-base">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full range-accent h-2 rounded-full appearance-none bg-black/8 cursor-pointer"
      />
    </div>
  )
}

export default function EmiCalculator() {
  const [price, setPrice] = useState(850000)
  const [downPayment, setDownPayment] = useState(150000)
  const [rate, setRate] = useState(9.5)
  const [tenure, setTenure] = useState(60)

  const principal = Math.max(price - downPayment, 0)
  const emi = useMemo(
    () => calculateEmi(principal, rate, tenure),
    [principal, rate, tenure],
  )

  return (
    <section id="emi" className="section-pad py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Finance Planner"
          title="EMI Calculator"
          subtitle="Adjust price, down payment, interest, and tenure to see your estimated monthly EMI instantly."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6"
        >
          <div className="glass rounded-[1.75rem] p-6 md:p-8 space-y-7">
            <SliderField
              label="Car Price"
              value={price}
              min={400000}
              max={2000000}
              step={10000}
              onChange={(v) => {
                setPrice(v)
                if (downPayment > v * 0.7) setDownPayment(Math.round(v * 0.2))
              }}
              display={formatINR(price)}
            />
            <SliderField
              label="Down Payment"
              value={downPayment}
              min={0}
              max={Math.round(price * 0.7)}
              step={5000}
              onChange={setDownPayment}
              display={formatINR(downPayment)}
            />
            <SliderField
              label="Interest Rate"
              value={rate}
              min={7}
              max={14}
              step={0.1}
              onChange={setRate}
              display={`${rate.toFixed(1)}% p.a.`}
            />
            <SliderField
              label="Loan Tenure"
              value={tenure}
              min={12}
              max={84}
              step={6}
              onChange={setTenure}
              display={`${tenure} months`}
            />
          </div>

          <div className="glass rounded-[1.75rem] p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-accent/20 via-transparent to-transparent">
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-muted mb-2">
                Estimated Monthly EMI
              </p>
              <motion.p
                key={Math.round(emi)}
                initial={{ scale: 0.96, opacity: 0.6 }}
                animate={{ scale: 1, opacity: 1 }}
                className="font-display text-4xl md:text-5xl font-extrabold text-gradient mb-6"
              >
                {formatINR(emi)}
              </motion.p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-black/8 pb-2">
                  <span className="text-muted">Loan Amount</span>
                  <span className="font-semibold text-ink">{formatINR(principal)}</span>
                </div>
                <div className="flex justify-between border-b border-black/8 pb-2">
                  <span className="text-muted">Total Payable</span>
                  <span className="font-semibold text-ink">{formatINR(emi * tenure)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Interest Component</span>
                  <span className="font-semibold text-ink">{formatINR(emi * tenure - principal)}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <CtaButton
                href={buildWhatsAppUrl(MESSAGES.emi('Maruti', formatINR(emi)))}
                variant="whatsapp"
                icon={FaWhatsapp}
                fullWidth
              >
                Get Finance Assistance
              </CtaButton>
              <p className="text-[11px] text-muted text-center">
                Indicative only. Final EMI depends on bank eligibility & scheme.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
