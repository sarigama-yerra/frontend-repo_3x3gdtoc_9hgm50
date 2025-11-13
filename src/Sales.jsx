import React from 'react'
import { Search, Plus } from 'lucide-react'

const data = [
  { id: 1, product: 'Es Kopi Susu', qty: 2, total: 'Rp 30.000', date: '2025-01-10' },
  { id: 2, product: 'Nasi Goreng', qty: 1, total: 'Rp 20.000', date: '2025-01-10' },
  { id: 3, product: 'Bakso', qty: 3, total: 'Rp 45.000', date: '2025-01-09' },
]

export default function Sales() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input placeholder="Search transactions..." className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1E88E5]/30 focus:border-[#1E88E5]" />
        </div>
        <button className="inline-flex items-center gap-2 bg-[#1E88E5] text-white px-3 py-2 rounded-lg text-sm hover:bg-[#1976D2]">
          <Plus size={16} />
          + Add Sale
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl border border-gray-200">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left px-4 py-3">Product</th>
              <th className="text-left px-4 py-3">Qty</th>
              <th className="text-left px-4 py-3">Total</th>
              <th className="text-left px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map(row => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-[#333]">{row.product}</td>
                <td className="px-4 py-3">{row.qty}</td>
                <td className="px-4 py-3">{row.total}</td>
                <td className="px-4 py-3">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
