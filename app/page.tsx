import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import { ThemeToggle } from "@/components/theme-toggle"
import AnimatedBg from "@/components/animated-bg"

export default function Page() {
  return (
    <div className="relative min-h-screen text-black dark:text-foreground">
      <AnimatedBg />
      <header className="sticky top-0 z-50 w-full border-b border-border bg-white dark:bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2 text-black dark:text-primary" href="/">
              <span className="hidden font-bold sm:inline-block">Home</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors text-black dark:text-primary hover:text-gray-800 dark:hover:text-primary/80">
                About
              </Link>
              <Link href="#projects" className="transition-colors text-black dark:text-primary hover:text-gray-800 dark:hover:text-primary/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors text-black dark:text-primary hover:text-gray-800 dark:hover:text-primary/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <ThemeToggle />
            <Button
              variant="outline"
              className="text-black dark:text-primary border-black dark:border-primary hover:bg-gray-100 dark:hover:bg-primary hover:text-black dark:hover:text-primary-foreground"
            >
              Resume
            </Button>
          </div>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-black dark:text-primary sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Gour Gupal Talukder Shawon
                </h1>
                <p className="mx-auto max-w-[700px] text-black dark:text-primary md:text-xl">
                  a software engineering student with a passion for web development and open-source contributions. I love building
                  innovative solutions that make a difference. Currently, I am focused on full-stack development and exploring the
                  latest technologies in the field.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4 text-black dark:text-primary" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com" target="_blank">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4 text-black dark:text-primary" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://twitter.com" target="_blank">
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4 text-black dark:text-primary" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="mailto:hello@example.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4 text-black dark:text-primary" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-black dark:text-primary sm:text-4xl md:text-5xl mb-12 text-center">
              Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white dark:bg-background p-4 transition-transform transition-shadow hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                <ProjectCard
                  title="E-commerce Platform"
                  description="A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration."
                  link="https://github.com"
                  tags={["Next.js", "Prisma", "Stripe"]}
                />
              </div>
              <div className="rounded-lg bg-white dark:bg-background p-4 transition-transform transition-shadow hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                <ProjectCard
                  title="Task Management App"
                  description="A real-time task management application with team collaboration features."
                  link="https://github.com"
                  tags={["React", "Node.js", "Socket.io"]}
                />
              </div>
              <div className="rounded-lg bg-white dark:bg-background p-4 transition-transform transition-shadow hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                <ProjectCard
                  title="AI Chat Interface"
                  description="An AI-powered chat interface with natural language processing capabilities."
                  link="https://github.com"
                  tags={["OpenAI", "Next.js", "TailwindCSS"]}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-black dark:text-primary sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <div className="text-black dark:text-primary">
              <TechStack />
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter text-black dark:text-primary sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
              </h2>
              <div className="text-black dark:text-primary">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-white dark:bg-background">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-muted-foreground">© 2024 John.dev. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs text-gray-500 dark:text-muted-foreground hover:text-black dark:hover:text-primary hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs text-gray-500 dark:text-muted-foreground hover:text-black dark:hover:text-primary hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
