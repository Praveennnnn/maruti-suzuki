import { CONTACT, CARS } from './constants'

/** Prefer VITE_SITE_URL in .env; otherwise use the live host after deploy. */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL ||
  (typeof window !== 'undefined' ? window.location.origin : 'https://www.marutisuzukinagercoil.com')
).replace(/\/$/, '')

export const SITE_NAME = `${CONTACT.dealership} Nagercoil`

export const SEO = {
  title:
    'Maruti Suzuki Nagercoil | Best Price, Offers & Test Drive | Aadhi Maruti Suzuki',
  description:
    'Maruti Suzuki Nagercoil – buy Swift, Brezza, Dzire, Ertiga, Baleno & Fronx at Aadhi Maruti Suzuki. Best offers, exchange bonus, EMI from ₹8,999, and doorstep test drive. Call Mr.S.Suthan +91 79042 54325.',
  keywords: [
    'Maruti Suzuki Nagercoil',
    'Maruti Suzuki dealer Nagercoil',
    'Aadhi Maruti Suzuki Nagercoil',
    'Swift price Nagercoil',
    'Brezza offer Nagercoil',
    'Dzire Nagercoil',
    'Ertiga EMI Nagercoil',
    'Baleno Nagercoil',
    'Fronx Nagercoil',
    'Maruti test drive Nagercoil',
    'best Maruti dealer Kanyakumari',
    'Maruti Suzuki Krishnankovil',
    'Maruti showroom Nagercoil',
  ],
  ogImage: `${SITE_URL}/og-image.jpg`,
  locale: 'en_IN',
  geo: {
    region: 'IN-TN',
    placename: 'Nagercoil',
    position: '8.1833;77.4119',
  },
}

export const carNames = CARS.map((car) => car.name).join(', ')
