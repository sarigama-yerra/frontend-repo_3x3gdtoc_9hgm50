import React from 'react'

export default function Customers() {
  const customers = [
    { id: 1, name: 'Budi Santoso', email: 'budi@example.com', lastPurchase: '2025-01-08' },
    { id: 2, name: 'Siti Aminah', email: 'siti@example.com', lastPurchase: '2025-01-07' },
    { id: 3, name: 'Andi Wijaya', email: 'andi@example.com', lastPurchase: '2025-01-05' },
  ]
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="text-left px-4 py-3">Name</th>
            <th className="text-left px-4 py-3">Email</th>
            <th className="text-left px-4 py-3">Last Purchase</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {customers.map(c => (
            <tr key={c.id} className="hover:bg-gray-50">
              <td className="px-4 py-3 text-[#333]">{c.name}</td>
              <td className="px-4 py-3">{c.email}</td>
              <td className="px-4 py-3">{c.lastPurchase}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
