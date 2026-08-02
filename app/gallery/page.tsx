import type { Metadata } from 'next'
import { GallerySection } from '@/components/gallery-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { org } from '@/lib/site-data'

export const metadata: Metadata = {
  title: `Gallery — ${org.shortName}`,
  description: `Photos and videos from ${org.shortName} events, summits, and community gatherings.`,
}

export default function GalleryPage() {
  return (
    <div className="relative">
      <SiteNav />
      <main>
        <GallerySection />
      </main>
      <SiteFooter />
    </div>
  )
}
