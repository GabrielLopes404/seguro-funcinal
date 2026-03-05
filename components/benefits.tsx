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
    iconBg: "bg-solidy-blue/15",
    iconColor: "text-solidy-blue",
    borderColor: "border-solidy-blue/20",
    statColor: "text-solidy-blue",
  },
  {
    icon: ShieldCheck,
    title: "Cobertura completa sem surpresas",
    description:
      "Protecao contra colisoes, roubo, furto, danos a terceiros e fenomenos naturais. Tudo incluso.",
    stat: "100%",
    statLabel: "cobertura",
    iconBg: "bg-solidy-yellow/15",
    iconColor: "text-solidy-yellow-dark",
    borderColor: "border-solidy-yellow/20",
    statColor: "text-solidy-yellow-dark",
  },
  {
    icon: Zap,
    title: "Cotacao digital em menos de 1 minuto",
    description:
      "Simule, compare e contrate sem sair de casa. Processo 100% online e sem burocracia.",
    stat: "60s",
    statLabel: "para cotar",
    iconBg: "bg-solidy-green/15",
    iconColor: "text-solidy-green",
    borderColor: "border-solidy-green/20",
    statColor: "text-solidy-green",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
}

const itemVariants = {
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
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="beneficios" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden" style={{ background: "linear-gradient(180deg, oklch(0.97 0.005 85 / 0.3) 0%, oklch(1 0 0) 100%)" }}>
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
            className="inline-flex items-center gap-2 rounded-full bg-solidy-yellow/15 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-solidy-yellow-dark border border-solidy-yellow/20"
          >
            Vantagens exclusivas
          </motion.span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-5xl text-balance">
            Por que escolher a Solidy?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Mais do que um seguro, uma experiencia completa de protecao.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-14 sm:mt-16 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative h-full rounded-2xl border ${benefit.borderColor} bg-card p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-foreground/5`}
                >
                  {/* Icon */}
                  <motion.div
                    className={`flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl ${benefit.iconBg}`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Icon className={`h-7 w-7 sm:h-8 sm:w-8 ${benefit.iconColor}`} />
                  </motion.div>

                  {/* Stat highlight */}
                  <div className="mt-5 flex items-baseline gap-2">
                    <span className={`text-3xl sm:text-4xl font-extrabold ${benefit.statColor}`}>{benefit.stat}</span>
                    <span className="text-sm text-muted-foreground">{benefit.statLabel}</span>
                  </div>

                  {/* Text */}
                  <h3 className="mt-4 text-lg font-bold text-foreground sm:text-xl">
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
