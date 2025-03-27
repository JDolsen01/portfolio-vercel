import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarIcon, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { jobsData } from "@/data/jobs";

interface JobPageProps {
  params: Promise<{ name: string }>;
}

export default async function JobPage({ params }: JobPageProps) {
  const ps = await params;
  const job = jobsData.find((j) => j.name === ps.name);

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12 max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/jobs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Experience
            </Link>
          </Button>

          <div className="flex flex-col md:flex-row gap-6 md:items-center">
            {/* Company Logo */}
            <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-lg overflow-hidden border bg-background flex-shrink-0">
              {job.logo ? (
                <Image
                  src={job.logo || "/placeholder.svg"}
                  alt={`${job.company} logo`}
                  fill
                  className="object-contain p-2"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-muted/30">
                  <span className="text-2xl font-bold text-muted-foreground">
                    {job.company.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            <div>
              <h1 className="text-4xl font-bold mb-2">{job.title}</h1>
              <div className="flex items-center mb-2">
                <span className="text-xl font-medium">{job.company}</span>
                {job.companyUrl && (
                  <Link
                    href={job.companyUrl}
                    target="_blank"
                    className="inline-flex items-center ml-2 text-muted-foreground hover:text-foreground"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                )}
              </div>
              <div className="flex items-center text-muted-foreground">
                <CalendarIcon className="mr-2 h-5 w-5" />
                <span className="text-lg">{job.period}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p>{job.description}</p>
              </div>
            </section>

            {job.responsibilities && (
              <section>
                <h2 className="text-2xl font-bold mb-4">Responsibilities</h2>
                <Card>
                  <CardContent className="p-6">
                    <ul className="space-y-2">
                      {job.responsibilities.map((responsibility, i) => (
                        <li key={i} className="flex">
                          <span className="mr-2">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </section>
            )}
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Skills & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {job.projects && (
              <Card>
                <CardHeader>
                  <CardTitle>Notable Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {job.projects.map((project, i) => (
                      <li key={i} className="flex">
                        <span className="mr-2">•</span>
                        <span>{project}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {job.companyUrl && (
              <Button asChild className="w-full">
                <Link href={job.companyUrl} target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Company
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
