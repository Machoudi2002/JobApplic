import JobInfo from '../Components/JobInfo';
import JobAppForm from '../Components/JobAppForm';
import { useParams } from 'react-router-dom';
import useFetchApi from '../hooks/useFetchApi';
import { useEffect } from "react"

const JobPage = () => {
  let { jobId } = useParams();
  const { apiData, getJobById } = useFetchApi();
  const API_URL = `${import.meta.env.VITE_WEBSITE_DOMAIN}/jobs/${jobId}`

  useEffect(() => {
    getJobById(API_URL)
  }, [jobId])
  


  return (
    <>
      <section className='py-20 text-center'>
        <JobInfo
          title={apiData.title}
          description={apiData.description}
          date={apiData.date}
        />
        <JobAppForm API_PUT_URL={API_URL}/>
      </section>
    </>
  );
};

export default JobPage;
