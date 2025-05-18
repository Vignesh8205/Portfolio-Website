
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
                 description: "Building full-stack web applications using the MERN stack and modern deployment practices"
               },
               {
                 icon: FileCode,
                 title: "Frontend Development",
                 description: "Developing responsive, component-based UIs using React, MUI, and Tailwind CSS"
               },
               {
                 icon: Code,
                 title: "Backend API Development",
                 description: "Creating scalable REST APIs with Node.js, Express, and MongoDB"
               },
               {
                 icon: Award,
                 title: "Automation Testing - Cypress",
                 description: "Implementing UI and API automation testing using Cypress for end-to-end reliability"
               },
               {
                 icon: Book,
                 title: "Automation Testing - Playwright",
                 description: "Building fast and powerful UI/API automation suites with Playwright"
               },
               {
                 icon: Send,
                 title: "Manual API Testing",
                 description: "Efficient API testing and validation using Postman and Thunder Client"
               }
             ]
               .map(({ icon: Icon, title, description }) => (
                 <div key={title} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg transform hover:-translate-y-2 transition-all duration-300">
                   <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white">
                     <Icon className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">{title}</h3>
                   <p className="text-gray-600 dark:text-gray-300">{description}</p>
                 </div>
               ))}
           </div>
         </div>
       </Section>
  )
}
