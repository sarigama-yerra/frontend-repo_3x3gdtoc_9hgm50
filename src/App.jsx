import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './Login'
import Layout from './Layout'
import Dashboard from './Dashboard'
import Sales from './Sales'
import Finance from './Finance'
import Customers from './Customers'
import Assistant from './Assistant'
import Settings from './Settings'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/app" element={<Layout />}> 
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="sales" element={<Sales />} />
        <Route path="finance" element={<Finance />} />
        <Route path="customers" element={<Customers />} />
        <Route path="assistant" element={<Assistant />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}
