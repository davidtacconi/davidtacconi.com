import Image from "next/image"

const timelineEvents = [
  {
    year: "2022",
    title: "Launched School of Innovation",
    description: "Founded a platform to teach entrepreneurship and innovation to aspiring business leaders.",
  },
  {
    year: "2018",
    title: "Started AI & Digital Health Consultancy",
    description: "Began offering specialized consulting services in AI and digital health sectors.",
  },
  {
    year: "2015",
    title: 'Published "The Startup Playbook"',
    description: "Authored a best-selling book on startup strategies and growth hacking.",
  },
  {
    year: "2010",
    title: "Founded Tech Startup",
    description: "Successfully launched and grew a tech startup, later acquired by a major corporation.",
  },
]

export default function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">About David Tacconi</h1>
      <div className="flex flex-col md:flex-row items-start mb-12">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <Image
            src="/placeholder.svg?height=400&width=300"
            alt="David Tacconi portrait"
            width={300}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <p className="text-lg mb-4">
            David Tacconi is a seasoned entrepreneur, mentor, and business strategist with over 15 years of experience
            in the tech industry. His passion lies in empowering startups and businesses to innovate and thrive in the
            digital age.
          </p>
          <p className="text-lg mb-4">
            With a background in computer science and an MBA from a top business school, David combines technical
            expertise with strategic business acumen to help companies navigate the complexities of modern markets.
          </p>
          <p className="text-lg">
            Throughout his career, David has founded successful startups, mentored hundreds of entrepreneurs, and
            consulted for Fortune 500 companies. His unique approach to innovation and growth has made him a
            sought-after speaker and advisor in the business world.
          </p>
        </div>
      </div>
      <h2 className="text-3xl font-bold mb-6">Career Highlights</h2>
      <div className="space-y-8">
        {timelineEvents.map((event, index) => (
          <div key={index} className="flex">
            <div className="flex flex-col items-center mr-4">
              <div className="w-px h-full bg-gray-300 dark:bg-gray-700"></div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">{event.year}</span>
              </div>
            </div>
            <div className="pb-8">
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

