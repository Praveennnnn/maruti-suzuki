import {
  swift,
  brezza,
  dzire,
  ertiga,
  baleno,
  fronx,
  customer1,
  customer2,
  customer3,
  customer4,
  customer5,
  suthan,
} from '../assets/images'

export const CONTACT = {
  name: 'Mr.S.Suthan',
  shortName: 'Suthan',
  designation: 'Relationship Manager',
  dealership: 'Aadhi Maruti Suzuki',
  city: 'Nagercoil',
  district: 'Kanyakumari',
  phone: '+917904254325',
  phoneDisplay: '+91 79042 54325',
  whatsapp: '917904254325',
  email: 'suthanshaar@gmail.com',
  address:
    'S P Mall, near Ananda Departmental Store, Krishnankovil, Nagercoil, Tamil Nadu 629001',
  photo: suthan,
  mapsEmbed:
    'https://www.google.com/maps?q=S+P+Mall+near+Ananda+departmental+store+Krishnankovil+Nagercoil+629001&output=embed',
  hours: {
    weekdays: 'Monday – Friday: 09:00 AM – 09:00 PM',
    weekend: 'Saturday – Sunday: 09:00 AM – 12:00 PM',
  },
  social: {
    // instagram: 'https://www.instagram.com/aadhimaruti/',
    // facebook: 'https://www.facebook.com/aadhimaruti',
  },
  copyright:
    'Copyright © 2026 Aadhi Maruthi All Rights Reserved. Designed and developed by Praveen 🌹',
}

export const OFFERS = [
  {
    id: 'benefits',
    title: 'Up to ₹75,000 Benefits',
    description: 'Limited-period corporate & festive benefits on select models.',
    highlight: '₹75,000',
  },
  {
    id: 'exchange',
    title: 'Exchange Bonus Available',
    description: 'Get extra value when you upgrade your existing car with us.',
    highlight: 'Bonus',
  },
  {
    id: 'emi',
    title: 'EMI from ₹8,999/month',
    description: 'Flexible finance plans with quick approval support.',
    highlight: '₹8,999',
  },
]

export const CARS = [
  {
    id: 'swift',
    name: 'Swift',
    tagline: 'Sporty. Sharp. Everyday fun.',
    price: '₹6.49 Lakh*',
    priceValue: 649000,
    mileage: '24.8 km/l*',
    emi: '₹8,999/mo*',
    image: swift,
  },
  {
    id: 'brezza',
    name: 'Brezza',
    tagline: 'Urban SUV confidence.',
    price: '₹8.69 Lakh*',
    priceValue: 869000,
    mileage: '19.8 km/l*',
    emi: '₹12,499/mo*',
    image: brezza,
  },
  {
    id: 'dzire',
    name: 'Dzire',
    tagline: 'Premium compact sedan comfort.',
    price: '₹6.79 Lakh*',
    priceValue: 679000,
    mileage: '25.7 km/l*',
    emi: '₹9,499/mo*',
    image: dzire,
  },
  {
    id: 'ertiga',
    name: 'Ertiga',
    tagline: 'Spacious family MPV.',
    price: '₹8.69 Lakh*',
    priceValue: 869000,
    mileage: '20.5 km/l*',
    emi: '₹12,999/mo*',
    image: ertiga,
  },
  {
    id: 'baleno',
    name: 'Baleno',
    tagline: 'Premium hatchback style.',
    price: '₹6.66 Lakh*',
    priceValue: 666000,
    mileage: '22.9 km/l*',
    emi: '₹9,299/mo*',
    image: baleno,
  },
  {
    id: 'fronx',
    name: 'Fronx',
    tagline: 'Coupe SUV presence.',
    price: '₹7.54 Lakh*',
    priceValue: 754000,
    mileage: '21.5 km/l*',
    emi: '₹10,999/mo*',
    image: fronx,
  },
]

export const WHY_BUY = [
  { id: 1, title: 'Best Price in Nagercoil', description: 'Competitive dealership pricing with transparent offer breakdowns.' },
  { id: 2, title: 'Personalized Deal Negotiation', description: 'One-to-one support to match your budget and preferred model.' },
  { id: 3, title: 'Fast Finance Approval', description: 'Assistance across leading banks and NBFCs for quicker sanction.' },
  { id: 4, title: 'Exchange Assistance', description: 'Fair valuation support and exchange bonus guidance.' },
  { id: 5, title: 'Doorstep Test Drive', description: 'Experience your shortlisted Maruti at home across KK district.' },
  { id: 6, title: 'Delivery Support', description: 'Smooth handover coordination from booking to keys-in-hand.' },
  { id: 7, title: 'Documentation Help', description: 'End-to-end paperwork support for a stress-free purchase.' },
  { id: 8, title: 'After-Sales Coordination', description: 'Continued support for service booking and ownership queries.' },
]

export const DELIVERIES = [
  {
    id: 1,
    name: 'Happy Customer',
    model: 'New Maruti Delivery',
    quote: 'Got the best exchange value and doorstep support. Smooth process end to end.',
    image: customer1,
  },
  {
    id: 2,
    name: 'Happy Customer',
    model: 'New Maruti Delivery',
    quote: 'Finance approval was quick and Suthan explained every offer clearly.',
    image: customer2,
  },
  {
    id: 3,
    name: 'Happy Customer',
    model: 'New Maruti Delivery',
    quote: 'Transparent pricing and excellent delivery experience at Aadhi Maruti Suzuki.',
    image: customer3,
  },
  {
    id: 4,
    name: 'Happy Customer',
    model: 'New Maruti Delivery',
    quote: 'Booked after WhatsApp enquiry — received keys within days. Highly recommend.',
    image: customer4,
  },
  {
    id: 5,
    name: 'Happy Customer',
    model: 'New Maruti Delivery',
    quote: 'Personal follow-up from booking to delivery. Best Maruti support in Nagercoil.',
    image: customer5,
  },
]

export const MODELS = ['Swift', 'Brezza', 'Dzire', 'Ertiga', 'Baleno', 'Fronx', 'WagonR', 'Grand Vitara', 'Other']

export const FAQS = [
  {
    question: 'What is the Swift price in Nagercoil?',
    answer:
      'Swift ex-showroom pricing starts from approximately ₹6.49 Lakh*. Final on-road price depends on variant, insurance, and current offers. Contact Mr.S.Suthan for today’s best quote.',
  },
  {
    question: 'Are Brezza offers available in Nagercoil?',
    answer:
      'Yes. Aadhi Maruti Suzuki currently supports exchange bonuses, finance benefits, and limited-period offers on Brezza. Ask for a personalized offer breakdown.',
  },
  {
    question: 'Can I get Ertiga EMI options in Nagercoil?',
    answer:
      'Yes. Flexible EMI plans are available based on down payment, tenure, and bank eligibility. Use the EMI calculator or WhatsApp for a tailored estimate.',
  },
  {
    question: 'How do I book a Maruti test drive in Nagercoil?',
    answer:
      'Tap Book Test Drive or WhatsApp Now. Doorstep test drives are available across Nagercoil and Kanyakumari district subject to slot availability.',
  },
  {
    question: 'Why buy through a Relationship Manager?',
    answer:
      'You get dedicated pricing negotiation, finance coordination, exchange support, and delivery follow-up — a personal buying experience beyond a standard enquiry form.',
  },
]
