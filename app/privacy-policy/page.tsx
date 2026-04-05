import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, ArrowRight, Mail, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy — KaziConnect',
  description: 'Learn how KaziConnect collects, uses, and protects your personal information.',
}

const sections = [
  {
    id: 'information-we-collect',
    title: '1. Information We Collect',
    content: [
      {
        subtitle: 'Information You Provide Directly',
        body: `When you use our services, we collect information you voluntarily provide, including: your full name, email address, phone number, postal address, CV/resume details, employment history, educational background, professional qualifications, national identification number (where required for background checks), and any other information you include in your job application or profile.`,
      },
      {
        subtitle: 'Information Collected Automatically',
        body: `When you visit our website, we automatically collect certain technical information including your IP address, browser type and version, operating system, referring URLs, pages visited, time spent on pages, and device identifiers. This information is collected through cookies and similar tracking technologies.`,
      },
      {
        subtitle: 'Information from Third Parties',
        body: `We may receive information about you from third parties such as employers, professional reference checks, background screening providers, and social media platforms if you choose to connect your accounts with our services.`,
      },
    ],
  },
  {
    id: 'how-we-use',
    title: '2. How We Use Your Information',
    content: [
      {
        subtitle: 'Service Delivery',
        body: `We use your personal information to provide our core job placement services — including matching your profile with suitable job openings, submitting applications to employers on your behalf, scheduling interviews, and communicating updates on your application status.`,
      },
      {
        subtitle: 'Communication',
        body: `We use your contact details to send service-related communications such as application updates, interview confirmations, and important notices. With your consent, we may also send you marketing communications including job alerts, career tips, and promotional offers. You may opt out of marketing communications at any time.`,
      },
      {
        subtitle: 'Service Improvement',
        body: `We analyse aggregated and anonymised data to improve our platform, understand how users interact with our services, and develop new features. This analysis does not identify individual users.`,
      },
      {
        subtitle: 'Legal Compliance',
        body: `We process personal data where necessary to comply with applicable laws and regulations, respond to lawful requests from public authorities, and protect our legal rights.`,
      },
    ],
  },
  {
    id: 'sharing',
    title: '3. Sharing Your Information',
    content: [
      {
        subtitle: 'With Employers',
        body: `Your CV and professional profile will be shared with prospective employers and hiring managers as part of our core service. We only share your information with employers we consider appropriate matches for your skills and career goals. We will always seek your explicit consent before submitting your application to any specific employer.`,
      },
      {
        subtitle: 'With Service Providers',
        body: `We share data with trusted third-party service providers who assist us in operating our business — including cloud hosting providers, email delivery services, background screening companies, and analytics platforms. All service providers are contractually obligated to handle your data securely and only for the purposes we specify.`,
      },
      {
        subtitle: 'Legal Requirements',
        body: `We may disclose your information if required by law, court order, or governmental authority, or if we believe disclosure is necessary to protect our rights, prevent fraud, or ensure the safety of our users.`,
      },
      {
        subtitle: 'We Do Not Sell Your Data',
        body: `KaziConnect does not sell, rent, or trade your personal information to third parties for their own marketing purposes. Your data is used solely to provide and improve our services.`,
      },
    ],
  },
  {
    id: 'data-retention',
    title: '4. Data Retention',
    content: [
      {
        subtitle: 'Retention Period',
        body: `We retain your personal information for as long as your account is active or as needed to provide you services. If you request deletion of your account, we will delete or anonymise your personal data within 30 days, except where we are required to retain certain information for legal, regulatory, or legitimate business purposes.`,
      },
      {
        subtitle: 'CV and Application Data',
        body: `Your CV and application data is retained for up to 24 months after your last active use of our services, after which it is securely deleted unless you have an active placement or pending application.`,
      },
    ],
  },
  {
    id: 'your-rights',
    title: '5. Your Rights',
    content: [
      {
        subtitle: 'Access and Correction',
        body: `You have the right to access the personal information we hold about you and to request correction of any inaccurate data. You may update your profile information at any time through your account settings or by contacting us directly.`,
      },
      {
        subtitle: 'Deletion',
        body: `You may request deletion of your personal data at any time. We will honour such requests subject to any legal obligations that require us to retain certain records.`,
      },
      {
        subtitle: 'Objection and Restriction',
        body: `You have the right to object to certain types of processing of your personal data or to request that we restrict how we use your data in certain circumstances.`,
      },
      {
        subtitle: 'Data Portability',
        body: `You may request a copy of your personal data in a structured, machine-readable format so you can transfer it to another service provider.`,
      },
    ],
  },
  {
    id: 'security',
    title: '6. Data Security',
    content: [
      {
        subtitle: 'Our Security Measures',
        body: `We implement industry-standard security measures to protect your personal information, including SSL/TLS encryption for data in transit, encrypted storage for sensitive data at rest, access controls restricting who within our organisation can view your data, regular security assessments and audits, and secure data centres with physical access controls.`,
      },
      {
        subtitle: 'Breach Notification',
        body: `In the event of a data breach that affects your personal information, we will notify you and relevant authorities as required by applicable law, as promptly as possible.`,
      },
    ],
  },
  {
    id: 'cookies',
    title: '7. Cookies',
    content: [
      {
        subtitle: 'Use of Cookies',
        body: `Our website uses cookies and similar tracking technologies to enhance your experience. For detailed information about the cookies we use and your choices, please refer to our Cookie Policy.`,
      },
    ],
  },
  {
    id: 'changes',
    title: '8. Changes to This Policy',
    content: [
      {
        subtitle: 'Updates',
        body: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and, where appropriate, by sending you an email notification. Your continued use of our services after such changes constitutes acceptance of the updated policy.`,
      },
    ],
  },
]

export default function PrivacyPolicyPage() {
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
            <Shield size={13} />
            Legal
          </div>
          <h1 className="display-xl text-white mb-4">
            Privacy <span className="text-[#FCD116] italic">Policy</span>
          </h1>
          <p className="text-white/65 max-w-[460px] mx-auto text-[16px] leading-relaxed">
            We are committed to protecting your personal information and your right to privacy.
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
                      className="block text-sm text-gray-500 hover:text-[#006B3C] hover:font-semibold transition-all duration-200 py-1.5 px-3 rounded-lg hover:bg-[#006B3C]/5"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>

                <div className="mt-6 pt-5 border-t border-gray-100">
                  <p className="text-xs text-gray-400 mb-3">Questions about your data?</p>
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
              <div className="bg-[#E6F4ED] border border-[#006B3C]/15 rounded-2xl p-6 mb-10">
                <p className="text-[#004D2A] text-[15px] leading-relaxed">
                  This Privacy Policy explains how <strong>KaziConnect Limited</strong> ("we", "us", or "our"), a company incorporated in Kenya, collects, uses, shares, and protects your personal information when you use our website at{' '}
                  <strong>kaziconnect.co.ke</strong> and our job placement services. Please read this policy carefully. By using our services, you agree to the practices described here.
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-12">
                {sections.map((section) => (
                  <div key={section.id} id={section.id} className="scroll-mt-28">
                    <h2 className="text-xl font-bold text-[#0D1B0F] mb-6 pb-3 border-b border-gray-100">
                      {section.title}
                    </h2>
                    <div className="space-y-5">
                      {section.content.map((item) => (
                        <div key={item.subtitle}>
                          <h3 className="font-semibold text-[#0D1B0F] mb-2 text-[15px]">{item.subtitle}</h3>
                          <p className="text-gray-500 leading-relaxed text-[15px]">{item.body}</p>
                        </div>
                      ))}
                    </div>
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
                  <h3 className="font-bold text-white text-lg mb-2">Contact Our Data Protection Team</h3>
                  <p className="text-white/55 text-sm mb-6 leading-relaxed">
                    If you have questions, concerns, or wish to exercise your data rights, please reach out to us directly.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="mailto:privacy@kaziconnect.co.ke"
                      className="flex items-center gap-2.5 text-sm text-white/70 hover:text-[#FCD116] transition-colors"
                    >
                      <Mail size={15} className="text-[#FCD116]" />
                      privacy@kaziconnect.co.ke
                    </a>
                    <a
                      href="tel:+254700000000"
                      className="flex items-center gap-2.5 text-sm text-white/70 hover:text-[#FCD116] transition-colors"
                    >
                      <Phone size={15} className="text-[#FCD116]" />
                      +254 700 000 000
                    </a>
                  </div>
                </div>
              </div>

              {/* Related policies */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
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
                <Link
                  href="/cookie-policy"
                  className="card p-5 group flex items-center justify-between hover:border-[#006B3C]/30 transition-colors"
                >
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Also read</p>
                    <p className="font-semibold text-[#0D1B0F] text-sm">Cookie Policy</p>
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
