import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { WorkflowLayout } from "../components/WorkflowLayout"
import { StepNavigation } from "../components/StepNavigation"
import { PageTransition } from "../components/PageTransition"

export function CreateApiKeyPage() {
  const navigate = useNavigate()
  const [apiKeyName, setApiKeyName] = useState("")

  return (
    <WorkflowLayout
      toolbarTitle="Contextual toolbar"
      toolbarDescription="A toolbar that suggests and enables actions based on users' navigation."
      toolbarTags={["React", "Tailwind css", "Motion (Framer motion)"]}
    >
      <PageTransition pageKey="create-api-key">
        <div className="space-y-4 md:space-y-2">
          <div className=" bg-[#FCFCFC] p-3 shadow-md rounded-2xl">
            <div>
              <h2 className="text-lg md:text-base font-semibold text-[#292929]">Create new API key</h2>
              <p className="text-sm text-gray-600 mt-2">
                Your secret API key for actions such as users belonging to your organization.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="api-key-name" className="text-sm font-medium text-gray-700">
                API key name
              </Label>
              <Input
                id="api-key-name"
                value={apiKeyName}
                onChange={(e) => setApiKeyName(e.target.value)}
                placeholder="Enter API key name"
                className="w-full"
              />
            </div>

            <div className="flex flex-col space-y-3 md:flex-row md:justify-end md:space-y-0 gap-3 pt-4">
              <Button variant="outline" className="text-gray-600 bg-white border-gray-300 order-2 md:order-1">
                Cancel
              </Button>
              <Button
                className="bg-purple-600 hover:bg-purple-700 text-white order-1 md:order-2"
                onClick={() => navigate("/sharing")}
              >
                Create secret key
              </Button>
            </div>
          </div>

          <StepNavigation currentStep="create-api-key" />
        </div>
      </PageTransition>
    </WorkflowLayout>
  )
}
