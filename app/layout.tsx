import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Global School Portal - Complete School Management Solution",
  description:
    "Transform your school with Global School Portal. Comprehensive CRM, biometric attendance, PydragAnd coding platform, and GOGETHER community features.",
  keywords: "school management, CRM, biometric attendance, coding education, school portal, education technology",
    generator: 'v0.dev'
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
