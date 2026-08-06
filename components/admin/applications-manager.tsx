'use client'

import { useState, useEffect } from 'react'
import { Plus, Loader2, Users, Search } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { cn } from '@/lib/utils'

type Application = {
  application_id: string
  name: string
  email: string
  type: string
  status: string
  created_at?: string
}

export function ApplicationsManager() {
  const [applications, setApplications] = useState<Application[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // Form State (Add Member)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const fetchApplications = async () => {
    setIsLoading(true)
    const { data, error } = await supabase.from('applications').select('*').order('created_at', { ascending: false })
    if (data && !error) {
      setApplications(data as Application[])
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchApplications()
  }, [])

  const handleStatusChange = async (appId: string, newStatus: string) => {
    // Optimistic UI update
    setApplications(apps => apps.map(app => app.application_id === appId ? { ...app, status: newStatus } : app))
    
    const { error } = await supabase.from('applications').update({ status: newStatus }).eq('application_id', appId)
    if (error) {
      alert('Failed to update status: ' + error.message)
      // Revert optimistic update
      fetchApplications()
    } else {
      // Show simple toast or console log for success
      console.log(`Updated ${appId} to ${newStatus}`)
    }
  }

  const handleAddMember = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    const randomId = Math.random().toString(36).substring(2, 8).toUpperCase()
    const newAppId = `JEF-MB-${randomId}`

    const payload = {
      application_id: newAppId,
      name,
      email,
      type: 'Member',
      status: 'Approved',
    }

    const { data, error } = await supabase.from('applications').insert([payload]).select().single()
    
    if (error) {
      alert('Failed to add member: ' + error.message)
    } else if (data) {
      alert('Member added successfully!')
      setApplications([data as Application, ...applications])
      setIsModalOpen(false)
      setName('')
      setEmail('')
    }
    setIsSaving(false)
  }

  const filteredApps = applications.filter(app => 
    app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    app.application_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-navy">Applications & Members</h2>
          <p className="text-muted-foreground mt-1">Review registrations and manage members.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2 rounded-xl border border-border focus:border-[#F26522] outline-none text-sm w-full sm:w-64"
            />
          </div>
          <button onClick={() => setIsModalOpen(true)} className="flex shrink-0 items-center gap-2 bg-[#F26522] text-white px-4 py-2 rounded-xl font-bold shadow-lg shadow-[#F26522]/20 hover:bg-[#F26522]/90 transition-all">
            <Plus className="size-4" />
            Add Member
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="py-24 text-center">
          <Loader2 className="size-8 animate-spin mx-auto text-[#F26522] mb-4" />
          <p className="text-lg font-semibold text-navy">Loading applications...</p>
        </div>
      ) : applications.length === 0 ? (
        <div className="bg-white rounded-2xl border border-border p-8 text-center shadow-sm">
          <div className="mx-auto size-16 bg-secondary rounded-full flex items-center justify-center mb-4">
            <Users className="size-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-bold text-navy mb-2">No Applications Found</h3>
          <p className="text-muted-foreground max-w-sm mx-auto">There are currently no member applications or event registrations in the system.</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary/50 text-muted-foreground">
                <tr>
                  <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Tracking ID</th>
                  <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Applicant</th>
                  <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Type</th>
                  <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Status</th>
                  <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredApps.map((app) => (
                  <tr key={app.application_id} className="hover:bg-secondary/20 transition-colors">
                    <td className="px-6 py-4 font-mono text-xs font-semibold text-navy">{app.application_id}</td>
                    <td className="px-6 py-4">
                      <div className="font-bold text-navy">{app.name}</div>
                      <div className="text-muted-foreground text-xs">{app.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={cn("inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                        app.type === 'Member' ? "bg-blue-500/10 text-blue-700" : "bg-purple-500/10 text-purple-700"
                      )}>
                        {app.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={cn("inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                        app.status === 'Approved' ? "bg-green-500/10 text-green-700" :
                        app.status === 'Rejected' ? "bg-red-500/10 text-red-700" :
                        "bg-[#F26522]/10 text-[#F26522]"
                      )}>
                        {app.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <select 
                        value={app.status} 
                        onChange={(e) => handleStatusChange(app.application_id, e.target.value)}
                        className="text-xs font-semibold bg-white border border-border rounded-lg px-2 py-1.5 outline-none focus:border-[#F26522] cursor-pointer"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approve</option>
                        <option value="Rejected">Reject</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {filteredApps.length === 0 && (
              <div className="p-8 text-center text-muted-foreground">
                No applications match your search query.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal - Add Member */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-navy-deep/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-border flex items-center justify-between sticky top-0 bg-white z-10">
              <h3 className="text-xl font-bold text-navy">Directly Add Member</h3>
              <button onClick={() => setIsModalOpen(false)} className="size-8 flex items-center justify-center rounded-full hover:bg-secondary text-muted-foreground">✕</button>
            </div>
            
            <form onSubmit={handleAddMember} className="p-6 space-y-4">
              <p className="text-sm text-muted-foreground mb-4">
                This will create a new approved member record immediately without them needing to apply.
              </p>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-navy">Full Name</label>
                <input required type="text" value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-border focus:border-[#F26522] outline-none" />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-navy">Email Address</label>
                <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-border focus:border-[#F26522] outline-none" />
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-xl font-bold text-muted-foreground hover:bg-secondary transition-colors">
                  Cancel
                </button>
                <button type="submit" disabled={isSaving} className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold bg-[#F26522] text-white hover:bg-[#F26522]/90 transition-colors disabled:opacity-50">
                  {isSaving && <Loader2 className="size-4 animate-spin" />}
                  Add Member
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
