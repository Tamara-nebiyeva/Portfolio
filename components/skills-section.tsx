"use client"

import { Card } from "@/components/ui/card"
import { Code2, Layout, Smartphone, Database, GitBranch, Blocks, Palette, Rocket } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      skills: ["React", "JavaScript ES6+", "HTML5", "CSS3"],
    },
    {
      icon: Layout,
      title: "Styling",
      skills: ["Tailwind CSS", "SASS/SCSS", "Bootstrap", "Responsive Design"],
    },
    {
      icon: Blocks,
      title: "Animation & Effects",
      skills: ["Framer Motion", "GSAP (basics)"],
    },
    {
      icon: GitBranch,
      title: "Tools",
      skills: ["Git & GitHub", "VS Code", "Figma"],
    },
    {
      icon: Palette,
      title: "UI Libraries",
      skills: ["ShadCN UI", "Material-UI"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="font-mono text-primary text-sm mb-4">$ cat skills.json</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Bacarıqlarım</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            İstifadə etdiyim texnologiyalar və alətlər
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
            >
              <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <category.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 inline-block">
            <p className="text-lg mb-4">
              <span className="text-muted-foreground">Daima yeni texnologiyalar öyrənməyə və </span>
              <span className="text-primary font-semibold">inkişaf etməyə</span>
              <span className="text-muted-foreground"> hazıram!</span>
            </p>
            <div className="font-mono text-primary text-sm">while(alive) {"{ learn(); code(); improve(); }"}</div>
          </Card>
        </div>
      </div>
    </section>
  )
}
