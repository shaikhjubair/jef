'use client'

import Image from 'next/image'
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'
import type { Member } from '@/data/members'
import { cn } from '@/lib/utils'

type MemberCardProps = {
  member: Member
  onClick?: () => void
  className?: string
}

export function MemberCard({ member, onClick, className }: MemberCardProps) {
  return (
    <article
      onClick={onClick}
      className={cn(
        'group relative flex cursor-pointer flex-col items-center pt-4 pb-2 px-2',
        'transition-all duration-300 ease-out hover:-translate-y-1',
        className,
      )}
    >
      {/* Circular profile image with animated border */}
      <div className="relative mb-4">
        {/* Spinning dashed ring on hover */}
        <div className="absolute inset-0 -m-1.5 rounded-full border-2 border-dashed border-[#F26522]/40 transition-transform duration-700 group-hover:rotate-180" />
        {/* Solid colored ring */}
        <div className="relative size-32 overflow-hidden rounded-full ring-4 ring-[#F26522] shadow-xl transition-transform duration-300 group-hover:scale-105 sm:size-40">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 128px, 160px"
          />
        </div>
      </div>

      {/* Name, designation, bio */}
      <div className="text-center">
        <h3 className="font-serif text-lg font-bold text-navy transition-colors group-hover:text-[#F26522] sm:text-xl">
          {member.name}
        </h3>
        <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-[#F26522]/80">
          {member.designation}
        </p>
        <p className="mt-2 line-clamp-2 max-w-[200px] text-xs leading-relaxed text-muted-foreground">
          {member.bio}
        </p>
      </div>

      {/* Social media bar — clean, minimal */}
      <div className="mt-4 flex items-center justify-center gap-4 text-navy/50 transition-colors duration-300 group-hover:text-[#F26522]">
        {member.socials?.facebook && (
          <a
            href={member.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="transition-transform hover:scale-125 hover:text-[#F26522]"
            aria-label={`${member.name} on Facebook`}
          >
            <FaFacebook className="size-4" />
          </a>
        )}
        {member.socials?.linkedin && (
          <a
            href={member.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="transition-transform hover:scale-125 hover:text-[#F26522]"
            aria-label={`${member.name} on LinkedIn`}
          >
            <FaLinkedin className="size-4" />
          </a>
        )}
        {member.socials?.instagram && (
          <a
            href={member.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="transition-transform hover:scale-125 hover:text-[#F26522]"
            aria-label={`${member.name} on Instagram`}
          >
            <FaInstagram className="size-4" />
          </a>
        )}
      </div>
    </article>
  )
}
