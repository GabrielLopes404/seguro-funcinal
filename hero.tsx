"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Shield, Zap, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRef } from "react"

function FloatingParticle({ delay, x, y, size = 2 }: { delay: number; x: string; y: string; size?: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-solidy-yellow/30"
      style={{ left: x, top: y, width: size * 4, height: size * 4 }}
      animate={{
        y: [0, -40, 0],
        opacity: [0.15, 0.5, 0.15],
        scale: [1, 1.8, 1],
      }}
      transition={{ repeat: Infinity, duration: 5 + delay, delay, ease: "easeInOut" }}
    />
  )
}

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const fadeUpChild = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Animated background with parallax */}
      <motion.div className="pointer-events-none absolute inset-0" style={{ y: bgY }}>
        <motion.div
          className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-solidy-yellow/8"
          animate={{ scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-20 bottom-0 h-[500px] w-[500px] rounded-full bg-solidy-blue/5"
          animate={{ scale: [1, 1.2, 1], rotate: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 h-[300px] w-[300px] rounded-full bg-solidy-green/5"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <FloatingParticle delay={0} x="10%" y="30%" size={2} />
        <FloatingParticle delay={1.2} x="80%" y="20%" size={3} />
        <FloatingParticle delay={2.5} x="60%" y="70%" size={2} />
        <FloatingParticle delay={1.8} x="25%" y="80%" size={1.5} />
        <FloatingParticle delay={0.7} x="90%" y="55%" size={2.5} />
        <FloatingParticle delay={3} x="45%" y="15%" size={1.5} />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-4 pt-24 pb-12 sm:px-6 sm:pt-28 sm:pb-16 lg:flex-row lg:gap-16 lg:pt-0 lg:pb-0"
      >
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUpChild}>
            <span className="inline-block rounded-full bg-solidy-yellow/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-solidy-blue border border-solidy-yellow/30">
              Seguro Auto Inteligente
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUpChild}
            className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl text-balance"
          >
            {"Protecao Total para Seu Carro. "}
            <motion.span
              className="inline-block text-solidy-blue"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Tranquilidade em Cada Quilometro.
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fadeUpChild}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl mx-auto lg:mx-0"
          >
            Seguro auto inteligente, rapido e sem complicacao. Simule em segundos
            e dirija com a tranquilidade que voce merece.
          </motion.p>

          <motion.div
            variants={fadeUpChild}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4 lg:justify-start"
          >
            <Button
              size="lg"
              className="bg-solidy-yellow text-solidy-blue hover:bg-solidy-yellow-hover animate-pulse-glow px-8 py-6 text-base font-bold w-full sm:w-auto shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="#simulacao">
                Simular Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={fadeUpChild}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:justify-start"
          >
            {[
              { icon: CheckCircle2, label: "100% Digital" },
              { icon: Shield, label: "Cobertura completa" },
              { icon: Zap, label: "Cotacao em 60s" },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <badge.icon className="h-4 w-4 text-solidy-green" />
                <span>{badge.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUpChild}
            className="mt-8 flex items-center justify-center gap-6 sm:gap-10 lg:justify-start"
          >
            {[
              { label: "Clientes protegidos", value: "50k+" },
              { label: "Avaliacao media", value: "4.9" },
              { label: "Assistencia total", value: "24h" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center relative"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.15, duration: 0.5 }}
              >
                <p className="text-xl font-bold text-foreground sm:text-2xl">{stat.value}</p>
                <p className="text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex-1 w-full max-w-lg lg:max-w-none"
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-4 rounded-3xl bg-solidy-yellow/10 blur-2xl"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
            <Image
              src="/images/hero-car.jpg"
              alt="Carro protegido com seguro Solidy"
              width={700}
              height={500}
              className="relative rounded-2xl object-cover shadow-2xl w-full"
              priority
            />

            {/* Floating card - Shield */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 rounded-xl border border-border bg-background/95 backdrop-blur-sm p-3 sm:p-4 shadow-xl"
            >
              <motion.div
                className="flex items-center gap-2 sm:gap-3"
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-solidy-green/15">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-solidy-green" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground">Protecao ativada</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Cobertura completa</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating card - Zap */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="absolute -right-2 top-4 sm:-right-4 sm:top-8 rounded-xl border border-border bg-background/95 backdrop-blur-sm p-2.5 sm:p-3 shadow-xl"
            >
              <motion.div
                className="flex items-center gap-2"
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, delay: 0.5, ease: "easeInOut" }}
              >
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-solidy-yellow/15">
                  <Zap className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-solidy-yellow" />
                </div>
                <p className="text-[10px] sm:text-xs font-semibold text-foreground">Cotacao rapida</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-solidy-blue/30 pt-2"
        >
          <div className="h-2 w-1 rounded-full bg-solidy-blue/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
