import terminalSVG from './assets/terminal.svg'

function TerminalIcon() {


    return(
        <div className="flex flex-col items-center gap-1 cursor-pointer">
            <img src={terminalSVG} alt="aboutme" className="w-14 h-14" />
            <p className = "text-white text-xs text-center">Terminal</p>
        </div>
    )
}

export default TerminalIcon