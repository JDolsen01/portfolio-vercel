"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface HeroSectionProps {
  children: React.ReactNode
  imageUrl: string
  height?: string
  overlayColor?: string
  overlayOpacity?: number
}

export function HeroSection({
  children,
  imageUrl,
  height = "70vh",
  overlayColor = "rgba(0, 0, 0, 0.4)",
  overlayOpacity = 0.4,
}: HeroSectionProps) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate the parallax effect - move the background image slower than the scroll
  const yPos = scrollPosition * 0.5
  const backgroundStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: `center ${yPos}px`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }

  return (
    <section ref={heroRef} className="relative flex items-center justify-center overflow-hidden" style={{ height }}>
      {/* Parallax Background */}
      <div className="absolute inset-0 w-full h-full" style={backgroundStyle} aria-hidden="true" />

      {/* Overlay */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </section>
  )
}

