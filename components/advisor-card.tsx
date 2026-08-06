'use client'

import Image from 'next/image'
import { Briefcase, CalendarRange } from 'lucide-react'
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'
import type { Member } from '@/data/members'
import { cn } from '@/lib/utils'

type AdvisorCardProps = {
  member: Member
  onClick?: () => void
  className?: string
}

export function AdvisorCard({ member, onClick, className }: AdvisorCardProps) {
  return (
    <article
      onClick={onClick}
      className={cn(
        'group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl',
        'border border-border bg-card transition-all duration-200',
        'hover:border-[#F26522]/40 hover:shadow-xl hover:shadow-[#F26522]/8',
        className,
      )}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#1B2A4A] via-[#F26522] to-[#1B2A4A] opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-start sm:gap-6">
        {/* Circular portrait */}
        <div className="relative mx-auto shrink-0 sm:mx-0">
          <div className="absolute inset-0 -m-1.5 rounded-full border-2 border-dashed border-[#F26522]/20 transition-transform duration-700 group-hover:rotate-180" />
          <div className="relative size-24 overflow-hidden rounded-full ring-3 ring-[#1B2A4A]/20 shadow-lg transition-all duration-300 group-hover:ring-[#F26522]/50 group-hover:scale-105 sm:size-28">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 96px, 112px"
            />
          </div>
        </div>

        {/* Details */}
        <div className="flex min-w-0 flex-1 flex-col text-center sm:text-left">
          <h3 className="font-serif text-lg font-bold text-navy transition-colors group-hover:text-[#F26522] sm:text-xl">
            {member.name}
          </h3>
          <p className="mt-0.5 text-sm font-semibold text-[#F26522]/80">
            {member.designation}
          </p>

          {/* Responsibility */}
          {member.responsibility && (
            <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
              {member.responsibility}
            </p>
          )}

          {/* Advisor-specific badges */}
          <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
            {member.jefPeriod && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F26522]/20 bg-[#F26522]/8 px-3 py-1 text-[11px] font-semibold text-[#F26522]">
                <CalendarRange className="size-3" />
                JEF {member.jefPeriod}
              </span>
            )}
            {member.currentJob && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-navy/10 bg-navy/5 px-3 py-1 text-[11px] font-semibold text-navy/70">
                <Briefcase className="size-3" />
                {member.currentJob}
              </span>
            )}
          </div>

          {/* Social links */}
          {member.socials && (
            <div className="mt-4 flex items-center justify-center gap-2 sm:justify-start">
              {member.socials.facebook && (
                <a
                  href={member.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`${member.name} on Facebook`}
                  className="flex size-8 items-center justify-center rounded-full bg-[#1B2A4A]/8 text-navy/50 transition-all duration-200 hover:bg-[#F26522] hover:text-white hover:scale-110"
                >
                  <FaFacebook className="size-3.5" />
                </a>
              )}
              {member.socials.linkedin && (
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`${member.name} on LinkedIn`}
                  className="flex size-8 items-center justify-center rounded-full bg-[#1B2A4A]/8 text-navy/50 transition-all duration-200 hover:bg-[#F26522] hover:text-white hover:scale-110"
                >
                  <FaLinkedin className="size-3.5" />
                </a>
              )}
              {member.socials.instagram && (
                <a
                  href={member.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`${member.name} on Instagram`}
                  className="flex size-8 items-center justify-center rounded-full bg-[#1B2A4A]/8 text-navy/50 transition-all duration-200 hover:bg-[#F26522] hover:text-white hover:scale-110"
                >
                  <FaInstagram className="size-3.5" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
