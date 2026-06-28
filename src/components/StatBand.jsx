import AnimatedNumber from './AnimatedNumber.jsx'
import { Reveal } from './PageTransition.jsx'

// ⚠️  These must be real, defensible numbers before launch.
// `display` is the plain-text string that ships in the static HTML
// and is read by screen readers + crawlers; AnimatedNumber only handles
// the visual count-up.
const stats = [
  {
    value: 120,
    prefix: '',
    suffix: '+',
    display: '120+ Singapore merchants served',
    label: 'SG merchants served',
  },
  {
    value: 31,
    prefix: '+',
    suffix: '%',
    display: '+31% average revenue recovered',
    label: 'avg. revenue recovered',
  },
  {
    value: 42,
    prefix: '−',
    suffix: '%',
    display: '−42% checkout drop-off',
    label: 'checkout drop-off',
  },
  {
    value: 14,
    prefix: '',
    suffix: '',
    display: '14-day average turnaround',
    label: 'day average turnaround',
  },
]

export default function StatBand() {
  return (
    <section aria-labelledby="stat-band-heading" className="border-y border-ink/5 bg-cloud">
      {/* Semantic heading for a11y / document outline — invisible visually */}
      <h2 id="stat-band-heading" className="sr-only">
        Cart Transformation results at a glance
      </h2>

      <div className="container-x grid grid-cols-2 gap-x-6 gap-y-10 py-12 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center lg:text-left">
            <p className="text-3xl font-bold text-ink sm:text-4xl">
              {/* Screen readers get the clean phrase; the ticking digits are
                  hidden from the a11y tree so they don't announce a number
                  counting up. Crawlers parse the sr-only span. */}
              <span className="sr-only">{s.display}</span>
              <span aria-hidden="true">
                <AnimatedNumber value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </span>
            </p>
            <p className="mt-2 text-sm text-slate-soft" aria-hidden="true">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
