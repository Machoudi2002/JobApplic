import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { jobInfo } from '../types';
import ErrorMessage from './ErrorMessage';

interface FormInput extends jobInfo {}

interface JobFormProps {
  onSubmit: (data: object) => void;
  defaultValues: { title: string; description: string };
  action: string;
}

const JobForm: React.FC<JobFormProps> = ({ onSubmit, defaultValues, action }) => {
  const { 
    register, 
    handleSubmit, 
    setValue, 
    getValues, 
    formState: {errors} } = useForm<FormInput>();

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
        {...register('title', { 
          required: "Title is required", 
          minLength: {
            value: 20,
            message: "Job Title must be at least 20 characters"
          },
          maxLength: {
            value: 40,
            message: "Job Title must be at most 40 characters"
          }
        })}
      />
      {errors.title && <ErrorMessage message={errors.title.message} />}
      <textarea
        className="p-2 border rounded"
        placeholder="Job Description"
        cols={30}
        rows={10}
        {...register('description', { 
          required: "Description is required",
          minLength: {
            value: 200,
            message: "Job description must be at least 100 characters"
          },
          maxLength: {
            value: 400,
            message: "Job description must be less than 400 characters"
          }
          
        })}
      ></textarea>
      {errors.description && <ErrorMessage message={errors.description.message} />}
      <input
        className="p-3 border rounded shadow bg-textColor text-whiteBack cursor-pointer"
        type="submit"
        value={action}
      />
    </form>
  );
};

export default JobForm;
