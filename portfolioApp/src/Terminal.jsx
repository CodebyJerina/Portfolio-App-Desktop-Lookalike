import { useState, useEffect, useRef } from 'react'

function Terminal({ onClose, isActive, onFocus }) {

    const [input, setInput] = useState('')
    const [history, setHistory] = useState([])
    const [booting, setBooting] = useState(true)
    const [bootLines, setBootLines] = useState([])
    
    const bootSequence = [
        'Initializing portfolio...',
        'Loading Jerina.exe...',
        'Mounting skills... done',
        'Compiling 6 years of experience...',
        'All systems go. 🚀',
        '─────────────────────────────────────',
        'Welcome to Jerina\'s Portfolio Terminal',
        'Type "help" to see available commands',
        '─────────────────────────────────────',
    ]

    const hasBooted = useRef(false)

    useEffect(() => {
  let index = 0
  setBootLines([])

  const interval = setInterval(() => {
    index++
    if (index <= bootSequence.length) {
      setBootLines(bootSequence.slice(0, index))
    } else {
      clearInterval(interval)
      setBooting(false)
    }
  }, 300)

  return () => clearInterval(interval)
}, [])

    const bottomRef = useRef(null)

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [history])

    const handleCommand = (cmd) => {
        const command = cmd.trim().toLowerCase()

        let response = []

        if (command === 'help') {
            response = [
                'Available commands:',
                '  whoami    → who is Jerina?',
                '  skills    → tech stack',
                '  projects  → things I built',
                '  contact   → get in touch',
                '  clear     → clear terminal',
            ]
        } else if (command === 'whoami') {
            response = [
                'Jerina G - Frontend Developer',
                '8 years in tech, 6 at Caterpillar',
                'React specialist. Bug fixer. Accidental full-stack person.',
            ]
        } else if (command === 'skills') {
            response = [
                'Frontend  → React, JavaScript, Typescript, Redux, HTML/CSS',
                'Backend   → SQL, REST APIs, .NET/C#, Microsoft Azure',
                'Tools     → Power BI, Azure DevOps, Git',
                'Exposure  → React Native, OpenAI, Bot Framework',
            ]
        } else if (command === 'projects') {
            response = [
                '1. Desk Booking App     → 1000+ users, built from scratch',
                '2. Enterprise Chatbot   → IT & HR queries via NLP',
                '3. Known Error Database → searchable knowledge base',
            ]
        } else if (command === 'contact') {
            response = [
                'Email     → inboxofjerina@gmail.com',
                'Phone     → 1234567890',
                'Location  → Chennai, India',
                'GitHub    → github.com/CodebyJerina',
            ]
        } else if (command === 'clear') {
            setHistory([])
            setInput('')
            return
        } else if (command === '') {
            response = []
        } else {
            response = [`command not found: ${command} - try "help"`]
        }

        setHistory(prev => [
            ...prev,
            { type: 'command', text: command },
            ...response.map(r => ({ type: 'response', text: r }))
        ])
        setInput('')
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input)
        }
    }

    return (
        <div
        onClick={onFocus}
        style={{ top: '10%', left: '20%', zIndex: isActive ? 50 : 40 }}
        className="fixed w-3/4 h-3/4 bg-black border border-green-900 rounded-lg flex flex-col shadow-2xl"
        >

            <div className="flex items-center px-4 py-3 bg-green-950 rounded-t-lg border-b border-green-900 relative">
                <div className="flex items-center gap-2">
                    <div onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:opacity-80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="absolute left-1/2 -translate-x-1/2 text-green-400 text-sm font-mono">
                    jerina@portfolio: ~
                </span>
            </div>
            <div className="flex-1 overflow-y-auto p-4 font-mono text-sm">
                {bootLines.map((line, index) => (
                    <div key={index} className="text-green-400">{line}</div>
                ))}
                {!booting && (
                    <>
                        {history.map((item, index) => (
                            <div key={index} className={
                                item.type === 'command'
                                    ? 'text-green-400'
                                    : item.type === 'error'
                                        ? 'text-red-400'
                                        : 'text-gray-300'
                            }>
                                {item.type === 'command'
                                    ? `jerina@portfolio:~$ ${item.text}`
                                    : item.text}
                            </div>
                        ))}

                        <div className="flex items-center text-green-400 mt-1">
                            <span>jerina@portfolio:~$&nbsp;</span>
                            <div className="relative flex-1 flex items-center">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={e => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="bg-transparent outline-none text-green-400 w-full caret-transparent"
                                    autoFocus
                                />
                                <span
                                    className="blink text-green-400 absolute"
                                    style={{ left: `${input.length}ch` }}
                                >▋</span>
                            </div>
                        </div>
                        <div ref={bottomRef} />
                    </>
                )}
            </div>

        </div>

    )
}

export default Terminal