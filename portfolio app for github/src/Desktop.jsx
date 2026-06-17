import { useState } from 'react'
import AboutIcon from './AboutIcon'
import ProjectIcon from './ProjectIcon'
import SkillsIcon from './SkillsIcon'
import TerminalIcon from './TerminalIcon'
import ContactIcon from './ContactIcon'
import WindowModal from './WindowModal'
import AboutContent from './AboutContent'
import ProjectsContent from './ProjectsContent'
import SkillsContent from './SkillsContent'
import ContactContent from './ContactContent'

function Desktop() {

const [openWindows, setOpenWindows] = useState([])

const handleClose = (id) => {
    setOpenWindows(prev => prev.filter(w => w.id !== id))
  }
  
const handleOpen = (id, title, content) => {
          setOpenWindows(prev => {
            const alreadyOpen = prev.find(w => w.id === id)
            if (alreadyOpen) return prev
            return [...prev, { id, title, content }]
          })
        }

  return (
    <div className="desktop">        
        <div className="fixed left-12 top-12 flex flex-col gap-4">
         <AboutIcon onDoubleClick={() => handleOpen('about', 'About', <AboutContent />)} />
        <ProjectIcon onDoubleClick={() => handleOpen('projects', 'Projects', <ProjectsContent />)} />
        <SkillsIcon onDoubleClick={() => handleOpen('skills', 'Skills', <SkillsContent />)} />
        <TerminalIcon />
        <ContactIcon onDoubleClick={() => handleOpen('contact', 'Contact', <ContactContent />)} />
         </div>

       {openWindows.map((window, index) => (
        <WindowModal
          key={window.id}
          title={window.title}
          content={window.content}
          onClose={() => handleClose(window.id)}
          offset={index}
        />
      ))}      
    </div>
  )
}

export default Desktop