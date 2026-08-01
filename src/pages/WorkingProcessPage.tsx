import Layout from '../components/layout/Layout'
import MaterialIcon from '../components/ui/MaterialIcon'
import { useEffect } from 'react'

const processSteps = [
  { icon: 'chat', title: '1. Requirement', desc: 'In-depth consultation to understand your specific organizational needs.' },
  { icon: 'analytics', title: '2. Analysis', desc: 'Thorough gap analysis and regulatory landscape assessment.' },
  { icon: 'description', title: '3. Documentation', desc: 'Precise drafting of all necessary compliance and statutory documents.' },
  { icon: 'settings', title: '4. Implementation', desc: 'Seamless integration of HR, tax, or compliance frameworks into your operations.' },
  { icon: 'fact_check', title: '5. Compliance', desc: 'Timely and accurate submission to relevant regulatory authorities.' },
  { icon: 'verified', title: '6. Audit Support', desc: 'Expert assistance during external audits and certification cycles.' },
  { icon: 'monitor_heart', title: '7. Monitoring', desc: 'Ongoing vigilance to ensure long-term regulatory adherence.' },
]

export default function WorkingProcessPage() {
  useEffect(() => {
    document.querySelectorAll('.step-node').forEach((node) => {
      node.addEventListener('mouseenter', () => node.classList.add('step-active'))
    })
  }, [])

  return (
    <Layout activeItem="process" variant="default" ctaLabel="Consult Experts">
      <>
        <section className="relative pt-28 md:pt-36 lg:pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary-container/20 via-transparent to-transparent"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-label-sm uppercase tracking-widest mb-6">Execution Methodology</span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg lg:text-[64px] text-primary mb-6 leading-tight">Our Working Process</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                        Institutional Precision and Strategic Execution. We bridge the gap between regulatory requirements and operational excellence through a refined, multi-stage delivery framework.
                    </p>
        </div>
        </section>
        
        <section className="py-12 md:py-16 lg:py-24 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        {/* Mobile & tablet: vertical timeline */}
        <div className="lg:hidden process-timeline-mobile">
        {processSteps.map((step) => (
        <div key={step.title} className="process-step-mobile">
        <div className="w-12 h-12 shrink-0 rounded-full glass-card flex items-center justify-center text-primary border-2 border-primary/20 z-10">
        <MaterialIcon icon={step.icon} />
        </div>
        <div className="flex-1 glass-card p-4 rounded-xl">
        <h4 className="font-headline-sm text-label-md text-primary mb-2">{step.title}</h4>
        <p className="font-body-md text-label-sm text-on-surface-variant">{step.desc}</p>
        </div>
        </div>
        ))}
        </div>
        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block overflow-x-auto pb-12 scrollbar-hide">
        <div className="relative min-w-[1200px] flex justify-between items-start pt-20">
        <div className="absolute top-[124px] left-0 w-full h-[2px] timeline-line opacity-30"></div>
        {processSteps.map((step) => (
        <div key={step.title} className="group step-node relative flex flex-col items-center w-[160px] cursor-pointer">
        <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 z-10 mb-8 border-2 border-primary/20">
        <MaterialIcon icon={step.icon} />
        </div>
        <div className="text-center group-hover:-translate-y-2 transition-transform duration-300">
        <h4 className="font-headline-sm text-label-md text-primary mb-2">{step.title}</h4>
        <p className="font-body-md text-label-sm text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-2">{step.desc}</p>
        </div>
        </div>
        ))}
        </div>
        </div>
        </div>
        </section>
        
        <section className="py-12 md:py-16 lg:py-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        <div>
        <h2 className="font-display-lg text-headline-md text-primary mb-8">Why Our Process Works</h2>
        <div className="space-y-6">
        <div className="flex gap-6 p-6 glass-card rounded-xl hover:translate-x-2 transition-transform duration-300 border-l-4 border-secondary">
        <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary shrink-0">
        <span className="material-symbols-outlined">bolt</span>
        </div>
        <div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Strategic Speed</h3>
        <p className="font-body-md text-on-surface-variant">Parallel processing of documentation and analysis ensures rapid turnaround without compromising on meticulous detail.</p>
        </div>
        </div>
        <div className="flex gap-6 p-6 glass-card rounded-xl hover:translate-x-2 transition-transform duration-300 border-l-4 border-secondary">
        <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary shrink-0">
        <span className="material-symbols-outlined">precision_manufacturing</span>
        </div>
        <div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Zero-Error Accuracy</h3>
        <p className="font-body-md text-on-surface-variant">Our three-tier review process eliminates filing errors, saving your organization from potential regulatory penalties.</p>
        </div>
        </div>
        <div className="flex gap-6 p-6 glass-card rounded-xl hover:translate-x-2 transition-transform duration-300 border-l-4 border-secondary">
        <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary shrink-0">
        <span className="material-symbols-outlined">security</span>
        </div>
        <div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Institutional Reliability</h3>
        <p className="font-body-md text-on-surface-variant">Backed by decades of Delhi-NCR expertise, our methodology is trusted by industry leaders for critical compliance.</p>
        </div>
        </div>
        </div>
        </div>
        <div className="relative h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-primary/10 z-10"></div>
        <div className="w-full h-full bg-cover bg-center" data-alt="A sophisticated modern office interior in New Delhi with high-end glass architecture, featuring a diverse team of professional consultants collaborating in a bright, light-mode environment with elegant blue and gold accents reflecting corporate luxury." style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuAgsAlDEG8IErq_m5t6OMoMtziLjbu4G8TdG21LsS7HMh6QmSAxyS_w7vmSHwYmdbr1lbUx0cU4ZaskC_DvsWEhO17fL7syfLBBnQcr9ScYX47IHx79ME1p9ZqClYRFZN5CaKH6MD-ubWVhFlv4h974WtCxd6iNkrP10WGts935ddMMZn-72K1nLD62zNX1SlRx5KBAp8jcm3PMtNUNIzBaS55tLsI8PRxi5amTpzrybo7hqi2yYcfY\')' }}></div>
        </div>
        </div>
        </div>
        </section>
        
        <section className="py-12 md:py-16 lg:py-24 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <div className="text-center mb-16">
        <h2 className="font-display-lg text-headline-md text-primary mb-4">Process FAQs</h2>
        <p className="font-body-md text-on-surface-variant">Common inquiries regarding our engagement and project cycles.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <div className="space-y-4">
        <details className="group bg-white p-6 rounded-xl border border-outline-variant/30 open:shadow-lg transition-all duration-300">
        <summary className="flex justify-between items-center font-headline-sm text-label-md text-primary cursor-pointer list-none">
                                    What is the typical engagement timeline?
                                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
        </summary>
        <p className="mt-4 font-body-md text-on-surface-variant leading-relaxed">
                                    Most standard compliance setups take 2-4 weeks, while complex HR transformations or forensic audits may span 3-6 months depending on organization size.
                                </p>
        </details>
        <details className="group bg-white p-6 rounded-xl border border-outline-variant/30 open:shadow-lg transition-all duration-300">
        <summary className="flex justify-between items-center font-headline-sm text-label-md text-primary cursor-pointer list-none">
                                    How do we handle confidential data?
                                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
        </summary>
        <p className="mt-4 font-body-md text-on-surface-variant leading-relaxed">
                                    We use bank-grade encryption for all document transfers and maintain strict NDA protocols with all our consultants and partner agencies.
                                </p>
        </details>
        </div>
        <div className="space-y-4">
        <details className="group bg-white p-6 rounded-xl border border-outline-variant/30 open:shadow-lg transition-all duration-300">
        <summary className="flex justify-between items-center font-headline-sm text-label-md text-primary cursor-pointer list-none">
                                    Who will be our primary point of contact?
                                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
        </summary>
        <p className="mt-4 font-body-md text-on-surface-variant leading-relaxed">
                                    Every client is assigned a Senior Case Manager who orchestrates the internal specialist teams (Tax, HR, Legal) and provides weekly status reports.
                                </p>
        </details>
        <details className="group bg-white p-6 rounded-xl border border-outline-variant/30 open:shadow-lg transition-all duration-300">
        <summary className="flex justify-between items-center font-headline-sm text-label-md text-primary cursor-pointer list-none">
                                    Can the process be customized?
                                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
        </summary>
        <p className="mt-4 font-body-md text-on-surface-variant leading-relaxed">
                                    Absolutely. While our core steps remain constant to ensure quality, the intensity and focus of each stage are tailored to your specific industry requirements.
                                </p>
        </details>
        </div>
        </div>
        </div>
        </section>
        
        <section className="py-12 md:py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary -z-10"></div>
        <div className="absolute right-0 bottom-0 opacity-10 -z-10">
        <span className="material-symbols-outlined text-[400px]" style={{ fontVariationSettings: '\'opsz\' 48' }}>trending_up</span>
        </div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop text-center">
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-8">Ready to Begin?</h2>
        <p className="font-body-lg text-body-lg text-primary-fixed mb-12 max-w-2xl mx-auto">
                        Join the ranks of Delhi's most compliant and efficient organizations. Let our experts guide you through the complexities of modern business governance.
                    </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <button className="px-8 py-4 bg-secondary-fixed text-on-secondary-fixed font-label-md rounded-lg hover:bg-secondary-container transition-colors flex items-center justify-center gap-2">
                            Schedule Free Consultation
                            <span className="material-symbols-outlined">arrow_forward</span>
        </button>
        <button className="px-8 py-4 border border-white/30 text-white font-label-md rounded-lg hover:bg-white/10 transition-colors">
                            Download Process PDF
                        </button>
        </div>
        </div>
        </section>
      </>
    </Layout>
  )
}
