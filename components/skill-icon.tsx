"use client"

import { useMemo, useState, useCallback } from "react"

type SkillIconProps = {
  skill?: string
  size?: number
  className?: string
  alt?: string
}

/**
 * Generates a list of possible Devicon icon URLs for a given skill name.
 * Tries multiple slug variants and styles so you don't have to manually map icons.
 */
function buildDeviconCandidates(raw?: string) {
  const label = typeof raw === "string" ? raw : raw != null ? String(raw) : ""
  const skill = label.trim()
  if (!skill) return []

  // Known slugs for Devicon
  const explicitDevicon: Record<string, string> = {
    "C++": "cplusplus",
    "C#": "csharp",
    "Node.js": "nodejs",
    "React.js": "react",
    React: "react",
    "HTML/CSS": "html5",
    HTML: "html5",
    CSS: "css3",
    JavaScript: "javascript",
    TypeScript: "typescript",
    Python: "python",
    PHP: "php",
    Kotlin: "kotlin",
    Java: "java",
    SQL: "mysql",
    MySQL: "mysql",
    "MS SQL Server": "microsoftsqlserver",
    PostgreSQL: "postgresql",
    MongoDB: "mongodb",
    DynamoDB: "amazonwebservices", // fallback
    "Next.js": "nextjs",
    "Express.js": "express",
    TailwindCSS: "tailwindcss",
    "Tailwind CSS": "tailwindcss",
    Bootstrap: "bootstrap",
    "Git/GitHub": "git",
    Git: "git",
    GitHub: "github",
    "VS Code": "vscode",
    "Visual Studio 2022": "visualstudio",
    Docker: "docker",
    NPM: "npm",
    ".NET Framework": "dotnet",
    "ASP .NET Core": "dotnet",
    "REST APIs": "postman",
    AWS: "amazonwebservices",
    Azure: "azure",
    GCP: "googlecloud",
    "Google Cloud": "googlecloud",
    Flutter: "flutter",
  }

  // Known slugs for Simple Icons (brand-colored)
  const explicitSimple: Record<string, string> = {
    "C++": "cplusplus",
    "C#": "csharp",
    "Node.js": "nodedotjs",
    "React.js": "react",
    React: "react",
    "HTML/CSS": "html5",
    HTML: "html5",
    CSS: "css3",
    JavaScript: "javascript",
    TypeScript: "typescript",
    Python: "python",
    PHP: "php",
    Kotlin: "kotlin",
    Java: "java",
    SQL: "mysql",
    MySQL: "mysql",
    "MS SQL Server": "microsoftsqlserver",
    PostgreSQL: "postgresql",
    MongoDB: "mongodb",
    DynamoDB: "amazondynamodb",
    "Next.js": "nextdotjs",
    "Express.js": "express",
    TailwindCSS: "tailwindcss",
    "Tailwind CSS": "tailwindcss",
    Bootstrap: "bootstrap",
    "Git/GitHub": "git",
    Git: "git",
    GitHub: "github",
    "VS Code": "visualstudiocode",
    "Visual Studio 2022": "visualstudio",
    Docker: "docker",
    NPM: "npm",
    ".NET Framework": "dotnet",
    "ASP .NET Core": "dotnet",
    "REST APIs": "postman",
    AWS: "amazonwebservices",
    Azure: "azure",
    GCP: "googlecloud",
    "Google Cloud": "googlecloud",
    Flutter: "flutter",
  }

  const toSimpleSlug = (s: string) =>
    explicitSimple[s] ??
    s
      .toLowerCase()
      .replace(/\./g, "dot")
      .replace(/\+/g, "plus")
      .replace(/#/g, "sharp")
      .replace(/&/g, "and")
      .replace(/\s+/g, "")
      .replace(/\//g, "")
      .replace(/[^a-z0-9-]/g, "")

  const toDeviconSlug = (s: string) =>
    explicitDevicon[s] ??
    s
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/\./g, "")
      .replace(/\+/g, "plus")
      .replace(/#/g, "sharp")
      .replace(/&/g, "and")
      .replace(/\//g, "")
      .replace(/[^a-z0-9-]/g, "")
      .replace(/^reactjs$/, "react")
      .replace(/^js$/, "javascript")
      .replace(/^ts$/, "typescript")

  const simpleSlug = toSimpleSlug(skill)
  const deviconSlug = toDeviconSlug(skill)

  const candidates: string[] = []

  // Prefer brand-colored Simple Icons first
  candidates.push(`https://cdn.simpleicons.org/${simpleSlug}`)

  // Then fall back to Devicon variants
  const styles = ["original", "plain", "original-wordmark", "plain-wordmark"]
  for (const style of styles) {
    candidates.push(`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${deviconSlug}/${deviconSlug}-${style}.svg`)
  }

  return candidates
}

export function SkillIcon({ skill, size = 20, className, alt }: SkillIconProps) {
  const candidates = useMemo(() => buildDeviconCandidates(skill), [skill])
  const [index, setIndex] = useState(0)

  const onError = useCallback(() => {
    setIndex((i) => (i + 1 < candidates.length ? i + 1 : i))
  }, [candidates.length])

  if (!skill || !String(skill).trim()) return null

  const isOutOfCandidates = !candidates.length || index >= candidates.length
  if (isOutOfCandidates) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={className ?? "h-5 w-5"}>
        <path
          fill="currentColor"
          d="M8.2 16.6l-4.8-4.6l4.8-4.6l1.4 1.4L6.2 12l3.4 3.2l-1.4 1.4zm7.6 0l-1.4-1.4l3.4-12l1.9.6l-4.5 12z"
        />
      </svg>
    )
  }

  const src = candidates[index] || ""

  return (
    <img
      src={src || "/placeholder.svg"}
      alt={alt ?? `${String(skill).trim()} logo`}
      width={size}
      height={size}
      loading="lazy"
      className={className ?? "h-5 w-5"}
      onError={onError}
      crossOrigin="anonymous"
    />
  )
}

export default SkillIcon
