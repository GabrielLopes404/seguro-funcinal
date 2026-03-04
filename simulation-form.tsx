"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight, Loader2, CheckCircle2, Shield, Zap, FileCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const currentYear = new Date().getFullYear()
const years = Array.from({ length: 30 }, (_, i) => currentYear - i)

const checkItems = [
  { icon: Shield, text: "Comparativo com as melhores seguradoras" },
  { icon: FileCheck, text: "Sem burocracia, sem compromisso" },
  { icon: Zap, text: "Resposta em ate 1 minuto" },
]

export function SimulationForm() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 2000)
  }

  return (
    <section
      id="simulacao"
      className="relative bg-muted/50 py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background accents */}
      <motion.div
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-solidy-yellow/5"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-solidy-blue/5"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2">
          {/* Left content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-solidy-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-solidy-blue border border-solidy-blue/20">
              Simulacao gratuita
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-5xl text-balance">
              Receba sua cotacao em 1 minuto
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Preencha seus dados e receba propostas personalizadas das melhores
              seguradoras do mercado. Sem compromisso.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4">
              {checkItems.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-solidy-yellow/15">
                    <item.icon className="h-4 w-4 text-solidy-yellow" />
                  </div>
                  <p className="text-sm text-muted-foreground sm:text-base">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl border border-border bg-card p-5 sm:p-8 shadow-xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-6 sm:py-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-solidy-green/15"
                  >
                    <CheckCircle2 className="h-8 w-8 text-solidy-green" />
                  </motion.div>
                  <h3 className="mt-4 text-xl font-bold text-foreground">
                    Simulacao enviada!
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                    Em breve, um especialista entrara em contato com as melhores
                    propostas para voce.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      Nome completo
                    </Label>
                    <Input
                      id="name"
                      placeholder="Seu nome"
                      required
                      className="mt-1.5 h-11 sm:h-12 border-border bg-background transition-all focus:border-solidy-blue focus:ring-solidy-blue/20"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                      {"Telefone / WhatsApp"}
                    </Label>
                    <Input
                      id="phone"
                      placeholder="(00) 00000-0000"
                      required
                      className="mt-1.5 h-11 sm:h-12 border-border bg-background transition-all focus:border-solidy-blue focus:ring-solidy-blue/20"
                    />
                  </div>

                  <div>
                    <Label htmlFor="model" className="text-sm font-medium text-foreground">
                      Modelo do carro
                    </Label>
                    <Input
                      id="model"
                      placeholder="Ex: Honda Civic, Toyota Corolla..."
                      required
                      className="mt-1.5 h-11 sm:h-12 border-border bg-background transition-all focus:border-solidy-blue focus:ring-solidy-blue/20"
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-foreground">
                      Ano do veiculo
                    </Label>
                    <Select required>
                      <SelectTrigger className="mt-1.5 h-11 sm:h-12 border-border bg-background">
                        <SelectValue placeholder="Selecione o ano" />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map((year) => (
                          <SelectItem key={year} value={String(year)}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="mt-2 h-12 sm:h-14 bg-solidy-yellow text-solidy-blue hover:bg-solidy-yellow-hover text-sm sm:text-base font-bold animate-pulse-glow transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Receber Cotacao em 1 Minuto
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    Ao enviar, voce concorda com nossa Politica de Privacidade.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
