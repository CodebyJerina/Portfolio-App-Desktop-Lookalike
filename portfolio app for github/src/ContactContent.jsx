function ContactContent() {

    return (
        <div className="p-6 flex flex-col gap-4">
        <div className="text-3xl font-bold text-white">Let's Connect 📬</div>
        <div className="text-base text-green-400 font-mono">// always open to interesting conversations and opportunities</div>
        <p className="text-base text-gray-300 leading-relaxed">I'm currently open to new opportunities and 
        collaborations. Whether you have a project in mind, 
        a question, or just want to say hi - my inbox is 
        always open. I promise I don't bite (or ghost).
        </p>
         <div className="flex flex-col gap-2 mt-2">
                <div className="flex items-center gap-3">
                    <span className="text-gray-500 text-base w-32">📧  Email →</span> <a href="mailto:inboxofjerina@gmail.com" className="text-blue-400 text-base font-mono hover:underline cursor-pointer">inboxofjerina@gmail.com ↗</a>
                    </div>
                    <div className="flex items-center gap-3">
                    <span className="text-gray-500 text-base w-32">📞  Phone →</span> <span className="text-blue-400 text-base font-mono"> +91 75502 *****</span>
                    </div>
                    <div className="flex items-center gap-3">
                    <span className="text-gray-500 text-base w-32">📍  Location →</span> <span className="text-blue-400 text-base font-mono"> Chennai, India</span>
                    </div>
                    <div className="flex items-center gap-3">
                    <span className="text-gray-500 text-base w-32">🐙  GitHub →</span> <a href="https://github.com/jerina" className="text-blue-400 text-base font-mono hover:underline cursor-pointer" target="_blank" rel="noopener noreferrer">jerina ↗</a>
                    </div>
            </div>
        </div>
    )
}

export default ContactContent