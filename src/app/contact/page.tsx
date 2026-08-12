import { LeadForm } from "@/components/LeadForm";
import { PageHero } from "@/components/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s build something that helps your hospitality brand grow."
        description="Tell Genesis Digital what you need — video production, website development, digital marketing, AI validation or another hospitality-focused digital service."
      />
      <section className="section">
        <div className="container max-w-4xl">
          <LeadForm leadType="GENERAL_PROJECT" />
        </div>
      </section>
    </>
  );
}
