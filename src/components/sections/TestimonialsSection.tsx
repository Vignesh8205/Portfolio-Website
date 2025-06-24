
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
                        <div
                            key={testimonial.name}
                            className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg transition duration-300 transform hover:scale-[1.02] hover:shadow-2xl group relative overflow-hidden"
                        >
                            {/* Gradient hover background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-100 opacity-0 group-hover:opacity-20 transition duration-500 pointer-events-none rounded-xl" />

                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-purple-400 group-hover:scale-110 transition-transform duration-300 shadow-md"
                                />
                                <div>
                                    <h4 className="font-bold text-lg dark:text-white group-hover:text-purple-600 transition-colors duration-300">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                                </div>
                            </div>

                            {/* Content with highlighted words */}
                            <p className="text-gray-700 dark:text-gray-300 italic relative z-10">
                                "
                                <span className="text-purple-600 font-medium">
                                    {testimonial.content.split(" ").slice(0, 3).join(" ")}
                                </span>{" "}
                                {testimonial.content.split(" ").slice(3, -3).join(" ")}{" "}
                                <span className="text-pink-600 font-medium">
                                    {testimonial.content.split(" ").slice(-3).join(" ")}
                                </span>
                                "
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </Section>

    )
}
