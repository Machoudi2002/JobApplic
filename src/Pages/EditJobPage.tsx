// EditJobPage.tsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetchApi from '../hooks/useFetchApi';
import useSubmitMessage from '../hooks/useSubmitMessage';
import JobForm from '../Components/JobForm';

const EditJobPage: React.FC = () => {
  const { jobId } = useParams();
  const { editJobDetails, getJobById, apiData } = useFetchApi();
  const { submitStatus, submitMessage, submitSuccess } = useSubmitMessage();
  let API_POST_URL = `${import.meta.env.VITE_WEBSITE_DOMAIN}/jobs`;

  const onSubmit = (data: object) => {
    editJobDetails(API_POST_URL, data)
    .then(() => submitSuccess(
      "job details updated successfully",
      true
    ))
    .catch((error) => console.error(error));
  };

  useEffect(() => {
    getJobById(`${API_POST_URL}/${jobId}`);
  }, [jobId]);

  return (
    <div>
      <h1 className='text-center font-extrabold italic text-5xl mt-16'>Post New Job</h1>
      {submitStatus && (
        <h1 className='text-center font-extrabold italic text-5xl mt-16'>
          {submitMessage}
        </h1>
      )}
      <JobForm onSubmit={onSubmit} defaultValues={apiData} />
    </div>
  );
};

export default EditJobPage;
