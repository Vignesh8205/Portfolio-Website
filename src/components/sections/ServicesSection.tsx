import { Section } from '../Section'
import { Award, Book, Code, FileCode, Globe, Send } from 'lucide-react'

export default function ServicesSection() {
  return (
    <Section id="services" title="What I Do">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Globe,
              title: "Web Development",
              description: (
                <>
                  Building <span className="font-semibold text-blue-600 dark:text-blue-400">full-stack</span> web applications using the <span className="font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">MERN stack</span> and modern deployment practices.
                </>
              )
            },
            {
              icon: FileCode,
              title: "Frontend Development",
              description: (
                <>
                  Developing <span className="font-semibold text-blue-600 dark:text-blue-400">responsive</span>, component-based UIs using <span className="font-semibold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">React, MUI, and Tailwind CSS</span>.
                </>
              )
            },
            {
              icon: Code,
              title: "Backend API Development",
              description: (
                <>
                  Creating scalable <span className="font-semibold text-blue-600 dark:text-blue-400">REST APIs</span> with <span className="font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Node.js, Express, and MongoDB</span>.
                </>
              )
            },
            {
              icon: Award,
              title: "Automation Testing - Cypress",
              description: (
                <>
                  Implementing UI and API automation testing using <span className="font-semibold text-blue-600 dark:text-blue-400">Cypress</span> for end-to-end reliability.
                </>
              )
            },
            {
              icon: Book,
              title: "Automation Testing - Playwright",
              description: (
                <>
                  Building fast and powerful UI/API automation suites with <span className="font-semibold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">Playwright</span>.
                </>
              )
            },
            {
              icon: Send,
              title: "Manual API Testing",
              description: (
                <>
                  Efficient API testing and validation using <span className="font-semibold text-blue-600 dark:text-blue-400">Postman</span> and <span className="font-semibold text-purple-600 dark:text-purple-400">Thunder Client</span>.
                </>
              )
            }
          ].map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg cursor-pointer
                         transform hover:-translate-y-3 hover:scale-105
                         transition-transform duration-300 ease-in-out
                         border-2 border-transparent hover:border-gradient-to-r hover:border-blue-500
                         "
            >
              <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white">
                <Icon className="w-6 h-6" />
              </div>
              <h3
                className="text-xl font-bold mb-3 relative inline-block
                           bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400
                           bg-clip-text text-transparent
                           after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-full after:bg-gradient-to-r after:from-blue-400 after:to-purple-400"
              >
                {title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
