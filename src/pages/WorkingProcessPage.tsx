import Layout from '../components/layout/Layout'
import { useScrollReveal } from '../hooks/useScrollReveal'
import MaterialIcon from '../components/ui/MaterialIcon'

const OFFICE_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAgsAlDEG8IErq_m5t6OMoMtziLjbu4G8TdG21LsS7HMh6QmSAxyS_w7vmSHwYmdbr1lbUx0cU4ZaskC_DvsWEhO17fL7syfLBBnQcr9ScYX47IHx79ME1p9ZqClYRFZN5CaKH6MD-ubWVhFlv4h974WtCxd6iNkrP10WGts935ddMMZn-72K1nLD62zNX1SlRx5KBAp8jcm3PMtNUNIzBaS55tLsI8PRxi5amTpzrybo7hqi2yYcfY'

const processSteps = [
  {
    step: 1,
    icon: 'chat',
    title: 'Requirement',
    description: 'In-depth consultation to understand your specific organizational needs.',
  },
  {
    step: 2,
    icon: 'analytics',
    title: 'Analysis',
    description: 'Thorough gap analysis and regulatory landscape assessment.',
  },
  {
    step: 3,
    icon: 'description',
    title: 'Documentation',
    description: 'Precise drafting of all necessary compliance and statutory documents.',
  },
  {
    step: 4,
    icon: 'settings',
    title: 'Implementation',
    description: 'Seamless integration of HR, tax, or compliance frameworks into your operations.',
  },
  {
    step: 5,
    icon: 'fact_check',
    title: 'Compliance',
    description: 'Timely and accurate submission to relevant regulatory authorities.',
  },
  {
    step: 6,
    icon: 'verified',
    title: 'Audit Support',
    description: 'Expert assistance during external audits and certification cycles.',
  },
  {
    step: 7,
    icon: 'monitor_heart',
    title: 'Monitoring',
    description: 'Ongoing vigilance to ensure long-term regulatory adherence.',
  },
]

const whyItWorks = [
  {
    icon: 'bolt',
    title: 'Strategic Speed',
    description:
      'Parallel processing of documentation and analysis ensures rapid turnaround without compromising on meticulous detail.',
  },
  {
    icon: 'precision_manufacturing',
    title: 'Zero-Error Accuracy',
    description:
      'Our three-tier review process eliminates filing errors, saving your organization from potential regulatory penalties.',
  },
  {
    icon: 'security',
    title: 'Institutional Reliability',
    description:
      'Backed by decades of Delhi-NCR expertise, our methodology is trusted by industry leaders for critical compliance.',
  },
]

const faqs = [
  {
    question: 'What is the typical engagement timeline?',
    answer:
      'Most standard compliance setups take 2-4 weeks, while complex HR transformations or forensic audits may span 3-6 months depending on organization size.',
    defaultOpen: true,
  },
  {
    question: 'How do we handle confidential data?',
    answer:
      'We use bank-grade encryption for all document transfers and maintain strict NDA protocols with all our consultants and partner agencies.',
  },
  {
    question: 'Who will be our primary point of contact?',
    answer:
      'Every client is assigned a Senior Case Manager who orchestrates the internal specialist teams (Tax, HR, Legal) and provides weekly status reports.',
  },
  {
    question: 'Can the process be customized?',
    answer:
      'Absolutely. While our core steps remain constant to ensure quality, the intensity and focus of each stage are tailored to your specific industry requirements.',
  },
]

function ProcessStepCard({
  step,
  title,
  description,
  className = '',
}: {
  step: number
  title: string
  description: string
  className?: string
}) {
  return (
    <article
      className={`bg-white rounded-2xl border border-outline-variant/15 shadow-[0_4px_24px_rgba(0,45,114,0.06)] hover:shadow-[0_8px_32px_rgba(0,45,114,0.1)] transition-all duration-300 ${className}`}
    >
      <span className="text-secondary font-label-sm font-bold uppercase tracking-wider">Step {step}</span>
      <h4 className="font-headline-sm text-primary mt-1 mb-2">{title}</h4>
      <p className="text-on-surface-variant text-sm lg:text-base leading-relaxed">{description}</p>
    </article>
  )
}

