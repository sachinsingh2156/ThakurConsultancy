import Layout from '../components/layout/Layout'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function HomePage() {
  useScrollReveal()

  return (
    <Layout activeItem="home" variant="default" ctaLabel="Get Started">
      <>
        <section className="relative min-h-[100svh] md:h-screen flex items-center pt-20 md:pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
        <img alt="Hero background" className="w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIKurL9Q4fe7MTr677o4gkRgqb7AMDE4_S5bkmycxiLHd33DY-0lJn62QcJIMBokclKMExVd_t6NY_fWpQC1hbuskG56Ebz9oTkui1wQBfvg5LNWH7fTrpxbqRYblKelroIdAGpeJGzM7K7p81lpvi7Z7UXmbIcoU1vbLV94RPPuZWxEZTIojPqMI-EHQff0D3bl3BGva3yXo7L3Q_b36OnDcZn-cc8D835aMGkIV9ax73CqIudE5S" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 md:via-primary/40 to-primary/60 md:to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop w-full py-12 md:py-0">
        <div className="max-w-2xl space-y-4 md:space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/30 border border-secondary/20 backdrop-blur-sm">
        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
        <span className="text-secondary font-label-sm text-label-sm uppercase tracking-wider">Premier Consulting in New Delhi</span>
        </div>
        <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-white leading-tight">
                            Complete HR, Compliance & Accounting Solutions for Your Business
                        </h1>
        <p className="text-body-md md:text-body-lg font-body-lg text-white/80 leading-relaxed">
                            Empowering Indian enterprises with institutional-grade compliance management, strategic HR operations, and transparent accounting frameworks.
                        </p>
        <div className="flex flex-col xs:flex-row flex-wrap gap-3 md:gap-4 pt-2 md:pt-4">
        <button className="bg-secondary-fixed text-on-secondary-fixed px-6 md:px-8 py-3 md:py-4 rounded-lg font-label-md text-label-md hover:brightness-110 transition-all shadow-xl hover:-translate-y-1 w-full xs:w-auto text-center">
                                Get Free Consultation
                            </button>
        <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-label-md text-label-md hover:bg-white/20 transition-all w-full xs:w-auto text-center">
                                Our Services
                            </button>
        </div>
        </div>
        </div>
        </section>
        
        <section className="relative -mt-8 md:-mt-16 z-20 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop max-w-container-max mx-auto">
        <div className="glass-card rounded-xl p-6 sm:p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-gutter text-center border-white/50">
        <div className="space-y-1">
        <div className="text-headline-sm md:text-headline-md font-headline-md text-primary" id="stat-clients">500+</div>
        <div className="text-label-md font-label-md text-on-surface-variant uppercase tracking-widest">Active Clients</div>
        </div>
        <div className="space-y-1">
        <div className="text-headline-sm md:text-headline-md font-headline-md text-primary" id="stat-years">15+</div>
        <div className="text-label-md font-label-md text-on-surface-variant uppercase tracking-widest">Years Expertise</div>
        </div>
        <div className="space-y-1">
        <div className="text-headline-sm md:text-headline-md font-headline-md text-primary" id="stat-compliance">98%</div>
        <div className="text-label-md font-label-md text-on-surface-variant uppercase tracking-widest">Compliance Rate</div>
        </div>
        <div className="space-y-1">
        <div className="text-headline-sm md:text-headline-md font-headline-md text-primary" id="stat-experts">40+</div>
        <div className="text-label-md font-label-md text-on-surface-variant uppercase tracking-widest">Senior Advisors</div>
        </div>
        </div>
        </section>
        
        <section className="py-12 md:py-16 lg:py-24 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop max-w-container-max mx-auto reveal active" id="services">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <h2 className="text-headline-sm md:text-headline-md font-headline-md text-primary">Core Specializations</h2>
        <p className="text-body-md font-body-md text-on-surface-variant">We provide a holistic ecosystem of corporate services designed to streamline your operations and mitigate risks.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        
        <div className="glass-card p-8 rounded-xl group hover:bg-primary transition-all duration-500 cursor-pointer border-white/20 hover:scale-[1.02]">
        <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
        <span className="material-symbols-outlined text-primary group-hover:text-white" data-icon="groups">groups</span>
        </div>
        <h3 className="text-headline-sm font-headline-sm text-primary group-hover:text-white mb-3">HR Solutions</h3>
        <p className="text-on-surface-variant group-hover:text-white/80 font-body-md mb-6">From payroll outsourcing to strategic talent acquisition and performance management.</p>
        <div className="text-primary group-hover:text-white font-label-md flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                            Learn More <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
        </div>
        </div>
        
        <div className="glass-card p-8 rounded-xl group hover:bg-primary transition-all duration-500 cursor-pointer border-white/20 hover:scale-[1.02]">
        <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
        <span className="material-symbols-outlined text-primary group-hover:text-white" data-icon="gavel">gavel</span>
        </div>
        <h3 className="text-headline-sm font-headline-sm text-primary group-hover:text-white mb-3">Compliance</h3>
        <p className="text-on-surface-variant group-hover:text-white/80 font-body-md mb-6">Navigating ESI, PF, LWF, and other statutory regulations with precision and zero penalties.</p>
        <div className="text-primary group-hover:text-white font-label-md flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                            Learn More <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
        </div>
        </div>
        
        <div className="glass-card p-8 rounded-xl group hover:bg-primary transition-all duration-500 cursor-pointer border-white/20 hover:scale-[1.02]">
        <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
        <span className="material-symbols-outlined text-primary group-hover:text-white" data-icon="account_balance">account_balance</span>
        </div>
        <h3 className="text-headline-sm font-headline-sm text-primary group-hover:text-white mb-3">Taxation</h3>
        <p className="text-on-surface-variant group-hover:text-white/80 font-body-md mb-6">End-to-end accounting, GST filings, and strategic income tax planning for enterprises.</p>
        <div className="text-primary group-hover:text-white font-label-md flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                            Learn More <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
        </div>
        </div>
        
        <div className="glass-card p-8 rounded-xl group hover:bg-primary transition-all duration-500 cursor-pointer border-white/20 hover:scale-[1.02]">
        <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
        <span className="material-symbols-outlined text-primary group-hover:text-white" data-icon="insights">insights</span>
        </div>
        <h3 className="text-headline-sm font-headline-sm text-primary group-hover:text-white mb-3">Consulting</h3>
        <p className="text-on-surface-variant group-hover:text-white/80 font-body-md mb-6">Strategic advisory for business setup, mergers, and corporate restructuring initiatives.</p>
        <div className="text-primary group-hover:text-white font-label-md flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                            Learn More <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
        </div>
        </div>
        </div>
        </section>
        
        <section className="py-12 md:py-16 lg:py-24 bg-surface-container-low reveal active" id="about">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        <div className="relative">
        <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10">
        <img className="w-full h-full object-cover" data-alt="A professional business team in a high-rise New Delhi office overlooking the city skyline, discussing corporate strategies in a sleek, glass-walled conference room. The atmosphere is sophisticated and authoritative, with a clean light-mode palette of whites and deep blues. Soft sunlight filters through floor-to-ceiling windows, highlighting the modern, prestige-tech interior design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC2MamfsgC3i5CnJxk4MgQUbcyUs2k8Vj2BT4Z4K8CgDbUP3O59INb0X38bGmUlPC-zwe_ixssU48JRSerh3UqKbM44oIeWJPl8Y-mCtmL7adnBJequBAjolfZByLDZZxEPCbVdAzdzJ_NGQlNsnDVMEY2-a3P6QD7Vh93IR3fLkvEeasrgHxA4BbqkpWUSXaK-nsQDfMqY3hNk-390S8du3fFQxALfSpmZaUbmeQLfa3B3C-s9gYn" />
        </div>
        <div className="absolute -bottom-6 -right-6 w-48 h-48 golden-gradient rounded-2xl -z-0 opacity-20 blur-2xl"></div>
        <div className="absolute top-8 left-8 glass-card p-6 rounded-xl z-20 max-w-[200px]">
        <div className="text-primary font-bold text-headline-sm">ISO 9001</div>
        <div className="text-on-surface-variant text-label-sm">Certified Excellence in Quality Management</div>
        </div>
        </div>
        <div className="space-y-8">
        <div className="space-y-4">
        <h2 className="text-headline-sm md:text-headline-md font-headline-md text-primary">Why Leading Enterprises Choose Thakur Consultancy</h2>
        <p className="text-body-md font-body-md text-on-surface-variant">We bridge the gap between complex Indian regulations and seamless business execution. Our localized expertise in New Delhi combined with international service standards makes us the partner of choice.</p>
        </div>
        <ul className="space-y-6">
        <li className="flex gap-4">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center">
        <span className="material-symbols-outlined text-on-secondary-container text-[18px]" data-icon="check">check</span>
        </div>
        <div>
        <h4 className="font-bold text-primary">Unmatched Regional Expertise</h4>
        <p className="text-on-surface-variant text-body-md">Deep roots in the New Delhi regulatory landscape for faster approvals.</p>
        </div>
        </li>
        <li className="flex gap-4">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center">
        <span className="material-symbols-outlined text-on-secondary-container text-[18px]" data-icon="verified_user">verified_user</span>
        </div>
        <div>
        <h4 className="font-bold text-primary">100% Risk Mitigation</h4>
        <p className="text-on-surface-variant text-body-md">Our proactive compliance checks ensure you stay ahead of legal changes.</p>
        </div>
        </li>
        <li className="flex gap-4">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center">
        <span className="material-symbols-outlined text-on-secondary-container text-[18px]" data-icon="lock">lock</span>
        </div>
        <div>
        <h4 className="font-bold text-primary">Data Integrity & Privacy</h4>
        <p className="text-on-surface-variant text-body-md">Secure infrastructure for managing sensitive financial and employee data.</p>
        </div>
        </li>
        </ul>
        </div>
        </div>
        </section>
        
        <section className="py-12 md:py-16 lg:py-24 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop max-w-container-max mx-auto reveal active">
        <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-headline-sm md:text-headline-md font-headline-md text-primary">Our Transparent Approach</h2>
        </div>
        <div className="relative">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant/30 -translate-y-1/2 z-0"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        <div className="glass-card p-6 rounded-xl text-center space-y-4 border-white/40">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary flex items-center justify-center text-white text-headline-sm font-bold shadow-lg">1</div>
        <h3 className="font-bold text-primary">Consult</h3>
        <p className="text-on-surface-variant text-label-sm">Detailed analysis of your current business infrastructure and pain points.</p>
        </div>
        <div className="glass-card p-6 rounded-xl text-center space-y-4 border-white/40">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary flex items-center justify-center text-white text-headline-sm font-bold shadow-lg">2</div>
        <h3 className="font-bold text-primary">Strategize</h3>
        <p className="text-on-surface-variant text-label-sm">Custom framework design for HR, Tax, and Compliance synchronization.</p>
        </div>
        <div className="glass-card p-6 rounded-xl text-center space-y-4 border-white/40">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary flex items-center justify-center text-white text-headline-sm font-bold shadow-lg">3</div>
        <h3 className="font-bold text-primary">Implement</h3>
        <p className="text-on-surface-variant text-label-sm">Seamless transition and setup of all managed corporate services.</p>
        </div>
        <div className="glass-card p-6 rounded-xl text-center space-y-4 border-white/40">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary flex items-center justify-center text-white text-headline-sm font-bold shadow-lg">4</div>
        <h3 className="font-bold text-primary">Monitor</h3>
        <p className="text-on-surface-variant text-label-sm">Ongoing optimization, reporting, and proactive compliance updates.</p>
        </div>
        </div>
        </div>
        </section>
        
        <section className="py-12 md:py-16 lg:py-24 bg-primary text-white overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <div className="mb-12">
        <h2 className="text-headline-md font-headline-md">Trusted by C-Suite Executives</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-gutter items-center">
        <div className="space-y-8">
        <div className="text-display-lg-mobile italic opacity-80 leading-relaxed">
                                "Thakur Consultancy transformed our HR operations from a chaotic liability into a strategic asset. Their compliance expertise is unrivaled in the Delhi-NCR region."
                            </div>
        <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-secondary-fixed">
        <img className="w-full h-full object-cover" data-alt="A professional headshot of a mature male executive with a confident smile, wearing a tailored navy suit. The lighting is soft and flattering, with a blurred high-end office background. The image has a premium, corporate aesthetic, clean and authoritative, fitting a top-tier consultancy website." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFd0HZLOKD1HLyn7SEaKi7yTitto8RnzC7Lcz_-JJroDUjB21qU-hz8QDCrN-U22lm6tlNyccwBePgL2Y1FIdNXySLwpT4YkbcT9yMGtovedM6_YMuOrnaQLeH6VnAmN3SCJHynW4WCtav1RcD_olWiFPsDn4NwzPQtmZksEqth7PVmWRmPlq9_HEHSmDEjwppmJJBWbgK-FZ5MEvRPW1--Cm-LB3rMH3mACLywDKJpnFjKhBQKjLU" />
        </div>
        <div>
        <div className="font-bold text-headline-sm">Amit Sharma</div>
        <div className="text-secondary-fixed-dim text-label-md">Managing Director, North India Logistics</div>
        </div>
        </div>
        </div>
        <div className="hidden md:block relative">
        <div className="absolute inset-0 bg-secondary blur-3xl opacity-20"></div>
        <div className="relative glass-card border-white/10 p-12 rounded-2xl bg-white/5 backdrop-blur-xl">
        <span className="material-symbols-outlined text-display-lg text-secondary-fixed" data-icon="format_quote" style={{ fontVariationSettings: '\'FILL\' 1' }}>format_quote</span>
        <div className="mt-4 space-y-4">
        <div className="flex gap-1 text-secondary-fixed">
        <span className="material-symbols-outlined" data-icon="star" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
        <span className="material-symbols-outlined" data-icon="star" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
        <span className="material-symbols-outlined" data-icon="star" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
        <span className="material-symbols-outlined" data-icon="star" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
        <span className="material-symbols-outlined" data-icon="star" style={{ fontVariationSettings: '\'FILL\' 1' }}>star</span>
        </div>
        <p className="text-body-md text-white/70 italic">"They handle our entire PF and ESI portfolio with zero discrepancies for over 8 years now. Absolute peace of mind."</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
        
        <section className="py-12 border-y border-outline-variant/30 bg-surface">
        <div className="marquee">
        <div className="marquee-content">
        <div className="flex items-center gap-4 text-outline font-bold uppercase tracking-tighter text-headline-sm opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">ISO 9001:2015</div>
        <div className="flex items-center gap-4 text-outline font-bold uppercase tracking-tighter text-headline-sm opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">MSME REGISTERED</div>
        <div className="flex items-center gap-4 text-outline font-bold uppercase tracking-tighter text-headline-sm opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">NASSCOM PARTNER</div>
        <div className="flex items-center gap-4 text-outline font-bold uppercase tracking-tighter text-headline-sm opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">CII MEMBER</div>
        <div className="flex items-center gap-4 text-outline font-bold uppercase tracking-tighter text-headline-sm opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">ISO 27001</div>
        <div className="flex items-center gap-4 text-outline font-bold uppercase tracking-tighter text-headline-sm opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">FICCI AFFILIATE</div>
        </div>
        
        <div className="marquee-content">
        <div className="flex items-center gap-4 text-outline font-bold uppercase tracking-tighter text-headline-sm opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">ISO 9001:2015</div>
        <div className="flex items-center gap-4 text-outline font-bold uppercase tracking-tighter text-headline-sm opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">MSME REGISTERED</div>
        <div className="flex items-center gap-4 text-outline font-bold uppercase tracking-tighter text-headline-sm opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">NASSCOM PARTNER</div>
        <div className="flex items-center gap-4 text-outline font-bold uppercase tracking-tighter text-headline-sm opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">CII MEMBER</div>
        <div className="flex items-center gap-4 text-outline font-bold uppercase tracking-tighter text-headline-sm opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">ISO 27001</div>
        <div className="flex items-center gap-4 text-outline font-bold uppercase tracking-tighter text-headline-sm opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">FICCI AFFILIATE</div>
        </div>
        </div>
        </section>
        
        <section className="py-12 md:py-16 lg:py-24 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop max-w-container-max mx-auto reveal active">
        <div className="flex justify-between items-end mb-12">
        <div className="max-w-xl">
        <h2 className="text-headline-sm md:text-headline-md font-headline-md text-primary">Strategic Insights</h2>
        <p className="text-on-surface-variant text-body-md mt-2">Latest updates on Indian labor laws, taxation shifts, and HR best practices.</p>
        </div>
        <a className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline" href="#">View All Articles <span className="material-symbols-outlined" data-icon="north_east">north_east</span></a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="group cursor-pointer">
        <div className="aspect-[16/10] rounded-xl overflow-hidden mb-6">
        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A close-up of a modern office desk with a digital tablet showing financial charts and a pair of professional glasses. The lighting is crisp and bright, with subtle hints of blue and gold. The overall aesthetic is professional, clean, and forward-thinking, suggesting strategic insight and analytical precision for a business consultancy blog." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_bsp0BDXNTFUNwYv6LePSDu1Dqj18wMhUhp77dKrrmwhc4HBIL8Eb6WFZDCq33KVgcK1aUfAkyQEN8mAmoQKiODs4yED-JRA1dYnu6BfxP2x9HX0HPiNSV996vCP5pO1NCtvqUgvZc6OnJa_Tl-kVsXvOxPV2D-MkbKEAf7spV8A0BUj31J9f_tvMpXkVTxz93_xlrXWmJafkmeR6CTVKuthP9z8UbO4IPT8heTaRyQdC9YfwAMQP" />
        </div>
        <div className="text-secondary font-label-md text-label-md mb-2">Compliance Update</div>
        <h3 className="text-headline-sm font-headline-sm text-primary group-hover:text-secondary transition-colors mb-4">New Labor Code 2024: Impact on Payroll & Gratuity</h3>
        <p className="text-on-surface-variant text-body-md line-clamp-2">Understanding the structural changes required in employee compensation to remain compliant with the upcoming legislative shifts.</p>
        </div>
        <div className="group cursor-pointer">
        <div className="aspect-[16/10] rounded-xl overflow-hidden mb-6">
        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A diverse group of corporate professionals collaborating around a large touchscreen table in a bright, futuristic workspace. The scene is rendered in high-definition with a focus on teamwork and technology. Warm light accents the space, complementing a professional color palette of deep blue and silver. The mood is energetic and expert-led." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgxlcsGqoiRV7LKC0BaDnW6Wr--LOv6wfIajXn5T1x9y6rLGqqVPqpdMZSf4U3nPp4ap0NROVEKOA1haLd0GZcRui1y4B8UBhm-9kic7Va5qJQ_5AsxgaMqN3vPeKVpdAYN0le8cOEyAnY6_aZWO3f6QvDS2bggN8AjNumFee9Hd-r1xsDToox43V6nKbhEIn7fCdJ471my8rRrobyiUeik9nCrg2sxpqsRm0GcTWGxl7szbr1O60a" />
        </div>
        <div className="text-secondary font-label-md text-label-md mb-2">HR Strategy</div>
        <h3 className="text-headline-sm font-headline-sm text-primary group-hover:text-secondary transition-colors mb-4">Talent Retention in the Competitive Delhi-NCR Market</h3>
        <p className="text-on-surface-variant text-body-md line-clamp-2">How enterprises can build resilient work cultures and performance-linked incentive frameworks to reduce attrition rates.</p>
        </div>
        <div className="group cursor-pointer">
        <div className="aspect-[16/10] rounded-xl overflow-hidden mb-6">
        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A clean, minimalist representation of a financial ledger and a modern calculator on a white surface, bathed in soft afternoon light. The composition is elegant and simple, conveying trust, accuracy, and professional care in accounting. The color scheme is light-mode, with subtle blue shadows and gold-tone metallic accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuANgA6jWk7aV8GrrD92tCxnUw2pVwr8u5ZCSkiGG-JrvX1RMJV3xIrZIRxdWxQKJ7ykYW3DZ_40NgzjIHrCXXTfIqFnBjSL0CjlgTP9fimQcV-xyOkmosAnZcucJHfhssyzmU_oBelmHeOqWukUOq1L9CE1sJT4Y3mpvLxC-1jM53XT_ICE02Mks5LJzD9jzwZinShLgIado8kTAMWaBuDFP4l_LL--cPSSKBmUQdEzeahVb58UlZs1" />
        </div>
        <div className="text-secondary font-label-md text-label-md mb-2">Taxation</div>
        <h3 className="text-headline-sm font-headline-sm text-primary group-hover:text-secondary transition-colors mb-4">Optimizing Corporate Tax via Strategic GST Credits</h3>
        <p className="text-on-surface-variant text-body-md line-clamp-2">A technical guide for CFOs on maximizing input tax credit efficiency while maintaining full regulatory alignment.</p>
        </div>
        </div>
        </section>
        
        <section className="py-12 md:py-16 lg:py-24 bg-surface-container-high reveal active">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <h2 className="text-headline-sm md:text-headline-md font-headline-md text-primary text-center mb-12">Expert Answers to Common Queries</h2>
        <div className="space-y-4">
        <details className="group glass-card rounded-xl border-white/50 p-6 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex justify-between items-center cursor-pointer list-none">
        <span className="text-body-lg font-bold text-primary">What industries do you specialize in?</span>
        <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform" data-icon="expand_more">expand_more</span>
        </summary>
        <div className="mt-4 text-on-surface-variant text-body-md border-t border-outline-variant/30 pt-4">
                                We cater to a diverse range of sectors including IT/ITeS, Logistics, Manufacturing, Retail, and BFSI. Our team is particularly skilled in managing the unique compliance hurdles of the service sector and labor-intensive industries in North India.
                            </div>
        </details>
        <details className="group glass-card rounded-xl border-white/50 p-6 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex justify-between items-center cursor-pointer list-none">
        <span className="text-body-lg font-bold text-primary">Do you handle government inspections?</span>
        <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform" data-icon="expand_more">expand_more</span>
        </summary>
        <div className="mt-4 text-on-surface-variant text-body-md border-t border-outline-variant/30 pt-4">
                                Yes, our dedicated liaison team represents our clients during statutory inspections and audits by labor commissioners, PF, or ESI authorities, ensuring all records are presented professionally and accurately.
                            </div>
        </details>
        <details className="group glass-card rounded-xl border-white/50 p-6 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex justify-between items-center cursor-pointer list-none">
        <span className="text-body-lg font-bold text-primary">How do you ensure data confidentiality?</span>
        <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform" data-icon="expand_more">expand_more</span>
        </summary>
        <div className="mt-4 text-on-surface-variant text-body-md border-t border-outline-variant/30 pt-4">
                                We employ enterprise-level encryption for all digital assets and strictly adhere to ISO 27001 standards. Physical documents are stored in fire-proof, restricted-access vaults with 24/7 surveillance.
                            </div>
        </details>
        </div>
        </div>
        </section>
        
        <section className="py-10 md:py-16 lg:py-20 px-margin-mobile md:px-margin-tablet lg:px-margin-desktop reveal active">
        <div className="max-w-container-max mx-auto glass-card rounded-3xl p-6 sm:p-10 md:p-16 text-center bg-primary text-white overflow-hidden relative">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary-fixed opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary-fixed opacity-10 rounded-full blur-3xl"></div>
        <div className="relative z-10 space-y-6">
        <h2 className="text-display-lg-mobile md:text-display-lg font-display-lg">Ready to Institutionalize Your Corporate Operations?</h2>
        <p className="text-body-lg opacity-80 max-w-2xl mx-auto">Join hundreds of successful businesses in New Delhi who trust us for their HR, tax, and compliance needs.</p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
        <button className="bg-secondary-fixed text-on-secondary-fixed px-10 py-5 rounded-lg font-label-md text-label-md hover:brightness-110 transition-all shadow-xl">
                                Schedule a Strategy Call
                            </button>
        <button className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-lg font-label-md text-label-md hover:bg-white/10 transition-all">
                                Download Portfolio
                            </button>
        </div>
        </div>
        </div>
        </section>
      </>
    </Layout>
  )
}
