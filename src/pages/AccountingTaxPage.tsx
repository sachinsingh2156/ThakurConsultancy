import Layout from '../components/layout/Layout'
import { useScrollReveal } from '../hooks/useScrollReveal'
import MaterialIcon from '../components/ui/MaterialIcon'

const HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBF-TgGuI7-gxn4m88JiDQICnDuWQxpHcSi-5UO_ZxIY9TwRgfM0AOY2QHhHXOVdoRTEyHki6MbjP7DE7s5Ow1UWu-q5I8DzSc50sHfjI-pcMvP0ONZ1vQMzRaWLZDRgpecn4isRcJE7TWKkhEbuog3jqOAkVBANzbgweZCfVvYMiKIvQXt1J0CiN0dsPyFVKQn77EOPwcZmZZGh4vni_ko_l50_jTzkswTfIJfFP_4FiudGH13pS78'

const services = [
  {
    icon: 'account_balance_wallet',
    filled: true,
    title: 'Accounting & Bookkeeping',
    description: 'Meticulous ledger maintenance and transaction tracking for ultimate financial clarity.',
  },
  {
    icon: 'how_to_reg',
    title: 'GST Registration',
    description: 'Expert facilitation of Goods and Services Tax enrollment for businesses of all scales.',
  },
  {
    icon: 'receipt_long',
    title: 'GST Return Filing',
    description: 'Timely and accurate submission of monthly and quarterly GST returns to ensure zero penalties.',
  },
  {
    icon: 'payments',
    title: 'Income Tax Return',
    description: 'Strategic ITR planning and filing for individuals, firms, and corporate entities.',
  },
  {
    icon: 'description',
    title: 'TDS Return',
    description: 'Accurate tax deduction processing and quarterly return filing for employers and vendors.',
  },
  {
    icon: 'business',
    title: 'Company Incorporation',
    description: 'End-to-end formation services for Pvt Ltd, LLP, and OPC structures with MCA compliance.',
  },
  {
    icon: 'gavel',
    title: 'ROC Filing',
    description: 'Annual compliance and secretarial filings with the Registrar of Companies.',
  },
  {
    icon: 'analytics',
    title: 'Financial Statements',
    description: 'Preparation of P&L accounts, Cash Flow statements, and audit-ready financial reports.',
  },
]

const benefits = [
  {
    icon: 'verified_user',
    title: 'Accuracy & Precision',
    description:
      'Zero-error processing using advanced accounting ERPs and multi-tier review protocols to ensure data integrity.',
  },
  {
    icon: 'policy',
    title: 'Regulatory Compliance',
    description:
      'Real-time monitoring of changing Indian tax laws to keep your business ahead of regulatory requirements.',
  },
  {
    icon: 'insights',
    title: 'Strategic Tax Planning',
    description:
      'Beyond filing, we provide structural advice to legally optimize tax liability and improve bottom-line performance.',
  },
]

const workflowSteps = [
  {
    step: 1,
    icon: 'folder_open',
    title: 'Data Collection',
    description: 'Secure gathering of all financial documents and invoices.',
  },
  {
    step: 2,
    icon: 'analytics',
    title: 'Analysis & Processing',
    description: 'Expert review and classification of every transaction.',
  },
  {
    step: 3,
    icon: 'verified',
    title: 'Review & Filing',
    description: 'Final audit by chartered experts before regulatory filing.',
  },
  {
    step: 4,
    icon: 'assessment',
    title: 'Reporting',
    description: 'Actionable insights and comprehensive financial summaries.',
  },
]

