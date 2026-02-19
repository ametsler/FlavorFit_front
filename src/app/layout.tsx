import './globals.css'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'

import { Provider } from '@/app/providers/Provider'

import { SITE_NAME } from '@/constants/seo.constants'

const spaceMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: {
    absolute: SITE_NAME,
    template: `%s * ${SITE_NAME}`
  },
  description: 'Сервис с рецептами'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${spaceMono.variable} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
