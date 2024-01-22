import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shushant Kumar',
  description: 'Shushant Kumar | Product Designer',
  metadataBase: new URL('https://i.ibb.co'),
  openGraph: {
    images: '/n7yLwT5/OGimage.png'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
