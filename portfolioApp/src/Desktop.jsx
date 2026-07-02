import { useState, useRef } from 'react'
import AboutIcon from './AboutIcon'
import ProjectIcon from './ProjectIcon'
import SkillsIcon from './SkillsIcon'
import TerminalIcon from './TerminalIcon'
import ContactIcon from './ContactIcon'
import ResumeIcon from './ResumeIcon'
import WindowModal from './WindowModal'
import AboutContent from './AboutContent'
import ProjectsContent from './ProjectsContent'
import SkillsContent from './SkillsContent'
import ContactContent from './ContactContent'
import Terminal from './Terminal'
import { motion } from 'framer-motion'
import Taskbar from './Taskbar'

function Desktop() {

const [openWindows, setOpenWindows] = useState([])
const [terminalOpen, setTerminalOpen] = useState(false)
const [activeId, setActiveId] = useState(null)
const desktopRef = useRef(null)

const handleClose = (id) => {
    setOpenWindows(prev => prev.filter(w => w.id !== id))
  }
  
const handleOpen = (id, title, content) => {
    setOpenWindows(prev => {
      const alreadyOpen = prev.find(w => w.id === id)
      if (alreadyOpen) return prev
      return [...prev, { id, title, content }]
    })
    setActiveId(id)
  }        

const handleFocus = (id) => {
  setActiveId(id)
}  

  return (
     <motion.div
      className="desktop"
      ref={desktopRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
    
      <div className="fixed inset-0" style={{ pointerEvents: 'none' }}>
  <motion.div drag dragMomentum={false} dragConstraints={desktopRef}
    className="absolute" style={{ left: 48, top: 30, pointerEvents: 'auto' }}>
    <AboutIcon onDoubleClick={() => handleOpen('about', 'About', <AboutContent />)} />
  </motion.div>

  <motion.div drag dragMomentum={false} dragConstraints={desktopRef}
    className="absolute" style={{ left: 48, top: 135, pointerEvents: 'auto' }}>
    <ProjectIcon onDoubleClick={() => handleOpen('projects', 'Projects', <ProjectsContent />)} />
  </motion.div>

  <motion.div drag dragMomentum={false} dragConstraints={desktopRef}
    className="absolute" style={{ left: 48, top: 240, pointerEvents: 'auto' }}>
    <SkillsIcon onDoubleClick={() => handleOpen('skills', 'Skills', <SkillsContent />)} />
  </motion.div>

  <motion.div drag dragMomentum={false} dragConstraints={desktopRef}
    className="absolute" style={{ left: 48, top: 345, pointerEvents: 'auto' }}>
    <TerminalIcon onDoubleClick={() => { setTerminalOpen(true); setActiveId('terminal') }} />
  </motion.div>

  <motion.div drag dragMomentum={false} dragConstraints={desktopRef}
    className="absolute" style={{ left: 48, top: 450, pointerEvents: 'auto' }}>
    <ContactIcon onDoubleClick={() => handleOpen('contact', 'Contact', <ContactContent />)} />
  </motion.div>

  <motion.div drag dragMomentum={false} dragConstraints={desktopRef}
    className="absolute" style={{ left: 48, top: 555, pointerEvents: 'auto' }}>
    <ResumeIcon />
  </motion.div>
  </div>

       {openWindows.map((window, index) => (
        <WindowModal
          key={window.id}
          title={window.title}
          content={window.content}
          onClose={() => handleClose(window.id)}
          offset={index}
          isActive={activeId === window.id}
          onFocus={() => handleFocus(window.id)}
        />
      ))}

    {terminalOpen && (
      <Terminal
        onClose={() => setTerminalOpen(false)}
        isActive={activeId === 'terminal'}
        onFocus={() => setActiveId('terminal')}
      />
    )} 
    
    <Taskbar 
      openWindows={openWindows}
      terminalOpen={terminalOpen}
      activeId={activeId}
      onTabClick={handleFocus}
    />
    </motion.div>
    
  )
}

export default Desktop