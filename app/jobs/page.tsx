import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Image from "next/image";

export default function Jobs() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 text-4xl font-bold">My Job Experience</h1>
        <div className="space-y-8">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="flex flex-col items-start gap-4 md:flex-row">
              <div className="flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=100&width=100&text=TechCorp"
                  alt="TechCorp Inc. Logo"
                  width={100}
                  height={100}
                  className="rounded-md border border-gray-200"
                />
              </div>
              <div className="flex-grow">
                <h2 className="mb-2 text-2xl font-semibold">
                  Senior Web Developer
                </h2>
                <p className="mb-4 text-gray-600">
                  TechCorp Inc. | 2020 - Present
                </p>
                <ul className="list-inside list-disc">
                  <li>
                    Led development of multiple high-traffic web applications
                  </li>
                  <li>
                    Implemented CI/CD pipelines to improve deployment efficiency
                  </li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="flex flex-col items-start gap-4 md:flex-row">
              <div className="flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=100&width=100&text=WebSolutions"
                  alt="WebSolutions Co. Logo"
                  width={100}
                  height={100}
                  className="rounded-md border border-gray-200"
                />
              </div>
              <div className="flex-grow">
                <h2 className="mb-2 text-2xl font-semibold">
                  Full Stack Developer
                </h2>
                <p className="mb-4 text-gray-600">
                  WebSolutions Co. | 2017 - 2020
                </p>
                <ul className="list-inside list-disc">
                  <li>Developed and maintained various client websites</li>
                  <li>
                    Collaborated with design team to implement responsive
                    layouts
                  </li>
                  <li>
                    Optimized database queries to improve application
                    performance
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="flex flex-col items-start gap-4 md:flex-row">
              <div className="flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=100&width=100&text=StartupXYZ"
                  alt="StartupXYZ Logo"
                  width={100}
                  height={100}
                  className="rounded-md border border-gray-200"
                />
              </div>
              <div className="flex-grow">
                <h2 className="mb-2 text-2xl font-semibold">
                  Frontend Developer
                </h2>
                <p className="mb-4 text-gray-600">StartupXYZ | 2015 - 2017</p>
                <ul className="list-inside list-disc">
                  <li>
                    Built responsive user interfaces using React and CSS
                    frameworks
                  </li>
                  <li>
                    Implemented user authentication and authorization features
                  </li>
                  <li>
                    Collaborated with UX designers to improve user experience
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
