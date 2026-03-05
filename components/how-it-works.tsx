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
    color: "text-solidy-yellow-dark",
    bg: "bg-solidy-yellow/15",
    ring: "ring-solidy-yellow/30",
    border: "border-solidy-yellow/20",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Receba propostas",
    description: "Compare planos de diferentes seguradoras com as melhores condicoes.",
    color: "text-solidy-blue",
    bg: "bg-solidy-blue/15",
    ring: "ring-solidy-blue/30",
    border: "border-solidy-blue/20",
  },
  {
    number: "03",
    icon: PenLine,
    title: "Assine em minutos",
    description: "Escolha o plano ideal e finalize 100% digital.",
    color: "text-solidy-green",
    bg: "bg-solidy-green/15",
    ring: "ring-solidy-green/30",
    border: "border-solidy-green/20",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Dirija protegido",
    description: "Pronto! Conte com assistencia 24h sempre que precisar.",
    color: "text-solidy-blue",
    bg: "bg-solidy-blue/15",
    ring: "ring-solidy-blue/30",
    border: "border-solidy-blue/20",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
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
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="como-funciona" className="relative bg-background py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-solidy-yellow/5 blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-solidy-blue/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section header */}
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
            className="inline-flex items-center gap-2 rounded-full bg-solidy-blue/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-solidy-blue border border-solidy-blue/20"
          >
            Simples e Rapido
          </motion.span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-5xl text-balance">
            Como funciona
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Em 4 passos simples, voce protege seu carro com o melhor seguro do mercado.
          </p>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-14 sm:mt-20 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                variants={cardVariants}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative h-full rounded-2xl border ${step.border} bg-card p-5 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-foreground/5`}
                >
                  {/* Step number watermark */}
                  <span className="absolute top-3 right-4 text-5xl sm:text-6xl font-extrabold text-muted/50 select-none">
                    {step.number}
                  </span>

                  <motion.div
                    className={`relative z-10 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl ${step.bg} ring-4 ${step.ring}`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Icon className={`h-6 w-6 sm:h-7 sm:w-7 ${step.color}`} />
                  </motion.div>

                  <h3 className="relative z-10 mt-4 text-lg font-bold text-foreground sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="relative z-10 mt-2 text-sm text-muted-foreground leading-relaxed sm:text-base">
                    {step.description}
                  </p>

                  {/* Connector line for desktop */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border z-0" />
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
