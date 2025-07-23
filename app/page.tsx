"use client"

import Header from "@/components/header"
import {useState} from "react"
import {
    BenefitsSection,
    ContactDialog,
    CTASection,
    FeaturesSection,
    HeroSection,
    ModulesSection
} from "@/components/home-screen";
import Footer from "@/components/footer";
import StructuredData from "@/structured-data";

export default function HomePage() {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleContactClick = () => {
        setIsDialogOpen(true)
    }

    return (
        <>
            <StructuredData/>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-x-hidden">
                {/* Add semantic HTML structure */}
                <Header onContactClick={handleContactClick}/>
                <main>
                    <HeroSection onRequestDemo={handleContactClick}/>
                    <FeaturesSection/>
                    <ModulesSection/>
                    <BenefitsSection/>
                    <CTASection onRequestDemo={handleContactClick}/>
                </main>
                <Footer onContactClick={handleContactClick}/>
                <ContactDialog isOpen={isDialogOpen} onOpenChange={setIsDialogOpen}/>
            </div>
        </>
    )
}

