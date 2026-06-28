import { PageTransition, Reveal } from '../components/PageTransition.jsx'
import Seo from '../components/Seo.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import CTASection from '../components/CTASection.jsx'
import SectionSeam from '../components/SectionSeam.jsx'
import { FaqSchema } from '../components/Schema.jsx'   // ← new
import { services } from '../data/services.js'
import { faqs } from '../data/faqs.js'                  // ← shared source; removed inline const

export default function Services() {
  return (
    <PageTransition>
      <Seo
        title="E-commerce Services & Pricing"
        description="Checkout optimization, cart abandonment recovery, WooCommerce development, and conversion audits for Singapore e-commerce stores."
      />

      {/* FAQPage JSON-LD — emitted into <head> at build time */}
      <FaqSchema />

      {/* Page header */}
      <section className="relative overflow-hidden bg-ink py-16 text-white md:py-20">
        <div className="container-x relative z-10">
          <Reveal className="max-w-3xl">
            <span className="eyebrow text-flame-light">Services</span>
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
              Everything you need to convert more shoppers
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-cloud-200/80">
              From a free audit to a full store rebuild — pick where you're losing the most
              revenue, and we'll start there.
            </p>
          </Reveal>
        </div>
        <SectionSeam position="bottom" />
      </section>

      {/* Grid */}
      <section className="py-16 md:py-24">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ — reads from the same faqs.js that FaqSchema uses */}
      <section className="bg-cloud py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
              Questions, answered
            </h2>
            <p className="mt-4 text-slate-soft">
              Still unsure? Call us — we're happy to talk through your store before you
              commit to anything.
            </p>
          </Reveal>
          <div className="divide-y divide-ink/8">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <details className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-ink">
                    {f.q}
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-ink/15 text-slate-soft transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-slate-soft">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  )
}
