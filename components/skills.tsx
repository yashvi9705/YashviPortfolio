import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
// Ensure the correct path to the SkillIcon component
import SkillIcon from "../components/skill-icon"

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "PHP", icon: "php" },
      { name: "Kotlin", icon: "kotlin" },
      { name: "Java", icon: "java" },
      { name: "C#", icon: "csharp" },
      { name: "Python", icon: "python" },
      { name: "SQL", icon: "sql" },
      { name: "NoSQL", icon: "nosql" },
    ],
  },
  {
    title: "FrontEnd",
    skills: [
      "HTML", 
      "CSS", 
      "Bootstrap", 
      "TailwindCSS",
      "Next.js", 
      "React.js", 
      "Flutter"],
  },
  {
    title: "BackEnd",
    skills: [
      "Node.js",
      "MySQL",
      "MS SQL Server",
      "PostgreSQL",
      "MongoDB",
      "DynamoDB",
      ".NET Framework",
      "ASP .NET Core",
    ],
  },
  {
    title: "Tools",
    skills: ["GitHub", "Git", "VS Code", "Visual Studio 2022", "Docker", "NPM","Jira"],
  },
  {
    title: "Business & Analysis",
    skills: [
      "Business Analysis",
      "Requirements Gathering",
      "Process Mapping",
      "Data Analysis",
      "Stakeholder Management",
      "Gap Analysis",
      "KPI Development",
      "User Stories",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Technical Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Comprehensive skill set spanning programming, business analysis, technical support, and project management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-8 bg-card border border-border rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const label = typeof skill === "string" ? skill : skill.name
                  return (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="inline-flex items-center gap-2 bg-muted hover:bg-accent/20 transition-colors cursor-default text-base py-2 px-3"
                    >
                      <SkillIcon skill={label} size={16} className="h-4 w-4" />
                      <span>{label}</span>
                    </Badge>
                  )
                })}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
