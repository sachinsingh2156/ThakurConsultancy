import Layout from '../components/layout/Layout'
import { useScrollReveal } from '../hooks/useScrollReveal'
import MaterialIcon from '../components/ui/MaterialIcon'

const trendingNews = [
  'New GST E-Invoicing Thresholds effective from next quarter.',
  'Supreme Court Ruling on Provident Fund Contributions updated.',
  'Factory Act Safety Compliance Audit Checklist for 2024 Released.',
]

const categories = [
  { id: 'gst', label: 'GST', icon: 'receipt_long', active: true },
  { id: 'hr', label: 'HR Updates', icon: 'groups' },
  { id: 'labour', label: 'Labour Law', icon: 'gavel' },
  { id: 'tax', label: 'Income Tax', icon: 'payments' },
  { id: 'compliance', label: 'Compliance', icon: 'verified_user' },
  { id: 'payroll', label: 'Payroll', icon: 'account_balance_wallet' },
  { id: 'factory', label: 'Factory Act', icon: 'factory' },
  { id: 'audit', label: 'Audit', icon: 'fact_check' },
]

const featuredPost = {
  image:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBLVXKu85W9DLESNQXIiB8HQu92UBmoIqBYEQ4hv2Q_wYuG-EWgsnaYtBsLpbAU-Xk8JRcyb5BFYXPY-RCUCGQH3kqrwykarFCKhd0ZcCC5dp5peBC4qmP3yfRk4nw-oHKUt3TRADZYRUqGFiasWYX4xzJJ9zYqH-yz8MDYLgFX9kMcT9-LdMwOdVtZUTIP8nC0O26iCzQYrX_V1NXcBX4fi0In2XREATfwDqEzOgFuV8_0XrHwxgqI',
  badge: 'Expert Analysis',
  title: 'The Future of Labour Law 2024: Navigating the New Industrial Relations Code',
  excerpt:
    'An exhaustive guide on how the upcoming reforms will impact manufacturing sectors and what business leaders must do today to ensure total compliance.',
  author: 'Vikram Thakur',
  authorImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAxv8aj-EUCrEB-MkAI4wLs-99MHIzWfeZubXsELhxhaV309aJ3OMtiA3xyuUAeUvtDtiRIcerkxryvbHlQ-9YzcNrrIX1mHYtQ5MLHULwuC8uT92kwcQbuF6xJ5ylvoqRyIJmj1ys39Z9mKRQ3u-f5zOx9mkI1OcM9eXG_xBO0mEsq3ska8eIUBv5djF3vD8dcqozCyd7FGvTRC3ezuphk48yKEGroljdz8K7VFDEuNQkq5Q7qXG5N',
  meta: 'Senior Compliance Partner • 12 Min Read',
}

