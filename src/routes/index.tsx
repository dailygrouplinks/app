import { createFileRoute } from "@tanstack/react-router";

import { BackgroundWaves } from "@/components/landing/background-waves";
import { Hero } from "@/components/landing/hero";
import { SiteHeader } from "@/components/landing/site-header";
import { StatsBar } from "@/components/landing/stats-bar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Daily Group Links – Discover & Join Latest WhatsApp Groups" },
      {
        name: "description",
        content:
          "Explore thousands of active WhatsApp groups from around the world by category, country and language. Find your interests and join in seconds.",
      },
      { property: "og:title", content: "Daily Group Links – Discover & Join Latest WhatsApp Groups" },
      {
        property: "og:description",
        content: "Explore thousands of active WhatsApp groups by category, country and language. 100% free.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative flex h-dvh w-full flex-col overflow-hidden bg-background">
      <BackgroundWaves />
      <SiteHeader />
      <Hero />
      <StatsBar />
    </div>
  );
}
