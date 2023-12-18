// EditJobPage.tsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetchApi from '../hooks/useFetchApi';
import useSubmitMessage from '../hooks/useSubmitMessage';
import JobForm from '../Components/JobForm';
import SubmitMessageComp from '../Components/SubmitMessageComp';

const EditJobPage: React.FC = () => {
  const { jobId } = useParams();
  const { editJobDetails, getJobById, apiData } = useFetchApi();
  const { submitStatus, submitMessage, submitSuccess} = useSubmitMessage();
  let API_POST_URL = `${import.meta.env.VITE_WEBSITE_DOMAIN}/jobs`;

  const onSubmit = (data: object) => {
    editJobDetails(`${API_POST_URL}/${jobId}`, data);
    submitSuccess(
      "Job details updated successfully",
      true
    )
  };

  useEffect(() => {
    getJobById(`${API_POST_URL}/${jobId}`);
  }, [jobId]);

  return (
    <div>
      <h1 className='text-center font-extrabold italic text-5xl mt-16'>Edit Job Details</h1>
      {submitStatus 
        ? (
        <SubmitMessageComp message={submitMessage} /> 
        ) : 
        <JobForm 
          action='Edit Job Details'
          onSubmit={onSubmit} 
          defaultValues={apiData} 
        />
      }
      
    </div>
  );
};

export default EditJobPage;
