import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, ArrowRight, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service — KaziConnect',
  description: 'Read the terms and conditions governing your use of KaziConnect\'s job placement services.',
}

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: [
      {
        subtitle: 'Agreement to Terms',
        body: `By accessing or using the KaziConnect website (kaziconnect.co.ke) or any of our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree to these terms, you must not use our services.`,
      },
      {
        subtitle: 'Eligibility',
        body: `You must be at least 18 years of age and legally capable of entering into binding contracts to use our services. By using our services, you represent and warrant that you meet these eligibility requirements.`,
      },
    ],
  },
  {
    id: 'services',
    title: '2. Our Services',
    content: [
      {
        subtitle: 'What We Offer',
        body: `KaziConnect provides professional job placement and career services including, but not limited to: CV and resume writing, job application services on your behalf, interview coaching, career counselling, employer-candidate matching, and overseas and domestic staffing solutions.`,
      },
      {
        subtitle: 'No Guarantee of Employment',
        body: `While we endeavour to match you with suitable opportunities and apply to positions on your behalf, KaziConnect does not guarantee that you will receive a job offer or be placed in employment. Employment decisions rest solely with the hiring employers.`,
      },
      {
        subtitle: 'Service Modifications',
        body: `We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of services.`,
      },
    ],
  },
  {
    id: 'accounts',
    title: '3. User Accounts and Responsibilities',
    content: [
      {
        subtitle: 'Account Accuracy',
        body: `You agree to provide accurate, current, and complete information when registering or submitting an application. You are responsible for maintaining the accuracy of your information and for updating it promptly if it changes.`,
      },
      {
        subtitle: 'Truthfulness of Application Materials',
        body: `You represent and warrant that all information you provide — including your CV, qualifications, work experience, and references — is truthful and accurate. Providing false or misleading information is grounds for immediate termination of your account and may expose you to legal liability.`,
      },
      {
        subtitle: 'Account Security',
        body: `You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately if you suspect any unauthorised use of your account.`,
      },
      {
        subtitle: 'Prohibited Conduct',
        body: `You agree not to use our services to submit applications for positions you are not genuinely interested in; submit fraudulent, misleading, or plagiarised application materials; harass or misrepresent yourself to potential employers; scrape, copy, or reverse-engineer any part of our platform; or use our services for any unlawful purpose.`,
      },
    ],
  },
  {
    id: 'fees',
    title: '4. Fees and Payment',
    content: [
      {
        subtitle: 'Service Fees',
        body: `Certain services offered by KaziConnect are subject to fees, which will be clearly communicated to you before you commit to a paid service. All fees are stated in Kenyan Shillings (KES) and are inclusive of applicable taxes unless otherwise stated.`,
      },
      {
        subtitle: 'Payment Terms',
        body: `Payment is required before we begin processing your application or delivering paid services. We accept payment via M-Pesa, bank transfer, debit/credit card, and other methods listed on our website. All payments are processed securely.`,
      },
      {
        subtitle: 'Refund Policy',
        body: `Refunds are considered on a case-by-case basis. If you are dissatisfied with a service, please contact us within 7 days of payment. Where a service has not yet been commenced, a full refund may be issued. Partially completed services may attract a partial refund at our discretion. We are unable to issue refunds for services that have been fully delivered.`,
      },
    ],
  },
  {
    id: 'intellectual-property',
    title: '5. Intellectual Property',
    content: [
      {
        subtitle: 'Our Content',
        body: `All content on the KaziConnect website — including text, graphics, logos, icons, images, and software — is the exclusive property of KaziConnect Limited and is protected by Kenyan and international copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without our express written permission.`,
      },
      {
        subtitle: 'Your Content',
        body: `You retain ownership of all personal content you submit (such as your CV and application materials). By submitting content to us, you grant KaziConnect a non-exclusive, worldwide, royalty-free licence to use, reproduce, and share that content for the purpose of providing our services to you.`,
      },
    ],
  },
  {
    id: 'limitation',
    title: '6. Limitation of Liability',
    content: [
      {
        subtitle: 'Disclaimer',
        body: `Our services are provided on an "as is" and "as available" basis. KaziConnect makes no warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement.`,
      },
      {
        subtitle: 'Limitation',
        body: `To the maximum extent permitted by applicable law, KaziConnect shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, loss of data, or loss of goodwill, arising out of or in connection with your use of our services. Our total liability to you for any claim arising from these terms or your use of our services shall not exceed the amount you paid to us in the three months preceding the claim.`,
      },
    ],
  },
  {
    id: 'termination',
    title: '7. Termination',
    content: [
      {
        subtitle: 'Termination by You',
        body: `You may terminate your account and cease using our services at any time by contacting us. Termination does not entitle you to a refund for any paid services already commenced.`,
      },
      {
        subtitle: 'Termination by Us',
        body: `We reserve the right to suspend or terminate your account without notice if we believe you have violated these Terms of Service, provided false information, engaged in fraudulent activity, or acted in a manner that harms other users, employers, or KaziConnect.`,
      },
    ],
  },
  {
    id: 'governing-law',
    title: '8. Governing Law and Disputes',
    content: [
      {
        subtitle: 'Governing Law',
        body: `These Terms of Service are governed by and construed in accordance with the laws of the Republic of Kenya. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Kenya.`,
      },
      {
        subtitle: 'Dispute Resolution',
        body: `We encourage you to contact us first to resolve any disputes informally. If a dispute cannot be resolved informally, either party may refer the matter to mediation before initiating legal proceedings, in accordance with the Nairobi Centre for International Arbitration (NCIA) rules.`,
      },
    ],
  },
  {
    id: 'changes',
    title: '9. Changes to These Terms',
    content: [
      {
        subtitle: 'Updates',
        body: `We reserve the right to update these Terms of Service at any time. Material changes will be communicated to you by email or through a prominent notice on our website. Your continued use of our services after such changes constitutes your acceptance of the revised terms.`,
      },
    ],
  },
]

