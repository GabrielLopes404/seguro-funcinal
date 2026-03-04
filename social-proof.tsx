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
  { value: 50000, suffix: "+", label: "Clientes protegidos", color: "text-solidy-green" },
  { value: 98, suffix: "%", label: "Satisfacao dos clientes", color: "text-solidy-yellow" },
  { value: 15000, suffix: "+", label: "Sinistros resolvidos", color: "text-solidy-blue" },
  { value: 4.9, suffix: "", label: "Avaliacao media", color: "text-solidy-green", decimals: 1 },
]

const testimonials = [
  {
    name: "Maria Silva",
    role: "Empresaria",
    content:
      "A Solidy mudou minha experiencia com seguro auto. Processo rapido, atendimento excelente e preco justo. Recomendo demais!",
    rating: 5,
  },
  {
    name: "Carlos Oliveira",
    role: "Engenheiro",
    content:
      "Tive um sinistro e fui atendido em menos de 20 minutos. O carro reserva chegou no mesmo dia. Servico impecavel.",
    rating: 5,
  },
  {
    name: "Ana Santos",
    role: "Medica",
    content:
      "Cotei em varias seguradoras e a Solidy ofereceu o melhor custo-beneficio. O processo digital e muito pratico.",
    rating: 5,
  },
]

export function SocialProof() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="depoimentos" className="relative bg-background py-24 lg:py-32 overflow-hidden">
      {/* Animated bg accents */}
      <motion.div
        className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-solidy-green/5"
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Stats counters - big animated numbers */}
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
            className="inline-block rounded-full bg-solidy-blue/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-solidy-blue"
          >
            Numeros que falam
          </motion.span>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-xl lg:p-8"
              >
                <motion.p
                  className={`text-4xl font-bold ${stat.color} lg:text-5xl`}
                  initial={{ scale: 0.5 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: 0.2 + 0.15 * i,
                  }}
                >
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    decimals={(stat as { decimals?: number }).decimals ?? 0}
                  />
                </motion.p>
                <p className="mt-2 text-sm text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.3 + 0.15 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative h-full rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-xl"
              >
                <Quote className="mb-4 h-8 w-8 text-solidy-yellow/30" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {testimonial.content}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <motion.div
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-solidy-green/10 text-sm font-bold text-solidy-green"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {testimonial.name.charAt(0)}
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
                        transition={{ delay: 0.6 + 0.1 * j + 0.15 * i }}
                      >
                        <Star className="h-4 w-4 fill-solidy-yellow text-solidy-yellow" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
