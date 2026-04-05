import Link from 'next/link'
import { ArrowRight, CheckCircle, X, Star, Zap, Globe, Shield } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    tagline: 'Perfect for first-time job seekers',
    price: '999',
    period: '/month',
    color: '#006B3C',
    badge: null,
    features: [
      { text: 'Professional CV rewrite',           included: true },
      { text: '20 job applications per month',     included: true },
      { text: 'Local Kenya placements',            included: true },
      { text: 'Weekly progress report',            included: true },
      { text: 'Email support',                     included: true },
      { text: 'Employer follow-up calls',          included: false },
      { text: 'Interview coaching sessions',       included: false },
      { text: 'Unadvertised job access',           included: false },
      { text: 'Overseas placement',                included: false },
      { text: 'Dedicated specialist',              included: false },
    ],
  },
  {
    name: 'Professional',
    tagline: 'Our most popular — best value',
    price: '2,499',
    period: '/month',
    color: '#CE1126',
    badge: 'Most Popular',
    features: [
      { text: 'Professional CV rewrite',           included: true },
      { text: '40 job applications per month',     included: true },
      { text: 'Local Kenya placements',            included: true },
      { text: 'Weekly progress report',            included: true },
      { text: 'Priority phone & email support',    included: true },
      { text: 'Employer follow-up calls',          included: true },
      { text: '2 interview coaching sessions',     included: true },
      { text: 'Unadvertised job access',           included: true },
      { text: 'Overseas placement',                included: false },
      { text: 'Dedicated specialist',              included: false },
    ],
  },
  {
    name: 'Executive',
    tagline: 'Complete, white-glove placement service',
    price: '4,999',
    period: '/month',
    color: '#D4AE0E',
    badge: 'Best Results',
    features: [
      { text: 'Professional CV rewrite',           included: true },
      { text: 'Unlimited job applications',        included: true },
      { text: 'Local Kenya placements',            included: true },
      { text: 'Daily progress updates',            included: true },
      { text: 'Dedicated WhatsApp channel',        included: true },
      { text: 'Employer follow-up calls',          included: true },
      { text: 'Unlimited coaching sessions',       included: true },
      { text: 'Unadvertised job access',           included: true },
      { text: 'Overseas placement (UAE, Canada…)', included: true },
      { text: 'Personal dedicated specialist',     included: true },
    ],
  },
]

const industries = [
  { icon: '🏥', name: 'Healthcare & Nursing',    count: '340+', hot: true },
  { icon: '💻', name: 'IT & Technology',          count: '420+', hot: true },
  { icon: '🚗', name: 'Drivers & Transport',      count: '210+', hot: false },
  { icon: '🏨', name: 'Hospitality & Tourism',    count: '180+', hot: false },
  { icon: '🔧', name: 'Construction & Civil',     count: '295+', hot: true },
  { icon: '💰', name: 'Finance & Accounting',     count: '150+', hot: false },
  { icon: '🎓', name: 'Education & Teaching',     count: '190+', hot: false },
  { icon: '🏭', name: 'Manufacturing',            count: '120+', hot: false },
  { icon: '📦', name: 'Warehouse & Logistics',    count: '200+', hot: true },
  { icon: '🌍', name: 'International / Overseas', count: '110+', hot: false },
  { icon: '🔐', name: 'Security Services',        count: '160+', hot: false },
  { icon: '📢', name: 'Sales & Marketing',        count: '230+', hot: false },
]

