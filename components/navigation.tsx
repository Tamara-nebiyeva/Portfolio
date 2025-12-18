"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-mono text-primary font-bold text-lg">{"<dev />"}</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="text-sm hover:text-primary transition-colors">
              Haqqında
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm hover:text-primary transition-colors"
            >
              Layihələr
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-sm hover:text-primary transition-colors">
              Bacarıqlar
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm hover:text-primary transition-colors">
              Əlaqə
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left px-4 py-2 hover:bg-secondary rounded-md transition-colors"
              >
                Haqqında
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left px-4 py-2 hover:bg-secondary rounded-md transition-colors"
              >
                Layihələr
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left px-4 py-2 hover:bg-secondary rounded-md transition-colors"
              >
                Bacarıqlar
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left px-4 py-2 hover:bg-secondary rounded-md transition-colors"
              >
                Əlaqə
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
