import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Empowering Innovators, Driving Success</h1>
          <p className="text-xl mb-6">
            I'm David Tacconi, an entrepreneur, mentor, and business strategist dedicated to helping startups and
            businesses thrive in the digital age.
          </p>
          <Link
            href="/work-with-me"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Work With Me
          </Link>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="David Tacconi speaking at an event"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  )
}

