import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Solidy | Seguro Auto Inteligente',
  description:
    'Protecao total para seu carro. Seguro auto inteligente, rapido e sem complicacao. Simule agora e receba sua cotacao em 1 minuto.',
  keywords: [
    'seguro auto',
    'seguro carro',
    'protecao veicular',
    'seguro online',
    'cotacao seguro',
    'Solidy',
  ],
  openGraph: {
    title: 'Solidy | Seguro Auto Inteligente',
    description:
      'Protecao total para seu carro. Seguro auto inteligente, rapido e sem complicacao.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Solidy',
  },
}

export const viewport = {
  themeColor: '#F5C518',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
