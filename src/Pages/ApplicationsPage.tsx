import { useEffect } from "react";
import useFetchApi from "../hooks/useFetchApi"
import { useParams } from "react-router-dom";
import ApplicationCard from "../Components/ApplicationCard";
import { jobApp } from "../types";
const ApplicationsPage = () => {
    const { jobId } = useParams();
    let API_POST_URL = `${import.meta.env.VITE_WEBSITE_DOMAIN}/jobs`;
    const { apiData, getJobApps } = useFetchApi();

    useEffect(() => {
        getJobApps(`${API_POST_URL}/${jobId}`)
    }, [])


  return (
    <section className="container">
        <h1 className="font-extrabold italic text-5xl my-10 text-center"> Applications Page</h1>
        {
            apiData ? apiData.map((app: jobApp, i: number) => (
                <div key={i}>
                    <ApplicationCard
                        fullname={app.fullname}
                        email={app.email}
                        phoneNumber={app.phoneNumber}
                        linkedinURL={app.linkedinURL}
                        portfolioURL={app.portfolioURL}
                        experience={app.experience}
                    />
                </div>
            )) : []
        }
    </section>
  )
}

export default ApplicationsPage