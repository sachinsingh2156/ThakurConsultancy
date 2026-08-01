import Layout from '../components/layout/Layout'
import { useScrollReveal } from '../hooks/useScrollReveal'
import MaterialIcon from '../components/ui/MaterialIcon'

const HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBWPBZprM4HYhKB1QEmaDJfB4YmgqzuM9WYr9fp9tBwkcO2FT88kdCtn4OeOHcOKYVw2bBRb0RT__acbCKlqRsB5_-sNrJFojRgN4skwC6H9JezJifss2KvfYycf34IMKGawVrtAjoCNF-QiZmFEyogmF13FRdAU2dLNM5aQnNqnXVqX4CnLU2Piqg0zxWg_axhlDnKhOLlx66Am7UBgvo3zSdeAZjfGREDvDTXcQ6zda2UwRELkur0'

const CERT_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCJ9sQ_VF4uNoNQHOspHsgXfyzMl8gkD7dEwJhBMubrDkiy5Nay1J3lD8uPeNV8WdUyDKWo37Xpqy1DB-ubfpXPeNHIIju8QCMqN6Lt94eP9uNb7T8oOM39HacRHE439KB8UKCt0PcG-ZtSkHXamRuuGEq5gAluPcTqW8YAfentl5BoxQ8F7-WdejT2v9NLd9RDfFckBr5VcByY833uF9l2fsnAuPNRJGBPhbQwcdqRu9AuXrUV_ra-'

const CASE_STUDY_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD9gxzgBeAg3xtNdS0NH_b74Z38pkclh9sUr3kJjQS36WnRX3dYmFiWoHAQhIC2DvVMtwdUJBAo3MrPA6o9U9_2XE2TIH1uf3gtUkJU_j_Cbh5iQgdQ9a5rUa0SAmV3pJyHyi_kuXr4Udt0eKKWtLW4SOdwjRhwjF_GhLFNzLs1_S7TZlmuxurPfvc_Kfajq0KAy77kzefMe4xBApS2e2suqIRz-3_r8yidThDrvuLP9J3Z524eOMcA'

const certifications = [
  { icon: 'handshake', name: 'Sedex', subtitle: 'Ethical Trade Audit' },
  { icon: 'gavel', name: 'SMETA', subtitle: 'Ethical Audit Methodology' },
  { icon: 'eco', name: 'GOTS', subtitle: 'Global Organic Textile Standard' },
  { icon: 'public', name: 'WRAP', subtitle: 'Worldwide Responsible Production' },
  { icon: 'groups', name: 'BSCI', subtitle: 'Business Social Compliance' },
  { icon: 'shield_lock', name: 'C-TPAT', subtitle: 'Customs-Trade Partnership' },
  { icon: 'check_circle', name: 'ZED', subtitle: 'Zero Defect Zero Effect' },
  { icon: 'settings_suggest', name: 'ISO 9001', subtitle: 'Quality Management' },
  { icon: 'forest', name: 'ISO 14001', subtitle: 'Environmental Management' },
  { icon: 'health_and_safety', name: 'ISO 45001', subtitle: 'Occupational Health & Safety' },
  { icon: 'psychology', name: 'Social Audit', subtitle: 'Ethical Evaluation' },
  { icon: 'architecture', name: 'Technical Audit', subtitle: 'Quality Assessment' },
]

const auditSteps = [
  {
    step: 1,
    title: 'Pre-Audit Assessment',
    description: 'Initial scoping and readiness check to identify preliminary areas for improvement.',
  },
  {
    step: 2,
    title: 'Documentation Review',
    description: 'Rigorous evaluation of internal policies, logs, and procedural adherence.',
  },
  {
    step: 3,
    title: 'On-Site Inspection',
    description: 'Physical verification of facilities and interviews with key personnel.',
  },
  {
    step: 4,
    title: 'Gap Analysis & Reporting',
    description: 'Detailed findings report with actionable recommendations for compliance.',
  },
  {
    step: 5,
    title: 'Certification Issuance',
    description: 'Official awarding of certification following successful resolution of all gaps.',
  },
]

const advantages = [
  {
    icon: 'star_rate',
    title: 'Elevated Brand Reputation',
    description:
      'Showcase your commitment to global ethics and quality to customers and stakeholders worldwide.',
  },
  {
    icon: 'security',
    title: 'Risk Mitigation',
    description: 'Proactively identify and neutralize legal and operational hazards before they escalate.',
  },
  {
    icon: 'language',
    title: 'Global Market Access',
    description:
      'Unlock restricted international markets by meeting stringent import requirements and customs partnerships.',
  },
  {
    icon: 'trending_up',
    title: 'Operational Scalability',
    description: 'Standardized processes allow for seamless expansion into new territories and product lines.',
  },
]

