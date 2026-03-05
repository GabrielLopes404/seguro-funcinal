"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative overflow-hidden py-24 lg:py-32" style={{
      background: "linear-gradient(135deg, oklch(0.85 0.16 85) 0%, oklch(0.55 0.22 155) 100%)"
    }}>
      {/* Animated decorative circles */}
      <motion.div
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full"
        style={{ background: "oklch(1 0 0 / 0.1)" }}
        animate={{ scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full"
        style={{ background: "oklch(1 0 0 / 0.08)" }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full"
        style={{ background: "oklch(1 0 0 / 0.05)" }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance"
            style={{ color: "oklch(1 0 0)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Seu carro merece a melhor protecao
          </motion.h2>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg"
            style={{ color: "oklch(1 0 0 / 0.85)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nao espere o imprevisto acontecer. Proteja seu patrimonio agora com o
            seguro mais inteligente do mercado.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
            className="mt-10"
          >
            <Button
              size="lg"
              className="px-12 py-7 text-lg font-bold shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl"
              style={{
                backgroundColor: "oklch(1 0 0)",
                color: "oklch(0.18 0.04 155)",
              }}
              asChild
            >
              <a href="#simulacao">
                Proteja Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
