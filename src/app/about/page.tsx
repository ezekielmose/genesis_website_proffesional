import { Eye, Target } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Genesis Digital"
        title="Helping hospitality brands tell stories that inspire travel."
        description="Genesis Digital is a hospitality-focused creative and technology company specializing in cinematic hotel videos, website development, digital marketing, AI-powered media validation and AI reliability testing."
      />
      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="h2">Built around hospitality.</h2>
            <p className="lead mt-6">
              We help hotels, resorts and travel businesses showcase their experiences through compelling digital content
              while helping modern travel companies improve the quality of AI-driven customer experiences.
            </p>
          </div>
          <div className="grid gap-5">
            <div className="card p-7">
              <Target className="text-[var(--brand)]" />
              <h3 className="mt-5 text-2xl font-black">Our Mission</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">
                Empower hospitality businesses with world-class digital solutions that create unforgettable guest experiences.
              </p>
            </div>
            <div className="card p-7">
              <Eye className="text-[var(--brand)]" />
              <h3 className="mt-5 text-2xl font-black">Our Vision</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">
                To become Africa&apos;s leading digital transformation partner for hotels and tourism brands.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
