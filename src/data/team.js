import { images } from './images.js'

// Team — single source of truth (parallels services.js / testimonials.js).
// img keys resolve to /public/assets headshots via data/images.js.
//
// ⚠️ Bios are your existing copy, preserved verbatim. Verify every claim before
// launch — specific biographical statements ("a decade running e-commerce",
// "15+ years") are exactly what a sceptical buyer or an AI summary will repeat,
// so they must be true. Add a `url` (LinkedIn / profile) per person where you
// can — a linkable name is far stronger proof than an unlinkable one.
export const team = [
  {
    name: 'CS Chong',
    role: 'CEO · Co-Founder',
    img: images.csChong,
    url: '',
    bio: 'Solutions architect behind every conversion system we deploy. Leads scoping and turns messy problems into production-ready automations.',
  },
  {
    name: 'Meng Wee Tan',
    role: 'Co-Founder · Engineering',
    img: images.mengWee,
    url: '',
    bio: 'Two decades across enterprise software, fintech, and AI. Builds the checkout and recovery infrastructure that works in production, not just in demos.',
  },
  {
    name: 'Kevin Chua',
    role: 'Project Director',
    img: images.founder2,
    url: '',
    bio: '15+ years in technology programme management and digital transformation. Keeps every engagement on track from scoping to go-live.',
  },
  {
    name: 'Sarah Nguyen',
    role: 'E-commerce Lead',
    img: images.founder3,
    url: '',
    bio: 'Ten years building and operating e-commerce businesses from the merchant side. She knows what a broken checkout costs because she has lived it.',
  },
]

export default team
