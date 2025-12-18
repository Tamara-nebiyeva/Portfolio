"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Twitter, MapPin } from "lucide-react"

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
    alert("Mesajınız göndərildi! Tezliklə cavab verəcəyəm.")
  }

  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="font-mono text-primary text-sm mb-4">$ contact --info</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Əlaqə</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Layihə təklifi və ya sualınız varsa, mənə yazın!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:tamaranbiyeva26@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    tamaranbiyeva26@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Ünvan</h3>
                  <p className="text-muted-foreground">Gəncə, Azərbaycan</p>
                </div>
              </div>
            </Card>

            <div className="pt-6">
              <h3 className="font-semibold mb-4 font-mono text-primary">$ ls ./social-links</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Tamara-nebiyeva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors rounded-lg"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://az.linkedin.com/in/tamara-n%C9%99biyeva-a13277374"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors rounded-lg"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>

            <Card className="p-6 bg-card/50 font-mono text-sm">
              <div className="text-primary mb-2">$ send-message</div>
              <div className="text-muted-foreg round">
                <span className="text-accent">{">"}</span> Initializing connection...
              </div>
              <div className="text-muted-foreground">
                <span className="text-accent">{">"}</span> Ready to receive your message!
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 font-mono text-primary">
                  $ name:
                </label>
                <Input id="name" type="text" placeholder="Adınız" required className="font-mono" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 font-mono text-primary">
                  $ email:
                </label>
                <Input id="email" type="email" placeholder="email@example.com" required className="font-mono" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 font-mono text-primary">
                  $ message:
                </label>
                <Textarea id="message" placeholder="Mesajınız..." rows={6} required className="font-mono resize-none" />
              </div>

              <Button type="submit" className="w-full font-mono">
                send-message()
              </Button>
            </form>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p className="font-mono">© 2025 Frontend Developer Portfolio. Created by Tamara Nebiyeva</p>
        </div>
      </div>
    </section>
  )
}
