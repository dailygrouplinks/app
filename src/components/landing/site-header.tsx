import { ArrowRight, ChevronDown, House, Menu } from "lucide-react";

import { GooglePlayIcon, LogoMark } from "./brand-icons";

const navItems = [
  { label: "Categories", dropdown: true, url: "https://dailygrouplinks.com/all-whatsapp-group/" },
  { label: "Countries", dropdown: true, url: "https://dailygrouplinks.com/country/" },
  { label: "Add Group", url: "https://dailygrouplinks.com/submit-group/" },
];

export function SiteHeader() {
  return (
    <header className="relative z-20 shrink-0 border-b border-border bg-card">
      <div className="mx-auto flex h-[3.75rem] max-w-[104.5rem] items-center justify-between gap-[0.75rem] px-[1.25rem] landscape:h-[6rem] landscape:px-[4rem]">
        <a
          href="https://dailygrouplinks.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-0 items-center gap-[0.55rem] landscape:gap-[1.4rem]"
        >
          <LogoMark className="size-[2.2rem] shrink-0 landscape:size-[3.9rem]" />
          <span className="truncate font-display text-[1.1rem] font-bold tracking-tight text-foreground landscape:text-[2.05rem]">
            Daily Group <span className="text-brand">Links</span>
          </span>
        </a>

        <nav className="hidden items-center gap-[2.3rem] text-[1.12rem] font-semibold text-foreground landscape:flex">
          <a
            href="https://dailygrouplinks.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[3rem] items-center gap-[0.4rem] rounded-full bg-primary px-[1rem] text-primary-foreground shadow-button"
          >
            <House className="size-[1.15rem]" fill="currentColor" />
            Home
          </a>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[0.35rem] transition-colors hover:text-brand"
            >
              {item.label}
              {item.dropdown && <ChevronDown className="size-[1.1rem]" strokeWidth={2.5} />}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-[0.5rem] landscape:gap-[1.2rem]">
          <a
            href="https://play.google.com/store/apps/details?id=com.dailygrouplinks.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-[3.1rem] items-center gap-[0.6rem] rounded-full border-2 border-brand-soft bg-card px-[1.4rem] text-[1.15rem] font-bold text-foreground transition-colors hover:border-brand landscape:flex"
          >
            <GooglePlayIcon className="size-[1.6rem]" />
            Get the App
          </a>
          <a
            href="https://dailygrouplinks.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[2.3rem] items-center gap-[0.35rem] rounded-full bg-primary px-[0.9rem] text-[0.82rem] font-bold text-primary-foreground shadow-button transition-transform hover:-translate-y-px landscape:h-[3.1rem] landscape:gap-[0.5rem] landscape:px-[1.6rem] landscape:text-[1.15rem]"
          >
            WhatsApp Group
            <ArrowRight className="size-[0.95rem] landscape:size-[1.25rem]" strokeWidth={2.5} />
          </a>
          <button
            type="button"
            aria-label="Open menu"
            className="grid size-[2.3rem] place-items-center rounded-full border border-border text-foreground landscape:hidden"
          >
            <Menu className="size-[1.2rem]" />
          </button>
        </div>
      </div>
    </header>
  );
}
