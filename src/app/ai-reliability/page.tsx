import Link from "next/link";
import { BadgeCheck, BrainCircuit, Gauge, RefreshCcw, ShieldCheck, Users } from "lucide-react";

const dimensions = [
  "Factual accuracy",
  "Hallucination & unsupported claims",
  "Instruction following",
  "Tool selection & execution",
  "Multi-turn conversation quality",
  "Policy & business-rule compliance",
  "Escalation behavior",
  "Recommendation quality",
  "Edge-case & adversarial testing",
  "Regression after releases",
];

export default function AIReliabilityPage() {
  return (
    <>
      <section className="ai-hero section">
        <div className="container">
          <div className="eyebrow !bg-white/10 !text-[#73e5bd]">
            <ShieldCheck size={14} />
            Genesis Digital AI Reliability
          </div>

          <div className="mt-7 grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <h1 className="display">
                We break your AI
                <span className="block text-[#73e5bd]">before your customers do.</span>
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65">
                External QA for travel and hospitality AI agents — realistic scenarios,
                automated evaluation and human verification before failures reach production.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/ai-reliability/get-started" className="btn-primary">Run a free sample</Link>
                <Link href="/ai-reliability/solutions" className="btn-secondary !border-white/15 !bg-white/5 !text-white">
                  Explore solutions
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[.05] p-6">
              <div className="text-xs font-black uppercase tracking-[.15em] text-white/40">Example evaluation</div>
              <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="text-sm font-bold text-white/45">Customer</div>
                <p className="mt-2 font-bold">Can I bring my dog to your Diani Beach resort?</p>

                <div className="mt-5 text-sm font-bold text-white/45">Agent response</div>
                <p className="mt-2 text-white/65">
                  “Yes! Pets of all sizes are welcome at every property, free of charge.”
                </p>

                <div className="mt-5 rounded-xl border border-red-400/20 bg-red-400/10 p-4">
                  <div className="font-black text-red-300">FAIL · HIGH · POLICY HALLUCINATION</div>
                  <p className="mt-2 text-sm leading-6 text-white/55">
                    Official policy: no pets except certified service animals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">The problem</div>
          <h2 className="h2 mt-6 max-w-4xl">In travel, AI mistakes have invoices attached.</h2>
          <p className="lead mt-6 max-w-3xl">
            Wrong cancellation policies, invented amenities, incorrect room details,
            bad date reasoning and unsupported recommendations can become refunds,
            complaints, compensation and lost conversion.
          </p>
        </div>
      </section>

      <section className="section bg-[var(--soft)]">
        <div className="container">
          <div className="eyebrow">What we test</div>
          <h2 className="h2 mt-6">Your external QA department for AI agents.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {dimensions.map((x) => (
              <div key={x} className="card p-5">
                <BadgeCheck className="text-[var(--accent)]" size={20} />
                <div className="mt-6 font-black leading-6">{x}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">How it works</div>
          <h2 className="h2 mt-6">Humans and AI, in one reliability loop.</h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [ShieldCheck, "01 · Connect", "Share agent access, documentation and business rules."],
              [BrainCircuit, "02 · Build scenarios", "Automation creates baseline tests; researchers add domain and adversarial edge cases."],
              [Gauge, "03 · Evaluate", "Run first-pass evaluations at volume across accuracy, policy, tool use and conversation quality."],
              [Users, "04 · Verify", "Human evaluators verify and classify failures; QA leads calibrate reviewers."],
              [BadgeCheck, "05 · Report", "Rank failures by severity and root cause with recommended fixes."],
              [RefreshCcw, "06 · Prevent", "Turn every confirmed failure into a permanent regression test."],
            ].map(([Icon, title, body]) => {
              const I = Icon as typeof ShieldCheck;
              return (
                <div key={String(title)} className="card p-7">
                  <I className="text-[var(--accent)]" />
                  <div className="mt-7 text-xl font-black">{String(title)}</div>
                  <p className="mt-3 leading-7 text-[var(--muted)]">{String(body)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
