import { Fragment } from "react";
import { Globe, ShieldCheck, Zap, type LucideIcon } from "lucide-react";

import { AndroidIcon, PeopleIcon } from "./brand-icons";

type Stat = {
  title: string;
  subtitle?: string;
  icon: LucideIcon | typeof AndroidIcon;
  /** Solid SVG glyphs (no lucide stroke props) */
  solid?: boolean;
  filled?: boolean;
};

const stats: Stat[] = [
  { title: "10,000+", subtitle: "Active Groups", icon: PeopleIcon, solid: true },
  { title: "All Countries", subtitle: "Worldwide", icon: Globe },
  { title: "100% Free", subtitle: "Forever", icon: Zap, filled: true },
  { title: "Verified Groups", icon: ShieldCheck, filled: true },
  { title: "Available on", subtitle: "Android", icon: AndroidIcon, solid: true },
];

export function StatsBar() {
  return (
    <section
      aria-label="Highlights"
      className="relative z-10 mx-[1.25rem] mb-[0.9rem] mt-[0.7rem] grid shrink-0 grid-cols-5 rounded-[1.25rem] bg-card px-[0.4rem] py-[0.75rem] shadow-bar landscape:mx-auto landscape:mb-[1.55rem] landscape:mt-0 landscape:flex landscape:h-[5.9rem] landscape:w-[92rem] landscape:items-center landscape:justify-between landscape:rounded-full landscape:px-[4rem] landscape:py-0"
    >
      {stats.map(({ title, subtitle, icon: Icon, filled, solid }, i) => {
        const last = i === stats.length - 1;
        const androidStyle = last;
        return (
          <Fragment key={title}>
            <div className="flex flex-col items-center gap-[0.3rem] text-center landscape:flex-row landscape:gap-[1.25rem] landscape:text-left">
              <Icon
                className="size-[1.6rem] shrink-0 text-brand landscape:size-[3.2rem]"
                {...(filled && !solid
                  ? { fill: "currentColor", stroke: "var(--card)", strokeWidth: 1.6 }
                  : {})}
              />
              <div className="flex flex-col leading-tight">
                <span className="text-[0.66rem] font-bold text-foreground landscape:text-[1.35rem]">{title}</span>
                {subtitle && (
                  <span
                    className={
                      androidStyle
                        ? "text-[0.66rem] font-bold text-foreground landscape:text-[1.35rem]"
                        : "text-[0.58rem] text-muted-foreground landscape:text-[1.15rem]"
                    }
                  >
                    {subtitle}
                  </span>
                )}
              </div>
            </div>
            {!last && <span aria-hidden="true" className="hidden h-[2.2rem] w-px bg-border landscape:block" />}
          </Fragment>
        );
      })}
    </section>
  );
}
