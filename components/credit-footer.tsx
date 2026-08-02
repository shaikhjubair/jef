'use client'

import { usePathname } from 'next/navigation'

export function CreditFooter() {
  const pathname = usePathname()

  if (pathname === '/') return null

  return (
    <footer className="mt-auto border-t border-border/40 bg-background">
      <div className="mx-auto max-w-6xl px-5 py-6 sm:px-6 lg:px-8">
        <p className="text-center text-sm tracking-wide text-slate-400">
          Crafted with precision by{' '}
          <a
            href="https://shaikhjubair.me"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-slate-400 transition-colors duration-300 hover:text-[#F26522]"
          >
            Shaikh Jubair
          </a>
        </p>
      </div>
    </footer>
  )
}
