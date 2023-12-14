// JobForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';

interface JobFormProps {
  onSubmit: (data: object) => void;
  defaultValues: { title: string; description: string };
}

const JobForm: React.FC<JobFormProps> = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit } = useForm({ defaultValues });

  return (
    <form
      className="container px-8 py-5 mt-10 bg-whiteBack shadow rounded font-mainFont flex flex-col gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="p-2 border rounded"
        type="text"
        placeholder="Job Title"
        {...register('title', { required: true })}
        defaultValue={defaultValues.title}
      />
      <textarea
        className="p-2 border rounded"
        placeholder="Job Description"
        cols={30}
        rows={10}
        {...register('description', { required: true })}
        defaultValue={defaultValues.description}
      ></textarea>
      <input
        className="p-3 border rounded shadow bg-textColor text-whiteBack cursor-pointer"
        type="submit"
        value="Edit Job Details"
      />
    </form>
  );
};

export default JobForm;
