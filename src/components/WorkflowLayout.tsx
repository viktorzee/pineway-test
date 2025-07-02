import type React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "./ui/button"
import { ContextualToolbar } from "./ContextualToolbar"

interface WorkflowLayoutProps {
  children: React.ReactNode
  toolbarTitle: string
  toolbarDescription: string
  toolbarTags: string[]
}

export function WorkflowLayout({ children, toolbarTitle, toolbarDescription, toolbarTags }: WorkflowLayoutProps) {
  const navigate = useNavigate()

  return (
    <div className="h-screen overflow-hidden bg-white p-4 md:p-6 flex items-center justify-center">
      <div className="w-full h-full bg-white rounded-2xl shadow-[0_1px_2px_0px_#09090B0D,0_0_0_1px_#09090B0D] border border-gray-200 p-4 md:p-6 flex flex-col items-center justify-center overflow-auto">
        
        <div className="flex flex-col justify-center gap-6 md:gap-8 w-full max-w-4xl">
          {/* Contextual Toolbar and Main Content Side-by-Side */}
          <div className="flex flex-col lg:flex-row items-end justify-center gap-6 md:gap-20 w-full overflow-hidden">
            {/* Contextual Toolbar */}
            <div className="w-full max-w-sm">
              <ContextualToolbar
                title={toolbarTitle}
                description={toolbarDescription}
                tags={toolbarTags}
              />
            </div>

            {/* Main Content */}
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-100 p-3">
              {children}
            </div>
          </div>

          {/* Button positioned below both components, aligned with toolbar */}
          <div className="flex justify-start w-full max-w-4xl">
            <div className="w-full max-w-sm">
              <Button
                variant="outline"
                className="text-gray-600 bg-white border-gray-300 hover:bg-gray-50 shadow-md"
                onClick={() => navigate("/")}
              >
                Previous task
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}