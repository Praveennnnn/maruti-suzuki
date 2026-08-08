import { FaPhoneAlt, FaWhatsapp, FaCarSide } from 'react-icons/fa'
import { CONTACT } from '../utils/constants'
import { buildWhatsAppUrl, MESSAGES } from '../utils/whatsapp'

export default function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pointer-events-none">
      <div className="pointer-events-auto glass rounded-2xl grid grid-cols-3 overflow-hidden border border-black/8 shadow-lg shadow-black/10">
        <a
          href={`tel:${CONTACT.phone}`}
          className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-semibold text-ink hover:bg-black/3"
        >
          <FaPhoneAlt className="text-accent text-base" />
          Call
        </a>
        <a
          href={buildWhatsAppUrl(MESSAGES.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-semibold text-ink bg-[#25D366]/12 hover:bg-[#25D366]/20 border-x border-black/6"
        >
          <FaWhatsapp className="text-[#25D366] text-lg" />
          WhatsApp
        </a>
        <a
          href="#lead"
          className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-semibold text-ink hover:bg-black/3"
        >
          <FaCarSide className="text-accent text-base" />
          Test Drive
        </a>
      </div>
    </div>
  )
}
