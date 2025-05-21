import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  link: string
  tags: string[]
}

export default function ProjectCard({ title, description, link, tags }: ProjectCardProps) {
  return (
    <Card className="w-full max-w-sm bg-white dark:bg-background text-black dark:text-primary border border-border">
      <CardContent className="p-4">
        <h3 className="font-semibold text-xl mb-2 text-black dark:text-primary">{title}</h3>
        <p className="text-sm mb-4 text-black dark:text-primary">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-primary/10 dark:bg-primary/20 px-2 py-1 text-xs font-medium text-black dark:text-primary ring-1 ring-inset ring-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={link}
          target="_blank"
          className="inline-flex items-center gap-2 text-sm hover:underline text-black dark:text-primary"
        >
          <Github className="h-4 w-4 text-black dark:text-primary" />
          View on GitHub
        </Link>
      </CardContent>
    </Card>
  )
}
