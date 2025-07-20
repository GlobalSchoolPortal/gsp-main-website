"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Fingerprint, Code, MessageSquare, Bell, ArrowLeft } from "lucide-react"

export default function FlipCards() {
    const [flippedCards, setFlippedCards] = useState<number[]>([])

    const toggleCard = (index: number) => {
        setFlippedCards((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
    }

    const handleMouseEnter = (index: number) => {
        // Only auto-flip on desktop (devices with hover capability)
        if (window.matchMedia("(hover: hover)").matches) {
            setFlippedCards((prev) => [...prev.filter((i) => i !== index), index])
        }
    }

    const handleMouseLeave = (index: number) => {
        // Only auto-flip back on desktop
        if (window.matchMedia("(hover: hover)").matches) {
            setFlippedCards((prev) => prev.filter((i) => i !== index))
        }
    }

    const handleClick = (index: number) => {
        // Handle click for mobile devices
        if (!window.matchMedia("(hover: hover)").matches) {
            toggleCard(index)
        }
    }

    const cards = [
        {
            icon: Fingerprint,
            iconColor: "text-blue-600",
            bgColor: "bg-blue-100",
            title: "Real Time Attendance",
            shortDescription: "Advanced attendance system with real-time tracking and alerts",
            fullDescription:
                "Our cutting-edge attendance system uses biometric technology and real-time tracking to ensure accurate monitoring.",
        },
        {
            icon: Code,
            iconColor: "text-green-600",
            bgColor: "bg-green-100",
            title: "PyDrag Coding Platform",
            shortDescription: "Interactive drag-and-drop coding platform for students to learn programming visually",
            fullDescription:
                "Revolutionary visual programming platform that makes coding accessible to all students."
        },
        {
            icon: MessageSquare,
            iconColor: "text-purple-600",
            bgColor: "bg-purple-100",
            title: "GoGether Community",
            shortDescription: "Collaborative platform where students connect, ask questions, and teachers provide guidance",
            fullDescription:
                "Build a thriving learning community with our social platform. Students can form study groups, ask questions, share resources, and collaborate on projects."
        },
        {
            icon: Bell,
            iconColor: "text-orange-600",
            bgColor: "bg-orange-100",
            title: "Real-time Updates",
            shortDescription: "Instant notifications to parents about attendance, grades, and school activities",
            fullDescription:
                "Keep parents informed with comprehensive real-time updates.",
        },
    ]

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {cards.map((card, index) => {
                    const Icon = card.icon
                    const isFlipped = flippedCards.includes(index)

                    return (
                        <div
                            key={index}
                            className="flip-card-container h-64"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            onClick={() => handleClick(index)}
                        >
                            <div className={`flip-card-inner ${isFlipped ? "is-flipped" : ""}`}>
                                {/* Front Side */}
                                <div className="flip-card-face flip-card-front">
                                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full">
                                        <CardHeader className="h-full flex flex-col justify-center">
                                            <div className={`w-12 h-12 ${card.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                                                <Icon className={`w-6 h-6 ${card.iconColor}`} />
                                            </div>
                                            <CardTitle className="text-lg font-bold mb-2">{card.title}</CardTitle>
                                            <CardDescription className="text-sm text-gray-600 line-clamp-3">
                                                {card.shortDescription}
                                            </CardDescription>
                                            <div className="mt-4 text-xs text-gray-400 flex items-center gap-1">
                                                <span className="hidden sm:inline">Hover to learn more</span>
                                                <span className="sm:hidden">Tap to learn more</span>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                </div>

                                {/* Back Side */}
                                <div className="flip-card-face flip-card-back">
                                    <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-50 to-white cursor-pointer h-full">
                                        <CardHeader className="h-full flex flex-col">
                                            <div className="flex items-center justify-between mb-4">
                                                <button
                                                    className="sm:hidden p-1 rounded-full hover:bg-gray-100 transition-colors"
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        toggleCard(index)
                                                    }}
                                                >
                                                    <ArrowLeft className="w-4 h-4 text-gray-500" />
                                                </button>
                                            </div>
                                            <CardTitle className="text-md font-bold mb-3 text-gray-800">{card.title}</CardTitle>
                                            <CardDescription className="text-sm text-gray-600 leading-relaxed flex-1">
                                                {card.fullDescription}
                                            </CardDescription>
                                            <div className="mt-4 pt-3 border-t border-gray-100">
                        <span className="text-xs text-gray-400">
                          <span className="hidden sm:inline">Hover away to go back</span>
                          <span className="sm:hidden">Tap arrow to go back</span>
                        </span>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <style jsx global>{`
                .flip-card-container {
                    perspective: 1000px;
                }

                .flip-card-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    transition: transform 0.6s;
                    transform-style: preserve-3d;
                }

                .flip-card-inner.is-flipped {
                    transform: rotateY(180deg);
                }

                .flip-card-face {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    backface-visibility: hidden;
                    -webkit-backface-visibility: hidden;
                }

                .flip-card-front {
                    z-index: 2;
                }

                .flip-card-back {
                    transform: rotateY(180deg);
                }

                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </>
    )
}
