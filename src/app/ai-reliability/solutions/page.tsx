import { PageHero } from "@/components/PageHero";

const items = [
  ["Policy & pricing accuracy", "Test cancellation rules, pricing interpretation, refund conditions and business rules."],
  ["Hotel facts & room information", "Verify amenities, room types, property facts, locations and service details."],
  ["Pet, family & accessibility", "Stress-test requirements where incorrect guidance creates booking friction or on-property conflict."],
  ["Dates & booking requirements", "Challenge date reasoning, occupancy, stay requirements and multi-condition requests."],
  ["Multi-turn conversations", "Test whether the agent remains consistent and correct as conversations become more complex."],
  ["Hallucination detection", "Identify unsupported claims, invented policies, fabricated amenities and confident answers without evidence."],
  ["Business-rule compliance", "Measure whether the agent follows the rules and instructions your operation depends on."],
  ["Recommendations & edge cases", "Test recommendation quality, unusual combinations, adversarial prompts and difficult customer behavior."],
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="AI Reliability · Solutions"
        title="Reliability testing designed around real travel failures."
        description="Genesis Digital tests travel and hospitality AI systems against situations that create refunds, complaints, customer friction, lost conversion and reputation damage."
      />
      <section className="section">
        <div className="container grid gap-5 md:grid-cols-2">
          {items.map(([title, body]) => (
            <div key={title} className="card p-7">
              <h2 className="text-2xl font-black">{title}</h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