const extras = [
  {
    icon: <Zap size={22} />,
    title: 'CV & Resume Writing',
    price: 'KSh 500',
    desc: 'Standalone professional CV rewrite. ATS-optimised, industry-specific. Includes cover letter.',
    color: '#006B3C',
    bg: '#E6F4ED',
  },
  {
    icon: <Star size={22} />,
    title: 'Interview Coaching',
    price: 'KSh 1,500',
    desc: 'One-on-one 60-minute session with an industry specialist. Company-specific question prep.',
    color: '#CE1126',
    bg: '#FDEAED',
  },
  {
    icon: <Globe size={22} />,
    title: 'Overseas Package Upgrade',
    price: 'KSh 3,000',
    desc: 'Add overseas placement to any plan. Covers UAE, Saudi Arabia, Qatar, Canada, UK, and more.',
    color: '#D4AE0E',
    bg: '#FEFAE6',
  },
  {
    icon: <Shield size={22} />,
    title: 'Express Priority Service',
    price: 'KSh 1,000',
    desc: 'Jump the queue. Your profile is reviewed and activated within 4 hours of submission.',
    color: '#006B3C',
    bg: '#E6F4ED',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HERO ────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-36 pb-24"
        style={{ background: 'linear-gradient(140deg, #7A0B18 0%, #9B0D1D 40%, #CE1126 100%)' }}
      >
        <div className="absolute inset-0 bg-dots opacity-25" />
        <div className="absolute right-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#FCD116] to-transparent" />
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/6 hidden md:block" />

        <div className="container relative z-10 text-center">
          <div className="eyebrow text-white/60 mb-4 anim-fade-up">Pricing & Services</div>
          <h1 className="display-xl text-white mb-5 anim-fade-up d-100">
            Simple, Transparent<br />
            <span className="text-[#FCD116] italic">Pricing</span>
          </h1>
          <p className="text-white/70 text-[16px] max-w-[500px] mx-auto anim-fade-up d-200 leading-relaxed">
            Choose the plan that fits your career goals. All plans include a professional CV rewrite and 30-day money-back guarantee.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 60L1440 60L1440 0C1200 45 960 5 720 25C480 45 240 0 0 30L0 60Z" fill="#F8F9F5"/>
          </svg>
        </div>
      </section>

      {/* ── PRICING CARDS ──────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 max-w-[1040px] mx-auto">
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                className={`pricing-card relative anim-scale-in d-${(i + 1) * 100} ${plan.badge === 'Most Popular' ? 'featured' : ''}`}
              >
                {plan.badge && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-md whitespace-nowrap"
                    style={{ background: plan.color }}
                  >
                    ⭐ {plan.badge}
                  </div>
                )}

                {/* Plan header */}
                <div
                  className="px-7 py-8 border-b border-gray-100"
                  style={{ borderTop: `4px solid ${plan.color}` }}
                >
                  <h3 className="font-black text-2xl text-[#0D1B0F] mb-1">{plan.name}</h3>
                  <p className="text-gray-500 text-sm mb-5">{plan.tagline}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-gray-400 text-sm font-medium">KSh</span>
                    <span className="font-black text-4xl" style={{ color: plan.color }}>
                      {plan.price}
                    </span>
                    <span className="text-gray-400 text-sm">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="px-7 py-6">
                  <ul className="space-y-2.5 mb-7">
                    {plan.features.map((feat) => (
                      <li key={feat.text} className="flex items-start gap-2.5">
                        {feat.included ? (
                          <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: plan.color }} />
                        ) : (
                          <X size={15} className="mt-0.5 flex-shrink-0 text-gray-300" />
                        )}
                        <span className={`text-sm ${feat.included ? 'text-gray-700' : 'text-gray-350 line-through decoration-gray-200'}`}>
                          {feat.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/apply"
                    className="btn w-full justify-center shine text-sm"
                    style={{
                      background: plan.color,
                      borderColor: plan.color,
                      color: plan.color === '#D4AE0E' ? '#0D1B0F' : '#fff',
                    }}
                  >
                    Choose {plan.name}
                    <ArrowRight size={15} />
                  </Link>
                  <p className="text-center text-xs text-gray-400 mt-3">30-day money-back guarantee</p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment methods */}
          <div className="text-center mt-12">
            <p className="text-gray-400 text-sm mb-4 font-medium">Accepted payment methods</p>
            <div className="flex flex-wrap justify-center gap-3 items-center">
              {['M-Pesa', 'Airtel Money', 'Visa / Mastercard', 'Bank Transfer'].map((method) => (
                <span key={method} className="bg-white border border-gray-200 text-gray-600 text-sm font-semibold px-4 py-2 rounded-lg shadow-sm">
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ADD-ONS ──────────────────────────────────────── */}
      <section className="section-sm bg-[#F4F5F0] relative overflow-hidden">
        <div className="absolute inset-0 bg-tri" />
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <div className="eyebrow text-[#CE1126] mb-3">À La Carte</div>
            <h2 className="display-lg text-[#0D1B0F] mb-4">Individual Services</h2>
            <p className="text-gray-500 max-w-[420px] mx-auto">
              Not ready for a full plan? Pick only the services you need.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {extras.map((extra, i) => (
              <div
                key={extra.title}
                className={`card p-6 anim-scale-in d-${(i + 1) * 100} text-center group`}
              >
                <div
                  className="icon-box mx-auto mb-4"
                  style={{ background: extra.bg, color: extra.color }}
                >
                  {extra.icon}
                </div>
                <h4 className="font-bold text-[#0D1B0F] mb-1 text-[15px]">{extra.title}</h4>
                <p className="font-black text-2xl mb-3" style={{ color: extra.color }}>
                  {extra.price}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{extra.desc}</p>
                <Link href="/apply" className="btn btn-outline-forest text-sm w-full justify-center">
                  Add to Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES GRID ──────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <div className="eyebrow text-[#006B3C] mb-3">All Industries</div>
            <h2 className="display-lg text-[#0D1B0F] mb-4">We Cover Every Sector</h2>
            <p className="text-gray-500 max-w-[480px] mx-auto">
              From healthcare to construction to overseas placements — our network spans every major industry in Kenya and beyond.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <div
                key={ind.name}
                className={`card p-5 flex items-center gap-3 anim-fade-up d-${(i % 4 + 1) * 100} group`}
              >
                <span className="text-2xl flex-shrink-0 group-hover:scale-125 transition-transform duration-300 block">
                  {ind.icon}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <p className="font-semibold text-[#0D1B0F] text-sm leading-tight truncate">{ind.name}</p>
                    {ind.hot && (
                      <span className="flex-shrink-0 text-[9px] font-bold bg-[#CE1126] text-white px-1.5 py-0.5 rounded-full tracking-wide">
                        HOT
                      </span>
                    )}
                  </div>
                  <p className="text-[#006B3C] text-xs font-semibold">{ind.count} openings</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUARANTEE SECTION ────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20"
        style={{ background: 'linear-gradient(140deg, #002D1A 0%, #004D2A 50%, #006B3C 100%)' }}
      >
        <div className="absolute inset-0 bg-diagonal" />
        <div className="absolute right-16 top-1/2 -translate-y-1/2 w-52 h-52 rounded-full border-2 border-[#FCD116]/15 hidden lg:block" />
        <div className="absolute right-24 top-1/2 -translate-y-1/2 w-36 h-36 rounded-full border border-[#FCD116]/20 hidden lg:block" />

        <div className="container relative z-10">
          <div className="max-w-[640px]">
            <div className="eyebrow text-[#FCD116] mb-4">Our Promise</div>
            <h2 className="display-lg text-white mb-5">
              Our Iron-Clad<br />
              <span className="text-[#FCD116] italic">Guarantee</span>
            </h2>
            <p className="text-white/70 text-[16px] mb-8 leading-relaxed">
              If we don&apos;t submit at least the minimum number of applications promised in your plan within 30 days, we refund your subscription in full. No questions asked.
            </p>
            <div className="space-y-3 mb-10">
              {[
                '30-day money-back guarantee on all plans',
                'Free 3-month extension if not placed within 6 months',
                'Re-engagement support if you leave a role within 90 days',
                'Verified employers only — no scams, ever',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={17} className="text-[#FCD116] mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 text-[15px]">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/apply" className="btn btn-gold shine">
              Start Risk-Free Today
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
