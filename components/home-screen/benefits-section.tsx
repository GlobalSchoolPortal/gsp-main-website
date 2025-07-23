"use client"

import WhyChooseSection from "@/components/home-screen/why-choose-section"
import {
    Clock,
    Smartphone,
    BarChart3,
    Layers,
    Users,
    GraduationCap,
    Shield,
} from "lucide-react"

const features = [
    {
        icon: Layers,
        title: "Unified Platform",
        description: "No more switching tools—everything you need in one seamless platform.",
        color: "bg-blue-100 text-blue-600",
    },
    {
        icon: Users,
        title: "Role-Based Access",
        description: "Tailored dashboards for Admins, Teachers, and Parents—everything you need, only when you need it.",
        color: "bg-green-100 text-green-600",
    },
    {
        icon: GraduationCap,
        title: "Educator-Driven Design",
        description: "Built with real classroom insights to meet the unique needs of modern schools.",
        color: "bg-purple-100 text-purple-600",
    },
    {
        icon: Shield,
        title: "Cloud-Based Security",
        description: "Access your data safely anytime, anywhere with our secure cloud infrastructure.",
        color: "bg-orange-100 text-orange-600",
    },
    {
        icon: BarChart3,
        title: "Data-Driven Decisions",
        description: "Unlock powerful insights with real-time analytics and smart reporting tools.",
        color: "bg-indigo-100 text-indigo-600",
    },
    {
        icon: Clock,
        title: "Time Efficient Workflows",
        description: "Automate everyday tasks and reclaim your time to focus on what truly matters—education.",
        color: "bg-red-100 text-red-600",
    },
    {
        icon: Smartphone,
        title: "Mobile First Experience",
        description: "Stay connected and in control—anytime, anywhere—with our fully responsive mobile platform.",
        color: "bg-teal-100 text-teal-600",
    },
]

export default function BenefitsSection() {
    return (
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
            <WhyChooseSection features={features} />
        </section>
    )
}
