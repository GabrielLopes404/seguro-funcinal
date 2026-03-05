"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const footerLinks = {
  Produto: ["Seguro Auto", "Assistencia 24h", "Carro Reserva", "Cotacao Online"],
  Empresa: ["Sobre Nos", "Carreiras", "Blog", "Imprensa"],
  Suporte: ["Central de Ajuda", "Fale Conosco", "FAQ", "Politica de Privacidade"],
}

export function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <footer ref={ref} className="border-t border-border bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 sm:gap-12 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="col-span-2 md:col-span-1"
          >
            <a href="#" className="mb-4 flex items-center gap-2.5 group">
              <Image
                src="/images/solidy-logo.png"
                alt="Solidy"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-foreground group-hover:text-solidy-blue transition-colors duration-300">
                Solidy
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Seguro auto inteligente, rapido e sem complicacao. Protecao completa para o seu carro.
            </p>
          </motion.div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
            >
              <h4 className="mb-3 sm:mb-4 text-sm font-semibold text-foreground">
                {title}
              </h4>
              <ul className="flex flex-col gap-2.5 sm:gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-solidy-blue"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:pt-8 md:flex-row"
        >
          <p className="text-xs sm:text-sm text-muted-foreground">
            {"© 2026 Solidy. Todos os direitos reservados."}
          </p>
          <div className="flex gap-4 sm:gap-6">
            {["Termos de Uso", "Privacidade", "Cookies"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs sm:text-sm text-muted-foreground transition-colors hover:text-solidy-blue"
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
