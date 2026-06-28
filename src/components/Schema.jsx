import { Head } from 'vite-react-ssg'
import { faqs } from '../data/faqs.js'
import { testimonials } from '../data/testimonials.js'

const SITE = 'https://CartXForm.com'
const BRAND = 'Cart Transformation'

// ─────────────────────────────────────────────────────────────────────────────
//  ⚠️  BEFORE ENABLING ReviewSchema — read this.
//
//  testimonials.js says "Placeholder testimonials" at line 1. Emitting
//  AggregateRating markup for invented reviews is a Google policy violation
//  that can trigger a manual action on your site.
//
//  Also: self-serving on-site reviews don't earn star rich results for
//  ProfessionalService / LocalBusiness in Google Search anyway — those
//  come from your Google Business Profile. The value here is purely
//  AI/LLM extraction (ChatGPT, Perplexity, AI Overviews citing your reviews).
//
//  Flip SHIP_REVIEW_SCHEMA to true ONLY when every testimonial is real,
//  named, and you have the client's permission to publish it.
// ─────────────────────────────────────────────────────────────────────────────
const SHIP_REVIEW_SCHEMA = false

/** Injects a JSON-LD <script> into <head> at SSG build time. */
function JsonLd({ data }) {
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Head>
  )
}

/**
 * FAQPage schema — mount once inside pages/Services.jsx.
 *
 * Google deprecated FAQ rich results (SERP accordions) in May 2026, so this
 * won't produce a visual snippet in search. It IS still parsed by AI answer
 * engines (ChatGPT, Perplexity, Google AI Overviews) and is one of the
 * highest-cited schema types for LLM extraction — exactly the AI-readiness
 * goal from the audit.
 */
export function FaqSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
  return <JsonLd data={data} />
}

/**
 * Review + AggregateRating — mount once inside pages/Home.jsx.
 * Gated behind SHIP_REVIEW_SCHEMA. See warning above before enabling.
 */
export function ReviewSchema() {
  if (!SHIP_REVIEW_SCHEMA) return null

  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE}#business`, // ties reviews to the LocalBusiness node in index.html
    name: BRAND,
    url: SITE,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 5,
      reviewCount: testimonials.length,
      bestRating: 5,
    },
    review: testimonials.map((t) => ({
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
      author: { '@type': 'Person', name: t.name },
      reviewBody: t.quote,
      publisher: {
        '@type': 'Organization',
        name: [t.business, t.location].filter(Boolean).join(', '),
      },
    })),
  }
  return <JsonLd data={data} />
}

export default JsonLd
