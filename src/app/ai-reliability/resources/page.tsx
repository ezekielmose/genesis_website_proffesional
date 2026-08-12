import { PageHero } from "@/components/PageHero";

const items = [
  ["Guide", "What is AI reliability testing?", "An introduction to factual accuracy, hallucinations, policy compliance, tool use and multi-turn behavior."],
  ["Checklist", "Travel AI launch checklist", "Reliability checks a travel or hospitality company should complete before an AI release reaches customers."],
  ["Framework", "How to classify AI failures", "A severity and category framework for turning raw evaluations into an actionable fix list."],
  ["Template", "AI regression test library", "A structure for preserving confirmed failures and rerunning them after models, prompts or rules change."],
  ["Example", "Hotel policy hallucination case", "How a simple wrong pet-policy answer can create refunds, staff conflict and lasting review damage."],
  ["Brief", "Human verification at scale", "How automation, calibrated evaluators and QA leads can work together without trusting one model to grade itself."],
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="AI Reliability · Resources"
        title="Practical material for teams shipping customer-facing AI."
        description="This section can become your AI Reliability knowledge hub with articles, checklists, case studies, research and downloadable reports."
      />
      <section className="section">
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map(([tag, title, body]) => (
            <div key={title} className="card p-7">
              <div className="eyebrow">{tag}</div>
              <h2 className="mt-5 text-2xl font-black">{title}</h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
