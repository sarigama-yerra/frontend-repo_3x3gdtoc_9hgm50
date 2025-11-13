import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Spline from '@splinetool/react-spline'

export default function Login() {
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    navigate('/app/dashboard')
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex flex-col items-center justify-center p-4">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-center">
        <div className="hidden lg:block h-[520px] rounded-2xl overflow-hidden shadow-sm bg-white">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="w-full">
          <div className="mx-auto w-full max-w-md bg-white rounded-2xl shadow-sm p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-sm bg-[#1E88E5]" />
              <span className="text-xl font-semibold text-[#1E88E5] tracking-tight">BisPal</span>
            </div>
            <h1 className="text-2xl font-semibold text-[#333] mb-2">Welcome back</h1>
            <p className="text-sm text-gray-600 mb-6">Smart Business Assistant for Every UMKM.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Email</label>
                <input type="email" required placeholder="you@company.com" className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]/30 focus:border-[#1E88E5] bg-white text-[#333]" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Password</label>
                <input type="password" required placeholder="••••••••" className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]/30 focus:border-[#1E88E5] bg-white text-[#333]" />
              </div>
              <div className="flex items-center justify-between text-sm">
                <Link to="#" className="text-[#1E88E5] hover:underline">Forgot Password?</Link>
              </div>
              <button type="submit" className="w-full bg-[#1E88E5] text-white rounded-lg py-2.5 font-medium shadow-sm hover:bg-[#1976D2] transition">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
