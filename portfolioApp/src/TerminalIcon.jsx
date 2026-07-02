import terminalSVG from './assets/terminal.svg'

function TerminalIcon({ onDoubleClick }) {


    return(
        <div onDoubleClick={onDoubleClick} className="flex flex-col items-center gap-1 cursor-pointer">
            <img src={terminalSVG} alt="aboutme" className="w-14 h-14" draggable={false} />
            <p className = "text-white text-xs text-center">Terminal</p>
        </div>
    )
}

export default TerminalIcon