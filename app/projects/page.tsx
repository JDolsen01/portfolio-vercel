import Navigation from "@/components/Navigation"
import Image from "next/image"

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=400&text=Project+1"
              alt="Project 1"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">E-commerce Platform</h2>
              <p className="text-gray-600 mb-4">
                A full-featured online store built with Next.js and Stripe integration.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                View Project
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=400&text=Project+2"
              alt="Project 2"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Task Management App</h2>
              <p className="text-gray-600 mb-4">
                A React-based application for managing tasks and projects with real-time updates.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                View Project
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/placeholder.svg?height=200&width=400&text=Project+3"
              alt="Project 3"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Weather Dashboard</h2>
              <p className="text-gray-600 mb-4">
                A weather application that provides real-time forecasts using a third-party API.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

