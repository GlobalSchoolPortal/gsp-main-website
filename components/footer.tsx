"use client"

import { Globe } from "lucide-react"
import Link from "next/link"

interface FooterProps {
    onContactClick: () => void
}

export default function Footer({ onContactClick }: FooterProps) {
    return (
        <footer className="bg-gray-900 text-white py-12 px-4">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <Globe className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-bold">Global School Portal</span>
                        </div>
                        <p className="text-gray-400 text-sm">Transforming education through innovative technology solutions.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link href="#features" className="hover:text-white transition-colors">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#modules" className="hover:text-white transition-colors">
                                    Modules
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Support</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <button
                                    onClick={onContactClick}
                                    className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                                >
                                    Contact Us
                                </button>
                            </li>
                            <li>
                                <span>Documentation</span>
                            </li>
                            <li>
                                <span>Training</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <a
                                    href="mailto:support@globalschoolportal.com"
                                    className="hover:text-blue-400 transition-colors cursor-pointer"
                                >
                                    Email Us
                                </a>
                            </li>
                            <li>
                                <button
                                    onClick={onContactClick}
                                    className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                                >
                                    Sales & Demo Requests
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                    <p>© 2025 Global School Portal. All rights reserved. | One Above All Pvt. Ltd.</p>
                </div>
            </div>
        </footer>
    )
}
