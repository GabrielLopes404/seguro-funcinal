"use client"

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Star, Quote } from "lucide-react"

function AnimatedCounter({
  target,
  suffix = "",
  decimals = 0,
}: {
  target: number
  suffix?: string
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
      {display}{suffix}
    </span>
  )
}

const stats = [
  { value: 50000, suffix: "+", label: "Clientes protegidos", color: "text-solidy-blue", bg: "bg-solidy-blue/10", border: "border-solidy-blue/20" },
  { value: 98, suffix: "%", label: "Satisfacao dos clientes", color: "text-solidy-yellow-dark", bg: "bg-solidy-yellow/10", border: "border-solidy-yellow/20" },
  { value: 15000, suffix: "+", label: "Sinistros resolvidos", color: "text-solidy-green", bg: "bg-solidy-green/10", border: "border-solidy-green/20" },
  { value: 4.9, suffix: "", label: "Avaliacao media", color: "text-solidy-blue", bg: "bg-solidy-blue/10", border: "border-solidy-blue/20", decimals: 1 },
]

const testimonials = [
  {
    name: "Maria Silva",
    role: "Empresaria",
    content:
      "A Solidy mudou minha experiencia com seguro auto. Processo rapido, atendimento excelente e preco justo. Recomendo demais!",
    rating: 5,
    color: "bg-solidy-yellow/15 text-solidy-yellow-dark",
  },
  {
    name: "Carlos Oliveira",
    role: "Engenheiro",
    content:
      "Tive um sinistro e fui atendido em menos de 20 minutos. O carro reserva chegou no mesmo dia. Servico impecavel.",
    rating: 5,
    color: "bg-solidy-blue/15 text-solidy-blue",
  },
  {
    name: "Ana Santos",
    role: "Medica",
    content:
      "Cotei em varias seguradoras e a Solidy ofereceu o melhor custo-beneficio. O processo digital e muito pratico.",
    rating: 5,
    color: "bg-solidy-green/15 text-solidy-green",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function SocialProof() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="depoimentos" className="relative bg-background py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 h-80 w-80 rounded-full bg-solidy-blue/5 blur-3xl"
          animate={{ scale: [1, 1.15, 1], x: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-solidy-yellow/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section header */}
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
            className="inline-flex items-center gap-2 rounded-full bg-solidy-blue/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-solidy-blue border border-solidy-blue/20"
          >
            Numeros que falam
          </motion.span>
        </motion.div>

        {/* Stats counters */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05, y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`flex flex-col items-center rounded-2xl border ${stat.border} ${stat.bg} p-4 text-center sm:p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/5`}
              >
                <p className={`text-3xl font-extrabold ${stat.color} sm:text-4xl lg:text-5xl`}>
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    decimals={(stat as { decimals?: number }).decimals ?? 0}
                  />
                </p>
                <p className="mt-1.5 text-xs text-muted-foreground font-medium sm:text-sm sm:mt-2">{stat.label}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
            O que nossos clientes dizem
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-10 sm:mt-12 grid gap-4 sm:gap-6 md:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.name} variants={itemVariants}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative h-full rounded-2xl border border-border bg-card p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/5"
              >
                <Quote className="mb-3 h-7 w-7 text-solidy-yellow/30 sm:h-8 sm:w-8 sm:mb-4" />
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {testimonial.content}
                </p>
                <div className="mt-5 flex items-center gap-3 sm:mt-6">
                  <motion.div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${testimonial.color} text-sm font-bold`}
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {testimonial.name.charAt(0)}
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="flex gap-0.5 shrink-0">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-solidy-yellow text-solidy-yellow sm:h-4 sm:w-4" />
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
