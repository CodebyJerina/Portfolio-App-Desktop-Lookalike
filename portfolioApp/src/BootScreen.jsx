import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function BootScreen({ onBootComplete }) {

    const [progress, setProgress] = useState(0)
    const [bootLines, setBootLines] = useState([])
    const [done, setDone] = useState(false)

    const messages = [
    'Initializing Jerina OS v1.0...',
    'Loading kernel modules...',
    'Mounting file systems...',
    'Starting system services...',
    'Loading user profile...',
    'Preparing desktop environment...',
    'All systems ready.',
  ]

  useEffect(() => {
    let msgIndex = 0
    const msgInterval = setInterval(() => {
      if (msgIndex < messages.length) {
        setBootLines(prev => [...prev, messages[msgIndex]])
        setProgress(Math.round(((msgIndex + 1) / messages.length) * 100))
        msgIndex++
      } else {
        clearInterval(msgInterval)
        setTimeout(() => {
          setDone(true)
          setTimeout(onBootComplete, 100)
        }, 500)
      }
    }, 350)

    return () => clearInterval(msgInterval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 bg-black flex flex-col justify-between p-8 z-50"
      animate={done ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Top left — OS info */}
      <div className="font-mono text-gray-500 text-xs">
        <p>Jerina OS v1.0</p>
        <p>Copyright © 2025 Jerina G. All rights reserved.</p>
      </div>

      {/* Center — boot messages */}
      <div className="flex flex-col gap-1 font-mono text-sm">
        {bootLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-400"
          >
            <span className="text-green-500 mr-2">[  OK  ]</span>
            {line}
          </motion.div>
        ))}
      </div>

      {/* Bottom — progress bar */}
      <div className="flex flex-col gap-2">
        <div className="w-full bg-gray-800 rounded-full h-1">
          <motion.div
            className="bg-blue-500 h-1 rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <p className="text-gray-600 text-xs font-mono">{progress}%</p>
      </div>

    </motion.div>
  )
}

export default BootScreen

