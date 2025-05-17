import React, { useEffect, useState } from 'react';
import { Code, Mail, Github, Linkedin, User, Briefcase, FileCode, Send, Award, Book, Clock, Coffee, Globe, Heart, Code2, BugPlay, BadgeCheck } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import profile from '../src/assets/profile.jpg'
import resume from '../src/assets/Vignesh_Resume.pdf'
import ContactWidget from './components/contactWidget/contactwidget';
import { socialmedialink } from './Data';
import portfolio from '../src/assets/portfolio.png'
import AboutSection from './components/sections/About';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with React, Node.js, and MongoDB",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600",
      technologies: ["React", "Node.js", "MongoDB", "Redux"],
      githubUrl: "https://github.com/Vignesh8205/KvpCart",
      liveUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive and modern portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
      image: portfolio, // You can replace this with a more relevant image URL if needed
      technologies: ["React", "Tailwind CSS", "React Icons"],
      githubUrl: "https://github.com/Vignesh8205/Portfolio-Website",
      liveUrl: "#" // Replace with the actual deployed link if available
    }


  ];

 const stats = [
  { icon: Coffee, label: "Coffee Consumed", value: "1,234+" },
  { icon: Clock, label: "Hours Coded", value: "5,000+" },
  { icon: Heart, label: "Happy Clients", value: "10+" },
  { icon: Code2, label: "Lines of Code", value: "2L+" },
  { icon: BugPlay, label: "Test Cases Automated", value: "30+" },
  { icon: BadgeCheck, label: "Deployments Done", value: "2+" },
];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechStart",
      content: "An exceptional developer who consistently delivers outstanding results.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      content: "Incredible attention to detail and amazing problem-solving skills.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Emily Davis",
      role: "Tech Lead",
      content: "A true professional who brings innovation to every project.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400"
    }
  ];

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
      <Section id="stats" title="">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg transform hover:-translate-y-2 transition-all duration-300">
                <Icon className="w-8 h-8 mx-auto mb-4 text-blue-500" />
                <p className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">{value}</p>
                <p className="text-gray-600 dark:text-gray-300">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

     {/* About Section */}

      <AboutSection/>




      {/* Services Section */}
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

      {/* Projects Section */}
      <Section id="projects" title="My Projects">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonials" title="What People Say">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get in Touch">
        <div className="max-w-2xl mx-auto px-4">
          <form className="space-y-6 bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </Section>
      <ContactWidget />
    </div>
  );
}

export default App;