import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const plans = [
  {
    name: "Free Sample",
    price: "Free",
    kicker: "Start here",
    description: "A small set of real scenarios against your agent so you can see the type of failures Genesis can uncover.",
    features: ["Targeted scenario set", "Real agent responses reviewed", "Example failures surfaced", "No commitment"],
  },
  {
    name: "Travel AI Reliability Audit",
    price: "$4,900",
    kicker: "One-time",
    description: "A structured stress test of your live agent against 1,000+ real-world travel scenarios.",
    features: ["1,000+ scenarios", "Severity-ranked failure report", "AI Reliability Score", "Prioritized fixes", "Regression test library"],
  },
  {
    name: "Continuous AI Reliability Operations",
    price: "$7,500–$15,000+",
    kicker: "Per month",
    description: "Managed QA embedded in your release cycle, tiered by evaluation volume and coverage.",
    features: ["10,000+ evaluations/month", "Automated first-pass evaluation", "Human verification", "Regression testing", "Edge-case generation", "Weekly reporting", "Executive dashboard"],
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="AI Reliability · Pricing"
        title="Start free. Scale when we prove it."
        description="Begin with a no-commitment sample, move to a structured audit, then embed Genesis Digital into your release cycle when continuous reliability coverage makes sense."
      />
      <section className="section">
        <div className="container grid gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <div key={plan.name} className="card p-7">
              <div className="eyebrow">{plan.kicker}</div>
              <h2 className="mt-5 text-2xl font-black">{plan.name}</h2>
              <div className="mt-6 text-4xl font-black">{plan.price}</div>
              <p className="mt-4 leading-7 text-[var(--muted)]">{plan.description}</p>
              <div className="mt-7 grid gap-3">
                {plan.features.map((x) => (
                  <div key={x} className="flex gap-3 text-sm">
                    <Check size={18} className="shrink-0 text-[var(--accent)]" />
                    <span>{x}</span>
                  </div>
                ))}
              </div>
              <Link href="/ai-reliability/get-started" className="btn-primary mt-8 w-full">
                {i === 0 ? "Request free sample" : "Talk to Genesis"}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
