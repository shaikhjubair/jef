import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { LayoutDashboard, Calendar, FileText, Users, LogOut } from 'lucide-react'
import { LogoutButton } from '@/components/logout-button'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const adminAuth = cookieStore.get('admin_auth')

  if (!adminAuth || adminAuth.value !== 'true') {
    redirect('/blackberry')
  }

  const navItems = [
    { label: 'Overview', href: '/blackberry/dashboard', icon: LayoutDashboard },
    { label: 'Manage Events', href: '/blackberry/dashboard?tab=events', icon: Calendar },
    { label: 'Manage News', href: '/blackberry/dashboard?tab=news', icon: FileText },
    { label: 'Applications', href: '/blackberry/dashboard?tab=applications', icon: Users },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-72 bg-navy-deep border-r border-border md:h-screen sticky top-0 flex flex-col shadow-2xl z-20">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="font-serif text-xl font-bold text-white flex items-center gap-2">
            <div className="size-8 rounded-lg bg-[#F26522] flex items-center justify-center shadow-lg shadow-[#F26522]/20">
              <span className="text-white font-bold leading-none">J</span>
            </div>
            UIUJEF CMS
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all group font-medium"
            >
              <item.icon className="size-5 text-white/50 group-hover:text-[#F26522] transition-colors" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <LogoutButton />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-[#f8fafc]">
        {children}
      </main>
    </div>
  )
}
