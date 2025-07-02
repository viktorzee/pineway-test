import type React from "react"
import { useNavigate } from "react-router-dom"
import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { BiMenu } from "react-icons/bi"

interface StepNavigationProps {
  currentStep: "create-webhook" | "connect-repositories" | "create-api-key" | "sharing"
}

export function StepNavigation({ currentStep }: StepNavigationProps) {
  const navigate = useNavigate()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const steps = [
    { id: "create-webhook", label: "Create webhook", path: "/create-webhook" },
    { id: "connect-repositories", label: "Connect repositories", path: "/connect-repositories" },
    { id: "create-api-key", label: "Create API key", path: "/create-api-key" },
    { id: "sharing", label: "Sharing", path: "/sharing" },
  ]

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleStepClick = (path: string) => {
    if (!isDragging) {
      navigate(path)
    }
  }

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  return (
    <div className="relative">
      <div className="flex items-center bg-white rounded-lg p-1 overflow-hidden">
        <div
          ref={scrollRef}
          className="flex items-center space-x-1 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing flex-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex items-center space-x-1 min-w-max pr-12">
            {steps.map((step) => (
              <motion.div key={step.id} className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleStepClick(step.path)}
                  className={`text-xs md:text-sm px-3 md:px-4 py-2 rounded-md transition-all whitespace-nowrap ${
                    currentStep === step.id
                      ? "bg-gray-50 text-gray-900 shadow-sm font-medium"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {step.label}
                </Button>
                {currentStep === step.id && (
                  <motion.div
                    layoutId="activeStep"
                    className="absolute inset-0 bg-[#424242] rounded-md shadow-sm -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute right-1 top-1 bottom-1 flex items-center pl-2 border-l border-gray-200 bg-white  text-[#737373] z-10">

    <BiMenu className="h-7 w-7" />
</div>

      </div>
    </div>
  )
}
