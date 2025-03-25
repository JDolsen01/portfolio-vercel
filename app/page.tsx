import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/HeroSection";

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Parallax Image */}
      <HeroSection
        imageUrl="/placeholder.svg?height=1080&width=1920"
        height="100vh"
      >
        <div className="container px-4 flex flex-col items-center text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white drop-shadow-md">
            Jordan Olsen
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
            Full Stack Developer & UI/UX Designer
          </p>
          <div className="flex gap-4">
            <Button variant="secondary" size="icon" asChild>
              <Link href="https://github.com" target="_blank">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="secondary" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="secondary" size="icon" asChild>
              <Link href="mailto:jane@example.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </HeroSection>

      {/* About Section */}
      <section className="py-24 bg-background" id="about">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-lg">
                I'm a passionate developer with over 5 years of experience
                building beautiful, functional websites and applications.
              </p>
              <p className="text-lg">
                My expertise includes React, Next.js, TypeScript, and modern UI
                frameworks. I focus on creating responsive, accessible, and
                performant user experiences.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me hiking, reading, or
                experimenting with new technologies.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-muted/50" id="contact">
        <div className="container px-4 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg mb-8">
            I'm currently available for freelance work and exciting
            opportunities. Feel free to reach out!
          </p>
          <Button size="lg" asChild>
            <Link href="mailto:jordan@example.com">Contact Me</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
