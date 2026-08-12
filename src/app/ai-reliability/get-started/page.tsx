import { LeadForm } from "@/components/LeadForm";
import { PageHero } from "@/components/PageHero";

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="AI Reliability · Get Started"
        title="Let us test your AI before your customers do."
        description="Share basic details about your company and AI agent. Your request can be stored in the Genesis database so your team can arrange the free sample test."
      />
      <section className="section">
        <div className="container max-w-4xl">
          <LeadForm leadType="AI_RELIABILITY" aiMode />
        </div>
      </section>
    </>
  );
}
