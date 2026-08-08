import { FaInstagram, FaFacebookF, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import { CONTACT } from '../utils/constants'
import { buildWhatsAppUrl, MESSAGES } from '../utils/whatsapp'
import logo from '../assets/images/logo.png'

const socialLinks = [
  {
    href: CONTACT.social.instagram,
    label: 'Instagram',
    icon: FaInstagram,
  },
  {
    href: CONTACT.social.facebook,
    label: 'Facebook',
    icon: FaFacebookF,
  },
]

export default function Footer() {
  return (
    <footer className="section-pad border-t border-black/8 bg-white py-10 pb-28 md:pb-12">
      <div className="mx-auto max-w-7xl space-y-8 text-sm text-muted">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <a href="#top" className="inline-block mb-4">
              <img
                src={logo}
                alt="Maruti Suzuki"
                width={304}
                height={34}
                className="h-7 w-auto max-w-[220px] object-contain object-left"
              />
            </a>
            <p className="font-display text-lg font-bold text-ink">
              {CONTACT.dealership} · {CONTACT.city}
            </p>
            <p className="mt-1 font-semibold text-ink">
              {CONTACT.name} · {CONTACT.designation}
            </p>
            <p className="mt-2 leading-relaxed">{CONTACT.address}</p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href={buildWhatsAppUrl(MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink transition-colors hover:text-accent"
              >
                <FaWhatsapp className="text-base" />
                WhatsApp
              </a>
              <span className="text-black/20">·</span>
              <a
                href={`tel:${CONTACT.phone}`}
                className="inline-flex items-center gap-2 text-ink transition-colors hover:text-accent"
              >
                <FaPhoneAlt className="text-sm" />
                {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="md:text-right">
            <p className="font-semibold text-ink">Opening Hours</p>
            <p className="mt-1">{CONTACT.hours.weekdays}</p>
            <p>{CONTACT.hours.weekend}</p>

            <p className="mt-5 font-semibold text-ink">Follow Us</p>
            <div className="mt-3 flex gap-3 md:justify-end">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-ink transition-colors hover:border-accent hover:bg-accent hover:text-white"
                >
                  <Icon className="text-base" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="border-t border-black/8 pt-4 text-xs md:text-sm">
          {CONTACT.copyright}
        </p>
      </div>
    </footer>
  )
}
