import Layout from '../components/layout/Layout'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function BlogPage() {
  useScrollReveal()

  return (
    <Layout activeItem="blog" variant="default" ctaLabel="Get Started">
      <>
        <main className="pt-24 pb-20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        
        <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center bg-secondary-container/20 rounded-2xl sm:rounded-full px-4 py-3 sm:py-2 border border-secondary/10 overflow-hidden gap-2 sm:gap-0">
        <span className="bg-secondary text-on-secondary px-3 py-1 rounded-full text-label-sm whitespace-nowrap shrink-0">TRENDING NEWS</span>
        <div className="flex gap-8 sm:gap-12 animate-marquee whitespace-nowrap overflow-hidden w-full">
        <p className="text-label-md text-on-secondary-container">New GST E-Invoicing Thresholds effective from next quarter.</p>
        <p className="text-label-md text-on-secondary-container">Supreme Court Ruling on Provident Fund Contributions updated.</p>
        <p className="text-label-md text-on-secondary-container">Factory Act Safety Compliance Audit Checklist for 2024 Released.</p>
        </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        
        <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
        <a className="shrink-0 px-4 py-2 bg-secondary-container text-on-secondary-container rounded-lg font-label-md font-bold whitespace-nowrap" href="#">GST</a>
        <a className="shrink-0 px-4 py-2 bg-surface-container-high text-on-surface-variant rounded-lg font-label-md whitespace-nowrap" href="#">HR Updates</a>
        <a className="shrink-0 px-4 py-2 bg-surface-container-high text-on-surface-variant rounded-lg font-label-md whitespace-nowrap" href="#">Labour Law</a>
        <a className="shrink-0 px-4 py-2 bg-surface-container-high text-on-surface-variant rounded-lg font-label-md whitespace-nowrap" href="#">Compliance</a>
        </div>

        <aside className="hidden lg:block lg:col-span-3">
        <div className="bg-surface-container-low/90 backdrop-blur-md rounded-xl h-fit lg:sticky lg:top-24 border border-white/20 shadow-[0_30px_40px_rgba(0,45,114,0.08)] p-6">
        <h3 className="font-display-lg text-primary text-headline-sm mb-1">Resource Center</h3>
        <p className="text-on-surface-variant text-label-sm mb-6">Expert Regulatory Insights</p>
        <div className="flex flex-col gap-2">
        <a className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all hover:translate-x-1" href="#">
        <span className="material-symbols-outlined" data-icon="groups">groups</span>
        <span className="font-label-md">HR Updates</span>
        </a>
        <a className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all hover:translate-x-1" href="#">
        <span className="material-symbols-outlined" data-icon="gavel">gavel</span>
        <span className="font-label-md">Labour Law</span>
        </a>
        <a className="flex items-center gap-3 p-3 bg-secondary-container text-on-secondary-container rounded-lg font-bold" href="#">
        <span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
        <span className="font-label-md">GST</span>
        </a>
        <a className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all hover:translate-x-1" href="#">
        <span className="material-symbols-outlined" data-icon="payments">payments</span>
        <span className="font-label-md">Income Tax</span>
        </a>
        <a className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all hover:translate-x-1" href="#">
        <span className="material-symbols-outlined" data-icon="verified_user">verified_user</span>
        <span className="font-label-md">Compliance</span>
        </a>
        <a className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all hover:translate-x-1" href="#">
        <span className="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>
        <span className="font-label-md">Payroll</span>
        </a>
        <a className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all hover:translate-x-1" href="#">
        <span className="material-symbols-outlined" data-icon="factory">factory</span>
        <span className="font-label-md">Factory Act</span>
        </a>
        <a className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all hover:translate-x-1" href="#">
        <span className="material-symbols-outlined" data-icon="fact_check">fact_check</span>
        <span className="font-label-md">Audit</span>
        </a>
        </div>
        <div className="mt-8 pt-8 border-t border-outline-variant/30">
        <div className="bg-primary-container p-6 rounded-xl relative overflow-hidden group cursor-pointer">
        <div className="relative z-10">
        <h4 className="text-secondary-fixed font-bold mb-2">Subscribe to Alerts</h4>
        <p className="text-on-primary-container text-label-sm mb-4">Never miss a regulatory deadline again.</p>
        <button className="w-full bg-secondary-container text-on-secondary-container py-2 rounded font-label-md transition-all group-hover:scale-[1.02]">Sign Up</button>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-10 scale-150 transition-transform group-hover:rotate-12">
        <span className="material-symbols-outlined text-[120px]" data-icon="notifications">notifications</span>
        </div>
        </div>
        </div>
        </div>
        </aside>
        
        <div className="lg:col-span-9 min-w-0">
        
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-2">Regulatory Insights</h1>
        <p className="text-body-lg text-on-surface-variant max-w-xl">Deep-dive analysis and actionable intelligence on Indian business compliance.</p>
        </div>
        <div className="relative w-full md:w-80 group">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors" data-icon="search">search</span>
        <input className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Search insights..." type="text" />
        </div>
        </div>
        
        <section className="mb-16">
        <div className="relative rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[21/9] group cursor-pointer shadow-[0_30px_60px_rgba(0,45,114,0.15)]">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A professional high-angle shot of a modern glass skyscraper boardroom in New Delhi at sunset. The interior shows a long polished mahogany table with digital tablets, reflecting a sophisticated corporate environment. The lighting is warm and golden, contrasting with deep blue evening shadows outside. The mood is one of quiet authority and high-level strategy." style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBLVXKu85W9DLESNQXIiB8HQu92UBmoIqBYEQ4hv2Q_wYuG-EWgsnaYtBsLpbAU-Xk8JRcyb5BFYXPY-RCUCGQH3kqrwykarFCKhd0ZcCC5dp5peBC4qmP3yfRk4nw-oHKUt3TRADZYRUqGFiasWYX4xzJJ9zYqH-yz8MDYLgFX9kMcT9-LdMwOdVtZUTIP8nC0O26iCzQYrX_V1NXcBX4fi0In2XREATfwDqEzOgFuV8_0XrHwxgqI\')' }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3">
        <span className="bg-secondary-fixed text-on-secondary-fixed px-4 py-1.5 rounded-full text-label-sm mb-4 inline-block shadow-lg">EXPERT ANALYSIS</span>
        <h2 className="font-display-lg text-white text-display-lg-mobile md:text-headline-md mb-4 group-hover:text-secondary-fixed transition-colors">The Future of Labour Law 2024: Navigating the New Industrial Relations Code</h2>
        <p className="text-on-primary-container text-body-md line-clamp-2 mb-6 opacity-90">An exhaustive guide on how the upcoming reforms will impact manufacturing sectors and what business leaders must do today to ensure total compliance.</p>
        <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
        <img className="w-full h-full object-cover" data-alt="Close-up portrait of a mature male consultant in a charcoal gray bespoke suit and light blue shirt. He has a calm, professional demeanor with silver hair and a subtle confident smile. The background is a blurred high-end office with soft window light. Sovereign Enterprise aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxv8aj-EUCrEB-MkAI4wLs-99MHIzWfeZubXsELhxhaV309aJ3OMtiA3xyuUAeUvtDtiRIcerkxryvbHlQ-9YzcNrrIX1mHYtQ5MLHULwuC8uT92kwcQbuF6xJ5ylvoqRyIJmj1ys39Z9mKRQ3u-f5zOx9mkI1OcM9eXG_xBO0mEsq3ska8eIUBv5djF3vD8dcqozCyd7FGvTRC3ezuphk48yKEGroljdz8K7VFDEuNQkq5Q7qXG5N" />
        </div>
        <div className="text-white">
        <p className="font-label-md">Vikram Thakur</p>
        <p className="text-[12px] opacity-70 italic">Senior Compliance Partner • 12 Min Read</p>
        </div>
        </div>
        </div>
        </div>
        </section>
        
        <section>
        <div className="flex items-center justify-between mb-8">
        <h3 className="font-display-lg text-primary text-headline-sm">Recent Intelligence</h3>
        <div className="flex gap-2">
        <button className="p-2 border border-outline-variant rounded-full hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span></button>
        <button className="p-2 border border-outline-variant rounded-full hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span></button>
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <article className="glass-card rounded-2xl rim-light shadow-[0_20px_40px_rgba(0,45,114,0.05)] hover:shadow-[0_30px_50px_rgba(0,45,114,0.1)] transition-all group duration-700 ease-out opacity-100 translate-y-0">
        <div className="h-56 relative rounded-t-2xl overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="A clean top-down view of a modern desk with a financial ledger, a gold-plated pen, and an tablet showing complex GST tax charts. The lighting is crisp and cool-toned, creating a highly organized and professional atmosphere. Soft ambient blue shadows highlight the textures of the high-quality stationery." style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBQCw5XKrCRw09QwKekJnMxY9ujew5pmJRdhV0aTJIIIW571GgLqsXALG06h6fLnrzx0YDfUMgSf8Qf8O16iIldaXBebVAgaMPJNgmwJY6C7-kS1cPq9Jwi7AknHCKL_BEUeVNbWQS7xmN1X08u9KFosHEDWTWhnZJ2qPxgP0xWyEnLL77ZC41Vugp1PccG3zQAIMO2qtsT2WDc3eRiZ1psOFTF4D_S4vdCOhojJseUBzyu0Dt7cWoF\')' }}></div>
        <div className="absolute top-4 left-4">
        <span className="bg-surface-bright/90 backdrop-blur-md text-primary px-3 py-1 rounded-lg text-label-sm font-bold border border-white/40">GST UPDATES</span>
        </div>
        </div>
        <div className="p-6">
        <div className="flex items-center justify-between mb-3">
        <time className="text-label-sm text-outline">Oct 24, 2023</time>
        <span className="material-symbols-outlined text-secondary text-sm" data-icon="bookmark">bookmark</span>
        </div>
        <h4 className="font-headline-sm text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">Navigating Reverse Charge Mechanisms in Service Contracts</h4>
        <p className="text-on-surface-variant text-body-md line-clamp-3 mb-6">Explore the complexities of GST reverse charge mechanisms for services sourced from unregistered vendors and international entities.</p>
        <div className="flex items-center justify-between border-t border-outline-variant/30 pt-6">
        <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full overflow-hidden">
        <img className="w-full h-full object-cover" data-alt="A professional portrait of a female tax expert, wearing a structured navy blazer and minimalist gold jewelry. She has a sharp, intelligent look and is standing in a brightly lit modern office. The background has a soft bokeh effect showing office plants and glass partitions. Professional business style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsHOya4_P0-GYLOqWxn8_DnPKmgpe_Awo-IiMn7iIB7l9HRU9wyoOfUh04fR3Po4s8_5z5umf_5zEcIBAqRFnGcYJitKnaHFY3M-7GUSHDtzT6DA-I-C7M5t5IT3CVeGz3zKx6-X2gehZ2ZkrzBJeTqZlFsr8wLHQd_9dYo602l9VnZbjVmSei97evmkTIOgJsAqu2k_ZP7hUjOsKkRBXERlxhHXuWXiV6mnbVkh5JtFjR3TulM-N7" />
        </div>
        <span className="font-label-md text-on-surface">Ananya Sharma</span>
        </div>
        <a className="text-primary font-bold text-label-md flex items-center group/link" href="#">
                                                    Read More <span className="material-symbols-outlined ml-1 group-hover/link:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
        </a>
        </div>
        </div>
        </article>
        
        <article className="glass-card rounded-2xl rim-light shadow-[0_20px_40px_rgba(0,45,114,0.05)] hover:shadow-[0_30px_50px_rgba(0,45,114,0.1)] transition-all group duration-700 ease-out opacity-100 translate-y-0">
        <div className="h-56 relative rounded-t-2xl overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="An abstract cinematic close-up of high-end machinery gears in a clean, modern factory. The lighting is metallic and sharp with deep blue highlights and golden rim lights. The scene suggests industrial precision and regulatory order, emphasizing structural integrity and technical excellence." style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuCriF1_hz-o-2FmEBswA6oIzk_UagRv7xp7Wj4db80nRy89u7DoBbmLoWKKaFblR--EPs_Dv6-kNTXaCu6rMG1_o_rq-_aVdEnIvg6K3nH6eiYT-ATUmnW_9_KxrvuPlzXR5WjAmWyDJCC2qZEw-NmSROrXuS8hzh5zpAACGp38XzoORuAYQBVd6OGIhnhJETDT2u4Dz0cH2PXiVgaNOhvktuxbfDeXZUlt967N-I_E-WiuPUBfdoZq\')' }}></div>
        <div className="absolute top-4 left-4">
        <span className="bg-surface-bright/90 backdrop-blur-md text-primary px-3 py-1 rounded-lg text-label-sm font-bold border border-white/40">FACTORY ACT</span>
        </div>
        </div>
        <div className="p-6">
        <div className="flex items-center justify-between mb-3">
        <time className="text-label-sm text-outline">Oct 18, 2023</time>
        <span className="material-symbols-outlined text-secondary text-sm" data-icon="bookmark">bookmark</span>
        </div>
        <h4 className="font-headline-sm text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">Mandatory Health & Safety Audits: A 2024 Readiness Check</h4>
        <p className="text-on-surface-variant text-body-md line-clamp-3 mb-6">Why traditional safety checklists are no longer sufficient under the new stringent regulatory environment for industrial units.</p>
        <div className="flex items-center justify-between border-t border-outline-variant/30 pt-6">
        <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full overflow-hidden">
        <img className="w-full h-full object-cover" data-alt="A portrait of a male safety inspector in a professional white laboratory coat with a hard hat tucked under his arm. He looks authoritative and knowledgeable, set against a backdrop of a clean, futuristic manufacturing facility. The overall feel is modern, sterile, and highly compliant." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKZsmO7Slam2Uikr6scvDNQHzTo8CPh-fAqSO2HdHKyscf3ZJmlnX3IGCd-u1Q7qpIhAFThxXJVp3XYtkUnn6VBEZrZcytap8bPtexls5FPbAT4-VhXpezrR1oJhMmR5H8R6NM0_5fRi_KTHHv4dEi8a6x7Ibu2ARQodMnxZijArvfTOslTkcGXHU1iPhN0zkNkQa-xTW3BzdszRkjxEKIpiQmlR_0xZQfm8jLYx0rOIfe54UVxPeR" />
        </div>
        <span className="font-label-md text-on-surface">Rajesh Malhotra</span>
        </div>
        <a className="text-primary font-bold text-label-md flex items-center group/link" href="#">
                                                    Read More <span className="material-symbols-outlined ml-1 group-hover/link:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
        </a>
        </div>
        </div>
        </article>
        
        <article className="glass-card rounded-2xl rim-light shadow-[0_20px_40px_rgba(0,45,114,0.05)] hover:shadow-[0_30px_50px_rgba(0,45,114,0.1)] transition-all group duration-700 ease-out opacity-100 translate-y-0">
        <div className="h-56 relative rounded-t-2xl overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="A macro shot of a gold fountain pen writing on high-quality cream parchment paper. The focus is extremely shallow, highlighting the elegant nib and the flow of ink. The surrounding environment is a dimly lit, luxurious library with leather-bound books. This represents the gravity and tradition of legal compliance and authority." style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuB5ZpJ4E008clUzX_UvyEk0KBIqqO0xD9Q-Z4FQcKc3zku9DyCuEXD_9-jQsy-nroPKELcBgsIitKmPHRrXj06DTIff9K8y9p8kneB_SM7BDu3H5OUPXrDZDgqMeYQ1jgi_nIlbaUQ0-sqtw4QSVZb_IzR9k8V-htzWCDnGZ8VT6mrNKZ11JnDHZO58gUhYZWaag1Vz8tEmCqiVyqx40bfT59fevQj30hBAah8T1QwfGyFz4Rx-ADMs\')' }}></div>
        <div className="absolute top-4 left-4">
        <span className="bg-surface-bright/90 backdrop-blur-md text-primary px-3 py-1 rounded-lg text-label-sm font-bold border border-white/40">LABOUR LAW</span>
        </div>
        </div>
        <div className="p-6">
        <div className="flex items-center justify-between mb-3">
        <time className="text-label-sm text-outline">Oct 12, 2023</time>
        <span className="material-symbols-outlined text-secondary text-sm" data-icon="bookmark">bookmark</span>
        </div>
        <h4 className="font-headline-sm text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">The Shift to Gig Work: Legal Implications for Enterprises</h4>
        <p className="text-on-surface-variant text-body-md line-clamp-3 mb-6">How the new Social Security Code redefines employee status for contract workers and gig economy participants.</p>
        <div className="flex items-center justify-between border-t border-outline-variant/30 pt-6">
        <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full overflow-hidden">
        <img className="w-full h-full object-cover" data-alt="Portrait of a young professional woman in business casual attire. She is smiling warmly yet exudes confidence and competence. She is holding a tablet and standing in a collaborative open-plan office space with natural sunlight. The color palette is light and airy, dominated by whites and soft blues." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhODp4QP0okcKWj2D5WKWjGUkLBiZ6_kn_DSdBcTSWJIB4l9TiXerEIoLazLd5hVHulpJ2sPOjKs2sGNVsmrfhX89Li4r7SvCj2fMa8dGqx8QsUeVnr0R6PtTIaYklcgMLxsVDIq95utAoNlRiDpuso7FyqElZRODGfzqqaBRV4Z1usgK6mbj-evKDOE56nBkEp4zAcMkbubrXtvNzXsw6XuEgY_rg_-BVTn1_deePfmeyvzRsUmT_" />
        </div>
        <span className="font-label-md text-on-surface">Priya Verma</span>
        </div>
        <a className="text-primary font-bold text-label-md flex items-center group/link" href="#">
                                                    Read More <span className="material-symbols-outlined ml-1 group-hover/link:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
        </a>
        </div>
        </div>
        </article>
        
        <article className="glass-card rounded-2xl rim-light shadow-[0_20px_40px_rgba(0,45,114,0.05)] hover:shadow-[0_30px_50px_rgba(0,45,114,0.1)] transition-all group duration-700 ease-out opacity-100 translate-y-0">
        <div className="h-56 relative rounded-t-2xl overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="A sophisticated data visualization dashboard displayed on a high-resolution curved monitor. The interface shows interconnected nodes of business compliance and risk management metrics in shades of navy blue and luminous gold. The lighting is dark-mode inspired with glowing elements, representing modern payroll and audit technology." style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBOH1mrz8GJHm2MBm7v_VnT9Xkodm5iYxZnHbvs-JnvkSwWxtB3tZasvNu8qXN8_Pe9l7q8k9SDgGWBmNLOGm9J09iOQaSDkSpERqRDWgpovCb8mEEAkqZgRaNopkwWixBYOFITz6fU0BKRCQyCGedVegHjHwZQiTrg2MJ2ryEqdT4dD3x4okO-ueYMNV-bCT04S7VoNXp5fy3xyGBDd95qVHkuk3h0mwD9GL6zpBUcCql4E9S89uQ_\')' }}></div>
        <div className="absolute top-4 left-4">
        <span className="bg-surface-bright/90 backdrop-blur-md text-primary px-3 py-1 rounded-lg text-label-sm font-bold border border-white/40">AUDIT</span>
        </div>
        </div>
        <div className="p-6">
        <div className="flex items-center justify-between mb-3">
        <time className="text-label-sm text-outline">Oct 05, 2023</time>
        <span className="material-symbols-outlined text-secondary text-sm" data-icon="bookmark">bookmark</span>
        </div>
        <h4 className="font-headline-sm text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">Mitigating Risk in Statutory Compliance Audits</h4>
        <p className="text-on-surface-variant text-body-md line-clamp-3 mb-6">A deep dive into the top 10 most common errors discovered during annual statutory compliance audits and how to prevent them.</p>
        <div className="flex items-center justify-between border-t border-outline-variant/30 pt-6">
        <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full overflow-hidden">
        <img className="w-full h-full object-cover" data-alt="A senior financial auditor in a dark navy tailored suit, looking over a pair of professional glasses. He has a very serious and authoritative expression. Behind him is a wall of organized archive boxes in a high-end, wood-paneled office. The aesthetic is extremely established and trustworthy." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAecIuSlgFtM6LvpNikB2T0duWgwlbJOck0KAYuG-IcpNDm_dm7Dq4dZ7IZZisMdzJQUJTyRhQbevA6kDNEaQE0KgFZJyJXEDfHMoAq_UWK99au_7sbYdvAEAOANLhbL4lIR_-9Rfv03FZqE89wSLObnO3JGA9c2OuBIb5ipLd4uSmyVpg_8KxjHX2Hs-n5-otCXK1okxAA3tyP9tHDrw_EkN3l3p2ck1OjEbIda7PUboR8YZt0dOFK" />
        </div>
        <span className="font-label-md text-on-surface">Sanjay Gupta</span>
        </div>
        <a className="text-primary font-bold text-label-md flex items-center group/link" href="#">
                                                    Read More <span className="material-symbols-outlined ml-1 group-hover/link:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
        </a>
        </div>
        </div>
        </article>
        </div>
        
        <div className="mt-16 flex justify-center">
        
        </div>
        </section>
        </div>
        </div>
        </div>
        
        <section className="mt-20 bg-primary py-10 md:py-16 lg:py-20 relative overflow-hidden">
        
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-secondary-fixed/5 rounded-full blur-3xl"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop text-center relative z-10">
        <div className="max-w-3xl mx-auto">
        <span className="text-secondary-fixed font-bold text-label-md tracking-widest uppercase mb-4 block">STAY COMPLIANT</span>
        <h2 className="font-display-lg text-white text-display-lg-mobile md:text-display-lg mb-6">Subscribe to Compliance Alerts</h2>
        <p className="text-on-primary/70 text-body-lg mb-10">Get the latest regulatory updates, legislative changes, and expert analysis delivered directly to your inbox every Monday morning.</p>
        <form className="flex flex-col md:flex-row gap-4 items-center justify-center">
        <div className="w-full md:flex-1 relative max-w-md">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-primary/40" data-icon="mail">mail</span>
        <input className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-on-primary/40 focus:ring-2 focus:ring-secondary/50 outline-none transition-all" placeholder="Business Email Address" type="email" />
        </div>
        <button className="w-full md:w-auto px-10 py-4 bg-secondary text-on-secondary rounded-xl font-display-lg font-bold hover:bg-secondary/90 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-black/20" type="submit">
                                    Capture Updates
                                </button>
        </form>
        <p className="mt-6 text-on-primary/40 text-label-sm">Join over 1,200+ C-suite executives who rely on our weekly intelligence. No spam, ever.</p>
        </div>
        </div>
        </section>
        </main>
      </>
    </Layout>
  )
}
