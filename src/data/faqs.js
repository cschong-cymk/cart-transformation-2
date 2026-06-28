// Single source of truth for FAQ content.
// Imported by BOTH pages/Services.jsx (visible accordion) AND
// components/Schema.jsx (JSON-LD) so the two can never drift apart —
// Google's FAQPage policy requires the markup to match the visible text.
export const faqs = [
  {
    q: 'How is pricing structured?',
    a: 'Most projects are fixed-scope with a clear quote up front. Recovery and CX work runs monthly. We always start with a free audit so you know the expected return before committing.',
  },
  {
    q: 'Do you work with Shopify, WooCommerce, and marketplaces?',
    a: 'Yes. We work across WooCommerce, Shopify, and native Lazada and Shopee storefronts, and we connect them so stock, orders, and pricing stay in sync.',
  },
  {
    q: 'How fast will I see results?',
    a: 'Checkout and recovery fixes often show measurable lift within the first 2 to 4 weeks. Most clients hit positive ROI within 30 days, and larger funnel rebuilds compound over a quarter.',
  },
  {
    q: 'Are you based in Singapore?',
    a: 'Yes. Our studio is in Braddell Tech, Toa Payoh. We understand local payment habits, delivery options, and buyer behaviour first-hand.',
  },
]

export default faqs
