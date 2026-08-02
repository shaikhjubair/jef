import { UserPlus, Users } from 'lucide-react'
import { contact, org } from '@/lib/site-data'

const placeholderMembers = Array.from({ length: 8 }, (_, i) => ({
  id: `placeholder-${i + 1}`,
  name: 'Member Name',
  role: 'Position / Batch',
}))

export function MembersSection() {
  return (
    <section className="bg-background">
      <div className="border-b border-border bg-navy-deep">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium tracking-wide text-gold-soft">
              <Users className="size-3.5" aria-hidden="true" />
              Our Community
            </span>
            <h1 className="mt-5 font-serif text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
              Meet the <span className="text-gold">Members</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/70 text-pretty sm:text-lg">
              The people behind {org.shortName} — executives, researchers, and organizers building
              the next generation of economists at {org.university}.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-serif text-2xl font-bold text-navy">Executive Board</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Member profiles will be added here soon.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs font-medium text-muted-foreground">
            <UserPlus className="size-3.5" aria-hidden="true" />
            Coming soon
          </span>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {placeholderMembers.map((member) => (
            <article
              key={member.id}
              className="group flex flex-col items-center rounded-2xl border border-dashed border-border bg-card p-6 text-center transition-all duration-200 hover:border-gold/40 hover:shadow-md hover:shadow-navy/5"
            >
              <div className="flex size-20 items-center justify-center rounded-full bg-secondary text-muted-foreground/40 transition-colors group-hover:bg-gold/10 group-hover:text-gold/60">
                <Users className="size-8" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-navy">{member.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{member.role}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-secondary p-8 text-center sm:p-12">
          <h2 className="font-serif text-2xl font-bold text-navy">Want to join the team?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Membership applications open each semester. Check back here for the full roster and
            application details.
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-gold px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-gold-soft"
          >
            {org.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
