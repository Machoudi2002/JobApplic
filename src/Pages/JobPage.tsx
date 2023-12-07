import JobInfo from '../Components/JobInfo';
import JobForm from '../Components/JobForm';
import { useParams } from 'react-router-dom';
import useFetchApi from '../hooks/useFetchApi';
import {useEffect } from "react"

const JobPage = () => {
  let { jobId } = useParams();
  const { apiData, getJobById } = useFetchApi();
  const API_URL = `http://localhost:4000/jobs/${jobId}`

  useEffect(() => {
    getJobById(API_URL)
  }, [jobId])
  


  return (
    <>
      <section className='py-20 text-center'>
        <JobInfo
          title={apiData.title}
          description={apiData.description}
        />
        <JobForm API_PUT_URL={API_URL}/>
      </section>
    </>
  );
};

export default JobPage;
