"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Zap, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

function FloatingOrb({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      animate={{
        y: [0, -25, 0],
        x: [0, 10, 0],
        scale: [1, 1.08, 1],
        opacity: [0.4, 0.7, 0.4],
      }}
      transition={{ repeat: Infinity, duration: 6 + delay, delay, ease: "easeInOut" }}
    />
  )
}

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-background">
      {/* Animated background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <FloatingOrb className="h-[500px] w-[500px] -right-32 -top-32 bg-solidy-yellow/8 blur-3xl" delay={0} />
        <FloatingOrb className="h-[400px] w-[400px] -left-20 bottom-0 bg-solidy-blue/8 blur-3xl" delay={2} />
        <FloatingOrb className="h-[300px] w-[300px] right-1/4 bottom-1/4 bg-solidy-green/5 blur-2xl" delay={1} />
        
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 pt-24 pb-12 sm:px-6 sm:pt-28 sm:pb-16 lg:flex-row lg:gap-16 lg:pt-0 lg:pb-0">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-solidy-yellow/15 px-4 py-1.5 text-sm font-semibold text-solidy-yellow-dark border border-solidy-yellow/20">
              <span className="flex h-2 w-2 rounded-full bg-solidy-yellow animate-pulse" />
              Seguro auto inteligente
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl text-balance"
          >
            {"Protecao Total para Seu Carro. "}
            <motion.span
              className="inline-block text-solidy-blue"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {"Tranquilidade "}
            </motion.span>
            <motion.span
              className="inline-block text-solidy-yellow-dark"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              em Cada Quilometro.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl mx-auto lg:mx-0"
          >
            Seguro auto inteligente, rapido e sem complicacao. Simule em segundos
            e dirija com a tranquilidade que voce merece.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <Button
              size="lg"
              className="bg-solidy-yellow text-foreground hover:bg-solidy-yellow-dark animate-pulse-glow w-full sm:w-auto px-8 py-6 text-base font-bold shadow-xl shadow-solidy-yellow/20 transition-all duration-300 hover:shadow-2xl hover:shadow-solidy-yellow/30 hover:scale-[1.02]"
              asChild
            >
              <a href="#simulacao">
                Simular Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex items-center justify-center gap-6 sm:gap-10 lg:justify-start"
          >
            {[
              { label: "Clientes protegidos", value: "50k+", color: "text-solidy-blue" },
              { label: "Avaliacao media", value: "4.9", color: "text-solidy-yellow-dark" },
              { label: "Assistencia total", value: "24h", color: "text-solidy-green" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.12, duration: 0.5 }}
              >
                <p className={`text-xl font-extrabold sm:text-2xl ${stat.color}`}>{stat.value}</p>
                <p className="text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex-1 w-full max-w-lg lg:max-w-none"
        >
          <div className="relative">
            {/* Glow behind image */}
            <motion.div
              className="absolute -inset-6 rounded-3xl bg-solidy-yellow/10 blur-3xl"
              animate={{ opacity: [0.3, 0.5, 0.3], scale: [0.98, 1.02, 0.98] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />
            <Image
              src="/images/hero-car.jpg"
              alt="Carro protegido com seguro Solidy"
              width={700}
              height={500}
              className="relative rounded-2xl sm:rounded-3xl object-cover shadow-2xl"
              priority
            />

            {/* Floating card - Shield */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 rounded-xl border border-border bg-background/95 backdrop-blur-xl p-3 sm:p-4 shadow-xl"
            >
              <motion.div
                className="flex items-center gap-3"
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              >
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-solidy-blue/15">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-solidy-blue" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground">Protecao ativada</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Cobertura completa</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating card - Zap */}
            <motion.div
              initial={{ opacity: 0, y: -30, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="absolute -right-1 top-4 sm:-right-4 sm:top-8 rounded-xl border border-border bg-background/95 backdrop-blur-xl p-2.5 sm:p-3 shadow-xl"
            >
              <motion.div
                className="flex items-center gap-2"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 0.5, ease: "easeInOut" }}
              >
                <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-solidy-yellow/15">
                  <Zap className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-solidy-yellow-dark" />
                </div>
                <p className="text-[10px] sm:text-xs font-semibold text-foreground">Cotacao rapida</p>
              </motion.div>
            </motion.div>

            {/* Floating card - Clock */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 1.4 }}
              className="absolute top-1/2 -right-2 sm:-right-8 -translate-y-1/2 hidden sm:block rounded-xl border border-border bg-background/95 backdrop-blur-xl p-3 shadow-xl"
            >
              <motion.div
                className="flex items-center gap-2"
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1, ease: "easeInOut" }}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-solidy-green/15">
                  <Clock className="h-4 w-4 text-solidy-green" />
                </div>
                <p className="text-xs font-semibold text-foreground">24h online</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <motion.span className="text-xs text-muted-foreground/60 font-medium tracking-wider uppercase">
          Descubra mais
        </motion.span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/20 pt-2"
        >
          <motion.div
            className="h-2 w-1 rounded-full bg-solidy-yellow"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
