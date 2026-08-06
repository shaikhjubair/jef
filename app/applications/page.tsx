'use client'

import { useState } from 'react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Search, Loader2, CheckCircle2, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ApplicationsTrackingPage() {
  const [appId, setAppId] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<'mb-pending' | 'mb-approved' | 'ev-pending' | 'ev-approved' | 'not-found' | null>(null)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!appId.trim()) return

    setIsLoading(true)
    setResult(null)

    // Mock network request
    await new Promise(resolve => setTimeout(resolve, 1500))

    const cleanId = appId.trim().toUpperCase()
    
    if (cleanId.startsWith('JEF-MB-') && cleanId.length === 13) {
      setResult(Math.random() > 0.7 ? 'mb-approved' : 'mb-pending')
    } else if (cleanId.startsWith('JEF-EV-') && cleanId.length === 13) {
      setResult(Math.random() > 0.7 ? 'ev-approved' : 'ev-pending')
    } else {
      setResult('not-found')
    }
    
    setIsLoading(false)
  }

  return (
    <div className="relative min-h-screen bg-navy-deep flex flex-col">
      <SiteNav />

      <main className="flex-1 flex flex-col items-center justify-center p-4 py-24 sm:py-32">
        <div className="w-full max-w-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
              Track Your <span className="text-[#F26522]">Application</span>
            </h1>
            <p className="text-white/70">
              Enter the tracking ID (e.g., JEF-MB-XXXXXX or JEF-EV-XXXXXX) you received during registration to view your current status.
            </p>
          </div>

          {/* Search Card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <form onSubmit={handleSearch} className="relative flex items-center">
              <Search className="absolute left-4 size-5 text-white/40" />
              <input
                type="text"
                placeholder="Enter Application ID"
                value={appId}
                onChange={(e) => setAppId(e.target.value.toUpperCase())}
                className="w-full rounded-full border border-white/10 bg-white/5 pl-12 pr-32 py-4 text-white placeholder:text-white/30 focus:border-[#F26522]/50 focus:outline-none focus:ring-1 focus:ring-[#F26522]/40 transition-colors font-mono tracking-wider uppercase"
                required
              />
              <button
                type="submit"
                disabled={isLoading || !appId.trim()}
                className="absolute right-2 top-2 bottom-2 rounded-full bg-[#F26522] px-6 text-sm font-bold text-white transition-all hover:bg-[#F26522]/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
              >
                {isLoading ? <Loader2 className="size-4 animate-spin" /> : 'Check Status'}
              </button>
            </form>

            {/* Results Area */}
            {result && (
              <div className="mt-8 pt-8 border-t border-white/10 transition-all duration-500 ease-in-out">
                {result === 'not-found' && (
                  <div className="text-center p-6 rounded-2xl bg-red-500/10 border border-red-500/20">
                    <p className="text-red-400 font-medium">Application Not Found</p>
                    <p className="text-sm text-red-400/70 mt-1">Please double-check your ID format (e.g., JEF-MB-XXXXXX) and try again.</p>
                  </div>
                )}

                {result === 'mb-pending' && (
                  <div className="flex flex-col sm:flex-row items-center gap-5 p-6 rounded-2xl bg-[#F26522]/10 border border-[#F26522]/30 text-left">
                    <div className="size-14 rounded-full bg-[#F26522]/20 flex items-center justify-center shrink-0">
                      <Clock className="size-6 text-[#F26522]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Member Application Pending</h3>
                      <p className="text-sm text-white/70 mt-1">Your member application is currently under review by the Executive Panel. You will receive an email once a decision is made.</p>
                    </div>
                  </div>
                )}

                {result === 'mb-approved' && (
                  <div className="flex flex-col sm:flex-row items-center gap-5 p-6 rounded-2xl bg-green-500/10 border border-green-500/30 text-left">
                    <div className="size-14 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="size-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Member Application Approved!</h3>
                      <p className="text-sm text-white/70 mt-1">Congratulations! You are officially a member of UIUJEF. Check your email for further instructions.</p>
                    </div>
                  </div>
                )}

                {result === 'ev-pending' && (
                  <div className="flex flex-col sm:flex-row items-center gap-5 p-6 rounded-2xl bg-[#F26522]/10 border border-[#F26522]/30 text-left">
                    <div className="size-14 rounded-full bg-[#F26522]/20 flex items-center justify-center shrink-0">
                      <Clock className="size-6 text-[#F26522]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Event Registration Pending</h3>
                      <p className="text-sm text-white/70 mt-1">Your event registration and payment are being verified. An email confirmation will be sent shortly.</p>
                    </div>
                  </div>
                )}

                {result === 'ev-approved' && (
                  <div className="flex flex-col sm:flex-row items-center gap-5 p-6 rounded-2xl bg-green-500/10 border border-green-500/30 text-left">
                    <div className="size-14 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="size-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Event Registration Confirmed!</h3>
                      <p className="text-sm text-white/70 mt-1">Your spot is secured. We look forward to seeing you at the event. Check your email for details.</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
