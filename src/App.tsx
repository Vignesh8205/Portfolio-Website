import { useEffect, useState } from 'react';
import { Code, Mail, Github, Linkedin, Briefcase } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { motion } from 'framer-motion';
import profile from '../src/assets/profile.jpg'
import resume from '../src/assets/Vignesh_Resume.pdf'
import ContactWidget from './components/contactWidget/contactwidget';
import { socialmedialink } from './Data';
import AboutSection from './components/sections/About';
import StatsSection from './components/sections/StatsSection';
import ServicesSection from './components/sections/ServicesSection';
import ProjectsSection from './components/sections/ProjectsSection';

import ContactSection from './components/sections/ContactSection';
import Education from './components/sections/Education';

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
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-32 overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], rotate: [0, 90, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2], rotate: [0, -90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-[120px]"
          />
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:gap-16 w-full max-w-7xl py-16 z-10">

          {/* Text Content */}
          <div className="text-center lg:text-left w-full px-4 lg:px-0 lg:w-3/5 mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 font-medium text-sm backdrop-blur-md"
            >
              <Code className="w-4 h-4" />
              <span>Software Engineer & Automation Expert</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-white"
            >
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Exceptional</span> Web Experiences.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              🚀 I craft scalable, high-performance web applications using the <span className="font-semibold text-indigo-600 dark:text-indigo-400">MERN stack</span>. With a strong foundation in modern JavaScript and robust <span className="font-semibold text-teal-600 dark:text-teal-400">automation testing</span>, I deliver solutions tailored to business needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl overflow-hidden shadow-lg shadow-blue-500/30 transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <Mail className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Contact Me</span>
              </a>
              <a
                href="#projects"
                className="px-8 py-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-white text-lg font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700 transition-all hover:scale-105 active:scale-95 shadow-sm flex items-center justify-center gap-2"
              >
                <Briefcase className="w-5 h-5" /> View Projects
              </a>
              <a
                href={resume}
                download
                className="px-8 py-4 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-lg font-semibold rounded-xl hover:bg-emerald-500 hover:text-white transition-all hover:scale-105 active:scale-95 shadow-sm flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0 0l-4-4m4 4l4-4m-8-4h8" />
                </svg>
                Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-10 flex justify-center lg:justify-start gap-6"
            >
              <a href={socialmedialink.github} className="p-3 bg-white dark:bg-slate-800 rounded-full text-gray-600 dark:text-gray-300 shadow-sm hover:shadow-md hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1 transition-all">
                <Github className="w-6 h-6" />
              </a>
              <a href={socialmedialink.linkedin} className="p-3 bg-white dark:bg-slate-800 rounded-full text-gray-600 dark:text-gray-300 shadow-sm hover:shadow-md hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1 transition-all">
                <Linkedin className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative lg:w-2/5 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[500px]">
              {/* Glassmorphic backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-[2rem] transform rotate-6 scale-105 backdrop-blur-3xl -z-10"></div>

              <div className="w-full h-full rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl relative z-10 group">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-slate-700 z-20 flex items-center gap-3"
              >
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="font-bold text-gray-800 dark:text-gray-100">Available for Work</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />
      {/* About Section */}
      <AboutSection />
      {/* Education Section */}
      <Education />
      {/* Services Section */}
      <ServicesSection />
      {/* Projects Section */}
      <ProjectsSection />



      {/* Testimonials Section */}
      {/* <TestimonialsSection /> */}

      {/* Contact Section */}
      <ContactSection />

      {/* Contact Widget */}
      <ContactWidget />
    </div>
  );
}

export default App;