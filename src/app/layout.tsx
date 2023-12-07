import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { LightDarkProvider } from './theme/LightDarkProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js Tailwind Components',
  description: 'Learn Next.js Tailwind By Components',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <LightDarkProvider>
      <Header />
      {children}
      <Footer />
      </LightDarkProvider>
      </body>
    </html>
  )
}
