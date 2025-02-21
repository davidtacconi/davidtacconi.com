import { Lightbulb, Users, Briefcase } from "lucide-react"

const services = [
  {
    title: "Teaching",
    description:
      "Through the School of Innovation, I empower the next generation of entrepreneurs and business leaders with cutting-edge knowledge and practical skills.",
    icon: Lightbulb,
  },
  {
    title: "Consulting",
    description:
      "I provide strategic guidance to startups and established businesses, helping them navigate challenges and seize opportunities in the digital landscape.",
    icon: Users,
  },
  {
    title: "Project Management",
    description:
      "Specializing in AI and Digital Health, I lead complex projects from conception to successful implementation, ensuring optimal results.",
    icon: Briefcase,
  },
]

export default function WhatIDo() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">What I Do</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <service.icon className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

