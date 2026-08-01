import Layout from '../components/layout/Layout'
import { useScrollReveal } from '../hooks/useScrollReveal'
import MaterialIcon from '../components/ui/MaterialIcon'

const coreValues = [
  { icon: 'gavel', title: 'Integrity', desc: 'Honesty is our primary asset. We maintain absolute ethical standards in all regulatory filings.' },
  { icon: 'rebase_edit', title: 'Precision', desc: 'In compliance, a single error can be costly. We operate with surgical accuracy in every data point.' },
  { icon: 'wb_sunny', title: 'Transparency', desc: 'Clear reporting and open communication channels ensure you are never in the dark about your status.' },
  { icon: 'groups', title: 'Client-Centricity', desc: 'Your growth is our mission. We tailor institutional strategies to your unique business DNA.' },
]

const timeline = [
  { year: '2009', title: 'The Foundation', desc: 'Thakur Consultancy launched in a small office in Connaught Place with 3 founding experts.' },
  { year: '2013', title: 'Regional Expansion', desc: 'Established operations across NCR, serving 100+ mid-market manufacturing enterprises.' },
  { year: '2018', title: 'Digital Transformation', desc: 'Introduced proprietary cloud-based compliance tracking for all retained clients.' },
  { year: '2024', title: 'Institutional Leadership', desc: 'Managing workforce solutions for 500+ firms with a dedicated team of 80+ consultants.' },
]

const certImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDqNul4FMDUfDq8dFI_0jVAEx8XODvFha4KD2yOp1aVEbPMKuvGSXqGGA9KF3uO60e02TwOdfC-OyI6TiHEPcTD-pldQc3QvJ_mPmzf3vkR0VPyLlvBNx-7ZVstmzLzDIoNTuHJ15DEeAiHJcZuDdAs41F-zBtTs1qWXhrRTR_q0PDpF45CYdv8-SMas1Qzmo4TI0293j9HMReuixCGIYtLPF4_kNFDNpaMdDSNul_qshMP96NLJQOo'

