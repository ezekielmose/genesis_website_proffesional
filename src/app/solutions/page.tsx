import { Bot, Camera, Laptop2, Megaphone, ShieldCheck, Video } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const items = [
  ["video-production", Video, "Hotel Video Production", "Premium cinematic videos for hotels, resorts, lodges, restaurants and destinations."],
  ["web-development", Laptop2, "Website Development", "Modern hospitality websites designed to improve brand credibility and direct-booking journeys."],
  ["digital-marketing", Megaphone, "Digital Marketing", "Hospitality-focused digital campaigns, social content and marketing strategy."],
  ["ai-video-validation", Bot, "AI Video Validation", "AI-assisted media validation workflows that help review consistency and production standards."],
  ["drone-photography", Camera, "Drone Photography", "Professional aerial coverage that showcases property surroundings and destination context."],
  ["ai-reliability", ShieldCheck, "AI Reliability Testing", "External QA for travel and hospitality AI agents across accuracy, policies, hallucinations, tools and regression risk."],
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="One hospitality partner across creative, digital and AI."
        description="Genesis Digital combines cinematic media, web experiences, marketing and AI quality services under one hospitality-focused brand."
      />

      <section className="section">
        <div className="container grid gap-6">
          {items.map(([id, Icon, title, body], i) => {
            const I = Icon as typeof Video;
            return (
              <article id={String(id)} key={String(id)} className="card grid gap-7 p-7 md:grid-cols-[90px_1fr] md:p-9">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[var(--soft)] text-[var(--brand)]">
                  <I size={30} />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-[.15em] text-[var(--muted)]">
                    Solution {String(i + 1).padStart(2, "0")}
                  </div>
                  <h2 className="mt-3 text-3xl font-black">{String(title)}</h2>
                  <p className="mt-4 max-w-3xl leading-8 text-[var(--muted)]">{String(body)}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
