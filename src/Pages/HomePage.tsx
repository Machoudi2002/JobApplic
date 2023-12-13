import { useEffect} from "react";
import { JobCard } from "../Components/JobCard"
import useFetchApi from "../hooks/useFetchApi";
import { JobObject } from "../types";

const HomePage = () => { 
  const API_URL = `${import.meta.env.VITE_WEBSITE_DOMAIN}/jobs`;
  const { apiData, getJobs } = useFetchApi()

  useEffect(() => {
    getJobs(API_URL);
  }, [apiData])

  
  return (
    <>
        <section className="container text-center py-20">
            <h1 className="font-extrabold italic text-5xl">Welcome To Our Company</h1>
            <p className="font-mainFont italic my-3">Check the Available Jobs</p>
            <div className="mt-10">
              {
                apiData ? (apiData.map((item: JobObject, i: number) => (
                  <div key={i}>
                    <JobCard 
                      id={item._id}
                      title={item.title}
                      description={item.description}
                      date={item.date}
                    />

                  </div>
                  )
                  )) : <h1>nothing</h1>
              }
              
            </div>
        </section>
    </>
  )
}

export default HomePage