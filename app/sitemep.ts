import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://www.globalschoolportal.com",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: "https://www.globalschoolportal.com/#features",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.globalschoolportal.com/#modules",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ]
}
