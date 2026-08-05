import { Suspense } from 'react'
import type { Metadata } from 'next'
import EventsArchive from '@/components/events-archive'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { org } from '@/lib/site-data'

export const metadata: Metadata = {
  title: `Events — ${org.shortName}`,
  description: `Browse all past and upcoming events from ${org.shortName} — summits, workshops, competitions, and more.`,
}

export default function EventsPage() {
  return (
    <div className="relative">
      <SiteNav />
      <main>
        <Suspense fallback={<div className="py-20 text-center text-white/50">Loading events...</div>}>
          <EventsArchive />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  )
}
