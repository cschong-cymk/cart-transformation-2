import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Loader2, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react'
import { site } from '../config/site.js'

// Honeypot — same contract as Contact.jsx: send.php treats a non-empty
// $_POST['website'] as a bot and silently accepts. The visible store field
// is named `store` and sent as `company` so it never collides.
const HONEYPOT_FIELD = 'website'

/**
 * Inline hero lead-capture.
 * Posts to the same endpoint as the full Contact form (site.formEndpoint)
 * with the same field names and honeypot contract, so leads land in the
 * same inbox. name / message / interest are auto-filled so the lighter
 * payload satisfies whatever server-side validation send.php runs.
 *
 * Designed for the dark hero (bg-ink): glass panel, light input pills,
 * flame primary button as the loudest element on the page.
 */
export default function HeroLeadForm() {
  const reduce = useReducedMotion()
  const [email, setEmail] = useState('')
  const [store, setStore] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [fieldError, setFieldError] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const emailValid = (v) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)

  const onSubmit = async (e) => {
    e.preventDefault()
    if (honeypot) return // bot — silently drop, no request
    if (!emailValid(email)) {
      setFieldError('Enter a valid email so we can send your audit.')
      return
    }
    setFieldError('')
    setStatus('sending')

    try {
      const cleanStore = store.trim()
      const body = new URLSearchParams({
        name:     cleanStore ? `Lead — ${cleanStore}` : 'Homepage hero lead',
        email:    email.trim(),
        company:  cleanStore,
        interest: 'Free audit (homepage hero)',
        platform: '',
        revenue:  '',
        message:  cleanStore
          ? `Free audit requested from the homepage hero. Store: ${cleanStore}`
          : 'Free audit requested from the homepage hero. No store URL provided.',
        [HONEYPOT_FIELD]: honeypot,
      })

      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body,
      })

      let data = null
      try { data = await res.json() } catch { /* non-JSON — fall through */ }
      if (!res.ok || (data && data.ok === false)) {
        throw new Error(data?.error || `Server responded ${res.status}`)
      }
      setStatus('sent')
    } catch (err) {
      console.error('Hero lead submission failed:', err)
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-2xl border border-white/10 bg-cloud-100 px-4 py-3 text-sm text-ink ' +
    'placeholder:text-slate-soft/70 focus:border-flame focus-visible:ring-2 focus-visible:ring-flame/40'

  // ── Success state ──────────────────────────────────────────────────────────
  if (status === 'sent') {
    return (
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur"
        role="status"
        aria-live="polite"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-mint" />
          <div>
            <p className="font-display font-bold text-white">Request received.</p>
            <p className="mt-1 text-sm text-cloud-200/80">
              We'll review your store and reply within one business day. Need a faster answer?{' '}
              <a href={`tel:${site.phone.tel}`} className="font-semibold text-flame-light underline">
                Call {site.phone.display}
              </a>
              .
            </p>
          </div>
        </div>
      </motion.div>
    )
  }

  // ── Form ───────────────────────────────────────────────────────────────────
  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur"
      aria-label="Request a free conversion audit"
    >
      {/* Honeypot — off-screen, never seen or tabbed to by real users */}
      <input
        type="text"
        name={HONEYPOT_FIELD}
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="hero-email" className="sr-only">Work email</label>
          <input
            id="hero-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@store.com"
            className={inputClass}
            aria-invalid={!!fieldError}
            aria-describedby={fieldError ? 'hero-field-error' : undefined}
          />
        </div>
        <div className="flex-1">
          <label htmlFor="hero-store" className="sr-only">Store website (optional)</label>
          <input
            id="hero-store"
            name="store"
            type="text"
            value={store}
            onChange={(e) => setStore(e.target.value)}
            placeholder="yourstore.com (optional)"
            className={inputClass}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary mt-3 w-full text-base disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'sending' ? (
          <><Loader2 size={18} className="animate-spin" /> Sending…</>
        ) : (
          <>Get my free audit <ArrowRight size={18} /></>
        )}
      </button>

      <p className="mt-3 flex items-center gap-1.5 text-xs text-cloud-200/70">
        <ShieldCheck size={14} className="text-flame-light" />
        Free · no obligation · reply within 1 business day
      </p>

      {fieldError && (
        <p id="hero-field-error" className="mt-2 text-xs text-flame-light" role="alert">
          {fieldError}
        </p>
      )}

      {status === 'error' && (
        <p className="mt-2 flex items-center gap-1.5 text-xs text-flame-light" role="alert">
          <AlertCircle size={14} className="shrink-0" />
          Couldn't send — please try again or{' '}
          <a href={`tel:${site.phone.tel}`} className="font-semibold underline">
            call {site.phone.display}
          </a>.
        </p>
      )}
    </form>
  )
}
