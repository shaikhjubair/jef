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

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = icons[benefit.icon]
            return (
              <div
                key={benefit.id}
                className="rounded-2xl border border-border bg-card p-6 transition-shadow duration-200 hover:shadow-lg hover:shadow-navy/5"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-navy text-gold">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h2 className="mt-4 text-base font-semibold text-navy">{benefit.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
