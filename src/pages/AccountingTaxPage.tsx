import Layout from '../components/layout/Layout'
import { useEffect } from 'react'

export default function AccountingTaxPage() {
  useEffect(() => {
    document.querySelectorAll('.glass-card').forEach((card) => {
      card.addEventListener('mouseenter', () => card.classList.add('scale-[1.02]'))
      card.addEventListener('mouseleave', () => card.classList.remove('scale-[1.02]'))
    })
  }, [])

  return (
    <Layout activeItem="services" variant="default" ctaLabel="Get Started">
      <>
        <main className="pt-20 md:pt-24">
        
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 z-10"></div>
        <div className="w-full h-full bg-cover bg-center" data-alt="A sophisticated high-angle view of a dark wooden executive desk featuring a sleek laptop, financial charts with gold and blue accents, a leather-bound notebook, and premium metal pens. The lighting is moody and professional, emphasizing a corporate atmosphere of excellence and precision. The background shows a blurred modern office skyline through a window at dusk." style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBF-TgGuI7-gxn4m88JiDQICnDuWQxpHcSi-5UO_ZxIY9TwRgfM0AOY2QHhHXOVdoRTEyHki6MbjP7DE7s5Ow1UWu-q5I8DzSc50sHfjI-pcMvP0ONZ1vQMzRaWLZDRgpecn4isRcJE7TWKkhEbuog3jqOAkVBANzbgweZCfVvYMiKIvQXt1J0CiN0dsPyFVKQn77EOPwcZmZZGh4vni_ko_l50_jTzkswTfIJfFP_4FiudGH13pS78\')' }}></div>
        </div>
        <div className="relative z-20 max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop w-full">
        <div className="max-w-2xl">
        <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md mb-6 animate-fade-in">PREMIUM TAX SERVICES</span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6">Financial Excellence & <span className="text-secondary-fixed">Strategic Tax Solutions</span></h1>
        <p className="font-body-lg text-body-lg text-white/80 mb-10">Empowering New Delhi's businesses with institutional-grade accounting, rigorous compliance audits, and tax strategies designed for high-stakes enterprise growth.</p>
        <div className="flex flex-wrap gap-4">
        <button className="btn-gold px-8 py-4 rounded-xl font-label-md uppercase tracking-widest">Request a Quote</button>
        <button className="px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-all font-label-md uppercase tracking-widest backdrop-blur-sm">View Portfolio</button>
        </div>
        </div>
        </div>
        </section>
        
        <section className="py-12 md:py-16 lg:py-24 bg-surface">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <div className="text-center mb-16">
        <h2 className="font-headline-md text-headline-sm md:text-headline-md text-primary mb-4">Institutional Service Suite</h2>
        <p className="text-outline max-w-2xl mx-auto">Comprehensive accounting and taxation architecture tailored for modern corporate entities and startups.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
        
        <div className="glass-card p-6 rounded-xl group transition-all duration-300 hover:-translate-y-2">
        <div className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1' }}>account_balance_wallet</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3 text-[18px] leading-tight">Accounting & Bookkeeping</h3>
        <p className="text-outline text-sm mb-6">Meticulous ledger maintenance and transaction tracking for ultimate financial clarity.</p>
        <a className="text-secondary font-label-md inline-flex items-center gap-2 group-hover:underline" href="#">Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
        </div>
        <div className="glass-card p-6 rounded-xl group transition-all duration-300 hover:-translate-y-2">
        <div className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors">
        <span className="material-symbols-outlined">how_to_reg</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3 text-[18px] leading-tight">GST Registration</h3>
        <p className="text-outline text-sm mb-6">Expert facilitation of Goods and Services Tax enrollment for businesses of all scales.</p>
        <a className="text-secondary font-label-md inline-flex items-center gap-2 group-hover:underline" href="#">Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
        </div>
        <div className="glass-card p-6 rounded-xl group transition-all duration-300 hover:-translate-y-2">
        <div className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors">
        <span className="material-symbols-outlined">receipt_long</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3 text-[18px] leading-tight">GST Return Filing</h3>
        <p className="text-outline text-sm mb-6">Timely and accurate submission of monthly and quarterly GST returns to ensure zero penalties.</p>
        <a className="text-secondary font-label-md inline-flex items-center gap-2 group-hover:underline" href="#">Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
        </div>
        <div className="glass-card p-6 rounded-xl group transition-all duration-300 hover:-translate-y-2">
        <div className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors">
        <span className="material-symbols-outlined">payments</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3 text-[18px] leading-tight">Income Tax Return</h3>
        <p className="text-outline text-sm mb-6">Strategic ITR planning and filing for individuals, firms, and corporate entities.</p>
        <a className="text-secondary font-label-md inline-flex items-center gap-2 group-hover:underline" href="#">Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
        </div>
        <div className="glass-card p-6 rounded-xl group transition-all duration-300 hover:-translate-y-2">
        <div className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors">
        <span className="material-symbols-outlined">description</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3 text-[18px] leading-tight">TDS Return</h3>
        <p className="text-outline text-sm mb-6">Accurate tax deduction processing and quarterly return filing for employers and vendors.</p>
        <a className="text-secondary font-label-md inline-flex items-center gap-2 group-hover:underline" href="#">Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
        </div>
        <div className="glass-card p-6 rounded-xl group transition-all duration-300 hover:-translate-y-2">
        <div className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors">
        <span className="material-symbols-outlined">business</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3 text-[18px] leading-tight">Company Incorporation</h3>
        <p className="text-outline text-sm mb-6">End-to-end formation services for Pvt Ltd, LLP, and OPC structures with MCA compliance.</p>
        <a className="text-secondary font-label-md inline-flex items-center gap-2 group-hover:underline" href="#">Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
        </div>
        <div className="glass-card p-6 rounded-xl group transition-all duration-300 hover:-translate-y-2">
        <div className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors">
        <span className="material-symbols-outlined">gavel</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3 text-[18px] leading-tight">ROC Filing</h3>
        <p className="text-outline text-sm mb-6">Annual compliance and secretarial filings with the Registrar of Companies.</p>
        <a className="text-secondary font-label-md inline-flex items-center gap-2 group-hover:underline" href="#">Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
        </div>
        <div className="glass-card p-6 rounded-xl group transition-all duration-300 hover:-translate-y-2">
        <div className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-container group-hover:text-white transition-colors">
        <span className="material-symbols-outlined">analytics</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3 text-[18px] leading-tight">Financial Statements</h3>
        <p className="text-outline text-sm mb-6">Preparation of P&L accounts, Cash Flow statements, and audit-ready financial reports.</p>
        <a className="text-secondary font-label-md inline-flex items-center gap-2 group-hover:underline" href="#">Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
        </div>
        </div>
        </div>
        </section>
        
        <section className="py-12 md:py-16 lg:py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        
        </div>
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
        <span className="material-symbols-outlined text-4xl text-secondary-fixed mb-6">verified_user</span>
        <h3 className="font-headline-sm text-headline-sm mb-4">Accuracy & Precision</h3>
        <p className="text-white/70 font-body-md">Zero-error processing using advanced accounting ERPs and multi-tier review protocols to ensure data integrity.</p>
        </div>
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
        <span className="material-symbols-outlined text-4xl text-secondary-fixed mb-6">policy</span>
        <h3 className="font-headline-sm text-headline-sm mb-4">Regulatory Compliance</h3>
        <p className="text-white/70 font-body-md">Real-time monitoring of changing Indian tax laws to keep your business ahead of regulatory requirements.</p>
        </div>
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
        <span className="material-symbols-outlined text-4xl text-secondary-fixed mb-6">insights</span>
        <h3 className="font-headline-sm text-headline-sm mb-4">Strategic Tax Planning</h3>
        <p className="text-white/70 font-body-md">Beyond filing, we provide structural advice to legally optimize tax liability and improve bottom-line performance.</p>
        </div>
        </div>
        </div>
        </section>
        
        <section className="py-12 md:py-16 lg:py-24 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <h2 className="font-headline-md text-headline-sm md:text-headline-md text-primary text-center mb-16">The Professional Workflow</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        <div className="relative z-10 flex flex-col items-center text-center step-line">
        <div className="w-16 h-16 rounded-full bg-white border-4 border-secondary text-secondary flex items-center justify-center font-bold text-xl mb-6 shadow-md">1</div>
        <h4 className="font-headline-sm text-headline-sm text-primary mb-2 text-lg">Data Collection</h4>
        <p className="text-outline text-sm">Secure gathering of all financial documents and invoices.</p>
        </div>
        <div className="relative z-10 flex flex-col items-center text-center step-line">
        <div className="w-16 h-16 rounded-full bg-white border-4 border-secondary text-secondary flex items-center justify-center font-bold text-xl mb-6 shadow-md">2</div>
        <h4 className="font-headline-sm text-headline-sm text-primary mb-2 text-lg">Analysis & Processing</h4>
        <p className="text-outline text-sm">Expert review and classification of every transaction.</p>
        </div>
        <div className="relative z-10 flex flex-col items-center text-center step-line">
        <div className="w-16 h-16 rounded-full bg-white border-4 border-secondary text-secondary flex items-center justify-center font-bold text-xl mb-6 shadow-md">3</div>
        <h4 className="font-headline-sm text-headline-sm text-primary mb-2 text-lg">Review & Filing</h4>
        <p className="text-outline text-sm">Final audit by chartered experts before regulatory filing.</p>
        </div>
        <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-white border-4 border-secondary text-secondary flex items-center justify-center font-bold text-xl mb-6 shadow-md">4</div>
        <h4 className="font-headline-sm text-headline-sm text-primary mb-2 text-lg">Reporting</h4>
        <p className="text-outline text-sm">Actionable insights and comprehensive financial summaries.</p>
        </div>
        </div>
        </div>
        </section>
        
        <section className="py-12 md:py-16 lg:py-24 bg-surface">
        <div className="max-w-[800px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <h2 className="font-headline-md text-headline-sm md:text-headline-md text-primary text-center mb-12">Expert Answers</h2>
        <div className="space-y-4">
        <details className="group bg-white rounded-xl shadow-sm border border-outline-variant overflow-hidden" open>
        <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
        <span className="font-headline-sm text-headline-sm text-primary text-lg">What are the mandatory GST filing deadlines?</span>
        <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
        </summary>
        <div className="px-6 pb-6 text-outline font-body-md border-t border-outline-variant/30 pt-4">
                                    Deadlines typically fall on the 11th, 13th, and 20th of every month depending on the type of return (GSTR-1, GSTR-3B) and the business turnover. We ensure all our clients file at least 48 hours prior to avoid late fees.
                                </div>
        </details>
        <details className="group bg-white rounded-xl shadow-sm border border-outline-variant overflow-hidden">
        <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
        <span className="font-headline-sm text-headline-sm text-primary text-lg">How often should we prepare financial statements?</span>
        <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
        </summary>
        <div className="px-6 pb-6 text-outline font-body-md border-t border-outline-variant/30 pt-4">
                                    While annual statements are required for compliance, we recommend quarterly or monthly MIS reports for effective business decision-making and cash flow management.
                                </div>
        </details>
        <details className="group bg-white rounded-xl shadow-sm border border-outline-variant overflow-hidden">
        <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
        <span className="font-headline-sm text-headline-sm text-primary text-lg">Do you handle income tax notices and representation?</span>
        <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
        </summary>
        <div className="px-6 pb-6 text-outline font-body-md border-t border-outline-variant/30 pt-4">
                                    Yes, our Corporate Advisory team specializes in drafting responses to scrutiny notices and representing clients before tax authorities.
                                </div>
        </details>
        </div>
        </div>
        </section>
        
        <section className="py-12 md:py-16 lg:py-24 bg-surface relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <div className="relative rounded-3xl overflow-hidden bg-primary p-8 sm:p-12 md:p-16 lg:p-20 text-center">
        <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6">Ready to Streamline Your Finances?</h2>
        <p className="text-white/80 font-body-lg mb-10">Join 500+ corporate clients who trust Thakur Consultancy for their institutional accounting and tax compliance needs.</p>
        <button className="btn-gold px-12 py-5 rounded-xl font-label-md uppercase tracking-widest text-lg">Request a Free Consultation</button>
        </div>
        </div>
        </div>
        </section>
        </main>
      </>
    </Layout>
  )
}
