import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { org } from '@/lib/site-data'

export function JoinCtaBand() {
  return (
    <section
      aria-labelledby="join-cta-heading"
      className="border-t border-white/10 bg-navy-deep text-white"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-16">
        <div className="max-w-xl">
          <h2 id="join-cta-heading" className="font-serif text-2xl font-bold text-balance sm:text-3xl">
            Ready to join the forum?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-base">
            Membership opens every semester. Tell us a little about yourself and we&apos;ll be in
            touch.
          </p>
        </div>
        <Link
          href={org.ctaHref}
          className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gold px-7 text-sm font-semibold text-white transition-colors duration-200 hover:bg-gold-soft sm:w-auto"
        >
          {org.ctaLabel}
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  )
}
