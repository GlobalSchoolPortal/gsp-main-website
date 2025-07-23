"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface HeaderProps {
    onContactClick: () => void
}

export default function Header({ onContactClick }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleLinkClick = (href: string) => {
        setIsMenuOpen(false)
        setTimeout(() => {
            const element = document.querySelector(href)
            if (element) {
                const headerHeight = 80
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerHeight
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                })
            }
        }, 150)
    }

    return (
        <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <Globe className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-lg sm:text-xl font-bold text-gray-900">Global School Portal</h1>
                        </div>
                    </div>
                    <nav className="flex items-center space-x-3 sm:space-x-6">
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-6">
                            <Link
                                href="#features"
                                className="text-sm sm:text-base text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                Features
                            </Link>
                            <Link
                                href="#modules"
                                className="text-sm sm:text-base text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                Modules
                            </Link>
                            <button
                                onClick={onContactClick}
                                className="text-sm sm:text-base text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                Contact
                            </button>
                        </div>
                        {/* Mobile Navigation */}
                        <div className="md:hidden">
                            <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="sm" className="p-2">
                                        <Menu className="w-5 h-5" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-48">
                                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                        <button onClick={() => handleLinkClick("#features")} className="w-full text-left cursor-pointer">
                                            Features
                                        </button>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                        <button onClick={() => handleLinkClick("#modules")} className="w-full text-left cursor-pointer">
                                            Modules
                                        </button>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                        <button
                                            onClick={() => {
                                                setIsMenuOpen(false)
                                                onContactClick()
                                            }}
                                            className="w-full text-left cursor-pointer"
                                        >
                                            Contact
                                        </button>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
