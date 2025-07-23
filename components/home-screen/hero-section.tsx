"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface HeroSectionProps {
    onRequestDemo: () => void
}

export default function HeroSection({ onRequestDemo }: HeroSectionProps) {
    return (
        <section className="py-4 sm:py-6 lg:py-8 px-4">
            <div className="container md:py-14 lg:py-28 mx-auto px-4 max-w-7xl text-center">
                <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100 text-xs sm:text-sm">
                    Unified Education Suite: ERP +CRM · Visual Python · Community.
                </Badge>
                <span className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          <br />
          Global School Portal
        </span>
                <h1 className="font-arial text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                    Effortless Management. Engaged Parents. Empowered Learners.
                    <br />
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
                    A unified platform that Simplify Administration, Empower Learning, and Connect Communities — with Smart Tools,
                    Drag-and-Drop Coding, and Seamless Communication platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                    <Button size="lg" className="w-full sm:w-auto" onClick={onRequestDemo}>
                        Request Demo
                    </Button>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Link href="#features" className="group flex flex-col items-center gap-3 p-6 transition-all duration-500">
          <span className="text-blue-600 group-hover:text-blue-700 animate-bounce group-hover:animate-pulse transition-colors duration-300">
            Explore Features
          </span>
                    <div className="relative">
                        <svg
                            className="w-8 h-8 text-blue-600 group-hover:text-blue-700 animate-bounce group-hover:animate-pulse transition-colors duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M6 9l6 6 6-6"
                                className="drop-shadow-sm animate-bounce"
                            />
                        </svg>
                        <div className="absolute inset-0 w-8 h-8 bg-blue-400/20 rounded-full blur-md group-hover:bg-blue-500/30 transition-all duration-300 animate-pulse"></div>
                    </div>
                </Link>
            </div>
        </section>
    )
}
