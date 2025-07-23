"use client"

import FlipCards from "@/components/home-screen/flip-card"
import { Fingerprint, Code, MessageSquare, ExternalLink } from "lucide-react"

const cards = [
    {
        icon: Fingerprint,
        iconColor: "text-blue-600",
        bgColor: "bg-blue-100",
        title: "Unified ERP & CRM",
        shortDescription:
            "Seamlessly manage school operations and foster real-time parent-teacher connection—all in one powerful platform.",
        fullDescription:
            "From admissions and attendance to fee management, communication, and reporting—GlobalSchoolPortal brings every stakeholder onto a single, intuitive dashboard designed to enhance productivity, transparency, and engagement.",
        link: "/#modules",
    },
    {
        icon: Code,
        iconColor: "text-green-600",
        bgColor: "bg-green-100",
        title: "PyDrag Coding Platform",
        shortDescription:
            "PyDrag is a visual programming interactive environment that lets students build logical workflows using drag-and-drop blocks.",
        fullDescription:
            "Designed for beginners yet powerful enough for advanced users, PyDrag simplifies Python learning through interactive coding, real-time output, and AI-powered assistance. Students can focus on logic and creativity while gaining confidence in coding fundamentals.",
        link: "https://pydrag.globalschoolportal.com",
    },
    {
        icon: MessageSquare,
        iconColor: "text-purple-600",
        bgColor: "bg-purple-100",
        title: "GoGether Community",
        shortDescription:
            "GoTogether enables communication between parents, teachers, and school admins — combining social features with structured school engagement.",
        fullDescription:
            "From real-time updates to event coordination and group chats, GoTogether creates a vibrant digital space for seamless communication. Share announcements, plan carpools, and stay connected with your school community—all from one easy-to-use app.",
        link: "",
    },
]

export default function FeaturesSection() {
    return (
        <section id="features" className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Everything Your School Needs
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                        From school admins to coders to parents—everything in one seamless ecosystem.
                    </p>
                </div>
                <FlipCards cards={cards}/>
            </div>
        </section>
    )
}
