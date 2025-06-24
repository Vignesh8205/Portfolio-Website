import { ExternalLink, Github } from 'lucide-react';
import { hoverEffectClasses } from '../Data';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}


const gradientClasses = [
  'from-pink-500 via-red-500 to-yellow-500',
  'from-indigo-500 via-purple-500 to-pink-500',
  'from-green-400 via-blue-500 to-purple-500',
  'from-yellow-400 via-red-500 to-pink-500',
  'from-teal-400 via-cyan-500 to-blue-500',
  'from-orange-400 via-pink-500 to-red-500',
  'from-lime-400 via-green-500 to-emerald-500',
];


export function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-2xl hover:shadow-blue-500/40 border border-transparent hover:border-blue-400 transition-all duration-500 ${hoverEffectClasses}`}>

      {/* Animated image container */}
      <div className="aspect-video w-full overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-1"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-slate-800 dark:text-white group-hover:text-black-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed transition-colors duration-300 hover:text-black dark:hover:text-white">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => {
            const randomGradient = gradientClasses[index % gradientClasses.length];

            return (
              <span
                key={tech}
                className={`px-4 py-1 text-sm font-semibold text-white rounded-full bg-gradient-to-r ${randomGradient} shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out`}
              >
                {tech}
              </span>
            );
          })}

        </div>

        <div className="flex gap-4 mt-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-full text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow"
          >
            <Github className="w-4 h-4" />
            Code
          </a>

          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-full text-sm text-gray-700 dark:text-gray-200 hover:bg-green-500 hover:text-white transition-all duration-300 shadow"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
