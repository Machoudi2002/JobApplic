import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useFetchApi from '../hooks/useFetchApi';
import useSubmitMessage from '../hooks/useSubmitMessage';

const AdminPage: React.FC = () => {
  const { 
    register, 
    handleSubmit, 
    reset,
    formState } = useForm();
  const { postNewJob } = useFetchApi();
  const { submitStatus, submitMessage, submitSuccess} = useSubmitMessage()
  let API_POST_URL= `${import.meta.env.VITE_WEBSITE_DOMAIN}/jobs`

  const onSubmit = (data: any) => {
    postNewJob(API_POST_URL, data)
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
      submitSuccess(
        "New job has been Added successfully",
        true
      )
    }
    
  }, [reset, formState])


  return (
    <div>
      <h1 className='text-center font-extrabold italic text-5xl mt-16'>Post New Job</h1>
      {
        submitStatus ? <h1 className='text-center font-extrabold italic text-5xl mt-16'>{submitMessage}</h1> :
        (
          <form
          className="container px-8 py-5 mt-10 bg-whiteBack shadow rounded font-mainFont flex flex-col gap-3"
          onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="p-2 border rounded"
              type="text"
              placeholder="Job Title"
              {...register('title', { required: true })}
            />
            <textarea
              className="p-2 border rounded"
              placeholder="Job Description"
              cols={30}
              rows={10}
              {...register('description', { required: true })}
            ></textarea>
            <input 
                className="p-3 border rounded shadow bg-textColor text-whiteBack cursor-pointer"
                type="submit" 
                value="Post New Job" />
          </form>
        )
      }
    </div>
  );
};

export default AdminPage;
