import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Clapperboard,
  Gamepad2,
  GraduationCap,
  Heart,
  House,
  Globe,
  LayoutGrid,
  Menu,
  Music,
  Plane,
  CirclePlus,
  Search,
  Signal,
  TrendingUp,
  Trophy,
  Users,
  Wifi,
  BatteryFull,
  type LucideIcon,
} from "lucide-react";

import friendsGroup from "@/assets/friends-group.jpg";
import friendsSunset from "@/assets/friends-sunset.jpg";
import { UsaFlag } from "./brand-icons";

type Tone = "green" | "blue" | "orange" | "purple" | "pink" | "red";

const toneTile: Record<Tone, string> = {
  green: "bg-tint-green text-brand",
  blue: "bg-tint-blue text-icon-blue",
  orange: "bg-tint-orange text-icon-orange",
  purple: "bg-tint-purple text-icon-purple",
  pink: "bg-tint-pink text-heart",
  red: "bg-tint-red text-icon-red",
};

const popular: { label: string; icon: LucideIcon; tone: Tone }[] = [
  { label: "Study", icon: GraduationCap, tone: "blue" },
  { label: "Jobs", icon: Briefcase, tone: "orange" },
  { label: "Gaming", icon: Gamepad2, tone: "blue" },
  { label: "Movies", icon: Clapperboard, tone: "purple" },
  { label: "Dating", icon: Heart, tone: "pink" },
];

const categories: { label: string; count: number; icon: LucideIcon; tone: Tone }[] = [
  { label: "Study", count: 38, icon: GraduationCap, tone: "purple" },
  { label: "Jobs", count: 64, icon: Briefcase, tone: "orange" },
  { label: "Gaming", count: 64, icon: Gamepad2, tone: "blue" },
  { label: "Movies", count: 51, icon: Clapperboard, tone: "green" },
  { label: "Music", count: 42, icon: Music, tone: "red" },
  { label: "Travel", count: 33, icon: Plane, tone: "blue" },
  { label: "Business", count: 29, icon: TrendingUp, tone: "blue" },
  { label: "Sports", count: 37, icon: Trophy, tone: "orange" },
];

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-[1.4rem] pt-[0.7rem] text-[0.62rem] font-semibold text-primary-foreground">
      <span>19:2</span>
      <span className="flex items-center gap-[0.2rem]">
        <Signal className="size-[0.7rem]" />
        <Wifi className="size-[0.7rem]" />
        <BatteryFull className="size-[0.85rem]" />
      </span>
    </div>
  );
}

function PhoneFrame({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`absolute rounded-[3.3rem] bg-gradient-bezel p-[0.65rem] shadow-phone ${className ?? ""}`}>
      <div className="relative h-full w-full overflow-hidden rounded-[2.75rem] bg-card">{children}</div>
    </div>
  );
}

function HomeScreen() {
  return (
    <div className="flex h-full flex-col">
      <div className="bg-gradient-brand pb-[0.9rem]">
        <StatusBar />
        <div className="flex items-center gap-[0.7rem] px-[1.1rem] pt-[0.7rem]">
          <Menu className="size-[1.2rem] text-primary-foreground" />
          <span className="flex-1 font-display text-[1.3rem] font-bold text-primary-foreground">
            Daily Group Links
          </span>
          <Search className="size-[1.15rem] text-primary-foreground" />
        </div>
      </div>

      <div className="mx-[0.8rem] mt-[0.6rem] flex h-[2.4rem] items-center gap-[0.5rem] rounded-full border-2 border-brand-soft bg-card px-[0.9rem] text-[0.8rem] text-muted-foreground">
        <Search className="size-[0.95rem] text-foreground" />
        <span className="text-foreground">Find a group</span>
      </div>

      <div className="relative mx-[0.8rem] mt-[0.6rem] h-[8.4rem] shrink-0 overflow-hidden rounded-[1rem] bg-gradient-banner">
        <img
          src={friendsGroup}
          alt="Friends smiling together"
          width={992}
          height={672}
          className="absolute inset-y-0 right-0 h-full w-[62%] object-cover [mask-image:linear-gradient(to_right,transparent,black_35%)]"
        />
        <div className="relative z-10 flex h-full flex-col justify-center pl-[0.9rem] font-display leading-[1.02]">
          <span className="text-[1.05rem] font-bold text-primary-foreground">Discover &amp; Join</span>
          <span className="text-[1.65rem] font-extrabold text-gold">Latest</span>
          <span className="text-[1.65rem] font-extrabold text-gold">Groups</span>
        </div>
      </div>

      <div className="mt-[0.7rem] flex items-center justify-between px-[1rem]">
        <span className="font-display text-[1rem] font-bold text-foreground">Popular Categories</span>
        <span className="flex items-center gap-[0.15rem] text-[0.7rem] font-semibold text-brand">
          See All <ArrowRight className="size-[0.75rem]" />
        </span>
      </div>
      <div className="mt-[0.45rem] grid grid-cols-5 gap-[0.4rem] px-[0.8rem]">
        {popular.map(({ label, icon: Icon, tone }) => (
          <div key={label} className="flex flex-col items-center gap-[0.25rem]">
            <span className={`grid size-[2.9rem] place-items-center rounded-[0.8rem] ${toneTile[tone]}`}>
              <Icon className="size-[1.4rem]" strokeWidth={2.2} />
            </span>
            <span className="text-[0.66rem] font-semibold text-foreground">{label}</span>
          </div>
        ))}
      </div>

      <span className="mt-[0.6rem] px-[1rem] font-display text-[1rem] font-bold text-foreground">
        Latest Groups
      </span>
      <div className="flex min-h-0 flex-1 flex-col gap-[0.35rem] overflow-hidden px-[0.8rem] pt-[0.35rem]">
        <GroupRow
          media={<img src={friendsGroup} alt="" width={992} height={672} className="h-full w-full object-cover" />}
          title="Only Girls Status Group"
          meta="Entertainment • Global"
          heart
        />
        <GroupRow media={<UsaFlag className="h-full w-full" />} title="USA Girls Chat Group" meta="Chat • USA" />
        <GroupRow
          media={<img src={friendsSunset} alt="" width={816} height={816} className="h-full w-full object-cover" />}
          title="Friendship Forever"
          meta="Social • Global"
          heart
        />
      </div>

      <nav className="grid h-[3.5rem] shrink-0 grid-cols-5 border-t border-border bg-card text-[0.62rem] font-semibold text-foreground">
        {[
          { label: "Home", icon: House, active: true },
          { label: "Countries", icon: Globe },
          { label: "Categories", icon: LayoutGrid },
          { label: "Add Group", icon: CirclePlus },
          { label: "My Groups", icon: Users },
        ].map(({ label, icon: Icon, active }) => (
          <span key={label} className={`flex flex-col items-center justify-center gap-[0.15rem] ${active ? "text-brand" : ""}`}>
            <Icon className="size-[1.2rem]" fill={active ? "currentColor" : "none"} />
            {label}
          </span>
        ))}
      </nav>
    </div>
  );
}

