import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content:
      "David's mentorship was instrumental in helping us scale our startup. His insights and strategies were game-changing.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Michael Chen",
    role: "Founder, HealthTech Solutions",
    content:
      "Working with David on our AI-driven health project was an incredible experience. His expertise in both tech and business is unparalleled.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Emma Rodriguez",
    role: "Student, School of Innovation",
    content:
      "David's teaching style is engaging and practical. The skills I learned in his program have been invaluable in my entrepreneurial journey.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Testimonials</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                width={50}
                height={50}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="font-bold">{testimonial.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 italic">"{testimonial.content}"</p>
          </div>
        ))}
      </div>
    </div>
  )
}

