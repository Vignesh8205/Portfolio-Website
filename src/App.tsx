import React, { useEffect, useState } from 'react';
import { Code, Mail, Github, Linkedin, User, Briefcase, FileCode, Send, Award, Book, Clock, Coffee, Globe, Heart, Code2, BugPlay, BadgeCheck } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { Section } from './components/Section';
import profile from '../src/assets/profile.jpg'
import resume from '../src/assets/Vignesh_Resume.pdf'
import ContactWidget from './components/contactWidget/contactwidget';
import { socialmedialink } from './Data';
import AboutSection from './components/sections/About';
import StatsSection from './components/sections/StatsSection';
import ServicesSection from './components/sections/ServicesSection';
import ProjectsSection from './components/sections/ProjectsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <ThemeToggle isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-32 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-16    w-full max-w-7xl py-16">

          {/* Profile Image gap-{size} */}
          <div className="relative w-52 h-52 sm:w-60 sm:h-60 lg:w-[550px] lg:h-[400px] rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl animate-bounce-slow hover:scale-105 transition duration-300">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left w-full px-4 lg:px-0">
            {/* Code Icon */}
            <div className="mb-8 inline-block p-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white shadow-lg transform hover:scale-110 hover:shadow-xl transition duration-300">
              <Code className="w-10 h-10 animate-pulse" />
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-slideInDown duration-1000 delay-100">
              Full Stack Developer
            </h1>

            <p className="relative mx-auto lg:mx-0 max-w-2xl mb-10 text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg lg:text-2xl font-semibold font-[Poppins]">
              🚀 I build exceptional, scalable web applications using the{" "}
              <span className="relative inline-block text-indigo-600 dark:text-indigo-400 before:absolute before:inset-0 before:bg-indigo-100 dark:before:bg-indigo-900 before:-rotate-2 before:-skew-y-1 before:rounded-md before:-z-10 before:animate-highlight">
                MERN stack
              </span>{" "}
              — MongoDB, Express.js, React.js, and Node.js. With a strong foundation in full‑stack JavaScript development, I deliver high‑performance, maintainable solutions tailored to modern business needs.
              <br />
              <br />
              🧪 In addition to development, I’m proficient in automation testing using{" "}
              <span className="relative inline-block text-teal-600 dark:text-teal-400 before:absolute before:inset-0 before:bg-teal-100 dark:before:bg-teal-900 before:-rotate-2 before:-skew-y-1 before:rounded-md before:-z-10 before:animate-highlight">
                Cypress
              </span>
              ,{" "}
              <span className="relative inline-block text-teal-600 dark:text-teal-400 before:absolute before:inset-0 before:bg-teal-100 dark:before:bg-teal-900 before:-rotate-2 before:-skew-y-1 before:rounded-md before:-z-10 before:animate-highlight">
                Playwright
              </span>
              , and API testing tools, ensuring reliability and performance across every layer of the application.
            </p>


            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fadeInUp duration-1000 delay-300">
              <a
                href="#contact"
                className="px-6 py-4 lg:px-8 lg:py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-base lg:text-lg rounded-lg hover:from-blue-600 hover:to-purple-600 transition duration-300 flex items-center gap-2 transform hover:scale-105 shadow-md justify-center"
              >
                <Mail className="w-5 h-5" /> Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-4 lg:px-8 lg:py-4 bg-white dark:bg-slate-800 text-gray-800 dark:text-white text-base lg:text-lg rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition duration-300 flex items-center gap-2 transform hover:scale-105 shadow-md justify-center"
              >
                <Briefcase className="w-5 h-5" /> View Projects
              </a>
              <a
                href={resume}
                download
                className="px-6 py-4 lg:px-8 lg:py-4 bg-green-500 text-white text-base lg:text-lg rounded-lg hover:bg-green-600 transition duration-300 flex items-center gap-2 transform hover:scale-105 shadow-md justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0 0l-4-4m4 4l4-4m-8-4h8" />
                </svg>
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex justify-center   lg:justify-center gap-6 animate-fadeIn duration-1000 delay-500">
              <a href={`${socialmedialink.github}`} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition transform hover:scale-125">
                <Github className="w-8 h-8" />
              </a>
              <a href={`${socialmedialink.linkedin}`} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition transform hover:scale-125">
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />
      {/* About Section */}
      <AboutSection />
      {/* Services Section */}
      <ServicesSection />
      {/* Projects Section */}
      <ProjectsSection />
      {/* Testimonials Section */}
      <TestimonialsSection />
      {/* Contact Section */}
      <ContactSection />

      {/* Contact Widget */}
      <ContactWidget />
    </div>
  );
}

export default App;