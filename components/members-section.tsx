'use client'

import { useState } from 'react'
import { Users } from 'lucide-react'
import { generalMembers } from '@/data/members'
import { ExecutiveOrgChart } from '@/components/executive-org-chart'
import { MemberCard } from '@/components/member-card'
import { contact, org } from '@/lib/site-data'
import { cn } from '@/lib/utils'

type Tab = 'executive' | 'general'

const tabs: { id: Tab; label: string; count: number }[] = [
  { id: 'executive', label: 'Executive Committee', count: 18 },
  { id: 'general', label: 'General Members', count: generalMembers.length },
]

export function MembersSection() {
  const [activeTab, setActiveTab] = useState<Tab>('executive')

  return (
    <section className="bg-background">
      <div className="relative overflow-hidden border-b border-border bg-navy-deep">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(242,101,34,0.12),transparent_55%)]"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium tracking-wide text-gold-soft">
              <Users className="size-3.5" aria-hidden="true" />
              Our Community
            </span>
            <h1 className="mt-5 font-serif text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
              Meet the <span className="text-gold">Members</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/70 text-pretty sm:text-lg">
              The leadership behind {org.shortName} — organized from the President down through
              every department executive driving impact at {org.university}.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div
          role="tablist"
          aria-label="Member categories"
          className="inline-flex w-full flex-col gap-2 rounded-2xl border border-border/80 bg-card/60 p-1.5 backdrop-blur-sm sm:w-auto sm:flex-row"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 sm:flex-initial',
                activeTab === tab.id
                  ? 'bg-navy text-white shadow-md shadow-navy/20'
                  : 'text-muted-foreground hover:bg-secondary hover:text-navy',
              )}
            >
              {tab.label}
              <span
                className={cn(
                  'rounded-full px-2 py-0.5 text-[10px] font-bold',
                  activeTab === tab.id
                    ? 'bg-gold/20 text-gold-soft'
                    : 'bg-secondary text-muted-foreground',
                )}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        <div role="tabpanel" className="mt-12">
          {activeTab === 'executive' ? (
            <ExecutiveOrgChart />
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {generalMembers.map((member) => (
                <MemberCard key={member.id} member={member} variant="standard" />
              ))}
            </div>
          )}
        </div>

        <div className="animate-reveal mt-20 rounded-2xl border border-border bg-secondary/80 p-8 text-center backdrop-blur-sm sm:p-12">
          <h2 className="font-serif text-2xl font-bold text-navy">Want to join the team?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Membership applications open each semester. Reach out to learn about upcoming intake
            cycles and how to get involved.
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