export default function WorkingProcessPage() {
  useScrollReveal()

  return (
    <Layout activeItem="process" variant="default">
      <main>
        {/* Hero */}
        <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 overflow-hidden bg-surface-container-low">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary-container/25 via-transparent to-transparent pointer-events-none"
            aria-hidden="true"
          />
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop text-center relative">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container/50 text-secondary font-label-sm uppercase tracking-widest mb-6">
              Execution Methodology
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 leading-tight">
              Our Working Process
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Institutional precision and strategic execution. We bridge the gap between regulatory requirements and
              operational excellence through a refined, multi-stage delivery framework.
            </p>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-12 md:py-16 lg:py-24 bg-surface">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            <header className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
              <span className="text-secondary font-bold tracking-[0.2em] uppercase text-label-sm">7-Stage Framework</span>
              <h2 className="font-headline-md text-headline-sm md:text-headline-md text-primary mt-2 mb-4">
                From Requirement to Ongoing Monitoring
              </h2>
              <p className="text-on-surface-variant font-body-md leading-relaxed">
                Every engagement follows the same rigorous path — tailored in scope, consistent in quality.
              </p>
            </header>

            {/* Unified vertical timeline — clean continuous flow for all screen sizes */}
            <ol className="relative flex flex-col gap-5 lg:gap-8 list-none p-0 m-0 max-w-3xl mx-auto">
              <div
                className="absolute left-[1.125rem] lg:left-8 top-6 lg:top-8 bottom-6 lg:bottom-8 w-0.5 rounded-full"
                style={{
                  background: 'linear-gradient(180deg, #fed488 0%, #c4c6d2 35%, #c4c6d2 65%, #fed488 100%)',
                }}
                aria-hidden="true"
              />
              {processSteps.map((item) => (
                <li key={item.step} className="relative flex gap-5 lg:gap-8 items-start group">
                  <div className="relative shrink-0 z-10">
                    <div className="w-9 h-9 lg:w-16 lg:h-16 rounded-full bg-white border-2 lg:border-[3px] border-secondary shadow-md lg:shadow-[0_4px_20px_rgba(119,90,25,0.18)] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <MaterialIcon
                        icon={item.icon}
                        className="text-base lg:text-2xl text-secondary group-hover:text-primary transition-colors"
                      />
                    </div>
                    <span className="absolute -top-1 -right-1.5 lg:-top-1.5 lg:-right-1.5 w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-secondary-fixed text-primary text-[10px] lg:text-xs font-bold flex items-center justify-center border-2 border-white tabular-nums">
                      {item.step}
                    </span>
                  </div>
                  <ProcessStepCard
                    step={item.step}
                    title={item.title}
                    description={item.description}
                    className="flex-1 min-w-0 p-4 lg:p-6"
                  />
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Why It Works */}
        <section className="py-12 md:py-16 lg:py-24 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <header className="mb-8 md:mb-10">
                  <span className="text-secondary font-bold tracking-[0.2em] uppercase text-label-sm">Our Advantage</span>
                  <h2 className="font-headline-md text-headline-sm md:text-headline-md text-primary mt-2">
                    Why Our Process Works
                  </h2>
                </header>
                <div className="space-y-5">
                  {whyItWorks.map((item) => (
                    <article
                      key={item.title}
                      className="flex gap-5 p-6 bg-white rounded-2xl border border-outline-variant/15 border-l-4 border-l-secondary shadow-[0_4px_24px_rgba(0,45,114,0.06)] hover:shadow-[0_8px_32px_rgba(0,45,114,0.1)] hover:translate-x-1 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary-fixed/70 flex items-center justify-center text-primary shrink-0">
                        <MaterialIcon icon={item.icon} className="text-2xl" />
                      </div>
                      <div>
                        <h3 className="font-headline-sm text-primary mb-2">{item.title}</h3>
                        <p className="font-body-md text-on-surface-variant leading-relaxed">{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              <div className="relative h-[280px] sm:h-[400px] lg:h-[560px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,45,114,0.12)] border border-outline-variant/10">
                <img
                  src={OFFICE_IMAGE}
                  alt="Professional consultants collaborating in a modern New Delhi office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 lg:py-24 bg-surface">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            <header className="text-center mb-12 md:mb-16">
              <span className="text-secondary font-bold tracking-[0.2em] uppercase text-label-sm">Common Questions</span>
              <h2 className="font-headline-md text-headline-sm md:text-headline-md text-primary mt-2">Process FAQs</h2>
              <p className="text-on-surface-variant font-body-md mt-4">
                Common inquiries regarding our engagement and project cycles.
              </p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-white rounded-xl border border-outline-variant/15 shadow-[0_4px_24px_rgba(0,45,114,0.06)] overflow-hidden open:shadow-[0_8px_32px_rgba(0,45,114,0.1)] transition-shadow"
                  open={faq.defaultOpen}
                >
                  <summary className="flex justify-between items-center gap-4 p-6 font-headline-sm text-primary cursor-pointer list-none">
                    <span className="text-left">{faq.question}</span>
                    <MaterialIcon icon="expand_more" className="shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="px-6 pb-6 text-on-surface-variant font-body-md leading-relaxed border-t border-outline-variant/20 pt-4">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 lg:py-24 bg-primary relative overflow-hidden">
          <MaterialIcon
            icon="trending_up"
            className="absolute right-0 bottom-0 text-[200px] sm:text-[300px] text-white/5 pointer-events-none translate-x-1/4 translate-y-1/4"
            aria-hidden
          />
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop text-center relative z-10">
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6">
              Ready to Begin?
            </h2>
            <p className="font-body-lg text-body-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join the ranks of Delhi&apos;s most compliant and efficient organizations. Let our experts guide you
              through the complexities of modern business governance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                className="px-8 py-4 bg-secondary-fixed text-primary font-label-md font-bold rounded-xl hover:brightness-105 transition-all shadow-lg flex items-center justify-center gap-2 active:scale-95"
              >
                Schedule Free Consultation
                <MaterialIcon icon="arrow_forward" />
              </button>
              <button
                type="button"
                className="px-8 py-4 border border-white/30 text-white font-label-md font-bold rounded-xl hover:bg-white/10 transition-colors active:scale-95"
              >
                Download Process PDF
              </button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
