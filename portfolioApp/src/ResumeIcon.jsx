import resumeSVG from './assets/resumepdf.svg'

function ResumeIcon() {

    const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Jerina_Resume.pdf'
    link.click()
   }

    return(
        <div onDoubleClick={handleDownload} className="flex flex-col items-center gap-1 cursor-pointer">
            <img src={resumeSVG} alt="aboutme" className="w-14 h-14" draggable={false} />
            <p className = "text-white text-xs text-center">Resume.pdf</p>
        </div>
    )
}

export default ResumeIcon