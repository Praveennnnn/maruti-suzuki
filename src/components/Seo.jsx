import { useEffect } from 'react'
import { CONTACT, FAQS } from '../utils/constants'

const TITLE =
  'Maruti Suzuki Nagercoil | Best Offers on Swift, Brezza & Dzire | Mr.S.Suthan – Aadhi Maruti Suzuki'
const DESCRIPTION =
  'Buy Maruti Suzuki in Nagercoil with exclusive offers, exchange bonus, EMI from ₹8,999 & doorstep test drive. Contact Mr.S.Suthan, Relationship Manager at Aadhi Maruti Suzuki.'

export default function Seo() {
  useEffect(() => {
    document.title = TITLE

    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('name', 'description', DESCRIPTION)
    setMeta(
      'name',
      'keywords',
      [
        'Maruti Suzuki Nagercoil',
        'Swift Price Nagercoil',
        'Brezza Offer Nagercoil',
        'Ertiga EMI Nagercoil',
        'Maruti Test Drive Nagercoil',
        'Best Maruti Dealer Nagercoil',
        'Aadhi Maruti Suzuki Nagercoil',
      ].join(', '),
    )

    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:title', TITLE)
    setMeta('property', 'og:description', DESCRIPTION)
    setMeta('property', 'og:locale', 'en_IN')
    setMeta('property', 'og:site_name', `Mr.S.Suthan | ${CONTACT.dealership}`)

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', TITLE)
    setMeta('name', 'twitter:description', DESCRIPTION)

    const localBusiness = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: `${CONTACT.dealership} — ${CONTACT.name}`,
      description: DESCRIPTION,
      telephone: CONTACT.phone,
      email: CONTACT.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: CONTACT.address,
        addressLocality: CONTACT.city,
        addressRegion: 'Tamil Nadu',
        postalCode: '629001',
        addressCountry: 'IN',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '21:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday', 'Sunday'],
          opens: '09:00',
          closes: '12:00',
        },
      ],
      priceRange: '₹₹',
      areaServed: ['Nagercoil', 'Kanyakumari'],
      employee: {
        '@type': 'Person',
        name: CONTACT.name,
        jobTitle: CONTACT.designation,
      },
    }

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }

    const inject = (id, data) => {
      let script = document.getElementById(id)
      if (!script) {
        script = document.createElement('script')
        script.id = id
        script.type = 'application/ld+json'
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(data)
    }

    inject('schema-local-business', localBusiness)
    inject('schema-faq', faqSchema)
  }, [])

  return null
}
