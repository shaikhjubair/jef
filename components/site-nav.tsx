'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, org } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const linkClass = (isHome: boolean) =>
  cn(
    'text-sm font-medium transition-colors duration-200',
    isHome ? 'text-white/70 hover:text-white' : 'text-muted-foreground hover:text-navy',
  )

const mobileLinkClass = (isHome: boolean) =>
  cn(
    'block rounded-lg px-3 py-3 text-sm font-medium transition-colors',
    isHome
      ? 'text-white/80 hover:bg-white/10 hover:text-white'
      : 'text-foreground hover:bg-secondary hover:text-navy',
  )

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  const renderNavLinks = (className: string, onNavigate?: () => void) => (
    <>
      {!isHome && (
        <Link href="/" className={className} onClick={onNavigate}>
          Home
        </Link>
      )}
      {navLinks.map((link) => (
        <Link key={link.id} href={link.href} className={className} onClick={onNavigate}>
          {link.label}
        </Link>
      ))}
    </>
  )

  return (
    <header
      className={cn(
        'inset-x-0 top-0 z-50',
        isHome
          ? 'absolute'
          : 'sticky border-b border-border bg-background/95 backdrop-blur-md',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8"
      >
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="UIUJEF Logo"
            height={56}
            width={200}
            priority
            className="h-14 w-auto cursor-pointer object-contain"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {renderNavLinks(linkClass(isHome))}
          <Link
            href={org.ctaHref}
            className="inline-flex h-9 items-center rounded-full bg-gold px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-gold-soft"
          >
            {org.ctaLabel}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className={cn(
            'inline-flex size-10 items-center justify-center rounded-lg transition-colors duration-200 md:hidden',
            isHome ? 'text-white hover:bg-white/10' : 'text-navy hover:bg-secondary',
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">Toggle navigation menu</span>
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className={cn(
            'mx-5 mb-4 rounded-2xl border p-4 md:hidden',
            isHome
              ? 'border-white/15 bg-navy-deep/90 backdrop-blur-xl'
              : 'border-border bg-background shadow-lg',
          )}
        >
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className={cn(
                'inline-flex size-8 items-center justify-center rounded-md',
                isHome ? 'text-white/70 hover:text-white' : 'text-muted-foreground hover:text-navy',
              )}
            >
              <X className="size-4" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <ul className="flex flex-col">
            {!isHome && (
              <li>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className={mobileLinkClass(isHome)}
                >
                  Home
                </Link>
              </li>
            )}
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={mobileLinkClass(isHome)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={org.ctaHref}
            onClick={() => setOpen(false)}
            className="mt-2 flex h-11 items-center justify-center rounded-full bg-gold text-sm font-semibold text-white"
          >
            {org.ctaLabel}
          </Link>
        </div>
      )}
    </header>
  )
}
