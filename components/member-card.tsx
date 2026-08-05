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
        'group relative flex cursor-pointer flex-col items-center pt-8 pb-0 px-4',
        'transition-all duration-300 ease-out',
        className,
      )}
    >
      {/* Circular profile image with animated border */}
      <div className="relative mb-4">
        {/* Spinning dashed ring on hover */}
        <div className="absolute inset-0 -m-1.5 rounded-full border-2 border-dashed border-[#F26522]/30 transition-transform duration-700 group-hover:rotate-180" />
        {/* Solid colored ring */}
        <div className="relative size-32 overflow-hidden rounded-full ring-4 ring-[#1B2A4A] shadow-xl transition-transform duration-300 group-hover:scale-105 group-hover:ring-[#F26522] sm:size-40">
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

      {/* Social media bar — rectangular, colored, at bottom of card */}
      <div className="mt-5 flex w-full max-w-[200px] items-center justify-center gap-5 rounded-xl bg-[#1B2A4A] py-2.5 text-white transition-colors duration-300 group-hover:bg-[#F26522]">
        {member.socials?.facebook && (
          <a
            href={member.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="transition-transform hover:scale-125"
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
            className="transition-transform hover:scale-125"
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
            className="transition-transform hover:scale-125"
            aria-label={`${member.name} on Instagram`}
          >
            <FaInstagram className="size-4" />
          </a>
        )}
      </div>
    </article>
  )
}
