import { Shield } from "lucide-react"

const footerLinks = {
  Produto: ["Seguro Auto", "Assistência 24h", "Carro Reserva", "Cotação Online"],
  Empresa: ["Sobre Nós", "Carreiras", "Blog", "Imprensa"],
  Suporte: ["Central de Ajuda", "Fale Conosco", "FAQ", "Política de Privacidade"],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#" className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-solidy-blue">
                <Shield className="h-5 w-5 text-background" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Solidy
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {
                "Seguro auto inteligente, rápido e sem complicação. Proteção completa para o seu carro."
              }
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-semibold text-foreground">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            {"© 2026 Solidy. Todos os direitos reservados."}
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {"Termos de Uso"}
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {"Privacidade"}
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {"Cookies"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
