/** Full-bleed green waves along the bottom edge, behind the highlights bar. */
export function BackgroundWaves() {
  return (
    <>
      {/* Green hill hugging the right edge behind the phones (landscape only) */}
      <svg
        viewBox="0 0 200 360"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-[6rem] right-0 z-0 hidden h-[22rem] w-[13rem] landscape:block"
        aria-hidden="true"
      >
        <path d="M200 0 C 120 20, 40 120, 20 230 C 10 290, 0 330, 0 360 L200 360 Z" fill="var(--brand-bright)" opacity="0.5" />
      </svg>
      <svg
      viewBox="0 0 1672 180"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[6rem] w-full landscape:h-[11.25rem]"
      aria-hidden="true"
    >
      <path d="M0 18 C 130 40, 270 110, 470 180 L0 180 Z" fill="var(--brand-soft)" />
      <path d="M0 55 C 110 70, 230 125, 350 180 L0 180 Z" fill="var(--brand-bright)" opacity="0.85" />
      <path d="M0 100 C 80 110, 170 140, 240 180 L0 180 Z" fill="var(--brand-deep)" />
      <path d="M1230 180 C 1390 130, 1560 70, 1672 20 L1672 180 Z" fill="var(--brand-soft)" />
      <path d="M1360 180 C 1470 140, 1590 95, 1672 70 L1672 180 Z" fill="var(--brand-bright)" opacity="0.85" />
      <path d="M1490 180 C 1560 150, 1620 132, 1672 124 L1672 180 Z" fill="var(--brand-deep)" />
    </svg>
    </>
  );
}
