"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import {ExternalLink, LucideIcon} from "lucide-react";

type CardType = {
    icon: LucideIcon;
    iconColor: string;
    bgColor: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    link: string;
};

type FlipCardsProps = {
    cards: CardType[];
};

export default function FlipCards({cards}: FlipCardsProps) {
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
        // Always toggle on click, regardless of device
        toggleCard(index)
    }

    // Handle link click without toggling the card
    const handleLinkClick = (e: React.MouseEvent) => {
        e.stopPropagation() // Prevent the card from flipping back when clicking the link
    }

    // Helper function to determine if a link is external
    const isExternalLink = (url: string) => {
        return (
            url.startsWith("http://") ||
            url.startsWith("https://") ||
            (url.includes(".") && !url.startsWith("/") && !url.startsWith("#"))
        )
    }

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {cards.map((card, index) => {
                    const Icon = card.icon
                    const isFlipped = flippedCards.includes(index)
                    const hasLink = card.link && card.link.trim() !== ""
                    const isExternal = hasLink ? isExternalLink(card.link) : false

                    return (
                        <div
                            key={index}
                            className="flip-card-container h-80"
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
                                            <div className="absolute bottom-2 right-2 text-xs text-gray-400 flex items-center gap-1">
                                                <span className="hidden sm:inline">Hover to learn more</span>
                                                <span className="sm:hidden">Tap to learn more</span>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                </div>
                                {/* Back Side */}
                                <div className="flip-card-face flip-card-back">
                                    <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-50 to-white cursor-pointer h-full flex flex-col">
                                        <CardHeader className="flex-1">
                                            <CardTitle className="text-lg font-bold mb-3 text-gray-800">{card.title}</CardTitle>
                                            <CardDescription className="text-sm text-gray-600 leading-relaxed">
                                                {card.fullDescription}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardFooter className="pt-2 pb-4 flex justify-between items-center border-t border-gray-100">
                                            <div className="text-xs text-gray-400">
                                                <span className="hidden sm:inline">Hover away to go back</span>
                                                <span className="sm:hidden">Tap to go back</span>
                                            </div>
                                            {hasLink && (
                                                <a
                                                    href={card.link}
                                                    onClick={handleLinkClick}
                                                    target={isExternal ? "_blank" : undefined}
                                                    rel={isExternal ? "noopener noreferrer" : undefined}
                                                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                                                >
                                                    Learn more <ExternalLink className="w-3 h-3" />
                                                </a>
                                            )}
                                        </CardFooter>
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
