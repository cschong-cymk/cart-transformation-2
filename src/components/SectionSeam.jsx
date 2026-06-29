/**
 * SectionSeam — SVG wave that transitions between a dark section and the
 * surrounding cloud background. Replaces the old CSS gradient div which
 * caused muddy brown smearing because CSS `transparent` desaturates through
 * grey rather than fading to the actual background colour.
 *
 * Usage (unchanged from before):
 *   <SectionSeam position="bottom" />   ← dark section → cloud below
 *   <SectionSeam position="top"    />   ← cloud above  → dark section
 *
 * The SVG always fills with `cloud` (#E9E1D2) so the wave reads as the
 * light section bleeding into the dark one, never as a colour smear.
 *
 * `flip` — mirrors the wave horizontally for visual variety when two seams
 * appear close together (e.g. top + bottom on the same section).
 */
export default function SectionSeam({
  position = 'bottom',
  cloudColor = '#E9E1D2',
  flip = false,
  className = '',
}) {
  const isBottom = position === 'bottom'

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 z-10 overflow-hidden
        ${isBottom ? 'bottom-0' : 'top-0'} ${className}`}
      style={{ height: 72 }}
    >
      <svg
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        style={{
          display: 'block',
          // Bottom seam: wave hangs down from the dark section into light below.
          // Top seam: flip vertically so it rises up from the light above.
          transform: [
            isBottom ? '' : 'scaleY(-1)',
            flip ? 'scaleX(-1)' : '',
          ]
            .filter(Boolean)
            .join(' ') || undefined,
        }}
      >
        <path
          d="M0,32 C240,72 480,0 720,32 C960,64 1200,16 1440,40 L1440,72 L0,72 Z"
          fill={cloudColor}
        />
      </svg>
    </div>
  )
}
