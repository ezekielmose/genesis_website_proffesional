import { PageHero } from "@/components/PageHero";

const items = [
  ["Scenario Library", "Create and maintain real-world travel test cases organized by property, policy, risk category and severity."],
  ["Automated Test Runs", "Run first-pass evaluations at volume and preserve prompts, responses and outcomes."],
  ["Human Verification Queue", "Route uncertain and high-risk failures to trained evaluators for evidence-based confirmation."],
  ["Failure Classification", "Record Pass/Fail, severity, category, expected behavior, evidence and recommended fixes."],
  ["AI Reliability Score", "Summarize performance across factual accuracy, policy compliance, hallucinations and other dimensions."],
  ["Regression Library", "Turn every confirmed failure into a repeatable test after model, prompt or feature changes."],
  ["Release Comparison", "Compare one release to another and detect regressions before customers see them."],
  ["Executive Dashboard", "Track pass rate, high-severity failures, trends, unresolved issues and regression performance."],
  ["Audit Trail", "Preserve evaluations, reviewer actions, evidence and historical results for governance and enterprise review."],
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="AI Reliability · Features"
        title="The platform behind a managed AI QA operation."
        description="These are the capabilities the Genesis Digital AI Reliability platform can grow into as you move from manual QA to automated and human-verified reliability operations."
      />
      <section className="section">
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map(([title, body], i) => (
            <div key={title} className="card p-7">
              <div className="text-sm font-black text-[var(--brand)]">{String(i + 1).padStart(2, "0")}</div>
              <h2 className="mt-5 text-2xl font-black">{title}</h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
