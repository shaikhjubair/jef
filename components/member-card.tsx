import Image from 'next/image'
import { Droplet, Hash, Mail, Phone } from 'lucide-react'
import type { Member } from '@/data/members'
import { cn } from '@/lib/utils'

export type MemberCardVariant =
  | 'president'
  | 'vice-president'
  | 'leadership'
  | 'standard'
  | 'compact'

type MemberCardProps = {
  member: Member
  variant?: MemberCardVariant
  className?: string
}

const variantStyles: Record<
  MemberCardVariant,
  { card: string; image: string; imageSize: number; body: string; title: string; role: string; showDetails: boolean }
> = {
  president: {
    card: 'w-full max-w-[20rem] sm:max-w-[22rem] ring-2 ring-gold/60 shadow-[0_0_48px_-10px_rgba(242,101,34,0.55)] hover:shadow-[0_0_56px_-8px_rgba(242,101,34,0.65)]',
    image: 'aspect-[4/5]',
    imageSize: 320,
    body: 'p-6',
    title: 'text-lg sm:text-xl',
    role: 'text-sm',
    showDetails: true,
  },
  'vice-president': {
    card: 'w-full max-w-[18rem] ring-1 ring-gold/40 shadow-lg shadow-navy/15',
    image: 'aspect-square',
    imageSize: 260,
    body: 'p-5',
    title: 'text-base sm:text-lg',
    role: 'text-xs',
    showDetails: true,
  },
  leadership: {
    card: 'w-full max-w-[15rem]',
    image: 'aspect-square',
    imageSize: 220,
    body: 'p-4',
    title: 'text-sm sm:text-base',
    role: 'text-[11px]',
    showDetails: true,
  },
  standard: {
    card: '',
    image: 'aspect-square',
    imageSize: 200,
    body: 'p-5',
    title: 'text-base',
    role: 'text-xs',
    showDetails: true,
  },
  compact: {
    card: 'w-full',
    image: 'aspect-square',
    imageSize: 160,
    body: 'p-3.5',
    title: 'text-sm',
    role: 'text-[10px]',
    showDetails: false,
  },
}

export function MemberCard({ member, variant = 'standard', className }: MemberCardProps) {
  const styles = variantStyles[variant]

  return (
    <article
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-border/80 bg-card/90 backdrop-blur-sm',
        'transition-all duration-300 ease-out',
        'hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl hover:shadow-navy/10',
        styles.card,
        className,
      )}
    >
      {variant === 'president' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-gold/10 via-transparent to-transparent"
        />
      )}

      <div className={cn('relative overflow-hidden bg-secondary', styles.image)}>
        <Image
          src={member.image}
          alt={member.name}
          width={styles.imageSize}
          height={styles.imageSize}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className={styles.body}>
        <h3 className={cn('font-serif font-bold leading-snug text-navy', styles.title)}>
          {member.name}
        </h3>
        <p className={cn('mt-1 font-semibold uppercase tracking-wide text-gold', styles.role)}>
          {member.designation}
        </p>

        {styles.showDetails ? (
          <ul className="mt-4 space-y-2 border-t border-border/60 pt-4 text-xs text-muted-foreground">
            <li className="flex items-center gap-2 transition-colors group-hover:text-foreground">
              <Hash className="size-3.5 shrink-0 text-gold/80" aria-hidden="true" />
              <span>{member.idNumber}</span>
            </li>
            <li className="flex items-center gap-2 transition-colors group-hover:text-foreground">
              <Phone className="size-3.5 shrink-0 text-gold/80" aria-hidden="true" />
              <a href={`tel:${member.phone}`} className="hover:text-gold">
                {member.phone}
              </a>
            </li>
            <li className="flex items-center gap-2 transition-colors group-hover:text-foreground">
              <Mail className="size-3.5 shrink-0 text-gold/80" aria-hidden="true" />
              <a href={`mailto:${member.email}`} className="truncate hover:text-gold">
                {member.email}
              </a>
            </li>
            <li className="flex items-center gap-2 transition-colors group-hover:text-foreground">
              <Droplet className="size-3.5 shrink-0 text-gold/80" aria-hidden="true" />
              <span>{member.bloodGroup}</span>
            </li>
          </ul>
        ) : (
          <p className="mt-2 truncate text-[11px] text-muted-foreground transition-colors group-hover:text-foreground">
            {member.email}
          </p>
        )}
      </div>
    </article>
  )
}
