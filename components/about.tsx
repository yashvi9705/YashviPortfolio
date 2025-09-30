import { Card } from "@/components/ui/card"
import { GraduationCap, User } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Passionate about leveraging technology to solve business challenges and improve processes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-8 hover-lift bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Professional Journey</h3>
                  <p className="text-muted-foreground text-pretty">
                    I am Yashvi Patel, a Computer Programming and Analysis graduate from Durham College with a passion for 
                    building technology solutions that solve real problems. My experience bridges both development and
                    analysis — from gathering requirements and modeling workflows to designing user-friendly applications and
                    implementing scalable systems. I enjoy working on projects that combine critical thinking, problem-solving, 
                    and collaboration, whether it's developing full-stack applications or analyzing business processes to 
                    deliver clear solutions.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover-lift bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Education</h3>
                  <p className="text-muted-foreground">
                    <strong>Durham College – Computer Programming and Analysis (Jan 2023 to Apr 2025, GPA: 4.89/5.0)</strong>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {/* Comprehensive foundation in programming, systems analysis, database management, and technology
                    solutions - providing versatile skills applicable across various IT disciplines and industries. */}
                    My education gave me a strong foundation in both technical and analytical skills. Along with programming and 
                    database design, I studied systems development, project management, and the software development life cycle.
                    Through coursework and projects, I applied concepts like requirements gathering, UML diagrams, ERDs, and
                    data modeling while also building complete applications with modern technologies.
                 </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <div className="w-64 h-64 bg-muted rounded-full flex items-center justify-center">
                <User className="h-32 w-32 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
