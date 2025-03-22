import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 bg-black bg-opacity-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-white text-xl font-bold">
            My Portfolio
          </Link>
          <div className="flex space-x-4">
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link href="/jobs" className="text-white hover:text-gray-300">
              Jobs
            </Link>
            <Link href="/projects" className="text-white hover:text-gray-300">
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

