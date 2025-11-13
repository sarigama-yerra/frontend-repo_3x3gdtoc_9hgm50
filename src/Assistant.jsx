import React, { useState, useRef, useEffect } from 'react'

function Bubble({ role, children }) {
  const isAI = role === 'ai'
  return (
    <div className={`flex ${isAI ? '' : 'justify-end'}`}>
      <div className={`max-w-[75%] rounded-2xl px-3 py-2 shadow-sm text-sm ${isAI ? 'bg-white border border-gray-200 text-[#333]' : 'bg-[#1E88E5] text-white'}`}>
        {children}
      </div>
    </div>
  )
}

export default function Assistant() {
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Hi! I am your BisPal AI assistant. Ask me anything about your sales and marketing. 😊' },
  ])
  const [input, setInput] = useState('')
  const endRef = useRef(null)

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages])

  function sendMessage(e) {
    e.preventDefault()
    if (!input.trim()) return
    const userMsg = { role: 'user', content: input }
    // simple mock reply
    const reply = { role: 'ai', content: 'Tip: Post a promo on Thursday evening and bundle popular items to lift Friday conversions by ~10%.' }
    setMessages(m => [...m, userMsg, reply])
    setInput('')
  }

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] bg-white rounded-xl border border-gray-200">
      <div className="p-4 border-b border-gray-100 text-sm text-gray-600">AI Assistant</div>
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((m, i) => (
          <Bubble key={i} role={m.role}>{m.content}</Bubble>
        ))}
        <div ref={endRef} />
      </div>
      <form onSubmit={sendMessage} className="p-3 border-t border-gray-100 flex gap-2">
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type your question..." className="flex-1 rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]/30 focus:border-[#1E88E5]" />
        <button className="bg-[#1E88E5] text-white px-4 rounded-lg">Send</button>
      </form>
    </div>
  )
}
