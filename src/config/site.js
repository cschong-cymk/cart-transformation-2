// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE FIRST.
//  Everything below appears across the whole site (header, footer,
//  contact page, structured data). Replace the placeholder values
//  marked with  ⚠️  and the rest of the site updates automatically.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Cart Transformation',
  shortName: 'CartXForm',
  tagline: 'E-commerce conversion experts',
  url: 'https://CartXForm.com',

  // ⚠️ HIGHEST PRIORITY — this is the single most damaging placeholder on the
  // site. It renders in the header bar, hero, footer, contact cards, CTA, and
  // schema.org. A visitor who taps a fake number is gone. `tel` = digits only
  // with country code, no spaces.
  phone: {
    display: '+65 8000 0000',
    tel: '+6580000000',
  },

  email: 'hello@CartXForm.com',
  // NOTE: if Cloudflare "Email Address Obfuscation" (Scrape Shield) is on for
  // this domain, it rewrites visible emails into a script-injected blob that
  // some users and most bots can't resolve. Turn it off for the apex domain, or
  // accept that the mailto link is the reliable path.

  // Contact form POST target (PHP mailer on send.cartxform.com). Must respond
  // with CORS headers allowing this site's origin (staging AND production), and
  // a 2xx status with JSON {ok: true} on success.
  formEndpoint: 'https://send.cartxform.com/send.php',

  // Full NAP — used in header, footer, contact page, and schema.org.
  address: {
    line1: '13 Lorong 8 Toa Payoh',
    unit: '#04-11, Braddell Tech',
    city: 'Singapore',
    postal: '319261',
    full: '13 Lorong 8 Toa Payoh, #04-11, Braddell Tech, Singapore 319261',
  },

  serviceArea: 'Singapore',

  // ⚠️ Confirm real opening hours.
  hours: [
    { days: 'Mon – Fri', time: '9:00am – 6:00pm' },
    { days: 'Saturday', time: '10:00am – 2:00pm' },
    { days: 'Sunday', time: 'Closed', closed: true },
  ],
  hoursShort: 'Mon–Fri 9–6 · Sat 10–2',

  // ⚠️ Real profile URLs only. Empty string '' HIDES that icon everywhere
  // (footer + contact). Placeholders are emptied below precisely so the site
  // never ships an icon that links to a bare domain root — fill, then re-enable.
  socials: {
    facebook: '',
    instagram: '',
    linkedin: '',
    whatsapp: '', // e.g. 'https://wa.me/6581234567'
  },

  // ⚠️ Legal registration. Empty strings HIDE the line in the footer (see
  // Footer.jsx) — far better than shipping a fake "20XXXXXXX". Fill once the
  // entity is registered. UEN is the Flowdaptor Pte. Ltd. number if Cart
  // Transformation trades under it.
  legal: {
    uen: '', // e.g. '202412345A'
    gst: '', // e.g. 'M9-1234567-8'  (omit if not GST-registered)
  },

  // Google Maps embed (query-based, no API key needed).
  mapEmbedSrc:
    'https://www.google.com/maps?q=13+Lorong+8+Toa+Payoh+Braddell+Tech+Singapore+319261&output=embed',
  mapLink:
    'https://www.google.com/maps/search/?api=1&query=13+Lorong+8+Toa+Payoh+Braddell+Tech+Singapore+319261',
}

export default site
