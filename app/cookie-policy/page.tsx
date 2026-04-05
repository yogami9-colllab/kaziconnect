import type { Metadata } from 'next'
import Link from 'next/link'
import { Cookie, ArrowRight, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cookie Policy — KaziConnect',
  description: 'Learn about how KaziConnect uses cookies and how you can manage your preferences.',
}

const cookieTypes = [
  {
    name: 'Strictly Necessary Cookies',
    color: '#006B3C',
    bg: '#E6F4ED',
    canOptOut: false,
    description:
      'These cookies are essential for the website to function and cannot be switched off. They are usually set in response to actions you take, such as logging in, filling in forms, or setting privacy preferences. You can set your browser to block these cookies, but some parts of the site may not work.',
    examples: [
      { name: 'session_id', purpose: 'Maintains your login session', duration: 'Session' },
      { name: 'csrf_token', purpose: 'Protects against cross-site request forgery', duration: 'Session' },
      { name: 'cookie_consent', purpose: 'Stores your cookie preferences', duration: '12 months' },
    ],
  },
  {
    name: 'Performance & Analytics Cookies',
    color: '#D4AE0E',
    bg: '#FEFAE6',
    canOptOut: true,
    description:
      'These cookies allow us to count visits and understand how visitors interact with our website. All information collected is aggregated and anonymous. They help us improve how our website works.',
    examples: [
      { name: '_ga', purpose: 'Google Analytics — distinguishes users', duration: '2 years' },
      { name: '_ga_*', purpose: 'Google Analytics — stores session state', duration: '2 years' },
      { name: '_gid', purpose: 'Google Analytics — identifies users within 24 hours', duration: '24 hours' },
    ],
  },
  {
    name: 'Functional Cookies',
    color: '#006B3C',
    bg: '#E6F4ED',
    canOptOut: true,
    description:
      'These cookies enable the website to provide enhanced functionality and personalisation — such as remembering your language preference or your location. They may be set by us or by third-party providers whose services we have added to our pages.',
    examples: [
      { name: 'preferred_language', purpose: 'Stores your language preference', duration: '12 months' },
      { name: 'user_region', purpose: 'Stores your location for relevant content', duration: '6 months' },
    ],
  },
  {
    name: 'Marketing & Targeting Cookies',
    color: '#CE1126',
    bg: '#FDEAED',
    canOptOut: true,
    description:
      'These cookies may be set through our website by our advertising partners. They may be used to build a profile of your interests and show you relevant adverts on other sites. They work by uniquely identifying your browser and device. If you do not allow these cookies, you will experience less targeted advertising.',
    examples: [
      { name: '_fbp', purpose: 'Facebook Pixel — tracks conversions', duration: '3 months' },
      { name: 'fr', purpose: 'Facebook — advertising targeting', duration: '3 months' },
      { name: 'NID', purpose: 'Google — serves targeted ads', duration: '6 months' },
    ],
  },
]

const sections = [
  {
    id: 'what-are-cookies',
    title: '1. What Are Cookies?',
    body: `Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners useful information about how their site is being used. Cookies are not harmful — they cannot run programs or deliver viruses to your device.`,
  },
  {
    id: 'how-we-use',
    title: '2. How We Use Cookies',
    body: `KaziConnect uses cookies and similar tracking technologies (such as web beacons and pixels) to operate our website, remember your preferences, understand how you use our platform, and serve relevant content and advertisements. We do not use cookies to collect sensitive personal information such as your financial details.`,
  },
  {
    id: 'types',
    title: '3. Types of Cookies We Use',
    body: `We use four categories of cookies, described in detail in the table below. You can opt out of non-essential cookies at any time through our cookie preference centre or your browser settings.`,
  },
  {
    id: 'third-party',
    title: '4. Third-Party Cookies',
    body: `Some cookies on our website are set by third-party services. These include Google Analytics for website analytics, Facebook Pixel for advertising measurement, and other embedded content providers. These third parties have their own privacy policies governing their use of cookies. We recommend reviewing their policies for further information: Google Privacy Policy (policies.google.com), Meta Privacy Policy (facebook.com/privacy/policy).`,
  },
  {
    id: 'manage',
    title: '5. Managing Your Cookie Preferences',
    body: `You can control cookies in several ways. Through our Cookie Preference Centre: click "Manage Cookies" in the footer of our website to update your preferences at any time. Through your browser: most browsers allow you to refuse cookies, delete existing cookies, or be notified when you receive a cookie. Please note that disabling certain cookies may affect the functionality of our website. Browser-specific instructions are available for Chrome (support.google.com/chrome), Firefox (support.mozilla.org), Safari (support.apple.com), and Edge (support.microsoft.com).`,
  },
  {
    id: 'changes',
    title: '6. Changes to This Cookie Policy',
    body: `We may update this Cookie Policy from time to time as our services evolve or as legal requirements change. We will notify you of significant changes by posting an updated policy on our website. The date at the top of this page indicates when the policy was last revised.`,
  },
]

