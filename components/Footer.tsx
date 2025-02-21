import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} David Tacconi. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              LinkedIn
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              Twitter
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

