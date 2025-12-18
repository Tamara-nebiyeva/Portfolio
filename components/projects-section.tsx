"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ProjectsSection() {
  const projects = [
    {
      title: "Country App",
      description: "Ölkələri filterləyə biləcəyiniz bir web səhifə. HTML, CSS, JS ilə hazırlanmış.",
      image: "/country.png",
      tags: ["HTML5", "CSS3", "Tailwind", "JavaScript", "Rest API"],
      github: "https://github.com/Tamara-nebiyeva/flag/tree/main",
      live: "https://olkeler.netlify.app/",
    },
    {
      title: "Turbo Az",
      description: "Turbo Az Home Page",
      image: "/turboaz.png",
      tags: ["HTML5", "CSS3", "JavaScript", "Tailwind"],
      github: "https://github.com/Tamara-nebiyeva/turbo-az-task",
      live: "https://turbo-az-task-zeta.vercel.app/",
    },
    {
      title: "Libraff",
      description: "Libraff kitabxanasının Home Page'i və Admin Paneli",
      image: "/libraff.png",
      tags: ["HTML5", "CSS3", "Tailwind", "Rest API"],
      github: "https://github.com/Tamara-nebiyeva/libraff-task",
      live: "https://libraff-task.vercel.app/",
    },
    {
      title: "ATB",
      description: "ATB'nin Home səhifəsinin taskı",
      image: "/atb.png",
      tags: ["HTML5", "CSS3", "Tailwind"],
      github: "https://github.com/Tamara-nebiyeva/atb",
      live: "https://atb-task.vercel.app/",
    },
    {
      title: "Dish Menu",
      description: "İmtahan Taskı, masa sifariş vermə app'i",
      image: "/dishmenu.png",
      tags: ["HTML5", "CSS3", "Tailwind"],
      github: "https://github.com/Tamara-nebiyeva/dish-menu",
      live: "https://dish-menu.vercel.app/",
    },
    {
      title: "Todo App",
      description: "Reactın ilk taskı, Todo App",
      image: "/atb.png",
      tags: ["React", "CSS3", "Tailwind"],
      github: "https://github.com/Tamara-nebiyeva/TodoApp",
      live: "https://todoappreacttam.netlify.app/",
    },
    {
      title: "Timer",
      description: "Basic Timer",
      image: "/timer.png",
      tags: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Tamara-nebiyeva/timer",
      live: "https://timer-liart-eight.vercel.app/",
    },
    {
      title: "Chess With One Horse",
      description: "Atı hərəkət etdirə bildiyimiz bir şahmat taxtası",
      image: "/chess.png",
      tags: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Tamara-nebiyeva/chess-task",
      live: "https://chess-task.vercel.app/",
    },
    {
      title: "Calculator",
      description: "Basic Calculator",
      image: "/calculator.png",
      tags: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Tamara-nebiyeva/calculator",
      live: "https://calculator-beige-sigma-45.vercel.app/",
    },
    {
      title: "Running Car",
      description: "Animasiya diqqətli",
      image: "/runningcar.png",
      tags: ["HTML5", "CSS3"],
      github: "https://github.com/Tamara-nebiyeva?tab=repositories",
      live: "https://runningcar.vercel.app/",
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="font-mono text-primary text-sm mb-4">$ ls projects/</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Layihələrim</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Son zamanlarda üzərində işlədiyim bəzi layihələr
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-pretty">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="font-mono text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-4">
                <a target="_blank" href={project.github}>
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Github className="h-4 w-4" />
                    Github
                  </Button>
                </a>
                <a href={project.live} target="_blank" >
                  <Button size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Canlı Demo
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
