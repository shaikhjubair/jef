import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
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
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,0.8fr)]">
          {/* Brand + contact */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt={org.name}
                width={140}
                height={36}
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">{org.name}</p>

            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-3 text-white/70 transition-colors hover:text-[#F26522]"
                >
                  <Phone className="mt-0.5 size-4 shrink-0 text-[#F26522]" aria-hidden="true" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-start gap-3 text-white/70 transition-colors hover:text-[#F26522]"
                >
                  <Mail className="mt-0.5 size-4 shrink-0 text-[#F26522]" aria-hidden="true" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 leading-relaxed text-white/70 transition-colors hover:text-[#F26522]"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0 text-[#F26522]" aria-hidden="true" />
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
                      className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-200 hover:border-[#F26522]/50 hover:text-[#F26522]"
                    >
                      <Icon className="size-4" />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Nav columns */}
          {footerColumns.map((col) => (
            <div key={col.id}>
              <h3 className="font-semibold text-white tracking-wide">{col.title}</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="text-white/60 transition-colors hover:text-[#F26522]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/50">{copyright}</p>
        </div>
      </div>
    </footer>
  )
}
