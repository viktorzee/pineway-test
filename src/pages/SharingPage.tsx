import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import { WorkflowLayout } from "../components/WorkflowLayout"
import { StepNavigation } from "../components/StepNavigation"
import { PageTransition } from "../components/PageTransition"
import { motion, AnimatePresence } from "framer-motion"
import { Copy, CheckCircle } from "lucide-react"


export function SharingPage() {
  const navigate = useNavigate()
  const [sharingEnabled, setSharingEnabled] = useState(true)
  const [showToast, setShowToast] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("pineway.io")
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  const toggleSharing = () => setSharingEnabled(!sharingEnabled)

  return (
    <WorkflowLayout
      toolbarTitle="Contextual toolbar"
      toolbarDescription="A toolbar that suggests and enables actions based on users' navigation."
      toolbarTags={["React", "Tailwind css", "Motion (Framer motion)"]}
    >
      <PageTransition pageKey="sharing">
        <div className="space-y-4 md:space-y-2 relative">
          <div className="bg-[#FCFCFC] p-3 shadow-md rounded-2xl">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Sharing is {sharingEnabled ? "on" : "off"}</span>
              <button
                onClick={toggleSharing}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  sharingEnabled ? "bg-purple-600" : "bg-gray-200"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    sharingEnabled ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {sharingEnabled && (
              <div className="space-y-2 mt-3">
                <div className="p-3 bg-gray-50 rounded border">
                  <span className="text-sm text-gray-600 break-all">/mylink.com</span>
                </div>
                <div className="flex justify-start">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopy}
                    className="text-gray-600 border-gray-300 bg-transparent"
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                </div>
              </div>
            )}

            <div className="flex flex-col space-y-3 md:flex-row md:justify-end md:space-y-0 gap-3 pt-4">
              <Button size="sm" variant="outline" className="text-gray-600 bg-white border-gray-300 order-2 md:order-1">
                Cancel
              </Button>
              <Button
                className="bg-purple-600 hover:bg-purple-700 text-white order-1 md:order-2"
                onClick={() => navigate("/")}
                size="sm"
              >
                Create secret key
              </Button>
            </div>
          </div>

          {/* Notification */}
          <AnimatePresence>
            {showToast && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
              >
                <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-md shadow-md px-4 py-2">
                  <CheckCircle className="text-green-600 w-4 h-4" />
                  <span className="text-sm text-gray-800 font-medium">Link to secret key copied</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <StepNavigation currentStep="sharing" />
        </div>
      </PageTransition>
    </WorkflowLayout>
  )
}