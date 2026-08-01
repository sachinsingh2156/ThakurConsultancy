import Layout from '../components/layout/Layout'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function IndustriesPage() {
  useScrollReveal()

  return (
    <Layout activeItem="industries" variant="default" ctaLabel="Get Started">
      <>
        <main className="pt-20 md:pt-24">
        
        <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-cover bg-center" data-alt="A sweeping, wide-angle cinematic shot of a modern industrial landscape featuring sleek factories, logistics hubs, and high-tech skyscrapers in New Delhi. The scene is bathed in a bright, professional morning light with a sophisticated blue and gold color palette, reflecting prestige and institutional excellence. The visual style is crisp and clean, with a focus on structural symmetry and corporate modernity." style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBhPFqnYq0C1lhvQUH4NdzhQEjMbpc2C9zzjWibnA98Db5N64EDHy5iuim2tjECAlRY1Jf0ihDoswbzW907VFRUhxKWrvymYPIzt6ERWCEpB_3Hssl7VB7IRmXm342Ohrzxvlu6vxB1MW-x9gNZrAewQb1PIE6B-fn9Qri1yA8SxqxsGZ9rVMf2p1pJqGmeRRFyIsz-MKQfyipZzwmgaSSPjaXyLN7ogm4ZbalItkyIzkBG8rUips4z\')' }}></div>
        <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 w-full px-margin-mobile md:px-margin-tablet lg:px-margin-desktop max-w-container-max mx-auto">
        <div className="max-w-3xl">
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6 leading-tight">
                                Empowering Diverse Sectors with <span className="golden-text">Institutional Excellence</span>
        </h1>
        <p className="font-body-lg text-body-lg text-white/90 mb-8 max-w-xl">
                                Tailored HR, Compliance, and Financial solutions specifically designed to meet the rigorous demands of India's leading industrial sectors.
                            </p>
        <div className="flex gap-4">
        <button className="px-8 py-3 bg-secondary text-white rounded-xl font-label-md text-label-md hover:shadow-xl transition-all">Explore Sectors</button>
        <button className="px-8 py-3 glass-card text-white rounded-xl font-label-md text-label-md hover:bg-white/10 transition-all border-white/30 opacity-0 duration-700 opacity-100">Our Expertise</button>
        </div>
        </div>
        </div>
        </section>
        
        <section className="py-12 bg-primary-container">
        <div className="px-margin-mobile md:px-margin-tablet lg:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center">
        <p className="font-headline-md text-headline-md text-secondary-fixed mb-1">500+</p>
        <p className="font-label-sm text-label-sm text-on-primary-container/80 uppercase tracking-widest">Clients Served</p>
        </div>
        <div className="text-center">
        <p className="font-headline-md text-headline-md text-secondary-fixed mb-1">12+</p>
        <p className="font-label-sm text-label-sm text-on-primary-container/80 uppercase tracking-widest">Industry Verticals</p>
        </div>
        <div className="text-center">
        <p className="font-headline-md text-headline-md text-secondary-fixed mb-1">99%</p>
        <p className="font-label-sm text-label-sm text-on-primary-container/80 uppercase tracking-widest">Compliance Accuracy</p>
        </div>
        <div className="text-center">
        <p className="font-headline-md text-headline-md text-secondary-fixed mb-1">15+</p>
        <p className="font-label-sm text-label-sm text-on-primary-container/80 uppercase tracking-widest">Years Expertise</p>
        </div>
        </div>
        </div>
        </section>
        
        <section className="py-12 md:py-16 lg:py-24 bg-surface-bright">
        <div className="px-margin-mobile md:px-margin-tablet lg:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
        <span className="text-secondary font-label-md text-label-md uppercase tracking-[0.2em] mb-4 block">Our Reach</span>
        <h2 className="font-headline-md text-headline-sm md:text-headline-md text-primary mb-4">Precision Solutions Across Diverse Markets</h2>
        <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        
        <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 opacity-0 duration-700 opacity-100">
        <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:bg-secondary group-hover:text-white transition-colors">
        <span className="material-symbols-outlined text-4xl">factory</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Manufacturing</h3>
        <p className="font-body-md text-body-md text-on-surface-variant">Streamlined compliance for complex production units and labor law adherence.</p>
        </div>
        
        <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 opacity-0 duration-700 opacity-100">
        <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:bg-secondary group-hover:text-white transition-colors">
        <span className="material-symbols-outlined text-4xl">checkroom</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Textile</h3>
        <p className="font-body-md text-body-md text-on-surface-variant">Specialized payroll management for massive floor operations and vendor audits.</p>
        </div>
        
        <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 opacity-0 duration-700 opacity-100">
        <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:bg-secondary group-hover:text-white transition-colors">
        <span className="material-symbols-outlined text-4xl">styler</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Garments</h3>
        <p className="font-body-md text-body-md text-on-surface-variant">Navigating export-oriented regulatory frameworks and social compliance standards.</p>
        </div>
        
        <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 opacity-0 duration-700 opacity-100">
        <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:bg-secondary group-hover:text-white transition-colors">
        <span className="material-symbols-outlined text-4xl">engineering</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Construction</h3>
        <p className="font-body-md text-body-md text-on-surface-variant">Mitigating high-risk operational liabilities and statutory site-level reporting.</p>
        </div>
        
        <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 opacity-0 duration-700 opacity-100">
        <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:bg-secondary group-hover:text-white transition-colors">
        <span className="material-symbols-outlined text-4xl">terminal</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3">IT Companies</h3>
        <p className="font-body-md text-body-md text-on-surface-variant">Strategic tax planning and agile HR policies for high-growth tech firms.</p>
        </div>
        
        <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 opacity-0 duration-700 opacity-100">
        <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:bg-secondary group-hover:text-white transition-colors">
        <span className="material-symbols-outlined text-4xl">rocket_launch</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Startups</h3>
        <p className="font-body-md text-body-md text-on-surface-variant">Zero-to-one compliance setup and scalable organizational structuring.</p>
        </div>
        
        <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 opacity-0 duration-700 opacity-100">
        <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:bg-secondary group-hover:text-white transition-colors">
        <span className="material-symbols-outlined text-4xl">store</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3">MSMEs</h3>
        <p className="font-body-md text-body-md text-on-surface-variant">Empowering small businesses with institutional-grade auditing and consultancy.</p>
        </div>
        
        <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 opacity-0 duration-700 opacity-100">
        <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:bg-secondary group-hover:text-white transition-colors">
        <span className="material-symbols-outlined text-4xl">medical_services</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Healthcare</h3>
        <p className="font-body-md text-body-md text-on-surface-variant">Precise workforce management for critical medical services and clinic networks.</p>
        </div>
        
        <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 opacity-0 duration-700 opacity-100">
        <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:bg-secondary group-hover:text-white transition-colors">
        <span className="material-symbols-outlined text-4xl">shopping_bag</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Retail</h3>
        <p className="font-body-md text-body-md text-on-surface-variant">Multi-location staff governance and seasonal workforce compliance solutions.</p>
        </div>
        
        <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 opacity-0 duration-700 opacity-100">
        <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:bg-secondary group-hover:text-white transition-colors">
        <span className="material-symbols-outlined text-4xl">inventory_2</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Warehousing</h3>
        <p className="font-body-md text-body-md text-on-surface-variant">Optimizing hub-and-spoke compliance and inventory labor logistics.</p>
        </div>
        
        <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 opacity-0 duration-700 opacity-100">
        <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:bg-secondary group-hover:text-white transition-colors">
        <span className="material-symbols-outlined text-4xl">local_shipping</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Logistics</h3>
        <p className="font-body-md text-body-md text-on-surface-variant">Supply chain HR efficiency and fleet regulatory adherence for national networks.</p>
        </div>
        
        <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 opacity-0 duration-700 opacity-100">
        <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:bg-secondary group-hover:text-white transition-colors">
        <span className="material-symbols-outlined text-4xl">school</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Education</h3>
        <p className="font-body-md text-body-md text-on-surface-variant">Administrative excellence and statutory framework management for institutions.</p>
        </div>
        </div>
        </div>
        </section>
        
        <section className="py-12 md:py-16 lg:py-24 bg-surface">
        <div className="px-margin-mobile md:px-margin-tablet lg:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        <div className="relative">
        <div className="w-full aspect-[4/3] rounded-3xl bg-cover bg-center shadow-2xl relative z-10" data-alt="A professional photograph of a bustling, high-efficiency logistics warehouse with automated sorting systems and busy transport trucks. The lighting is crisp and natural, showcasing a clean, well-organized environment. This represents a successful turnaround project. The mood is industrial yet highly technological and efficient, with cool blue and silver tones." style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBDnq4lDHfLQUa_TYu9f4kQk_WbleVGeUzyb76czxJX5hynBNyqdUmA4NrC3vob0uclLKXtwPgjeWxrM5-K55HbuQazLBhudBG3TKUQLN8XOBMxC2m_T0wiR0aE4soSE6ko-0MsZH4Ed2tsRVkQjzXv9KtWI-0egNHXW4ylUKVo8YgcfZCI7NE-ECsx09QVQe8XDY1wAM32b8gGgR0IEL86XftKinHrqI5yZ69b8ycNF1sOfKmsud4k\')' }}></div>
        <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 bg-secondary rounded-3xl -z-0"></div>
        </div>
        <div>
        <span className="text-secondary font-label-md text-label-md uppercase tracking-[0.2em] mb-4 block">Case Study Spotlight</span>
        <h2 className="font-headline-md text-headline-sm md:text-headline-md text-primary mb-6">Logistics Turnaround: Optimizing Statutory Compliance for a Pan-India Network</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                                    A major logistics firm was struggling with inconsistent compliance across 15 states. Thakur Consultancy implemented a centralized audit framework, reducing legal risks by 80% and increasing operational efficiency by 25% within the first year.
                                </p>
        <div className="space-y-4 mb-8">
        <div className="flex items-start gap-3">
        <span className="material-symbols-outlined text-secondary">check_circle</span>
        <span className="font-body-md text-body-md text-on-surface">Integrated 5,000+ contractors into unified payroll.</span>
        </div>
        <div className="flex items-start gap-3">
        <span className="material-symbols-outlined text-secondary">check_circle</span>
        <span className="font-body-md text-body-md text-on-surface">Resolved 12 pending labor law litigations.</span>
        </div>
        </div>
        <button className="flex items-center gap-2 text-primary font-label-md text-label-md group">
                                    Read the Full Success Story
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
        </div>
        </div>
        </div>
        </section>
        
        <section className="py-12 md:py-16 lg:py-24 bg-surface-container-low border-y border-outline-variant/30">
        <div className="px-margin-mobile md:px-margin-tablet lg:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
        <h2 className="font-headline-md text-headline-sm md:text-headline-md text-primary mb-4">Why Industry Leaders Choose Us</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Providing the strategic edge through decades of deep domain expertise.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="text-center">
        <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-6">
        <span className="material-symbols-outlined text-3xl text-primary">diversity_3</span>
        </div>
        <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Expertise</h4>
        <p className="font-label-sm text-label-sm text-on-surface-variant">Deep vertical knowledge across sectors.</p>
        </div>
        <div className="text-center">
        <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-6">
        <span className="material-symbols-outlined text-3xl text-primary">auto_graph</span>
        </div>
        <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Scalable</h4>
        <p className="font-label-sm text-label-sm text-on-surface-variant">Solutions that grow with your business.</p>
        </div>
        <div className="text-center">
        <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-6">
        <span className="material-symbols-outlined text-3xl text-primary">gavel</span>
        </div>
        <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Regulatory</h4>
        <p className="font-label-sm text-label-sm text-on-surface-variant">Zero-compromise compliance standards.</p>
        </div>
        <div className="text-center">
        <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-6">
        <span className="material-symbols-outlined text-3xl text-primary">handshake</span>
        </div>
        <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Strategic</h4>
        <p className="font-label-sm text-label-sm text-on-surface-variant">Long-term institutional partnerships.</p>
        </div>
        </div>
        </div>
        </section>
        
        <section className="py-10 md:py-16 lg:py-20 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop max-w-container-max mx-auto">
        <div className="relative rounded-[2rem] overflow-hidden bg-primary p-8 sm:p-12 md:p-16 lg:p-20 text-center">
        <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-cover bg-center" data-alt="An abstract corporate background with subtle glowing network nodes and lines representing connectivity and industrial synergy. Deep blue and gold tones with high contrast and professional finish." style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuCfyclB2Ocwk-wKkfBFNhOyxcziLrxWahdlW8dSDiG4HPFxEkEFkAJmJr4K5zwzXEQ-9WvtoQuqVddKn-176XHeJCPCcZtAz5NSGfXbsdhJ35eYgcLwB63yQ9Kq_d_Wkm5JGEhmdRAMqvfrhWVszbzX3A5PwVZlxMPuMQ9xAfxQ68G18I7ygfBA0p7ykSOAe0an-iEu_k5waZlHZjPNhjAyVr34hQ1FNfMQhSwa845ghk9_wRUmt4Uw\')' }}></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6">Consult with Our Industry Experts</h2>
        <p className="font-body-lg text-body-lg text-white/80 mb-10">Let's discuss how we can transform your institutional compliance and operational strategy.</p>
        <button className="px-10 py-4 bg-secondary text-white rounded-full font-label-md text-label-md shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all">
                                Schedule a Consultation
                            </button>
        </div>
        </div>
        </section>
        </main>
      </>
    </Layout>
  )
}