export default function CookiePolicyPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden pt-36 pb-20"
        style={{ background: 'linear-gradient(140deg, #1A1400 0%, #3D2F00 45%, #D4AE0E 100%)' }}
      >
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-[#FCD116] via-[#FCD116]/40 to-transparent" />
        <div className="absolute -right-32 -bottom-32 w-[500px] h-[500px] rounded-full border border-white/5" />

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-bold px-4 py-2 rounded-full mb-5 backdrop-blur-sm border border-white/10">
            <Cookie size={13} />
            Legal
          </div>
          <h1 className="display-xl text-white mb-4">
            Cookie <span className="italic" style={{ color: '#FFF8CC' }}>Policy</span>
          </h1>
          <p className="text-white/65 max-w-[460px] mx-auto text-[16px] leading-relaxed">
            We believe in being transparent about how we collect and use your data.
          </p>
          <p className="text-white/35 text-sm mt-4">Last updated: 1 April 2025</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 50L1440 50L1440 0C960 40 480 5 0 25Z" fill="#F8F9F5" />
          </svg>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-[260px_1fr] gap-12 items-start">

            {/* ── Sticky sidebar TOC ── */}
            <aside className="hidden lg:block sticky top-28">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Contents</p>
                <nav className="space-y-1">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-sm text-gray-500 hover:text-[#D4AE0E] hover:font-semibold transition-all duration-200 py-1.5 px-3 rounded-lg hover:bg-[#FCD116]/8"
                    >
                      {s.title}
                    </a>
                  ))}
                  <a
                    href="#cookie-types"
                    className="block text-sm text-gray-500 hover:text-[#D4AE0E] hover:font-semibold transition-all duration-200 py-1.5 px-3 rounded-lg hover:bg-[#FCD116]/8"
                  >
                    Cookie Types Table
                  </a>
                </nav>

                <div className="mt-6 pt-5 border-t border-gray-100">
                  <p className="text-xs text-gray-400 mb-3">Cookie questions?</p>
                  <Link href="/contact" className="btn btn-forest text-xs w-full justify-center py-2.5">
                    Contact Us
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </aside>

            {/* ── Main content ── */}
            <div className="max-w-[760px]">
              {/* Intro */}
              <div className="bg-[#FEFAE6] border border-[#D4AE0E]/25 rounded-2xl p-6 mb-10">
                <p className="text-[#5C4A00] text-[15px] leading-relaxed">
                  This Cookie Policy explains how <strong>KaziConnect Limited</strong> uses cookies and similar tracking technologies on our website <strong>kaziconnect.co.ke</strong>. It should be read alongside our{' '}
                  <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-[#D4AE0E] transition-colors">Privacy Policy</Link>.
                </p>
              </div>

              {/* Text sections */}
              <div className="space-y-10">
                {sections.slice(0, 3).map((section) => (
                  <div key={section.id} id={section.id} className="scroll-mt-28">
                    <h2 className="text-xl font-bold text-[#0D1B0F] mb-3 pb-3 border-b border-gray-100">
                      {section.title}
                    </h2>
                    <p className="text-gray-500 leading-relaxed text-[15px]">{section.body}</p>
                  </div>
                ))}
              </div>

              {/* Cookie types cards */}
              <div id="cookie-types" className="scroll-mt-28 mt-10 space-y-5">
                {cookieTypes.map((type) => (
                  <div
                    key={type.name}
                    className="rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm"
                  >
                    {/* Card header */}
                    <div
                      className="px-6 py-4 flex items-center justify-between gap-4"
                      style={{ background: type.bg, borderBottom: `1px solid ${type.color}20` }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                          style={{ background: type.color }}
                        />
                        <h3 className="font-bold text-[#0D1B0F] text-[15px]">{type.name}</h3>
                      </div>
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0"
                        style={{
                          background: type.canOptOut ? '#fff' : type.color,
                          color: type.canOptOut ? type.color : '#fff',
                          border: `1px solid ${type.color}40`,
                        }}
                      >
                        {type.canOptOut ? 'Optional' : 'Required'}
                      </span>
                    </div>

                    {/* Card body */}
                    <div className="px-6 py-5">
                      <p className="text-gray-500 text-sm leading-relaxed mb-5">{type.description}</p>

                      {/* Examples table */}
                      <div className="overflow-x-auto rounded-xl border border-gray-100">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="text-left px-4 py-2.5 text-xs font-bold text-gray-400 uppercase tracking-wider">Cookie Name</th>
                              <th className="text-left px-4 py-2.5 text-xs font-bold text-gray-400 uppercase tracking-wider">Purpose</th>
                              <th className="text-left px-4 py-2.5 text-xs font-bold text-gray-400 uppercase tracking-wider">Duration</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-50">
                            {type.examples.map((ex) => (
                              <tr key={ex.name} className="hover:bg-gray-50/50">
                                <td className="px-4 py-3 font-mono text-xs text-[#0D1B0F] font-semibold">{ex.name}</td>
                                <td className="px-4 py-3 text-gray-500 text-xs">{ex.purpose}</td>
                                <td className="px-4 py-3 text-gray-400 text-xs whitespace-nowrap">{ex.duration}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Remaining text sections */}
              <div className="space-y-10 mt-10">
                {sections.slice(3).map((section) => (
                  <div key={section.id} id={section.id} className="scroll-mt-28">
                    <h2 className="text-xl font-bold text-[#0D1B0F] mb-3 pb-3 border-b border-gray-100">
                      {section.title}
                    </h2>
                    <p className="text-gray-500 leading-relaxed text-[15px]">{section.body}</p>
                  </div>
                ))}
              </div>

              {/* Contact box */}
              <div
                className="mt-14 rounded-2xl p-7 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0A1A0C 0%, #002D1A 100%)' }}
              >
                <div className="absolute inset-0 bg-dots-white" />
                <div className="relative z-10">
                  <h3 className="font-bold text-white text-lg mb-2">Cookie Questions?</h3>
                  <p className="text-white/55 text-sm mb-6 leading-relaxed">
                    If you have questions about how we use cookies or want to exercise your rights, contact us.
                  </p>
                  <a
                    href="mailto:privacy@kaziconnect.co.ke"
                    className="flex items-center gap-2.5 text-sm text-white/70 hover:text-[#FCD116] transition-colors"
                  >
                    <Mail size={15} className="text-[#FCD116]" />
                    privacy@kaziconnect.co.ke
                  </a>
                </div>
              </div>

              {/* Related policies */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <Link
                  href="/privacy-policy"
                  className="card p-5 group flex items-center justify-between hover:border-[#006B3C]/30 transition-colors"
                >
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Also read</p>
                    <p className="font-semibold text-[#0D1B0F] text-sm">Privacy Policy</p>
                  </div>
                  <ArrowRight size={16} className="text-gray-300 group-hover:text-[#006B3C] transition-colors" />
                </Link>
                <Link
                  href="/terms-of-service"
                  className="card p-5 group flex items-center justify-between hover:border-[#006B3C]/30 transition-colors"
                >
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Also read</p>
                    <p className="font-semibold text-[#0D1B0F] text-sm">Terms of Service</p>
                  </div>
                  <ArrowRight size={16} className="text-gray-300 group-hover:text-[#006B3C] transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
