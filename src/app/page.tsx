import Link from "next/link";

import {
  ArrowRight,
  Bot,
  Camera,
  CheckCircle2,
  Clock3,
  Globe2,
  Laptop2,
  Megaphone,
  Play,
  ShieldCheck,
  Sparkles,
  Video,
  WandSparkles,
  Workflow,
} from "lucide-react";

import {
  LiveMetrics,
  StatsTicker,
} from "@/components/LiveMetrics";

import {
  Reveal,
} from "@/components/Reveal";

import {
  HospitalityVideoShowcase,
} from "@/components/HospitalityVideoShowcase";


// ======================================================
// SOLUTIONS
// ======================================================

const services = [
  {
    icon: Video,
    number: "01",
    title:
      "Hotel Video Production",
    description:
      "Premium cinematic content for hotels, resorts, restaurants and destinations.",
    href:
      "/solutions#video-production",
  },

  {
    icon: Laptop2,
    number: "02",
    title:
      "Website Development",
    description:
      "Modern hospitality websites designed around brand experience and direct-booking journeys.",
    href:
      "/solutions#web-development",
  },

  {
    icon: Megaphone,
    number: "03",
    title:
      "Digital Marketing",
    description:
      "Creative campaigns and content strategies built to increase visibility and engagement.",
    href:
      "/solutions#digital-marketing",
  },

  {
    icon: Bot,
    number: "04",
    title:
      "AI Video Validation",
    description:
      "AI-assisted quality workflows that help improve consistency across hospitality media.",
    href:
      "/solutions#ai-video-validation",
  },

  {
    icon: Camera,
    number: "05",
    title:
      "Drone Photography",
    description:
      "Professional aerial coverage that showcases destinations, properties and surroundings.",
    href:
      "/solutions#drone-photography",
  },

  {
    icon: ShieldCheck,
    number: "06",
    title:
      "AI Reliability",
    description:
      "External QA for travel and hospitality AI systems before failures reach customers.",
    href:
      "/ai-reliability",
  },
];


