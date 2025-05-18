import React from 'react'
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
                 <div key={label} className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg transform hover:-translate-y-2 transition-all duration-300">
                   <Icon className="w-8 h-8 mx-auto mb-4 text-blue-500" />
                   <p className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">{value}</p>
                   <p className="text-gray-600 dark:text-gray-300">{label}</p>
                 </div>
               ))}
             </div>
           </div>
         </Section>
  )
}
