import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Checkbox } from "../components/ui/checkbox"
import { WorkflowLayout } from "../components/WorkflowLayout"
import { StepNavigation } from "../components/StepNavigation"
import { PageTransition } from "../components/PageTransition"

export function ConnectRepositoriesPage() {
  const navigate = useNavigate()
  const [selectedRepos, setSelectedRepos] = useState<string[]>([])

  const repositories = [
    { id: "deployment.created", label: "Deployment created" },
    { id: "deployment.error", label: "Deployment error" },
    { id: "deployment.cancelled", label: "Deployment cancelled" },
  ]

  const handleRepoToggle = (repoId: string) => {
    setSelectedRepos((prev) => (prev.includes(repoId) ? prev.filter((id) => id !== repoId) : [...prev, repoId]))
  }

  return (
    <WorkflowLayout
      toolbarTitle="Contextual toolbar"
      toolbarDescription="A toolbar that suggests and enables actions based on users' navigation."
      toolbarTags={["React", "Tailwind css", "Motion (Framer motion)"]}
    >
      <PageTransition pageKey="connect-repositories">
        <div className="space-y-4 md:space-y-1 ">
          <div className=" bg-[#FCFCFC] p-3 shadow-md rounded-2xl">

            <h2 className="text-lg md:text-base font-semibold text-[#292929] flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2 mb-1">
              <span>Connect repositories to</span>
              <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded font-medium w-fit">acme</span>
            </h2>

            <div className="space-y-3">
              {repositories.map((repo) => (
                <div key={repo.id} className="flex items-center space-x-3">
                  <Checkbox
                    id={repo.id}
                    checked={selectedRepos.includes(repo.id)}
                    onCheckedChange={() => handleRepoToggle(repo.id)}
                  />
                  <label htmlFor={repo.id} className="text-sm text-gray-700 cursor-pointer">
                    {repo.label}
                  </label>
                </div>
              ))}
            </div>

            <div className="flex flex-col space-y-3 md:flex-row md:justify-end md:space-y-0 gap-3 pt-4">
              <Button size="sm" variant="outline" className="text-gray-600 bg-white border-gray-300 order-2 md:order-1">
                Cancel
              </Button>
              <Button
                className="bg-purple-600 hover:bg-purple-700 text-white order-1 md:order-2"
                onClick={() => navigate("/create-api-key")}
                size="sm"
              >
                Connect repositories
              </Button>
            </div>
          </div>

          <StepNavigation currentStep="connect-repositories" />
        </div>
      </PageTransition>
    </WorkflowLayout>
  )
}
