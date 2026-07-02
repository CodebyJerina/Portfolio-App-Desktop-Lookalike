import aboutSVG from './assets/about.svg'

function AboutIcon({ onDoubleClick }) {


    return(
        <div onDoubleClick={onDoubleClick} className="flex flex-col items-center gap-1 cursor-pointer">
            <img src={aboutSVG} alt="aboutme" className="w-14 h-14" draggable={false} />
            <p className = "text-white text-xs text-center">About</p>
        </div>
    )
}

export default AboutIcon