const faqs = [
  {
    question: 'How long does a standard audit process take?',
    answer:
      'Typical audits range from 2 to 6 weeks depending on the complexity of the organization and the specific certification standard being pursued. Pre-assessments can significantly accelerate the official timeline.',
    defaultOpen: true,
  },
  {
    question: 'What is the validity period of these certifications?',
    answer:
      'Most ISO and Social certifications are valid for 3 years, subject to annual surveillance audits. Standards like Sedex or WRAP may require annual renewals to ensure ongoing compliance.',
  },
  {
    question: 'Can you help with corrective action plans?',
    answer:
      'Yes, our "Gap Analysis" phase includes detailed corrective action planning. We provide strategic guidance to ensure all non-conformities are addressed effectively before final certification issuance.',
  },
]

export default function AuditCertificationsPage() {
  useScrollReveal()

  return (
    <Layout activeItem="services" variant="default">
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="relative overflow-hidden bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center py-12 md:py-16 lg:py-24">
              <div className="space-y-6 md:space-y-8">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm uppercase tracking-widest">
                  <MaterialIcon icon="verified" className="text-base" />
                  Accredited Auditing Partner
                </span>
                <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary leading-tight">
                  Global Standards, <span className="gold-gradient-text">Absolute Compliance</span>
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                  We empower organizations to achieve excellence through rigorous audits and world-class certifications.
                  Your partner in building sustainable, ethical, and compliant value chains.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                  <button
                    type="button"
                    className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md font-bold shadow-lg hover:brightness-110 transition-all active:scale-95"
                  >
                    Schedule an Audit
                  </button>
                  <button
                    type="button"
                    className="border-2 border-outline-variant/50 text-primary px-8 py-4 rounded-xl font-label-md font-bold hover:bg-surface-container transition-colors active:scale-95"
                  >
                    View Standards
                  </button>
                </div>
              </div>
              <div className="relative">
                <div
                  className="absolute -inset-4 bg-secondary-fixed-dim/25 blur-3xl rounded-full pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative bg-white rounded-2xl p-3 shadow-[0_8px_40px_rgba(0,45,114,0.12)] border border-outline-variant/10 md:rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img
                    src={HERO_IMAGE}
                    alt="Business consultants reviewing audit documentation in a modern office"
                    className="w-full aspect-[4/5] md:aspect-auto md:h-[480px] object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-12 md:py-16 lg:py-24 bg-surface">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            <header className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container/40 text-secondary font-label-sm uppercase tracking-widest mb-4">
                Audit & Certifications
              </span>
              <h2 className="font-headline-md text-headline-sm md:text-headline-md text-primary mb-4">
                Comprehensive Certification Portfolio
              </h2>
              <p className="text-on-surface-variant font-body-lg leading-relaxed">
                Expertise across international frameworks to ensure your business meets every global mandate with
                precision.
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {certifications.map((cert) => (
                <article
                  key={cert.name}
                  className="group bg-white rounded-2xl p-6 border border-outline-variant/15 border-l-4 border-l-secondary shadow-[0_4px_24px_rgba(0,45,114,0.06)] hover:shadow-[0_8px_32px_rgba(0,45,114,0.12)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary-fixed/70 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:bg-primary-container group-hover:text-white transition-colors duration-300">
                    <MaterialIcon icon={cert.icon} className="text-2xl" />
                  </div>
                  <h3 className="font-headline-sm text-lg text-primary mb-1">{cert.name}</h3>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">{cert.subtitle}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Audit Journey */}
        <section className="py-12 md:py-16 lg:py-24 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <header className="mb-10">
                  <span className="text-secondary font-bold tracking-[0.2em] uppercase text-label-sm">Our Process</span>
                  <h2 className="font-headline-md text-headline-sm md:text-headline-md text-primary mt-2 mb-4">
                    The Audit Journey
                  </h2>
                  <p className="font-body-lg text-on-surface-variant leading-relaxed">
                    A transparent, systematic roadmap guiding your organization from preparation to prestigious
                    certification.
                  </p>
                </header>

                <ol className="relative flex flex-col gap-8 list-none p-0 m-0 pl-1">
                  <div
                    className="absolute left-[1.125rem] top-3 bottom-3 w-px bg-gradient-to-b from-secondary-container via-outline-variant/40 to-secondary-container"
                    aria-hidden="true"
                  />
                  {auditSteps.map((item) => (
                    <li key={item.step} className="relative flex gap-5 items-start">
                      <div className="shrink-0 w-9 h-9 rounded-full bg-secondary-fixed text-primary border-2 border-secondary flex items-center justify-center font-bold text-sm z-10 shadow-md tabular-nums">
                        {item.step}
                      </div>
                      <div className="pt-0.5">
                        <h4 className="font-headline-sm text-primary mb-1">{item.title}</h4>
                        <p className="text-on-surface-variant text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,45,114,0.12)] border border-outline-variant/10">
                  <img
                    src={CERT_IMAGE}
                    alt="Official certification seal on premium compliance document"
                    className="w-full h-full object-cover"
                  />
                </div>
                <aside className="absolute -bottom-4 right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-2xl p-5 sm:p-6 max-w-xs shadow-[0_8px_32px_rgba(0,45,114,0.12)] border border-outline-variant/10">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-50 text-green-700 p-2.5 rounded-full shrink-0">
                      <MaterialIcon icon="verified" className="text-2xl" />
                    </div>
                    <div>
                      <p className="font-bold text-primary">99.8% Success Rate</p>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        In first-attempt certifications for 2023.
                      </p>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Advantages */}
        <section className="py-12 md:py-16 lg:py-24 bg-primary text-white overflow-hidden relative">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
            aria-hidden="true"
          />
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop relative z-10">
            <header className="mb-12 md:mb-16 max-w-xl">
              <span className="text-secondary-fixed font-bold tracking-[0.2em] uppercase text-label-sm">
                Why It Matters
              </span>
              <h2 className="font-headline-md text-headline-sm md:text-headline-md text-white mt-2 mb-4">
                Strategic Advantages
              </h2>
              <p className="text-white/75 font-body-lg leading-relaxed">
                How our certification processes drive tangible business value.
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {advantages.map((item) => (
                <article
                  key={item.title}
                  className="p-8 rounded-2xl bg-white/5 border border-white/15 hover:bg-white/10 transition-colors"
                >
                  <MaterialIcon icon={item.icon} className="text-4xl text-secondary-fixed mb-4" />
                  <h3 className="font-headline-sm text-xl text-white mb-2">{item.title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>

            <article className="relative rounded-3xl overflow-hidden group min-h-[320px]">
              <img
                src={CASE_STUDY_IMAGE}
                alt="Modern industrial manufacturing facility at dusk"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/20 p-8 sm:p-12 flex flex-col justify-end">
                <span className="bg-secondary-fixed text-primary px-4 py-1 rounded-full w-fit mb-4 text-xs font-bold uppercase tracking-widest">
                  Case Study
                </span>
                <h3 className="font-headline-md text-headline-sm md:text-headline-md text-white mb-3 max-w-2xl">
                  Triumph in Global Supply Chain Overhaul
                </h3>
                <p className="max-w-2xl text-white/80 mb-6 leading-relaxed">
                  How Thakur Consultancy steered a Fortune 500 textile giant through complex multi-continent ISO and
                  Social Audits in record time.
                </p>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 font-bold text-secondary-fixed hover:gap-3 transition-all w-fit"
                >
                  Read Success Story
                  <MaterialIcon icon="arrow_forward" />
                </button>
              </div>
            </article>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 lg:py-24 bg-surface">
          <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            <header className="text-center mb-12">
              <span className="text-secondary font-bold tracking-[0.2em] uppercase text-label-sm">Expert Answers</span>
              <h2 className="font-headline-md text-headline-sm md:text-headline-md text-primary mt-2">
                Frequently Asked Questions
              </h2>
              <p className="text-on-surface-variant mt-4">Clear answers for your compliance journey.</p>
            </header>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-white rounded-xl border border-outline-variant/15 shadow-[0_4px_24px_rgba(0,45,114,0.06)] overflow-hidden"
                  open={faq.defaultOpen}
                >
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none">
                    <span className="font-headline-sm text-primary text-lg text-left">{faq.question}</span>
                    <MaterialIcon
                      icon="expand_more"
                      className="shrink-0 transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <div className="px-6 pb-6 text-on-surface-variant font-body-md border-t border-outline-variant/20 pt-4 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 lg:py-24 bg-surface">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            <div className="relative rounded-3xl overflow-hidden bg-primary px-6 py-12 sm:px-12 sm:py-14 md:px-16 md:py-16 lg:px-20 lg:py-20 text-center">
              <MaterialIcon
                icon="workspace_premium"
                className="absolute top-6 right-6 sm:top-8 sm:right-8 text-[120px] sm:text-[160px] text-white/5 pointer-events-none"
                aria-hidden
              />
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6">
                  Ready to Certify Your Success?
                </h2>
                <p className="text-white/80 font-body-lg mb-10 leading-relaxed">
                  Join hundreds of global organizations that trust Thakur Consultancy for their institutional integrity
                  and compliance milestones.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    type="button"
                    className="bg-secondary-fixed text-primary px-10 py-4 rounded-xl font-label-md font-bold hover:brightness-105 transition-all shadow-xl active:scale-95"
                  >
                    Request a Consultation
                  </button>
                  <button
                    type="button"
                    className="border border-white/30 text-white px-10 py-4 rounded-xl font-label-md font-bold hover:bg-white/10 transition-all active:scale-95"
                  >
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
