"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32 bg-solidy-blue">
      {/* Animated decorative circles */}
      <motion.div
        className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-solidy-yellow/10"
        animate={{ scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-solidy-green/10"
        animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-solidy-yellow/5"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-solidy-yellow/20"
          >
            <Shield className="h-8 w-8 text-solidy-yellow" />
          </motion.div>

          <motion.h2
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-5xl text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Seu carro merece a melhor protecao
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-white/80"
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
            className="mt-8 sm:mt-10"
          >
            <Button
              size="lg"
              className="px-8 sm:px-12 py-6 sm:py-7 text-base sm:text-lg font-bold shadow-2xl transition-all duration-300 hover:scale-105 bg-solidy-yellow text-solidy-blue hover:bg-solidy-yellow-hover"
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
