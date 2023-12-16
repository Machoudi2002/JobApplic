import useFetchApi from "../hooks/useFetchApi"
import { useEffect } from "react"
import { JobObject } from "../types"
import { useNavigate } from "react-router-dom"
import Counter from "../Components/Counter"
import Chart from "../Components/Chart"

const AdminPage = () => {
  let navigate = useNavigate();
  const API_URL = `${import.meta.env.VITE_WEBSITE_DOMAIN}/jobs`;
  const { apiData, getJobs, deleteJob } = useFetchApi()
  
  useEffect(() => {
    getJobs(API_URL);
  }, [apiData])

  const totalApplications = apiData?.reduce((total : number, job: JobObject) => total + (job.applications?.length || 0), 0) || 0;
  const dates = apiData?.filter((job: JobObject) => job.date).map((job: JobObject) => job.date?.slice(0, 2));
  const xData = dates?.filter((value: string, index: number) => dates?.indexOf(value) === index);
  const yData = dates?.reduce((count: { [key: string]: number }, item: string) => {
    count[item] = (count[item] || 0) + 1;
    return count;
  }, {});

  return (
    <section className="container text-center py-3 sm:py-16 ">
      <div className="flex flex-col gap-1 sm:flex-row justify-between">
        <Counter total={apiData.length} kind="Jobs" />
        <Counter total={totalApplications} kind="Applications" />
      </div>
      <Chart xData={xData} yData={Object.values(yData)} zData={[0, 5, 1]} />
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