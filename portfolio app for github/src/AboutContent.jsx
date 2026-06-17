function AboutContent() {

    return(
        <div className="p-6 flex flex-col gap-4">
            <div className="text-3xl font-bold text-white">Hey, I'm Jerina 👋</div>
            <div className="text-base text-green-400 font-mono mt-1">// 6 years of making browsers do what I want (mostly)</div>            
                <p className="text-base text-gray-300 leading-relaxed mt-4">
                8 years in tech, 6 of them building enterprise apps at Caterpillar 
                that real people use every day. I've gone from testing Alexa's 
                patience at Amazon to architecting full-scale web apps used by 
                1000+ users globally. I speak fluent{' '}
                <span className="text-blue-400 font-semibold font-mono">React</span>
                , argue with CSS, and occasionally convince backend APIs to cooperate.
                </p>            
            <div className="flex flex-col gap-2 mt-2">
                <div className="flex items-center gap-3">
                    <span className="text-gray-500 text-base w-32">⚡ Currently →</span> <span className = "text-blue-400 text-base font-mono"> IT Analyst II @ Caterpillar</span>
                    </div>
                    <div className="flex items-center gap-3">
                    <span className="text-gray-500 text-base w-32">🛠️ Weapons →</span> <span className="text-blue-400 text-base font-mono"> React, Redux, Hooks, JS, SQL, Power BI, .NET, Azure</span>
                    </div>
                    <div className="flex items-center gap-3">
                    <span className="text-gray-500 text-base w-32">🌍 Base →</span> <span className="text-blue-400 text-base font-mono"> Chennai, India</span>
                    </div>
                    <div className="flex items-center gap-3">
                    <span className="text-gray-500 text-base w-32">🎓 Studied →</span> <span className="text-blue-400 text-base font-mono"> Electrical Engineering (plot twist!)</span>
                    </div>
                    <div className="flex items-center gap-3">
                    <span className="text-gray-500 text-base w-32">💬 Languages →</span> <span className="text-blue-400 text-base font-mono"> English, Tamil, JavaScript (LOL)</span>
                    </div>
                    <div className="flex items-center gap-3">
                    <span className="text-gray-500 text-base w-32">📬 Signal →</span> <span className="text-blue-400 text-base font-mono"> inboxofjerina@gmail.com</span>                    
                </div>
            </div>
        </div>
    )
}

export default AboutContent