function GroupRow({
  media,
  title,
  meta,
  heart,
}: {
  media: React.ReactNode;
  title: string;
  meta: string;
  heart?: boolean;
}) {
  return (
    <div className="flex items-center gap-[0.55rem] rounded-[0.8rem] py-[0.15rem]">
      <span className="h-[3rem] w-[3.3rem] shrink-0 overflow-hidden rounded-[0.6rem]">{media}</span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="flex items-center gap-[0.2rem] truncate text-[0.78rem] font-bold text-foreground">
          {title}
          {heart && <Heart className="size-[0.7rem] shrink-0 text-heart" fill="currentColor" />}
        </span>
        <span className="text-[0.66rem] text-muted-foreground">{meta}</span>
      </span>
      <span className="rounded-full bg-gradient-brand px-[0.85rem] py-[0.35rem] text-[0.72rem] font-bold text-primary-foreground">
        Join
      </span>
    </div>
  );
}

function CategoriesScreen() {
  return (
    <div className="flex h-full flex-col">
      <div className="bg-gradient-brand pb-[1rem]">
        <StatusBar />
        <div className="flex items-center gap-[0.7rem] px-[1.1rem] pt-[0.8rem]">
          <ArrowLeft className="size-[1.2rem] text-primary-foreground" />
          <span className="flex-1 font-display text-[1.3rem] font-bold text-primary-foreground">Categories</span>
          <Search className="size-[1.1rem] text-primary-foreground" />
        </div>
      </div>
      <div className="grid flex-1 grid-cols-2 content-start gap-[0.65rem] p-[0.8rem]">
        {categories.map(({ label, count, icon: Icon, tone }) => (
          <div
            key={label}
            className={`flex h-[6.4rem] flex-col items-center justify-center rounded-[1rem] ${toneTile[tone]}`}
          >
            <Icon className="size-[1.9rem]" strokeWidth={2.1} />
            <span className="mt-[0.35rem] font-display text-[0.95rem] font-bold text-foreground">{label}</span>
            <span className="text-[0.68rem] text-muted-foreground">{count} groups</span>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 300 60" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-[3.2rem] w-full" aria-hidden="true">
        <path d="M0 30 C 80 0, 160 60, 300 20 L300 60 L0 60 Z" fill="var(--brand-bright)" opacity="0.55" />
        <path d="M0 45 C 90 20, 180 65, 300 38 L300 60 L0 60 Z" fill="var(--brand)" />
      </svg>
    </div>
  );
}

/**
 * Two tilted phone mockups on a pale green blob. Laid out on a fixed
 * 44rem x 45.4rem box so it can be scaled as a unit on small screens.
 */
export function PhoneMockups({ className }: { className?: string }) {
  return (
    <div className={`h-[45.4rem] w-[44rem] ${className ?? ""}`}>
      <svg
        viewBox="0 0 704 726"
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="blob-fill" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="var(--brand-soft)" />
            <stop offset="100%" stopColor="var(--brand-mist)" />
          </radialGradient>
        </defs>
        <path
          d="M110 300 C 140 170, 330 130, 470 170 C 620 210, 770 300, 760 470 C 750 620, 600 720, 420 715 C 240 710, 60 640, 60 500 C 60 420, 90 360, 110 300 Z"
          fill="url(#blob-fill)"
        />
        <path d="M380 726 C 470 650, 600 640, 700 690 L 700 726 Z" fill="var(--brand-soft)" />
      </svg>

      <PhoneFrame className="left-[23.6rem] top-[2.6rem] z-0 h-[40rem] w-[18.75rem] rotate-[8deg]">
        <CategoriesScreen />
      </PhoneFrame>
      <PhoneFrame className="left-[2.6rem] top-[0.3rem] z-10 h-[42.3rem] w-[21.9rem] -rotate-[6deg]">
        <HomeScreen />
      </PhoneFrame>
    </div>
  );
}
