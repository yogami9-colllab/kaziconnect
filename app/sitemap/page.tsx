import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Home, Info, Briefcase, FileText, Phone, Shield, Cookie,
  Scale, Map, ArrowRight, ExternalLink,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sitemap — KaziConnect',
  description: 'A full overview of all pages available on the KaziConnect website.',
}

// ── Add this type ──
type PageItem = {
  title: string
  href: string
  description: string
  icon: React.ReactElement
  external?: boolean
}

type SitemapGroup = {
  label: string
  color: string
  bg: string
  icon: React.ReactElement
  pages: PageItem[]
}

const sitemapGroups = [
  {
    label: 'Main Pages',
    color: '#006B3C',
    bg: '#E6F4ED',
    icon: <Home size={18} />,
    pages: [
      {
        title: 'Home',
        href: '/',
        description: 'Welcome to KaziConnect — Kenya\'s premier job placement agency.',
        icon: <Home size={16} />,
      },
      {
        title: 'How It Works',
        href: '/how-it-works',
        description: 'Step-by-step guide on how our job placement process works.',
        icon: <Info size={16} />,
      },
      {
        title: 'Services',
        href: '/services',
        description: 'Browse our CV writing, job search, coaching, and staffing packages.',
        icon: <Briefcase size={16} />,
      },
      {
        title: 'Apply Now',
        href: '/apply',
        description: 'Submit your details and let us start applying for jobs on your behalf.',
        icon: <FileText size={16} />,
      },
      {
        title: 'Contact',
        href: '/contact',
        description: 'Get in touch with our team via phone, email, or our contact form.',
        icon: <Phone size={16} />,
      },
    ],
  },
  {
    label: 'Legal & Policies',
    color: '#CE1126',
    bg: '#FDEAED',
    icon: <Scale size={18} />,
    pages: [
      {
        title: 'Privacy Policy',
        href: '/privacy-policy',
        description: 'How we collect, use, and protect your personal information.',
        icon: <Shield size={16} />,
      },
      {
        title: 'Terms of Service',
        href: '/terms-of-service',
        description: 'The terms and conditions governing your use of our services.',
        icon: <Scale size={16} />,
      },
      {
        title: 'Cookie Policy',
        href: '/cookie-policy',
        description: 'Information about the cookies we use and how to manage them.',
        icon: <Cookie size={16} />,
      },
    ],
  },
  {
    label: 'Technical',
    color: '#D4AE0E',
    bg: '#FEFAE6',
    icon: <Map size={18} />,
    pages: [
      {
        title: 'XML Sitemap',
        href: '/sitemap.xml',
        description: 'Machine-readable sitemap for search engines (Google, Bing, etc.).',
        icon: <Map size={16} />,
        external: true,
      },
    ],
  },
]

export default function SitemapPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden pt-36 pb-20"
        style={{ background: 'linear-gradient(140deg, #002D1A 0%, #004D2A 45%, #006B3C 100%)' }}
      >
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-[#FCD116] via-[#FCD116]/40 to-transparent" />
        <div className="absolute -right-32 -bottom-32 w-[500px] h-[500px] rounded-full border border-white/5" />

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-[#FCD116] text-xs font-bold px-4 py-2 rounded-full mb-5 backdrop-blur-sm border border-white/10">
            <Map size={13} />
            Navigation
          </div>
          <h1 className="display-xl text-white mb-4">
            Site<span className="text-[#FCD116] italic">map</span>
          </h1>
          <p className="text-white/65 max-w-[420px] mx-auto text-[16px] leading-relaxed">
            A complete overview of every page on the KaziConnect website.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 50L1440 50L1440 0C960 40 480 5 0 25Z" fill="#F8F9F5" />
          </svg>
        </div>
      </section>

      {/* ── SITEMAP CONTENT ── */}
      <section className="section">
        <div className="container max-w-[900px]">
          <div className="space-y-12">
            {sitemapGroups.map((group) => (
              <div key={group.label}>
                {/* Group header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: group.bg, color: group.color }}
                  >
                    {group.icon}
                  </div>
                  <h2 className="text-lg font-bold text-[#0D1B0F]">{group.label}</h2>
                  <div className="flex-1 h-px bg-gray-100" />
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: group.bg, color: group.color }}
                  >
                    {group.pages.length} {group.pages.length === 1 ? 'page' : 'pages'}
                  </span>
                </div>

                {/* Pages grid */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {group.pages.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      target={page.external ? '_blank' : undefined}
                      rel={page.external ? 'noopener noreferrer' : undefined}
                      className="card p-5 group flex items-start gap-4 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                    >
                      {/* Icon */}
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-200"
                        style={{ background: group.bg, color: group.color }}
                      >
                        {page.icon}
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-1">
                          <p className="font-bold text-[#0D1B0F] text-[15px] group-hover:text-[#006B3C] transition-colors duration-200">
                            {page.title}
                          </p>
                          {page.external && (
                            <ExternalLink size={11} className="text-gray-300 flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">{page.description}</p>
                        <p
                          className="text-xs font-mono mt-2 transition-colors duration-200"
                          style={{ color: group.color + '99' }}
                        >
                          {page.href}
                        </p>
                      </div>

                      <ArrowRight
                        size={15}
                        className="flex-shrink-0 text-gray-200 group-hover:text-[#006B3C] transition-colors duration-200 mt-1"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className="mt-16 rounded-2xl p-8 relative overflow-hidden text-center"
            style={{ background: 'linear-gradient(135deg, #002D1A 0%, #006B3C 100%)' }}
          >
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative z-10">
              <p className="text-[#FCD116] text-xs font-bold uppercase tracking-widest mb-3">Ready to get started?</p>
              <h3 className="font-bold text-white text-2xl mb-3">
                Let Us Find Your Next Job
              </h3>
              <p className="text-white/55 text-sm mb-7 max-w-[420px] mx-auto leading-relaxed">
                Join thousands of Kenyans who have trusted KaziConnect to find and apply for jobs on their behalf.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/apply" className="btn btn-gold shine">
                  Apply Now
                  <ArrowRight size={15} />
                </Link>
                <Link href="/how-it-works" className="btn btn-outline-white">
                  How It Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
