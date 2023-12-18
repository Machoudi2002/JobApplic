// EditJobPage.tsx
import React from 'react';
import useFetchApi from '../hooks/useFetchApi';
import useSubmitMessage from '../hooks/useSubmitMessage';
import JobForm from '../Components/JobForm';
import SubmitMessageComp from '../Components/SubmitMessageComp';

const EditJobPage: React.FC = () => {
  const { postNewJob } = useFetchApi();
  const { submitStatus, submitSuccess, submitMessage } = useSubmitMessage();
  let API_POST_URL = `${import.meta.env.VITE_WEBSITE_DOMAIN}/jobs`;

  const onSubmit = (data: object) => {
    postNewJob(API_POST_URL, data)
    .then(() => submitSuccess(
      "New Job has been Added successfully",
      true
    ))
    .catch((error) => console.error(error));

  };

  return (
    <div>
      <h1 className='text-center font-extrabold italic text-5xl mt-16'>Post New Job</h1>
      {submitStatus 
        ? (
          <SubmitMessageComp message={submitMessage} />
        ) :
        <JobForm 
          action='Add New Job'
          onSubmit={onSubmit} 
          defaultValues={{
            title: "",
            description: "",
          }} 
        />
      }
    </div>
  );
};

export default EditJobPage;
