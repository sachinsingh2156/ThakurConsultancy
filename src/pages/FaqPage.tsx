import Layout from '../components/layout/Layout'
import { useScrollReveal } from '../hooks/useScrollReveal'
import MaterialIcon from '../components/ui/MaterialIcon'
import { faqSections, totalFaqCount } from '../data/faqContent'

const trendingTopics = ['GST Filing 2024', 'SMETA Audit', 'Labour Welfare Fund', 'EPF ECR Deadline']

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqSections.flatMap((section) =>
    section.questions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  ),
}

export default function FaqPage() {
  useScrollReveal()

  return (
    <Layout activeItem="faq" variant="default">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="relative py-12 md:py-16 lg:py-20 bg-surface-container-low overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop relative z-10 text-center">
            <span className="inline-block py-1.5 px-4 rounded-full bg-secondary-container text-on-secondary-container font-label-sm mb-6 uppercase tracking-widest">
              Knowledge Base
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4 max-w-3xl mx-auto">
              Frequently Asked Questions
            </h1>
            <p className="text-on-surface-variant font-body-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Expert answers on HR, payroll, GST, labour law, audits, and statutory compliance for businesses
              operating in India — especially Delhi NCR.
            </p>

            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1 group">
                  <MaterialIcon
                    icon="search"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors"
                  />
                  <input
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-outline-variant/30 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-[0_4px_24px_rgba(0,45,114,0.08)] text-body-md"
                    placeholder="Search GST, EPF, labour law, audits..."
                    type="search"
                    aria-label="Search FAQs"
                  />
                </div>
                <button
                  type="button"
                  className="shrink-0 bg-secondary text-on-secondary px-8 py-4 rounded-xl font-label-md font-bold hover:brightness-110 transition-all shadow-md"
                >
                  Search
                </button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm">
              <div className="flex items-center gap-2 text-on-surface-variant">
                <MaterialIcon icon="category" className="text-secondary" />
                <span>
                  <strong className="text-primary">{faqSections.length}</strong> categories
                </span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <MaterialIcon icon="quiz" className="text-secondary" />
                <span>
                  <strong className="text-primary">{totalFaqCount}+</strong> expert answers
                </span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <MaterialIcon icon="update" className="text-secondary" />
                <span>
                  Updated for <strong className="text-primary">2024–25</strong>
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2 md:gap-3">
              {trendingTopics.map((topic) => (
                <span
                  key={topic}
                  className="px-4 py-2 rounded-full border border-outline-variant/25 bg-white text-on-surface-variant font-label-sm"
                >
                  Trending: {topic}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Browse by category */}
        <section className="py-10 md:py-12 border-b border-outline-variant/15 bg-surface">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            <h2 className="font-headline-sm text-headline-sm text-primary text-center mb-2">Browse by Topic</h2>
            <p className="text-on-surface-variant text-center text-sm mb-8 max-w-xl mx-auto">
              Jump directly to the section relevant to your business query.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {faqSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-outline-variant/15 shadow-[0_4px_20px_rgba(0,45,114,0.05)] hover:shadow-[0_8px_32px_rgba(0,45,114,0.1)] hover:border-secondary/30 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary-fixed/70 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary-container group-hover:text-white transition-colors">
                    <MaterialIcon icon={section.icon} className="text-xl" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-headline-sm text-primary mb-1 group-hover:text-secondary transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-2">
                      {section.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ sections */}
        <section className="py-12 md:py-16 lg:py-24 bg-surface-container-low">
          <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
            <div className="space-y-10 md:space-y-14">
              {faqSections.map((section) => (
                <article
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 bg-white rounded-2xl border border-outline-variant/15 shadow-[0_4px_24px_rgba(0,45,114,0.06)] overflow-hidden"
                >
                  <header className="px-6 md:px-8 py-5 md:py-6 border-b border-outline-variant/15 bg-surface-container-low/60">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-fixed/70 flex items-center justify-center text-primary shrink-0">
                        <MaterialIcon icon={section.icon} className="text-2xl" filled />
                      </div>
                      <div>
                        <h2 className="font-headline-md text-headline-sm md:text-headline-md text-primary mb-1">
                          {section.title}
                        </h2>
                        <p className="text-on-surface-variant text-sm leading-relaxed">{section.description}</p>
                        <p className="text-secondary font-label-sm font-bold mt-2">
                          {section.questions.length} questions in this section
                        </p>
                      </div>
                    </div>
                  </header>
                  <div className="divide-y divide-outline-variant/10">
                    {section.questions.map((item, index) => (
                      <details
                        key={item.question}
                        className="group px-6 md:px-8"
                        open={item.defaultOpen ?? index === 0}
                      >
                        <summary className="py-5 md:py-6 flex justify-between items-start gap-4 cursor-pointer list-none">
                          <span className="font-headline-sm text-base md:text-lg text-primary text-left leading-snug pr-2">
                            {item.question}
                          </span>
                          <MaterialIcon
                            icon="expand_more"
                            className="shrink-0 mt-0.5 transition-transform group-open:rotate-180 text-secondary"
                          />
                        </summary>
                        <div className="pb-5 md:pb-6 text-on-surface-variant leading-relaxed text-sm md:text-base">
                          {item.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 lg:py-24 bg-primary relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
            aria-hidden="true"
          />
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop text-center relative z-10">
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6">
              Still have questions?
            </h2>
            <p className="font-body-lg text-body-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Our consultants are ready to help you navigate complex regulatory landscapes with precision and
              authority. Get personalized guidance for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                className="bg-secondary-fixed text-primary px-10 py-4 rounded-xl font-label-md font-bold hover:brightness-105 transition-all flex items-center justify-center gap-3 shadow-xl"
              >
                <MaterialIcon icon="support_agent" />
                Consult an Expert
              </button>
              <button
                type="button"
                className="bg-white/10 text-white border border-white/25 px-10 py-4 rounded-xl font-label-md font-bold hover:bg-white/15 transition-all flex items-center justify-center gap-3"
              >
                <MaterialIcon icon="mail" />
                Email Support
              </button>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-8 right-8 z-[100] group">
        <div className="absolute bottom-full right-0 mb-4 scale-0 group-hover:scale-100 transition-all origin-bottom-right duration-300">
          <div className="bg-white p-4 rounded-2xl shadow-[0_8px_32px_rgba(0,45,114,0.15)] border border-outline-variant/15 w-64 mb-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-label-md text-primary">Experts Online Now</span>
            </div>
            <p className="text-sm text-on-surface-variant mb-4">
              How can we assist with your compliance questions today?
            </p>
            <button
              type="button"
              className="w-full bg-primary text-on-primary py-2 rounded-lg text-sm font-label-md font-bold"
            >
              Start Live Chat
            </button>
          </div>
        </div>
        <button
          type="button"
          className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-secondary text-on-secondary shadow-2xl flex items-center justify-center hover:scale-105 transition-transform active:scale-95"
          aria-label="Open live chat"
        >
          <MaterialIcon icon="chat_bubble" className="text-3xl" />
        </button>
      </div>
    </Layout>
  )
}
