import { PageTransition } from '../components/PageTransition.jsx'
import Seo from '../components/Seo.jsx'
import { site } from '../config/site.js'

export default function Terms() {
  return (
    <PageTransition>
      <Seo title='Terms of Service' description='Terms of service for Cart Transformation e-commerce conversion services in Singapore.' />
      <section className="py-16 md:py-24">
        <div className="container-x max-w-3xl">
          <span className="eyebrow">Legal</span>
          <h1 className="mt-4 text-4xl font-bold text-ink">Terms of Service</h1>
          <p className="mt-3 text-sm text-slate-soft">Last updated: June 2026</p>

          <div className="mt-8 space-y-6">
            <p className="text-slate-soft">
              These terms govern your use of the {site.name} website and any services provided
              by Flowdaptor Pte. Ltd. (“we”, “us”, “our”) trading as {site.name}. By engaging
              our services or using our website, you agree to these terms.
            </p>

            <div>
              <h2 className="text-xl font-bold text-ink">1. Services</h2>
              <p className="mt-2 text-slate-soft">
                We provide e-commerce conversion optimisation services including audits,
                checkout optimisation, cart abandonment recovery, sales funnel engineering,
                WooCommerce development, and CX support. The specific scope, deliverables, and
                pricing of each engagement are set out in a separate Statement of Work or
                quotation agreed between the parties before work begins.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink">2. Free audit</h2>
              <p className="mt-2 text-slate-soft">
                The free conversion audit is provided at no cost and with no obligation to
                purchase further services. We reserve the right to decline audit requests at
                our discretion. Audit findings are provided for informational purposes only and
                do not constitute a guarantee of results.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink">3. Payment terms</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-soft">
                <li>Fixed-scope projects: 50% deposit required before work begins; balance due on completion</li>
                <li>Monthly retainers: invoiced in advance at the start of each month</li>
                <li>All prices are in Singapore Dollars (SGD) and subject to GST where applicable</li>
                <li>Payment is due within 14 days of invoice date</li>
                <li>Late payments may incur interest at 1.5% per month</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink">4. Cancellation and refunds</h2>
              <p className="mt-2 text-slate-soft">
                Monthly retainers may be cancelled with 30 days’ written notice. No refunds are
                issued for work already completed. For fixed-scope projects, the deposit is
                non-refundable if work has commenced. If we are unable to complete agreed work
                due to our own fault, we will refund fees paid for incomplete work.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink">5. Intellectual property</h2>
              <p className="mt-2 text-slate-soft">
                On full payment, all custom work product created for you becomes your property.
                We retain the right to use general methodologies, frameworks, and
                non-client-specific know-how developed during engagements. We may reference your
                business as a client in our marketing materials unless you request otherwise in
                writing.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink">6. Confidentiality</h2>
              <p className="mt-2 text-slate-soft">
                We treat all client information as confidential. We will not disclose your
                business data, analytics, or commercially sensitive information to third parties
                without your consent, except where required by law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink">7. Limitation of liability</h2>
              <p className="mt-2 text-slate-soft">
                Our liability for any claim arising from our services is limited to the fees
                paid for the specific service giving rise to the claim. We are not liable for
                indirect, consequential, or speculative losses including lost revenue or lost
                profits. We do not guarantee specific conversion rate improvements — results
                depend on many factors outside our control including your product, pricing, and
                market conditions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink">8. Governing law</h2>
              <p className="mt-2 text-slate-soft">
                These terms are governed by the laws of Singapore. Any disputes shall be subject
                to the exclusive jurisdiction of the Singapore courts.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink">9. Changes to these terms</h2>
              <p className="mt-2 text-slate-soft">
                We may update these terms from time to time. Continued use of our services
                constitutes acceptance of the current terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink">10. Contact</h2>
              <p className="mt-2 text-slate-soft">
                Questions? Email{' '}
                <a href={`mailto:${site.email}`} className="font-semibold text-flame">
                  {site.email}
                </a>{' '}
                or call {site.phone.display}. {site.name}, {site.address.full}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