const posts = [
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBQCw5XKrCRw09QwKekJnMxY9ujew5pmJRdhV0aTJIIIW571GgLqsXALG06h6fLnrzx0YDfUMgSf8Qf8O16iIldaXBebVAgaMPJNgmwJY6C7-kS1cPq9Jwi7AknHCKL_BEUeVNbWQS7xmN1X08u9KFosHEDWTWhnZJ2qPxgP0xWyEnLL77ZC41Vugp1PccG3zQAIMO2qtsT2WDc3eRiZ1psOFTF4D_S4vdCOhojJseUBzyu0Dt7cWoF',
    category: 'GST Updates',
    date: 'Oct 24, 2023',
    title: 'Navigating Reverse Charge Mechanisms in Service Contracts',
    excerpt:
      'Explore the complexities of GST reverse charge mechanisms for services sourced from unregistered vendors and international entities.',
    author: 'Ananya Sharma',
    authorImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBsHOya4_P0-GYLOqWxn8_DnPKmgpe_Awo-IiMn7iIB7l9HRU9wyoOfUh04fR3Po4s8_5z5umf_5zEcIBAqRFnGcYJitKnaHFY3M-7GUSHDtzT6DA-I-C7M5t5IT3CVeGz3zKx6-X2gehZ2ZkrzBJeTqZlFsr8wLHQd_9dYo602l9VnZbjVmSei97evmkTIOgJsAqu2k_ZP7hUjOsKkRBXERlxhHXuWXiV6mnbVkh5JtFjR3TulM-N7',
  },
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCriF1_hz-o-2FmEBswA6oIzk_UagRv7xp7Wj4db80nRy89u7DoBbmLoWKKaFblR--EPs_Dv6-kNTXaCu6rMG1_o_rq-_aVdEnIvg6K3nH6eiYT-ATUmnW_9_KxrvuPlzXR5WjAmWyDJCC2qZEw-NmSROrXuS8hzh5zpAACGp38XzoORuAYQBVd6OGIhnhJETDT2u4Dz0cH2PXiVgaNOhvktuxbfDeXZUlt967N-I_E-WiuPUBfdoZq',
    category: 'Factory Act',
    date: 'Oct 18, 2023',
    title: 'Mandatory Health & Safety Audits: A 2024 Readiness Check',
    excerpt:
      'Why traditional safety checklists are no longer sufficient under the new stringent regulatory environment for industrial units.',
    author: 'Rajesh Malhotra',
    authorImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBKZsmO7Slam2Uikr6scvDNQHzTo8CPh-fAqSO2HdHKyscf3ZJmlnX3IGCd-u1Q7qpIhAFThxXJVp3XYtkUnn6VBEZrZcytap8bPtexls5FPbAT4-VhXpezrR1oJhMmR5H8R6NM0_5fRi_KTHHv4dEi8a6x7Ibu2ARQodMnxZijArvfTOslTkcGXHU1iPhN0zkNkQa-xTW3BzdszRkjxEKIpiQmlR_0xZQfm8jLYx0rOIfe54UVxPeR',
  },
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB5ZpJ4E008clUzX_UvyEk0KBIqqO0xD9Q-Z4FQcKc3zku9DyCuEXD_9-jQsy-nroPKELcBgsIitKmPHRrXj06DTIff9K8y9p8kneB_SM7BDu3H5OUPXrDZDgqMeYQ1jgi_nIlbaUQ0-sqtw4QSVZb_IzR9k8V-htzWCDnGZ8VT6mrNKZ11JnDHZO58gUhYZWaag1Vz8tEmCqiVyqx40bfT59fevQj30hBAah8T1QwfGyFz4Rx-ADMs',
    category: 'Labour Law',
    date: 'Oct 12, 2023',
    title: 'The Shift to Gig Work: Legal Implications for Enterprises',
    excerpt:
      'How the new Social Security Code redefines employee status for contract workers and gig economy participants.',
    author: 'Priya Verma',
    authorImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBhODp4QP0okcKWj2D5WKWjGUkLBiZ6_kn_DSdBcTSWJIB4l9TiXerEIoLazLd5hVHulpJ2sPOjKs2sGNVsmrfhX89Li4r7SvCj2fMa8dGqx8QsUeVnr0R6PtTIaYklcgMLxsVDIq95utAoNlRiDpuso7FyqElZRODGfzqqaBRV4Z1usgK6mbj-evKDOE56nBkEp4zAcMkbubrXtvNzXsw6XuEgY_rg_-BVTn1_deePfmeyvzRsUmT_',
  },
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBOH1mrz8GJHm2MBm7v_VnT9Xkodm5iYxZnHbvs-JnvkSwWxtB3tZasvNu8qXN8_Pe9l7q8k9SDgGWBmNLOGm9J09iOQaSDkSpERqRDWgpovCb8mEEAkqZgRaNopkwWixBYOFITz6fU0BKRCQyCGedVegHjHwZQiTrg2MJ2ryEqdT4dD3x4okO-ueYMNV-bCT04S7VoNXp5fy3xyGBDd95qVHkuk3h0mwD9GL6zpBUcCql4E9S89uQ_',
    category: 'Audit',
    date: 'Oct 05, 2023',
    title: 'Mitigating Risk in Statutory Compliance Audits',
    excerpt:
      'A deep dive into the top 10 most common errors discovered during annual statutory compliance audits and how to prevent them.',
    author: 'Sanjay Gupta',
    authorImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAecIuSlgFtM6LvpNikB2T0duWgwlbJOck0KAYuG-IcpNDm_dm7Dq4dZ7IZZisMdzJQUJTyRhQbevA6kDNEaQE0KgFZJyJXEDfHMoAq_UWK99au_7sbYdvAEAOANLhbL4lIR_-9Rfv03FZqE89wSLObnO3JGA9c2OuBIb5ipLd4uSmyVpg_8KxjHX2Hs-n5-otCXK1okxAA3tyP9tHDrw_EkN3l3p2ck1OjEbIda7PUboR8YZt0dOFK',
  },
]

