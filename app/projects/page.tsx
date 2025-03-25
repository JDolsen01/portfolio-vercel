import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PageHeader } from "@/components/page-header"

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="My Projects" description="A showcase of my recent work and personal projects" />

      <section className="py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden flex flex-col h-full">
                <div className="relative h-56">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild>
                    <Link href={project.link}>View Project</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with payment processing and inventory management. Features include user authentication, product search, and order tracking.",
    image: "/placeholder.svg?height=300&width=500",
    link: "#",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "Task Management App",
    description:
      "A productivity app with drag-and-drop interface and real-time collaboration. Users can create boards, add tasks, and track progress with customizable workflows.",
    image: "/placeholder.svg?height=300&width=500",
    link: "#",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website with dark mode and animations. Built with modern web technologies and optimized for performance.",
    image: "/placeholder.svg?height=300&width=500",
    link: "#",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather application that provides real-time forecasts, historical data, and interactive maps. Users can save locations and receive alerts.",
    image: "/placeholder.svg?height=300&width=500",
    link: "#",
    technologies: ["Vue.js", "OpenWeather API", "Chart.js"],
  },
  {
    title: "Recipe Finder",
    description:
      "A web application that helps users discover recipes based on ingredients they have at home. Includes filtering by dietary restrictions and meal types.",
    image: "/placeholder.svg?height=300&width=500",
    link: "#",
    technologies: ["React", "Firebase", "Spoonacular API"],
  },
  {
    title: "Fitness Tracker",
    description:
      "A mobile-first application for tracking workouts, nutrition, and progress. Features include custom workout plans and achievement badges.",
    image: "/placeholder.svg?height=300&width=500",
    link: "#",
    technologies: ["React Native", "Redux", "Express", "MongoDB"],
  },
]

