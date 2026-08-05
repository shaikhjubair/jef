'use client'

import { useState } from 'react'
import { Users, GraduationCap, ShieldCheck, Star, UserCheck } from 'lucide-react'
import {
  advisors,
  moderators,
  generalMembers,
  type Member,
} from '@/data/members'
import { ExecutiveOrgChart } from '@/components/executive-org-chart'
import { AdvisorCard } from '@/components/advisor-card'
import { MemberCard } from '@/components/member-card'
import { MemberModal } from '@/components/member-modal'
import { org } from '@/lib/site-data'
import { cn } from '@/lib/utils'

// ─── Tab config ─────────────────────────────────────────────────────────────

type Tab = 'advisors' | 'moderators' | 'executive' | 'general'

const tabs: { id: Tab; label: string; icon: React.ElementType; count: number }[] = [
  { id: 'executive',  label: 'Executive Panel',  icon: Star,          count: 18 },
  { id: 'general',    label: 'General Members',  icon: UserCheck,     count: generalMembers.length },
  { id: 'advisors',   label: 'Advisors',         icon: GraduationCap, count: advisors.length },
  { id: 'moderators', label: 'Moderators',        icon: ShieldCheck,   count: moderators.length },
]

// ─── Section header ──────────────────────────────────────────────────────────

function SectionHeader({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: React.ElementType
  title: string
  subtitle: string
}) {
  return (
    <div className="mb-10 flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#F26522]/10 text-[#F26522]">
        <Icon className="size-6" />
      </div>
      <div>
        <h2 className="font-serif text-2xl font-bold text-navy">{title}</h2>
        <p className="mt-0.5 text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  )
}

// ─── Divider ─────────────────────────────────────────────────────────────────

function Divider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 py-2">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F26522]/60">
        {label}
      </span>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  )
}

// ─── Main component ──────────────────────────────────────────────────────────

export function MembersSection() {
  const [activeTab, setActiveTab] = useState<Tab>('executive')
  const [selectedMember, setSelectedMember] = useState<Member | null>(null)

  return (
    <section className="bg-background">
      {/* ── Page hero ── */}
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
              From Faculty Advisors and Club Moderators to the Executive Panel and General
              Members — explore every tier of the {org.shortName} community at{' '}
              {org.university}.
            </p>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">

        {/* ── Tab navigation ── */}
        <div
          role="tablist"
          aria-label="Member categories"
          className="mb-12 flex w-full flex-col gap-2 rounded-2xl border border-border/80 bg-card/60 p-1.5 backdrop-blur-sm sm:flex-row"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200',
                  activeTab === tab.id
                    ? 'bg-navy text-white shadow-md shadow-navy/20'
                    : 'text-muted-foreground hover:bg-secondary hover:text-navy',
                )}
              >
                <Icon className="size-4 shrink-0" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                <span
                  className={cn(
                    'rounded-full px-2 py-0.5 text-[10px] font-bold',
                    activeTab === tab.id
                      ? 'bg-[#F26522]/20 text-[#F26522]'
                      : 'bg-secondary text-muted-foreground',
                  )}
                >
                  {tab.count}
                </span>
              </button>
            )
          })}
        </div>

        {/* ── Tab panels ── */}

        {/* ADVISORS */}
        <div
          id="panel-advisors"
          role="tabpanel"
          aria-labelledby="tab-advisors"
          hidden={activeTab !== 'advisors'}
        >
          {activeTab === 'advisors' && (
            <>
              <SectionHeader
                icon={GraduationCap}
                title="Faculty Advisors"
                subtitle="Distinguished faculty members who provide academic guidance and strategic oversight to UIUJEF."
              />
              <div className="grid gap-5 lg:grid-cols-2">
                {advisors.map((member) => (
                  <AdvisorCard
                    key={member.id}
                    member={member}
                    onClick={() => setSelectedMember(member)}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* MODERATORS */}
        <div
          id="panel-moderators"
          role="tabpanel"
          aria-labelledby="tab-moderators"
          hidden={activeTab !== 'moderators'}
        >
          {activeTab === 'moderators' && (
            <>
              <SectionHeader
                icon={ShieldCheck}
                title="Club Moderators"
                subtitle="Student leaders responsible for overseeing day-to-day operations and bridging the gap between members and administration."
              />
              <div className="grid gap-5 lg:grid-cols-2">
                {moderators.map((member) => (
                  <AdvisorCard
                    key={member.id}
                    member={member}
                    onClick={() => setSelectedMember(member)}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* EXECUTIVE PANEL */}
        <div
          id="panel-executive"
          role="tabpanel"
          aria-labelledby="tab-executive"
          hidden={activeTab !== 'executive'}
        >
          {activeTab === 'executive' && (
            <>
              <SectionHeader
                icon={Star}
                title="Executive Panel"
                subtitle="The elected student leaders driving UIUJEF's mission — structured from the President down through every department."
              />
              <Divider label="Organizational Hierarchy" />
              <div className="mt-8">
                <ExecutiveOrgChart onMemberClick={setSelectedMember} />
              </div>
            </>
          )}
        </div>

        {/* GENERAL MEMBERS */}
        <div
          id="panel-general"
          role="tabpanel"
          aria-labelledby="tab-general"
          hidden={activeTab !== 'general'}
        >
          {activeTab === 'general' && (
            <>
              <SectionHeader
                icon={UserCheck}
                title="General Members"
                subtitle="The heartbeat of UIUJEF — passionate students contributing to events, communications, and every initiative that moves the club forward."
              />
              <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {generalMembers.map((member) => (
                  <MemberCard
                    key={member.id}
                    member={member}
                    onClick={() => setSelectedMember(member)}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* ── Global modal (shared across all tabs) ── */}
        <MemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />

        {/* ── Join CTA ── */}
        <div className="animate-reveal mt-20 rounded-2xl border border-border bg-gradient-to-br from-secondary/80 to-card p-8 text-center backdrop-blur-sm sm:p-12">
          <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-[#F26522]/10 text-[#F26522]">
            <Users className="size-7" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-navy">
            Want to Join the Team?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Membership applications open each semester. Apply now to become part of
            the most impactful student community at {org.university}.
          </p>
          <a
            href="/join"
            className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#F26522] px-7 text-sm font-bold text-white transition-all duration-200 hover:bg-[#FF7A3D] hover:shadow-lg hover:shadow-[#F26522]/30"
          >
            Apply Now →
          </a>
        </div>
      </div>
    </section>
  )
}
