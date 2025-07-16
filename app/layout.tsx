import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

const inter = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '700'], // optional
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Global School Portal - Complete School Management Solution",
  description:
    "Seamlessly uniting school management, coding education, and student-parent communities with Global School Portal. Comprehensive CRM, biometric attendance, PydragAnd coding platform, and GOGETHER community features.",
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
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
