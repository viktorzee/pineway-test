import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Card, CardContent } from "./ui/card"



const unsplashImages = [
  {
    id: 0,
    url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    fallbackClass: "text-xs bg-blue-500 text-white",
    fallbackName: "JD"
  },
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
    fallbackClass: "text-xs bg-green-500 text-white",
    fallbackName: "AS"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    fallbackClass: "text-xs bg-orange-500 text-white",
    fallbackName: "MK"
  },
]

export function EngineeringSyncCard() {
  const [isExpanded, setIsExpanded] = useState(false)

    const getCardWidth = () => {
      if (typeof window !== 'undefined') {
        const screenWidth = window.innerWidth;
        const padding = 32;
        const maxWidth = screenWidth - padding;
        
        if (screenWidth < 640) {
          return isExpanded ? Math.min(maxWidth, 340) : Math.min(maxWidth, 300);
        } else if (screenWidth < 768) {
          return isExpanded ? Math.min(maxWidth, 420) : Math.min(maxWidth, 350);
        }
        return isExpanded ? 482 : 350;
      }
      return 300; // fallback
    };



  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <motion.div
        animate={{ width: getCardWidth() }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full max-w-full"
        style={{ maxWidth: '100%' }}
      >
      <Card
        className="bg-white shadow-lg border border-gray-200 cursor-pointer hover:shadow-md transition-shadow overflow-hidden p-3"
        style={{ borderRadius: '18px' }}
        onClick={toggleExpanded}
      >
        <CardContent className="p-5">
          <div className="space-y-3">
            {/* Time indicator */}
            <div className="flex justify-between items-start">
              <span className="text-xs text-[rgba(120,57,238,1)] bg-[rgba(236,233,254,0.8)] px-2 py-1 rounded font-medium">In 15 mins</span>
              <div className="w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="ml-0.5">
                  <path d="M1.5 1L6.5 4L1.5 7V1Z" fill="white"/>
                </svg>
              </div>
            </div>

            {/* Event title and time */}
            <div className="space-y-1 text-left">
              <h3 className="font-medium text-gray-900">Engineering sync</h3>
              <p className="text-sm text-gray-600">1:30 PM → 2:30 PM</p>
            </div>

            {/* Guests section - only show when expanded */}
            <AnimatePresence>
              {isExpanded && (
                <>
                  <motion.hr
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    exit={{ opacity: 0, scaleX: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className="border-gray-200 origin-left -mx-5 my-5"
                  />
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="space-y-3 overflow-hidden"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Guests</span>
                      <span className="text-sm text-gray-400">👥 3</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {unsplashImages.map(image => (
                            <Avatar className="w-6 h-6 border-2 border-white" key={image.id}>
                              <AvatarImage src={image.url} />
                              <AvatarFallback className={image.fallbackClass}>{image.fallbackName}</AvatarFallback>
                            </Avatar>
                        ))}                  
                      </div>
                      {/* Loading bars on the right */}
                      <div className="flex items-end space-x-1">                                                                
                        <div className="w-2 h-8 bg-[rgba(229,229,229,1)] rounded-full"></div>
                        <div className="w-2 h-8 bg-[rgba(245,245,245,1)] rounded-full"></div>                              
                        <div className="w-2 h-8 bg-[rgba(229,229,229,1)] rounded-full"></div>                                
                        <div className="w-2 h-8 bg-[rgba(245,245,245,1)] rounded-full"></div>
                        <div className="w-2 h-8 bg-[rgba(245,245,245,1)] rounded-full"></div>
                        <div className="w-2 h-8 bg-[rgba(245,245,245,1)] rounded-full"></div>                                
                        <div className="w-2 h-8 bg-[rgba(229,229,229,1)] rounded-full"></div>                                
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
