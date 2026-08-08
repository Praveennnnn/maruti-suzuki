import { CONTACT } from './constants'

export function buildWhatsAppUrl(message) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${CONTACT.whatsapp}?text=${text}`
}

export function openWhatsApp(message) {
  window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
}

export const MESSAGES = {
  general: `Hi ${CONTACT.shortName}, I'm interested in buying a Maruti Suzuki from ${CONTACT.dealership}, Nagercoil. Please share today's best offers.`,
  testDrive: (model = 'Maruti') =>
    `Hi ${CONTACT.shortName}, I want to book a test drive for ${model} in Nagercoil / Kanyakumari. Please share available slots.`,
  bestOffer: (model = '') =>
    `Hi ${CONTACT.shortName}, please share today's best offer${model ? ` on ${model}` : ''} including exchange & finance options.`,
  emi: (model = 'Maruti', emi = '') =>
    `Hi ${CONTACT.shortName}, I checked the EMI calculator${emi ? ` (approx ${emi}/month)` : ''}. Please help with finance options for ${model}.`,
  exchange: `Hi ${CONTACT.shortName}, I'm interested in exchanging my car for a new Maruti. Please help with valuation and exchange bonus.`,
  lead: ({ name, mobile, model, time }) =>
    `Hi ${CONTACT.shortName}, new enquiry from your landing page:\nName: ${name}\nMobile: ${mobile}\nModel: ${model}\nPreferred time: ${time}\nPlease share today's best offer.`,
}
