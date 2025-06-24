import { motion } from 'framer-motion';
import { GraduationCap, BadgeCheck, Code } from 'lucide-react';

export default function EducationSection() {

    const skills = [
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: "Bootstrap", icon: "🅱️" },
        { name: "JavaScript", icon: "📜" },
        { name: "ReactJS", icon: "⚛️" },
        { name: "Node.js", icon: "🌿" },
        { name: "Express.js", icon: "🚂" },
        { name: "MongoDB", icon: "🍃" },
        { name: "MySQL", icon: "🗄️" },
        { name: "PHP", icon: "🐘" },
        { name: "MS Office", icon: "🧩" },
        { name: "Playwright", icon: "🎭" },
        { name: "Cypress", icon: "🌲" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-blue-200 p-3 flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-extrabold text-blue-900">🎓 Education & Skills</h2>
                <p className="text-lg text-gray-700 mt-2">Explore my academic journey, professional certifications & hands-on tech stack</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
                {/* Education Card */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="bg-white shadow-2xl rounded-3xl p-6 hover:scale-105 transition-transform duration-300 border-l-4 border-blue-500"
                >
                    <div className="flex items-center space-x-4 mb-4">
                        <GraduationCap className="w-8 h-8 text-blue-600" />
                        <h3 className="text-2xl font-semibold text-blue-800">B.E. in Computer Science</h3>
                    </div>
                    <p className="text-gray-800">Anna University</p>
                    <p className="text-sm text-gray-600 italic">Completed in 2024</p>
                </motion.div>

                {/* Certifications Card */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="bg-white shadow-2xl rounded-3xl p-6 hover:scale-105 transition-transform duration-300 border-l-4 border-green-500"
                >
                    <div className="flex items-center space-x-4 mb-4">
                        <BadgeCheck className="w-8 h-8 text-green-600" />
                        <h3 className="text-2xl font-semibold text-green-800">Certifications</h3>
                    </div>
                    <div className="space-y-3 text-gray-700">
                        <div>
                            <p className="font-semibold text-green-700">Full Stack Web Development</p>
                            <p className="text-sm">Covered PHP, MySQL, Node.js, Express.js & MongoDB – <span className="italic">(Oct–Dec 2023)</span></p>
                        </div>
                        <div>
                            <p className="font-semibold text-green-700">Frontend Development</p>
                            <p className="text-sm">Mastered HTML, CSS, Bootstrap, JavaScript & ReactJS – <span className="italic">(June–Sept 2023)</span></p>
                        </div>
                        <div>
                            <p className="font-semibold text-green-700">Productivity Tools</p>
                            <p className="text-sm">MS Office – Word, Excel, PowerPoint</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Skills Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="mt-14 bg-white shadow-2xl rounded-3xl p-6 border-l-4 border-purple-500 max-w-6xl w-full"
            >
                <div className="flex items-center space-x-4 mb-4">
                    <Code className="w-7 h-7 text-purple-600" />
                    <h3 className="text-2xl font-semibold text-purple-800">Technical Skills</h3>
                </div>
                <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-800">
                    {skills.map((skill, idx) => (
                        <span
                            key={idx}
                            className="group bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 px-4 py-2 rounded-full shadow-md flex items-center gap-2 transition-all duration-300 hover:from-purple-400 hover:to-purple-600 hover:text-white transform hover:scale-105"
                        >
                            <span className="text-xl group-hover:animate-pulse">{skill.icon}</span>
                            <span className="font-semibold">{skill.name}</span>
                        </span>
                    ))}

                </div>
            </motion.div>
        </div>
    );
}
