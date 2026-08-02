import Link from 'next/link'
import { ArrowUpRight, CalendarDays } from 'lucide-react'
import { events } from '@/lib/site-data'

export function EventsSection() {
  return (
    <section id="events" className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-navy-soft">
              What&apos;s happening
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-navy text-balance sm:text-4xl">
              Latest Events
            </h2>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors duration-200 hover:text-navy-soft"
          >
            View all events
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={event.image || '/placeholder.svg'}
                  alt={event.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-navy-deep/80 px-3 py-1 text-xs font-medium text-gold backdrop-blur-sm">
                  {event.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <CalendarDays className="size-3.5" aria-hidden="true" />
                  {event.date}
                </p>
                <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-navy text-pretty">
                  {event.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {event.excerpt}
                </p>
                <Link
                  href={event.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors duration-200 hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  Read More
                  <ArrowUpRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                  <span className="sr-only"> about {event.title}</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
