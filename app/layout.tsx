import type { Metadata, Viewport } from 'next'
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import OwnershipStamp from '@/components/OwnershipStamp'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'KaziConnect — Kenya\'s Premier Job Placement Agency',
  description: 'We apply to jobs on your behalf. Submit your details, and our expert team finds and applies to the right positions for you.',
  keywords: ['job placement Kenya', 'job agency Nairobi', 'career services', 'job search Kenya'],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#006B3C',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <OwnershipStamp />
      </body>
    </html>
  )
}
