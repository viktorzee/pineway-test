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
    <div className="min-h-screen bg-white p-6 md:p-20 flex items-center justify-center">
      <div className="w-7xl bg-white rounded-2xl shadow-[0_1px_2px_0px_#09090B0D,0_0_0_1px_#09090B0D] border border-gray-200 p-6 flex flex-col items-center gap-12">
        
        {/* Widgets Side-by-Side */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
          <CalendarWidget />
          <EngineeringSyncCard />
        </div>

        {/* Navigation Button below */}
        <div className="flex justify-start w-full md:w-2/3">
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
  )
}
