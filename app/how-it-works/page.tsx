'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight, CheckCircle, ChevronDown, FileText, Search,
  Calendar, Award, Users, Clock, Shield, Headphones, TrendingUp
} from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: <FileText size={26} />,
    title: 'Submit Your Profile',
    subtitle: 'Takes 5–10 minutes',
    color: '#006B3C',
    bgLight: '#E6F4ED',
    description:
      'Start by filling out our secure online form. Tell us about your education, work experience, preferred job type, and target salary. The more detail you provide, the better we can match you.',
    checklist: [
      'Personal and contact details',
      'Educational background',
      'Work history and achievements',
      'Preferred roles and locations',
      'Target salary range',
    ],
  },
  {
    num: '02',
    icon: <Search size={26} />,
    title: 'Profile Review & CV Upgrade',
    subtitle: 'Within 24 hours',
    color: '#CE1126',
    bgLight: '#FDEAED',
    description:
      'Our career specialists review your submission. We professionally rewrite and optimise your CV for ATS systems, industry keywords, and hiring manager expectations — at no extra charge.',
    checklist: [
      'Professional CV rewrite',
      'LinkedIn profile optimisation',
      'Cover letter templates created',
      'Skills gap analysis',
      'Strategy brief prepared',
    ],
  },
  {
    num: '03',
    icon: <Users size={26} />,
    title: 'Active Job Hunting Begins',
    subtitle: 'Days 2–30',
    color: '#D4AE0E',
    bgLight: '#FEFAE6',
    description:
      'Your dedicated specialist begins applying to curated roles on your behalf — on job boards, company career sites, and via our exclusive employer network. You get a weekly progress report.',
    checklist: [
      'Minimum 20 applications/month (varies by plan)',
      'Access to unadvertised roles',
      'Employer follow-up on your behalf',
      'Weekly digital status report',
      'Real-time notifications on responses',
    ],
  },
  {
    num: '04',
    icon: <Calendar size={26} />,
    title: 'Interview Scheduling & Coaching',
    subtitle: 'When offers start coming',
    color: '#006B3C',
    bgLight: '#E6F4ED',
    description:
      'When employers respond, we handle all the communication and scheduling. Before every interview, we run a tailored coaching session so you walk in confident and prepared.',
    checklist: [
      'Interview appointment management',
      '1-on-1 coaching session per interview',
      'Company-specific prep materials',
      'Common question guides',
      'Salary negotiation coaching',
    ],
  },
  {
    num: '05',
    icon: <Award size={26} />,
    title: 'Offer & Placement',
    subtitle: 'The finish line',
    color: '#CE1126',
    bgLight: '#FDEAED',
    description:
      "You receive an offer! We help you evaluate it, negotiate the terms if needed, and ensure a smooth transition into your new role. Our support doesn't stop at the offer — we check in at 30 and 90 days.",
    checklist: [
      'Offer letter review and advice',
      'Salary and benefits negotiation',
      'Onboarding checklist',
      '30-day and 90-day check-ins',
      'Free re-engagement if needed within 6 months',
    ],
  },
]

const faqs = [
  {
    q: 'How long does it take to get a job through KaziConnect?',
    a: 'Most clients receive their first interview invitation within 7–14 business days of profile approval. Time to job offer depends on the industry and role, but the average across all our placements is 6–8 weeks.',
  },
  {
    q: 'Do I need to pay upfront?',
    a: 'Yes, our service fee is paid when you subscribe to a plan. We offer three tiers — Basic, Professional, and Executive — to suit every budget. All plans include a 30-day money-back guarantee if we fail to submit a single application.',
  },
  {
    q: "What if I don't get a job?",
    a: "We have a strong 87% success rate. If within 6 months we haven't placed you, we offer a free 3-month extension at no cost. Our goal is your success — not just your subscription.",
  },
  {
    q: 'Will you apply for jobs overseas?',
    a: 'Yes! Our Executive plan includes overseas placement for destinations including UAE, Saudi Arabia, Qatar, Canada, and the UK. We handle everything including verification of employer credentials.',
  },
  {
    q: 'Can I choose which jobs you apply to?',
    a: 'Absolutely. On the Professional and Executive plans, we send you a shortlist of positions before applying. You can approve, reject, or request changes. We always act on your preferences.',
  },
  {
    q: 'Is my personal data safe?',
    a: "Yes. We comply with Kenya's Data Protection Act 2019. Your data is stored securely, never sold, and only shared with potential employers with your consent.",
  },
]

const guarantees = [
  { icon: <Shield size={20} />,     text: '30-Day Money-Back Guarantee' },
  { icon: <Clock size={20} />,      text: '24-Hour Profile Review' },
  { icon: <Headphones size={20} />, text: 'Dedicated Human Specialist' },
  { icon: <CheckCircle size={20} />,text: '6-Month Placement Support' },
]

const metrics = [
  { val: '6–8 Weeks', label: 'Average Time to Offer',  sub: 'From profile submission',  color: '#006B3C' },
  { val: '87%',       label: 'Placement Success Rate', sub: 'Across all plans',          color: '#CE1126' },
  { val: '40+',       label: 'Applications Per Month', sub: 'Executive plan',            color: '#D4AE0E' },
  { val: '4.9/5',     label: 'Client Satisfaction',    sub: 'Based on 1,200 reviews',    color: '#006B3C' },
]

