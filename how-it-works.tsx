"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FileSearch, MessageSquare, PenLine, ShieldCheck } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: FileSearch,
    title: "Faca a simulacao",
    description: "Preencha seus dados em menos de 1 minuto. Sem burocracia.",
    color: "text-solidy-yellow",
    bg: "bg-solidy-yellow/10",
    ring: "ring-solidy-yellow/20",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Receba propostas",
    description: "Compare planos de diferentes seguradoras com as melhores condicoes.",
    color: "text-solidy-green",
    bg: "bg-solidy-green/10",
    ring: "ring-solidy-green/20",
  },
  {
    number: "03",
    icon: PenLine,
    title: "Assine em minutos",
    description: "Escolha o plano ideal e finalize 100% digital.",
    color: "text-solidy-blue",
    bg: "bg-solidy-blue/10",
    ring: "ring-solidy-blue/20",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Dirija protegido",
    description: "Pronto! Conte com assistencia 24h sempre que precisar.",
    color: "text-solidy-green",
    bg: "bg-solidy-green/10",
    ring: "ring-solidy-green/20",
  },
]

export function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="como-funciona" className="relative bg-background py-24 lg:py-32 overflow-hidden">
      {/* Animated background accents */}
      <motion.div
        className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-solidy-green/5"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-solidy-yellow/5"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
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
            Simples e Rapido
          </motion.span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Como funciona
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Em 4 passos simples, voce protege seu carro com o melhor seguro do
            mercado.
          </p>
        </motion.div>

        <div className="relative mt-20 flex flex-col gap-0 lg:gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon
            const isEven = i % 2 === 0
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + 0.2 * i,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`flex items-center gap-6 lg:gap-12 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col lg:flex-row`}
              >
                {/* Step content */}
                <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-xl"
                  >
                    <div className={`flex items-center gap-4 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                      <motion.div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${step.bg} ring-4 ${step.ring}`}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Icon className={`h-7 w-7 ${step.color}`} />
                      </motion.div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                          Passo {step.number}
                        </span>
                        <h3 className="mt-1 text-xl font-bold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center timeline */}
                <div className="relative flex flex-col items-center">
                  <motion.div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${step.bg} text-lg font-bold ${step.color} ring-4 ring-background shadow-lg`}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      delay: 0.3 + 0.2 * i,
                    }}
                  >
                    {step.number}
                  </motion.div>
                  {i < steps.length - 1 && (
                    <motion.div
                      className="hidden lg:block w-0.5 bg-border"
                      initial={{ height: 0 }}
                      animate={inView ? { height: 80 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + 0.2 * i }}
                    />
                  )}
                </div>

                {/* Spacer */}
                <div className="hidden flex-1 lg:block" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
