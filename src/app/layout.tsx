import ContextProvider from '@/context/Context'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calculador de rotas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  )
}
