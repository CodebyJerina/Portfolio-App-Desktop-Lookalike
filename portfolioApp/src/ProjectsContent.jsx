function ProjectsContent() {

    return (
        <div className="p-6 flex flex-col gap-4">
            <div className="text-3xl font-bold text-white">Things I've Built 🛠️</div>
            <div className="text-base text-green-400 font-mono">
            // not just side projects - real apps, real users, real pressure
            </div>

            <div className="bg-gray-800 rounded-lg p-4 flex flex-col gap-3">
                <div className="text-white font-semibold text-lg">1. Desk Booking Application</div>
                <p className="text-base text-gray-300 leading-relaxed">
                    The one I'm most proud of. Built from scratch - from
                    requirements gathering with global facility teams to
                    full delivery and post-launch support. 1000+ users across multiple Caterpillar
                    sites worldwide use this daily.
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-1">
                    <span className="bg-gray-700 text-blue-400 text-xs font-mono px-2 py-1 rounded-full">React</span>
                    <span className="bg-gray-700 text-blue-400 text-xs font-mono px-2 py-1 rounded-full">Redux</span>
                    <span className="bg-gray-700 text-blue-400 text-xs font-mono px-2 py-1 rounded-full">Hooks</span>
                    <span className="bg-gray-700 text-blue-400 text-xs font-mono px-2 py-1 rounded-full">SQL</span>
                    <span className="bg-gray-700 text-blue-400 text-xs font-mono px-2 py-1 rounded-full">PowerBi</span>
                    <span className="bg-gray-700 text-blue-400 text-xs font-mono px-2 py-1 rounded-full">Bootstrap</span>
                </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-4 flex flex-col gap-3">
                <div className="text-white font-semibold text-lg">2. Enterprise Conversational Chatbot</div>
                <p className="text-base text-gray-300 leading-relaxed">
                    Taught a bot to handle IT tickets and HR queries so
                    humans didn't have to. Multi-turn conversations,
                    natural language understanding via LUIS, and enough
                    dialog flows to make your head spin. Deployed across
                    multiple global Caterpillar teams.
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-1">
                    <span className="bg-gray-700 text-blue-400 text-xs font-mono px-2 py-1 rounded-full">.NET/C#</span>
                    <span className="bg-gray-700 text-blue-400 text-xs font-mono px-2 py-1 rounded-full">Bot Framework</span>
                    <span className="bg-gray-700 text-blue-400 text-xs font-mono px-2 py-1 rounded-full">NLP</span>
                    <span className="bg-gray-700 text-blue-400 text-xs font-mono px-2 py-1 rounded-full">Microsoft Foundry</span>
                    <span className="bg-gray-700 text-blue-400 text-xs font-mono px-2 py-1 rounded-full">LUIS</span>
                </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-4 flex flex-col gap-3">
                <div className="text-white font-semibold text-lg">3. Known Error Database</div>
                <p className="text-base text-gray-300 leading-relaxed">
                    A searchable knowledge base for service desk teams
                    to stop solving the same problem twice. Built a
                    dynamic filter and search interface that actually
                    made people's jobs easier.
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-1">
                    <span className="bg-gray-700 text-blue-400 text-xs font-mono px-2 py-1 rounded-full">React</span>
                    <span className="bg-gray-700 text-blue-400 text-xs font-mono px-2 py-1 rounded-full">Azure Search</span>
                    <span className="bg-gray-700 text-blue-400 text-xs font-mono px-2 py-1 rounded-full">SQL</span>
                </div>
            </div>

        </div>
    )
}

export default ProjectsContent