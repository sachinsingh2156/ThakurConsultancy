import Layout from '../components/layout/Layout'
import { toggleAccordion, useFaqInteractions } from '../hooks/useFaqInteractions'

export default function FaqPage() {
  useFaqInteractions()

  return (
    <Layout activeItem="faq" variant="default" ctaLabel="Get Started">
      <>
        <main className="pt-20">
        
        <section className="relative py-24 overflow-hidden">
        
        <div className="max-w-container-max mx-auto px-margin-desktop relative z-10 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm mb-6 uppercase tracking-widest">Knowledge Base</span>
        <h1 className="font-display-lg text-display-lg text-primary mb-8 max-w-3xl mx-auto">Expert Answers for Modern Enterprise</h1>
        <div className="max-w-2xl mx-auto relative group">
        <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
        <span className="material-symbols-outlined text-outline">search</span>
        </div>
        <input className="w-full pl-16 pr-6 py-5 rounded-2xl border border-outline-variant bg-white/50 backdrop-blur-md focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-xl shadow-primary/5 text-body-lg" placeholder="Search for regulatory frameworks, GST deadlines, or EPF rules..." type="text" />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-secondary text-on-secondary px-6 py-2.5 rounded-xl font-label-md hover:bg-secondary-fixed-dim transition-colors">Search</button>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-on-surface-variant font-label-sm">
        <span className="px-4 py-2 rounded-full border border-outline-variant/30 bg-white/30 backdrop-blur-sm">Trending: GST Filing 2024</span>
        <span className="px-4 py-2 rounded-full border border-outline-variant/30 bg-white/30 backdrop-blur-sm">Trending: SMETA Audit</span>
        <span className="px-4 py-2 rounded-full border border-outline-variant/30 bg-white/30 backdrop-blur-sm">Trending: Labour Welfare Fund</span>
        </div>
        </div>
        </section>
        
        <section className="pb-24">
        <div className="max-w-container-max mx-auto px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        
        <aside className="lg:col-span-3">
        <div className="glass-card rounded-2xl p-6 sticky top-24 shadow-2xl shadow-primary/5 border border-outline-variant/30">
        <h3 className="font-headline-sm text-headline-sm text-primary mb-6">Categories</h3>
        <div className="space-y-1">
        <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-secondary-container text-on-secondary-container font-bold transition-all">
        <span className="material-symbols-outlined" data-icon="groups">groups</span>
        <span className="font-label-md">HR & Documentation</span>
        </button>
        <button className="w-full flex items-center gap-3 p-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-all">
        <span className="material-symbols-outlined" data-icon="verified_user">verified_user</span>
        <span className="font-label-md">Compliance</span>
        </button>
        <button className="w-full flex items-center gap-3 p-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-all">
        <span className="material-symbols-outlined" data-icon="payments">payments</span>
        <span className="font-label-md">Payroll</span>
        </button>
        <button className="w-full flex items-center gap-3 p-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-all">
        <span className="material-symbols-outlined" data-icon="account_balance">account_balance</span>
        <span className="font-label-md">Accounting & GST</span>
        </button>
        <button className="w-full flex items-center gap-3 p-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-all">
        <span className="material-symbols-outlined" data-icon="fact_check">fact_check</span>
        <span className="font-label-md">Audit</span>
        </button>
        <button className="w-full flex items-center gap-3 p-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-all">
        <span className="material-symbols-outlined" data-icon="gavel">gavel</span>
        <span className="font-label-md">Labour Law</span>
        </button>
        </div>
        </div>
        </aside>
        
        <div className="lg:col-span-9 space-y-4">
        
        <div className="glass-card rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm">
        <div className="p-6 border-b border-outline-variant/20 flex items-center gap-3">
        <span className="material-symbols-outlined text-secondary" data-icon="groups" style={{ fontVariationSettings: '\'FILL\' 1' }}>groups</span>
        <h2 className="font-headline-sm text-headline-sm text-primary">HR & Documentation</h2>
        </div>
        <div className="accordion-item px-6 border-b border-outline-variant/10 active">
        <button className="w-full py-6 flex justify-between items-center text-left" onClick={(e) => toggleAccordion(e.currentTarget)}>
        <span className="font-headline-sm text-lg text-on-surface">What documents are essential for new employee onboarding?</span>
        <span className="material-symbols-outlined chevron transition-transform duration-300">expand_more</span>
        </button>
        <div className="accordion-content text-on-surface-variant leading-relaxed">
                                            Essential onboarding documents include the Offer Letter, Appointment Letter, KYC documents (Aadhar, PAN), educational certificates, previous employment relieving letters, and signed Confidentiality Agreements. Thakur Consultancy provides a standardized digital toolkit to automate this collection process while ensuring regulatory compliance.
                                        </div>
        </div>
        <div className="accordion-item px-6 border-b border-outline-variant/10">
        <button className="w-full py-6 flex justify-between items-center text-left" onClick={(e) => toggleAccordion(e.currentTarget)}>
        <span className="font-headline-sm text-lg text-on-surface">How often should employee policies be updated?</span>
        <span className="material-symbols-outlined chevron transition-transform duration-300">expand_more</span>
        </button>
        <div className="accordion-content text-on-surface-variant leading-relaxed">
                                            Employee policies should be reviewed annually or immediately following major shifts in labor legislation (such as new Wage Codes). We recommend a bi-annual audit of the Employee Handbook to reflect evolving hybrid work models and data privacy standards.
                                        </div>
        </div>
        </div>
        
        <div className="glass-card rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm">
        <div className="p-6 border-b border-outline-variant/20 flex items-center gap-3">
        <span className="material-symbols-outlined text-secondary" data-icon="verified_user" style={{ fontVariationSettings: '\'FILL\' 1' }}>verified_user</span>
        <h2 className="font-headline-sm text-headline-sm text-primary">Compliance & Audits</h2>
        </div>
        <div className="accordion-item px-6 border-b border-outline-variant/10">
        <button className="w-full py-6 flex justify-between items-center text-left" onClick={(e) => toggleAccordion(e.currentTarget)}>
        <span className="font-headline-sm text-lg text-on-surface">What is the difference between ISO and SMETA audits?</span>
        <span className="material-symbols-outlined chevron transition-transform duration-300">expand_more</span>
        </button>
        <div className="accordion-content text-on-surface-variant leading-relaxed">
                                            ISO (International Organization for Standardization) focuses on quality, environmental, or security management systems. SMETA (Sedex Members Ethical Trade Audit) focuses specifically on social responsibility, including labor standards, health and safety, environment, and business ethics. Thakur Consultancy helps businesses bridge the gap between these frameworks for comprehensive institutional reliability.
                                        </div>
        </div>
        <div className="accordion-item px-6 border-b border-outline-variant/10">
        <button className="w-full py-6 flex justify-between items-center text-left" onClick={(e) => toggleAccordion(e.currentTarget)}>
        <span className="font-headline-sm text-lg text-on-surface">How can we ensure 100% statutory compliance for multi-state operations?</span>
        <span className="material-symbols-outlined chevron transition-transform duration-300">expand_more</span>
        </button>
        <div className="accordion-content text-on-surface-variant leading-relaxed">
                                            Multi-state operations require a centralized compliance dashboard that tracks state-specific labor laws, professional tax registrations, and minimum wage updates. Our proprietary audit mechanism ensures that location-specific registrations are renewed automatically and filings are reconciled monthly.
                                        </div>
        </div>
        </div>
        
        <div className="glass-card rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm">
        <div className="p-6 border-b border-outline-variant/20 flex items-center gap-3">
        <span className="material-symbols-outlined text-secondary" data-icon="payments" style={{ fontVariationSettings: '\'FILL\' 1' }}>payments</span>
        <h2 className="font-headline-sm text-headline-sm text-primary">Payroll & Benefits</h2>
        </div>
        <div className="accordion-item px-6 border-b border-outline-variant/10">
        <button className="w-full py-6 flex justify-between items-center text-left" onClick={(e) => toggleAccordion(e.currentTarget)}>
        <span className="font-headline-sm text-lg text-on-surface">What are the current EPF and ESIC contribution rates?</span>
        <span className="material-symbols-outlined chevron transition-transform duration-300">expand_more</span>
        </button>
        <div className="accordion-content text-on-surface-variant leading-relaxed">
                                            As per current regulations, the EPF contribution is 12% of basic salary for both employer and employee. ESIC rates are 0.75% for employees and 3.25% for employers (for employees earning up to ₹21,000). Note that these thresholds are subject to change based on new Ministry of Labour notifications.
                                        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
        
        <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        
        </div>
        <div className="max-w-container-max mx-auto px-margin-desktop text-center relative z-10">
        <h2 className="font-display-lg text-display-lg text-on-primary mb-6">Still have questions?</h2>
        <p className="font-body-lg text-body-lg text-on-primary-container mb-12 max-w-2xl mx-auto">Our consultants are ready to help you navigate complex regulatory landscapes with precision and authority.</p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
        <button className="bg-secondary text-on-secondary px-10 py-4 rounded-xl font-label-md text-lg hover:bg-secondary-fixed transition-all flex items-center justify-center gap-3 shadow-xl shadow-black/20">
        <span className="material-symbols-outlined">support_agent</span>
                                Consult an Expert
                            </button>
        <button className="bg-white/10 text-on-primary border border-white/20 px-10 py-4 rounded-xl font-label-md text-lg hover:bg-white/20 transition-all backdrop-blur-md flex items-center justify-center gap-3">
        <span className="material-symbols-outlined">mail</span>
                                Email Support
                            </button>
        </div>
        </div>
        </section>
        </main>
        
        
        <div className="fixed bottom-8 right-8 z-[100] group">
        <div className="absolute bottom-full right-0 mb-4 scale-0 group-hover:scale-100 transition-all origin-bottom-right duration-300">
        <div className="glass-card p-4 rounded-2xl shadow-2xl border border-outline-variant w-64 mb-2">
        <div className="flex items-center gap-3 mb-3">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        <span className="font-label-md text-primary">Experts Online Now</span>
        </div>
        <p className="text-sm text-on-surface-variant mb-4">How can we assist with your documentation today?</p>
        <button className="w-full bg-primary text-on-primary py-2 rounded-lg text-sm font-label-md">Start Live Chat</button>
        </div>
        </div>
        <button className="w-16 h-16 rounded-full bg-secondary text-on-secondary shadow-2xl flex items-center justify-center hover:rotate-12 transition-transform active:scale-95">
        <span className="material-symbols-outlined text-3xl">chat_bubble</span>
        </button>
        </div>
      </>
    </Layout>
  )
}
