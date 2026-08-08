import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { CONTACT } from '../utils/constants'
import { buildWhatsAppUrl, MESSAGES } from '../utils/whatsapp'
import CtaButton from './CtaButton'
import logo from '../assets/images/logo.png'

const links = [
  { href: '#offers', label: 'Offers' },
  { href: '#cars', label: 'Cars' },
  { href: '#emi', label: 'EMI' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-40 bg-white transition-shadow duration-300 ${
        scrolled ? 'border-b border-black/6 shadow-sm' : ''
      }`}
    >
      <div className="section-pad mx-auto max-w-7xl flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center shrink-0" aria-label={CONTACT.name}>
          <img
            src={logo}
            alt="Maruti Suzuki"
            width={304}
            height={34}
            className="h-[22px] w-auto max-w-[200px] md:h-[34px] md:max-w-[304px] md:w-[304px] object-contain object-left"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm text-muted">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <CtaButton
          href={buildWhatsAppUrl(MESSAGES.general)}
          variant="whatsapp"
          icon={FaWhatsapp}
          className="!py-2.5 !px-4 !text-sm"
        >
          WhatsApp
        </CtaButton>
      </div>
    </motion.header>
  )
}