function BlogPostCard({
  image,
  category,
  date,
  title,
  excerpt,
  author,
  authorImage,
}: (typeof posts)[number]) {
  return (
    <article className="bg-white rounded-2xl border border-outline-variant/15 shadow-[0_4px_24px_rgba(0,45,114,0.06)] hover:shadow-[0_8px_32px_rgba(0,45,114,0.12)] transition-all duration-300 group overflow-hidden flex flex-col h-full">
      <div className="h-52 sm:h-56 relative overflow-hidden">
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/95 text-primary px-3 py-1 rounded-lg text-label-sm font-bold border border-outline-variant/20 uppercase tracking-wide">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <time className="text-label-sm text-on-surface-variant">{date}</time>
          <MaterialIcon icon="bookmark" className="text-secondary text-sm" />
        </div>
        <h4 className="font-headline-sm text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
          {title}
        </h4>
        <p className="text-on-surface-variant text-body-md line-clamp-3 mb-6 leading-relaxed flex-grow">{excerpt}</p>
        <div className="flex items-center justify-between border-t border-outline-variant/20 pt-5 mt-auto">
          <div className="flex items-center gap-3 min-w-0">
            <img src={authorImage} alt={author} className="w-8 h-8 rounded-full object-cover shrink-0" />
            <span className="font-label-md text-on-surface truncate">{author}</span>
          </div>
          <button
            type="button"
            className="text-primary font-bold text-label-md inline-flex items-center gap-1 hover:text-secondary transition-colors shrink-0"
          >
            Read More
            <MaterialIcon icon="arrow_forward" className="text-sm group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  )
}

export default function BlogPage() {
  useScrollReveal()

  return (
    <Layout activeItem="blog" variant="default">
      <main className="pt-24 pb-0">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
          {/* Trending ticker */}
          <div className="mb-8 rounded-2xl sm:rounded-full border border-secondary/10 bg-secondary-container/30 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-[auto_minmax(0,1fr)]">
              <div className="flex items-center px-4 py-2.5 sm:pl-4 sm:pr-4 border-b sm:border-b-0 sm:border-r border-secondary/15 bg-secondary-container/50 sm:min-w-[7.5rem]">
                <span className="inline-block bg-secondary text-on-secondary px-3 py-1 rounded-full text-label-sm whitespace-nowrap font-bold uppercase tracking-wide">
                  Trending
                </span>
              </div>
              <div className="relative min-w-0 overflow-hidden px-4 py-3 sm:py-2.5 sm:pr-4">
                <div className="marquee w-full">
                  <div className="marquee-content">
                    {trendingNews.map((item) => (
                      <p key={item} className="text-label-md text-on-secondary-container font-medium shrink-0">
                        {item}
                      </p>
                    ))}
                  </div>
                  <div className="marquee-content" aria-hidden="true">
                    {trendingNews.map((item) => (
                      <p key={`dup-${item}`} className="text-label-md text-on-secondary-container font-medium shrink-0">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Page header */}
          <header className="mb-8 md:mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container/40 text-secondary font-label-sm uppercase tracking-widest mb-4">
                Resource Center
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-2">
                Regulatory Insights
              </h1>
              <p className="text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                Deep-dive analysis and actionable intelligence on Indian business compliance.
              </p>
            </div>
            <div className="relative w-full lg:w-80 group shrink-0">
              <MaterialIcon
                icon="search"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors"
              />
              <input
                className="w-full pl-12 pr-4 py-3 bg-white border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                placeholder="Search insights..."
                type="search"
                aria-label="Search blog posts"
              />
            </div>
          </header>

          {/* Category filters */}
          <nav className="mb-10 md:mb-12 flex flex-wrap gap-2" aria-label="Blog categories">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href="#"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-label-md transition-all ${
                  cat.active
                    ? 'bg-secondary-container text-on-secondary-container font-bold shadow-sm'
                    : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container hover:text-primary'
                }`}
              >
                <MaterialIcon icon={cat.icon} className="text-lg" />
                {cat.label}
              </a>
            ))}
          </nav>

          {/* Featured post */}
          <section className="mb-12 md:mb-16" aria-label="Featured article">
            <article className="relative rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[21/9] group cursor-pointer shadow-[0_8px_40px_rgba(0,45,114,0.15)]">
              <img
                src={featuredPost.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 sm:p-8 md:p-12 w-full md:w-2/3">
                <span className="bg-secondary-fixed text-primary px-4 py-1.5 rounded-full text-label-sm mb-4 inline-block font-bold uppercase tracking-wide">
                  {featuredPost.badge}
                </span>
                <h2 className="font-display-lg text-white text-display-lg-mobile md:text-headline-md mb-4 group-hover:text-secondary-fixed transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-white/85 text-body-md line-clamp-2 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={featuredPost.authorImage}
                    alt={featuredPost.author}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white/30"
                  />
                  <div className="text-white">
                    <p className="font-label-md">{featuredPost.author}</p>
                    <p className="text-xs text-white/70">{featuredPost.meta}</p>
                  </div>
                </div>
              </div>
            </article>
          </section>

          {/* Recent posts */}
          <section aria-label="Recent articles">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-headline-md text-headline-sm md:text-headline-md text-primary">Recent Intelligence</h2>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="p-2 border border-outline-variant/30 rounded-full hover:bg-surface-container-high transition-colors"
                  aria-label="Previous articles"
                >
                  <MaterialIcon icon="chevron_left" />
                </button>
                <button
                  type="button"
                  className="p-2 border border-outline-variant/30 rounded-full hover:bg-surface-container-high transition-colors"
                  aria-label="Next articles"
                >
                  <MaterialIcon icon="chevron_right" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {posts.map((post) => (
                <BlogPostCard key={post.title} {...post} />
              ))}
            </div>
          </section>
        </div>

        {/* Newsletter */}
        <section className="mt-16 md:mt-20 bg-primary py-12 md:py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-secondary-fixed/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <span className="text-secondary-fixed font-bold text-label-md tracking-widest uppercase mb-4 block">
                Stay Compliant
              </span>
              <h2 className="font-display-lg text-white text-display-lg-mobile md:text-display-lg mb-6">
                Subscribe to Compliance Alerts
              </h2>
              <p className="text-white/75 text-body-lg mb-10 leading-relaxed">
                Get the latest regulatory updates, legislative changes, and expert analysis delivered directly to your
                inbox every Monday morning.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <div className="w-full sm:flex-1 relative max-w-md">
                  <MaterialIcon
                    icon="mail"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                  />
                  <input
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:ring-2 focus:ring-secondary/50 outline-none transition-all"
                    placeholder="Business Email Address"
                    type="email"
                    aria-label="Email address"
                  />
                </div>
                <button
                  className="w-full sm:w-auto px-10 py-4 bg-secondary-fixed text-primary rounded-xl font-label-md font-bold hover:brightness-105 active:scale-95 transition-all shadow-xl"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-6 text-white/40 text-label-sm">
                Join over 1,200+ C-suite executives who rely on our weekly intelligence. No spam, ever.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
