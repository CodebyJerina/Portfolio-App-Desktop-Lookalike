import { useState } from 'react'
import Desktop from './Desktop'
import BootScreen from './BootScreen'
import './App.css'
import LoginScreen from './LoginScreen'
import { AnimatePresence } from 'framer-motion'

function App() {
  const [phase, setPhase] = useState('boot')

   return (
    <div style={{ background: 'black' }}>
      
      {/* Desktop always mounted but invisible until needed */}
      <div style={{ opacity: phase === 'desktop' ? 1 : 0, transition: 'opacity 0.5s ease' }}>
        <Desktop />
      </div>

      {/* Boot and login render on top */}
      <AnimatePresence mode="wait">
        {phase === 'boot' && (
          <BootScreen key="boot" onBootComplete={() => setPhase('login')} />
        )}
        {phase === 'login' && (
          <LoginScreen key="login" onLoginComplete={() => setPhase('desktop')} />
        )}
      </AnimatePresence>

    </div>
  )
}

export default App