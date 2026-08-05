import { HeroSection } from '@/components/hero-section'
import { SiteNav } from '@/components/site-nav'


export default function HomePage() {
  return (
    <div className="relative">
      <SiteNav />

      <main>
        <HeroSection />
      </main>
    </div>
  )
}
