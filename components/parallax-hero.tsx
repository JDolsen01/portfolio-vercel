"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ParallaxHeroProps {
  children: React.ReactNode
  imageUrl: string
  height?: string
  overlayColor?: string
  overlayOpacity?: number
}

export function ParallaxHero({
  children,
  imageUrl,
  height = "70vh",
  overlayColor = "rgba(0, 0, 0, 0.4)",
  overlayOpacity = 0.4,
}: ParallaxHeroProps) {
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
    <div ref={heroRef} className="relative flex items-center justify-center overflow-hidden" style={{ height }}>
      {/* Parallax Background */}
      <div className="absolute inset-0 w-full h-full" style={backgroundStyle} />

      {/* Overlay */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

