import type { Metadata } from 'next'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { org } from '@/lib/site-data'

export const metadata: Metadata = {
  title: `Contact — ${org.shortName}`,
  description: `Get in touch with ${org.shortName} — phone, email, and campus location.`,
}

export default function ContactPage() {
  return (
    <div className="relative">
      <SiteNav />
      <main>
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
