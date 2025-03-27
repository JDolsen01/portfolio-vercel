import type React from "react"
import { cn } from "@/lib/utils"

interface TimelineProps {
  children: React.ReactNode
  className?: string
}

export function Timeline({ children, className }: TimelineProps) {
  return <div className={cn("relative", className)}>{children}</div>
}

interface TimelineItemProps {
  children: React.ReactNode
  className?: string
  isFirst?: boolean
  isLast?: boolean
}

export function TimelineItem({ children, className, isFirst = false, isLast = false }: TimelineItemProps) {
  return (
    <div className={cn("relative pl-10 pb-10", isLast && "pb-0", className)}>
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background z-10" />

      {/* Timeline line */}
      {!isLast && <div className="absolute left-2 top-6 bottom-0 w-[1px] bg-border" />}

      {/* Content */}
      <div className="relative">{children}</div>
    </div>
  )
}

