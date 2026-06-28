import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

/**
 * FIX: old version used useState(0) so the SSG snapshot froze at 0 — crawlers
 * and AI bots read "0+ merchants / +0% recovered". This version initialises to
 * the real `value`, which is what ships in the pre-rendered HTML.
 *
 * After hydration: if the element hasn't entered the viewport yet we drop to 0
 * (invisible to the user) and count up on scroll-in. If it's already on-screen
 * at mount we skip the reset entirely — no flash. Reduced-motion gets the
 * static value with no animation.
 */
export default function AnimatedNumber({ value, duration = 1.4, prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduce = useReducedMotion()

  // Initialise to the real value → correct SSG output + matching first render.
  const [display, setDisplay] = useState(value)
  const didReset = useRef(false)
  const didAnimate = useRef(false)

  // Mount only: reset to 0 if off-screen so the count-up plays on scroll-in.
  useEffect(() => {
    if (reduce) return
    if (!inView) {
      didReset.current = true
      setDisplay(0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Count up the first time the element enters the viewport.
  useEffect(() => {
    if (reduce || !inView || !didReset.current || didAnimate.current) return
    didAnimate.current = true

    let raf
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(value * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
      else setDisplay(value) // land exactly on the real value
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration, reduce])

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {prefix}{display}{suffix}
    </span>
  )
}
