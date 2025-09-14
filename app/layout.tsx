import type React from "react"
import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Algym247 - Fitness para todos. 24/7",
  description:
    "Tu mejor versión, a cualquier hora. Gimnasios modernos con acceso 24/7, equipos de última generación y clases incluidas.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${workSans.variable} ${GeistMono.variable} antialiased`}>
        <LanguageProvider>
          <Suspense fallback={<div>Loading...</div>}>
            {children}
            <Analytics />
          </Suspense>
        </LanguageProvider>
      </body>
    </html>
  )
}
