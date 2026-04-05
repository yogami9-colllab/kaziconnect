import Link from 'next/link'
import {
  ArrowRight, CheckCircle, Star, Users, TrendingUp, Shield, Award,
  Briefcase, Clock, MapPin, ChevronRight, Zap, Globe, HeartHandshake
} from 'lucide-react'

const stats = [
  { value: '5,200+', label: 'Jobs Placed',       color: 'text-[#006B3C]' },
  { value: '87%',    label: 'Success Rate',       color: 'text-[#CE1126]' },
  { value: '200+',   label: 'Partner Companies',  color: 'text-[#D4AE0E]' },
  { value: '47',     label: 'Cities Covered',     color: 'text-[#006B3C]' },
]

const categories = [
  { icon: '🏥', label: 'Healthcare & Nursing',  count: '340+ openings' },
  { icon: '🚗', label: 'Drivers & Logistics',   count: '210+ openings' },
  { icon: '🏨', label: 'Hospitality & Hotels',  count: '180+ openings' },
  { icon: '🔧', label: 'Construction & Civil',  count: '295+ openings' },
  { icon: '💻', label: 'IT & Technology',        count: '420+ openings' },
  { icon: '💰', label: 'Finance & Banking',      count: '150+ openings' },
  { icon: '🎓', label: 'Education & Teaching',   count: '190+ openings' },
  { icon: '🌍', label: 'Overseas Placement',     count: '110+ openings' },
]

const marqueeItems = [
  'Healthcare', 'Nursing', 'Driver', 'Hotel Staff', 'IT Engineer', 'Accountant',
  'Teacher', 'Security Guard', 'Waiter', 'Chef', 'Electrician', 'Plumber',
  'Sales Executive', 'Marketing', 'Construction', 'Banker', 'Pilot', 'Cleaner',
]

const steps = [
  {
    num: '01',
    title: 'Submit Your Profile',
    desc: 'Fill in our quick form with your details, experience, and the type of job you want.',
    icon: '📋',
    color: 'bg-[#006B3C]',
  },
  {
    num: '02',
    title: 'We Search & Apply',
    desc: 'Our specialist team actively searches job boards, company sites, and our partner network on your behalf.',
    icon: '🔍',
    color: 'bg-[#CE1126]',
  },
  {
    num: '03',
    title: 'You Get Hired',
    desc: 'We schedule interviews, coach you, and support you all the way to your offer letter.',
    icon: '🎉',
    color: 'bg-[#D4AE0E]',
  },
]

const benefits = [
  {
    icon: <Zap size={24} />,
    title: 'Fast Results',
    desc: 'Most clients receive their first interview invitation within 7–14 business days.',
    accent: '#006B3C',
  },
  {
    icon: <Shield size={24} />,
    title: 'Fully Verified Jobs',
    desc: 'Every listing is pre-screened. No scams, no fake listings — only legitimate employers.',
    accent: '#CE1126',
  },
  {
    icon: <Globe size={24} />,
    title: 'Local & Abroad',
    desc: 'We place candidates across Kenya and internationally — UAE, Saudi Arabia, Canada, and more.',
    accent: '#D4AE0E',
  },
  {
    icon: <HeartHandshake size={24} />,
    title: 'Dedicated Support',
    desc: 'A real human specialist works your case from submission to signing your contract.',
    accent: '#006B3C',
  },
]

const testimonials = [
  {
    name: 'Amina Wanjiru',
    role: 'Registered Nurse — Now in Dubai',
    text: 'I had been job hunting for 8 months with no success. KaziConnect placed me in a Dubai hospital within 3 weeks. I couldn\'t believe it. Truly life-changing service.',
    rating: 5,
    avatar: 'AW',
    tag: 'Healthcare',
    color: '#006B3C',
  },
  {
    name: 'Brian Otieno',
    role: 'IT Engineer — Nairobi CBD',
    text: 'The team wrote my CV, applied to 40+ companies, and got me 6 interviews in two weeks. I landed a senior role at a top firm. Worth every shilling!',
    rating: 5,
    avatar: 'BO',
    tag: 'Technology',
    color: '#CE1126',
  },
  {
    name: 'Grace Muthoni',
    role: 'Hotel Manager — Mombasa',
    text: 'Exceptional service. They knew exactly which hotels were hiring and my profile was a perfect match. I was placed in a 5-star property within a month.',
    rating: 5,
    avatar: 'GM',
    tag: 'Hospitality',
    color: '#D4AE0E',
  },
]

