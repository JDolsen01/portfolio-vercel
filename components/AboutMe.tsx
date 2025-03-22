import { Github, Linkedin, Mail } from "lucide-react"

export default function AboutMe() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold">About Me</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4">
              Hello! I'm a passionate web developer with expertise in React, Next.js, and modern frontend technologies.
              I love creating beautiful and functional websites that provide great user experiences.
            </p>
            <p className="mb-4">
              With a strong foundation in HTML, CSS, and JavaScript, I enjoy tackling complex problems and turning ideas
              into reality through code.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Skills</h3>
            <ul className="list-inside list-disc">
              <li>React.js</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Node.js</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <Linkedin size={24} />
          </a>
          <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-900">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

