import Link from 'next/link'
import { Briefcase, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ArrowRight, ExternalLink } from 'lucide-react'

const quickLinks = [
  { label: 'Home',         href: '/' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Services',     href: '/services' },
  { label: 'Apply Now',    href: '/apply' },
  { label: 'Contact',      href: '/contact' },
]

const services = [
  { label: 'CV & Resume Writing',   href: '/services' },
  { label: 'Job Search on Behalf',  href: '/services' },
  { label: 'Interview Coaching',    href: '/services' },
  { label: 'Career Counselling',    href: '/services' },
  { label: 'Overseas Placement',    href: '/services' },
  { label: 'Domestic Staffing',     href: '/services' },
]

const jobCategories = [
  'Healthcare & Nursing',
  'Drivers & Logistics',
  'Hospitality & Hotels',
  'Construction & Civil',
  'IT & Technology',
  'Finance & Banking',
]

const socials = [
  { Icon: Facebook,  href: '#', label: 'Facebook' },
  { Icon: Twitter,   href: '#', label: 'Twitter' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Linkedin,  href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A1A0C] text-white relative overflow-hidden">

      {/* ── Decorative background elements ── */}
      <div className="absolute inset-0 bg-dots-white pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#006B3C]/5 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#CE1126]/4 translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      {/* ── Top CTA Band ── */}
      <div className="relative z-10 bg-gradient-to-r from-[#006B3C] via-[#00874D] to-[#006B3C] py-6 border-b border-white/5">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="text-center sm:text-left">
              <p className="font-bold text-xl text-white leading-tight">
                Ready to land your dream job?
              </p>
              <p className="text-white/65 text-sm mt-1">Join 5,200+ professionals placed across Kenya & beyond</p>
            </div>
            <Link
              href="/apply"
              className="btn btn-gold shine flex-shrink-0 text-sm"
            >
              Apply Now — It&apos;s Fast
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main Footer Body ── */}
      <div className="relative z-10 container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* ── Brand Column ── */}
          <div className="sm:col-span-2 lg:col-span-4">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-[#006B3C] to-[#004D2A] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                <Briefcase size={18} color="white" strokeWidth={2.5} />
              </div>
              <div className="leading-tight">
                <span className="block font-bold text-[1.15rem] text-white tracking-tight">
                  Kazi<span className="text-[#FCD116]">Connect</span>
                </span>
                <span className="block text-[10px] font-semibold text-white/35 tracking-widest uppercase">
                  Job Placement Agency
                </span>
              </div>
            </Link>

            <p className="text-white/50 text-[14px] leading-relaxed mb-7 max-w-[300px]">
              Kenya&apos;s most trusted job placement agency. We apply to jobs on your behalf — so you can focus on preparing to succeed.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-7">
              {[
                { icon: MapPin,  text: 'Upper Hill, Nairobi, Kenya',    href: '#' },
                { icon: Phone,   text: '+254 700 000 000',              href: 'tel:+254700000000' },
                { icon: Mail,    text: 'hello@kaziconnect.co.ke',       href: 'mailto:hello@kaziconnect.co.ke' },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  className="flex items-center gap-3 text-[13.5px] text-white/45 hover:text-white/80 transition-colors duration-200 group"
                >
                  <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FCD116]/15 transition-colors duration-200">
                    <Icon size={13} className="text-[#FCD116]" />
                  </div>
                  <span>{text}</span>
                </a>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="social-btn"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div className="lg:col-span-2 lg:col-start-6">
            <p className="footer-heading">Navigation</p>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    <span className="footer-link-dot" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div className="lg:col-span-3">
            <p className="footer-heading">Our Services</p>
            <ul className="space-y-1.5">
              {services.map((service) => (
                <li key={service.label}>
                  <Link href={service.href} className="footer-link">
                    <span className="footer-link-dot" style={{ background: 'rgba(206,17,38,0.5)' }} />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Job Categories + Newsletter ── */}
          <div className="sm:col-span-2 lg:col-span-3">
            <p className="footer-heading">Job Categories</p>
            <ul className="space-y-1.5 mb-8">
              {jobCategories.map((cat) => (
                <li key={cat}>
                  <span className="footer-link cursor-default">
                    <span className="footer-link-dot" style={{ background: 'rgba(252,209,22,0.45)' }} />
                    {cat}
                  </span>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="rounded-2xl p-5 border border-white/8 bg-white/[0.03]">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FCD116] animate-pulse" />
                <p className="text-[13px] font-semibold text-white">Get job alerts</p>
              </div>
              <p className="text-white/40 text-[12px] mb-4 leading-relaxed">
                New openings delivered straight to your inbox.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="newsletter-input"
                  aria-label="Email for job alerts"
                />
                <button
                  className="bg-[#FCD116] hover:bg-[#D4AE0E] text-[#0D1B0F] rounded-[10px] px-4 py-2.5 text-[13px] font-bold transition-all duration-200 hover:scale-105 flex-shrink-0"
                  aria-label="Subscribe"
                >
                  Go
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="relative z-10 border-t border-white/[0.07]" />

      {/* ── Bottom bar ── */}
      <div className="relative z-10 container py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-[13px] text-center md:text-left">
            © {new Date().getFullYear()} KaziConnect Ltd. All rights reserved.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { label: 'Privacy Policy',   href: '/privacy-policy'   },
              { label: 'Terms of Service', href: '/terms-of-service' },
              { label: 'Cookie Policy',    href: '/cookie-policy'    },
              { label: 'Sitemap',          href: '/sitemap'          },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/30 hover:text-white/60 text-[12px] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Made in Kenya */}
          <div className="flex items-center gap-2 text-white/25 text-[12px]">
            <span>Made with</span>
            <span className="text-[#CE1126]">♥</span>
            <span>in Nairobi</span>
          </div>
        </div>
      </div>

    </footer>
  )
}
