"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CTASectionProps {
    onRequestDemo: () => void
}

export default function CTASection({ onRequestDemo }: CTASectionProps) {
    return (
        <section className="py-16 sm:py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="container mx-auto px-4 max-w-7xl text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">
                    Ready to Transform Your School?
                </h2>
                <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                    Join hundreds of forward-thinking schools already using GlobalSchoolPortal to simplify operations, boost
                    efficiency, and elevate the learning experience.
                </p>
                <Button size="lg" variant="secondary" className="w-full sm:w-auto mx-4" onClick={onRequestDemo}>
                    Power Up Your Campus! <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
            </div>
        </section>
    )
}
