import React from 'react'
import { ArrowUpRight, TrendingUp } from 'lucide-react'

function Card({ title, children, className = '' }) {
  return (
    <div className={`bg-white rounded-xl border border-gray-200 shadow-sm p-4 ${className}`}>
      {title && <h3 className="text-sm font-medium text-gray-700 mb-3">{title}</h3>}
      {children}
    </div>
  )
}

function RevenueChart() {
  // simple placeholder bars
  const data = [40,60,30,80,55,65,90]
  const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
  const max = 100
  return (
    <div className="flex items-end gap-3 h-40">
      {data.map((v, i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <div className="w-8 bg-[#E3F2FD] rounded-md overflow-hidden">
            <div className="bg-[#1E88E5] w-full rounded-md" style={{ height: `${(v/max)*100}%` }} />
          </div>
          <span className="text-xs text-gray-500">{days[i]}</span>
        </div>
      ))}
    </div>
  )
}

export default function Dashboard() {
  const bestProducts = [
    { id: 1, name: 'Es Kopi Susu', qty: 124, revenue: 'Rp 3.2jt', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=200&auto=format&fit=crop' },
    { id: 2, name: 'Nasi Goreng', qty: 98, revenue: 'Rp 2.4jt', img: 'https://images.unsplash.com/photo-1604908176997-4313f0b58b49?q=80&w=200&auto=format&fit=crop' },
    { id: 3, name: 'Bakso', qty: 76, revenue: 'Rp 1.8jt', img: 'https://images.unsplash.com/photo-1617191519400-9469231b3342?q=80&w=200&auto=format&fit=crop' },
  ]

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        <Card title="Sales Overview">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-2xl font-semibold text-[#333]">Rp 5,200,000</div>
              <div className="text-xs text-gray-500">Today</div>
            </div>
            <div className="flex items-center text-xs text-green-600 bg-green-50 border border-green-100 px-2 py-1 rounded-md"><TrendingUp size={14} className="mr-1" />+12%</div>
          </div>
          <div className="mt-4"><RevenueChart /></div>
        </Card>
        <Card title="Best-Selling Products">
          <div className="divide-y divide-gray-100">
            {bestProducts.map(p => (
              <div key={p.id} className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <img src={p.img} alt={p.name} className="w-10 h-10 rounded-md object-cover border border-gray-200" />
                  <div>
                    <p className="text-sm font-medium text-[#333]">{p.name}</p>
                    <p className="text-xs text-gray-500">{p.qty} sold</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-700">{p.revenue}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card title="AI Insight" className="bg-[#E3F2FD] border-[#D1E9FF]">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-white grid place-items-center border border-gray-200 text-[#1E88E5]"><ArrowUpRight /></div>
            <div>
              <p className="text-sm text-[#333]">Your most profitable day is <span className="font-semibold">Friday</span>. Consider running promos on Thursday night to boost traffic.</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
