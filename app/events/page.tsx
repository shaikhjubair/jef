import type { Metadata } from 'next'
import { EventsSection } from '@/components/events-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { org } from '@/lib/site-data'

export const metadata: Metadata = {
  title: `Events — ${org.shortName}`,
  description: `Latest summits, workshops, and competitions from ${org.shortName}.`,
}

export default function EventsPage() {
  return (
    <div className="relative">
      <SiteNav />
      <main>
        <EventsSection />
      </main>
      <SiteFooter />
    </div>
  )
}
