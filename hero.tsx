"use client"

import { motion } from "framer-motion"
import { ArrowRight, PhoneCall, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

function FloatingParticle({ delay, x, y }: { delay: number; x: string; y: string }) {
  return (
    <motion.div
      className="absolute h-2 w-2 rounded-full bg-solidy-green/20"
      style={{ left: x, top: y }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.2, 0.6, 0.2],
        scale: [1, 1.5, 1],
      }}
      transition={{ repeat: Infinity, duration: 4, delay, ease: "easeInOut" }}
    />
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-solidy-green/5"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-solidy-yellow/5"
          animate={{ scale: [1, 1.15, 1], rotate: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <FloatingParticle delay={0} x="10%" y="30%" />
        <FloatingParticle delay={1} x="80%" y="20%" />
        <FloatingParticle delay={2} x="60%" y="70%" />
        <FloatingParticle delay={1.5} x="25%" y="80%" />
        <FloatingParticle delay={0.5} x="90%" y="60%" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 pt-28 pb-16 lg:flex-row lg:gap-16 lg:pt-0 lg:pb-0">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance"
          >
            {"Protecao Total para Seu Carro. "}
            <motion.span
              className="inline-block text-solidy-green"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              Tranquilidade em Cada Quilometro.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:text-xl"
          >
            Seguro auto inteligente, rapido e sem complicacao. Simule em segundos
            e dirija com a tranquilidade que voce merece.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <Button
              size="lg"
              className="bg-solidy-green text-background hover:bg-solidy-green-hover animate-pulse-glow px-8 py-6 text-base font-semibold"
              asChild
            >
              <a href="#simulacao">
                Simular Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-solidy-green text-solidy-green hover:bg-solidy-green hover:text-background px-8 py-6 text-base transition-all duration-300"
              asChild
            >
              <a href="#simulacao">
                <PhoneCall className="mr-2 h-5 w-5" />
                Fale com Especialista
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex items-center justify-center gap-8 lg:justify-start"
          >
            {[
              { label: "Clientes protegidos", value: "50k+" },
              { label: "Avaliacao media", value: "4.9" },
              { label: "Assistencia total", value: "24h" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
              >
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                {i < 2 && (
                  <div className="absolute right-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-border lg:block" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex-1"
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-4 rounded-3xl bg-solidy-green/10 blur-2xl"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
            <Image
              src="/images/hero-car.jpg"
              alt="Carro protegido com seguro Solidy"
              width={700}
              height={500}
              className="relative rounded-2xl object-cover shadow-2xl"
              priority
            />

            {/* Floating card - Shield */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-6 -left-6 rounded-xl border border-border bg-background p-4 shadow-lg"
            >
              <motion.div
                className="flex items-center gap-3"
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-solidy-green/10">
                  <Shield className="h-5 w-5 text-solidy-green" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Protecao ativada</p>
                  <p className="text-xs text-muted-foreground">Cobertura completa</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating card - Zap */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -right-4 top-8 rounded-xl border border-border bg-background p-3 shadow-lg"
            >
              <motion.div
                className="flex items-center gap-2"
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, delay: 0.5, ease: "easeInOut" }}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-solidy-yellow/10">
                  <Zap className="h-4 w-4 text-solidy-yellow" />
                </div>
                <p className="text-xs font-semibold text-foreground">Cotacao rapida</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/30 pt-2"
        >
          <div className="h-2 w-1 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
