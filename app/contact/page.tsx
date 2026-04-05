'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  MapPin, Phone, Mail, Clock, MessageSquare,
  CheckCircle, ArrowRight, Facebook, Twitter, Instagram, Linkedin
} from 'lucide-react'

const contactCards = [
  {
    icon: <Phone size={20} />,
    title: 'Phone & WhatsApp',
    lines: ['+254 700 000 000', '+254 733 000 000'],
    sub: 'Mon–Sat, 8am–6pm EAT',
    color: '#006B3C',
    bg: '#E6F4ED',
    action: 'tel:+254700000000',
    actionLabel: 'Call Now',
  },
  {
    icon: <Mail size={20} />,
    title: 'Email Us',
    lines: ['hello@kaziconnect.co.ke', 'support@kaziconnect.co.ke'],
    sub: 'Response within 4 hours',
    color: '#CE1126',
    bg: '#FDEAED',
    action: 'mailto:hello@kaziconnect.co.ke',
    actionLabel: 'Send Email',
  },
  {
    icon: <MapPin size={20} />,
    title: 'Visit Our Office',
    lines: ['Upper Hill Commercial Centre', 'Nairobi, Kenya'],
    sub: 'Walk-ins welcome Mon–Fri 9am–5pm',
    color: '#D4AE0E',
    bg: '#FEFAE6',
    action: '#map',
    actionLabel: 'Get Directions',
  },
  {
    icon: <Clock size={20} />,
    title: 'Working Hours',
    lines: ['Mon – Fri: 8am – 6pm', 'Saturday: 9am – 2pm'],
    sub: 'Sunday & public holidays: closed',
    color: '#006B3C',
    bg: '#E6F4ED',
    action: null,
    actionLabel: null,
  },
]

type ContactForm = {
  name: string; email: string; phone: string
  subject: string; message: string; enquiryType: string
}

const initialForm: ContactForm = {
  name: '', email: '', phone: '', subject: '', message: '', enquiryType: 'general',
}

const enquiryTypes = [
  { id: 'general',  label: 'General Enquiry' },
  { id: 'pricing',  label: 'Pricing & Plans' },
  { id: 'support',  label: 'Client Support' },
  { id: 'employer', label: 'Employer / Hiring' },
]

