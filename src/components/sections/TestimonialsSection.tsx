import React from 'react'
import { Section } from '../Section'

export default function TestimonialsSection() {

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

    )
}
