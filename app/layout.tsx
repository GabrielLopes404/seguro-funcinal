import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Solidy | Seguro Auto Inteligente',
  description:
    'Proteção total para seu carro. Seguro auto inteligente, rápido e sem complicação. Simule agora e receba sua cotação em 1 minuto.',
  keywords: [
    'seguro auto',
    'seguro carro',
    'proteção veicular',
    'seguro online',
    'cotação seguro',
    'Solidy',
  ],
  openGraph: {
    title: 'Solidy | Seguro Auto Inteligente',
    description:
      'Proteção total para seu carro. Seguro auto inteligente, rápido e sem complicação.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Solidy',
  },
}

export const viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
