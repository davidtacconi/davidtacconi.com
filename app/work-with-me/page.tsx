import { Rocket, Building, FlaskRoundIcon as Flask } from "lucide-react"

const services = [
  {
    title: "For Startups",
    description: "Get expert guidance on scaling your startup, from ideation to market penetration.",
    icon: Rocket,
  },
  {
    title: "For Businesses",
    description: "Transform your business with innovative strategies and digital solutions.",
    icon: Building,
  },
  {
    title: "For Research Institutions",
    description: "Collaborate on cutting-edge AI and Digital Health projects.",
    icon: Flask,
  },
]

export default function WorkWithMe() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Work With Me</h1>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <service.icon className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
          </div>
        ))}
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

