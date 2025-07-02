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
    <div className="min-h-screen bg-white p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-7xl w-full bg-white rounded-2xl shadow-xl border border-gray-200 p-6 flex flex-col items-center gap-8">
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
          {/* Contextual Toolbar */}
          <div className="w-full max-w-sm">
            <ContextualToolbar
              title={toolbarTitle}
              description={toolbarDescription}
              tags={toolbarTags}
            />
          </div>

          {/* Main */}
          <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            {children}
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-start w-full md:w-2/3">
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
  )
}
