"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check, X } from "lucide-react"

const comparisonData = [
  { feature: "Cotacao online em minutos", solidy: true, traditional: false },
  { feature: "Assistencia 24h inclusa", solidy: true, traditional: true },
  { feature: "Carro reserva garantido", solidy: true, traditional: false },
  { feature: "Atendimento humanizado", solidy: true, traditional: false },
  { feature: "Sem burocracia", solidy: true, traditional: false },
  { feature: "Precos transparentes", solidy: true, traditional: false },
  { feature: "App de gestao da apolice", solidy: true, traditional: false },
]

const partners = [
  "Porto Seguro",
  "SulAmerica",
  "Tokio Marine",
  "Allianz",
  "Liberty",
  "Zurich",
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Differentials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="diferenciais" className="relative bg-background py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-solidy-yellow/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-solidy-blue/5 blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full bg-solidy-green/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-solidy-green border border-solidy-green/20"
          >
            Diferenciais
          </motion.span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-5xl text-balance">
            Solidy vs. Seguro Tradicional
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Veja por que milhares de motoristas estao migrando para a Solidy.
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-10 sm:mt-12 max-w-3xl overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-foreground/5"
        >
          {/* Table header */}
          <div className="grid grid-cols-3 border-b border-border bg-muted/50 px-4 py-3 sm:px-6 sm:py-4">
            <p className="text-xs sm:text-sm font-medium text-muted-foreground">Recurso</p>
            <p className="text-center text-xs sm:text-sm font-bold text-solidy-yellow-dark">Solidy</p>
            <p className="text-center text-xs sm:text-sm font-medium text-muted-foreground">Tradicional</p>
          </div>

          {/* Table rows */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {comparisonData.map((row, i) => (
              <motion.div
                key={row.feature}
                variants={rowVariants}
                className={`grid grid-cols-3 items-center px-4 py-3 sm:px-6 sm:py-4 transition-colors hover:bg-muted/30 ${
                  i < comparisonData.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <p className="text-xs sm:text-sm text-foreground pr-2">{row.feature}</p>
                <div className="flex justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ type: "spring", stiffness: 400, delay: 0.4 + 0.06 * i }}
                    className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-solidy-yellow/15"
                  >
                    <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-solidy-yellow-dark" />
                  </motion.div>
                </div>
                <div className="flex justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ type: "spring", stiffness: 400, delay: 0.45 + 0.06 * i }}
                    className={`flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full ${
                      row.traditional ? "bg-solidy-green/10" : "bg-destructive/10"
                    }`}
                  >
                    {row.traditional ? (
                      <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-solidy-green" />
                    ) : (
                      <X className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-destructive" />
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Partner logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <p className="text-sm font-medium text-muted-foreground">
            Parceiros e seguradoras confiaveis
          </p>
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6">
            {partners.map((partner, i) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.7 + 0.08 * i,
                  type: "spring",
                  stiffness: 300,
                }}
                whileHover={{ scale: 1.08, y: -3 }}
                className="rounded-xl bg-muted/60 px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-muted-foreground transition-all duration-300 hover:bg-solidy-blue/10 hover:text-solidy-blue hover:border-solidy-blue/20 border border-transparent cursor-default"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
