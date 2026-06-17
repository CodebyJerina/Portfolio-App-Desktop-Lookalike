import skillsSVG from './assets/skills.svg'

function SkillsIcon({ onDoubleClick }) {


    return(
        <div onDoubleClick={onDoubleClick} className="flex flex-col items-center gap-1 cursor-pointer">
            <img src={skillsSVG} alt="aboutme" className="w-14 h-14" />
            <p className = "text-white text-xs text-center">Skills</p>
        </div>
    )
}

export default SkillsIcon