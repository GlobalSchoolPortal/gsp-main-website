export default function StructuredData() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Global School Portal",
        alternateName: "GSP",
        url: "https://www.globalschoolportal.com",
        logo: "https://www.globalschoolportal.com/logo.png",
        description: "Unified Education Management System - ERP+CRM platform for schools",
        foundingDate: "2024",
        founder: {
            "@type": "Organization",
            name: "One Above All Pvt. Ltd.",
        },
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-XXX-XXX-XXXX",
            contactType: "customer service",
            email: "support@globalschoolportal.com",
        },
        sameAs: ["https://www.linkedin.com/company/globalschoolportal", "https://twitter.com/globalschoolportal"],
    }

    const softwareSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Global School Portal",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Web Browser",
        description: "Comprehensive school management system with ERP and CRM capabilities",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            description: "Free demo available",
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "150",
        },
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(softwareSchema),
                }}
            />
        </>
    )
}
