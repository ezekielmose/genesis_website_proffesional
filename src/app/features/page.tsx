import { PageHero } from "@/components/PageHero";

const items = [
  ["Hospitality-first execution", "Services built around hotels, resorts, tourism brands and travel platforms."],
  ["Cinematic storytelling", "Premium media designed to make places, rooms, experiences and destinations emotionally compelling."],
  ["Cross-platform content", "Content for websites, booking platforms, YouTube, Instagram, TikTok and social campaigns."],
  ["Digital conversion focus", "Web and marketing work structured around visibility, credibility, engagement and direct booking performance."],
  ["AI-assisted quality validation", "AI-supported review workflows to improve consistency and media quality."],
  ["AI agent reliability testing", "Stress-test customer-facing AI across accuracy, policies, hallucinations, tools and regression risk."],
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Creative quality, hospitality expertise and AI assurance."
        description="The redesigned Genesis Digital platform brings your hospitality services together with AI reliability under one brand."
      />
      <section className="section">
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map(([title, body], i) => (
            <div key={title} className="card p-7">
              <div className="text-sm font-black text-[var(--brand)]">{String(i + 1).padStart(2, "0")}</div>
              <h2 className="mt-6 text-2xl font-black">{title}</h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
