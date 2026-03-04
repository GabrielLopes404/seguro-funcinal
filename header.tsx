"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Diferenciais", href: "#diferenciais" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-solidy-green">
            <Shield className="h-5 w-5 text-background" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Solidy
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="outline"
            className="border-solidy-green text-solidy-green hover:bg-solidy-green hover:text-background transition-all duration-300"
            asChild
          >
            <a href="#simulacao">Fale com Especialista</a>
          </Button>
          <Button
            className="bg-solidy-green text-background hover:bg-solidy-green-hover font-semibold transition-all duration-300"
            asChild
          >
            <a href="#simulacao">Simular Agora</a>
          </Button>
        </div>

        <button
          className="flex md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <Button
                  variant="outline"
                  className="border-solidy-green text-solidy-green w-full"
                  asChild
                >
                  <a href="#simulacao" onClick={() => setMobileOpen(false)}>
                    Fale com Especialista
                  </a>
                </Button>
                <Button
                  className="bg-solidy-green text-background hover:bg-solidy-green-hover w-full font-semibold"
                  asChild
                >
                  <a href="#simulacao" onClick={() => setMobileOpen(false)}>
                    Simular Agora
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
