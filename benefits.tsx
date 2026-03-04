"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Clock, ShieldCheck, Zap } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Assistencia 24h em todo o Brasil",
    description:
      "Suporte completo a qualquer hora do dia ou da noite. Tempo medio de atendimento inferior a 15 minutos.",
    stat: "15 min",
    statLabel: "tempo medio",
    gradient: "from-solidy-yellow/10 to-solidy-yellow/5",
    iconBg: "bg-solidy-yellow/15",
    iconColor: "text-solidy-yellow",
    borderColor: "border-t-solidy-yellow",
  },
  {
    icon: ShieldCheck,
    title: "Cobertura completa sem surpresas",
    description:
      "Protecao contra colisoes, roubo, furto, danos a terceiros e fenomenos naturais. Tudo incluso.",
    stat: "100%",
    statLabel: "cobertura",
    gradient: "from-solidy-blue/10 to-solidy-blue/5",
    iconBg: "bg-solidy-blue/15",
    iconColor: "text-solidy-blue",
    borderColor: "border-t-solidy-blue",
  },
  {
    icon: Zap,
    title: "Cotacao digital em menos de 1 minuto",
    description:
      "Simule, compare e contrate sem sair de casa. Processo 100% online e sem burocracia.",
    stat: "60s",
    statLabel: "para cotar",
    gradient: "from-solidy-green/10 to-solidy-green/5",
    iconBg: "bg-solidy-green/15",
    iconColor: "text-solidy-green",
    borderColor: "border-t-solidy-green",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Benefits() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="beneficios" className="relative bg-muted/30 py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background accents */}
      <motion.div
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-solidy-yellow/5"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
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
            className="inline-block rounded-full bg-solidy-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-solidy-blue border border-solidy-blue/20"
          >
            Vantagens exclusivas
          </motion.span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-5xl text-balance">
            Por que escolher a Solidy?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Mais do que um seguro, uma experiencia completa de protecao.
          </p>
        </motion.div>

        {/* Benefits cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 sm:mt-16 grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <motion.div key={benefit.title} variants={cardVariants}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`h-full rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-2xl border-t-4 ${benefit.borderColor}`}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <motion.div
                      className={`flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl ${benefit.iconBg}`}
                      whileHover={{ rotate: 12, scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Icon className={`h-7 w-7 sm:h-8 sm:w-8 ${benefit.iconColor}`} />
                    </motion.div>
                    <div>
                      <motion.p
                        className="text-3xl font-bold text-foreground sm:text-4xl"
                        initial={{ scale: 0.8 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                      >
                        {benefit.stat}
                      </motion.p>
                      <p className="text-xs text-muted-foreground sm:text-sm">{benefit.statLabel}</p>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-foreground sm:text-xl">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed sm:text-base">
                    {benefit.description}
                  </p>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
