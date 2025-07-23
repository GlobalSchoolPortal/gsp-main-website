import Head from "next/head"

interface SEOHeadProps {
    title?: string
    description?: string
    canonical?: string
    ogImage?: string
}

export default function SEOHead({
                                    title = "Global School Portal - Unified Education Management System",
                                    description = "Transform your school with our comprehensive ERP+CRM platform. Streamline administration, engage parents, and empower learners.",
                                    canonical = "https://www.globalschoolportal.com",
                                    ogImage = "/og-image.jpg",
                                }: SEOHeadProps) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="canonical" href={canonical} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={canonical} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Additional meta tags */}
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Global School Portal Team" />
            <meta name="keywords" content="school management, education ERP, student information system, parent portal" />
        </Head>
    )
}
