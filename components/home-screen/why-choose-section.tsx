"use client"

import { useState, useRef, useEffect } from "react"
import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

type FeatureCard = {
    title: string
    description: string
    icon: React.FC
    color: string
}

type FeatureProps = {
    features: FeatureCard[]
}

export default function WhyChooseSection({features}: FeatureProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isScrolling, setIsScrolling] = useState(false)

    // Function to scroll to a specific index with proper cyclic behavior
    const scrollToIndex = (index: number, animate = true) => {
        if (!scrollContainerRef.current || isScrolling) return

        // Ensure index is within bounds (for safety)
        const safeIndex = ((index % features.length) + features.length) % features.length

        const container = scrollContainerRef.current
        const cardWidth = container.children[0]?.clientWidth || 0
        const gap = window.innerWidth < 640 ? 16 : 24
        const scrollPosition = safeIndex * (cardWidth + gap)

        setIsScrolling(true)

        container.scrollTo({
            left: scrollPosition,
            behavior: animate ? "smooth" : "auto",
        })

        setCurrentIndex(safeIndex)

        // Reset scrolling flag after animation
        setTimeout(() => setIsScrolling(false), 500)
    }

    const scrollLeft = () => {
        // Calculate new index with cyclic behavior
        const newIndex = currentIndex === 0 ? features.length - 1 : currentIndex - 1
        scrollToIndex(newIndex)
    }

    const scrollRight = () => {
        // Calculate new index with cyclic behavior
        const newIndex = currentIndex === features.length - 1 ? 0 : currentIndex + 1
        scrollToIndex(newIndex)
    }

    // Handle scroll events to update current index
    useEffect(() => {
        const container = scrollContainerRef.current
        if (!container) return

        const handleScroll = () => {
            if (isScrolling) return // Don't update during programmatic scrolling

            const cardWidth = container.children[0]?.clientWidth || 0
            const gap = window.innerWidth < 640 ? 16 : 24
            const scrollLeft = container.scrollLeft

            // Calculate the current index based on scroll position
            const newIndex = Math.round(scrollLeft / (cardWidth + gap))

            // Handle the case where we've scrolled to the end
            if (newIndex !== currentIndex && newIndex >= 0 && newIndex < features.length) {
                setCurrentIndex(newIndex)
            }
        }

        container.addEventListener("scroll", handleScroll)
        return () => container.removeEventListener("scroll", handleScroll)
    }, [currentIndex, isScrolling])

    return (
        <>
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Why Choose Global School Portal?
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                        Discover the powerful features that make our platform the perfect choice for modern educational institutions
                    </p>
                </div>

                {/* Scrollable Features Container */}
                <div className="relative">
                    {/* Left Scroll Button */}
                    <Button
                        onClick={scrollLeft}
                        variant="outline"
                        size="icon"
                        className="absolute left-0 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                    >
                        <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    </Button>

                    {/* Right Scroll Button */}
                    <Button
                        onClick={scrollRight}
                        variant="outline"
                        size="icon"
                        className="absolute right-0 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                    >
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    </Button>

                    {/* Scrollable Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-9 sm:px-14 md:px-16 lg:px-20"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {features.map((feature, index) => {
                            const IconComponent = feature.icon
                            return (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-64 sm:w-80 md:w-96 lg:w-[28rem] text-center p-4 sm:p-6 md:p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gray-50 hover:bg-white border border-gray-100"
                                >
                                    <div
                                        className={`w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6`}
                                    >
                                        <IconComponent />
                                    </div>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4 text-gray-900">
                                        {feature.title}
                                    </h3>
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
                                onClick={() => scrollToIndex(index)}
                                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                                    currentIndex === index ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/*/!* Mobile Instructions *!/*/}
                {/*<div className="text-center mt-6 sm:mt-8">*/}
                {/*    <p className="text-xs sm:text-sm text-gray-500">Use arrow buttons or swipe to explore all features</p>*/}
                {/*</div>*/}
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
