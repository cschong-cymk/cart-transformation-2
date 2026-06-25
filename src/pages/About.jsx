import { Link } from 'react-router-dom'
import { Heart, MapPin, Users, ShieldCheck, ArrowRight } from 'lucide-react'
import { PageTransition, Reveal } from '../components/PageTransition.jsx'
import Seo from '../components/Seo.jsx'
import CTASection from '../components/CTASection.jsx'
import { images } from '../data/images.js'

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

const team = [
  {
    name: 'CS Chong',
    role: 'CEO · Co-Founder',
    img: images.csChong,
    bio: 'Solutions architect behind every conversion system we deploy. Leads scoping and turns messy problems into production-ready automations.',
  },
  {
    name: 'Meng Wee Tan',
    role: 'Co-Founder · Engineer',
    img: images.mengWee,
    bio: 'Two decades across enterprise software, fintech, and AI. Builds the checkout and recovery infrastructure that works in production, not just in demos.',
  },
  {
    name: 'Kevin Chua',
    role: 'Project Director',
    img: images.founder2,
    bio: '15+ years in technology programme management and digital transformation. Keeps every engagement on track from scoping to go-live, with a focus on regulated industries and risk governance across Southeast Asia.',
  },
  {
    name: 'Sarah Nguyen',
    role: 'E-commerce Lead',
    img: images.founder3,
    bio: 'Ten years building and operating e-commerce businesses from the merchant side. She knows what a broken checkout costs because she\'s lived it.',
  },
]


export default function About() {
  return (
    <PageTransition>
      <Seo title='About Us — Local E-commerce Conversion Studio' description="Meet Cart Transformation — Singapore's e-commerce conversion specialists. A Flowdaptor venture, built by people who've been merchants themselves." />
      {/* Intro */}
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
              ads and forget the checkout. We saw the same fixable problems again and
              again across Singapore's stores — clunky checkouts, silent abandoned carts,
              revenue quietly leaking at the final step — so we built a studio to fix the
              part that actually closes the sale.
            </p>
            <p className="mt-4 leading-relaxed text-slate-soft">
              Today we work hands-on with merchants across the island, from home-grown
              fashion labels to electronics resellers on Lazada and Shopee. We're small,
              senior, and close to the work — the person who audits your store is the
              person who fixes it.
            </p>
            <Link to="/contact" className="btn-primary mt-8">
              Work with us <ArrowRight size={16} />
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div
              className="aspect-[4/5] w-full rounded-[28px] bg-cover bg-center bg-transform-gradient shadow-card"
              style={{ backgroundImage: `url(${images.team})` }}
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-cloud-100 p-5 shadow-xl ring-1 ring-ink/5 sm:block">
              <p className="font-mono text-3xl font-bold text-flame">2026</p>
              <p className="text-sm text-slate-soft">a Flowdaptor venture</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Origin story */}
      <section className="py-16 md:py-24">
        <div className="container-x max-w-3xl">
          <Reveal>
            <span className="eyebrow">Origin story</span>
            <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
              A Flowdaptor venture. Founded in Singapore, 2026.
            </h2>
            <p className="mt-6 leading-relaxed text-slate-soft">
              Cart Transformation is a specialist brand from <strong className="text-ink">Flowdaptor</strong>,
              a Singapore-based AI automation studio. Where Flowdaptor builds the
              infrastructure that makes businesses run on AI, Cart Transformation applies
              that same engineering rigour to one specific problem: the revenue merchants
              lose between “add to cart” and “order placed”.
            </p>
            <p className="mt-4 leading-relaxed text-slate-soft">
              It started because Sarah had spent a decade running e-commerce businesses and
              knew exactly what a bad checkout costs — not in theory, but in real, daily,
              measurable lost revenue. Paired with the Flowdaptor team, the combination
              became obvious: merchant experience plus production-grade AI automation,
              pointed straight at cart recovery, checkout optimization, and conversion
              funnels.
            </p>
            <p className="mt-4 leading-relaxed text-slate-soft">
              We're small by design. No account managers, no hand-offs, no junior teams
              running your work while the seniors take the credit.
            </p>
            <a
              href="https://flowdaptor.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 font-display font-semibold text-flame hover:text-flame"
            >
              A Flowdaptor venture · AI automation · Singapore <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cloud py-16 md:py-24">
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

      {/* Team */}
      <section className="py-16 md:py-24">
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
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:max-w-3xl">
             {team.map((m, i) => (
                <Reveal key={m.name} delay={i * 0.1}>
                  <div className="card flex flex-col gap-4">
                      <div className="h-32 w-32 rounded-2xl bg-cover bg-center bg-cloud-200"       style={{ backgroundImage: `url(${m.img})` }}  />
                  <div>
                  <h3 className="text-lg font-bold text-ink">{m.name}</h3>
                  <p className="font-mono text-xs uppercase tracking-wide text-flame">
                    {m.role}
                  </p>
                  <p className="mt-2 text-sm text-slate-soft">{m.bio}</p>
                  {m.url && (
                    <p className="mt-2 text-sm text-slate-soft"><a href={m.url} target="_blank" rel="noopener noreferrer">{m.url}</a></p>
                  )}
              </div>
            </div>
          </Reveal>
          ))}
          </div>

          {/* Community */}
          <Reveal delay={0.1}>
            <div className="mt-12 rounded-3xl bg-flame/8 p-8 ring-1 ring-flame/10 md:p-10">
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
