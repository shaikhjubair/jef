import { executiveHierarchy } from '@/data/members'
import { MemberCard } from '@/components/member-card'
import { cn } from '@/lib/utils'

function OrgConnector({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn('flex flex-col items-center', className)}>
      <div className="h-8 w-px bg-gradient-to-b from-gold/50 to-border sm:h-10" />
    </div>
  )
}

function TierRow({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex w-full flex-wrap items-start justify-center gap-4 sm:gap-5 lg:gap-6',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function ExecutiveOrgChart() {
  const { president, vicePresident, tier3, tier4, departments } = executiveHierarchy

  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[min(100%,36rem)] -translate-x-1/2 rounded-full bg-gold/5 blur-3xl"
      />

      <div className="relative flex flex-col items-center">
        {/* Tier 1 — President */}
        <div className="animate-reveal flex flex-col items-center">
          <MemberCard member={president} variant="president" />
        </div>

        <OrgConnector />

        {/* Tier 2 — Vice President */}
        <div className="animate-reveal animate-reveal-delay-1 flex flex-col items-center">
          <MemberCard member={vicePresident} variant="vice-president" />
        </div>

        <OrgConnector />

        {/* Tier 3 — Secretaries & Treasurer */}
        <TierRow className="animate-reveal animate-reveal-delay-1">
          {tier3.map((member) => (
            <MemberCard key={member.id} member={member} variant="leadership" />
          ))}
        </TierRow>

        <OrgConnector />

        {/* Tier 4 — Joint & Organizational Secretary */}
        <TierRow className="animate-reveal animate-reveal-delay-2">
          {tier4.map((member) => (
            <MemberCard key={member.id} member={member} variant="leadership" />
          ))}
        </TierRow>

        <OrgConnector className="mb-2" />

        {/* Tier 5 — Department groups */}
        <div className="animate-reveal animate-reveal-delay-3 w-full space-y-10 pt-2">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-soft">
              Department Executives
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {departments.map((department) => (
              <div
                key={department.id}
                className="rounded-2xl border border-border/70 bg-card/50 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-gold/25 hover:bg-card/70"
              >
                <div className="flex flex-col items-center text-center">
                  <span className="inline-flex rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold">
                    {department.label}
                  </span>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {department.members.map((member) => (
                    <MemberCard key={member.id} member={member} variant="compact" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
