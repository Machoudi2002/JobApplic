
import { Routes, Route } from "react-router-dom"
import NavBar from "./Components/NavBar"
import JobPage from "./Pages/JobPage"
import HomePage from "./Pages/HomePage"

function App() {

  return (
    <>
      <main className="h-screen bg-backColor text-textColor font-mainFont">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Jobs" element={<JobPage />} />
          <Route path="/Jobs/:name" element={<JobPage />} />
        </Routes>
      </main>
      
        
    </>
  )
}

export default App
