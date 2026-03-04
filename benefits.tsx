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
    gradient: "from-solidy-green/10 to-solidy-green/5",
    iconBg: "bg-solidy-green/15",
    iconColor: "text-solidy-green",
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
  },
  {
    icon: Zap,
    title: "Cotacao digital em menos de 1 minuto",
    description:
      "Simule, compare e contrate sem sair de casa. Processo 100% online e sem burocracia.",
    stat: "60s",
    statLabel: "para cotar",
    gradient: "from-solidy-yellow/10 to-solidy-yellow/5",
    iconBg: "bg-solidy-yellow/15",
    iconColor: "text-solidy-yellow",
  },
]

export function Benefits() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="beneficios" className="relative bg-muted/30 py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
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
            className="inline-block rounded-full bg-solidy-yellow/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-solidy-yellow"
          >
            Vantagens exclusivas
          </motion.span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Por que escolher a Solidy?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Mais do que um seguro, uma experiencia completa de protecao.
          </p>
        </motion.div>

        {/* Horizontal benefit rows */}
        <div className="mt-16 flex flex-col gap-8">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon
            const isReversed = i % 2 !== 0
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: isReversed ? 60 : -60 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + 0.15 * i,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.01, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`flex flex-col gap-6 rounded-3xl border border-border bg-gradient-to-r ${benefit.gradient} p-8 lg:p-10 transition-shadow hover:shadow-xl ${
                    isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                  } lg:items-center`}
                >
                  {/* Icon + stat */}
                  <div className="flex shrink-0 items-center gap-6 lg:w-64">
                    <motion.div
                      className={`flex h-20 w-20 items-center justify-center rounded-2xl ${benefit.iconBg}`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Icon className={`h-10 w-10 ${benefit.iconColor}`} />
                    </motion.div>
                    <div>
                      <p className="text-3xl font-bold text-foreground">{benefit.stat}</p>
                      <p className="text-sm text-muted-foreground">{benefit.statLabel}</p>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground lg:text-2xl">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed lg:text-lg">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
