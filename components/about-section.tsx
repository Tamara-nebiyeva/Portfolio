"use client"

import { Card } from "@/components/ui/card"
import { Code, Palette, Zap, Users } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Code,
      title: "Təmiz Kod",
      description: "Oxunaqlı və saxlanıla bilən kod yazıram",
    },
    {
      icon: Palette,
      title: "Dizayn Həssaslığı",
      description: "Pixel-perfect interfeyslər yaradıram",
    },
    {
      icon: Zap,
      title: "Performans",
      description: "Sürətli və optimallaşdırılmış tətbiqlər",
    },
    {
      icon: Users,
      title: "Komanda İşi",
      description: "Effektiv əməkdaşlıq və ünsiyyət",
    },
  ]

  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="font-mono text-primary text-sm mb-4">$ cat about.txt</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Haqqımda</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Mən, Tamara Nəbiyeva! Frontend development sahəsində fəaliyyət göstərirəm. HTML, CSS, JavaScript və React texnologiyalarından istifadə edərək funksional, responsiv və müasir veb interfeyslər hazırlayıram. Tailwind və Bootstrap vasitəsilə istifadəçi yönümlü dizaynlar qurur, API inteqrasiyası ilə dinamik tətbiqlər yaradıram. Məqsədim daim öz bilik və bacarıqlarımı inkişaf etdirərək keyfiyyətli rəqəmsal məhsullar ortaya qoymaqdır.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
            >
              <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">1+</div>
            <div className="text-muted-foreground">İllik Təcrübə</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">Tamamlanmış Layihə</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">Təcrübəli Layihə</div>
          </div>
        </div>
      </div>
    </section>
  )
}
