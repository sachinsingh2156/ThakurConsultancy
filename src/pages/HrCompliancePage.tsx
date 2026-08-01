import Layout from '../components/layout/Layout'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function HrCompliancePage() {
  useScrollReveal()

  return (
    <Layout activeItem="services" variant="services" ctaLabel="Get Started">
      <>
        <main className="pt-24 md:pt-32 pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        
        <div className="mb-16">
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">Enterprise Compliance <span className="gold-gradient-text">& HR Systems</span></h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">Strategic advisory and operational excellence for high-stakes business environments. We manage the complexity so you can lead with confidence.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-gutter">
        
        <aside className="w-full lg:w-72 flex-shrink-0 order-2 lg:order-1">
        <div className="bg-surface/60 backdrop-blur-lg rounded-xl lg:sticky lg:top-24 border border-white/30 shadow-[0_8px_32px_rgba(0,45,114,0.05)] p-3 md:p-4">
        <div className="mb-3 lg:mb-4 pb-3 lg:pb-4 border-b border-outline-variant/20">
        <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>dashboard</span>
        </div>
        <div>
        <h3 className="font-label-md text-label-md text-primary">Service Menu</h3>
        <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">HR & Compliance</p>
        </div>
        </div>
        </div>
        
        <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide lg:space-y-2">
        <a className="shrink-0 lg:shrink flex items-center gap-2 lg:gap-3 px-3 py-2.5 rounded-lg text-primary bg-secondary-container/30 border-l-4 border-secondary font-semibold font-label-md transition-all select-none whitespace-nowrap" href="#epf">
        <span className="material-symbols-outlined">account_balance</span> EPF Compliance
                            </a>
        <a className="shrink-0 lg:shrink flex items-center gap-2 lg:gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low lg:hover:translate-x-1 transition-all select-none font-label-md whitespace-nowrap" href="#esic">
        <span className="material-symbols-outlined">health_and_safety</span> ESIC Management
                            </a>
        <a className="shrink-0 lg:shrink flex items-center gap-2 lg:gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low lg:hover:translate-x-1 transition-all select-none font-label-md whitespace-nowrap" href="#payroll">
        <span className="material-symbols-outlined">payments</span> Payroll Services
                            </a>
        <a className="shrink-0 lg:shrink flex items-center gap-2 lg:gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low lg:hover:translate-x-1 transition-all select-none font-label-md whitespace-nowrap" href="#labour">
        <span className="material-symbols-outlined">gavel</span> Labour Law
                            </a>
        <a className="shrink-0 lg:shrink flex items-center gap-2 lg:gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low lg:hover:translate-x-1 transition-all select-none font-label-md whitespace-nowrap" href="#hr-doc">
        <span className="material-symbols-outlined">description</span> HR Documentation
                            </a>
        <a className="shrink-0 lg:shrink flex items-center gap-2 lg:gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low lg:hover:translate-x-1 transition-all select-none font-label-md whitespace-nowrap" href="#contractor">
        <span className="material-symbols-outlined">group_work</span> Contractor Compliance
                            </a>
        <a className="shrink-0 lg:shrink flex items-center gap-2 lg:gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low lg:hover:translate-x-1 transition-all select-none font-label-md whitespace-nowrap" href="#factory">
        <span className="material-symbols-outlined">factory</span> Factory Act
                            </a>
        <a className="shrink-0 lg:shrink flex items-center gap-2 lg:gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low lg:hover:translate-x-1 transition-all select-none font-label-md whitespace-nowrap" href="#registrations">
        <span className="material-symbols-outlined">app_registration</span> Registrations
                            </a>
        </div>
        </div>
        </aside>
        
        <div className="flex-1 min-w-0 order-1 lg:order-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div className="glass-card p-8 rounded-2xl flex flex-col h-full group transition-all duration-700 opacity-100 translate-y-0" id="epf">
        <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-primary-container transition-colors duration-300">
        <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl" style={{ fontVariationSettings: '\'FILL\' 0' }}>account_balance</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3">EPF Compliance</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6">Streamlining employer contributions and filings to ensure total regulatory alignment with the Provident Fund Organization.</p>
        <ul className="space-y-3 mb-8 flex-grow">
        <li className="flex items-center gap-2 font-label-sm text-on-surface">
        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span> Monthly ECR generation
                                    </li>
        <li className="flex items-center gap-2 font-label-sm text-on-surface">
        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span> Digital signature handling
                                    </li>
        <li className="flex items-center gap-2 font-label-sm text-on-surface">
        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span> Audit-ready documentation
                                    </li>
        </ul>
        <button className="flex items-center justify-between group/btn text-primary font-bold font-label-md hover:text-secondary transition-colors">
        <span className="">Learn More</span>
        <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
        </button>
        </div>
        
        <div className="glass-card p-8 rounded-2xl flex flex-col h-full group transition-all duration-700 opacity-100 translate-y-0" id="esic">
        <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
        <span className="material-symbols-outlined text-red-600 group-hover:text-white text-3xl">health_and_safety</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3">ESIC Management</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6">Comprehensive health insurance management for your workforce, ensuring seamless employee access to medical benefits.</p>
        <ul className="space-y-3 mb-8 flex-grow">
        <li className="flex items-center gap-2 font-label-sm text-on-surface">
        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span> Online Pehchan Card issuance
                                    </li>
        <li className="flex items-center gap-2 font-label-sm text-on-surface">
        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span> Benefit claim processing
                                    </li>
        <li className="flex items-center gap-2 font-label-sm text-on-surface">
        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span> Statutory monthly returns
                                    </li>
        </ul>
        <button className="flex items-center justify-between group/btn text-primary font-bold font-label-md hover:text-secondary transition-colors">
        <span className="">Learn More</span>
        <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
        </button>
        </div>
        
        <div className="glass-card p-8 rounded-2xl flex flex-col h-full group transition-all duration-700 opacity-100 translate-y-0" id="payroll">
        <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
        <span className="material-symbols-outlined text-green-600 group-hover:text-white text-3xl">payments</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Payroll Management</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6">Automated, error-free salary disbursement coupled with precise tax withholding and professional payslip generation.</p>
        <ul className="space-y-3 mb-8 flex-grow">
        <li className="flex items-center gap-2 font-label-sm text-on-surface">
        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span> End-to-end salary processing
                                    </li>
        <li className="flex items-center gap-2 font-label-sm text-on-surface">
        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span> TDS & Income Tax compliance
                                    </li>
        <li className="flex items-center gap-2 font-label-sm text-on-surface">
        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span> Structured reimbursement workflow
                                    </li>
        </ul>
        <button className="flex items-center justify-between group/btn text-primary font-bold font-label-md hover:text-secondary transition-colors">
        <span className="">Learn More</span>
        <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
        </button>
        </div>
        
        <div className="glass-card p-8 rounded-2xl flex flex-col h-full group transition-all duration-700 opacity-100 translate-y-0" id="labour">
        <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors duration-300">
        <span className="material-symbols-outlined text-orange-600 group-hover:text-white text-3xl">gavel</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Labour Law Compliance</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6">Navigating the complex landscape of Indian labor laws, from Minimum Wages to Maternity Benefits Acts.</p>
        <ul className="space-y-3 mb-8 flex-grow">
        <li className="flex items-center gap-2 font-label-sm text-on-surface">
        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span> Statutory register maintenance
                                    </li>
        <li className="flex items-center gap-2 font-label-sm text-on-surface">
        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span> Abstract & Notice display
                                    </li>
        <li className="flex items-center gap-2 font-label-sm text-on-surface">
        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span> Annual & Half-yearly returns
                                    </li>
        </ul>
        <button className="flex items-center justify-between group/btn text-primary font-bold font-label-md hover:text-secondary transition-colors">
        <span className="">Learn More</span>
        <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
        </button>
        </div>
        
        <div className="glass-card p-8 rounded-2xl flex flex-col h-full group transition-all duration-700 opacity-100 translate-y-0" id="hr-doc">
        <div className="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
        <span className="material-symbols-outlined text-purple-600 group-hover:text-white text-3xl">description</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3">HR Documentation</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6">Expertly drafted employment contracts, policies, and employee handbooks tailored to your corporate culture.</p>
        <ul className="space-y-3 mb-8 flex-grow">
        <li className="flex items-center gap-2 font-label-sm text-on-surface">
        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span> Appointment & Offer letters
                                    </li>
        <li className="flex items-center gap-2 font-label-sm text-on-surface">
        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span> POSH Policy implementation
                                    </li>
        <li className="flex items-center gap-2 font-label-sm text-on-surface">
        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span> Full & Final settlement docs
                                    </li>
        </ul>
        <button className="flex items-center justify-between group/btn text-primary font-bold font-label-md hover:text-secondary transition-colors">
        <span className="">Learn More</span>
        <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
        </button>
        </div>
        
        <div className="glass-card p-8 rounded-2xl flex flex-col h-full group transition-all duration-700 opacity-100 translate-y-0" id="contractor">
        <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
        <span className="material-symbols-outlined text-teal-600 group-hover:text-white text-3xl">group_work</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Contractor Compliance</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6">Mitigating principal employer liability through rigorous auditing and tracking of third-party workforce compliance.</p>
        <ul className="space-y-3 mb-8 flex-grow">
        <li className="flex items-center gap-2 font-label-sm text-on-surface">
        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span> Monthly contractor audits
                                    </li>
        <li className="flex items-center gap-2 font-label-sm text-on-surface">
        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span> CLRA license facilitation
                                    </li>
        <li className="flex items-center gap-2 font-label-sm text-on-surface">
        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span> Risk assessment reporting
                                    </li>
        </ul>
        <button className="flex items-center justify-between group/btn text-primary font-bold font-label-md hover:text-secondary transition-colors">
        <span className="">Learn More</span>
        <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
        </button>
        </div>
        
        <div className="glass-card p-8 rounded-2xl flex flex-col h-full group transition-all duration-700 opacity-100 translate-y-0" id="factory">
        <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
        <span className="material-symbols-outlined text-indigo-600 group-hover:text-white text-3xl">factory</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Factory Act</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6">Safety, health, and welfare compliance for manufacturing units to ensure industrial peace and operational continuity.</p>
        <ul className="space-y-3 mb-8 flex-grow">
        <li className="flex items-center gap-2 font-label-sm text-on-surface">
        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span> License renewals & amendments
                                    </li>
        <li className="flex items-center gap-2 font-label-sm text-on-surface">
        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span> On-site safety inspections
                                    </li>
        <li className="flex items-center gap-2 font-label-sm text-on-surface">
        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span> Incident record maintenance
                                    </li>
        </ul>
        <button className="flex items-center justify-between group/btn text-primary font-bold font-label-md hover:text-secondary transition-colors">
        <span className="">Learn More</span>
        <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
        </button>
        </div>
        
        <div className="glass-card p-8 rounded-2xl flex flex-col h-full group transition-all duration-700 opacity-100 translate-y-0" id="registrations">
        <div className="w-14 h-14 rounded-xl bg-yellow-50 flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300">
        <span className="material-symbols-outlined text-secondary group-hover:text-white text-3xl">app_registration</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Registration & Licensing</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6">Expedited establishment setup with Shop & Establishment, Trade licenses, and Professional Tax registrations.</p>
        <ul className="space-y-3 mb-8 flex-grow">
        <li className="flex items-center gap-2 font-label-sm text-on-surface">
        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span> Multi-state shop registration
                                    </li>
        <li className="flex items-center gap-2 font-label-sm text-on-surface">
        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span> MSME/Udyam certification
                                    </li>
        <li className="flex items-center gap-2 font-label-sm text-on-surface">
        <span className="material-symbols-outlined text-secondary text-lg">check_circle</span> Professional Tax enrollment
                                    </li>
        </ul>
        <button className="flex items-center justify-between group/btn text-primary font-bold font-label-md hover:text-secondary transition-colors">
        <span className="">Learn More</span>
        <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
        </button>
        </div>
        </div>
        </div>
        </div>
        
        <section className="mt-32">
        <div className="text-center mb-16">
        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-label-sm">Informed Decisions</span>
        <h2 className="font-headline-md text-headline-sm md:text-headline-md text-primary mt-2">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
        <div className="glass-card rounded-xl overflow-hidden group transition-all duration-700 opacity-100 translate-y-0">
        <button className="w-full flex items-center justify-between p-6 text-left" onClick={(e) => { const btn = e.currentTarget; btn.nextElementSibling?.classList.toggle('hidden'); btn.querySelector('.arrow')?.classList.toggle('rotate-180'); }}>
        <span className="font-headline-sm text-primary text-lg">How often do labor law regulations change in India?</span>
        <span className="material-symbols-outlined arrow transition-transform">expand_more</span>
        </button>
        <div className="px-6 pb-6 text-on-surface-variant hidden">
                                Regulations can shift quarterly through central or state notifications. Our compliance calendar service provides real-time updates and impact assessments to ensure your operations are never behind.
                            </div>
        </div>
        <div className="glass-card rounded-xl overflow-hidden transition-all duration-700 opacity-100 translate-y-0">
        <button className="w-full flex items-center justify-between p-6 text-left" onClick={(e) => { const btn = e.currentTarget; btn.nextElementSibling?.classList.toggle('hidden'); btn.querySelector('.arrow')?.classList.toggle('rotate-180'); }}>
        <span className="font-headline-sm text-primary text-lg">What are the penalties for non-compliance with EPF?</span>
        <span className="material-symbols-outlined arrow transition-transform">expand_more</span>
        </button>
        <div className="px-6 pb-6 text-on-surface-variant hidden">
                                Non-compliance can lead to heavy interest penalties (up to 12% p.a.) and damages (up to 25%). In extreme cases, it may lead to legal prosecution of the establishment's directors.
                            </div>
        </div>
        <div className="glass-card rounded-xl overflow-hidden transition-all duration-700 opacity-100 translate-y-0">
        <button className="w-full flex items-center justify-between p-6 text-left" onClick={(e) => { const btn = e.currentTarget; btn.nextElementSibling?.classList.toggle('hidden'); btn.querySelector('.arrow')?.classList.toggle('rotate-180'); }}>
        <span className="font-headline-sm text-primary text-lg">Can you manage compliance for a multi-state organization?</span>
        <span className="material-symbols-outlined arrow transition-transform">expand_more</span>
        </button>
        <div className="px-6 pb-6 text-on-surface-variant hidden">
                                Yes, our infrastructure is designed to handle pan-India compliance, mapping state-specific rules and local holidays to your central HR management system.
                            </div>
        </div>
        <div className="glass-card rounded-xl overflow-hidden transition-all duration-700 opacity-100 translate-y-0">
        <button className="w-full flex items-center justify-between p-6 text-left" onClick={(e) => { const btn = e.currentTarget; btn.nextElementSibling?.classList.toggle('hidden'); btn.querySelector('.arrow')?.classList.toggle('rotate-180'); }}>
        <span className="font-headline-sm text-primary text-lg">What is the onboarding time for your payroll services?</span>
        <span className="material-symbols-outlined arrow transition-transform">expand_more</span>
        </button>
        <div className="px-6 pb-6 text-on-surface-variant hidden">
                                Typically, full integration takes 2-4 weeks depending on headcount and the complexity of existing data. We ensure a parallel run for the first month to guarantee 100% accuracy.
                            </div>
        </div>
        </div>
        </section>
        </main>
        
        <section className="w-full py-12 md:py-16 lg:py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop text-center">
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary mb-6">Ready to fortify your <span className="text-secondary-fixed">HR framework?</span></h2>
        <p className="font-body-lg text-body-lg text-on-primary/80 max-w-2xl mx-auto mb-12">Consult with our experts to audit your current compliance status and build a scalable HR infrastructure.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <button className="bg-secondary-fixed text-on-secondary-fixed px-10 py-4 rounded-full font-headline-sm text-lg hover:bg-secondary-fixed-dim transition-all shadow-xl active:scale-95">
                            Schedule a Consultation
                        </button>
        <button className="border border-on-primary/30 text-on-primary px-10 py-4 rounded-full font-headline-sm text-lg hover:bg-white/10 transition-all active:scale-95">
                            View Pricing
                        </button>
        </div>
        </div>
        </section>
        
        
        <a className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform z-[100]" href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer">
        <svg fill="currentColor" height="32" viewBox="0 0 16 16" width="32" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93a7.898 7.898 0 0 0-2.327-5.594l.005-.005zm-5.607 11.41h-.001c-1.247 0-2.473-.336-3.541-.97l-.254-.151-2.633.691.704-2.564-.165-.263a6.592 6.592 0 0 1-1.012-3.48c.002-3.633 2.964-6.595 6.599-6.595 1.758 0 3.41.684 4.653 1.926 1.242 1.242 1.925 2.894 1.925 4.653 0 3.633-2.961 6.594-6.595 6.594z"></path>
        </svg>
        </a>
      </>
    </Layout>
  )
}
