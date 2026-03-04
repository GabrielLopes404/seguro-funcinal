import Image from "next/image"

const footerLinks = {
  Produto: ["Seguro Auto", "Assistencia 24h", "Carro Reserva", "Cotacao Online"],
  Empresa: ["Sobre Nos", "Carreiras", "Blog", "Imprensa"],
  Suporte: ["Central de Ajuda", "Fale Conosco", "FAQ", "Politica de Privacidade"],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 sm:gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#" className="mb-4 flex items-center gap-2">
              <Image
                src="/images/logo-new.png"
                alt="Solidy Logo"
                width={36}
                height={36}
                className="h-9 w-9 rounded-lg object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-foreground">
                Solidy
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {
                "Seguro auto inteligente, rapido e sem complicacao. Protecao completa para o seu carro."
              }
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-3 sm:mb-4 text-sm font-semibold text-foreground">
                {title}
              </h4>
              <ul className="flex flex-col gap-2 sm:gap-3">
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
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:pt-8 md:flex-row">
          <p className="text-xs sm:text-sm text-muted-foreground">
            {"© 2026 Solidy. Todos os direitos reservados."}
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a
              href="#"
              className="text-xs sm:text-sm text-muted-foreground transition-colors hover:text-solidy-blue"
            >
              {"Termos de Uso"}
            </a>
            <a
              href="#"
              className="text-xs sm:text-sm text-muted-foreground transition-colors hover:text-solidy-blue"
            >
              {"Privacidade"}
            </a>
            <a
              href="#"
              className="text-xs sm:text-sm text-muted-foreground transition-colors hover:text-solidy-blue"
            >
              {"Cookies"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
