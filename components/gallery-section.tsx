import { Camera, Film, ImageIcon } from 'lucide-react'
import { org } from '@/lib/site-data'

type GalleryItem = {
  id: string
  type: 'photo' | 'video'
  title: string
  aspect: 'tall' | 'wide' | 'square'
  gradient: string
}

const galleryItems: GalleryItem[] = [
  { id: 'g1', type: 'photo', title: 'National Economics Summit', aspect: 'tall', gradient: 'from-navy-deep to-navy' },
  { id: 'g2', type: 'photo', title: 'Policy Lab Workshop', aspect: 'wide', gradient: 'from-navy to-navy-soft' },
  { id: 'g3', type: 'video', title: 'Debate Cup Highlights', aspect: 'square', gradient: 'from-navy-deep to-navy-soft' },
  { id: 'g4', type: 'photo', title: 'Member Orientation', aspect: 'square', gradient: 'from-navy-soft to-navy' },
  { id: 'g5', type: 'photo', title: 'Research Presentation', aspect: 'tall', gradient: 'from-navy to-navy-deep' },
  { id: 'g6', type: 'video', title: 'Annual Gala Recap', aspect: 'wide', gradient: 'from-navy-deep to-navy' },
  { id: 'g7', type: 'photo', title: 'Panel Discussion', aspect: 'square', gradient: 'from-navy-soft to-navy-deep' },
  { id: 'g8', type: 'photo', title: 'Team Building Day', aspect: 'tall', gradient: 'from-navy to-navy-soft' },
  { id: 'g9', type: 'video', title: 'Guest Speaker Session', aspect: 'wide', gradient: 'from-navy-deep to-navy-soft' },
]

const aspectClass: Record<GalleryItem['aspect'], string> = {
  tall: 'aspect-[3/4]',
  wide: 'aspect-[4/3]',
  square: 'aspect-square',
}

export function GallerySection() {
  return (
    <section className="bg-background">
      <div className="border-b border-border bg-navy-deep">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium tracking-wide text-gold-soft">
              <Camera className="size-3.5" aria-hidden="true" />
              Moments
            </span>
            <h1 className="mt-5 font-serif text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
              {org.shortName} <span className="text-gold">Gallery</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/70 text-pretty sm:text-lg">
              Photos and videos from our summits, workshops, and community events — updated as we
              grow.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryItems.map((item) => (
            <article
              key={item.id}
              className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-border/80 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/30 hover:shadow-lg hover:shadow-navy/10"
            >
              <div
                className={`relative flex ${aspectClass[item.aspect]} items-center justify-center bg-gradient-to-br ${item.gradient}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(242,101,34,0.15),transparent_50%)]" />
                {item.type === 'video' ? (
                  <Film className="relative size-10 text-white/40" aria-hidden="true" />
                ) : (
                  <ImageIcon className="relative size-10 text-white/40" aria-hidden="true" />
                )}
                <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-navy-deep/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                  {item.type}
                </span>
              </div>
              <div className="border-t border-border/60 p-4">
                <h2 className="text-sm font-semibold text-navy">{item.title}</h2>
                <p className="mt-1 text-xs text-muted-foreground">Coming soon</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
