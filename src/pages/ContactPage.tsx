import Layout from '../components/layout/Layout'
import type { FormEvent } from 'react'

export default function ContactPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Thank you for your inquiry. Our team will contact you shortly.')
  }

  return (
    <Layout activeItem="contact" variant="default" ctaLabel="Get Started">
      <>
        <main className="pt-24 md:pt-32 pb-24">
        
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop mb-16 text-center md:text-left">
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4 leading-tight">Institutional <br className="hidden md:block" />Partnership & Support</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Connect with our dedicated compliance experts to navigate the complexities of corporate governance and HR operations in New Delhi.</p>
        </section>
        
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-5 space-y-8">
        <div className="glass-card p-8 rounded-xl border-l-4 border-secondary">
        <h2 className="font-headline-sm text-headline-sm text-primary mb-6">Corporate Office</h2>
        <div className="space-y-6">
        <div className="flex gap-4">
        <span className="material-symbols-outlined text-secondary text-3xl">location_on</span>
        <div>
        <p className="font-label-md text-label-md text-primary mb-1 uppercase tracking-wider">Address</p>
        <address className="not-italic font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                            16B, Ground Floor, Studio Apartment,<br />
                                            Sector-68B, Dwarka, New Delhi – 110078
                                        </address>
        </div>
        </div>
        <div className="flex gap-4">
        <span className="material-symbols-outlined text-secondary text-3xl">schedule</span>
        <div>
        <p className="font-label-md text-label-md text-primary mb-1 uppercase tracking-wider">Operational Hours</p>
        <p className="font-body-md text-body-md text-on-surface-variant">Mon-Sat, 9:00 AM - 6:30 PM</p>
        <p className="font-label-sm text-label-sm text-outline mt-1 italic">Closed on Gazetted Holidays</p>
        </div>
        </div>
        </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a className="glass-card p-6 rounded-xl flex items-center gap-4 hover:bg-white transition-custom group" href="tel:+910000000000">
        <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">call</span>
        <span className="font-label-md text-label-md">Direct Line</span>
        </a>
        <a className="glass-card p-6 rounded-xl flex items-center gap-4 hover:bg-white transition-custom group" href="mailto:contact@thakurconsultancy.com">
        <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">mail</span>
        <span className="font-label-md text-label-md">Email Support</span>
        </a>
        <a className="glass-card p-6 rounded-xl flex items-center gap-4 hover:bg-white transition-custom group" href="https://wa.me/910000000000">
        <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">chat</span>
        <span className="font-label-md text-label-md">WhatsApp Business</span>
        </a>
        <div className="glass-card p-6 rounded-xl flex items-center gap-4">
        <div className="flex gap-3">
        <a className="w-8 h-8 rounded-full bg-primary-container/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors" href="#">
        <span className="material-symbols-outlined text-sm">share</span>
        </a>
        <a className="w-8 h-8 rounded-full bg-primary-container/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors" href="#">
        <span className="material-symbols-outlined text-sm">person</span>
        </a>
        </div>
        <span className="font-label-md text-label-md">Follow Us</span>
        </div>
        </div>
        
        <div className="rounded-xl overflow-hidden shadow-xl aspect-video w-full bg-surface-container relative group">
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
        <div className="w-full h-full" data-location="Dwarka, New Delhi">
        <img className="w-full h-full object-cover" data-alt="A clean, professional minimalist digital map centered on the Dwarka Sector-68B area in New Delhi. The map features a sophisticated navy and gold color scheme consistent with a premium enterprise consultancy brand. It highlights major transit routes and landmarks with subtle, high-end iconography. The lighting is soft and even, suggesting a high-quality digital interface for executive use." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQSyStEiMiFy-0GHmhSku8sQw91YuXe-Fo3h4hXvvMduYHgjl7ED5VUkC4o3IP4WqN2vzgdfPnXCroyeIwusS7TCXoQcOH5oZc3UZqEX0ukd3EkVLk1TCqpE3WRmb4UiJvsw4hI0Ru5KUQnTRAj-XmQwcm_8bWUPwmbjb852uq2NVAkl7k2DMbf2RayRZMKqDTCC6BT-L6v6bDB0LEPCs_GszVugL9rC3laGulwYQg8M1RAxsIgEQt" />
        </div>
        <div className="absolute bottom-4 left-4 z-20 glass-card px-4 py-2 rounded-lg pointer-events-none">
        <p className="font-label-sm text-label-sm text-primary flex items-center gap-2">
        <span className="material-symbols-outlined text-xs">navigation</span>
                                    New Delhi HQ
                                </p>
        </div>
        </div>
        </div>
        
        <div className="lg:col-span-7">
        <div className="glass-card p-10 rounded-2xl relative overflow-hidden h-full">
        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16"></div>
        <h3 className="font-headline-md text-headline-sm md:text-headline-md text-primary mb-8">Service Inquiry</h3>
        <form className="space-y-6" id="contactForm" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative floating-label-input group">
        <input className="block w-full px-4 py-4 text-on-surface bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-custom font-body-md" id="full_name" placeholder=" " type="text" />
        <label className="absolute left-4 top-4 text-on-surface-variant font-label-md pointer-events-none transition-custom origin-left" htmlFor="full_name">Full Name</label>
        </div>
        <div className="relative floating-label-input group">
        <input className="block w-full px-4 py-4 text-on-surface bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-custom font-body-md" id="email_address" placeholder=" " type="email" />
        <label className="absolute left-4 top-4 text-on-surface-variant font-label-md pointer-events-none transition-custom origin-left" htmlFor="email_address">Corporate Email</label>
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative floating-label-input group">
        <input className="block w-full px-4 py-4 text-on-surface bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-custom font-body-md" id="company" placeholder=" " type="text" />
        <label className="absolute left-4 top-4 text-on-surface-variant font-label-md pointer-events-none transition-custom origin-left" htmlFor="company">Organization Name</label>
        </div>
        <div className="relative floating-label-input group">
        <select className="block w-full px-4 py-4 text-on-surface bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-custom font-body-md" id="interest">
        <option disabled  value="">Service of Interest</option>
        <option value="hr">HR Consultancy</option>
        <option value="compliance">Statutory Compliance</option>
        <option value="payroll">Payroll Management</option>
        <option value="audit">Legal Audit</option>
        </select>
        </div>
        </div>
        <div className="relative floating-label-input group">
        <textarea className="block w-full px-4 py-4 text-on-surface bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-custom font-body-md resize-none" id="message" placeholder=" " rows={4}></textarea>
        <label className="absolute left-4 top-4 text-on-surface-variant font-label-md pointer-events-none transition-custom origin-left" htmlFor="message">Tell us about your requirements</label>
        </div>
        <div className="flex items-center gap-3 py-2">
        <input className="rounded border-outline-variant text-primary focus:ring-primary h-5 w-5 not-empty" id="nda" type="checkbox" />
        <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="nda">Request a Non-Disclosure Agreement (NDA) for initial consultation</label>
        </div>
        <button className="gold-gradient w-full py-5 rounded-lg text-on-primary font-headline-sm text-center shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 group flex items-center justify-center gap-3" type="submit">
                                    Submit Inquiry
                                    <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
        </button>
        <p className="text-center font-label-sm text-label-sm text-outline">By submitting this form, you agree to our <a className="text-primary underline decoration-secondary" href="#">Privacy Policy</a> regarding data handling.</p>
        </form>
        </div>
        </div>
        </section>
        
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop mt-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div className="max-w-xl">
        <h2 className="font-headline-md text-headline-sm md:text-headline-md text-primary mb-4">Common Inquiries</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">Expedite your resolution by reviewing our frequently addressed administrative topics.</p>
        </div>
        <a className="font-label-md text-label-md text-primary flex items-center gap-2 group" href="#">
                            View Complete Knowledge Base
                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">open_in_new</span>
        </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-8 rounded-xl hover:shadow-xl transition-custom cursor-pointer border-t-2 border-transparent hover:border-secondary">
        <h4 className="font-label-md text-label-md text-primary mb-3">Onboarding Timeline</h4>
        <p className="font-body-md text-body-md text-on-surface-variant">Standard enterprise onboarding typically takes 7-14 business days post-agreement.</p>
        </div>
        <div className="glass-card p-8 rounded-xl hover:shadow-xl transition-custom cursor-pointer border-t-2 border-transparent hover:border-secondary">
        <h4 className="font-label-md text-label-md text-primary mb-3">Document Security</h4>
        <p className="font-body-md text-body-md text-on-surface-variant">All client data is encrypted and managed under ISO 27001 compliant protocols.</p>
        </div>
        <div className="glass-card p-8 rounded-xl hover:shadow-xl transition-custom cursor-pointer border-t-2 border-transparent hover:border-secondary">
        <h4 className="font-label-md text-label-md text-primary mb-3">Service Locations</h4>
        <p className="font-body-md text-body-md text-on-surface-variant">While headquartered in Dwarka, we provide Pan-India compliance and audit support.</p>
        </div>
        </div>
        </section>
        
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop mt-32">
        <div className="bg-primary-container text-on-primary-container rounded-3xl p-12 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-full md:w-1/2 opacity-20 pointer-events-none">
        <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <path d="M0 100 L100 0 L100 100 Z" fill="white"></path>
        </svg>
        </div>
        <div className="relative z-10 md:flex items-center justify-between gap-12">
        <div className="mb-8 md:mb-0">
        <h3 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6">Schedule an Executive Briefing</h3>
        <p className="font-body-lg text-body-lg text-inverse-on-surface/80 max-w-xl">Discuss your organizational goals with our principal consultants in a confidential 30-minute introductory session.</p>
        </div>
        <button className="bg-secondary-fixed text-on-secondary-fixed font-headline-sm px-10 py-5 rounded-full hover:bg-secondary-fixed-dim transition-colors whitespace-nowrap">
                                Book Consult
                            </button>
        </div>
        </div>
        </section>
        </main>
      </>
    </Layout>
  )
}
