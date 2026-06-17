import projectSVG from './assets/projects.svg'

function ProjectIcon({ onDoubleClick }) {


    return(
        <div onDoubleClick={onDoubleClick} className="flex flex-col items-center gap-1 cursor-pointer">
            <img src={projectSVG} alt="aboutme" className="w-14 h-14" />
            <p className = "text-white text-xs text-center">Projects</p>
        </div>
    )
}

export default ProjectIcon