const socials = [
  { icon: <Facebook size={16} />,  label: 'KaziConnect Kenya',   handle: 'Facebook',  color: '#1877F2', href: '#' },
  { icon: <Twitter size={16} />,   label: '@KaziConnectKE',      handle: 'Twitter/X', color: '#1DA1F2', href: '#' },
  { icon: <Instagram size={16} />, label: '@kaziconnect.ke',     handle: 'Instagram', color: '#E1306C', href: '#' },
  { icon: <Linkedin size={16} />,  label: 'KaziConnect Limited', handle: 'LinkedIn',  color: '#0A66C2', href: '#' },
]

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>(initialForm)
  const [sent, setSent] = useState(false)

  const set = (k: keyof ContactForm, v: string) => setForm((p) => ({ ...p, [k]: v }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      alert('Please fill in all required fields.')
      return
    }
    setSent(true)
  }

  return (
    <>
      {/* ── PAGE HERO ────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-36 pb-20"
        style={{ background: 'linear-gradient(140deg, #002D1A 0%, #004D2A 45%, #006B3C 100%)' }}
      >
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-[#FCD116] via-[#FCD116]/40 to-transparent" />
        <div className="absolute -right-32 -bottom-32 w-[500px] h-[500px] rounded-full border border-white/5" />

        <div className="container relative z-10 text-center">
          <div className="eyebrow text-[#FCD116] mb-4 anim-fade-up">Get in Touch</div>
          <h1 className="display-xl text-white mb-4 anim-fade-up d-100">
            We&apos;re Here<br />
            <span className="text-[#FCD116] italic">to Help You</span>
          </h1>
          <p className="text-white/65 max-w-[420px] mx-auto text-[16px] leading-relaxed anim-fade-up d-200">
            Have a question, want to learn more, or just need advice on your next career move? Let&apos;s talk.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 50L1440 50L1440 0C960 40 480 5 0 25Z" fill="#F8F9F5"/>
          </svg>
        </div>
      </section>

      {/* ── CONTACT CARDS ──────────────────────────────── */}
      <section className="section-sm">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactCards.map((card, i) => (
              <div
                key={card.title}
                className={`card p-6 group anim-scale-in d-${(i + 1) * 100}`}
              >
                <div
                  className="icon-box mb-4"
                  style={{ background: card.bg, color: card.color }}
                >
                  {card.icon}
                </div>
                <h3 className="font-bold text-[#0D1B0F] mb-2 text-[15px]">{card.title}</h3>
                <div className="space-y-0.5 mb-3">
                  {card.lines.map((line) => (
                    <p key={line} className="text-gray-600 text-sm">{line}</p>
                  ))}
                </div>
                <p className="text-gray-400 text-xs mb-4">{card.sub}</p>
                {card.action && card.actionLabel && (
                  <a
                    href={card.action}
                    className="inline-flex items-center gap-1.5 text-xs font-bold transition-all hover:gap-2.5"
                    style={{ color: card.color }}
                  >
                    {card.actionLabel}
                    <ArrowRight size={12} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM + SIDEBAR ─────────────────────────── */}
      <section className="section bg-[#F4F5F0] relative overflow-hidden">
        <div className="absolute inset-0 bg-tri" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-start">

            {/* ── Form ── */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              {!sent ? (
                <>
                  <div
                    className="px-7 sm:px-8 py-6 border-b border-gray-100"
                    style={{ borderTop: '4px solid #006B3C' }}
                  >
                    <h2 className="font-bold text-2xl text-[#0D1B0F] mb-1">Send Us a Message</h2>
                    <p className="text-gray-400 text-sm">We typically respond within 4 business hours.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="p-7 sm:p-8 space-y-6">
                    {/* Enquiry type */}
                    <div>
                      <label className="form-label">Enquiry Type</label>
                      <div className="flex flex-wrap gap-2">
                        {enquiryTypes.map((t) => (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => set('enquiryType', t.id)}
                            className={`px-4 py-2 rounded-lg text-sm font-semibold border-2 transition-all duration-200 ${
                              form.enquiryType === t.id
                                ? 'border-[#006B3C] bg-[#006B3C] text-white'
                                : 'border-gray-200 text-gray-500 hover:border-[#006B3C] hover:text-[#006B3C]'
                            }`}
                          >
                            {t.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="form-label">Full Name <span className="text-[#CE1126]">*</span></label>
                        <input
                          className="form-input"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={(e) => set('name', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="form-label">Phone Number</label>
                        <input
                          className="form-input"
                          type="tel"
                          placeholder="+254 7XX XXX XXX"
                          value={form.phone}
                          onChange={(e) => set('phone', e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="form-label">Email Address <span className="text-[#CE1126]">*</span></label>
                      <input
                        className="form-input"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => set('email', e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label className="form-label">Subject</label>
                      <input
                        className="form-input"
                        placeholder="What's on your mind?"
                        value={form.subject}
                        onChange={(e) => set('subject', e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="form-label">Message <span className="text-[#CE1126]">*</span></label>
                      <textarea
                        className="form-input"
                        rows={5}
                        placeholder="Tell us how we can help you…"
                        value={form.message}
                        onChange={(e) => set('message', e.target.value)}
                        required
                        style={{ resize: 'vertical', minHeight: '120px' }}
                      />
                    </div>

                    <button type="submit" className="btn btn-forest shine w-full justify-center text-[15px]">
                      Send Message
                      <ArrowRight size={15} />
                    </button>
                    <p className="text-center text-xs text-gray-400 -mt-2">
                      We respect your privacy. Your information is never shared without consent.
                    </p>
                  </form>
                </>
              ) : (
                <div className="p-12 text-center anim-scale-in">
                  <div className="w-16 h-16 rounded-full bg-[#006B3C] flex items-center justify-center mx-auto mb-5 shadow-[0_8px_30px_rgba(0,107,60,0.35)]">
                    <CheckCircle size={32} color="white" strokeWidth={2} />
                  </div>
                  <h3 className="font-bold text-2xl text-[#0D1B0F] mb-3">Message Sent!</h3>
                  <p className="text-gray-500 mb-6 leading-relaxed">
                    Thank you, <strong>{form.name}</strong>! We&apos;ve received your message and will respond to{' '}
                    <strong>{form.email}</strong> within 4 hours.
                  </p>
                  <button
                    onClick={() => { setForm(initialForm); setSent(false) }}
                    className="btn btn-outline-forest text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>

            {/* ── Right sidebar ── */}
            <div className="space-y-5">

              {/* Quick Apply CTA */}
              <div
                className="rounded-2xl p-7 text-white relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #CE1126 0%, #E8192E 100%)' }}
              >
                <div className="absolute inset-0 bg-diagonal" />
                <div className="relative z-10">
                  <div className="eyebrow text-white/55 mb-2">Ready to start?</div>
                  <h3 className="font-bold text-xl mb-3 leading-snug">Apply for Our Job Search Service</h3>
                  <p className="text-white/75 text-sm mb-5 leading-relaxed">
                    Skip the contact form and go straight to our application. Takes less than 10 minutes.
                  </p>
                  <Link href="/apply" className="btn btn-gold shine text-sm">
                    Apply Now
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Social media */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h4 className="font-bold text-[#0D1B0F] mb-4 text-[15px]">Follow Us</h4>
                <div className="space-y-2">
                  {socials.map((s) => (
                    <a
                      key={s.handle}
                      href={s.href}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                        style={{ background: s.color }}
                      >
                        {s.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-[#0D1B0F] text-sm truncate">{s.label}</p>
                        <p className="text-gray-400 text-xs">{s.handle}</p>
                      </div>
                      <ArrowRight size={14} className="ml-auto text-gray-300 group-hover:text-[#006B3C] transition-colors flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Office card */}
              <div id="map" className="bg-[#0A1A0C] rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-dots-white" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-[#FCD116]/15 flex items-center justify-center flex-shrink-0">
                      <MapPin size={14} className="text-[#FCD116]" />
                    </div>
                    <h4 className="font-bold text-white text-[15px]">Our Office</h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    Upper Hill Commercial Centre<br />
                    Hospital Road, Upper Hill<br />
                    Nairobi, Kenya · P.O. Box 00100
                  </p>
                  {/* Map placeholder */}
                  <div className="w-full h-28 rounded-xl bg-[#006B3C]/15 border border-[#006B3C]/25 flex items-center justify-center mb-5">
                    <div className="text-center">
                      <MapPin size={24} className="text-[#FCD116] mx-auto mb-1" />
                      <p className="text-xs text-gray-500">Upper Hill, Nairobi</p>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold shine text-sm w-full justify-center"
                  >
                    Open in Google Maps
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOR EMPLOYERS ────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="max-w-[820px] mx-auto text-center">
            <div className="eyebrow text-[#CE1126] mb-3">For Employers</div>
            <h2 className="display-lg text-[#0D1B0F] mb-5">
              Looking to Hire Top Talent?
            </h2>
            <p className="text-gray-500 text-[16px] mb-10 max-w-[560px] mx-auto leading-relaxed">
              We have a pool of pre-screened, job-ready candidates across every industry in Kenya and beyond. Let us match you with the perfect hire — fast.
            </p>
            <div className="grid sm:grid-cols-3 gap-5 mb-10">
              {[
                { icon: '🎯', title: 'Targeted Matching', desc: 'We match candidates to your exact role specifications.' },
                { icon: '⚡', title: 'Fast Turnaround',   desc: 'Shortlist of 5 vetted candidates within 5 business days.' },
                { icon: '✅', title: 'Pre-Screened Only', desc: 'Every candidate is verified, reference-checked, and ready.' },
              ].map((item) => (
                <div key={item.title} className="card p-6 text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-[#0D1B0F] mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn btn-crimson shine">
              <MessageSquare size={16} />
              Contact Our Employer Team
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
