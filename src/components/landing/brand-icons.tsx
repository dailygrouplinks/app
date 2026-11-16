import type { SVGProps } from "react";

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M16 2.7C8.7 2.7 2.8 8.6 2.8 15.9c0 2.3.6 4.6 1.8 6.6L2.7 29.3l7-1.8c1.9 1 4.1 1.6 6.3 1.6 7.3 0 13.2-5.9 13.2-13.2S23.3 2.7 16 2.7Z"
      />
      <path
        fill="var(--card)"
        d="M16 5c6 0 10.9 4.9 10.9 10.9S22 26.8 16 26.8c-2 0-4-.6-5.7-1.6l-.4-.2-4.1 1.1 1.1-4-.3-.4c-1.1-1.8-1.7-3.8-1.7-5.8C4.9 9.9 9.9 5 16 5Z"
      />
      <path
        fill="currentColor"
        d="M11.9 9.8c-.3-.6-.5-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.4 3.8 5.9 5.2 2.9 1.1 3.5.9 4.1.9.6-.1 2-.8 2.3-1.6.3-.8.3-1.5.2-1.6-.1-.1-.3-.2-.7-.4l-2.3-1.1c-.3-.1-.5-.2-.8.2l-1 1.3c-.2.2-.4.3-.7.1-.4-.2-1.5-.5-2.8-1.7-1-.9-1.7-2-1.9-2.4-.2-.4 0-.5.2-.7l.5-.6c.2-.2.2-.4.4-.6.1-.2.1-.4 0-.6l-1.2-2.7Z"
      />
    </svg>
  );
}

export function GooglePlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="var(--icon-blue)" d="M3.6 1.8 13.4 12l-9.8 10.2c-.4-.2-.6-.7-.6-1.2V3c0-.5.2-1 .6-1.2Z" />
      <path fill="var(--brand-bright)" d="M3.6 1.8c.3-.2.8-.2 1.2 0l11.6 6.7-3 3.5L3.6 1.8Z" />
      <path fill="var(--icon-red)" d="M3.6 22.2 13.4 12l3 3.5-11.6 6.7c-.4.2-.9.2-1.2 0Z" />
      <path fill="var(--gold)" d="m16.4 8.5 3.6 2.1c1 .6 1 2.2 0 2.8l-3.6 2.1-3-3.5 3-3.5Z" />
    </svg>
  );
}

export function AndroidIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <g fill="currentColor">
        <path d="M8 12.5h16v11a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-11Z" />
        <path d="M8 11.3a8 7 0 0 1 16 0H8Z" />
        <rect x="3.6" y="12.5" width="3.2" height="9.5" rx="1.6" />
        <rect x="25.2" y="12.5" width="3.2" height="9.5" rx="1.6" />
        <rect x="11" y="23" width="3.2" height="7" rx="1.6" />
        <rect x="17.8" y="23" width="3.2" height="7" rx="1.6" />
        <path d="m10.6 3.6 1.9 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="m21.4 3.6-1.9 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </g>
      <circle cx="12.6" cy="8.6" r="1" fill="var(--card)" />
      <circle cx="19.4" cy="8.6" r="1" fill="var(--card)" />
    </svg>
  );
}

export function UsaFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 38 24" aria-hidden="true" preserveAspectRatio="xMidYMid slice" {...props}>
      <rect width="38" height="24" fill="var(--card)" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => (
        <rect key={i} y={(i * 24) / 13} width="38" height={24 / 13} fill="var(--flag-red)" />
      ))}
      <rect width="17" height={(24 / 13) * 7} fill="var(--flag-blue)" />
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2, 3, 4].map((c) => (
          <circle key={`${r}-${c}`} cx={2 + c * 3.2} cy={2 + r * 3.3} r="0.6" fill="var(--card)" />
        )),
      )}
    </svg>
  );
}

/** Logo mark: green rounded chat bubble with a group of people. */
export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <path
        fill="var(--brand)"
        d="M14 3h36c6.1 0 11 4.9 11 11v26c0 6.1-4.9 11-11 11H26l-12 10v-10c-6.1 0-11-4.9-11-11V14C3 7.9 7.9 3 14 3Z"
      />
      <g fill="var(--card)">
        <circle cx="32" cy="18" r="6" />
        <path d="M21.5 39c0-6 4.7-10.5 10.5-10.5S42.5 33 42.5 39v1h-21v-1Z" />
        <circle cx="18.5" cy="22" r="4.4" />
        <path d="M10.5 38.5c0-4.6 3.5-8.2 8-8.2 1.6 0 3 .4 4.2 1.2-1.6 2-2.6 4.6-2.7 7.4v.6h-9.5v-1Z" />
        <circle cx="45.5" cy="22" r="4.4" />
        <path d="M53.5 38.5c0-4.6-3.5-8.2-8-8.2-1.6 0-3 .4-4.2 1.2 1.6 2 2.6 4.6 2.7 7.4v.6h9.5v-1Z" />
      </g>
    </svg>
  );
}

/** Solid group-of-people glyph used for "Find a Group" and "Active Groups". */
export function PeopleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 40" aria-hidden="true" {...props}>
      <g fill="currentColor">
        <circle cx="24" cy="10" r="7" />
        <path d="M11 36c0-7.5 5.8-13.5 13-13.5S37 28.5 37 36v2H11v-2Z" />
        <circle cx="9.5" cy="14.5" r="5" />
        <path d="M0 34.5c0-5.7 4.3-10.2 9.6-10.2 1.6 0 3.1.4 4.4 1.1-2 2.8-3.1 6.2-3.1 9.9V36H0v-1.5Z" />
        <circle cx="38.5" cy="14.5" r="5" />
        <path d="M48 34.5c0-5.7-4.3-10.2-9.6-10.2-1.6 0-3.1.4-4.4 1.1 2 2.8 3.1 6.2 3.1 9.9V36H48v-1.5Z" />
      </g>
    </svg>
  );
}
