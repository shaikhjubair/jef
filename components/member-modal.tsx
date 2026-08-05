'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { X, Mail, Phone, Hash, Droplet, Briefcase, CalendarRange, ShieldCheck } from 'lucide-react'
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'
import type { Member } from '@/data/members'

interface MemberModalProps {
  member: Member | null
  onClose: () => void
}

const categoryLabels: Record<string, string> = {
  advisor: 'Faculty Advisor',
  moderator: 'Club Moderator',
  executive: 'Executive Committee',
  general: 'General Member',
}

export function MemberModal({ member, onClose }: MemberModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (member) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [member])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!member) return null

  const isAdvisor = member.category === 'advisor'

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${member.name} profile`}
    >
      {/* Blurred backdrop */}
      <div
        className="absolute inset-0 bg-[#1B2A4A]/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal panel — scrollable on mobile */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto overscroll-contain rounded-3xl bg-white shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 z-10 rounded-full bg-black/5 p-2 text-navy/60 transition-colors hover:bg-black/10 hover:text-navy"
        >
          <X className="size-5" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left — profile image */}
          <div className="relative h-64 w-full shrink-0 md:h-auto md:w-[38%]">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
              sizes="(max-width: 768px) 100vw, 38vw"
            />
            {/* Category badge over image */}
            <span className="absolute left-4 bottom-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-[#1B2A4A]/70 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              <ShieldCheck className="size-3" />
              {categoryLabels[member.category] ?? member.category}
            </span>
            {/* Gradient overlay at bottom on mobile */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/20 to-transparent md:hidden" />
          </div>

          {/* Right — details */}
          <div className="flex flex-col p-6 sm:p-8 md:w-[62%]">
            {/* Name, designation, responsibility */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-navy sm:text-3xl">
                {member.name}
              </h2>
              <p className="mt-1 text-base font-semibold text-[#F26522]">
                {member.designation}
              </p>
              {member.responsibility && (
                <p className="mt-2 text-sm leading-relaxed text-navy/60 italic">
                  {member.responsibility}
                </p>
              )}
            </div>

            {/* Advisor-specific: JEF Period & Current Job */}
            {isAdvisor && (member.jefPeriod || member.currentJob) && (
              <div className="mt-5 flex flex-wrap gap-2">
                {member.jefPeriod && (
                  <div className="flex items-center gap-2 rounded-xl border border-[#F26522]/20 bg-[#F26522]/6 px-4 py-2">
                    <CalendarRange className="size-4 text-[#F26522]" />
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-[#F26522]/60">
                        JEF Tenure
                      </p>
                      <p className="text-sm font-bold text-[#F26522]">
                        {member.jefPeriod}
                      </p>
                    </div>
                  </div>
                )}
                {member.currentJob && (
                  <div className="flex items-center gap-2 rounded-xl border border-navy/10 bg-navy/4 px-4 py-2">
                    <Briefcase className="size-4 text-navy/50" />
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-navy/40">
                        Current Position
                      </p>
                      <p className="text-sm font-bold text-navy">
                        {member.currentJob}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* About / Bio */}
            <div className="mt-5">
              <h3 className="text-[10px] font-bold uppercase tracking-wider text-navy/40">
                About Me
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">
                {member.bio}
              </p>
            </div>

            {/* Data points grid */}
            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-navy/8 pt-5">
              {/* Student ID */}
              <div className="flex items-start gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-[#F26522]">
                  <Hash className="size-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-tight text-navy/40">
                    {isAdvisor ? 'Employee ID' : 'Student ID'}
                  </p>
                  <p className="text-xs font-bold text-[#F26522]">
                    {member.idNumber}
                  </p>
                </div>
              </div>

              {/* Blood Group */}
              <div className="flex items-start gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500">
                  <Droplet className="size-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-tight text-navy/40">
                    Blood Group
                  </p>
                  <p className="text-xs font-bold text-navy">
                    {member.bloodGroup}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Mail className="size-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-tight text-navy/40">
                    Email
                  </p>
                  <a
                    href={`mailto:${member.email}`}
                    className="block truncate text-xs font-bold text-navy transition-colors hover:text-[#F26522]"
                  >
                    {member.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
                  <Phone className="size-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-tight text-navy/40">
                    Phone
                  </p>
                  <a
                    href={`tel:${member.phone}`}
                    className="text-xs font-bold text-navy transition-colors hover:text-[#F26522]"
                  >
                    {member.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Social media links */}
            <div className="mt-6 flex items-center gap-3">
              {member.socials?.facebook && (
                <a
                  href={member.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on Facebook`}
                  className="flex size-10 items-center justify-center rounded-full bg-[#1B2A4A] text-white transition-all duration-200 hover:bg-[#F26522] hover:scale-110"
                >
                  <FaFacebook className="size-5" />
                </a>
              )}
              {member.socials?.linkedin && (
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="flex size-10 items-center justify-center rounded-full bg-[#1B2A4A] text-white transition-all duration-200 hover:bg-[#F26522] hover:scale-110"
                >
                  <FaLinkedin className="size-5" />
                </a>
              )}
              {member.socials?.instagram && (
                <a
                  href={member.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on Instagram`}
                  className="flex size-10 items-center justify-center rounded-full bg-[#1B2A4A] text-white transition-all duration-200 hover:bg-[#F26522] hover:scale-110"
                >
                  <FaInstagram className="size-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
