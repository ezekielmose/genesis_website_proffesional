import { PageHero } from "@/components/PageHero";

const resources = [
  ["Portfolio", "Luxury Hotel Video Portfolio", "How cinematic storytelling helps luxury hotels increase visibility and bookings."],
  ["Guide", "Hospitality Marketing Guide", "Digital marketing strategies that help hotels improve visibility and direct bookings."],
  ["Case Study", "35% More Bookings", "A case-study format for showing how stronger digital content can improve engagement and reservations."],
  ["AI Guide", "AI Video Validation", "How AI-assisted quality validation can fit into hotel and destination media workflows."],
  ["AI Reliability", "Testing Customer-Facing AI", "An introduction to factual accuracy, hallucination, policy compliance and regression testing."],
  ["Checklist", "Travel AI Launch Checklist", "A future downloadable checklist for teams preparing customer-facing AI agents for release."],
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Learn, explore and get inspired."
        description="Hotel marketing resources, production case studies, portfolio work, AI quality content and travel AI reliability education."
      />
      <section className="section">
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {resources.map(([tag, title, body]) => (
            <article key={title} className="card p-7">
              <div className="eyebrow">{tag}</div>
              <h2 className="mt-5 text-2xl font-black">{title}</h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">{body}</p>
              <div className="mt-7 font-black text-[var(--brand)]">Learn More →</div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
