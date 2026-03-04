"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight, Loader2 } from "lucide-react"
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
      className="relative bg-muted/50 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-solidy-blue">
              Simulacao gratuita
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Receba sua cotacao em 1 minuto
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Preencha seus dados e receba propostas personalizadas das melhores
              seguradoras do mercado. Sem compromisso.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-solidy-green/10">
                  <svg className="h-4 w-4 text-solidy-green" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground">
                  Comparativo com as melhores seguradoras
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-solidy-green/10">
                  <svg className="h-4 w-4 text-solidy-green" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground">
                  Sem burocracia, sem compromisso
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-solidy-green/10">
                  <svg className="h-4 w-4 text-solidy-green" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground">
                  Resposta em ate 1 minuto
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-8 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-solidy-green/10">
                    <svg className="h-8 w-8 text-solidy-green" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-foreground">
                    Simulacao enviada!
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Em breve, um especialista entrara em contato com as melhores
                    propostas para voce.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      Nome completo
                    </Label>
                    <Input
                      id="name"
                      placeholder="Seu nome"
                      required
                      className="mt-1.5 h-12 border-border bg-background transition-all focus:border-solidy-blue focus:ring-solidy-blue/20"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Telefone / WhatsApp
                    </Label>
                    <Input
                      id="phone"
                      placeholder="(00) 00000-0000"
                      required
                      className="mt-1.5 h-12 border-border bg-background transition-all focus:border-solidy-blue focus:ring-solidy-blue/20"
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
                      className="mt-1.5 h-12 border-border bg-background transition-all focus:border-solidy-blue focus:ring-solidy-blue/20"
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-foreground">
                      Ano do veiculo
                    </Label>
                    <Select required>
                      <SelectTrigger className="mt-1.5 h-12 border-border bg-background">
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
                    className="mt-2 h-14 bg-solidy-green text-background hover:bg-solidy-green-hover text-base font-semibold animate-pulse-glow transition-all duration-300"
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
