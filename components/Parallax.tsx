"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  "/placeholder.svg?height=1080&width=1920&text=Image+1",
  "/placeholder.svg?height=1080&width=1920&text=Image+2",
  "/placeholder.svg?height=1080&width=1920&text=Image+3",
]

export default function Parallax() {
  const [offset, setOffset] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const handlePrevious = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }, [])

  const handleNext = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0 z-0 transition-opacity duration-1000"
          style={{
            opacity: index === currentImageIndex ? 1 : 0,
            transform: `translateY(${offset * 0.5}px)`,
          }}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={`Parallax Background ${index + 1}`}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={index === 0}
          />
        </div>
      ))}
      <div className="absolute inset-x-0 top-1/2 z-10 flex -translate-y-1/2 justify-between px-4">
        <button
          onClick={handlePrevious}
          className="rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/75"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/75"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-4xl font-bold text-white md:text-6xl">Welcome to My Portfolio</h1>
      </div>
    </div>
  )
}

