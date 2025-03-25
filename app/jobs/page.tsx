import { CalendarIcon, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/PageHeader";

export default function JobsPage() {
  return (
    <>
      <PageHeader
        title="Work Experience"
        description="My professional journey and career highlights"
      />

      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            {jobs.map((job, index) => (
              <Card
                key={index}
                className="border-l-4"
                style={{ borderLeftColor: "hsl(var(--primary))" }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-xl font-bold">
                        {job.title}
                      </CardTitle>
                      <div className="flex items-center mt-1">
                        <Link
                          href={job.companyUrl}
                          className="text-lg font-medium hover:underline"
                          target="_blank"
                        >
                          {job.company}
                        </Link>
                        {job.companyUrl && (
                          <ExternalLinkIcon className="ml-1 h-4 w-4 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      <span>{job.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{job.description}</p>
                  <ul className="space-y-2 mb-4">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex">
                        <span className="mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
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

const jobs = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    companyUrl: "https://example.com",
    period: "Jan 2021 - Present",
    description:
      "Leading the frontend development team in building and maintaining enterprise-level web applications.",
    achievements: [
      "Redesigned the company's flagship product, resulting in a 40% increase in user engagement",
      "Implemented a component library that reduced development time by 30%",
      "Mentored junior developers and established best practices for the team",
    ],
    skills: ["React", "TypeScript", "Next.js", "GraphQL", "Jest", "CI/CD"],
  },
  {
    title: "Frontend Developer",
    company: "WebSolutions Ltd.",
    companyUrl: "https://example.com",
    period: "Mar 2018 - Dec 2020",
    description:
      "Developed responsive web applications for clients across various industries.",
    achievements: [
      "Built an e-commerce platform that handled over $2M in annual transactions",
      "Optimized site performance, improving load times by 60%",
      "Collaborated with designers to implement pixel-perfect UIs",
    ],
    skills: ["JavaScript", "React", "Redux", "SASS", "Webpack", "RESTful APIs"],
  },
  {
    title: "UI/UX Designer & Developer",
    company: "CreativeStudio",
    companyUrl: "https://example.com",
    period: "Jun 2016 - Feb 2018",
    description:
      "Worked in a dual role designing interfaces and implementing frontend code for web and mobile applications.",
    achievements: [
      "Designed and developed 15+ websites for small to medium-sized businesses",
      "Created a design system that improved consistency across projects",
      "Reduced client revision requests by 50% through improved prototyping",
    ],
    skills: [
      "HTML/CSS",
      "JavaScript",
      "Figma",
      "Adobe XD",
      "Responsive Design",
      "WordPress",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "StartupHub",
    companyUrl: "https://example.com",
    period: "Sep 2014 - May 2016",
    description:
      "Assisted in the development of web applications for early-stage startups.",
    achievements: [
      "Contributed to 5 successful product launches",
      "Implemented responsive designs that worked across all major browsers",
      "Participated in code reviews and improved coding standards",
    ],
    skills: ["HTML/CSS", "JavaScript", "jQuery", "Bootstrap", "PHP", "MySQL"],
  },
];
