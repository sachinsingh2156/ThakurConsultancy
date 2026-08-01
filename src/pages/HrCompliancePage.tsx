import Layout from '../components/layout/Layout'
import { useScrollReveal } from '../hooks/useScrollReveal'
import MaterialIcon from '../components/ui/MaterialIcon'

const services = [
  {
    id: 'epf',
    icon: 'account_balance',
    iconWrap: 'bg-blue-50 group-hover:bg-primary-container',
    iconClass: 'text-primary group-hover:text-white',
    title: 'EPF Compliance',
    description:
      'Streamlining employer contributions and filings to ensure total regulatory alignment with the Provident Fund Organization.',
    features: ['Monthly ECR generation', 'Digital signature handling', 'Audit-ready documentation'],
  },
  {
    id: 'esic',
    icon: 'health_and_safety',
    iconWrap: 'bg-red-50 group-hover:bg-red-600',
    iconClass: 'text-red-600 group-hover:text-white',
    title: 'ESIC Management',
    description:
      'Comprehensive health insurance management for your workforce, ensuring seamless employee access to medical benefits.',
    features: ['Online Pehchan Card issuance', 'Benefit claim processing', 'Statutory monthly returns'],
  },
  {
    id: 'payroll',
    icon: 'payments',
    iconWrap: 'bg-green-50 group-hover:bg-green-600',
    iconClass: 'text-green-600 group-hover:text-white',
    title: 'Payroll Management',
    description:
      'Automated, error-free salary disbursement coupled with precise tax withholding and professional payslip generation.',
    features: ['End-to-end salary processing', 'TDS & Income Tax compliance', 'Structured reimbursement workflow'],
  },
  {
    id: 'labour',
    icon: 'gavel',
    iconWrap: 'bg-orange-50 group-hover:bg-orange-600',
    iconClass: 'text-orange-600 group-hover:text-white',
    title: 'Labour Law Compliance',
    description:
      'Navigating the complex landscape of Indian labor laws, from Minimum Wages to Maternity Benefits Acts.',
    features: ['Statutory register maintenance', 'Abstract & Notice display', 'Annual & Half-yearly returns'],
  },
  {
    id: 'hr-doc',
    icon: 'description',
    iconWrap: 'bg-purple-50 group-hover:bg-purple-600',
    iconClass: 'text-purple-600 group-hover:text-white',
    title: 'HR Documentation',
    description:
      'Expertly drafted employment contracts, policies, and employee handbooks tailored to your corporate culture.',
    features: ['Appointment & Offer letters', 'POSH Policy implementation', 'Full & Final settlement docs'],
  },
  {
    id: 'contractor',
    icon: 'group_work',
    iconWrap: 'bg-teal-50 group-hover:bg-teal-600',
    iconClass: 'text-teal-600 group-hover:text-white',
    title: 'Contractor Compliance',
    description:
      'Mitigating principal employer liability through rigorous auditing and tracking of third-party workforce compliance.',
    features: ['Monthly contractor audits', 'CLRA license facilitation', 'Risk assessment reporting'],
  },
  {
    id: 'factory',
    icon: 'factory',
    iconWrap: 'bg-indigo-50 group-hover:bg-indigo-600',
    iconClass: 'text-indigo-600 group-hover:text-white',
    title: 'Factory Act',
    description:
      'Safety, health, and welfare compliance for manufacturing units to ensure industrial peace and operational continuity.',
    features: ['License renewals & amendments', 'On-site safety inspections', 'Incident record maintenance'],
  },
  {
    id: 'registrations',
    icon: 'app_registration',
    iconWrap: 'bg-yellow-50 group-hover:bg-secondary',
    iconClass: 'text-secondary group-hover:text-white',
    title: 'Registration & Licensing',
    description:
      'Expedited establishment setup with Shop & Establishment, Trade licenses, and Professional Tax registrations.',
    features: ['Multi-state shop registration', 'MSME/Udyam certification', 'Professional Tax enrollment'],
  },
]

const faqs = [
  {
    question: 'How often do labor law regulations change in India?',
    answer:
      'Regulations can shift quarterly through central or state notifications. Our compliance calendar service provides real-time updates and impact assessments to ensure your operations are never behind.',
  },
  {
    question: 'What are the penalties for non-compliance with EPF?',
    answer:
      "Non-compliance can lead to heavy interest penalties (up to 12% p.a.) and damages (up to 25%). In extreme cases, it may lead to legal prosecution of the establishment's directors.",
  },
  {
    question: 'Can you manage compliance for a multi-state organization?',
    answer:
      'Yes, our infrastructure is designed to handle pan-India compliance, mapping state-specific rules and local holidays to your central HR management system.',
  },
  {
    question: 'What is the onboarding time for your payroll services?',
    answer:
      'Typically, full integration takes 2-4 weeks depending on headcount and the complexity of existing data. We ensure a parallel run for the first month to guarantee 100% accuracy.',
  },
]

