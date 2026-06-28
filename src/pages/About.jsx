import { Link } from 'react-router-dom'
import { Heart, MapPin, Users, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react'
import { PageTransition, Reveal } from '../components/PageTransition.jsx'
import Seo from '../components/Seo.jsx'
import CTASection from '../components/CTASection.jsx'
import { team } from '../data/team.js'

const values = [
  {
    icon: MapPin,
    title: 'Local first',
    body: 'Born and run in Singapore. We know PayNow, GrabPay, WhatsApp commerce, and how SE-Asian shoppers actually buy — without needing it explained.',
  },
  {
    icon: ShieldCheck,
    title: 'No fluff, no lock-in',
    body: 'Plain reporting, honest scopes, and work you own outright. We earn the next project by doing good work, never by trapping you in a retainer you don’t need.',
  },
  {
    icon: Heart,
    title: 'Invested in your numbers',
    body: 'We treat your conversion rate like our own. If a fix won’t move real revenue, we won’t sell it to you. The audit is free precisely because we want to be honest before we start.',
  },
]

export default function About() {
  return (
    <PageTransition>
      <Seo
        title="About Us — Local E-commerce Conversion Studio"
        description="Meet Cart Transformation — Singapore's e-commerce conversion specialists. A Flowdaptor venture, built by people who've been merchants themselves."
      />

      {/* ── Intro: real faces up top (was a stock photo of strangers) ── */}
      <section className="py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">
              <Users size={14} /> Our story
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Built by people who’ve been the merchant
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-soft">
              Cart Transformation grew out of a simple observation: most agencies fix the
              ads and forget the checkout. We kept seeing the same fixable problems across
              Singapore's stores — clunky checkouts, silent abandoned carts, revenue
              quietly leaking at the final step — so we built a studio to fix the part that
              actually closes the sale.
            </p>
            <p className="mt-4 leading-relaxed text-slate-soft">
              We're small, senior, and close to the work — the person who audits your store
              is the person who fixes it. No account managers, no hand-offs, no junior teams
              running your work while the seniors take the credit.
            </p>
            <Link to="/contact" className="btn-primary mt-8">
              Work with us <ArrowRight size={16} />
            </Link>
          </Reveal>

          {/* Real team headshots as a 2×2 grid — uses the actual /public/assets
              photos instead of a stock collaboration image. */}
          <Reveal delay={0.1} className="relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {team.slice(0, 4).map((m) => (
                <div
                  key={m.name}
                  className="aspect-square w-full rounded-2xl bg-cloud-200 bg-cover bg-center shadow-card ring-1 ring-ink/5"
                  style={{ backgroundImage: `url(${m.img})` }}
                  role="img"
                  aria-label={`${m.name}, ${m.role}`}
                />
              ))}
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-cloud-50 p-5 shadow-xl ring-1 ring-ink/8 sm:block">
              {/* NOTE: "Est. 2026" reads as brand-new. Fine on its own, but it sits in
                  tension with "120+ merchants served" elsewhere — make sure the story
                  you tell across pages is consistent. */}
              <p className="font-mono text-3xl font-bold text-flame">2026</p>
              <p className="text-sm text-slate-soft">a Flowdaptor venture</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Origin: ONE consolidated Flowdaptor section (was two overlapping
             story sections). Founder-neutral so it can't contradict the team
             structure below. ── */}
      <section className="bg-cloud py-16 md:py-24">
        <div className="container-x max-w-3xl">
          <Reveal>
            <span className="eyebrow">A Flowdaptor venture</span>
            <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
              Engineering rigour, pointed at one problem
            </h2>
            <p className="mt-6 leading-relaxed text-slate-soft">
              Cart Transformation is a specialist brand from{' '}
              <strong className="text-ink">Flowdaptor</strong>, a Singapore-based AI
              automation studio. Where Flowdaptor builds the infrastructure that makes
              businesses run on AI, Cart Transformation applies that same rigour to one
              specific problem: the revenue merchants lose between “add to cart” and “order
              placed”.
            </p>
            <p className="mt-4 leading-relaxed text-slate-soft">
              The combination is deliberate — first-hand merchant experience paired with
              production-grade automation, aimed squarely at cart recovery, checkout
              optimization, and conversion funnels. Not demos. Things that hold up in
              production, on real stores, with real traffic.
            </p>
            <a
              href="https://flowdaptor.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 font-display font-semibold text-flame hover:text-flame-dark"
            >
              Visit Flowdaptor <ExternalLink size={15} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">What we stand for</span>
            <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
              Principles that keep us honest
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="card h-full">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-flame/10 text-flame">
                    <v.icon size={22} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-soft">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team: clean, uniform cards (square photo → name → role → bio → link) ── */}
      <section className="bg-cloud py-16 md:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Meet the team</span>
            <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
              Senior people, no hand-offs
            </h2>
            <p className="mt-4 text-slate-soft">
              A small team that does the work itself — and answers the phone when you call.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <article className="card flex h-full flex-col">
                  <div
                    className="aspect-square w-full rounded-xl bg-cloud-200 bg-cover bg-center"
                    style={{ backgroundImage: `url(${m.img})` }}
                    role="img"
                    aria-label={m.name}
                  />
                  <h3 className="mt-4 text-lg font-bold text-ink">{m.name}</h3>
                  <p className="font-mono text-xs uppercase tracking-wide text-slate-soft">
                    {m.role}
                  </p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-soft">
                    {m.bio}
                  </p>
                  {m.url && (
                    <a
                      href={m.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-flame hover:text-flame-dark"
                    >
                      Profile <ExternalLink size={13} />
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </div>

          {/* Community — KEEP ONLY IF TRUE. Specific claims (free monthly clinics,
              mentoring at maker markets) are verifiable; if they're aspirational
              rather than real, cut this block. An unverifiable good-deed claim does
              more trust damage than no claim at all. */}
          <Reveal delay={0.1}>
            <div className="mt-12 rounded-2xl bg-flame/8 p-8 ring-1 ring-flame/10 md:p-10">
              <h3 className="flex items-center gap-2 font-display text-xl font-bold text-ink">
                <Heart size={20} className="text-flame" /> In the community
              </h3>
              <p className="mt-3 max-w-3xl text-slate-soft">
                We run free monthly conversion clinics for early-stage SG sellers, mentor at
                local maker markets, and share what we learn openly with the merchant
                community. Helping small stores win is the whole point.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        heading="Let's grow your store together"
        sub="Book a friendly, no-pressure call. We'll look at your store and tell you honestly where the biggest wins are."
      />
    </PageTransition>
  )
}
