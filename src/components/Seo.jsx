import { useEffect } from 'react'
import { CONTACT, CARS, FAQS } from '../utils/constants'
import { SEO, SITE_NAME, SITE_URL, carNames } from '../utils/seo'

function setMeta(attr, key, content) {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  if (!href) return
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function injectJsonLd(id, data) {
  let script = document.getElementById(id)
  if (!script) {
    script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(data)
}

export default function Seo() {
  useEffect(() => {
    document.title = SEO.title
    document.documentElement.lang = 'en-IN'

    setMeta('name', 'description', SEO.description)
    setMeta('name', 'keywords', SEO.keywords.join(', '))
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    setMeta('name', 'googlebot', 'index, follow')
    setMeta('name', 'author', CONTACT.name)
    setMeta('name', 'geo.region', SEO.geo.region)
    setMeta('name', 'geo.placename', SEO.geo.placename)
    setMeta('name', 'geo.position', SEO.geo.position)
    setMeta('name', 'ICBM', SEO.geo.position.replace(';', ', '))

    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:title', SEO.title)
    setMeta('property', 'og:description', SEO.description)
    setMeta('property', 'og:url', SITE_URL)
    setMeta('property', 'og:image', SEO.ogImage)
    setMeta('property', 'og:image:alt', 'Maruti Suzuki Nagercoil – Aadhi Maruti Suzuki showroom offers')
    setMeta('property', 'og:locale', SEO.locale)
    setMeta('property', 'og:site_name', SITE_NAME)

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', SEO.title)
    setMeta('name', 'twitter:description', SEO.description)
    setMeta('name', 'twitter:image', SEO.ogImage)

    setLink('canonical', SITE_URL)

    const autoDealer = {
      '@context': 'https://schema.org',
      '@type': 'AutoDealer',
      '@id': `${SITE_URL}/#dealer`,
      name: `${CONTACT.dealership} Nagercoil`,
      alternateName: ['Maruti Suzuki Nagercoil', 'Aadhi Maruti Suzuki Nagercoil', CONTACT.name],
      description: SEO.description,
      url: SITE_URL,
      telephone: CONTACT.phone,
      email: CONTACT.email,
      image: SEO.ogImage,
      priceRange: '₹₹',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, Credit Card, Debit Card, UPI, Bank Finance',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'S P Mall, near Ananda Departmental Store, Krishnankovil',
        addressLocality: CONTACT.city,
        addressRegion: 'Tamil Nadu',
        postalCode: '629001',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 8.1833,
        longitude: 77.4119,
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
      areaServed: [
        { '@type': 'City', name: 'Nagercoil' },
        { '@type': 'AdministrativeArea', name: 'Kanyakumari' },
      ],
      brand: {
        '@type': 'Brand',
        name: 'Maruti Suzuki',
      },
      employee: {
        '@type': 'Person',
        name: CONTACT.name,
        jobTitle: CONTACT.designation,
        telephone: CONTACT.phone,
        email: CONTACT.email,
        worksFor: { '@id': `${SITE_URL}/#dealer` },
      },
      sameAs: [CONTACT.social?.instagram, CONTACT.social?.facebook].filter(Boolean),
      makesOffer: CARS.map((car) => ({
        '@type': 'Offer',
        name: `Maruti Suzuki ${car.name} Nagercoil`,
        description: `${car.tagline} Available at Aadhi Maruti Suzuki Nagercoil. EMI from ${car.emi}.`,
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        itemOffered: {
          '@type': 'Car',
          name: `Maruti Suzuki ${car.name}`,
          brand: 'Maruti Suzuki',
          model: car.name,
        },
      })),
      knowsAbout: [
        'Maruti Suzuki Nagercoil',
        'Maruti car offers Nagercoil',
        'Maruti EMI Nagercoil',
        'Maruti test drive Nagercoil',
        carNames,
      ],
    }

    const website = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SEO.description,
      inLanguage: 'en-IN',
      publisher: { '@id': `${SITE_URL}/#dealer` },
    }

    const webpage = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: SEO.title,
      description: SEO.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#dealer` },
      primaryImageOfPage: SEO.ogImage,
      inLanguage: 'en-IN',
    }

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }

    injectJsonLd('schema-auto-dealer', autoDealer)
    injectJsonLd('schema-website', website)
    injectJsonLd('schema-webpage', webpage)
    injectJsonLd('schema-faq', faqSchema)
  }, [])

  return null
}
