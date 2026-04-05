'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle, ArrowRight, ArrowLeft, User, Briefcase, CreditCard, Smartphone, Lock, Star } from 'lucide-react'

const plans = [
  { id: 'basic',        name: 'Basic',        price: 'KSh 999/mo',   color: '#006B3C', bg: '#E6F4ED' },
  { id: 'professional', name: 'Professional', price: 'KSh 2,499/mo', color: '#CE1126', bg: '#FDEAED', popular: true },
  { id: 'executive',    name: 'Executive',    price: 'KSh 4,999/mo', color: '#D4AE0E', bg: '#FEFAE6' },
]

const jobTypes = [
  'Healthcare & Nursing', 'IT & Technology', 'Finance & Accounting',
  'Education & Teaching', 'Construction & Civil', 'Drivers & Transport',
  'Hospitality & Hotels', 'Sales & Marketing', 'Security Services',
  'Manufacturing', 'Warehouse & Logistics', 'International / Overseas',
]

const counties = [
  'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Thika',
  'Malindi', 'Kitale', 'Garissa', 'Kakamega', 'Any County',
]

type FormData = {
  firstName: string; lastName: string; email: string; phone: string
  county: string; education: string; experience: string; jobType: string
  preferredLocation: string; salaryMin: string; salaryMax: string
  plan: string; payment: string; mpesaName: string; agreed: boolean
}

const initialForm: FormData = {
  firstName: '', lastName: '', email: '', phone: '',
  county: '', education: '', experience: '', jobType: '',
  preferredLocation: 'Kenya (Any County)', salaryMin: '', salaryMax: '',
  plan: 'professional', payment: 'mpesa', mpesaName: '', agreed: false,
}

const formSteps = [
  { id: 1, label: 'Personal Details', icon: <User size={16} /> },
  { id: 2, label: 'Career Profile',   icon: <Briefcase size={16} /> },
  { id: 3, label: 'Plan & Payment',   icon: <CreditCard size={16} /> },
]

