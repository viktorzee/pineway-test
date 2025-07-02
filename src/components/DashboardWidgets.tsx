import { useNavigate } from "react-router-dom"
import { EngineeringSyncCard } from "./EngineeringSyncCard"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"


function CalendarWidget() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-2">Calendar widget</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Calendar widget with clear timezone differences information. Click on the widget to interact with it.
        </p>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-100 font-normal">
            React
          </Badge>
          <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-100 font-normal">
            Tailwind css
          </Badge>
          <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-100 font-normal">
            Motion (prev. framer motion)
          </Badge>
        </div>
      </div>
    </div>
  )
}

export function DashboardWidgets() {
  const navigate = useNavigate()

  return (
    <div className="h-screen overflow-hidden bg-white p-4 md:p-6 flex items-center justify-center">
      <div className="w-full h-full bg-white rounded-2xl shadow-[0_1px_2px_0px_#09090B0D,0_0_0_1px_#09090B0D] border border-gray-200 p-4 md:p-6 flex flex-col items-center justify-center overflow-auto">
        
        <div className="flex flex-col items-center justify-center gap-6 md:gap-8 w-full max-w-4xl">
          {/* Widgets Side-by-Side */}
          <div className="flex flex-col lg:flex-row items-start justify-center gap-6 md:gap-40 w-full overflow-hidden">
            <CalendarWidget />
            <EngineeringSyncCard />
          </div>

          {/* Button positioned below both widgets, aligned with calendar widget */}
          <div className="flex justify-start w-full max-w-4xl">
            <div className="w-full max-w-sm">
              <Button
                variant="outline"
                className="text-gray-600 bg-white border-gray-300 hover:bg-gray-50 shadow-md"
                onClick={() => navigate("/create-webhook")}
              >
                Next task
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}