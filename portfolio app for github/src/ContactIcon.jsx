import contactSVG from './assets/contact.svg'

function ContactIcon({onDoubleClick}) {


    return(
        <div onDoubleClick={onDoubleClick} className="flex flex-col items-center gap-1 cursor-pointer">
            <img src={contactSVG} alt="aboutme" className="w-14 h-14" />
            <p className = "text-white text-xs text-center">Contact</p>
        </div>
    )
}

export default ContactIcon