export default function HrCompliancePage() {
  useScrollReveal()

  return (
    <Layout activeItem="services" variant="services">
      <>
        <main className="pt-24 md:pt-32 pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
          <header className="mb-12 md:mb-16 lg:mb-20 max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container/40 text-secondary font-label-sm uppercase tracking-widest mb-6">
              HR & Compliance
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">
              Enterprise Compliance <span className="gold-gradient-text">& HR Systems</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Strategic advisory and operational excellence for high-stakes business environments. We manage the
              complexity so you can lead with confidence.
            </p>
          </header>

          <section aria-label="HR and compliance services">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {services.map((service) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="group bg-white rounded-2xl p-6 sm:p-8 flex flex-col h-full border border-outline-variant/15 shadow-[0_4px_24px_rgba(0,45,114,0.06)] hover:shadow-[0_8px_32px_rgba(0,45,114,0.12)] hover:border-outline-variant/25 transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${service.iconWrap}`}
                  >
                    <MaterialIcon icon={service.icon} className={`text-3xl transition-colors duration-300 ${service.iconClass}`} />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{service.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 font-label-sm text-on-surface">
                        <MaterialIcon icon="check_circle" className="text-secondary text-lg shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="flex items-center justify-between text-primary font-bold font-label-md hover:text-secondary transition-colors mt-auto"
                  >
                    <span>Learn More</span>
                    <MaterialIcon icon="arrow_forward" className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-24 md:mt-32">
            <div className="text-center mb-12 md:mb-16">
              <span className="text-secondary font-bold tracking-[0.2em] uppercase text-label-sm">Informed Decisions</span>
              <h2 className="font-headline-md text-headline-sm md:text-headline-md text-primary mt-2">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-white rounded-xl overflow-hidden border border-outline-variant/15 shadow-[0_4px_24px_rgba(0,45,114,0.06)]"
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                    onClick={(e) => {
                      const btn = e.currentTarget
                      btn.nextElementSibling?.classList.toggle('hidden')
                      btn.querySelector('.arrow')?.classList.toggle('rotate-180')
                    }}
                  >
                    <span className="font-headline-sm text-primary text-lg">{faq.question}</span>
                    <MaterialIcon icon="expand_more" className="arrow transition-transform shrink-0" />
                  </button>
                  <div className="px-6 pb-6 text-on-surface-variant hidden">{faq.answer}</div>
                </div>
              ))}
            </div>
          </section>
        </main>

        <section className="w-full py-12 md:py-16 lg:py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px',
              }}
            />
          </div>
          <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop text-center">
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary mb-6">
              Ready to fortify your <span className="text-secondary-fixed">HR framework?</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary/80 max-w-2xl mx-auto mb-12">
              Consult with our experts to audit your current compliance status and build a scalable HR infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                type="button"
                className="bg-secondary-fixed text-on-secondary-fixed px-10 py-4 rounded-full font-headline-sm text-lg hover:bg-secondary-fixed-dim transition-all shadow-xl active:scale-95"
              >
                Schedule a Consultation
              </button>
              <button
                type="button"
                className="border border-on-primary/30 text-on-primary px-10 py-4 rounded-full font-headline-sm text-lg hover:bg-white/10 transition-all active:scale-95"
              >
                View Pricing
              </button>
            </div>
          </div>
        </section>

        <a
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform z-[100]"
          href="https://wa.me/910000000000"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
        >
          <svg fill="currentColor" height="32" viewBox="0 0 16 16" width="32" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93a7.898 7.898 0 0 0-2.327-5.594l.005-.005zm-5.607 11.41h-.001c-1.247 0-2.473-.336-3.541-.97l-.254-.151-2.633.691.704-2.564-.165-.263a6.592 6.592 0 0 1-1.012-3.48c.002-3.633 2.964-6.595 6.599-6.595 1.758 0 3.41.684 4.653 1.926 1.242 1.242 1.925 2.894 1.925 4.653 0 3.633-2.961 6.594-6.595 6.594z" />
          </svg>
        </a>
      </>
    </Layout>
  )
}
