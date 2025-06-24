
import { Section } from '../Section'
import { BadgeCheck, BugPlay, Clock, Code2, Coffee, Heart } from 'lucide-react';

export default function StatsSection() {



  const stats = [
    { icon: Coffee, label: "Coffee Consumed", value: "1,234+" },
    { icon: Clock, label: "Hours Coded", value: "5,000+" },
    { icon: Heart, label: "Happy Clients", value: "10+" },
    { icon: Code2, label: "Lines of Code", value: "2L+" },
    { icon: BugPlay, label: "Test Cases Automated", value: "30+" },
    { icon: BadgeCheck, label: "Deployments Done", value: "2+" },
  ];

  return (

    <Section id="stats" title="">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-md hover:shadow-2xl hover:shadow-blue-500/40 dark:hover:shadow-purple-500/40 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {/* Animated gradient icon */}
              <Icon className="w-10 h-10 mx-auto mb-4 text-transparent bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text animate-gradient-x" />

              {/* Animated gradient value */}
              <p className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-text-shimmer">
                {value}
              </p>

              {/* Label with subtle hover highlight */}
              <p className="text-gray-600 dark:text-gray-300 font-semibold transition-colors duration-300 hover:text-blue-600 dark:hover:text-purple-400">
                {label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </Section>
  )
}
