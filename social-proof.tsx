"use client"

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Star, Quote } from "lucide-react"

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  decimals = 0,
}: {
  target: number
  suffix?: string
  prefix?: string
  decimals?: number
}) {
  const [display, setDisplay] = useState("0")
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const motionValue = useMotionValue(0)

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, target, {
        duration: 2.5,
        ease: [0.22, 1, 0.36, 1],
      })
      const unsubscribe = motionValue.on("change", (v) => {
        if (decimals > 0) {
          setDisplay(v.toFixed(decimals))
        } else {
          setDisplay(Math.round(v).toLocaleString("pt-BR"))
        }
      })
      return () => {
        controls.stop()
        unsubscribe()
      }
    }
  }, [inView, motionValue, target, decimals])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{display}{suffix}
    </span>
  )
}

const stats = [
  { value: 50000, suffix: "+", label: "Clientes protegidos", color: "text-solidy-yellow", bg: "bg-solidy-yellow/10", border: "border-solidy-yellow/20" },
  { value: 98, suffix: "%", label: "Satisfacao dos clientes", color: "text-solidy-blue", bg: "bg-solidy-blue/10", border: "border-solidy-blue/20" },
  { value: 15000, suffix: "+", label: "Sinistros resolvidos", color: "text-solidy-green", bg: "bg-solidy-green/10", border: "border-solidy-green/20" },
  { value: 4.9, suffix: "", label: "Avaliacao media", color: "text-solidy-yellow", bg: "bg-solidy-yellow/10", border: "border-solidy-yellow/20", decimals: 1 },
]

const testimonials = [
  {
    name: "Maria Silva",
    role: "Empresaria",
    content:
      "A Solidy mudou minha experiencia com seguro auto. Processo rapido, atendimento excelente e preco justo. Recomendo demais!",
    rating: 5,
    accent: "bg-solidy-yellow",
  },
  {
    name: "Carlos Oliveira",
    role: "Engenheiro",
    content:
      "Tive um sinistro e fui atendido em menos de 20 minutos. O carro reserva chegou no mesmo dia. Servico impecavel.",
    rating: 5,
    accent: "bg-solidy-blue",
  },
  {
    name: "Ana Santos",
    role: "Medica",
    content:
      "Cotei em varias seguradoras e a Solidy ofereceu o melhor custo-beneficio. O processo digital e muito pratico.",
    rating: 5,
    accent: "bg-solidy-green",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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

export function SocialProof() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="depoimentos" className="relative bg-background py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background accents */}
      <motion.div
        className="pointer-events-none absolute top-0 right-0 h-80 w-80 rounded-full bg-solidy-yellow/5"
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 h-60 w-60 rounded-full bg-solidy-blue/5"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Stats section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-4 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block rounded-full bg-solidy-yellow/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-solidy-blue border border-solidy-yellow/30"
          >
            Numeros que falam
          </motion.span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={cardVariants}>
              <motion.div
                whileHover={{ scale: 1.05, y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`flex flex-col items-center rounded-2xl border ${stat.border} ${stat.bg} p-4 sm:p-6 text-center shadow-sm transition-shadow hover:shadow-xl lg:p-8`}
              >
                <motion.p
                  className={`text-2xl font-bold ${stat.color} sm:text-3xl lg:text-4xl`}
                  initial={{ scale: 0.5 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                >
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    decimals={(stat as { decimals?: number }).decimals ?? 0}
                  />
                </motion.p>
                <p className="mt-1 text-xs text-muted-foreground font-medium sm:mt-2 sm:text-sm">{stat.label}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
            O que nossos clientes dizem
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 md:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.name} variants={cardVariants}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative h-full rounded-2xl border border-border bg-card p-5 sm:p-6 transition-shadow hover:shadow-2xl overflow-hidden"
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${testimonial.accent}`} />

                <Quote className="mb-3 h-6 w-6 sm:h-8 sm:w-8 text-solidy-yellow/40" />
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {testimonial.content}
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <motion.div
                    className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full ${testimonial.accent}/15 text-sm font-bold`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span className="text-solidy-blue">{testimonial.name.charAt(0)}</span>
                  </motion.div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.8 + 0.08 * j }}
                      >
                        <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-solidy-yellow text-solidy-yellow" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