export default function Home() {
  return (
    <>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="premium-hero">

        <div className="hero-noise" />

        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />


        <div className="premium-hero-inner">

          <div className="premium-hero-grid">

            {/* LEFT */}

            <div className="hero-copy">

              <div className="hero-eyebrow">

                <span className="live-dot" />

                Hospitality Creative & AI Technology

              </div>


              <h1 className="premium-hero-title">

                Create{" "}

                <span className="hero-gradient-text">
                  Stunning Videos
                </span>

                {" "}That Inspire Travel & Increase Bookings.

              </h1>


              <p className="premium-hero-description">

                Genesis Digital combines cinematic hospitality
                content, modern digital experiences and
                AI-powered technology to help travel brands
                create, validate and scale with confidence.

              </p>


              <div className="hero-actions">

                <Link
                  href="/contact"
                  className="hero-primary-button"
                >
                  Start a Project

                  <ArrowRight
                    size={18}
                  />
                </Link>


                <Link
                  href="/solutions"
                  className="hero-outline-button"
                >
                  Explore Solutions
                </Link>

              </div>


              <div className="hero-trust-line">

                <div className="hero-trust-item">
                  <CheckCircle2
                    size={15}
                  />
                  Hospitality-focused
                </div>

                <div className="hero-trust-item">
                  <CheckCircle2
                    size={15}
                  />
                  Global delivery
                </div>

                <div className="hero-trust-item">
                  <CheckCircle2
                    size={15}
                  />
                  AI-powered workflows
                </div>

              </div>

            </div>


            {/* RIGHT */}

            <div className="hero-dashboard-column">

              <LiveMetrics />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATISTICS
      ====================================================== */}

      <section className="stats-section">

        <StatsTicker />

      </section>


      {/* =====================================================
          POSITIONING
      ====================================================== */}

      <section className="section section-tight">

        <div className="container">

          <Reveal>

            <div className="center-intro">

              <div className="eyebrow">
                Built for hospitality
              </div>


              <h2 className="section-heading center-heading">

                One partner across creative,
                digital and AI.

              </h2>


              <p className="section-description center-description">

                From premium hotel media to AI reliability
                testing, Genesis Digital brings creative
                production, technology and quality assurance
                into one hospitality-focused ecosystem.

              </p>

            </div>

          </Reveal>


          <div className="capability-strip">

            {[
              "Hotels",
              "Resorts",
              "Restaurants",
              "Tourism Brands",
              "Travel Platforms",
              "AI Products",
            ].map(
              item => (
                <div
                  key={item}
                  className="capability-pill"
                >
                  {item}
                </div>
              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          SOLUTIONS
      ====================================================== */}

      <section className="section solutions-section">

        <div className="container">

          <div className="section-header-grid">

            <Reveal>

              <div>

                <div className="eyebrow">
                  Our Solutions
                </div>


                <h2 className="section-heading">

                  Digital solutions built for hospitality.

                </h2>

              </div>

            </Reveal>


            <Reveal delay={100}>

              <p className="section-description">

                Create stronger digital experiences with
                specialized services designed around modern
                hospitality, travel marketing and AI quality.

              </p>

            </Reveal>

          </div>


          <div className="solutions-grid">

            {services.map(
              (
                service,
                index
              ) => {

                const Icon =
                  service.icon;

                return (

                  <Reveal
                    key={
                      service.title
                    }
                    delay={
                      index * 60
                    }
                  >

                    <Link
                      href={
                        service.href
                      }
                      className="premium-solution-card"
                    >

                      <div className="solution-card-top">

                        <div className="solution-icon">

                          <Icon
                            size={24}
                          />

                        </div>


                        <div className="solution-number">
                          {
                            service.number
                          }
                        </div>

                      </div>


                      <h3 className="solution-title">
                        {
                          service.title
                        }
                      </h3>


                      <p className="solution-description">
                        {
                          service.description
                        }
                      </p>


                      <div className="solution-link">

                        Explore solution

                        <ArrowRight
                          size={16}
                        />

                      </div>

                    </Link>

                  </Reveal>

                );
              }
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW GENESIS WORKS
      ====================================================== */}

      <section className="section process-section">

        <div className="container">

          <Reveal>

            <div className="center-intro">

              <div className="eyebrow">
                How Genesis Works
              </div>


              <h2 className="section-heading center-heading">

                From idea to measurable digital experience.

              </h2>

            </div>

          </Reveal>


          <div className="process-grid">

            {[
              {
                number:
                  "01",
                title:
                  "Discover",
                body:
                  "We understand your brand, property, audience, requirements and commercial objectives.",
              },

              {
                number:
                  "02",
                title:
                  "Create",
                body:
                  "Our team produces and structures premium hospitality content and digital experiences.",
              },

              {
                number:
                  "03",
                title:
                  "Validate",
                body:
                  "Media and AI experiences are reviewed for quality, consistency and reliability.",
              },

              {
                number:
                  "04",
                title:
                  "Scale",
                body:
                  "Approved experiences are prepared for use across markets, platforms and campaigns.",
              },
            ].map(
              (
                step,
                index
              ) => (

                <Reveal
                  key={
                    step.number
                  }
                  delay={
                    index * 80
                  }
                >

                  <div className="process-card">

                    <div className="process-number">
                      {
                        step.number
                      }
                    </div>


                    <div className="process-line" />


                    <h3 className="process-title">
                      {
                        step.title
                      }
                    </h3>


                    <p className="process-description">
                      {
                        step.body
                      }
                    </p>

                  </div>

                </Reveal>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
    HOSPITALITY STORYTELLING
===================================================== */}

<section className="section showcase-section">

  <div className="container">

    <Reveal>

      <div className="center-intro">

        <div className="eyebrow">

          Hospitality Storytelling

        </div>


        <h2 className="section-heading center-heading">

          Stories that make travellers
          want to be there.

        </h2>


        <p className="section-description center-description">

          Strong hospitality media should do more than
          document a property. It should communicate
          atmosphere, experience and the reason a guest
          should choose you.

        </p>

      </div>

    </Reveal>


    {/* FEATURES */}

    <Reveal delay={80}>

      <div className="hospitality-feature-row">

        {[
          "4K cinematic content",
          "Hotel & destination reels",
          "Drone coverage",
          "Luxury storytelling",
          "Cross-platform delivery",
        ].map(
          item => (

            <div
              key={item}
              className="hospitality-feature-item"
            >

              <CheckCircle2
                size={16}
              />

              {item}

            </div>

          )
        )}

      </div>

    </Reveal>


    {/* MOVING VIDEOS */}

    <Reveal delay={140}>

      <div className="mt-12">

        <HospitalityVideoShowcase />

      </div>

    </Reveal>


    <div className="mt-10 text-center">

      <Link
        href="/solutions#video-production"
        className="text-link"
      >

        Explore Video Production

        <ArrowRight
          size={16}
        />

      </Link>

    </div>

  </div>

</section>


      {/* =====================================================
          BENTO FEATURES
      ====================================================== */}

      <section className="section">

        <div className="container">

          <Reveal>

            <div className="section-header-grid">

              <div>

                <div className="eyebrow">
                  Why Genesis Digital
                </div>


                <h2 className="section-heading">

                  Premium features built for hospitality.

                </h2>

              </div>


              <p className="section-description">

                A modern hospitality partner should combine
                creative execution, reliable workflows and
                technology that supports scale.

              </p>

            </div>

          </Reveal>


          <div className="bento-grid">

            <Reveal
              className="bento-large"
            >

              <div className="bento-card bento-primary">

                <WandSparkles
                  size={28}
                />


                <div className="bento-content">

                  <div className="bento-label">
                    Creative Intelligence
                  </div>

                  <h3>
                    Premium hospitality content at scale.
                  </h3>

                  <p>
                    Combine human creative direction with
                    efficient technology-enabled production
                    workflows.
                  </p>

                </div>

              </div>

            </Reveal>


            <Reveal delay={70}>

              <div className="bento-card">

                <Globe2
                  size={26}
                />

                <div className="bento-content">

                  <div className="bento-label">
                    Global Reach
                  </div>

                  <h3>
                    Built for multiple markets.
                  </h3>

                  <p>
                    Support hospitality brands across
                    destinations, regions and digital
                    channels.
                  </p>

                </div>

              </div>

            </Reveal>


            <Reveal delay={100}>

              <div className="bento-card">

                <Clock3
                  size={26}
                />

                <div className="bento-content">

                  <div className="bento-label">
                    Efficient Delivery
                  </div>

                  <h3>
                    Reliable production workflows.
                  </h3>

                  <p>
                    Structured processes keep work moving
                    without compromising quality.
                  </p>

                </div>

              </div>

            </Reveal>


            <Reveal delay={130}>

              <div className="bento-card">

                <Workflow
                  size={26}
                />

                <div className="bento-content">

                  <div className="bento-label">
                    Connected Workflow
                  </div>

                  <h3>
                    Creative and technology together.
                  </h3>

                  <p>
                    Manage creation, validation and
                    delivery through one integrated approach.
                  </p>

                </div>

              </div>

            </Reveal>


            <Reveal
              delay={160}
              className="bento-wide"
            >

              <div className="bento-card bento-dark">

                <ShieldCheck
                  size={28}
                />

                <div className="bento-content">

                  <div className="bento-label">
                    AI Reliability
                  </div>

                  <h3>
                    Test AI before customers depend on it.
                  </h3>

                  <p>
                    Evaluate factual accuracy, hallucinations,
                    policies, edge cases and regression risk.
                  </p>

                </div>

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          AI RELIABILITY FEATURE
      ====================================================== */}

      <section className="section ai-product-section">

        <div className="container">

          <div className="ai-product-grid">

            <Reveal>

              <div>

                <div className="ai-product-eyebrow">

                  <ShieldCheck
                    size={16}
                  />

                  Genesis AI Reliability

                </div>


                <h2 className="ai-product-heading">

                  Trust AI before your customers depend on it.

                </h2>


                <p className="ai-product-description">

                  Genesis Digital helps travel and hospitality
                  companies evaluate customer-facing AI agents
                  across factual accuracy, policy compliance,
                  hallucinations, conversation quality and
                  regression risk.

                </p>


                <div className="ai-feature-list">

                  {[
                    "Scenario-based testing",
                    "Automated first-pass evaluation",
                    "Human verification",
                    "Severity-ranked failures",
                    "Regression testing",
                  ].map(
                    item => (

                      <div
                        key={item}
                        className="ai-feature-item"
                      >

                        <CheckCircle2
                          size={17}
                        />

                        {item}

                      </div>

                    )
                  )}

                </div>


                <Link
                  href="/ai-reliability"
                  className="ai-product-button"
                >

                  Explore AI Reliability

                  <ArrowRight
                    size={17}
                  />

                </Link>

              </div>

            </Reveal>


            <Reveal delay={120}>

              <div className="ai-score-card">

                <div className="ai-score-card-header">

                  <div>

                    <div className="metric-small-label">
                      AI Reliability Score
                    </div>

                    <div className="ai-score-number">
                      98.4
                      <span>%</span>
                    </div>

                  </div>


                  <div className="reliability-status">

                    <span className="live-dot" />

                    Healthy

                  </div>

                </div>


                <div className="ai-score-progress">

                  <div
                    className="ai-score-progress-fill"
                    style={{
                      width:
                        "98.4%",
                    }}
                  />

                </div>


                <div className="ai-score-stats">

                  <div>
                    <span>
                      Evaluations
                    </span>

                    <strong>
                      12,840
                    </strong>
                  </div>


                  <div>
                    <span>
                      Passed
                    </span>

                    <strong>
                      12,412
                    </strong>
                  </div>


                  <div>
                    <span>
                      Review Queue
                    </span>

                    <strong>
                      318
                    </strong>
                  </div>


                  <div>
                    <span>
                      Critical
                    </span>

                    <strong>
                      4
                    </strong>
                  </div>

                </div>


                <div className="ai-score-footer">

                  <span className="live-dot" />

                  Reliability monitoring active

                </div>

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          ENGAGEMENT MODEL
      ====================================================== */}

      <section className="section">

        <div className="container">

          <Reveal>

            <div className="center-intro">

              <div className="eyebrow">
                Work With Genesis
              </div>


              <h2 className="section-heading center-heading">

                Start with the engagement that fits your goals.

              </h2>

            </div>

          </Reveal>


          <div className="engagement-grid">

            <Reveal>

              <div className="engagement-card">

                <div className="engagement-tag">
                  Creative & Digital
                </div>

                <h3>
                  Custom Project
                </h3>

                <p>
                  Video production, websites, digital
                  marketing, drone coverage and hospitality
                  content workflows.
                </p>

                <div className="engagement-price">
                  Custom
                </div>

                <Link
                  href="/contact"
                  className="engagement-button"
                >
                  Request a Quote
                </Link>

              </div>

            </Reveal>


            <Reveal delay={80}>

              <div className="engagement-card engagement-featured">

                <div className="engagement-tag">
                  AI Reliability
                </div>

                <h3>
                  Start With a Sample
                </h3>

                <p>
                  Let Genesis test a focused set of real-world
                  scenarios against your customer-facing AI.
                </p>

                <div className="engagement-price">
                  Free Sample
                </div>

                <Link
                  href="/ai-reliability/get-started"
                  className="engagement-button engagement-button-primary"
                >
                  Request Free Sample
                </Link>

              </div>

            </Reveal>


            <Reveal delay={160}>

              <div className="engagement-card">

                <div className="engagement-tag">
                  Enterprise
                </div>

                <h3>
                  Continuous Operations
                </h3>

                <p>
                  Ongoing AI QA, regression testing,
                  reporting and managed reliability
                  operations.
                </p>

                <div className="engagement-price">
                  Let&apos;s Talk
                </div>

                <Link
                  href="/contact"
                  className="engagement-button"
                >
                  Contact Genesis
                </Link>

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="final-cta-section">

        <div className="container">

          <Reveal>

            <div className="final-cta">

              <div className="final-cta-glow" />


              <div className="final-cta-content">

                <div className="final-cta-label">
                  Ready to build something better?
                </div>


                <h2>

                  Build a stronger hospitality brand.

                </h2>


                <p>

                  Whether you need compelling video,
                  scalable digital experiences or more
                  reliable AI systems, Genesis Digital
                  can help you move from idea to production.

                </p>


                <div className="final-cta-actions">

                  <Link
                    href="/contact"
                    className="final-cta-primary"
                  >
                    Start a Project

                    <ArrowRight
                      size={17}
                    />
                  </Link>


                  <Link
                    href="/solutions"
                    className="final-cta-secondary"
                  >
                    Explore Solutions
                  </Link>

                </div>

              </div>

            </div>

          </Reveal>

        </div>

      </section>

    </>
  );
}