export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* ── PAGE HERO ───────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-36 pb-24"
        style={{ background: 'linear-gradient(140deg, #002D1A 0%, #004D2A 45%, #006B3C 100%)' }}
      >
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#FCD116]/4 to-transparent" />
        <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5" />

        <div className="container relative z-10">
          <div className="max-w-[640px]">
            <div className="eyebrow text-[#FCD116] mb-4 anim-fade-up">The Process</div>
            <h1 className="display-xl text-white mb-6 anim-fade-up d-100">
              How{' '}
              <span className="text-[#FCD116] italic">KaziConnect</span>{' '}
              Works
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-[500px] anim-fade-up d-200">
              A transparent, step-by-step process designed to maximise your chances of landing the right job — fast.
            </p>

            {/* Guarantee pills */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 anim-fade-up d-300">
              {guarantees.map((g) => (
                <div key={g.text} className="bg-white/8 backdrop-blur-sm rounded-xl p-3.5 text-center border border-white/10 hover:bg-white/12 transition-colors">
                  <div className="text-[#FCD116] mb-2 flex justify-center">{g.icon}</div>
                  <p className="text-white text-[11px] font-semibold leading-snug">{g.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 60L1440 60L1440 10C1200 50 960 0 720 20C480 40 240 5 0 30L0 60Z" fill="#F8F9F5"/>
          </svg>
        </div>
      </section>

      {/* ── TIMELINE STEPS ──────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-14">
            <div className="eyebrow text-[#CE1126] mb-3">Step by Step</div>
            <h2 className="display-lg text-[#0D1B0F] mb-4">
              From Sign-Up to Signed Offer
            </h2>
            <p className="text-gray-500 max-w-[480px] mx-auto">
              Our five-step process has been refined over thousands of successful placements to deliver consistent, professional results.
            </p>
          </div>

          <div className="max-w-[900px] mx-auto space-y-5">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`card overflow-hidden anim-fade-up d-${(i + 1) * 100}`}
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Number column */}
                  <div
                    className="sm:w-[110px] flex-shrink-0 flex flex-col items-center justify-center p-6"
                    style={{ background: step.color }}
                  >
                    <div className="text-white/50 eyebrow mb-1 text-[10px]">Step</div>
                    <div className="font-black text-4xl text-white leading-none">{step.num}</div>
                    <div className="mt-3 text-white/80">{step.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 sm:p-7">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="font-bold text-xl text-[#0D1B0F]">{step.title}</h3>
                      <span
                        className="badge text-[11px] flex items-center gap-1"
                        style={{ background: step.bgLight, color: step.color }}
                      >
                        <Clock size={10} />
                        {step.subtitle}
                      </span>
                    </div>
                    <p className="text-gray-500 text-[14.5px] leading-relaxed mb-5">
                      {step.description}
                    </p>
                    <div className="grid xs:grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-2">
                      {step.checklist.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <CheckCircle
                            size={14}
                            className="mt-0.5 flex-shrink-0"
                            style={{ color: step.color }}
                          />
                          <span className="text-gray-600 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 mb-5 text-lg">
              Ready to begin? Your journey starts with a single form.
            </p>
            <Link href="/apply" className="btn btn-forest shine">
              Start Your Application
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SUCCESS METRICS BAND ─────────────────────────── */}
      <section className="py-16 bg-[#F4F5F0] relative overflow-hidden">
        <div className="absolute inset-0 bg-diagonal" />
        <div className="container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {metrics.map((m, i) => (
              <div key={m.label} className={`anim-counter d-${(i + 1) * 100}`}>
                <div className="font-black text-3xl md:text-4xl mb-1" style={{ color: m.color }}>{m.val}</div>
                <div className="font-semibold text-[#0D1B0F] text-sm mb-0.5">{m.label}</div>
                <div className="text-gray-400 text-xs">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section className="section">
        <div className="container max-w-[760px]">
          <div className="text-center mb-12">
            <div className="eyebrow text-[#CE1126] mb-3">FAQ</div>
            <h2 className="display-lg text-[#0D1B0F] mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500">
              Can&apos;t find your answer here? Our team is happy to chat — reach out via the contact page.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item last:border-b-0">
                <button
                  className="w-full text-left px-6 sm:px-8 py-5 flex items-start justify-between gap-4 hover:bg-[#F9FAF9] transition-colors group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className={`font-semibold text-[15px] leading-snug transition-colors ${openFaq === i ? 'text-[#006B3C]' : 'text-[#0D1B0F] group-hover:text-[#006B3C]'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 mt-0.5 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-[#006B3C]' : 'text-gray-400'}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 sm:px-8 pb-6">
                    <p className="text-gray-500 text-[15px] leading-relaxed border-l-2 border-[#FCD116] pl-4">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────────── */}
      <section className="section-sm bg-[#006B3C] relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-25" />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-white/8 hidden md:block" />
        <div className="container relative z-10 text-center">
          <h2 className="display-md text-white mb-4">Still have questions?</h2>
          <p className="text-white/65 mb-8 max-w-md mx-auto text-[15px]">
            Our career advisors are available Monday–Saturday, 8am–6pm. Get in touch for a free 15-minute consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn btn-gold shine">
              Contact an Advisor
              <ArrowRight size={15} />
            </Link>
            <Link href="/apply" className="btn btn-outline-white">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
