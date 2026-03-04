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
    ring: "ring-solidy-yellow/30",
    borderAccent: "border-l-solidy-yellow",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Receba propostas",
    description: "Compare planos de diferentes seguradoras com as melhores condicoes.",
    color: "text-solidy-blue",
    bg: "bg-solidy-blue/10",
    ring: "ring-solidy-blue/30",
    borderAccent: "border-l-solidy-blue",
  },
  {
    number: "03",
    icon: PenLine,
    title: "Assine em minutos",
    description: "Escolha o plano ideal e finalize 100% digital.",
    color: "text-solidy-green",
    bg: "bg-solidy-green/10",
    ring: "ring-solidy-green/30",
    borderAccent: "border-l-solidy-green",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Dirija protegido",
    description: "Pronto! Conte com assistencia 24h sempre que precisar.",
    color: "text-solidy-blue",
    bg: "bg-solidy-blue/10",
    ring: "ring-solidy-blue/30",
    borderAccent: "border-l-solidy-blue",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="como-funciona" className="relative bg-background py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Animated background accents */}
      <motion.div
        className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-solidy-yellow/8"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-solidy-blue/5"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

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
            className="inline-block rounded-full bg-solidy-yellow/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-solidy-blue border border-solidy-yellow/30"
          >
            Simples e Rapido
          </motion.span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-5xl text-balance">
            Como funciona
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Em 4 passos simples, voce protege seu carro com o melhor seguro do
            mercado.
          </p>
        </motion.div>

        {/* Steps grid - mobile friendly */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6"
        >
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div key={step.number} variants={itemVariants}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`relative h-full rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm transition-shadow hover:shadow-xl border-l-4 ${step.borderAccent}`}
                >
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      className={`flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl ${step.bg} ring-4 ${step.ring}`}
                      whileHover={{ rotate: 10, scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Icon className={`h-6 w-6 sm:h-7 sm:w-7 ${step.color}`} />
                    </motion.div>
                    <span className={`text-3xl sm:text-4xl font-bold ${step.color} opacity-20`}>
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed sm:text-base">
                    {step.description}
                  </p>

                  {/* Connector arrow for desktop */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                        className="text-border"
                      >
                        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" className="text-solidy-yellow">
                          <path d="M2 2L10 10L2 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
