import Link from 'next/link'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '@/components/brand-icons'
import { contact, copyright, footerColumns, org, socials } from '@/lib/site-data'

const socialIcons = {
  linkedin: LinkedinIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
}

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white">
      {/* Join CTA band */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-16">
          <div className="max-w-xl">
            <h2 className="font-serif text-2xl font-bold text-balance sm:text-3xl">
              Ready to join the forum?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-base">
              Membership opens every semester. Tell us a little about yourself and we&apos;ll be in
              touch.
            </p>
          </div>
          <Link
            href={org.ctaHref}
            className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gold px-7 text-sm font-semibold text-white transition-colors duration-200 hover:bg-gold-soft sm:w-auto"
          >
            {org.ctaLabel}
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,0.8fr)]">
          {/* Brand + contact */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-lg bg-gold font-serif text-sm font-bold text-white">
                JE
              </span>
              <span className="font-serif text-base font-bold">{org.shortName}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">{org.name}</p>

            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-3 text-white/70 transition-colors hover:text-gold"
                >
                  <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-start gap-3 text-white/70 transition-colors hover:text-gold"
                >
                  <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 leading-relaxed text-white/70 transition-colors hover:text-gold"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                  {contact.location}
                </a>
              </li>
            </ul>

            <ul className="mt-6 flex items-center gap-3">
              {socials.map((social) => {
                const Icon = socialIcons[social.icon]
                return (
                  <li key={social.id}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-200 hover:border-gold/50 hover:text-gold"
                    >
                      <Icon className="size-4" />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <nav key={column.id} aria-label={column.title}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gold">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.id}>
                    {link.href.startsWith('/') ? (
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs text-white/50">{copyright}</p>
        </div>
      </div>
    </footer>
  )
}
