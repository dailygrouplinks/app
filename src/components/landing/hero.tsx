import { ArrowRight, Flame, Globe, Search, ShieldCheck, type LucideIcon } from "lucide-react";

import { PeopleIcon } from "./brand-icons";
import { PhoneMockups } from "./phones";

const features: { title: [string, string]; icon: LucideIcon | typeof PeopleIcon; tile: string; filled?: boolean; solid?: boolean }[] = [
  { title: ["Explore", "Categories"], icon: Search, tile: "bg-tint-green text-brand" },
  { title: ["Find", "a Group"], icon: PeopleIcon, tile: "bg-tint-blue text-icon-blue", solid: true },
  { title: ["Safe &", "Secure"], icon: ShieldCheck, tile: "bg-tint-orange text-icon-orange", filled: true },
  { title: ["Global", "Communities"], icon: Globe, tile: "bg-tint-purple text-icon-purple" },
];

function Swash({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 30" className={className} aria-hidden="true">
      <path d="M4 22 C 70 6, 170 2, 256 14" fill="none" stroke="var(--brand-bright)" strokeWidth="7" strokeLinecap="round" />
      <path d="M40 26 C 100 16, 170 14, 230 20" fill="none" stroke="var(--brand-bright)" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

function Sparks({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 70 80" className={className} aria-hidden="true">
      <g stroke="var(--brand-bright)" strokeWidth="7" strokeLinecap="round">
        <path d="M46 6 L62 36" />
        <path d="M8 34 L44 56" />
        <path d="M14 72 L34 72" />
      </g>
    </svg>
  );
}

export function Hero() {
  return (
    <main className="relative z-10 flex min-h-0 flex-1 flex-col landscape:items-center landscape:justify-center">
      <div className="relative flex min-h-0 flex-1 flex-col px-[1.25rem] landscape:block landscape:h-[45.4rem] landscape:w-full landscape:max-w-[104.5rem] landscape:flex-none landscape:px-0">
        {/* Decorative accents (landscape only) */}
        <Sparks className="absolute left-[48rem] top-[2.4rem] hidden w-[4.4rem] landscape:block" />
        <div className="dot-grid absolute left-[98.4rem] top-[1.1rem] hidden size-[6rem] landscape:block" aria-hidden="true" />
        <svg viewBox="0 0 50 50" className="absolute left-[98.3rem] top-[31rem] hidden w-[3rem] landscape:block" aria-hidden="true">
          <g stroke="var(--brand-bright)" strokeWidth="6" strokeLinecap="round">
            <path d="M8 26 L38 6" />
            <path d="M12 42 L42 40" />
          </g>
        </svg>

        <div className="contents landscape:absolute landscape:left-[4.25rem] landscape:top-[2rem] landscape:block landscape:w-[47rem]">
          <span className="mt-[0.9rem] inline-flex h-[2rem] w-fit items-center gap-[0.4rem] rounded-full bg-brand-mist px-[0.8rem] text-[0.8rem] font-semibold text-brand landscape:mt-0 landscape:h-[3.1rem] landscape:gap-[0.7rem] landscape:px-[1.2rem] landscape:text-[1.25rem]">
            <Flame className="size-[1rem] landscape:size-[1.6rem]" fill="currentColor" />
            Discover Amazing Communities
          </span>

          <h1 className="mt-[0.7rem] font-display text-[2.55rem] font-extrabold leading-[0.98] tracking-[-0.02em] text-foreground landscape:mt-[0.9rem] landscape:text-[5.35rem] landscape:leading-[0.93]">
            Discover &amp; Join
            <br />
            Latest <span className="text-brand-bright">WhatsApp</span>
            <br />
            Groups
            <Swash className="ml-[0.8rem] inline-block w-[8rem] align-middle landscape:ml-[2.2rem] landscape:w-[16rem]" />
          </h1>

          <p className="mt-[0.7rem] text-[0.92rem] leading-[1.4] text-muted-foreground landscape:mt-[1.6rem] landscape:w-[42rem] landscape:text-[1.5rem] landscape:leading-[1.33]">
            Explore thousands of active WhatsApp groups from around the world. Discover communities by category,
            country and language. Find your interests and join in seconds.
          </p>

          <div className="order-2 mt-[0.6rem] grid grid-cols-4 gap-[0.5rem] landscape:mt-[1.4rem] landscape:w-[44.6rem] landscape:gap-[0.9rem]">
            {features.map(({ title, icon: Icon, tile, filled, solid }) => (
              <div
                key={title.join(" ")}
                className="flex h-[5.4rem] flex-col items-center justify-center gap-[0.3rem] rounded-[0.9rem] bg-card shadow-card landscape:h-[7.9rem] landscape:gap-[0.35rem] landscape:rounded-[1.3rem]"
              >
                <span className={`grid size-[2.4rem] place-items-center rounded-full ${tile} landscape:size-[4.3rem]`}>
                  {solid ? (
                    <Icon className="size-[1.4rem] landscape:size-[2.6rem]" />
                  ) : (
                    <Icon
                      className="size-[1.3rem] landscape:size-[2.4rem]"
                      strokeWidth={2.6}
                      {...(filled ? { fill: "currentColor", stroke: "var(--card)", strokeWidth: 1.8 } : {})}
                    />
                  )}
                </span>
                <span className="text-center text-[0.68rem] font-bold leading-[1.1] text-foreground landscape:text-[1.2rem]">
                  {title[0]}
                  <br />
                  {title[1]}
                </span>
              </div>
            ))}
          </div>

          <div className="order-3 mt-[0.75rem] grid grid-cols-2 gap-[0.6rem] landscape:mt-[1.5rem] landscape:flex landscape:gap-[1.9rem]">
            <a
              href="https://dailygrouplinks.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[3.3rem] items-center justify-center gap-[0.5rem] rounded-[0.7rem] bg-ink px-[0.7rem] text-ink-foreground shadow-card transition-transform hover:-translate-y-0.5 landscape:h-[4.9rem] landscape:gap-[0.9rem] landscape:rounded-[0.8rem] landscape:px-[1.6rem] landscape:whitespace-nowrap"
            >
              <span className="font-display text-[0.86rem] font-bold leading-[1.1] landscape:text-[1.42rem]">
                WhatsApp Group Link
              </span>
            </a>
            <a
              href="https://dailygrouplinks.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[3.3rem] items-center justify-center gap-[0.45rem] rounded-full border-2 border-brand bg-card px-[0.7rem] text-foreground transition-colors hover:bg-brand-mist landscape:h-[4.6rem] landscape:gap-[0.9rem] landscape:px-[1.8rem] landscape:whitespace-nowrap"
            >
              <Globe className="size-[1.3rem] shrink-0 text-brand landscape:size-[2.2rem]" strokeWidth={2.2} />
              <span className="font-display text-[0.86rem] font-bold leading-[1.1] landscape:text-[1.42rem]">
                Daily Group Links
              </span>
              <ArrowRight className="size-[1rem] shrink-0 text-brand landscape:size-[1.5rem]" strokeWidth={2.5} />
            </a>
          </div>
        </div>

        <div className="relative order-1 my-[0.3rem] min-h-0 flex-1 landscape:absolute landscape:left-[55rem] landscape:top-0 landscape:m-0 landscape:h-[45.4rem] landscape:w-[44rem]">
          <PhoneMockups className="absolute left-1/2 top-1/2 origin-center -translate-x-1/2 -translate-y-1/2 scale-[0.32] landscape:left-0 landscape:top-0 landscape:translate-x-0 landscape:translate-y-0 landscape:scale-100" />
        </div>
      </div>
    </main>
  );
}