const partners = [
  'Safaricom', 'KCB Bank', 'Aga Khan Hospital', 'Nation Media', 'Kenya Airways',
  'Equity Bank', 'Britam', 'Strathmore', 'EABL', 'Radisson Hotel',
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(140deg, #002D1A 0%, #004D2A 40%, #006B3C 80%, #007A45 100%)' }}
      >
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="absolute inset-0 bg-diagonal" />

        {/* Decorative circles */}
        <div className="absolute -right-32 -top-32 w-[700px] h-[700px] rounded-full border border-white/4" />
        <div className="absolute -right-16 top-0 w-[450px] h-[450px] rounded-full border border-white/6" />
        <div className="absolute -left-40 bottom-0 w-[500px] h-[500px] rounded-full border border-[#FCD116]/8" />

        {/* Gold accent line */}
        <div className="absolute top-0 right-0 w-[3px] h-full bg-gradient-to-b from-[#FCD116] via-[#FCD116]/30 to-transparent" />

        <div className="container relative z-10 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left: Text */}
            <div className="max-w-[660px]">
              {/* Badge */}
              <div className="anim-fade-up mb-7 inline-flex items-center gap-2.5 bg-[#FCD116]/12 border border-[#FCD116]/25 rounded-full px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-[#FCD116] animate-pulse-slow flex-shrink-0" />
                <span className="text-[#FCD116] text-sm font-semibold tracking-wide">
                  Kenya&apos;s #1 Rated Job Placement Service
                </span>
              </div>

              <h1 className="display-xl text-white anim-fade-up d-100 mb-6">
                We Apply.<br />
                <span className="text-[#FCD116] italic">You</span>{' '}
                Get Hired.
              </h1>

              <p className="anim-fade-up d-200 text-white/70 text-lg md:text-xl leading-relaxed max-w-[540px] mb-10">
                Stop wasting hours on job boards. Our expert team finds the right positions and applies on your behalf — while you prepare to succeed.
              </p>

              {/* CTAs */}
              <div className="anim-fade-up d-300 flex flex-wrap items-center gap-4 mb-12">
                <Link href="/apply" className="btn btn-gold shine text-[15px]">
                  Start Your Job Search
                  <ArrowRight size={16} />
                </Link>
                <Link href="/how-it-works" className="btn btn-outline-white text-[15px]">
                  See How It Works
                </Link>
              </div>

              {/* Social proof */}
              <div className="anim-fade-up d-400 flex flex-wrap items-center gap-5">
                <div className="flex -space-x-2.5">
                  {['JM', 'AW', 'BO', 'FK'].map((initials, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-[#006B3C] flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
                      style={{ background: ['#CE1126','#D4AE0E','#006B3C','#004D2A'][i] }}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} className="text-[#FCD116] fill-[#FCD116]" />
                    ))}
                  </div>
                  <p className="text-white/55 text-sm">
                    <strong className="text-white">5,200+</strong> professionals placed
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Floating job card — hidden on small screens */}
            <div className="hidden lg:flex flex-col items-end gap-4 anim-float">
              <div className="bg-white rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.35)] p-6 w-[300px]">
                <div className="flex items-center justify-between mb-4">
                  <span className="badge badge-forest text-xs">New Opening</span>
                  <span className="text-xs text-gray-400 font-medium">2h ago</span>
                </div>
                <h3 className="font-bold text-[#0D1B0F] text-lg mb-1">Senior ICT Officer</h3>
                <p className="text-gray-500 text-sm mb-4">KCB Bank Group — Nairobi, Kenya</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['KSh 120K–180K', 'Full-time', 'On-site'].map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="h-px bg-gray-100 mb-4" />
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Applied by KaziConnect</span>
                  <span className="w-6 h-6 bg-[#006B3C] rounded-full flex items-center justify-center">
                    <CheckCircle size={14} color="white" strokeWidth={2.5} />
                  </span>
                </div>
              </div>

              <div className="bg-[#FCD116] rounded-xl shadow-[0_8px_30px_rgba(252,209,22,0.4)] p-4 w-[220px]">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle size={16} className="text-[#7C6508]" />
                  <span className="text-[#7C6508] text-sm font-bold">Offer Accepted!</span>
                </div>
                <p className="text-[#7C6508] text-xs">Grace M. — Hotel Manager, Mombasa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 80L1440 80L1440 20C1200 70 960 0 720 30C480 60 240 10 0 40L0 80Z" fill="#F8F9F5"/>
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100 py-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-gray-100">
            {stats.map(({ value, label, color }, i) => (
              <div key={label} className={`text-center px-4 anim-counter d-${(i + 1) * 100}`}>
                <div className={`font-bold text-4xl md:text-5xl ${color} mb-1`}>
                  {value}
                </div>
                <div className="text-gray-500 text-sm font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE TICKER ─────────────────────────────── */}
      <section className="bg-[#006B3C] py-4 overflow-hidden" aria-hidden="true">
        <div className="flex gap-0 anim-marquee whitespace-nowrap">
          {[...Array(4)].map((_, gi) => (
            <div key={gi} className="flex items-center gap-0">
              {marqueeItems.map((item, i) => (
                <span key={`${gi}-${i}`} className="flex items-center gap-4 px-6">
                  <span className="text-white font-semibold text-sm tracking-wide">{item}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FCD116] flex-shrink-0" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-[520px] mx-auto mb-14">
            <div className="eyebrow text-[#CE1126] mb-3 anim-fade-up">The Process</div>
            <h2 className="display-lg text-[#0D1B0F] anim-fade-up d-100 mb-4">
              Three Steps to Your New Job
            </h2>
            <p className="text-gray-500 anim-fade-up d-200">
              We&apos;ve removed all the frustration from job hunting. Just follow three simple steps and watch the offers roll in.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`relative card p-8 text-center group anim-scale-in d-${(i + 1) * 200}`}
              >
                {i < 2 && (
                  <div className="hidden md:block absolute top-[56px] -right-3 z-10 w-6">
                    <ChevronRight size={20} className="text-gray-300 mx-auto" />
                  </div>
                )}
                <div className={`${step.color} text-white w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                <div className="eyebrow text-gray-400 mb-2">Step {step.num}</div>
                <h3 className="font-bold text-xl text-[#0D1B0F] mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/how-it-works" className="btn btn-outline-forest text-sm">
              Learn More About Our Process
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── JOB CATEGORIES ─────────────────────────────── */}
      <section className="section bg-[#F4F5F0] relative overflow-hidden">
        <div className="absolute inset-0 bg-tri" />
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-[440px]">
              <div className="eyebrow text-[#006B3C] mb-3">Industries We Cover</div>
              <h2 className="display-lg text-[#0D1B0F]">Find Jobs in Any Field</h2>
            </div>
            <Link href="/services" className="btn btn-forest text-sm flex-shrink-0 self-start md:self-auto">
              View All Categories
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <Link
                href="/apply"
                key={cat.label}
                className={`card p-5 sm:p-6 group cursor-pointer anim-fade-up d-${(i % 4 + 1) * 100}`}
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-[#0D1B0F] text-[14px] sm:text-[15px] mb-1 leading-snug">{cat.label}</h3>
                <p className="text-[#006B3C] text-xs font-semibold">{cat.count}</p>
                <div className="mt-4 flex items-center gap-1 text-gray-400 text-xs group-hover:text-[#CE1126] transition-colors">
                  <span>Apply via us</span>
                  <ChevronRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ──────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="eyebrow text-[#CE1126] mb-3 anim-slide-left">Why KaziConnect</div>
              <h2 className="display-lg text-[#0D1B0F] mb-6 anim-slide-left d-100">
                The Smarter Way to Find Work
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8 anim-slide-left d-200">
                Traditional job hunting is exhausting and demoralising. Our model is completely different — we do the hard work so your energy goes where it matters: becoming the best candidate for the role.
              </p>
              <div className="space-y-4 anim-slide-left d-300">
                {[
                  'Professional CV writing included with every plan',
                  'Access to unadvertised job openings via our network',
                  'Interview preparation and coaching',
                  'Guaranteed minimum applications per month',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#006B3C] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-[15px]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-4 anim-slide-left d-400">
                <Link href="/apply" className="btn btn-crimson shine text-sm">
                  Get Started Today
                  <ArrowRight size={15} />
                </Link>
                <Link href="/services" className="btn btn-outline-forest text-sm">
                  View Pricing
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 anim-slide-right d-200">
              {benefits.map((b, i) => (
                <div
                  key={b.title}
                  className={`card p-5 sm:p-6 anim-scale-in d-${(i + 1) * 100}`}
                >
                  <div
                    className="icon-box mb-4"
                    style={{ background: `${b.accent}14`, color: b.accent }}
                  >
                    {b.icon}
                  </div>
                  <h4 className="font-bold text-[#0D1B0F] mb-2 text-[15px]">{b.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────── */}
      <section className="section bg-[#0A1A0C] relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-white opacity-60" />
        <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#FCD116] via-[#CE1126] to-[#006B3C]" />

        <div className="container relative z-10">
          <div className="text-center mb-14">
            <div className="eyebrow text-[#FCD116] mb-3">Success Stories</div>
            <h2 className="display-lg text-white mb-4">
              Real People. Real Results.
            </h2>
            <p className="text-gray-400 max-w-[480px] mx-auto">
              Thousands of Kenyans have transformed their careers through KaziConnect. Here&apos;s what they say.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`testimonial-card anim-fade-up d-${(i + 1) * 100}`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, si) => (
                    <Star key={si} size={14} className="text-[#FCD116] fill-[#FCD116]" />
                  ))}
                </div>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ background: t.color }}
                  >
                    {t.avatar}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-[#0D1B0F] text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs truncate">{t.role}</p>
                  </div>
                  <span className="ml-auto badge badge-forest text-xs flex-shrink-0">{t.tag}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Partner logos */}
          <div className="mt-16 pt-12 border-t border-white/8">
            <p className="text-center text-gray-500 text-sm font-semibold tracking-widest uppercase mb-8">
              Trusted by leading employers
            </p>
            <div className="flex flex-wrap justify-center gap-5 md:gap-10">
              {partners.map((partner) => (
                <span key={partner} className="text-gray-600 font-bold text-[14px] hover:text-[#FCD116] transition-colors cursor-default">
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20"
        style={{ background: 'linear-gradient(135deg, #9B0D1D 0%, #CE1126 50%, #E8192E 100%)' }}
      >
        <div className="absolute inset-0 bg-diagonal" />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-2 border-white/8 hidden sm:block" />
        <div className="absolute -left-10 -bottom-20 w-[300px] h-[300px] rounded-full border border-white/6 hidden sm:block" />

        <div className="container relative z-10 text-center">
          <div className="max-w-[620px] mx-auto">
            <div className="eyebrow text-white/65 mb-4">Start Today</div>
            <h2 className="display-lg text-white mb-5">
              Your Next Job Is Waiting.<br />
              <span className="text-[#FCD116] italic">Let&apos;s Go Get It.</span>
            </h2>
            <p className="text-white/72 text-lg mb-10">
              Join 5,200+ Kenyans who trusted KaziConnect to find their perfect position. Plans start from KSh 999.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/apply" className="btn btn-gold shine text-[15px]">
                Apply Now — Get Started
                <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn btn-outline-white text-[15px]">
                Talk to an Advisor
              </Link>
            </div>
            <p className="text-white/45 text-xs mt-6">
              No long-term contracts. Cancel anytime. 30-day money-back guarantee.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
