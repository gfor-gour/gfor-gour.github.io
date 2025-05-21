import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import { ThemeToggle } from "@/components/theme-toggle"
import AnimatedBg from "@/components/animated-bg"
import Image from "next/image" // For LeetCode logo

export default function Page() {
  return (
    <div className="relative min-h-screen text-black dark:text-foreground">
      <AnimatedBg />
      <header className="sticky top-0 z-50 w-full border-b border-border bg-white dark:bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center pl-2 md:pl-8 pr-2 md:pr-8">
          {/* Left: Home Brand (now About link) */}
          <Link
            href="#about"
            className="mr-4 flex items-center font-bold text-lg text-black dark:text-primary hover:underline underline-offset-4"
            style={{
              minWidth: "max-content",
              border: "2px solid rgba(139,92,246,1)",
              boxShadow:
                "0 0 8px 2px rgba(139, 92, 246, 0.7), 0 0 4px 1px rgba(139, 92, 246, 0.5)",
              background: "transparent",
              borderRadius: "0.75rem",
              padding: "0.1rem 1rem",
            }}
          >
            G_for_Gour
          </Link>
          {/* Right: Navbar Buttons (About removed) */}
          <nav className="flex items-center gap-3 ml-auto">
            <ThemeToggle />
            {[
              // { href: "#about", label: "About" }, // Removed as requested
              { href: "#cp-profile", label: "CP Profile" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" },
              { href: "/resume.pdf", label: "Resume", external: true },
            ].map(({ href, label, external }) => (
              <span
                key={label}
                className="rounded-xl flex items-center"
                style={{
                  border: "2px solid rgba(139,92,246,1)",
                  boxShadow:
                    "0 0 8px 2px rgba(139, 92, 246, 0.7), 0 0 4px 1px rgba(139, 92, 246, 0.5)",
                  background: "transparent",
                  padding: "0.1rem 0.75rem",
                  height: "2.2rem",
                  minHeight: "unset",
                }}
              >
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="text-black dark:text-primary border-none bg-transparent shadow-none px-0 h-auto min-h-0"
                >
                  <Link
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                  >
                    {label}
                  </Link>
                </Button>
              </span>
            ))}
          </nav>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section
          id="about"
          className="pt-8 md:pt-10 lg:pt-12 pb-12 md:pb-24 lg:pb-32 flex items-center justify-center"
        >
          <div className="flex flex-col md:flex-row items-start w-full">
            {/* Left: Main About Content (60%) */}
            <div className="w-full md:w-[60%] flex flex-col items-start justify-center space-y-6 md:pl-8">
              <div className="flex items-center w-full">
                <span
                  className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold 
    text-violet-600 dark:text-white"
                >
                  Hi, I'm
                </span>
                <div className="flex-1" />
                <div
                  className="flex gap-4 rounded-xl"
                  style={{
                    border: "2px solid rgba(139,92,246,1)",
                    boxShadow:
                      "0 0 8px 2px rgba(139, 92, 246, 0.7), 0 0 4px 1px rgba(139, 92, 246, 0.5)",
                    background: "transparent",
                    padding: "0.5rem 1rem",
                  }}
                >
                  <Link href="https://github.com" target="_blank">
                    <Button variant="outline" size="lg" className="text-black dark:text-primary border-none bg-transparent shadow-none flex items-center justify-center">
                      <Github className="h-7 w-7" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  {/* <Link href="https://leetcode.com" target="_blank">
                    <Button variant="outline" size="lg" className="text-black dark:text-primary border-none bg-transparent shadow-none flex items-center justify-center">
                      <Image
                        src="/leetcode.png"
                        alt="LeetCode"
                        width={28}
                        height={28}
                        style={{ display: "inline-block" }}
                      />
                      <span className="sr-only">LeetCode</span>
                    </Button>
                  </Link> */}
                  <Link href="https://linkedin.com" target="_blank">
                    <Button variant="outline" size="lg" className="text-black dark:text-primary border-none bg-transparent shadow-none flex items-center justify-center">
                      <Linkedin className="h-7 w-7" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="https://twitter.com" target="_blank">
                    <Button variant="outline" size="lg" className="text-black dark:text-primary border-none bg-transparent shadow-none flex items-center justify-center">
                      <Twitter className="h-7 w-7" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </Link>
                  <Link href="mailto:hello@example.com">
                    <Button variant="outline" size="lg" className="text-black dark:text-primary border-none bg-transparent shadow-none flex items-center justify-center">
                      <Mail className="h-7 w-7" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-black dark:text-primary whitespace-nowrap"
                id="about-name"
                style={{ width: "fit-content" }}
              >
                Gour Gupal Talukder Shawon
              </h1>
              <div className="w-full md:w-auto flex flex-col items-start">
                <span>
                  <span className="text-base md:text-lg font-semibold text-violet-700 dark:text-violet-200">
                    A Software Engineering student at SUST, Sylhet, Bangladesh.
                  </span>
                  <span className="mx-2 text-base md:text-lg font-semibold text-violet-700 dark:text-violet-200">
                    |
                  </span>
                  <span className="text-sm md:text-base text-violet-600 dark:text-violet-300">
                    7th semester of the Final Year
                  </span>
                </span>
                <span
                  className="block mt-2"
                  style={{
                    width: "100%",
                    height: "1px", // Thinner line
                    borderRadius: "0.5px",
                    background:
                      "linear-gradient(90deg, rgba(139,92,246,0.7) 0%, rgba(139,92,246,1) 50%, rgba(139,92,246,0.7) 100%)",
                    boxShadow:
                      "0 0 8px 2px rgba(139, 92, 246, 0.7), 0 0 4px 1px rgba(139, 92, 246, 0.5)",
                  }}
                />
              </div>
              <div
                className="rounded-xl mt-2"
                style={{
                  width: "fit-content",
                  minWidth: "220px",
                  maxWidth: "100%",
                  border: "2px solid rgba(139,92,246,1)",
                  boxShadow:
                    "0 0 8px 2px rgba(139, 92, 246, 0.7), 0 0 4px 1px rgba(139, 92, 246, 0.5)",
                  background: "transparent",
                  padding: "0.75rem 1.25rem",
                  marginLeft: 0,
                  marginRight: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <p className="text-base md:text-lg text-gray-700 dark:text-primary/80 pb-2 text-left">
                  Throughout my coding journey, I’ve demonstrated rigorous problem‑solving acumen by completing over 600 algorithmic challenges across diverse platforms—450+ of which are on LeetCode using C++, Python, and SQL—and earning 16 badges. In parallel, I’ve architected and deployed full‑stack solutions with Next.js, React, Tailwind CSS, Node.js, and both MongoDB and PostgreSQL.
                </p>
                <p className="text-base md:text-lg text-gray-700 dark:text-primary/80 pt-0 text-left">
                  Academically, I’ve consistently performed well, especially in core subjects such as Data Structures & Algorithms, Software Design Patterns, Database Systems, Operating Systems, Computer Networks, and Software Testing. I’m also diving into AI and large‑language models, building a tool to generate clear, context‑aware Git commit messages using LLMs. I’m looking for challenging opportunities that let me push these ideas further.
                </p>
              </div>
            </div>
            {/* Right: Reserved for future picture (40%) */}
            <div className="hidden md:flex w-full md:w-[40%] justify-end items-start pl-8 pt-2">
              {/* Empty for now */}
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-black dark:text-primary sm:text-4xl md:text-5xl mb-12 text-center">
            Projects
            </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="E-commerce Platform"
              description="A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration."
              link="https://github.com"
              tags={["Next.js", "Prisma", "Stripe"]}
            />
            <ProjectCard
              title="Task Management App"
              description="A real-time task management application with team collaboration features."
              link="https://github.com"
              tags={["React", "Node.js", "Socket.io"]}
            />
            <ProjectCard
              title="AI Chat Interface"
              description="An AI-powered chat interface with natural language processing capabilities."
              link="https://github.com"
              tags={["OpenAI", "Next.js", "TailwindCSS"]}
            />
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
          <p className="text-xs text-gray-500 dark:text-muted-foreground">© 2024 gourgupal.dev. All rights reserved.</p>
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
