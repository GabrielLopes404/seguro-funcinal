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

export function Differentials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="diferenciais" className="relative bg-background py-24 lg:py-32 overflow-hidden">
      <motion.div
        className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-solidy-yellow/5"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
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
            className="inline-block rounded-full bg-solidy-green/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-solidy-green"
          >
            Diferenciais
          </motion.span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Solidy vs. Seguro Tradicional
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Veja por que milhares de motoristas estao migrando para a Solidy.
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-border bg-card shadow-lg"
        >
          {/* Table header */}
          <div className="grid grid-cols-3 border-b border-border bg-muted/50 px-6 py-4">
            <p className="text-sm font-medium text-muted-foreground">Recurso</p>
            <p className="text-center text-sm font-bold text-solidy-green">Solidy</p>
            <p className="text-center text-sm font-medium text-muted-foreground">Tradicional</p>
          </div>

          {/* Table rows */}
          {comparisonData.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: 0.3 + 0.08 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`grid grid-cols-3 items-center px-6 py-4 transition-colors hover:bg-muted/30 ${
                i < comparisonData.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <p className="text-sm text-foreground">{row.feature}</p>
              <div className="flex justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    delay: 0.4 + 0.08 * i,
                  }}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-solidy-green/10"
                >
                  <Check className="h-4 w-4 text-solidy-green" />
                </motion.div>
              </div>
              <div className="flex justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    delay: 0.45 + 0.08 * i,
                  }}
                  className={`flex h-7 w-7 items-center justify-center rounded-full ${
                    row.traditional ? "bg-solidy-green/10" : "bg-destructive/10"
                  }`}
                >
                  {row.traditional ? (
                    <Check className="h-4 w-4 text-solidy-green" />
                  ) : (
                    <X className="h-4 w-4 text-destructive" />
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partner logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-sm font-medium text-muted-foreground">
            Parceiros e seguradoras confiaveis
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:gap-6">
            {partners.map((partner, i) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.7 + 0.1 * i,
                  type: "spring",
                  stiffness: 300,
                }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="rounded-xl bg-muted/60 px-6 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-solidy-green/10 hover:text-solidy-green cursor-default"
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