const faqs = [
  {
    question: 'What are the mandatory GST filing deadlines?',
    answer:
      'Deadlines typically fall on the 11th, 13th, and 20th of every month depending on the type of return (GSTR-1, GSTR-3B) and the business turnover. We ensure all our clients file at least 48 hours prior to avoid late fees.',
    defaultOpen: true,
  },
  {
    question: 'How often should we prepare financial statements?',
    answer:
      'While annual statements are required for compliance, we recommend quarterly or monthly MIS reports for effective business decision-making and cash flow management.',
  },
  {
    question: 'Do you handle income tax notices and representation?',
    answer:
      'Yes, our Corporate Advisory team specializes in drafting responses to scrutiny notices and representing clients before tax authorities.',
  },
]

export default function AccountingTaxPage() {
  useScrollReveal()

  return (
    <Layout activeItem="services" variant="default">
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={HERO_IMAGE}
              alt="Executive desk with financial charts and professional accounting tools"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop w-full py-16 md:py-24">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm uppercase tracking-widest mb-6">
                Premium Tax Services
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6">
                Financial Excellence & <span className="text-secondary-fixed">Strategic Tax Solutions</span>
              </h1>
              <p className="font-body-lg text-body-lg text-white/85 mb-10 leading-relaxed">
                Empowering New Delhi&apos;s businesses with institutional-grade accounting, rigorous compliance audits,
                and tax strategies designed for high-stakes enterprise growth.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <button
                  type="button"
                  className="bg-secondary-fixed text-primary px-8 py-4 rounded-xl font-label-md font-bold hover:brightness-105 transition-all shadow-lg active:scale-95"
                >
                  Request a Quote
                </button>
                <button
                  type="button"
                  className="px-8 py-4 rounded-xl border border-white/40 text-white hover:bg-white/10 transition-all font-label-md font-bold backdrop-blur-sm active:scale-95"
                >
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-12 md:py-16 lg:py-24 bg-surface">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            <header className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container/40 text-secondary font-label-sm uppercase tracking-widest mb-4">
                Accounting & Tax
              </span>
              <h2 className="font-headline-md text-headline-sm md:text-headline-md text-primary mb-4">
                Institutional Service Suite
              </h2>
              <p className="text-on-surface-variant font-body-lg leading-relaxed">
                Comprehensive accounting and taxation architecture tailored for modern corporate entities and startups.
              </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group bg-white rounded-2xl p-6 flex flex-col h-full border border-outline-variant/15 shadow-[0_4px_24px_rgba(0,45,114,0.06)] hover:shadow-[0_8px_32px_rgba(0,45,114,0.12)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary-container group-hover:text-white transition-colors duration-300">
                    <MaterialIcon icon={service.icon} className="text-2xl" filled={service.filled} />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3 leading-tight">{service.title}</h3>
                  <p className="text-on-surface-variant text-sm mb-6 leading-relaxed flex-grow">{service.description}</p>
                  <button
                    type="button"
                    className="text-secondary font-label-md inline-flex items-center gap-2 hover:text-primary transition-colors mt-auto"
                  >
                    Learn More
                    <MaterialIcon icon="arrow_forward" className="text-sm group-hover:translate-x-1 transition-transform" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
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
            <header className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
              <h2 className="font-headline-md text-headline-sm md:text-headline-md text-white mb-4">Why Choose Us</h2>
              <p className="text-white/75 font-body-lg leading-relaxed">
                Institutional rigor, regulatory foresight, and strategic insight — built into every engagement.
              </p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="p-8 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <MaterialIcon icon={benefit.icon} className="text-4xl text-secondary-fixed mb-6" />
                  <h3 className="font-headline-sm text-headline-sm text-white mb-4">{benefit.title}</h3>
                  <p className="text-white/75 font-body-md leading-relaxed">{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="py-12 md:py-16 lg:py-24 bg-surface-container-low overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            <header className="text-center mb-12 md:mb-16">
              <span className="text-secondary font-bold tracking-[0.2em] uppercase text-label-sm">Our Process</span>
              <h2 className="font-headline-md text-headline-sm md:text-headline-md text-primary mt-2">
                The Professional Workflow
              </h2>
              <p className="text-on-surface-variant font-body-md mt-4 max-w-xl mx-auto leading-relaxed">
                A structured, transparent process from document intake to final reporting.
              </p>
            </header>

            {/* Desktop */}
            <div className="hidden md:block relative">
              <div
                className="absolute top-8 left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-0.5 rounded-full"
                style={{
                  background:
                    'linear-gradient(90deg, transparent 0%, #fed488 12%, #c4c6d2 50%, #fed488 88%, transparent 100%)',
                }}
                aria-hidden="true"
              />
              <ol className="grid grid-cols-4 gap-6 lg:gap-8 list-none p-0 m-0">
                {workflowSteps.map((item) => (
                  <li key={item.step} className="flex flex-col items-center text-center group">
                    <div className="relative z-10 mb-8">
                      <div className="w-16 h-16 rounded-full bg-white border-[3px] border-secondary shadow-[0_4px_20px_rgba(119,90,25,0.18)] flex items-center justify-center group-hover:scale-110 group-hover:border-secondary-container transition-all duration-300">
                        <span className="font-bold text-xl text-secondary group-hover:text-primary transition-colors tabular-nums">
                          {item.step}
                        </span>
                      </div>
                      <div
                        className="absolute inset-0 rounded-full bg-secondary-container/25 scale-[1.6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md"
                        aria-hidden="true"
                      />
                    </div>
                    <article className="bg-white rounded-2xl p-6 lg:p-7 w-full h-full border border-outline-variant/10 shadow-[0_4px_24px_rgba(0,45,114,0.06)] group-hover:shadow-[0_12px_40px_rgba(0,45,114,0.1)] group-hover:-translate-y-1 transition-all duration-300">
                      <div className="w-11 h-11 rounded-xl bg-primary-fixed/70 flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary-container group-hover:text-white transition-colors duration-300">
                        <MaterialIcon icon={item.icon} className="text-xl" />
                      </div>
                      <h4 className="font-headline-sm text-primary mb-2">{item.title}</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{item.description}</p>
                    </article>
                  </li>
                ))}
              </ol>
            </div>

            {/* Mobile */}
            <ol className="md:hidden relative flex flex-col gap-5 list-none p-0 m-0 pl-1">
              <div
                className="absolute left-[1.125rem] top-5 bottom-5 w-px bg-gradient-to-b from-secondary-container via-outline-variant/50 to-secondary-container"
                aria-hidden="true"
              />
              {workflowSteps.map((item) => (
                <li key={item.step} className="relative flex gap-5 items-start">
                  <div className="shrink-0 w-9 h-9 rounded-full bg-white border-2 border-secondary flex items-center justify-center font-bold text-secondary text-sm z-10 shadow-md tabular-nums">
                    {item.step}
                  </div>
                  <article className="flex-1 bg-white rounded-2xl p-5 border border-outline-variant/10 shadow-[0_4px_20px_rgba(0,45,114,0.06)]">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-9 h-9 rounded-lg bg-primary-fixed/70 flex items-center justify-center text-primary shrink-0">
                        <MaterialIcon icon={item.icon} className="text-lg" />
                      </div>
                      <h4 className="font-headline-sm text-primary pt-1">{item.title}</h4>
                    </div>
                    <p className="text-on-surface-variant text-sm leading-relaxed pl-12">{item.description}</p>
                  </article>
                </li>
              ))}
            </ol>
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
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '40px 40px',
                }}
                aria-hidden="true"
              />
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6">
                  Ready to Streamline Your Finances?
                </h2>
                <p className="text-white/80 font-body-lg mb-10 leading-relaxed">
                  Join 500+ corporate clients who trust Thakur Consultancy for their institutional accounting and tax
                  compliance needs.
                </p>
                <button
                  type="button"
                  className="bg-secondary-fixed text-primary px-10 py-4 rounded-xl font-label-md font-bold hover:brightness-105 transition-all shadow-xl active:scale-95"
                >
                  Request a Free Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
