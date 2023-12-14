import { Routes, Route, Navigate } from "react-router-dom"
import NavBar from "./Components/NavBar"
import JobPage from "./Pages/JobPage"
import HomePage from "./Pages/HomePage"
import AdminPage from "./Pages/AdminPage"
import LoginPage from "./Pages/LoginPage"
import useAuth from "./hooks/useAuth"
import EditJobPage from "./Pages/EditJobPage"
import AddNewJob from "./Pages/AddNewJob"

function App() {
  const { isAuth } = useAuth()

  return (
    <>
      <main className="h-screen bg-backColor text-textColor font-mainFont">
        <NavBar />
        <Routes>
          {isAuth ? (
            <>
              <Route path="/Admin" element={<AdminPage />} />
              <Route path="/Admin/edit/:jobId" element={<EditJobPage />} />
              <Route path="/Admin/new-job" element={<AddNewJob />} />
            </>
          ) : (
            <Route path="/Login" element={<LoginPage />} />
          )}
          <Route path="/" element={<HomePage />} />
          <Route path="/Jobs/:jobId" element={<JobPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      
        
    </>
  )
}

export default App
