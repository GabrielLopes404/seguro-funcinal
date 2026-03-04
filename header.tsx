"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navLinks = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Diferenciais", href: "#diferenciais" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-background/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a href="#" className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05, rotate: -3 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Image
              src="/images/logo-new.png"
              alt="Solidy Logo"
              width={44}
              height={44}
              className="h-10 w-10 sm:h-11 sm:w-11 rounded-lg object-contain"
              priority
            />
          </motion.div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Solidy
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeSection === link.href
                  ? "text-solidy-blue"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
              {activeSection === link.href && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 rounded-lg bg-solidy-yellow/10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            className="bg-solidy-yellow text-solidy-blue hover:bg-solidy-yellow-hover font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            asChild
          >
            <a href="#simulacao">Simular Agora</a>
          </Button>
        </div>

        <button
          className="flex md:hidden text-foreground p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-0 bg-foreground/20 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 border-b border-border bg-background shadow-2xl md:hidden"
            >
              <nav className="flex flex-col gap-1 px-4 py-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                    className={`rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-200 ${
                      activeSection === link.href
                        ? "bg-solidy-yellow/10 text-solidy-blue"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.3 }}
                  className="mt-3"
                >
                  <Button
                    className="bg-solidy-yellow text-solidy-blue hover:bg-solidy-yellow-hover w-full font-semibold h-12 text-base"
                    asChild
                  >
                    <a href="#simulacao" onClick={() => setMobileOpen(false)}>
                      Simular Agora
                    </a>
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
