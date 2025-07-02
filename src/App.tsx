import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { DashboardWidgets } from "./components/DashboardWidgets"
import { CreateWebhookPage } from "./pages/CreateWebhookPage"
import { ConnectRepositoriesPage } from "./pages/ConnectRepositoriesPage"
import { CreateApiKeyPage } from "./pages/CreateApiKeyPage"
import { SharingPage } from "./pages/SharingPage"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DashboardWidgets />} />
          <Route path="/create-webhook" element={<CreateWebhookPage />} />
          <Route path="/connect-repositories" element={<ConnectRepositoriesPage />} />
          <Route path="/create-api-key" element={<CreateApiKeyPage />} />
          <Route path="/sharing" element={<SharingPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
