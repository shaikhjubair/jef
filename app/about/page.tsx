import type { Metadata } from 'next'
import { AboutSection } from '@/components/about-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { org } from '@/lib/site-data'

export const metadata: Metadata = {
  title: `About — ${org.shortName}`,
  description: `Learn about ${org.name}: our story and timeline since 2016.`,
}

export default function AboutPage() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col">
      <SiteNav />
      <main className="flex-1">
        <AboutSection />
      </main>
      <SiteFooter />
    </div>
  )
}
