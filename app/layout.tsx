import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Motekso Device Repair',
  description: 'Motekso Device Repair based in Camborne, Cornwall',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Motekso" />
      </head>
      <body>{children}</body>
    </html>
  )
}
