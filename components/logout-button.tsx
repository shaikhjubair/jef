'use client'

import { LogOut } from 'lucide-react'

export function LogoutButton() {
  const handleLogout = () => {
    document.cookie = 'admin_auth=; Max-Age=0; path=/'
    window.location.href = '/blackberry'
  }

  return (
    <button
      onClick={handleLogout}
      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:text-white hover:bg-red-500/20 transition-all font-bold group"
    >
      <LogOut className="size-5" />
      End Session
    </button>
  )
}
