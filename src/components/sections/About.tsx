import { motion } from "framer-motion";
import { User, FileCode } from "lucide-react";
import { ReactNode } from "react";
import { Section } from "../Section";

// Define the type for each skill
type Skill = {
    name: string;
    icon: ReactNode;
};

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { opacity: 1, scale: 1, y: 0 },
};

const hoverEffect = {
    scale: 1.1,
    rotate: 1,
    boxShadow: "0px 0px 15px rgba(99, 102, 241, 0.5)",
};


const skills: Skill[] = [
    { name: 'React', icon: <span className="text-sky-500">⚛️</span> },
    { name: 'Node.js', icon: <span className="text-green-600">🟢</span> },
    { name: 'MongoDB', icon: <span className="text-green-700">🍃</span> },
    { name: 'Express.js', icon: <span className="text-gray-600">🚂</span> },
    { name: 'Cypress', icon: <span className="text-emerald-500">🧪</span> },
    { name: 'Playwright', icon: <span className="text-pink-600">🎭</span> },
    { name: 'Postman', icon: <span className="text-orange-500">📬</span> },
    { name: 'Thunder Client', icon: <span className="text-yellow-500">⚡</span> },
];

// If Section is a custom component, optionally define its props
// type SectionProps = { id: string; title: string; children: ReactNode };

export default function AboutSection() {
    return (
        <Section id="about" title="About Me">
            <div className="max-w-5xl mx-auto px-4">
                <motion.div
                    className="flex flex-col md:flex-row items-center gap-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {/* Left: Intro */}
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-pulse">
                            Who am I?
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-1xl">
                            I'm a dedicated <strong>MERN Stack Developer</strong> passionate about building robust, scalable, and user-friendly web applications.
                            I specialize in <strong>automation testing</strong> using <span className="text-emerald-500 font-semibold">Cypress</span> and <span className="text-pink-500 font-semibold">Playwright</span>,
                            and proficient with <span className="text-orange-500 font-semibold">Postman</span> and <span className="text-yellow-500 font-semibold">Thunder Client</span> for thorough API testing.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                <User className="w-5 h-5 text-blue-500 animate-bounce" />
                                <span>1.5+ Years Experience</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                <FileCode className="w-5 h-5 text-purple-500 animate-pulse" />
                                <span>5+ Projects</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Skill Cards */}
                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {skills.map(({ name, icon }) => (
                            <motion.div
                                key={name}
                                className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md text-center transform transition duration-300 ease-in-out"
                                variants={cardVariants}
                                whileHover={hoverEffect}
                            >
                                <p className="font-semibold text-lg bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent flex items-center justify-center gap-2">
                                    {icon} {name}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                </motion.div>
            </div>
        </Section>
    );
}
