"use client"

import Header from "@/components/header"
import { useState } from "react"
import {
    BenefitsSection,
    ContactDialog,
    CTASection,
    FeaturesSection,
    HeroSection,
    ModulesSection
} from "@/components/home-screen";
import Footer from "@/components/footer";


export default function HomePage() {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleContactClick = () => {
        setIsDialogOpen(true)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-x-hidden">
            <Header onContactClick={handleContactClick} />
            <HeroSection onRequestDemo={handleContactClick} />
            <FeaturesSection />
            <ModulesSection />
            <BenefitsSection />
            <CTASection onRequestDemo={handleContactClick} />
            <Footer onContactClick={handleContactClick} />
            <ContactDialog isOpen={isDialogOpen} onOpenChange={setIsDialogOpen} />
        </div>
    )
}
