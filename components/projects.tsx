import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "King William Hotel",
    description:
      "A full-stack hotel management application built with React, Next.js, and PostgreSQL. I worked on gathering requirements, creating workflows and ERDs, and translating business needs into a booking platform with real-time availability, secure authentication, and a staff dashboard. This project highlights both the business analysis process and technical implementation.",
    image: "/kingWilliam.jpeg",
    tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "SQL" ,"Business Analysis", "Data Visualization", "Requirements Gathering",
    "UML Diagrams", "ERD", "Workflow Modeling"],
    // liveUrl: "#",
    githubUrl: "https://github.com/niloahs/kw-hotel",
  },
  {
    title: "ShareSpace",
    description:
      "A collaborative dashboard application designed for shared living spaces. I performed business analysis to identify common challenges in house management, then designed features like task management, expense tracking, complaints categorization, and mood check-ins. I modeled requirements, created clean UI wireframes, and implemented the app using React, TypeScript, and PostgreSQL",
    image: "/Sharespace.jpeg",
    tech: ["React", "TypeScript", "TailwindCSS", "PostGres SQL","Business Analysis", "Data Visualization", "Requirements Gathering",
      "UML Diagrams", "ERD", "Workflow Modeling"],
    // liveUrl: "#",
    githubUrl: "https://github.com/yashvi9705/ShareSpace",
  },
  {
    title: "Sales Management Web App",
    description:
      "A web-based solution for managing client information and sales activities. I applied business analysis techniques to gather requirements from a given scenario, designed the database schema, and implemented features like authentication and client management using PHP and PostgreSQL. The project demonstrates translating functional and business requirements into a working system.",
    image: "/salesmanagement.jpeg",
    tech: ["PHP", "SQL"],
    // liveUrl: "#",
    // githubUrl: "#",
  },
  {
    title: "Student Registration Management System",
    description:
      "A Windows Forms application for managing student registrations. I applied business analysis to define system requirements and built CRUD functionality with validation and exception handling. The application used C#, .NET, and JSON serialization, demonstrating both analytical design and technical problem-solving skills.",
    image: "/studentregis.jpeg",
    tech: ["C#", ".NET", "Windows Form"],
    // liveUrl: "#",
    // githubUrl: "#",
  },
  {
    title: "Portfolio",
    description:
      "My portfolio website showcasing my skills, projects, and experience. Built with Next.js and TailwindCSS, it features a modern design, responsive layout, and interactive elements. The site highlights my expertise in frontEnd Development.",
    image: "/portfolioSite.jpeg",
    tech: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    liveUrl: "https://yashvi-portfolio-omega.vercel.app/",
    githubUrl: "https://github.com/yashvi9705/YashviPortfolio",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Highlighting my experience in software development, IT support, and business analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover-lift bg-card border-border overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-pretty">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button asChild variant="outline" size="sm">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  )}
                  
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
