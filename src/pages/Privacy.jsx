import { PageTransition } from '../components/PageTransition.jsx'
import Seo from '../components/Seo.jsx'
import { site } from '../config/site.js'

export default function Privacy() {
  return (
    <PageTransition>
      <Seo title='Privacy Policy' description='How Cart Transformation collects and uses your personal data under the Singapore PDPA.' />
      <section className="py-16 md:py-24">
        <div className="container-x max-w-3xl">
          <span className="eyebrow">Legal</span>
          <h1 className="mt-4 text-4xl font-bold text-ink">Privacy Policy</h1>
          <p className="mt-3 text-sm text-slate-soft">Last updated: June 2026</p>

          <div className="prose mt-8 space-y-6 text-slate-ink">
            <p className="text-slate-soft">
              {site.name} (“we”, “us”, “our”) is a venture of Flowdaptor Pte. Ltd.,
              registered in Singapore. We are committed to protecting your personal data in
              accordance with the Personal Data Protection Act 2012 (PDPA) of Singapore.
            </p>

            <div>
              <h2 className="text-xl font-bold text-ink">1. Data we collect</h2>
              <p className="mt-2 text-slate-soft">
                When you use our website or contact us, we may collect:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-soft">
                <li>Name, email address, phone number</li>
                <li>Business name and website URL</li>
                <li>Information you provide in enquiry forms</li>
                <li>Analytics data (page views, referral source) via anonymised tools</li>
              </ul>
              <p className="mt-2 text-slate-soft">
                We do not collect payment card details. Any payment processing is handled by
                third-party providers.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink">2. How we use your data</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-soft">
                <li>To respond to enquiries and deliver agreed services</li>
                <li>To send you project updates and invoices</li>
                <li>To improve our website and service quality</li>
              </ul>
              <p className="mt-2 text-slate-soft">
                We do not sell, rent, or share your personal data with third parties for
                marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink">3. Data retention</h2>
              <p className="mt-2 text-slate-soft">
                We retain personal data only as long as necessary to fulfil the purpose for
                which it was collected, or as required by law. Client project data is retained
                for 7 years for accounting and legal compliance. Enquiry data from non-clients
                is deleted after 12 months if no engagement follows.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink">4. Your rights under the PDPA</h2>
              <p className="mt-2 text-slate-soft">You have the right to:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-soft">
                <li>Request access to the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Withdraw consent for data use (subject to legal obligations)</li>
              </ul>
              <p className="mt-2 text-slate-soft">
                To exercise these rights, email us at{' '}
                <a href={`mailto:${site.email}`} className="font-semibold text-flame">
                  {site.email}
                </a>
                . We will respond within 30 days.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink">5. Cookies</h2>
              <p className="mt-2 text-slate-soft">
                Our website uses minimal cookies for analytics purposes only. We do not use
                advertising or tracking cookies. You can disable cookies in your browser
                settings without affecting site functionality.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink">6. Third-party services</h2>
              <p className="mt-2 text-slate-soft">
                We use the following third-party services which may process data on our behalf:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-soft">
                <li><strong className="text-ink">Google Analytics</strong> — anonymised website analytics</li>
                <li><strong className="text-ink">Formspree</strong> — contact form submission handling</li>
              </ul>
              <p className="mt-2 text-slate-soft">
                Each service operates under its own privacy policy and data processing
                agreements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink">7. Contact</h2>
              <p className="mt-2 text-slate-soft">
                For any privacy-related questions, contact our Data Protection Officer at{' '}
                <a href={`mailto:${site.email}`} className="font-semibold text-flame">
                  {site.email}
                </a>
                . {site.name}, {site.address.full}.
              </p>
            </div>

            <p className="text-sm text-slate-soft">
              This policy may be updated from time to time. The “last updated” date at the top
              of this page reflects the most recent revision. Continued use of our website
              constitutes acceptance of the current policy.
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
