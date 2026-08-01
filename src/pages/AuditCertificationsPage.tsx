import Layout from '../components/layout/Layout'
import { toggleAccordion } from '../hooks/useFaqInteractions'

export default function AuditCertificationsPage() {
  return (
    <Layout activeItem="services" variant="default" ctaLabel="Get Started">
      <>
        <main className="pt-20 md:pt-24">
        
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
        
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm">
        <span className="material-symbols-outlined text-[16px]">verified</span>
                                Accredited Auditing Partner
                            </div>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary leading-tight">
                                Global Standards, <br /><span className="text-secondary">Absolute Compliance</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                                We empower organizations to achieve excellence through rigorous audits and world-class certifications. Your partner in building sustainable, ethical, and compliant value chains.
                            </p>
        <div className="flex flex-wrap gap-4">
        <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-headline-sm text-base shadow-xl hover:translate-y-[-2px] transition-transform">
                                    Schedule an Audit
                                </button>
        <button className="border-2 border-outline text-primary px-8 py-4 rounded-lg font-headline-sm text-base hover:bg-surface-container transition-colors">
                                    View Standards
                                </button>
        </div>
        </div>
        <div className="hidden md:block">
        <div className="relative">
        <div className="absolute -inset-4 bg-secondary-fixed-dim/20 blur-3xl rounded-full"></div>
        <div className="glass-card p-4 rounded-2xl rotate-3 transform hover:rotate-0 transition-transform duration-500">
        <img className="w-full h-[500px] object-cover rounded-xl shadow-lg" data-alt="A professional high-end corporate setting in New Delhi showing a diverse group of business consultants in sharp suits reviewing high-level audit documentation. The office is modern with glass walls and minimalist furniture, bathed in soft morning light filtering through large windows. The overall aesthetic is sophisticated, trustworthy, and expert, with a color palette of deep navy blue and gold accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWPBZprM4HYhKB1QEmaDJfB4YmgqzuM9WYr9fp9tBwkcO2FT88kdCtn4OeOHcOKYVw2bBRb0RT__acbCKlqRsB5_-sNrJFojRgN4skwC6H9JezJifss2KvfYycf34IMKGawVrtAjoCNF-QiZmFEyogmF13FRdAU2dLNM5aQnNqnXVqX4CnLU2Piqg0zxWg_axhlDnKhOLlx66Am7UBgvo3zSdeAZjfGREDvDTXcQ6zda2UwRELkur0" />
        </div>
        </div>
        </div>
        </div>
        </section>
        
        <section className="py-12 md:py-16 lg:py-24 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-6 md:px-16">
        <div className="text-center mb-16 space-y-4">
        <h2 className="font-headline-md text-headline-sm md:text-headline-md text-primary">Comprehensive Certification Portfolio</h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">Expertise across international frameworks to ensure your business meets every global mandate with precision.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        
        
        <div className="contents">
        
        <div className="glass-card p-6 rounded-xl group hover:shadow-2xl transition-all duration-300 border-l-4 border-secondary">
        <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
        <span className="material-symbols-outlined">handshake</span>
        </div>
        <h3 className="font-headline-sm text-lg text-primary mb-1">Sedex</h3>
        <p className="font-body-md text-sm text-on-surface-variant">Ethical Trade Audit</p>
        </div>
        <div className="glass-card p-6 rounded-xl group hover:shadow-2xl transition-all duration-300 border-l-4 border-secondary">
        <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
        <span className="material-symbols-outlined">gavel</span>
        </div>
        <h3 className="font-headline-sm text-lg text-primary mb-1">SMETA</h3>
        <p className="font-body-md text-sm text-on-surface-variant">Ethical Audit Methodology</p>
        </div>
        <div className="glass-card p-6 rounded-xl group hover:shadow-2xl transition-all duration-300 border-l-4 border-secondary">
        <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
        <span className="material-symbols-outlined">eco</span>
        </div>
        <h3 className="font-headline-sm text-lg text-primary mb-1">GOTS</h3>
        <p className="font-body-md text-sm text-on-surface-variant">Global Organic Textile Standard</p>
        </div>
        <div className="glass-card p-6 rounded-xl group hover:shadow-2xl transition-all duration-300 border-l-4 border-secondary">
        <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
        <span className="material-symbols-outlined">public</span>
        </div>
        <h3 className="font-headline-sm text-lg text-primary mb-1">WRAP</h3>
        <p className="font-body-md text-sm text-on-surface-variant">Worldwide Responsible Production</p>
        </div>
        <div className="glass-card p-6 rounded-xl group hover:shadow-2xl transition-all duration-300 border-l-4 border-secondary">
        <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
        <span className="material-symbols-outlined">groups</span>
        </div>
        <h3 className="font-headline-sm text-lg text-primary mb-1">BSCI</h3>
        <p className="font-body-md text-sm text-on-surface-variant">Business Social Compliance</p>
        </div>
        <div className="glass-card p-6 rounded-xl group hover:shadow-2xl transition-all duration-300 border-l-4 border-secondary">
        <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
        <span className="material-symbols-outlined">shield_lock</span>
        </div>
        <h3 className="font-headline-sm text-lg text-primary mb-1">C-TPAT</h3>
        <p className="font-body-md text-sm text-on-surface-variant">Customs-Trade Partnership</p>
        </div>
        <div className="glass-card p-6 rounded-xl group hover:shadow-2xl transition-all duration-300 border-l-4 border-secondary">
        <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
        <span className="material-symbols-outlined">check_circle</span>
        </div>
        <h3 className="font-headline-sm text-lg text-primary mb-1">ZED</h3>
        <p className="font-body-md text-sm text-on-surface-variant">Zero Defect Zero Effect</p>
        </div>
        <div className="glass-card p-6 rounded-xl group hover:shadow-2xl transition-all duration-300 border-l-4 border-secondary">
        <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
        <span className="material-symbols-outlined">settings_suggest</span>
        </div>
        <h3 className="font-headline-sm text-lg text-primary mb-1">ISO 9001</h3>
        <p className="font-body-md text-sm text-on-surface-variant">Quality Management</p>
        </div>
        <div className="glass-card p-6 rounded-xl group hover:shadow-2xl transition-all duration-300 border-l-4 border-secondary">
        <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
        <span className="material-symbols-outlined">forest</span>
        </div>
        <h3 className="font-headline-sm text-lg text-primary mb-1">ISO 14001</h3>
        <p className="font-body-md text-sm text-on-surface-variant">Environmental Management</p>
        </div>
        <div className="glass-card p-6 rounded-xl group hover:shadow-2xl transition-all duration-300 border-l-4 border-secondary">
        <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
        <span className="material-symbols-outlined">health_and_safety</span>
        </div>
        <h3 className="font-headline-sm text-lg text-primary mb-1">ISO 45001</h3>
        <p className="font-body-md text-sm text-on-surface-variant">Occupational Health & Safety</p>
        </div>
        <div className="glass-card p-6 rounded-xl group hover:shadow-2xl transition-all duration-300 border-l-4 border-secondary">
        <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
        <span className="material-symbols-outlined">psychology</span>
        </div>
        <h3 className="font-headline-sm text-lg text-primary mb-1">Social Audit</h3>
        <p className="font-body-md text-sm text-on-surface-variant">Ethical Evaluation</p>
        </div>
        <div className="glass-card p-6 rounded-xl group hover:shadow-2xl transition-all duration-300 border-l-4 border-secondary">
        <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
        <span className="material-symbols-outlined">architecture</span>
        </div>
        <h3 className="font-headline-sm text-lg text-primary mb-1">Technical Audit</h3>
        <p className="font-body-md text-sm text-on-surface-variant">Quality Assessment</p>
        </div>
        </div>
        </div>
        </div>
        </section>
        
        <section className="py-12 md:py-16 lg:py-24">
        <div className="max-w-container-max mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        <div>
        <h2 className="font-headline-md text-headline-sm md:text-headline-md text-primary mb-6">The Audit Journey</h2>
        <p className="font-body-lg text-on-surface-variant mb-12">We follow a transparent, systematic roadmap to guide your organization from preparation to prestigious certification.</p>
        <div className="space-y-12 relative before:content-[''] before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-outline-variant/30">
        <div className="relative pl-12">
        <div className="absolute left-0 top-0 w-10 h-10 rounded-full premium-gradient flex items-center justify-center text-on-secondary-fixed z-10 font-bold">1</div>
        <h4 className="font-headline-sm text-xl text-primary">Pre-Audit Assessment</h4>
        <p className="text-on-surface-variant">Initial scoping and readiness check to identify preliminary areas for improvement.</p>
        </div>
        <div className="relative pl-12">
        <div className="absolute left-0 top-0 w-10 h-10 rounded-full premium-gradient flex items-center justify-center text-on-secondary-fixed z-10 font-bold">2</div>
        <h4 className="font-headline-sm text-xl text-primary">Documentation Review</h4>
        <p className="text-on-surface-variant">Rigorous evaluation of internal policies, logs, and procedural adherence.</p>
        </div>
        <div className="relative pl-12">
        <div className="absolute left-0 top-0 w-10 h-10 rounded-full premium-gradient flex items-center justify-center text-on-secondary-fixed z-10 font-bold">3</div>
        <h4 className="font-headline-sm text-xl text-primary">On-Site Inspection</h4>
        <p className="text-on-surface-variant">Physical verification of facilities and interviews with key personnel.</p>
        </div>
        <div className="relative pl-12">
        <div className="absolute left-0 top-0 w-10 h-10 rounded-full premium-gradient flex items-center justify-center text-on-secondary-fixed z-10 font-bold">4</div>
        <h4 className="font-headline-sm text-xl text-primary">Gap Analysis & Reporting</h4>
        <p className="text-on-surface-variant">Detailed findings report with actionable recommendations for compliance.</p>
        </div>
        <div className="relative pl-12">
        <div className="absolute left-0 top-0 w-10 h-10 rounded-full premium-gradient flex items-center justify-center text-on-secondary-fixed z-10 font-bold">5</div>
        <h4 className="font-headline-sm text-xl text-primary">Certification Issuance</h4>
        <p className="text-on-surface-variant">Official awarding of certification following successful resolution of all gaps.</p>
        </div>
        </div>
        </div>
        <div className="relative">
        <div className="aspect-square glass-card rounded-3xl overflow-hidden shadow-2xl">
        <img className="w-full h-full object-cover" data-alt="A macro photograph of an official gold wax seal on a premium certificate document. The lighting is dramatic and warm, highlighting the intricate texture of the high-quality paper and the metallic sheen of the seal. In the blurred background, a hand holds a fountain pen, suggesting the final signing of a critical compliance document. The style is ultra-high-end corporate photography, conveying authority and accomplishment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ9sQ_VF4uNoNQHOspHsgXfyzMl8gkD7dEwJhBMubrDkiy5Nay1J3lD8uPeNV8WdUyDKWo37Xpqy1DB-ubfpXPeNHIIju8QCMqN6Lt94eP9uNb7T8oOM39HacRHE439KB8UKCt0PcG-ZtSkHXamRuuGEq5gAluPcTqW8YAfentl5BoxQ8F7-WdejT2v9NLd9RDfFckBr5VcByY833uF9l2fsnAuPNRJGBPhbQwcdqRu9AuXrUV_ra-" />
        </div>
        <div className="absolute -bottom-8 -right-8 glass-card p-6 rounded-2xl max-w-xs animate-bounce-slow">
        <div className="flex items-center gap-4">
        <div className="bg-green-100 text-green-600 p-2 rounded-full">
        <span className="material-symbols-outlined">verified</span>
        </div>
        <div>
        <p className="font-bold text-primary">99.8% Success Rate</p>
        <p className="text-xs text-on-surface-variant">In first-attempt certifications for 2023.</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
        
        <section className="py-12 md:py-16 lg:py-24 bg-tertiary text-on-tertiary overflow-hidden">
        <div className="max-w-container-max mx-auto px-6 md:px-16">
        <div className="mb-16">
        <h2 className="font-headline-md text-headline-md mb-4 text-secondary-fixed-dim">Strategic Advantages</h2>
        <p className="text-on-tertiary-container max-w-xl">How our certification processes drive tangible business value.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[200px]">
        
        <div className="md:col-span-8 glass-card bg-white/5 border-white/10 p-8 rounded-3xl flex flex-col justify-end group hover:bg-white/10 transition-all">
        <span className="material-symbols-outlined text-secondary-fixed-dim mb-4 text-4xl">star_rate</span>
        <h3 className="font-headline-sm text-2xl mb-2">Elevated Brand Reputation</h3>
        <p className="text-on-tertiary-container">Showcase your commitment to global ethics and quality to customers and stakeholders worldwide.</p>
        </div>
        
        <div className="md:col-span-4 glass-card bg-white/5 border-white/10 p-8 rounded-3xl flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-all">
        <span className="material-symbols-outlined text-secondary-fixed-dim mb-4 text-5xl">security</span>
        <h3 className="font-headline-sm text-xl mb-2">Risk Mitigation</h3>
        <p className="text-sm text-on-tertiary-container">Proactively identify and neutralize legal and operational hazards.</p>
        </div>
        
        <div className="md:col-span-12 row-span-2 relative rounded-3xl overflow-hidden group">
        <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A panoramic view of a massive, modern industrial manufacturing facility at dusk, with lights glowing warmly through glass panels. The architecture is clean and high-tech, symbolizing industrial efficiency and compliance. The overall mood is epic and successful, reflecting a global-scale operation that has achieved peak certification standards under the guidance of expert consultants." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9gxzgBeAg3xtNdS0NH_b74Z38pkclh9sUr3kJjQS36WnRX3dYmFiWoHAQhIC2DvVMtwdUJBAo3MrPA6o9U9_2XE2TIH1uf3gtUkJU_j_Cbh5iQgdQ9a5rUa0SAmV3pJyHyi_kuXr4Udt0eKKWtLW4SOdwjRhwjF_GhLFNzLs1_S7TZlmuxurPfvc_Kfajq0KAy77kzefMe4xBApS2e2suqIRz-3_r8yidThDrvuLP9J3Z524eOMcA" />
        <div className="absolute inset-0 bg-gradient-to-t from-tertiary via-tertiary/20 to-transparent p-12 flex flex-col justify-end">
        <div className="bg-secondary-fixed text-on-secondary-fixed px-4 py-1 rounded-full w-fit mb-4 text-xs font-bold uppercase tracking-widest">Case Study</div>
        <h3 className="font-display-lg text-3xl mb-4">Triumph in Global Supply Chain Overhaul</h3>
        <p className="max-w-2xl text-on-tertiary-container mb-6">How Thakur Consultancy steered a Fortune 500 textile giant through complex multi-continent ISO and Social Audits in record time.</p>
        <a className="flex items-center gap-2 font-bold text-secondary-fixed-dim hover:gap-4 transition-all" href="#">Read Success Story <span className="material-symbols-outlined">arrow_forward</span></a>
        </div>
        </div>
        
        <div className="md:col-span-6 glass-card bg-white/5 border-white/10 p-8 rounded-3xl flex flex-col justify-center group hover:bg-white/10 transition-all">
        <span className="material-symbols-outlined text-secondary-fixed-dim mb-4 text-4xl">language</span>
        <h3 className="font-headline-sm text-xl mb-2">Global Market Access</h3>
        <p className="text-on-tertiary-container">Unlock restricted international markets by meeting stringent import requirements and customs partnerships.</p>
        </div>
        
        <div className="md:col-span-6 glass-card bg-white/5 border-white/10 p-8 rounded-3xl flex flex-col justify-center group hover:bg-white/10 transition-all">
        <span className="material-symbols-outlined text-secondary-fixed-dim mb-4 text-4xl">trending_up</span>
        <h3 className="font-headline-sm text-xl mb-2">Operational Scalability</h3>
        <p className="text-on-tertiary-container">Standardized processes allow for seamless expansion into new territories and product lines.</p>
        </div>
        </div>
        </div>
        </section>
        
        <section className="py-12 md:py-16 lg:py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
        <h2 className="font-headline-md text-headline-sm md:text-headline-md text-primary mb-4">Frequently Asked Questions</h2>
        <p className="text-on-surface-variant">Clear answers for your compliance journey.</p>
        </div>
        <div className="space-y-4">
        <div className="border border-outline-variant rounded-xl overflow-hidden bg-white">
        <button className="w-full flex justify-between items-center p-6 text-left hover:bg-surface-container transition-colors" onClick={(e) => toggleAccordion(e.currentTarget)}>
        <span className="font-headline-sm text-lg text-primary">How long does a standard audit process take?</span>
        <span className="material-symbols-outlined transition-transform">expand_more</span>
        </button>
        <div className="px-6 pb-6 hidden text-on-surface-variant">
                                    Typical audits range from 2 to 6 weeks depending on the complexity of the organization and the specific certification standard being pursued. Pre-assessments can significantly accelerate the official timeline.
                                </div>
        </div>
        <div className="border border-outline-variant rounded-xl overflow-hidden bg-white">
        <button className="w-full flex justify-between items-center p-6 text-left hover:bg-surface-container transition-colors" onClick={(e) => toggleAccordion(e.currentTarget)}>
        <span className="font-headline-sm text-lg text-primary">What is the validity period of these certifications?</span>
        <span className="material-symbols-outlined transition-transform">expand_more</span>
        </button>
        <div className="px-6 pb-6 hidden text-on-surface-variant">
                                    Most ISO and Social certifications are valid for 3 years, subject to annual surveillance audits. Standards like Sedex or WRAP may require annual renewals to ensure ongoing compliance.
                                </div>
        </div>
        <div className="border border-outline-variant rounded-xl overflow-hidden bg-white">
        <button className="w-full flex justify-between items-center p-6 text-left hover:bg-surface-container transition-colors" onClick={(e) => toggleAccordion(e.currentTarget)}>
        <span className="font-headline-sm text-lg text-primary">Can you help with corrective action plans?</span>
        <span className="material-symbols-outlined transition-transform">expand_more</span>
        </button>
        <div className="px-6 pb-6 hidden text-on-surface-variant">
                                    Yes, our "Gap Analysis" phase includes detailed corrective action planning. We provide strategic guidance to ensure all non-conformities are addressed effectively before final certification issuance.
                                </div>
        </div>
        </div>
        </div>
        </section>
        
        <section className="py-12 md:py-16 lg:py-24 relative overflow-hidden">
        
        <div className="relative z-10 max-w-container-max mx-auto px-6 text-center">
        <div className="bg-primary text-on-primary rounded-[3rem] p-8 sm:p-12 md:p-16 lg:p-24 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10">
        <span className="material-symbols-outlined text-[200px]">workspace_premium</span>
        </div>
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-8">Ready to Certify Your Success?</h2>
        <p className="text-on-primary-container text-xl max-w-2xl mx-auto mb-12">Join hundreds of global organizations that trust Thakur Consultancy for their institutional integrity and compliance milestones.</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <button className="premium-gradient text-on-secondary-fixed px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                                    Request a Consultation
                                </button>
        <button className="bg-white/10 backdrop-blur-md border border-white/20 text-on-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
                                    Download Brochure
                                </button>
        </div>
        </div>
        </div>
        </section>
        </main>
      </>
    </Layout>
  )
}
