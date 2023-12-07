import { Routes, Route } from "react-router-dom"
import NavBar from "./Components/NavBar"
import JobPage from "./Pages/JobPage"
import HomePage from "./Pages/HomePage"
import AdminPage from "./Pages/AdminPage"

function App() {

  return (
    <>
      <main className="h-screen bg-backColor text-textColor font-mainFont">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Admin" element={<AdminPage />} />
          <Route path="/Jobs/:jobId" element={<JobPage />} />
        </Routes>
      </main>
      
        
    </>
  )
}

export default App