export default function TermsOfServicePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden pt-36 pb-20"
        style={{ background: 'linear-gradient(140deg, #1A0A0A 0%, #3D0010 45%, #CE1126 100%)' }}
      >
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-[#FCD116] via-[#FCD116]/40 to-transparent" />
        <div className="absolute -right-32 -bottom-32 w-[500px] h-[500px] rounded-full border border-white/5" />

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-[#FCD116] text-xs font-bold px-4 py-2 rounded-full mb-5 backdrop-blur-sm border border-white/10">
            <FileText size={13} />
            Legal
          </div>
          <h1 className="display-xl text-white mb-4">
            Terms of <span className="text-[#FCD116] italic">Service</span>
          </h1>
          <p className="text-white/65 max-w-[460px] mx-auto text-[16px] leading-relaxed">
            Please read these terms carefully before using any of our services.
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
                      className="block text-sm text-gray-500 hover:text-[#CE1126] hover:font-semibold transition-all duration-200 py-1.5 px-3 rounded-lg hover:bg-[#CE1126]/5"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>

                <div className="mt-6 pt-5 border-t border-gray-100">
                  <p className="text-xs text-gray-400 mb-3">Have questions?</p>
                  <Link href="/contact" className="btn btn-crimson text-xs w-full justify-center py-2.5">
                    Contact Us
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </aside>

            {/* ── Main content ── */}
            <div className="max-w-[760px]">
              {/* Intro */}
              <div className="bg-[#FDEAED] border border-[#CE1126]/15 rounded-2xl p-6 mb-10">
                <p className="text-[#6B000F] text-[15px] leading-relaxed">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and{' '}
                  <strong>KaziConnect Limited</strong>, a company incorporated under the laws of Kenya (Registration No. KAZ/2023/001). By accessing our website or using our services, you agree to be bound by these Terms. Please read them carefully.
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
                  <h3 className="font-bold text-white text-lg mb-2">Questions About These Terms?</h3>
                  <p className="text-white/55 text-sm mb-6 leading-relaxed">
                    If anything is unclear or you need clarification, please get in touch with our team.
                  </p>
                  <a
                    href="mailto:legal@kaziconnect.co.ke"
                    className="flex items-center gap-2.5 text-sm text-white/70 hover:text-[#FCD116] transition-colors"
                  >
                    <Mail size={15} className="text-[#FCD116]" />
                    legal@kaziconnect.co.ke
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
