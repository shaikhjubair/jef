import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { WhyJoinSection } from '@/components/why-join-section'
import { org } from '@/lib/site-data'

export const metadata: Metadata = {
  title: `Why Join — ${org.shortName}`,
  description: `Discover why students join ${org.shortName}: network, research, speaking, and career opportunities.`,
}

export default function WhyJoinPage() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col">
      <SiteNav />
      <main className="flex-1">
        <WhyJoinSection />
      </main>
      <SiteFooter />
    </div>
  )
}
