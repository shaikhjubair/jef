import Image from 'next/image'
import { Award, LineChart, Mic, Users } from 'lucide-react'
import { benefits, type BenefitIcon } from '@/lib/site-data'

const icons: Record<BenefitIcon, typeof Users> = {
  network: Users,
  research: LineChart,
  speaking: Mic,
  career: Award,
}

export function WhyJoinSection() {
  return (
    <section id="why-join" className="bg-secondary">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-navy-soft">
            Membership
          </span>
          <h1 className="mt-3 font-serif text-3xl font-bold tracking-tight text-navy text-balance sm:text-4xl">
            Why Join UIUJEF?
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
            Membership is more than a line on your CV — it is a working community that pushes you
            to research, speak, and lead.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = icons[benefit.icon]
            return (
              <article
                key={benefit.id}
                className="group relative min-h-[18rem] overflow-hidden rounded-2xl sm:min-h-[20rem]"
              >
                <Image
                  src={benefit.bgImage}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/75 to-navy/35"
                />
                <div className="relative flex h-full min-h-[18rem] flex-col justify-end p-6 sm:min-h-[20rem]">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-gold backdrop-blur-sm">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 text-base font-semibold text-white">{benefit.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{benefit.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
