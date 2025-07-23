import type React from "react"
import type {Metadata} from "next"
import {Roboto} from "next/font/google"
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
    authors: [{name: "Global School Portal Team"}],
    creator: "One Above All Pvt. Ltd.",
    publisher: "Global School Portal",
    robots: "index, follow",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.globalschoolportal.com",
        title: "Global School Portal - Unified Education Management System",
        description:
            "Transform your school with our comprehensive ERP+CRM platform. Streamline administration, engage parents, and empower learners.",
        siteName: "Global School Portal",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Global School Portal - Education Management System",
            },
        ],
    },
    // twitter: {
    //   card: "summary_large_image",
    //   title: "Global School Portal - Unified Education Management System",
    //   description: "Transform your school with our comprehensive ERP+CRM platform.",
    //   images: ["/twitter-image.jpg"],
    // },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <link rel="canonical" href="https://www.globalschoolportal.com"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
        </head>
        <body className={inter.variable}>{children}</body>
        </html>
    )
}
