"use client"

import {useState, useRef, useEffect} from "react"
import {
    Clock,
    Smartphone,
    BarChart3,
    Layers,
    Users,
    GraduationCap,
    Shield,
    ChevronLeft,
    ChevronRight,
} from "lucide-react"
import {Button} from "@/components/ui/button"

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

export default function WhyChooseSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    // Create extended array for infinite scroll effect
    const extendedFeatures = [...features, ...features, ...features]

    const updateScrollButtons = () => {
        if (scrollContainerRef.current) {
            const {scrollLeft, scrollWidth, clientWidth} = scrollContainerRef.current
            setCanScrollLeft(scrollLeft > 0)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
        }
    }

    const scrollToIndex = (index: number) => {
        if (scrollContainerRef.current) {
            const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 0
            const gap = 24 // 1.5rem gap
            const scrollPosition = index * (cardWidth + gap)

            scrollContainerRef.current.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            })
            setCurrentIndex(index)
        }
    }

    const scrollLeft = () => {
        const newIndex = currentIndex > 0 ? currentIndex - 1 : extendedFeatures.length - 1
        scrollToIndex(newIndex)
    }

    const scrollRight = () => {
        const newIndex = currentIndex < extendedFeatures.length - 1 ? currentIndex + 1 : 0
        scrollToIndex(newIndex)
    }

    // Handle infinite scroll
    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const {scrollLeft, scrollWidth, clientWidth} = scrollContainerRef.current
            const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 0
            const gap = 24
            const totalCardWidth = cardWidth + gap

            // Calculate current index based on scroll position
            const newIndex = Math.round(scrollLeft / totalCardWidth)
            setCurrentIndex(newIndex)

            // Handle infinite scroll
            if (scrollLeft <= 0) {
                // Jumped to beginning, move to middle section
                scrollContainerRef.current.scrollLeft = features.length * totalCardWidth
                setCurrentIndex(features.length)
            } else if (scrollLeft >= scrollWidth - clientWidth - 10) {
                // Jumped to end, move to middle section
                scrollContainerRef.current.scrollLeft = features.length * totalCardWidth
                setCurrentIndex(features.length)
            }

            updateScrollButtons()
        }
    }

    useEffect(() => {
        // Start in the middle section for infinite scroll
        if (scrollContainerRef.current) {
            const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 0
            const gap = 24
            scrollContainerRef.current.scrollLeft = features.length * (cardWidth + gap)
            setCurrentIndex(features.length)
        }
        updateScrollButtons()
    }, [])

    useEffect(() => {
        const container = scrollContainerRef.current
        if (container) {
            container.addEventListener("scroll", handleScroll)
            return () => container.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <>
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Why Choose Global School Portal?
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                        Discover the powerful features that make our platform the perfect choice for modern educational
                        institutions
                    </p>
                </div>

                {/* Scrollable Features Container */}
                <div className="relative">
                    {/* Left Scroll Button */}
                    <Button
                        onClick={scrollLeft}
                        variant="outline"
                        size="icon"
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full w-10 h-10 sm:w-12 sm:h-12"
                    >
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5"/>
                    </Button>

                    {/* Right Scroll Button */}
                    <Button
                        onClick={scrollRight}
                        variant="outline"
                        size="icon"
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full w-10 h-10 sm:w-12 sm:h-12"
                    >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5"/>
                    </Button>

                    {/* Scrollable Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12 sm:px-16"
                        style={{scrollbarWidth: "none", msOverflowStyle: "none"}}
                    >
                        {extendedFeatures.map((feature, index) => {
                            const IconComponent = feature.icon
                            return (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-72 sm:w-80 md:w-96 text-center p-6 sm:p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gray-50 hover:bg-white border border-gray-100"
                                >
                                    <div
                                        className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}
                                    >
                                        <IconComponent className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"/>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">{feature.title}</h3>
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                                </div>
                            )
                        })}
                    </div>

                    {/* Scroll Indicators */}
                    <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
                        {features.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToIndex(features.length + index)}
                                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                                    (currentIndex % features.length) === index ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Mobile Instructions */}
                <div className="text-center mt-6 sm:mt-8">
                    <p className="text-xs sm:text-sm text-gray-500">Use arrow buttons or swipe to explore all
                        features</p>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }

                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </>
    )
}