export default function ApplyPage() {
  const [step, setStep]           = useState(1)
  const [form, setForm]           = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const set = (field: keyof FormData, val: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: val }))

  const handleSubmit = () => {
    if (!form.agreed) { alert('Please agree to our terms to continue.'); return }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F9F5] px-4 pt-24 pb-16">
        <div className="max-w-[520px] w-full text-center anim-scale-in">
          <div className="w-24 h-24 rounded-full bg-[#006B3C] flex items-center justify-center mx-auto mb-6 shadow-[0_8px_30px_rgba(0,107,60,0.35)]">
            <CheckCircle size={44} color="white" strokeWidth={2} />
          </div>
          <span className="tag-strip mb-4 inline-block">Application Received</span>
          <h1 className="display-md text-[#0D1B0F] mb-4 mt-2">
            You&apos;re All Set,<br />
            <span className="text-[#006B3C] italic">{form.firstName || 'there'}!</span>
          </h1>
          <p className="text-gray-500 text-[16px] leading-relaxed mb-8">
            Our team will review your profile and be in touch within{' '}
            <strong className="text-[#0D1B0F]">24 hours</strong> via{' '}
            <strong className="text-[#0D1B0F]">{form.email}</strong>.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8 text-left shadow-sm">
            <h3 className="font-bold text-[#0D1B0F] mb-4">What happens next?</h3>
            <div className="space-y-3">
              {[
                { time: 'Within 24 hours', text: 'Profile reviewed & CV professionally rewritten' },
                { time: 'Day 2',           text: 'Job hunting begins — applications submitted' },
                { time: 'Week 1–2',        text: 'First interview invitations expected' },
                { time: 'Weekly',          text: 'Progress report delivered to your inbox' },
              ].map((item) => (
                <div key={item.time} className="flex items-start gap-3">
                  <span className="flex-shrink-0 px-2.5 py-0.5 bg-[#006B3C]/10 text-[#006B3C] text-xs font-bold rounded-full whitespace-nowrap">
                    {item.time}
                  </span>
                  <span className="text-gray-600 text-sm leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn btn-forest shine">
              Back to Home
              <ArrowRight size={15} />
            </Link>
            <Link href="/how-it-works" className="btn btn-outline-forest">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* ── PAGE HERO ────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-32 pb-16"
        style={{ background: 'linear-gradient(140deg, #002D1A 0%, #004D2A 50%, #006B3C 100%)' }}
      >
        <div className="absolute inset-0 bg-dots opacity-35" />
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-white/5 hidden md:block" />
        <div className="container relative z-10 text-center">
          <div className="eyebrow text-[#FCD116] mb-3 anim-fade-up">Get Started</div>
          <h1 className="display-lg text-white mb-3 anim-fade-up d-100">
            Apply in Under 10 Minutes
          </h1>
          <p className="text-white/65 max-w-md mx-auto anim-fade-up d-200 text-[15px]">
            Fill out your profile below. Our team reviews every submission personally and gets to work within 24 hours.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 40L1440 40L1440 0C960 35 480 0 0 20Z" fill="#F8F9F5"/>
          </svg>
        </div>
      </section>

      {/* ── FORM ─────────────────────────────────────────── */}
      <section className="section-sm">
        <div className="container max-w-[680px]">

          {/* Step indicator */}
          <div className="flex items-center justify-center mb-10">
            {formSteps.map((s, i) => (
              <div key={s.id} className="flex items-center">
                <button
                  onClick={() => step > s.id && setStep(s.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    step === s.id
                      ? 'bg-[#006B3C] text-white shadow-[0_4px_16px_rgba(0,107,60,0.3)]'
                      : step > s.id
                      ? 'bg-[#006B3C]/12 text-[#006B3C] cursor-pointer hover:bg-[#006B3C]/20'
                      : 'bg-gray-100 text-gray-400 cursor-default'
                  }`}
                >
                  <span className="flex-shrink-0">
                    {step > s.id ? <CheckCircle size={15} /> : s.icon}
                  </span>
                  <span className="hidden sm:block">{s.label}</span>
                </button>
                {i < formSteps.length - 1 && (
                  <div className={`h-px w-5 md:w-10 mx-1 transition-colors duration-300 ${step > s.id ? 'bg-[#006B3C]' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>

          {/* Form card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

            {/* ── Step 1: Personal Details ── */}
            {step === 1 && (
              <div className="p-7 sm:p-8 anim-fade-in">
                <div className="mb-7">
                  <h2 className="font-bold text-2xl text-[#0D1B0F] mb-1">Personal Details</h2>
                  <p className="text-gray-400 text-sm">Tell us who you are so we can match you with the right opportunities.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">First Name <span className="text-[#CE1126]">*</span></label>
                    <input className="form-input" placeholder="e.g. Amina" value={form.firstName}
                      onChange={(e) => set('firstName', e.target.value)} />
                  </div>
                  <div>
                    <label className="form-label">Last Name <span className="text-[#CE1126]">*</span></label>
                    <input className="form-input" placeholder="e.g. Wanjiru" value={form.lastName}
                      onChange={(e) => set('lastName', e.target.value)} />
                  </div>
                  <div>
                    <label className="form-label">Email Address <span className="text-[#CE1126]">*</span></label>
                    <input className="form-input" type="email" placeholder="you@example.com" value={form.email}
                      onChange={(e) => set('email', e.target.value)} />
                  </div>
                  <div>
                    <label className="form-label">Phone Number <span className="text-[#CE1126]">*</span></label>
                    <input className="form-input" type="tel" placeholder="+254 7XX XXX XXX" value={form.phone}
                      onChange={(e) => set('phone', e.target.value)} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="form-label">County of Residence <span className="text-[#CE1126]">*</span></label>
                    <select className="form-input form-select" value={form.county} onChange={(e) => set('county', e.target.value)}>
                      <option value="">Select your county…</option>
                      {counties.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="form-label">Highest Education Level <span className="text-[#CE1126]">*</span></label>
                    <select className="form-input form-select" value={form.education} onChange={(e) => set('education', e.target.value)}>
                      <option value="">Select level…</option>
                      {["KCSE Certificate", "Diploma", "Bachelor's Degree", "Master's Degree", "PhD", "Professional Certification", "No Formal Education"].map(
                        (e) => <option key={e} value={e}>{e}</option>
                      )}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* ── Step 2: Career Profile ── */}
            {step === 2 && (
              <div className="p-7 sm:p-8 anim-fade-in">
                <div className="mb-7">
                  <h2 className="font-bold text-2xl text-[#0D1B0F] mb-1">Career Profile</h2>
                  <p className="text-gray-400 text-sm">Help us understand your experience and what job you&apos;re looking for.</p>
                </div>
                <div className="space-y-5">
                  <div>
                    <label className="form-label">Years of Work Experience <span className="text-[#CE1126]">*</span></label>
                    <select className="form-input form-select" value={form.experience} onChange={(e) => set('experience', e.target.value)}>
                      <option value="">Select range…</option>
                      {['No experience (fresh graduate)', 'Less than 1 year', '1–2 years', '3–5 years', '6–10 years', '10+ years'].map(
                        (e) => <option key={e} value={e}>{e}</option>
                      )}
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Primary Job Type / Industry <span className="text-[#CE1126]">*</span></label>
                    <select className="form-input form-select" value={form.jobType} onChange={(e) => set('jobType', e.target.value)}>
                      <option value="">Select industry…</option>
                      {jobTypes.map((j) => <option key={j} value={j}>{j}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Preferred Job Location <span className="text-[#CE1126]">*</span></label>
                    <select className="form-input form-select" value={form.preferredLocation} onChange={(e) => set('preferredLocation', e.target.value)}>
                      {['Kenya (Any County)', 'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'UAE / Gulf States', 'Canada', 'United Kingdom', 'Other International'].map(
                        (l) => <option key={l} value={l}>{l}</option>
                      )}
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Target Monthly Salary (KSh)</label>
                    <div className="grid grid-cols-2 gap-3">
                      <input className="form-input" placeholder="Min e.g. 30,000" value={form.salaryMin}
                        onChange={(e) => set('salaryMin', e.target.value)} />
                      <input className="form-input" placeholder="Max e.g. 80,000" value={form.salaryMax}
                        onChange={(e) => set('salaryMax', e.target.value)} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── Step 3: Plan & Payment ── */}
            {step === 3 && (
              <div className="p-7 sm:p-8 anim-fade-in">
                <div className="mb-7">
                  <h2 className="font-bold text-2xl text-[#0D1B0F] mb-1">Choose Your Plan</h2>
                  <p className="text-gray-400 text-sm">Select the plan that works for you. Upgrade or cancel anytime.</p>
                </div>

                {/* Plan selection */}
                <div className="space-y-3 mb-7">
                  {plans.map((plan) => (
                    <label
                      key={plan.id}
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                        form.plan === plan.id
                          ? 'border-[#006B3C] bg-[#006B3C]/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio" name="plan" value={plan.id}
                        checked={form.plan === plan.id}
                        onChange={(e) => set('plan', e.target.value)}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                          form.plan === plan.id ? 'border-[#006B3C] bg-[#006B3C]' : 'border-gray-300'
                        }`}
                      >
                        {form.plan === plan.id && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#0D1B0F]">{plan.name}</span>
                          {plan.popular && (
                            <span className="text-[10px] font-bold bg-[#CE1126] text-white px-2 py-0.5 rounded-full tracking-wide">
                              POPULAR
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="font-bold text-sm" style={{ color: plan.color }}>{plan.price}</span>
                    </label>
                  ))}
                </div>

                {/* Payment method */}
                <div className="mb-6">
                  <label className="form-label">Payment Method</label>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[
                      { id: 'mpesa', label: 'M-Pesa',      icon: <Smartphone size={17} /> },
                      { id: 'card',  label: 'Debit / Card', icon: <CreditCard size={17} /> },
                    ].map((pm) => (
                      <label
                        key={pm.id}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                          form.payment === pm.id ? 'border-[#006B3C] bg-[#006B3C]/5' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input type="radio" name="payment" value={pm.id} checked={form.payment === pm.id}
                          onChange={(e) => set('payment', e.target.value)} className="sr-only" />
                        <div className={form.payment === pm.id ? 'text-[#006B3C]' : 'text-gray-400'}>{pm.icon}</div>
                        <span className="font-semibold text-sm text-[#0D1B0F]">{pm.label}</span>
                      </label>
                    ))}
                  </div>

                  {form.payment === 'mpesa' && (
                    <div className="bg-[#FCD116]/10 border border-[#FCD116]/30 rounded-xl p-4 anim-fade-in space-y-3">
                      <p className="font-bold text-[#0D1B0F] text-sm">M-Pesa Payment Instructions</p>
                      <ol className="text-gray-600 text-sm space-y-1 list-none">
                        <li>1. Go to M-Pesa → Lipa Na M-Pesa → Paybill</li>
                        <li>2. Business No: <strong>123456</strong></li>
                        <li>3. Account No: Your full name</li>
                        <li>4. Amount: as per your selected plan</li>
                      </ol>
                      <div>
                        <label className="form-label text-xs">Full Name on M-Pesa <span className="text-[#CE1126]">*</span></label>
                        <input className="form-input" placeholder="As registered with M-Pesa"
                          value={form.mpesaName} onChange={(e) => set('mpesaName', e.target.value)} />
                      </div>
                    </div>
                  )}
                  {form.payment === 'card' && (
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 anim-fade-in flex items-start gap-3">
                      <Lock size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-500 text-sm">
                        You will be securely redirected to our payment gateway after submission. Visa, Mastercard, and Amex accepted.
                      </p>
                    </div>
                  )}
                </div>

                {/* Terms */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div
                    className={`mt-0.5 w-5 h-5 rounded-md border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                      form.agreed ? 'bg-[#006B3C] border-[#006B3C]' : 'border-gray-300 group-hover:border-[#006B3C]'
                    }`}
                    onClick={() => set('agreed', !form.agreed)}
                  >
                    {form.agreed && <CheckCircle size={12} color="white" strokeWidth={3} />}
                  </div>
                  <span className="text-gray-500 text-sm leading-relaxed">
                    I agree to KaziConnect&apos;s{' '}
                    <Link href="#" className="text-[#006B3C] underline hover:text-[#004D2A]">Terms of Service</Link>{' '}
                    and{' '}
                    <Link href="#" className="text-[#006B3C] underline hover:text-[#004D2A]">Privacy Policy</Link>.
                    I understand the 30-day money-back guarantee applies.
                  </span>
                </label>
              </div>
            )}

            {/* Navigation footer */}
            <div className="px-7 sm:px-8 py-5 bg-[#F9FAF9] border-t border-gray-100 flex items-center justify-between gap-4">
              <div>
                {step > 1 && (
                  <button onClick={() => setStep(step - 1)} className="btn btn-outline-forest text-sm">
                    <ArrowLeft size={15} />
                    Back
                  </button>
                )}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 text-sm font-medium">{step} / 3</span>
                {step < 3 ? (
                  <button onClick={() => setStep(step + 1)} className="btn btn-forest shine text-sm">
                    Continue
                    <ArrowRight size={15} />
                  </button>
                ) : (
                  <button onClick={handleSubmit} className="btn btn-crimson shine text-sm">
                    Submit Application
                    <ArrowRight size={15} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Trust strip */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              { icon: '🔒', text: 'Secure & Encrypted' },
              { icon: '💰', text: '30-Day Guarantee' },
              { icon: '👤', text: 'Human Reviewed' },
            ].map((item) => (
              <div key={item.text} className="flex flex-col items-center gap-1.5">
                <span className="text-xl">{item.icon}</span>
                <span className="text-xs text-gray-400 font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
