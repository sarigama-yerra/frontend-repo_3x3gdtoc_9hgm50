import React from 'react'
import { Wallet } from 'lucide-react'

function Stat({ label, value }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-xl font-semibold text-[#333] mt-1">{value}</p>
    </div>
  )
}

function LineChart() {
  const points = [10, 30, 25, 40, 35, 55, 60]
  const max = 60
  const path = points.map((p, i) => `${(i/(points.length-1))*100},${100-(p/max)*100}`).join(' ')
  return (
    <svg viewBox="0 0 100 100" className="w-full h-40">
      <polyline fill="none" stroke="#1E88E5" strokeWidth="2" points={path} />
    </svg>
  )
}

export default function Finance() {
  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-3 gap-4">
        <Stat label="Total Revenue" value="Rp 120,500,000" />
        <Stat label="Expenses" value="Rp 45,200,000" />
        <Stat label="Profit" value="Rp 75,300,000" />
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <div className="flex items-center gap-2 mb-2 text-gray-700"><Wallet size={18} /> Auto-generated financial report</div>
        <LineChart />
      </div>
    </div>
  )
}
