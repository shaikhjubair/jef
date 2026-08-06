'use client'

import { useSearchParams } from 'next/navigation'
import { LayoutDashboard, Calendar, FileText, Users, Plus } from 'lucide-react'

export default function DashboardPage() {
  const searchParams = useSearchParams()
  const tab = searchParams.get('tab') || 'overview'

  const renderTabContent = () => {
    switch (tab) {
      case 'events':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-navy">Manage Events</h2>
                <p className="text-muted-foreground mt-1">Create, edit, or delete UIUJEF events.</p>
              </div>
              <button className="flex items-center gap-2 bg-[#F26522] text-white px-4 py-2 rounded-xl font-bold shadow-lg shadow-[#F26522]/20 hover:bg-[#F26522]/90 transition-all">
                <Plus className="size-4" />
                Add Event
              </button>
            </div>
            
            <div className="bg-white rounded-2xl border border-border p-8 text-center shadow-sm">
              <div className="mx-auto size-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                <Calendar className="size-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">No Events Found</h3>
              <p className="text-muted-foreground max-w-sm mx-auto">It looks like there are no events in the system yet. Click "Add Event" to create your first one.</p>
            </div>
          </div>
        )
      case 'news':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-navy">Manage News</h2>
                <p className="text-muted-foreground mt-1">Publish and manage news articles.</p>
              </div>
              <button className="flex items-center gap-2 bg-[#F26522] text-white px-4 py-2 rounded-xl font-bold shadow-lg shadow-[#F26522]/20 hover:bg-[#F26522]/90 transition-all">
                <Plus className="size-4" />
                Write Article
              </button>
            </div>
            
            <div className="bg-white rounded-2xl border border-border p-8 text-center shadow-sm">
              <div className="mx-auto size-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                <FileText className="size-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">No News Found</h3>
              <p className="text-muted-foreground max-w-sm mx-auto">There are currently no news articles. Start writing to keep your members informed!</p>
            </div>
          </div>
        )
      case 'applications':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-navy">Applications & Registrations</h2>
                <p className="text-muted-foreground mt-1">Review member joins and event registrations.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl border border-border p-8 text-center shadow-sm">
              <div className="mx-auto size-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                <Users className="size-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">No Pending Applications</h3>
              <p className="text-muted-foreground max-w-sm mx-auto">All applications have been reviewed or there are no new submissions at this time.</p>
            </div>
          </div>
        )
      case 'overview':
      default:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h2 className="text-2xl font-bold text-navy">Dashboard Overview</h2>
              <p className="text-muted-foreground mt-1">Welcome to the UIUJEF Administrative Terminal.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Stat Cards */}
              <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex items-center gap-4">
                <div className="size-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Calendar className="size-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Total Events</p>
                  <p className="text-3xl font-black text-navy mt-1">0</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex items-center gap-4">
                <div className="size-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <FileText className="size-6 text-green-500" />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Published News</p>
                  <p className="text-3xl font-black text-navy mt-1">0</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex items-center gap-4">
                <div className="size-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <Users className="size-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Total Members</p>
                  <p className="text-3xl font-black text-navy mt-1">0</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-2xl border border-border p-8 text-center shadow-sm">
              <div className="mx-auto size-16 bg-[#F26522]/10 rounded-full flex items-center justify-center mb-4">
                <LayoutDashboard className="size-8 text-[#F26522]" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">System Initialized</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                The CMS placeholder layout is active. Data fetching and form integrations will be added here in future updates.
              </p>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="p-8 lg:p-12">
      {renderTabContent()}
    </div>
  )
}
