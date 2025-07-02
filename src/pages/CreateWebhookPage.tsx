import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Checkbox } from "../components/ui/checkbox"
import { WorkflowLayout } from "../components/WorkflowLayout"
import { StepNavigation } from "../components/StepNavigation"
import { PageTransition } from "../components/PageTransition"

export function CreateWebhookPage() {
  const navigate = useNavigate()
  const [endpoint, setEndpoint] = useState("https://pineway.io/webhooks")
  const [selectedProject, setSelectedProject] = useState("all")
  const [selectedEvents, setSelectedEvents] = useState<string[]>([
    "deployment.created",
    "deployment.error",
    "deployment.cancelled",
    "project.created",
    "project.deleted",
  ])

  const events = [
    { id: "deployment.created", label: "Deployment created" },
    { id: "deployment.error", label: "Deployment error" },
    { id: "deployment.cancelled", label: "Deployment cancelled" },
    { id: "project.created", label: "Project created" },
    { id: "project.deleted", label: "Project deleted" },
  ]

  const handleEventToggle = (eventId: string) => {
    setSelectedEvents((prev) => (prev.includes(eventId) ? prev.filter((id) => id !== eventId) : [...prev, eventId]))
  }

  return (
    <WorkflowLayout
      toolbarTitle="Contextual toolbar"
      toolbarDescription="A toolbar that suggests and enables actions based on users' navigation."
      toolbarTags={["React", "Tailwind css", "Motion (Framer motion)"]}
    >
      <PageTransition pageKey="create-webhook">
        <div className="space-y-4 md:space-y-3">
          <h2 className="text-lg md:text-base mb-2  font-semibold text-[#292929]">Create webhook</h2>

          <div className="bg-[#FCFCFC] p-3 shadow-md rounded-2xl">

            <div className="space-y-2">
              <Label htmlFor="endpoint" className="text-sm font-medium text-gray-700">
                Endpoint
              </Label>
              <Input id="endpoint" value={endpoint} onChange={(e) => setEndpoint(e.target.value)} className="w-full" />
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-700 block text-left">Projects</Label>
              <div className="flex flex-col space-y-3 md:flex-row md:items-center md:space-y-0 md:space-x-8">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <input
                      type="radio"
                      id="all-projects"
                      name="projects"
                      value="all"
                      checked={selectedProject === "all"}
                      onChange={(e) => setSelectedProject(e.target.value)}
                      className="sr-only"
                    />
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center cursor-pointer ${
                        selectedProject === "all" ? "border-purple-600 bg-purple-600" : "border-gray-300 bg-white"
                      }`}
                      onClick={() => setSelectedProject("all")}
                    >
                      {selectedProject === "all" && <div className="w-2 h-2 rounded-full bg-white"></div>}
                    </div>
                  </div>
                  <label
                    htmlFor="all-projects"
                    className="text-sm text-gray-700 flex items-center space-x-2 cursor-pointer"
                  >
                    <span>All team projects in</span>
                    <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded font-medium">acme</span>
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <input
                      type="radio"
                      id="tagged-projects"
                      name="projects"
                      value="tagged"
                      checked={selectedProject === "tagged"}
                      onChange={(e) => setSelectedProject(e.target.value)}
                      className="sr-only"
                    />
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center cursor-pointer ${
                        selectedProject === "tagged" ? "border-purple-600 bg-purple-600" : "border-gray-300 bg-white"
                      }`}
                      onClick={() => setSelectedProject("tagged")}
                    >
                      {selectedProject === "tagged" && <div className="w-2 h-2 rounded-full bg-white"></div>}
                    </div>
                  </div>
                  <label htmlFor="tagged-projects" className="text-sm text-gray-700 cursor-pointer">
                    Tagged projects
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-700">Events</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 rounded-sm p-3 bg-[#F5F5F5]">
                {events.map((event) => (
                  <div key={event.id} className="flex items-center space-x-2 ">
                    <Checkbox
                      id={event.id}
                      checked={selectedEvents.includes(event.id)}
                      onCheckedChange={() => handleEventToggle(event.id)}
                    />
                    <label htmlFor={event.id} className="text-sm text-gray-700 cursor-pointer">
                      {event.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-3 md:flex-row md:justify-end md:space-y-0 gap-3 pt-4">
              <Button size="sm" variant="outline" className="text-gray-600 bg-white border-gray-300 order-2 md:order-1">
                Cancel
              </Button>
              <Button
                className="bg-[#7839EE] hover:bg-purple-700 text-white order-1 md:order-2"
                onClick={() => navigate("/connect-repositories")}
                size="sm"
              >
                Create webhook
              </Button>
            </div>
          </div>

          <StepNavigation currentStep="create-webhook" />
        </div>
      </PageTransition>
    </WorkflowLayout>
  )
}
