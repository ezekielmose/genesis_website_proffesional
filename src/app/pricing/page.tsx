import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Every Genesis Digital project is scoped around your goals."
        description="Creative and digital-service pricing depends on production scope, location, deliverables and campaign requirements. AI Reliability has its own dedicated pricing model."
      />
      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-2">
          <div className="card p-8">
            <div className="eyebrow">Creative & digital</div>
            <h2 className="mt-6 text-3xl font-black">Custom project pricing</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              Request a tailored quotation for video production, websites, digital marketing, drone photography or AI video validation.
            </p>
            <Link href="/contact" className="btn-primary mt-7">Request a quote</Link>
          </div>
          <div className="card p-8">
            <div className="eyebrow">AI Reliability</div>
            <h2 className="mt-6 text-3xl font-black">Free sample → Audit → Continuous QA</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              Start with a free sample, then a $4,900 audit and continuous operations from $7,500/month.
            </p>
            <Link href="/ai-reliability/pricing" className="btn-primary mt-7">View AI Reliability pricing</Link>
          </div>
        </div>
      </section>
    </>
  );
}
