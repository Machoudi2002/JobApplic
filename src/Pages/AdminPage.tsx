import React from 'react';
import { useForm } from 'react-hook-form';
import useFetchApi from '../hooks/useFetchApi';

const AdminPage: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const { postNewJob } = useFetchApi();
  let API_POST_URL= "http://localhost:4000/jobs"

  const onSubmit = (data: any) => {
    postNewJob(API_POST_URL, data)
  };

  return (
    <div>
      <h1 className='text-center font-extrabold italic text-5xl mt-16'>Post New Job</h1>
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
    </div>
  );
};

export default AdminPage;
