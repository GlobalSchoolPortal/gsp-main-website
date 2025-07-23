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
            url: "https://pydrag.globalschoolportal.com/",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://master.globalschoolportal.com/",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ]
}
