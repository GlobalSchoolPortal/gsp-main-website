"use client"

import ERPCRMDashboard from "@/components/home-screen/erp-crm-dashboard"

export default function ModulesSection() {
    return (
        <section id="modules" className="py-12 sm:py-16 lg:py-20 px-4 bg-gray-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <ERPCRMDashboard />
            </div>
        </section>
    )
}
