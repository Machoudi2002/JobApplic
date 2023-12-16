import useFetchApi from "../hooks/useFetchApi"
import { useEffect } from "react"
import { JobObject } from "../types"
import { useNavigate } from "react-router-dom"
import Counter from "../Components/Counter"

const AdminPage = () => {
  let navigate = useNavigate();
  const API_URL = `${import.meta.env.VITE_WEBSITE_DOMAIN}/jobs`;
  const { apiData, getJobs, deleteJob } = useFetchApi()
  
  useEffect(() => {
    getJobs(API_URL);
  }, [apiData])

  const totalApplicationsLength = apiData?.reduce((total : number, job: any) => total + (job.applications?.length || 0), 0) || 0;
  return (
    <section className="container text-center py-20">
      <h1 className="font-extrabold italic text-5xl mb-10">Admin Page</h1>
      <div className="flex flex-col gap-1 sm:flex-row justify-between">
        <Counter total={apiData.length} kind="Jobs" />
        <Counter total={totalApplicationsLength} kind="Apps" />
      </div>
      <button 
        className="font-bold bg-whiteBack w-full py-3 mb-2 rounded shadow"
        onClick={() => navigate("/Admin/new-job")}
      >
        Add New Job
      </button>
      <div>
        {
          apiData ? apiData.map((job : JobObject, i: number) =>  (
            <div className="font-bold bg-whiteBack w-full py-3 px-4 mb-2 rounded shadow flex flex-row justify-between" key={i}>
              <h3 className="text-left cursor-pointer"
                onClick={() => navigate(`/Admin/${job._id}/applications`)}
              >{job.title}</h3>
              <div className="text-right">
                <button 
                  className="mr-4"
                  onClick={() => navigate(`/Admin/edit/${job._id}`)}
                >
                  Edit
                </button>
                <button onClick={() => deleteJob(`${API_URL}/${job._id}`)}>Remove</button>
              </div>
            </div>
          )) : <h1>No job Available</h1>

        }
      </div>
    </section>
  )
}

export default AdminPage