export default function AboutPage() {
  useScrollReveal()

  return (
    <Layout activeItem="about" variant="default" ctaLabel="Get Started">
      <main className="pt-20 md:pt-24">
        <section className="relative min-h-[70vh] md:h-[600px] flex items-center overflow-hidden transition-all duration-1000 opacity-100 translate-y-0">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover"
              alt="Corporate office interior in New Delhi"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj4imf0C-Qy5GM0mdwj2K3mBhHOVk9K26UumcwLZtKGWTBxelhlc1FJ31E12y9rvrKrhFOBLpSMxvoEDTtyEvFH0V79UcSnzgEkYZeEiWefsHj-5cH_JGUco6E93ZTzlT9kT9xV9TIz6gfE_89MK-e71PSMgEYBQvl6tpjIx2fMMjVNY1uWRVZvUTxbR_eMgS1qRx8qJiQrMwooA6lobd5Al8lEbjuj-0bkyAApEgM2YOnBBqqWkst"
            />
            <div className="absolute inset-0 bg-primary/40 backdrop-brightness-75" />
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop w-full">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1 bg-secondary text-white font-label-md rounded-full mb-6 uppercase tracking-widest">
                Established 2009
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6">Our Story & Commitment to Excellence</h1>
              <p className="font-body-lg text-body-lg text-white/90 leading-relaxed mb-8">
                Building the structural backbone for India&apos;s leading enterprises through precision-driven HR,
                compliance, and accounting services.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-24 bg-surface transition-all duration-1000 opacity-100 translate-y-0">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="font-headline-md text-headline-sm md:text-headline-md text-primary mb-6">
                  15+ Years of Corporate Excellence in New Delhi
                </h2>
                <div className="space-y-4 text-on-surface-variant font-body-lg leading-relaxed">
                  <p>
                    Founded in 2009, Thakur Consultancy has emerged as a cornerstone of institutional-grade business
                    support in North India. We began with a singular focus: to demystify the complex regulatory landscape
                    for growing enterprises.
                  </p>
                  <p>
                    Today, we serve as the trusted partner for over 500 organizations, navigating the intricacies of HR
                    management, statutory compliance, and strategic accounting with unparalleled transparency. Our
                    headquarters in the heart of New Delhi symbolizes our connection to the nation&apos;s pulse and
                    regulatory core.
                  </p>
                </div>
                <div className="mt-10 flex flex-wrap gap-6 sm:gap-8 md:gap-12">
                  <div>
                    <p className="text-4xl font-bold text-secondary">500+</p>
                    <p className="text-label-md text-outline">Clients Managed</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-secondary">15+</p>
                    <p className="text-label-md text-outline">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-secondary">99%</p>
                    <p className="text-label-md text-outline">Compliance Rate</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    className="w-full h-full object-cover"
                    alt="Business consultants in conference room"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYyYIl_R2Br3VPr6gXvX-II-A194Nluq-vlh_2ofMK6Ha7egjBnYEKewRkcQaC3uPjmvQj0AJ5XYVmqd-5R3TWdqlFe3_gzZguumVjYvYOH79w7QeEZEGE0ad9WcztgAhDF7rGiYswIMMK4uD2iJKl1AKz1W_N-zWxIgJR62GibUDWNbEhOwqufrro1VabiB7wOSBIQI0t4LoCB7NtxmLITOgerPwUWTcUeAYBj_ODpIgHWvGbEOrK"
                  />
                </div>
                <div className="absolute -bottom-4 left-4 right-4 sm:-bottom-6 sm:-left-6 sm:right-auto glass-card p-4 sm:p-8 rounded-xl max-w-xs">
                  <MaterialIcon icon="verified" className="text-secondary text-4xl mb-4" />
                  <p className="font-headline-sm text-headline-sm text-primary">Certified Quality</p>
                  <p className="text-on-surface-variant mt-2">
                    Upholding the highest standards of international business practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-24 bg-surface-container-low transition-all duration-1000 opacity-100 translate-y-0">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="glass-card p-12 rounded-2xl hover:scale-[1.02] transition-transform duration-500 group">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-8 group-hover:golden-gradient transition-all">
                  <MaterialIcon icon="flag" className="text-white text-3xl" />
                </div>
                <h3 className="font-headline-md text-headline-sm md:text-headline-md text-primary mb-4">Our Mission</h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  To empower Indian enterprises with transparent, high-integrity corporate solutions that mitigate risk
                  and foster sustainable institutional growth through expert guidance.
                </p>
              </div>
              <div className="glass-card p-12 rounded-2xl hover:scale-[1.02] transition-transform duration-500 group">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-8 group-hover:golden-gradient transition-all">
                  <MaterialIcon icon="visibility" className="text-white text-3xl" />
                </div>
                <h3 className="font-headline-md text-headline-sm md:text-headline-md text-primary mb-4">Our Vision</h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  To be recognized as the most trusted institutional-grade consultancy in North India, setting the gold
                  standard for compliance and human resource excellence by 2030.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-24 transition-all duration-1000 opacity-100 translate-y-0">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-headline-md text-headline-sm md:text-headline-md text-primary mb-4">Our Core Values</h2>
              <p className="text-on-surface-variant font-body-lg">
                The guiding principles that define every interaction, every report, and every success story at Thakur
                Consultancy.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((item) => (
                <div
                  key={item.title}
                  className="text-center p-8 rounded-xl hover:bg-white transition-all hover:shadow-xl group border border-transparent hover:border-outline-variant/30"
                >
                  <div className="w-20 h-20 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-container transition-colors">
                    <MaterialIcon icon={item.icon} className="text-secondary text-4xl group-hover:text-secondary-fixed" />
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-primary mb-2">{item.title}</h4>
                  <p className="text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-24 bg-primary text-white relative overflow-hidden transition-all duration-1000 opacity-100 translate-y-0">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
              <div className="w-64 h-64 lg:w-96 lg:h-96 shrink-0 rounded-full border-4 border-secondary/30 p-2 relative">
                <img
                  className="w-full h-full object-cover rounded-full"
                  alt="Anand Thakur, CEO"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4ord4HBsmINEGUwP5DyqsEdfh8_Hvpvdef-B0bZlMyVDlMdPsfyT1NVKev4qxFcp8-9dU1nrKPXl1IsFfrIzd43TEBMJ_-FVE6jO66uQWoj9z5lFMFl0ra7cSqpcsDq7sXOUmFnfaXoYSLurt-iX4IEPlI3Jokwtr5AUfn2iBBNBrTAT5I_FUXjoP2mqtR-9AQQjAymtO-3H27KlP71ov6do-sB7tx_zbE-XOKgcIC5YkR_4HGWVm"
                />
                <div className="absolute -bottom-4 right-8 bg-secondary px-4 py-2 rounded-lg">
                  <span className="font-label-md text-white">Anand Thakur, CEO</span>
                </div>
              </div>
              <div className="flex-1">
                <MaterialIcon icon="format_quote" className="text-secondary text-6xl mb-8" filled />
                <blockquote className="font-headline-md text-headline-md leading-tight mb-8">
                  &quot;Our journey began with a vision to bring institutional-grade discipline to India&apos;s burgeoning
                  corporate sector. We don&apos;t just provide services; we provide the peace of mind that allows leaders
                  to focus on innovation while we anchor the fundamentals of compliance and integrity.&quot;
                </blockquote>
                <div className="h-px w-24 bg-secondary mb-4" />
                <p className="text-secondary-fixed font-body-lg">Founder & Managing Director</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-24 overflow-hidden transition-all duration-1000 opacity-100 translate-y-0">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            <h2 className="font-headline-md text-headline-sm md:text-headline-md text-primary text-center mb-10 md:mb-20">
              A Legacy of Growth
            </h2>
            <div className="relative md:timeline-line">
              <div className="space-y-8 md:space-y-24 relative z-10">
                {timeline.map((item, i) => (
                  <div
                    key={item.year}
                    className={`about-timeline-item ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className="about-timeline-content flex flex-col justify-center">
                      <div className={`glass-card p-6 md:p-8 rounded-xl text-left`}>
                        <span className="text-secondary font-bold text-xl md:text-2xl mb-2 block">{item.year}</span>
                        <h4 className="text-primary font-headline-sm mb-3">{item.title}</h4>
                        <p className="text-on-surface-variant font-body-md">{item.desc}</p>
                      </div>
                    </div>
                    <div className="about-timeline-dot">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-background bg-secondary shadow-lg z-20" />
                    </div>
                    <div className="about-timeline-spacer" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-24 bg-surface-container-low transition-all duration-1000 opacity-100 translate-y-0">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-outline-variant/20">
                <MaterialIcon icon="policy" className="text-primary text-5xl mb-6" />
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Local Regulatory Expertise</h3>
                <p className="text-on-surface-variant">
                  Deep-rooted understanding of North Indian state-specific labor laws and national compliance mandates.
                </p>
              </div>
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-outline-variant/20">
                <MaterialIcon icon="security" className="text-primary text-5xl mb-6" />
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Risk Mitigation</h3>
                <p className="text-on-surface-variant">
                  Proactive identification of compliance gaps before they turn into institutional liabilities or
                  penalties.
                </p>
              </div>
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-outline-variant/20">
                <MaterialIcon icon="lock" className="text-primary text-5xl mb-6" />
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Data Privacy</h3>
                <p className="text-on-surface-variant">
                  ISO-certified data management protocols ensuring your corporate and employee data remains confidential.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-24 transition-all duration-1000 opacity-100 translate-y-0">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
              <div className="lg:w-1/3">
                <h2 className="font-headline-md text-headline-sm md:text-headline-md text-primary mb-6">Our Credentials</h2>
                <p className="text-on-surface-variant font-body-lg">
                  We hold the certifications that reflect our commitment to global operational standards and local
                  regulatory excellence.
                </p>
              </div>
              <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-video bg-white rounded-lg flex items-center justify-center p-6 border border-outline-variant/20 grayscale hover:grayscale-0 transition-all cursor-default"
                  >
                    <img className="max-h-full max-w-full object-contain" alt="Certification logo" src={certImage} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-24 bg-surface transition-all duration-1000 opacity-100 translate-y-0">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            <h2 className="font-headline-md text-headline-sm md:text-headline-md text-primary mb-12">Our Workspace</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 aspect-video rounded-2xl overflow-hidden shadow-lg group">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Main lobby"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC47w_S4LkFmBm9EUtynrv0ctrJejoPXIg7mfhRWNS9wmCa0OkF8Gn8J2H6qP-yl65yrceGIxA8qw3z21Ajk7ojICU2obx-d0_8fefiWO5ch4s2vX7pXZowoQ-tr9IPS_xtRNYocbWQtKZzEeRBrO3fKnUXqOFG5sgJkWPe8z45MraEy9SyR4ux5x4ughvoZwuxu7wjlE4hKEYVSo2yJMBC74VBcA41YAENMM-NDMzwiWYRgE0FDvwT"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg group">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Collaboration zone"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmxDgTvJJjzUmTH8IXZMFVNUeYISr_IHLrO8jnVHiTrpts9l6BIfiFNERuJ-K0B5sv4N7EgiAf4KUqZroWBlnTIMW7VqKQobu65Wh2Y4nChaUl0j4Oqr-4I6WhHQNg-8gbZ5Ue6eBcFPWyngV3-rzrwPPJI4Sjlt7vF0vXeOcFivQaE3Sc7VEHQRIX0guslxSLDJO6gV4OgK6NpHYco5piA3cGyyz986beojQdQ-YBsNuZ7tR4tbyu"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg group">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Conference room"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4f2vm5-yLyEmidEy1g4xu9c78AwtFV0e85DaGOlhiyXDhZbyVf1w-YFs4Vd-QUyqGtYluu153dDBz6hSR45IKK3AAhafaSIuvRkjXqmIhTp7xHhNCgqpXY1GJ9wIehEOZFJfTexl5GNpQ8n7B9pil2Y9wX1Cmg6eWlQddJCcK02Csb3Bu26uIovsMOmx_NvyXI3PKoiLFJmsPxsvgKrUPflU1AwdB2vFQOVKqiAjq7h-m9Ug0jz9S"
                />
              </div>
              <div className="md:col-span-2 aspect-video rounded-2xl overflow-hidden shadow-lg group">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Open plan office"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe6NBFnbRC1MkZ7s4sMsvHg4L7wED4-zC_f5s3CjbG8JYXDTK0rsPnzsmoyFZcCR4Y6fyCF8IKo9lX8kJCxm4QSB0nzsS2iDBOekQvowdItOK5GztaU2u-EgplzHCqTvwg6G-Ny6kLCpdcahZW-2wbFDagxKxzt7FWuyXCCv-r-u0vD-HJyzfzp_h02pau8MEkAQwVhmAfpkXNKAX2j-k_aLiSShYfDbab-i9Q3DRkhieoBJYFHrdW"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-24 transition-all duration-1000 opacity-100 translate-y-0">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            <div className="relative rounded-3xl overflow-hidden bg-primary text-white p-12 lg:p-20 text-center">
              <div className="relative z-10">
                <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6">Ready to Partner With Us?</h2>
                <p className="text-white/80 font-body-lg max-w-2xl mx-auto mb-10">
                  Experience the difference that 15 years of institutional expertise can bring to your organization&apos;s
                  growth and stability.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    type="button"
                    className="golden-gradient text-primary px-10 py-4 rounded-xl font-label-md hover:shadow-2xl transition-all active:scale-95"
                  >
                    Schedule a Consultation
                  </button>
                  <button
                    type="button"
                    className="border border-white/30 px-10 py-4 rounded-xl font-label-md hover:bg-white/10 transition-all active:scale-95"
                  >
                    View Our Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
