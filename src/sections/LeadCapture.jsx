import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { FaPaperPlane } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import CtaButton from '../components/CtaButton'
import { MODELS } from '../utils/constants'
import { openWhatsApp, MESSAGES } from '../utils/whatsapp'

const times = ['Morning', 'Afternoon', 'Evening', 'Anytime']

export default function LeadCapture() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      mobile: '',
      model: 'Swift',
      time: 'Anytime',
    },
  })

  const onSubmit = (data) => {
    openWhatsApp(
      MESSAGES.lead({
        name: data.name,
        mobile: data.mobile,
        model: data.model,
        time: data.time,
      }),
    )
    reset()
  }

  return (
    <section id="lead" className="section-pad py-20 md:py-28">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
        <SectionHeading
          align="left"
          eyebrow="Maruti Suzuki Nagercoil Enquiry"
          title="Get Today’s Best Maruti Offer in Nagercoil"
          subtitle="Share your details and I’ll WhatsApp the best available Maruti Suzuki price, EMI, and exchange options in Nagercoil."
        />

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="glass rounded-[1.75rem] p-6 md:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" error={errors.name?.message}>
              <input
                {...register('name', { required: 'Please enter your name' })}
                placeholder="Your full name"
                className="field-input"
              />
            </Field>
            <Field label="Mobile Number" error={errors.mobile?.message}>
              <input
                {...register('mobile', {
                  required: 'Mobile number is required',
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message: 'Enter a valid 10-digit mobile',
                  },
                })}
                placeholder="+91 79042 54325"
                inputMode="numeric"
                className="field-input"
              />
            </Field>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Interested Model">
              <select {...register('model')} className="field-input">
                {MODELS.map((model) => (
                  <option key={model} value={model} className="bg-white text-ink">
                    {model}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Preferred Contact Time">
              <select {...register('time')} className="field-input">
                {times.map((time) => (
                  <option key={time} value={time} className="bg-white text-ink">
                    {time}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <CtaButton type="submit" variant="primary" icon={FaPaperPlane} fullWidth>
            Get Today’s Best Offer
          </CtaButton>

          <p className="text-xs text-muted text-center">
            Submitting opens WhatsApp with your enquiry — no spam, only direct assistance.
          </p>
        </motion.form>
      </div>

      <style>{`
        .field-input {
          width: 100%;
          border-radius: 1rem;
          border: 1px solid rgba(18,18,23,0.1);
          background: #f7f7f9;
          color: #121217;
          padding: 0.85rem 1rem;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .field-input:focus {
          border-color: rgba(225,6,0,0.55);
          box-shadow: 0 0 0 3px rgba(225,6,0,0.12);
          background: #ffffff;
        }
        .field-input::placeholder {
          color: #8a8a98;
        }
      `}</style>
    </section>
  )
}

function Field({ label, error, children }) {
  return (
    <label className="block space-y-2">
      <span className="text-sm text-muted">{label}</span>
      {children}
      {error ? <span className="block text-xs text-accent-bright">{error}</span> : null}
    </label>
  )
}
