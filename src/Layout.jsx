import React, { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Home, ShoppingCart, Wallet, Users, Bot, Settings as Cog, Menu, Bell } from 'lucide-react'

const navItems = [
  { to: '/app/dashboard', label: 'Dashboard', icon: Home },
  { to: '/app/sales', label: 'Sales', icon: ShoppingCart },
  { to: '/app/finance', label: 'Finance', icon: Wallet },
  { to: '/app/customers', label: 'Customers', icon: Users },
  { to: '/app/assistant', label: 'AI Assistant', icon: Bot },
  { to: '/app/settings', label: 'Settings', icon: Cog },
]

export default function Layout() {
  const [open, setOpen] = useState(true)
  const location = useLocation()
  const today = new Date().toLocaleDateString('en-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
  const username = 'Ayu'

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#333]">
      <div className="flex">
        {/* Sidebar */}
        <aside className={`${open ? 'w-64' : 'w-20'} transition-all duration-300 h-screen sticky top-0 bg-white border-r border-gray-200 hidden md:flex flex-col`}>
          <div className="p-4 flex items-center gap-2 border-b border-gray-100">
            <button onClick={() => setOpen(!open)} className="p-2 rounded-lg hover:bg-gray-50"><Menu size={20} /></button>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-[#1E88E5]" />
              {open && <span className="text-lg font-semibold text-[#1E88E5]">BisPal</span>}
            </div>
          </div>
          <nav className="p-3 space-y-1">
            {navItems.map(({ to, label, icon: Icon }) => {
              const active = location.pathname === to
              return (
                <Link key={to} to={to} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm hover:bg-gray-50 ${active ? 'bg-[#E3F2FD] text-[#1E88E5]' : 'text-gray-700'}`}>
                  <Icon size={18} />
                  {open && <span>{label}</span>}
                </Link>
              )
            })}
          </nav>
        </aside>

        {/* Main */}
        <div className="flex-1 min-w-0">
          <header className="sticky top-0 z-10 bg-[#F5F7FA]/80 backdrop-blur supports-[backdrop-filter]:bg-[#F5F7FA]/60">
            <div className="flex items-center justify-between px-4 md:px-6 py-3">
              <div className="flex items-center gap-3 md:hidden">
                <button onClick={() => setOpen(!open)} className="p-2 rounded-lg bg-white border border-gray-200"><Menu size={18} /></button>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-[#1E88E5]" />
                  <span className="text-base font-semibold text-[#1E88E5]">BisPal</span>
                </div>
              </div>
              <div className="hidden md:block">
                <h2 className="text-sm text-gray-600">Good day, <span className="font-medium text-[#333]">{username}</span></h2>
                <p className="text-xs text-gray-500">{today}</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="relative p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50">
                  <Bell size={18} />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#1E88E5] rounded-full" />
                </button>
                <div className="w-8 h-8 rounded-full bg-white border border-gray-200 grid place-items-center text-xs font-medium">AY</div>
              </div>
            </div>
          </header>

          <main className="p-4 md:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
