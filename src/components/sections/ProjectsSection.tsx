import React from 'react'

import portfolio from '../../assets/portfolio.png'
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
      image: portfolio, // You can replace this with a more relevant image URL if needed
      technologies: ["React", "Tailwind CSS", "React Icons"],
      githubUrl: "https://github.com/Vignesh8205/Portfolio-Website",
      liveUrl: "#" // Replace with the actual deployed link if available
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
