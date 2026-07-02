import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

function Taskbar({ openWindows, terminalOpen, activeId, onTabClick }) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const formattedDate = time.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 h-12 flex items-center justify-between px-4 z-50"
      style={{
        background: 'rgba(15, 20, 40, 0.6)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(255,255,255,0.08)'
      }}
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {/* Left — JOS logo */}
      <div className="flex items-center gap-2">
        <div className="text-white font-mono font-bold text-sm px-3 py-1 rounded"
          style={{ background: 'rgba(255,255,255,0.1)' }}>
          JOS
        </div>
      </div>

      {/* Middle — open window tabs */}
      <div className="flex items-center gap-2">
        {openWindows.map(window => (
         <motion.div
          key={window.id}
          onClick={() => onTabClick(window.id)}
          className="flex items-center gap-2 px-3 py-1 rounded cursor-pointer text-sm text-gray-300 font-mono"
          style={{ 
            background: activeId === window.id 
              ? 'rgba(100,150,255,0.25)' 
              : 'rgba(255,255,255,0.1)' 
          }}
        >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
            {window.title}
          </motion.div>
        ))}

        {terminalOpen && (
        <motion.div
          onClick={() => onTabClick('terminal')}
          className="flex items-center gap-2 px-3 py-1 rounded cursor-pointer text-sm text-gray-300 font-mono"
          style={{ 
            background: activeId === 'terminal' 
              ? 'rgba(100,150,255,0.25)' 
              : 'rgba(255,255,255,0.1)' 
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
          Terminal
        </motion.div>
      )}
      </div>

      {/* Right — clock and date */}
      <div className="flex flex-col items-end">
        <span className="text-white text-sm font-mono">{formattedTime}</span>
        <span className="text-gray-400 text-sm font-mono">{formattedDate}</span>
      </div>

    </motion.div>
  )
}

export default Taskbar