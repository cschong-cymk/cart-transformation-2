import AnimatedNumber from './AnimatedNumber.jsx'
import { Reveal } from './PageTransition.jsx'
import SectionSeam from './SectionSeam.jsx'

const stats = [
  { value: 20,  prefix: '',  suffix: '+', display: '20+ yrs combined experience', label: 'combined experience'    },
  { value: 31,  prefix: '+', suffix: '%', display: '+31% average lift',            label: 'average lift'          },
  { value: 14,  prefix: '',  suffix: '',  display: '14-day average turnaround',    label: 'day average turnaround' },
]

export default function StatBand() {
  return (
    <section
      aria-labelledby="stat-band-heading"
      className="relative overflow-hidden bg-ink text-white"
    >
      <h2 id="stat-band-heading" className="sr-only">
        Cart Transformation results at a glance
      </h2>

      <div className="container-x grid grid-cols-2 gap-x-6 gap-y-10 py-14 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center lg:text-left">
            <p className="text-3xl font-bold sm:text-4xl">
              <span className="sr-only">{s.display}</span>
              <span aria-hidden="true" className="text-flame-light">
                <AnimatedNumber value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </span>
            </p>
            <p className="mt-2 text-sm text-cloud-200/70" aria-hidden="true">
              {s.label}
            </p>
          </Reveal>
        ))}

        {/* Static slot — no number to count, so AnimatedNumber is not used */}
        <Reveal delay={3 * 0.08} className="text-center lg:text-left">
          <p className="text-3xl font-bold text-flame-light sm:text-4xl">Free</p>
          <p className="mt-2 text-sm text-cloud-200/70">audit — no obligation</p>
        </Reveal>
      </div>

      <SectionSeam position="bottom" />
    </section>
  )
}
