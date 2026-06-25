import { useId } from 'react'

// Vector brand mark — the "Cart XF" monogram.
//
// The orange X is fixed. The secondary F uses currentColor, so set the text
// color of the parent to control it (charcoal on light surfaces, white on
// dark). The F's italic stem is parallel to the X's thick stroke and weaves
// behind the X, re-emerging between its feet; the thin gap where it crosses is
// carved with an feMorphology mask, so that gap is always the background color
// and the weave reads cleanly on any surface.
//
// Decorative — always paired with the "Cart Transformation" wordmark, so it is
// hidden from assistive tech.
//
// Note: useId() requires React 18+. It gives each instance unique mask/filter
// ids so multiple LogoMarks on one page don't collide.
export default function LogoMark({ className = '' }) {
  const uid = useId()
  const maskId = `xf-weave-${uid}`
  const dilateId = `xf-dilate-${uid}`

  // Orange X path — reused both as the visible mark and as the mask knockout.
  const X =
    'M 0 0 L 0 100 L 413 100 L 798 561 L 799 569 L 628 865 L 622 879 ' +
    'L 873 879 L 948 746 L 953 747 L 1063 879 L 1203 879 L 1202 875 ' +
    'L 1008 645 L 1008 639 L 1198 303 L 1251 205 L 1008 205 L 862 460 ' +
    'L 859 463 L 855 463 L 465 0 Z'

  return (
    <svg
      viewBox="-80 -80 1800 1039"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Grow the X by 15 units, then knock that out of the F below to
            leave a thin, even gap wherever the stem passes behind the X. */}
        <filter id={dilateId} x="-30%" y="-30%" width="160%" height="160%">
          <feMorphology in="SourceAlpha" operator="dilate" radius="15" />
        </filter>
        <mask id={maskId}>
          <rect x="-80" y="-80" width="1800" height="1039" fill="white" />
          <path d={X} fill="black" filter={`url(#${dilateId})`} />
        </mask>
      </defs>

      {/* Secondary F (currentColor), weaving behind the X. */}
      <g mask={`url(#${maskId})`} fill="currentColor">
        {/* stem (top -> baseline) */}
        <path d="M 1293.0 205 L 1413.3 205 L 1035.8 879 L 915.6 879 Z" />
        {/* top arm */}
        <path d="M 1293.0 205 L 1640 205 L 1640 310 L 1234.2 310 Z" />
        {/* middle arm */}
        <path d="M 1144.6 470 L 1410 470 L 1410 575 L 1085.8 575 Z" />
      </g>

      {/* Orange X (fixed), drawn on top. */}
      <path d={X} fill="#F15A25" />
    </svg>
  )
}
