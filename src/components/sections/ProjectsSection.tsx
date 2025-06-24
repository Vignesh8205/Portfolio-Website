
import portfolio from '../../assets/portfolio.png'
import Restpilot from '../../assets/restpilot.png'

import { Section } from '../Section';
import { ProjectCard } from '../ProjectCard';

export default function ProjectsSection() {



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
      image: portfolio, 
      technologies: ["React", "Tailwind CSS", "React Icons"],
      githubUrl: "https://github.com/Vignesh8205/Portfolio-Website",
      liveUrl: "#" 
    },
    {
      title: "RestPilot - API Testing Tool",
      description: "RestPilot is a powerful API testing tool built with React and Tailwind CSS. It allows users to send HTTP requests, view responses, convert between JSON and XML formats, and supports authentication, custom headers, file upload, and more with a user-friendly interface.",
      image: Restpilot, 
      technologies: ["React", "Tailwind CSS", "React Icons"],
      githubUrl: "https://github.com/Vignesh8205/restpilot",
      liveUrl: "#" 
    }

  ];

  return (

    <Section id="projects" title="My Projects">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </Section>

  )
}
