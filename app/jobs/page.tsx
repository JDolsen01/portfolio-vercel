import Image from "next/image";
import Link from "next/link";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/page-header";
import { jobsData } from "@/data/jobs";

export default function JobsPage() {
  return (
    <>
      <PageHeader
        title="Work Experience"
        description="My professional journey and career highlights"
      />

      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            {jobsData.map((job) => (
              <Card key={job.name} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex gap-4 mb-4">
                    {/* Company Logo */}
                    <div className="relative w-12 h-12 rounded-md overflow-hidden border bg-background flex-shrink-0">
                      {job.logo ? (
                        <Image
                          src={job.logo || "/placeholder.svg"}
                          alt={`${job.company} logo`}
                          fill
                          className="object-contain p-1"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-muted/30">
                          <span className="text-lg font-bold text-muted-foreground">
                            {job.company.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                        <div>
                          <h3 className="text-xl font-bold">{job.title}</h3>
                          <div className="flex items-center mt-1">
                            <span className="text-lg font-medium">
                              {job.company}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          <span>{job.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="line-clamp-2 mb-4">{job.description}</p>

                  <div className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                      {job.skills.length} skills used
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/jobs/${job.name}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
