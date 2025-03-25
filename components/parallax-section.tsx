"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ParallaxSectionProps {
  children?: React.ReactNode
  className?: string
  backgroundClassName?: string
  contentClassName?: string
  backgroundSpeed?: number
  contentSpeed?: number
}

export function ParallaxSection({
  children,
  className,
  backgroundClassName,
  contentClassName,
  backgroundSpeed = 0.1,
  contentSpeed = 0,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!sectionRef.current) return

    const sectionTop = sectionRef.current.offsetTop
    const sectionHeight = sectionRef.current.offsetHeight
    const viewportHeight = window.innerHeight

    // Calculate how far the section is from the viewport center
    const sectionMiddle = sectionTop + sectionHeight / 2
    const viewportMiddle = scrollY + viewportHeight / 2
    const distanceFromMiddle = sectionMiddle - viewportMiddle

    // Calculate the parallax effect
    if (backgroundRef.current) {
      backgroundRef.current.style.transform = `translateY(${distanceFromMiddle * backgroundSpeed}px)`
    }

    if (contentRef.current && contentSpeed !== 0) {
      contentRef.current.style.transform = `translateY(${distanceFromMiddle * contentSpeed}px)`
    }
  }, [scrollY, backgroundSpeed, contentSpeed])

  return (
    <section ref={sectionRef} className={cn("relative overflow-hidden", className)}>
      <div ref={backgroundRef} className={cn("absolute inset-0 z-0", backgroundClassName)} />
      <div ref={contentRef} className={cn("relative z-10", contentClassName)}>
        {children}
      </div>
    </section>
  )
}

