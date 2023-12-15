import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface JobFormProps {
  onSubmit: (data: object) => void;
  defaultValues: { title: string; description: string };
}

const JobForm: React.FC<JobFormProps> = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit, setValue, getValues } = useForm();

  useEffect(() => {
    setValue('title', defaultValues.title);
    setValue('description', defaultValues.description);
  }, [defaultValues, setValue]);

  const isFormDirty = () => {
    return (
      getValues('title') !== defaultValues.title ||
      getValues('description') !== defaultValues.description
    );
  };

  const handleFormSubmit = (data: object) => {
    if (isFormDirty()) {
      onSubmit(data);
    } else {
      console.log('Form not submitted as values are unchanged.');
    }
  };

  return (
    <form
      className="container px-8 py-5 mt-10 bg-whiteBack shadow rounded font-mainFont flex flex-col gap-3"
      onSubmit={handleSubmit(handleFormSubmit)}
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
        value="Edit Job Details"
      />
    </form>
  );
};

export default JobForm;
