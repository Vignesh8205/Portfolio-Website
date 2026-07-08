
import portfolio from '../../assets/portfolio.png'
import Restpilot from '../../assets/restpilot.png'

import { Section } from '../Section';
import { ProjectCard } from '../ProjectCard';

export default function ProjectsSection() {



  const projects = [
    {
      title: "PlayVision – AI Test Reporter",
      description: "An intelligent, high-performance Playwright reporter using a React-based SPA. Integrates local (Ollama) and cloud (OpenAI) LLMs to automatically analyze test failures.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1600",
      technologies: ["React", "Playwright", "Ollama", "OpenAI"],
      githubUrl: "https://github.com/Vignesh8205/playvision",
      liveUrl: "https://github.com/Vignesh8205/playvision"
    },
    {
      title: "OrangeHRM Automation Framework",
      description: "A scalable, industry-standard test automation framework using Playwright and TypeScript with Page Object Model (POM) and robust CI/CD pipelines.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
      technologies: ["Playwright", "TypeScript", "GitHub Actions", "Jenkins"],
      githubUrl: "https://github.com/Vignesh8205/playwrightAssignMentGitHubActionAndJenkins",
      liveUrl: "https://github.com/Vignesh8205/playwrightAssignMentGitHubActionAndJenkins"
    },
    {
      title: "Playwright TS Practice Suite",
      description: "A comprehensive, hands-on learning suite demonstrating end-to-end testing best practices with Playwright, modular utilities, and multi-environment configurations.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600",
      technologies: ["Playwright", "TypeScript", "E2E Testing"],
      githubUrl: "https://github.com/Vignesh8205/playwright-ts-practice-suite",
      liveUrl: "https://github.com/Vignesh8205/playwright-ts-practice-suite"
    },
    {
      title: "RestPilot - API Testing Tool",
      description: "RestPilot is a Postman-like API testing tool built with React and Tailwind CSS. It allows users to send HTTP requests, view responses, convert between JSON and XML formats.",
      image: Restpilot, 
      technologies: ["React", "TypeScript", "Tailwind CSS", "Material UI"],
      githubUrl: "https://github.com/Vignesh8205/RestPilot",
      liveUrl: "https://willowy-semifreddo-37866c.netlify.app/" 
    },
    {
      title: "Portfolio Website",
      description: "A responsive and modern portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
      image: portfolio, 
      technologies: ["React", "Tailwind CSS", "React Icons"],
      githubUrl: "https://github.com/Vignesh8205/Portfolio-Website",
      liveUrl: "https://vignesh8205.netlify.app/" 
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
