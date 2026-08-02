import { BookOpen, GraduationCap, MessageSquare, Target, Telescope } from 'lucide-react'
import { org, timeline } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const pillars = [
  {
    id: 'research',
    icon: BookOpen,
    title: 'Research & Publications',
    description:
      'Co-author policy briefs, working papers, and faculty-guided research that moves from classroom hypotheses to publishable insights.',
  },
  {
    id: 'debates',
    icon: MessageSquare,
    title: 'Policy Debates',
    description:
      'Structured forums and national competitions where members argue monetary policy, trade, and development with rigor and clarity.',
  },
  {
    id: 'skills',
    icon: GraduationCap,
    title: 'Skill Development',
    description:
      'Workshops on econometrics, data analysis, public speaking, and career readiness — building analysts who can lead in any sector.',
  },
]

export function AboutSection() {
  return (
    <>
      {/* Hero Intro */}
      <section className="relative overflow-hidden bg-navy-deep">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(242,101,34,0.18),transparent_50%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-1/3 size-96 rounded-full bg-navy/40 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-4xl text-center animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft backdrop-blur-md">
              {org.name}
            </span>
            <h1 className="mt-8 font-serif text-4xl font-bold leading-[1.08] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
              Shaping the Economic Minds of{' '}
              <span className="bg-gradient-to-r from-gold via-gold-soft to-gold bg-clip-text text-transparent">
                Tomorrow.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/65 text-pretty sm:text-lg">
              Since 2016, {org.shortName} has been {org.university}&apos;s premier student forum for
              economics — where theory meets policy, debate sharpens judgment, and the next
              generation of Bangladeshi economists finds its voice.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="animate-reveal mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-soft">
              Our Purpose
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-navy text-balance sm:text-4xl">
              Mission &amp; Vision
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
            <article className="animate-reveal animate-reveal-delay-1 group rounded-3xl border border-border/70 bg-card/60 p-8 shadow-lg shadow-navy/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-xl hover:shadow-navy/10 sm:p-10">
              <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold/15">
                <Target className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-bold text-navy">Mission</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
                Bridging classroom economic theory with real-world policy and analytical skills —
                empowering UIU students to think critically, communicate persuasively, and apply
                economics to the challenges Bangladesh faces today.
              </p>
            </article>

            <article className="animate-reveal animate-reveal-delay-2 group rounded-3xl border border-border/70 bg-card/60 p-8 shadow-lg shadow-navy/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-xl hover:shadow-navy/10 sm:p-10">
              <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold/15">
                <Telescope className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-bold text-navy">Vision</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
                Building a generation of competent leaders and researchers — economists who combine
                academic excellence with integrity, drive national discourse, and shape policy from
                the classroom to the boardroom.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="animate-reveal mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-soft">
              What We Do
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-navy text-balance sm:text-4xl">
              Core Pillars
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              Three foundations that define how {org.shortName} develops economists who lead with
              evidence, not assumption.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <article
                  key={pillar.id}
                  className={cn(
                    'animate-reveal group rounded-2xl border border-border/70 bg-card/70 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lg hover:shadow-navy/10',
                    index === 1 && 'animate-reveal-delay-1',
                    index === 2 && 'animate-reveal-delay-2',
                  )}
                >
                  <div className="inline-flex size-11 items-center justify-center rounded-xl bg-navy text-gold transition-transform duration-300 group-hover:scale-105">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-bold text-navy">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {pillar.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline — refined continuity */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="animate-reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-soft">
                Our Journey
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                2016 → Present
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              A decade of growth — from a reading circle to one of UIU&apos;s most active academic
              communities.
            </p>
          </div>

          <ol className="animate-reveal animate-reveal-delay-1 mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {timeline.map((item) => (
              <li
                key={item.id}
                className="group relative rounded-2xl border border-border/70 bg-card/50 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/25 hover:shadow-md hover:shadow-navy/5"
              >
                <p className="font-serif text-2xl font-bold text-gold">{item.year}</p>
                <p className="mt-2 text-sm font-semibold text-navy">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
