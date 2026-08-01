import Layout from '../components/layout/Layout'
import { useEffect } from 'react'

export default function WorkingProcessPage() {
  useEffect(() => {
    document.querySelectorAll('.step-node').forEach((node) => {
      node.addEventListener('mouseenter', () => node.classList.add('step-active'))
    })
  }, [])

  return (
    <Layout activeItem="process" variant="default" ctaLabel="Consult Experts">
      <>
        <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary-container/20 via-transparent to-transparent"></div>
        <div className="max-w-container-max mx-auto px-margin-desktop text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-label-sm uppercase tracking-widest mb-6">Execution Methodology</span>
        <h1 className="font-display-lg text-display-lg md:text-[64px] text-primary mb-6 leading-tight">Our Working Process</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                        Institutional Precision and Strategic Execution. We bridge the gap between regulatory requirements and operational excellence through a refined, multi-stage delivery framework.
                    </p>
        </div>
        </section>
        
        <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-desktop overflow-x-auto pb-12 scrollbar-hide">
        <div className="relative min-w-[1200px] flex justify-between items-start pt-20">
        
        <div className="absolute top-[124px] left-0 w-full h-[2px] timeline-line opacity-30"></div>
        
        <div className="group step-node relative flex flex-col items-center w-[160px] cursor-pointer">
        <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 z-10 mb-8 border-2 border-primary/20">
        <span className="material-symbols-outlined" data-icon="chat">chat</span>
        </div>
        <div className="text-center group-hover:-translate-y-2 transition-transform duration-300">
        <h4 className="font-headline-sm text-label-md text-primary mb-2">1. Requirement</h4>
        <p className="font-body-md text-label-sm text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-2">In-depth consultation to understand your specific organizational needs.</p>
        </div>
        </div>
        
        <div className="group step-node relative flex flex-col items-center w-[160px] cursor-pointer">
        <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 z-10 mb-8 border-2 border-primary/20">
        <span className="material-symbols-outlined" data-icon="analytics">analytics</span>
        </div>
        <div className="text-center group-hover:-translate-y-2 transition-transform duration-300">
        <h4 className="font-headline-sm text-label-md text-primary mb-2">2. Analysis</h4>
        <p className="font-body-md text-label-sm text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-2">Thorough gap analysis and regulatory landscape assessment.</p>
        </div>
        </div>
        
        <div className="group step-node relative flex flex-col items-center w-[160px] cursor-pointer">
        <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 z-10 mb-8 border-2 border-primary/20">
        <span className="material-symbols-outlined" data-icon="description">description</span>
        </div>
        <div className="text-center group-hover:-translate-y-2 transition-transform duration-300">
        <h4 className="font-headline-sm text-label-md text-primary mb-2">3. Documentation</h4>
        <p className="font-body-md text-label-sm text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-2">Precise drafting of all necessary compliance and statutory documents.</p>
        </div>
        </div>
        
        <div className="group step-node relative flex flex-col items-center w-[160px] cursor-pointer">
        <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 z-10 mb-8 border-2 border-primary/20">
        <span className="material-symbols-outlined" data-icon="settings">settings</span>
        </div>
        <div className="text-center group-hover:-translate-y-2 transition-transform duration-300">
        <h4 className="font-headline-sm text-label-md text-primary mb-2">4. Implementation</h4>
        <p className="font-body-md text-label-sm text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-2">Seamless integration of HR, tax, or compliance frameworks into your operations.</p>
        </div>
        </div>
        
        <div className="group step-node relative flex flex-col items-center w-[160px] cursor-pointer">
        <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 z-10 mb-8 border-2 border-primary/20">
        <span className="material-symbols-outlined" data-icon="fact_check">fact_check</span>
        </div>
        <div className="text-center group-hover:-translate-y-2 transition-transform duration-300">
        <h4 className="font-headline-sm text-label-md text-primary mb-2">5. Compliance</h4>
        <p className="font-body-md text-label-sm text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-2">Timely and accurate submission to relevant regulatory authorities.</p>
        </div>
        </div>
        
        <div className="group step-node relative flex flex-col items-center w-[160px] cursor-pointer">
        <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 z-10 mb-8 border-2 border-primary/20">
        <span className="material-symbols-outlined" data-icon="verified">verified</span>
        </div>
        <div className="text-center group-hover:-translate-y-2 transition-transform duration-300">
        <h4 className="font-headline-sm text-label-md text-primary mb-2">6. Audit Support</h4>
        <p className="font-body-md text-label-sm text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-2">Expert assistance during external audits and certification cycles.</p>
        </div>
        </div>
        
        <div className="group step-node relative flex flex-col items-center w-[160px] cursor-pointer">
        <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 z-10 mb-8 border-2 border-primary/20">
        <span className="material-symbols-outlined" data-icon="monitor_heart">monitor_heart</span>
        </div>
        <div className="text-center group-hover:-translate-y-2 transition-transform duration-300">
        <h4 className="font-headline-sm text-label-md text-primary mb-2">7. Monitoring</h4>
        <p className="font-body-md text-label-sm text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-2">Ongoing vigilance to ensure long-term regulatory adherence.</p>
        </div>
        </div>
        </div>
        </div>
        </section>
        
        <section className="py-24 bg-surface">
        <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
        <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-primary/10 z-10"></div>
        <div className="w-full h-full bg-cover bg-center" data-alt="A sophisticated modern office interior in New Delhi with high-end glass architecture, featuring a diverse team of professional consultants collaborating in a bright, light-mode environment with elegant blue and gold accents reflecting corporate luxury." style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuAgsAlDEG8IErq_m5t6OMoMtziLjbu4G8TdG21LsS7HMh6QmSAxyS_w7vmSHwYmdbr1lbUx0cU4ZaskC_DvsWEhO17fL7syfLBBnQcr9ScYX47IHx79ME1p9ZqClYRFZN5CaKH6MD-ubWVhFlv4h974WtCxd6iNkrP10WGts935ddMMZn-72K1nLD62zNX1SlRx5KBAp8jcm3PMtNUNIzBaS55tLsI8PRxi5amTpzrybo7hqi2yYcfY\')' }}></div>
        </div>
        </div>
        </div>
        </section>
        
        <section className="py-24 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-desktop">
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
        
        <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary -z-10"></div>
        <div className="absolute right-0 bottom-0 opacity-10 -z-10">
        <span className="material-symbols-outlined text-[400px]" style={{ fontVariationSettings: '\'opsz\' 48' }}>trending_up</span>
        </div>
        <div className="max-w-container-max mx-auto px-margin-desktop text-center">
        <h2 className="font-display-lg text-display-lg text-white mb-8">Ready to Begin?</h2>
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
