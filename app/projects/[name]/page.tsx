import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/data/projects";

interface ProjectPageProps {
  params: {
    name: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.name === params.name);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12 max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, i) => (
              <Badge key={i} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p>{project.description}</p>
              </div>
            </section>

            {project.features && (
              <section>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex">
                      <span className="mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.challenges && (
              <section>
                <h2 className="text-2xl font-bold mb-4">
                  Challenges & Solutions
                </h2>
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <p>{project.challenges}</p>
                </div>
              </section>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4">Project Details</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-muted-foreground">Timeline</dt>
                  <dd className="font-medium">{project.timeline || "N/A"}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Role</dt>
                  <dd className="font-medium">{project.role || "N/A"}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Client</dt>
                  <dd className="font-medium">
                    {project.client || "Personal Project"}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="space-y-4">
              {project.liveUrl && (
                <Button asChild className="w-full">
                  <Link href={project.liveUrl} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" asChild className="w-full">
                  <Link href={project.githubUrl} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
